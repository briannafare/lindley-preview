"use client";

import { useEffect, useState } from "react";
import type { UtmParams } from "./forms";

const STORAGE_KEY = "lindley:utm";
const UTM_KEYS: Array<keyof UtmParams> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

function readFromStorage(): UtmParams {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as UtmParams;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function readFromUrl(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export function useUtm(): UtmParams {
  const [utm, setUtm] = useState<UtmParams>({});

  useEffect(() => {
    const fromUrl = readFromUrl();
    const fromStorage = readFromStorage();
    const merged = { ...fromStorage, ...fromUrl };
    if (Object.keys(fromUrl).length > 0) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {
        // ignore storage errors (private mode, quota)
      }
    }
    setUtm(merged);
  }, []);

  return utm;
}
