/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // ── Common WordPress page redirects ────────────────────────────────────
      { source: "/home/", destination: "/", permanent: true },
      { source: "/services-2/", destination: "/services", permanent: true },
      { source: "/mortgage-calculator/", destination: "/calculator", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/blog-2/", destination: "/blog", permanent: true },
      { source: "/neighborhoods-portland/", destination: "/neighborhoods", permanent: true },
      { source: "/get-to-know-portland/", destination: "/neighborhoods", permanent: true },

      // ── Blog post redirects from WordPress ────────────────────────────────
      { source: '/exploring-spousal-identity-theft-and-its-ramifications-on-divorce-proceedings', destination: '/blog/spousal-identity-theft-divorce', permanent: true },
      { source: '/the-underestimated-financial-fallout-why-divorcing-spouses-often-overlook-the-impact-on-their-financial-and-credit-profiles', destination: '/blog/financial-fallout-divorce-credit', permanent: true },
      { source: '/the-primary-misunderstanding-about-divorce-mortgage-planning-with-a-certified-divorce-lending-professional', destination: '/blog/divorce-mortgage-planning-cdlp', permanent: true },
      { source: '/cdlp-divorce-mortgage-planning-and-real-property-detail-report', destination: '/blog/cdlp-real-property-detail-report', permanent: true },
      { source: '/mortgage-this-5-tips-for-working-with-mortgage-brokers', destination: '/blog/tips-working-mortgage-brokers', permanent: true },
      { source: '/navigating-the-residential-mortgage-market-a-guide', destination: '/blog/navigating-residential-mortgage-market', permanent: true },
      { source: '/is-refinance-mortgage-to-a-15-year-better-than-making-extra-payments', destination: '/blog/refinance-15-year-vs-extra-payments', permanent: true },
      { source: '/what-are-mortgage-points-and-how-do-they-affect-interest-rates', destination: '/blog/mortgage-points-interest-rates', permanent: true },
      { source: '/how-a-mortgage-report-can-help-you-understand-your-refinancing-options', destination: '/blog/mortgage-report-refinancing-options', permanent: true },
      { source: '/getting-a-mortgage-without-a-credit-score-your-complete-guide', destination: '/blog/mortgage-without-credit-score', permanent: true },
      { source: '/are-mortgage-refinance-rates-worth-it-tips-to-save-you-serious-money', destination: '/blog/mortgage-refinance-rates-worth-it', permanent: true },
      { source: '/using-government-home-loans-for-your-next-purchase-everything-you-need-to-know-2', destination: '/blog/government-home-loans-guide-2', permanent: true },
      { source: '/adjustable-rate-mortgages-versus-fixed-rate-mortgages-whats-right-for-you', destination: '/blog/adjustable-rate-vs-fixed-rate', permanent: true },
      { source: '/what-is-a-mortgage-refinance-in-plain-english-2', destination: '/blog/mortgage-refinance-plain-english', permanent: true },
      { source: '/private-mortgage-insurance-is-neither-good-nor-bad-2', destination: '/blog/private-mortgage-insurance-good-bad', permanent: true },
      { source: '/using-government-home-loans-for-your-next-purchase-everything-you-need-to-know', destination: '/blog/government-home-loans-guide', permanent: true },
      { source: '/what-is-interest-rate-volatility-your-guide', destination: '/blog/interest-rate-volatility-guide', permanent: true },
      { source: '/before-you-put-a-20-percent-down-payment-on-a-house-read-this-2', destination: '/blog/20-percent-down-payment-2', permanent: true },
      { source: '/before-you-put-a-20-percent-down-payment-on-a-house-read-this', destination: '/blog/20-percent-down-payment', permanent: true },
      { source: '/a-beginners-guide-to-understanding-mortgage-refinance-options', destination: '/blog/beginners-guide-refinance-options', permanent: true },
      { source: '/3-surprisingly-simple-ways-to-stop-paying-private-mortgage-insurance-pmi', destination: '/blog/stop-paying-pmi', permanent: true },
      { source: '/a-comprehensive-guide-to-the-ins-and-outs-of-private-mortgage-insurance-pmi', destination: '/blog/comprehensive-guide-pmi', permanent: true },
      { source: '/what-are-interest-rates-and-how-do-they-affect-mortgage-payments', destination: '/blog/interest-rates-affect-mortgage-payments', permanent: true },

      // ── Neighborhood redirects ─────────────────────────────────────────────

      // sellwood-moreland
      { source: "/sellwood-moreland/", destination: "/neighborhoods/sellwood-moreland", permanent: true },
      { source: "/get-to-know-portland/sellwood-moreland-mortgage-lender/", destination: "/neighborhoods/sellwood-moreland", permanent: true },

      // alberta-arts-district
      { source: "/alberta-arts-district/", destination: "/neighborhoods/alberta-arts-district", permanent: true },
      { source: "/get-to-know-portland/alberta-arts-district-mortgage-lender/", destination: "/neighborhoods/alberta-arts-district", permanent: true },

      // pearl-district
      { source: "/pearl-district/", destination: "/neighborhoods/pearl-district", permanent: true },
      { source: "/get-to-know-portland/pearl-district-mortgage-lender/", destination: "/neighborhoods/pearl-district", permanent: true },

      // st-johns
      { source: "/st-johns/", destination: "/neighborhoods/st-johns", permanent: true },
      { source: "/get-to-know-portland/st-johns-mortgage-lender/", destination: "/neighborhoods/st-johns", permanent: true },

      // irvington
      { source: "/irvington/", destination: "/neighborhoods/irvington", permanent: true },
      { source: "/get-to-know-portland/irvington-mortgage-lender/", destination: "/neighborhoods/irvington", permanent: true },

      // hawthorne
      { source: "/hawthorne/", destination: "/neighborhoods/hawthorne", permanent: true },
      { source: "/get-to-know-portland/hawthorne-mortgage-lender/", destination: "/neighborhoods/hawthorne", permanent: true },

      // mississippi-avenue
      { source: "/mississippi-avenue/", destination: "/neighborhoods/mississippi-avenue", permanent: true },
      { source: "/get-to-know-portland/mississippi-avenue-mortgage-lender/", destination: "/neighborhoods/mississippi-avenue", permanent: true },

      // lake-oswego
      { source: "/lake-oswego/", destination: "/neighborhoods/lake-oswego", permanent: true },
      { source: "/get-to-know-portland/lake-oswego-mortgage-lender/", destination: "/neighborhoods/lake-oswego", permanent: true },

      // beaverton
      { source: "/beaverton/", destination: "/neighborhoods/beaverton", permanent: true },
      { source: "/get-to-know-portland/beaverton-mortgage-lender/", destination: "/neighborhoods/beaverton", permanent: true },

      // multnomah-village
      { source: "/multnomah-village/", destination: "/neighborhoods/multnomah-village", permanent: true },
      { source: "/get-to-know-portland/multnomah-village-mortgage-lender/", destination: "/neighborhoods/multnomah-village", permanent: true },
    ];
  },
};

export default nextConfig;
