"use client";

import { useState, useCallback } from "react";

interface CalcResults {
  monthlyPayment: number;
  principal: number;
  interest: number;
  taxes: number;
  insurance: number;
  pmi: number;
  totalPayment: number;
  totalInterest: number;
}

export default function MortgageCalculator({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxes, setTaxes] = useState(5000);
  const [insurance, setInsurance] = useState(1500);
  const [results, setResults] = useState<CalcResults | null>(null);

  const calculate = useCallback(() => {
    const downPayment = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyRate = rate / 100 / 12;
    const numPayments = term * 12;

    const monthlyPI =
      monthlyRate === 0
        ? loanAmount / numPayments
        : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);

    const monthlyTaxes = taxes / 12;
    const monthlyInsurance = insurance / 12;
    const monthlyPMI = downPaymentPct < 20 ? (loanAmount * 0.005) / 12 : 0;
    const totalMonthly = monthlyPI + monthlyTaxes + monthlyInsurance + monthlyPMI;
    const totalInterest = monthlyPI * numPayments - loanAmount;

    setResults({
      monthlyPayment: totalMonthly,
      principal: monthlyPI - (loanAmount * monthlyRate),
      interest: loanAmount * monthlyRate,
      taxes: monthlyTaxes,
      insurance: monthlyInsurance,
      pmi: monthlyPMI,
      totalPayment: totalMonthly,
      totalInterest,
    });
  }, [homePrice, downPaymentPct, rate, term, taxes, insurance]);

  // Calculate on first render
  useState(() => {
    calculate();
  });

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const downPayment = homePrice * (downPaymentPct / 100);
  const loanAmount = homePrice - downPayment;

  return (
    <div className="bg-white rounded-[2rem] border border-border p-8">
      <h3 className="font-display text-xl font-bold mb-1">
        Portland Mortgage Calculator
      </h3>
      <p className="text-sm text-ink-light mb-6">
        Estimate your monthly payment for a home in Portland, Oregon.
      </p>

      <div className="space-y-6">
        {/* Home Price */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink">
              Home Price
            </label>
            <span className="font-display text-lg font-bold">
              {formatCurrency(homePrice)}
            </span>
          </div>
          <input
            type="range"
            min={100000}
            max={2000000}
            step={10000}
            value={homePrice}
            onChange={(e) => {
              setHomePrice(Number(e.target.value));
              calculate();
            }}
            className="w-full accent-orange"
          />
          <div className="flex justify-between text-[0.65rem] text-ink-light mt-1">
            <span>$100k</span>
            <span>$2M</span>
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink">
              Down Payment
            </label>
            <span className="font-display text-lg font-bold">
              {downPaymentPct}% ({formatCurrency(downPayment)})
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={40}
            step={1}
            value={downPaymentPct}
            onChange={(e) => {
              setDownPaymentPct(Number(e.target.value));
              calculate();
            }}
            className="w-full accent-orange"
          />
          <div className="flex justify-between text-[0.65rem] text-ink-light mt-1">
            <span>0%</span>
            <span>40%</span>
          </div>
        </div>

        {/* Rate & Term */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink block mb-2">
              Interest Rate
            </label>
            <div className="flex items-center border border-border rounded-xl px-3 py-2">
              <input
                type="number"
                value={rate}
                step={0.125}
                min={0}
                max={15}
                onChange={(e) => {
                  setRate(Number(e.target.value));
                  calculate();
                }}
                className="w-full text-sm font-semibold bg-transparent outline-none"
              />
              <span className="text-ink-light text-sm ml-1">%</span>
            </div>
          </div>
          <div>
            <label className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink block mb-2">
              Loan Term
            </label>
            <div className="flex gap-2">
              {[15, 20, 30].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTerm(t);
                    calculate();
                  }}
                  className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
                    term === t
                      ? "bg-ink text-white"
                      : "border border-border text-ink-mid hover:border-ink"
                  }`}
                >
                  {t}yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {variant === "full" && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink block mb-2">
                Annual Taxes
              </label>
              <div className="flex items-center border border-border rounded-xl px-3 py-2">
                <span className="text-ink-light text-sm mr-1">$</span>
                <input
                  type="number"
                  value={taxes}
                  step={100}
                  onChange={(e) => {
                    setTaxes(Number(e.target.value));
                    calculate();
                  }}
                  className="w-full text-sm font-semibold bg-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink block mb-2">
                Annual Insurance
              </label>
              <div className="flex items-center border border-border rounded-xl px-3 py-2">
                <span className="text-ink-light text-sm mr-1">$</span>
                <input
                  type="number"
                  value={insurance}
                  step={100}
                  onChange={(e) => {
                    setInsurance(Number(e.target.value));
                    calculate();
                  }}
                  className="w-full text-sm font-semibold bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {results && (
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center mb-6">
            <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-light mb-1">
              Estimated Monthly Payment
            </p>
            <p className="font-display text-[3rem] font-extrabold text-ink leading-none">
              {formatCurrency(results.monthlyPayment)}
            </p>
            <p className="text-sm text-ink-light mt-1">
              on a {formatCurrency(loanAmount)} loan
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-ink-mid">Principal & Interest</span>
              <span className="font-semibold">
                {formatCurrency(results.principal + results.interest)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ink-mid">Property Taxes</span>
              <span className="font-semibold">
                {formatCurrency(results.taxes)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ink-mid">Insurance</span>
              <span className="font-semibold">
                {formatCurrency(results.insurance)}
              </span>
            </div>
            {results.pmi > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-ink-mid">PMI</span>
                <span className="font-semibold text-orange">
                  {formatCurrency(results.pmi)}
                </span>
              </div>
            )}
            <div className="flex justify-between text-sm pt-2 border-t border-border">
              <span className="text-ink-mid">Total Interest ({term} years)</span>
              <span className="font-semibold">
                {formatCurrency(results.totalInterest)}
              </span>
            </div>
          </div>

          {downPaymentPct < 20 && (
            <div className="mt-4 p-3 bg-yellow/30 rounded-xl">
              <p className="text-[0.78rem] text-ink-mid">
                <strong>Tip:</strong> Putting 20% down eliminates PMI and saves
                you {formatCurrency(results.pmi)}/mo.
              </p>
            </div>
          )}

          {/* GHL CTA */}
          <div className="mt-6 text-center">
            <p className="text-sm text-ink-mid mb-3">
              Want exact numbers based on today&apos;s rates?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:scale-[1.03] transition-all"
            >
              Get Your Free Rate Quote <span>→</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
