import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsNE: NeighborhoodData[] = [
  {
    slug: "beaumont-wilshire",
    name: "Beaumont-Wilshire",
    city: "Portland",
    state: "OR",
    description: [
      "Beaumont Village on NE Fremont Street is about four blocks long and has been the same four blocks for decades. Empire Provisions does charcuterie and sandwiches. Beaumont Hardware is still there. Some of the best independent retail left in inner NE Portland, none of it national chains. The residential streets east of NE 33rd Ave are quiet in the way that feels earned — mature street trees, kids on bikes, neighbors who actually know each other's names.",
      "The housing is mostly 1910s through 1940s: Craftsmans, bungalows, and the occasional Dutch Colonial. Lots are mid-sized, houses are well-maintained, and the neighborhood has one of the lowest turnover rates in Portland. Fernwood Middle School is the feeder for Grant High, which is the most sought-after comprehensive high school in PPS. That pipeline matters to buyers with kids, and it's priced into the houses.",
      "Low turnover cuts both ways. You won't find much inventory, and when something comes up, you're competing with buyers who've been waiting. Median prices have pushed past $700k, and the lower end of the range doesn't stay on market long. If you need to buy quickly, Beaumont is not a patient neighborhood. Come in with a lender letter ready and your terms tight.",
    ],
    personality: "Fremont Street shops, quiet streets, zero for-sale signs",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Beaumont+Wilshire+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Beaumont+Wilshire+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 74,
    bikeScore: 82,
    transitScore: 54,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Beaumont Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Fernwood Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
      { name: "Beverly Cleary School", type: "elementary", grades: "K–5", rating: 7 },
    ],
    parks: [
      {
        name: "Wilshire Park",
        amenities: ["basketball courts", "playground", "open lawn", "picnic area"],
      },
      {
        name: "Beaumont Park",
        amenities: ["playground", "open lawn", "quiet neighborhood green"],
      },
    ],
    restaurants: [
      {
        name: "Empire Provisions",
        cuisine: "Deli / Charcuterie",
        vibe: "Excellent sandwiches and house-cured meats on Fremont — worth the line at lunch",
      },
      {
        name: "Tabla Mediterranean Bistro",
        cuisine: "Mediterranean",
        vibe: "Neighborhood dinner spot on Fremont, reliable and well-priced for the quality",
      },
      {
        name: "Gado Gado",
        cuisine: "Indonesian",
        vibe: "One of Portland's best restaurants, period — the peanut sauce is the reason people drive here from other neighborhoods",
      },
    ],
    coffee: [
      {
        name: "Anchor Coffee",
        vibe: "Small, neighborhood-loyal, NE Fremont — regulars leave their mugs on the shelf",
      },
      {
        name: "Stumptown Coffee Roasters",
        vibe: "Closest location is on Belmont but worth noting — the NE crowd ends up here on weekends",
      },
    ],
    bars: [
      {
        name: "The Bye and Bye",
        vibe: "Vegan bar on Alberta — not in the neighborhood but where Beaumont residents go when they want actual nightlife",
      },
      {
        name: "Fremont Station",
        vibe: "Low-key neighborhood bar on Fremont, not a destination, but it's yours if you live nearby",
      },
    ],
    medianHomePrice: 710000,
    priceRange: { low: 560000, high: 1100000 },
    commuteToDowntown:
      "20–25 min by car, 25 min by bike via NE Broadway or the Sullivan's Gulch trail, 35 min on bus Line 75",
    faqs: [
      {
        q: "Why is Beaumont-Wilshire so expensive?",
        a: "Low supply, high demand, and a school pipeline that buyers will pay for. The Grant High attendance boundary brings buyers who want a strong public high school option without paying private school tuition. When you combine that with genuinely few listings and a neighborhood that rarely sees turnover, prices stay elevated. You're not buying a house — you're buying into a long-term hold.",
      },
      {
        q: "What's the commute like from Beaumont-Wilshire to downtown?",
        a: "Driving is 20–25 minutes outside of rush hour and 30–40 with traffic on NE Broadway or NE 33rd. Biking the Sullivan's Gulch path to the Lloyd District and across the Steel or Burnside Bridge takes about 25 minutes. Bus service exists but isn't fast — the 75 line runs along Fremont and connects to MAX at the Lloyd Center.",
      },
      {
        q: "What are the schools like in Beaumont-Wilshire?",
        a: "Beverly Cleary (elementary) and the Grant High pipeline are the draws. Grant is one of PPS's more functional comprehensive high schools — strong electives, competitive sports programs, and a student body that broadly reflects NE Portland. Like all Portland public schools, individual classroom experiences vary by year and teacher. The boundary has shifted before; verify your address feeds where you expect before buying.",
      },
      {
        q: "How competitive is the Beaumont-Wilshire housing market?",
        a: "Very. Houses that are correctly priced and in good condition routinely attract multiple offers. The inventory is chronically low — some years fewer than 40 homes sell in the entire neighborhood. If you're a serious buyer, get your financing locked in before you start looking. Coming in pre-approved but without a rate lock is how people lose houses here.",
      },
    ],
    testimonials: [
      {
        quote:
          "We lost three houses before we got this one. Bri helped us tighten up our offer structure — shorter inspection period, escalation clause with a hard cap, strong earnest money. The fourth house, we got it at $38k over asking and we don't regret a dollar.",
        author: "Sarah and Tom K.",
        context: "Bought in Beaumont-Wilshire, 2023, purchase price $748,000",
      },
      {
        quote:
          "I've owned my house on NE 37th for eleven years. Did a cash-out refi last spring to fund a rental purchase. Bri ran the whole thing cleanly — no surprises at closing, rate was better than I expected given the market.",
        author: "David M.",
        context: "Cash-out refinance, Beaumont-Wilshire, 2024",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc"],
    adjacentNeighborhoods: ["alameda", "rose-city-park", "hollywood", "irvington"],
    seo: {
      title: "Buying a Home in Beaumont-Wilshire, Portland OR | The Lindley Team",
      description:
        "Honest guide to Beaumont-Wilshire real estate: home prices, schools, Grant High, and what buyers actually need to know. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "alameda",
    name: "Alameda",
    city: "Portland",
    state: "OR",
    description: [
      "Alameda Ridge runs diagonally across NE Portland, and on a clear day from the upper streets you can see both Mt. Hood and Mt. St. Helens at the same time. The streets curve around the hillside — they don't follow the Portland grid — which gives the neighborhood an unusual physical presence for a city this flat. Houses from the 1920s and 1930s: large Craftsmans, Tudor Revivals, and a few Colonial Revivals that look slightly out of place and are usually the most expensive things on the block.",
      "Alameda Elementary has a strong reputation within PPS and is one of the reasons families target this specific neighborhood over adjacent Beaumont-Wilshire. There's no commercial district inside Alameda itself — for coffee or dinner you're driving or biking to NE Fremont Street to the west, which is lined with the Beaumont Village shops. That's not a complaint from most residents; it keeps the neighborhood genuinely quiet. Streets are wide, parking is easy, and Friday nights don't have bar noise.",
      "The price point is real: the floor on a single-family home in Alameda is around $750k, and the ceiling on a well-restored large Craftsman has broken $1.4 million more than once. Buyers who come in expecting Beaumont prices and find themselves looking at Alameda listings are usually surprised in the wrong direction. These are not starter homes. If you're looking at a jumbo loan threshold, you're looking at Alameda.",
    ],
    personality: "Hilltop Craftsmans with mountain views and zero commercial noise",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Alameda+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Alameda+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 68,
    bikeScore: 72,
    transitScore: 48,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Alameda Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Fernwood Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Alameda Park",
        amenities: ["playground", "open lawn", "quiet residential park"],
      },
      {
        name: "Grant Park",
        amenities: ["outdoor pool", "tennis courts", "playground", "picnic shelters", "open lawn"],
      },
    ],
    restaurants: [
      {
        name: "Gado Gado",
        cuisine: "Indonesian",
        vibe: "Five minutes west on Fremont — one of Portland's best, worth the trip every time",
      },
      {
        name: "Tabla Mediterranean Bistro",
        cuisine: "Mediterranean",
        vibe: "Reliable neighborhood dinner on Fremont, been a local anchor for years",
      },
      {
        name: "Irving Street Kitchen",
        cuisine: "American",
        vibe: "More of a drive to NW but where Alameda residents go for a proper date night",
      },
    ],
    coffee: [
      {
        name: "Anchor Coffee",
        vibe: "Closest true neighborhood coffee shop, NE Fremont — small, locals only",
      },
      {
        name: "Water Avenue Coffee",
        vibe: "Better beans, worth driving for on a weekend morning",
      },
    ],
    bars: [
      {
        name: "The Cleaners at the Ace",
        vibe: "Not nearby but where Alameda's younger crowd ends up on weekends",
      },
      {
        name: "Fremont Station",
        vibe: "Walking distance, unpretentious, exactly what a neighborhood bar should be",
      },
    ],
    medianHomePrice: 820000,
    priceRange: { low: 750000, high: 1450000 },
    commuteToDowntown:
      "22–28 min by car, 30 min by bike via NE 33rd to Sullivan's Gulch trail, limited direct bus service",
    faqs: [
      {
        q: "What makes Alameda homes so expensive compared to nearby neighborhoods?",
        a: "Location on the ridge, large lot sizes, quality of original construction, and the school zone. Alameda Elementary is one of the better-regarded elementary schools in PPS, and the houses are genuinely bigger than what you find in adjacent neighborhoods. You're also buying into a neighborhood that has maintained its character for 80 years. That stability costs money.",
      },
      {
        q: "Do I need a jumbo loan to buy in Alameda?",
        a: "Probably, yes. The conforming loan limit for 2025 is $806,500. With most Alameda houses priced above $800k and a standard down payment, you'll be in jumbo territory. Jumbo loans have different underwriting requirements — typically tighter debt-to-income limits and sometimes higher reserves. We work jumbo loans regularly and can walk you through exactly what you'll need.",
      },
      {
        q: "Is Alameda walkable?",
        a: "Less than you might expect for inner NE Portland. The hillside location means you're biking or driving to Fremont Street for coffee or groceries rather than walking. It's not a car-free lifestyle neighborhood the way Buckman or Alberta is. If you're buying in Alameda, you're buying for the house, the schools, and the views — not the walk score.",
      },
      {
        q: "How are the schools in Alameda?",
        a: "Alameda Elementary has a consistently strong reputation within PPS — rated higher than most Portland elementary schools and with active parent involvement. Fernwood feeds into Grant High, which is one of the more stable and comprehensive PPS high schools. As always with PPS, verify boundaries before purchasing — attendance zones have shifted.",
      },
    ],
    testimonials: [
      {
        quote:
          "We moved from San Francisco and were used to jumbo loans, but Oregon's process was different than we expected. Bri explained the reserve requirements and DTI thresholds clearly upfront. Closed at $1.1M without drama.",
        author: "Rachel and James P.",
        context: "Jumbo purchase, Alameda, 2024",
      },
      {
        quote:
          "Used equity from the Alameda house to buy a rental in St. Johns. Bri structured the HELOC so the numbers actually worked instead of just telling me what I wanted to hear.",
        author: "Michael O.",
        context: "HELOC, Alameda, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "heloc", "refinance"],
    adjacentNeighborhoods: ["beaumont-wilshire", "rose-city-park", "irvington", "hollywood"],
    seo: {
      title: "Buying a Home in Alameda, Portland OR | The Lindley Team",
      description:
        "Alameda real estate guide: hilltop Craftsmans, mountain views, Alameda Elementary, and what jumbo buyers need to know. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "rose-city-park",
    name: "Rose City Park",
    city: "Portland",
    state: "OR",
    description: [
      "Rose City Golf Course runs along the western edge of the neighborhood — 18 holes operated by the city, open to the public, and surrounded by some of the most underpriced housing in inner NE Portland. The residential streets between NE 57th and NE 72nd are mostly 1920s and 1930s bungalows: small front yards, covered porches, and the occasional larger Craftsman that someone bought for $180k in 2001 and renovated well. The neighborhood sits between Hollywood to the west and Beaumont-Wilshire to the north, which means the bones are similar but the prices are not.",
      "Hollywood Transit Center is close enough that the MAX Red and Green lines are genuinely useful from here. Buyers who are priced out of Irvington often land in Rose City Park and find the housing type is nearly identical — same bungalow stock, same era, similar street scale — for meaningfully less money. That story has been true for a decade and the gap is narrowing. The commercial options are thin inside the neighborhood itself, but Sandy Blvd and the Hollywood district shops and restaurants are a short bike ride away.",
      "The trade-offs are real. NE Sandy Boulevard is loud if you're on a block close to it, and the closer you get to the Hollywood district, the more the neighborhood transitions toward apartment density. The golf course is a strong boundary on the west side, but it also means the blocks on NE Halsey and NE Glisan near 57th have consistent cut-through traffic from the course. School options are PPS standard — Rose City Park Elementary feeds into Grant High via Beaumont Middle.",
    ],
    personality: "Irvington bungalows, three zip codes cheaper",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Rose+City+Park+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Rose+City+Park+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 72,
    bikeScore: 80,
    transitScore: 64,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Rose City Park Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Beaumont Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Rose City Golf Course",
        amenities: ["18-hole public golf course", "walking paths along perimeter"],
      },
      {
        name: "Rose City Park",
        amenities: ["playground", "open lawn", "picnic area"],
      },
    ],
    restaurants: [
      {
        name: "Luce",
        cuisine: "Italian",
        vibe: "Neighborhood Italian on NE 28th, close enough to be the answer for a Tuesday dinner out",
      },
      {
        name: "Pastini",
        cuisine: "Italian",
        vibe: "Casual, reliable, and the kids eat everything on the menu",
      },
      {
        name: "Cricket Cafe",
        cuisine: "Breakfast",
        vibe: "Breakfast on Belmont — the line moves, the food justifies it",
      },
    ],
    coffee: [
      {
        name: "Heart Coffee Roasters",
        vibe: "Closest specialty roaster, worth the short drive to NE 22nd location",
      },
      {
        name: "Stumptown Coffee Roasters",
        vibe: "Belmont location is the neighborhood default for weekend mornings",
      },
    ],
    bars: [
      {
        name: "The Hollywood Theatre Bar",
        vibe: "Bar attached to the Hollywood Theatre — you stay for a beer after the movie and end up closing it down",
      },
      {
        name: "Tanuki",
        vibe: "Izakaya on NE Burnside, short bike ride, strong cocktails",
      },
    ],
    medianHomePrice: 555000,
    priceRange: { low: 420000, high: 780000 },
    commuteToDowntown:
      "25–30 min by car, 20 min by MAX Red/Green line from Hollywood TC, 25 min by bike via NE Broadway",
    faqs: [
      {
        q: "How is Rose City Park different from Beaumont-Wilshire?",
        a: "The housing stock is similar — same bungalow era, same lot sizes, comparable condition on the renovated ones — but Rose City Park is roughly $150k cheaper at the median. The trade-off is proximity to Sandy Blvd and the Hollywood district, which adds traffic and noise on some blocks. If the Grant High school boundary matters to you, confirm your specific address because parts of Rose City Park feed differently.",
      },
      {
        q: "Is the MAX useful from Rose City Park?",
        a: "Yes, more than most inner NE neighborhoods. Hollywood Transit Center is walking or biking distance from most of the neighborhood. The Red Line goes to the airport and the Green Line covers the Lloyd District, downtown, and Powell. If you work downtown or in the Lloyd District and don't need a car for work, Rose City Park is one of the more transit-functional inner NE options.",
      },
      {
        q: "What's the catch with Rose City Park's lower price?",
        a: "Proximity to Sandy Blvd on the western edge, which is a commercial corridor with some grit. A few blocks near the Hollywood TC feel more urban-transitional than the deep residential streets near the golf course. It's not dangerous — it's just not as quiet as Beaumont or Alameda. Know which blocks you're buying on before you make an offer.",
      },
      {
        q: "Are there FHA-eligible homes in Rose City Park?",
        a: "Yes. The price range here includes a lot of homes in the $420k–$600k range that work well for FHA financing. Most are single-family detached, which clears the property eligibility bar easily. The main FHA consideration in this price range is making sure the house passes the FHA appraisal — older bungalows sometimes have deferred maintenance that triggers conditions.",
      },
    ],
    testimonials: [
      {
        quote:
          "We kept losing in Beaumont and Irvington. Bri suggested we look at Rose City Park and we were skeptical. Ended up buying on NE 62nd for $537k — three bedrooms, garage, original hardwoods. We would have paid $700k for the same house eight blocks west.",
        author: "Nadia and Chris F.",
        context: "First-time buyers, Rose City Park, 2023",
      },
      {
        quote:
          "FHA loan, 3.5% down, first house. Bri walked us through every step and never made us feel like we were a less serious buyer than the conventional loan people.",
        author: "Erin S.",
        context: "FHA purchase, Rose City Park, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance"],
    adjacentNeighborhoods: ["beaumont-wilshire", "hollywood", "alameda", "sabin"],
    seo: {
      title: "Buying a Home in Rose City Park, Portland OR | The Lindley Team",
      description:
        "Rose City Park real estate: bungalows near the golf course, MAX access, and better prices than adjacent neighborhoods. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "hollywood",
    name: "Hollywood",
    city: "Portland",
    state: "OR",
    description: [
      "The Hollywood Theatre on NE Sandy Boulevard has been showing films since 1926 and is still independently operated — repertory cinema, first runs, and a bar inside. It's the neighborhood's most important landmark and a good signal of what Hollywood District is at its best: old bones repurposed well. Sandy Boulevard is the commercial spine from NE 33rd to around NE 52nd, and it runs the full range from genuinely excellent restaurants to check-cashing storefronts within four blocks of each other. You take the strip as a whole or you don't take it.",
      "Hollywood Transit Center sits at NE 42nd and Halsey and is one of the most functional transit hubs in east Portland — MAX Red and Green lines, eight TriMet bus routes, and covered waiting areas. For buyers who work downtown or at OHSU and don't want to drive, this is one of the few NE neighborhoods where transit is a real alternative. The housing mix is broader than most NE neighborhoods: single-family 1920s–1950s homes on the residential streets, 1990s and 2000s condo buildings closer to Sandy, and enough newer apartment complexes to keep the neighborhood's density visible.",
      "Hollywood's median for single-family homes sits around $480k, but the neighborhood's reputation is mixed enough that buyers with options sometimes skip it. The blocks east of NE 42nd toward the transit center have more foot traffic and some of the grit that comes with commercial density. A few blocks off Sandy in either direction and it quiets down considerably. It's not a neighborhood you buy into without knowing which end of Sandy you're on.",
    ],
    personality: "Transit-first, Sandy Blvd grit, Hollywood Theatre is worth it",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Hollywood+District+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Hollywood+District+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 85,
    bikeScore: 82,
    transitScore: 78,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Beverly Cleary School", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Laurelhurst School", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Grant Park",
        amenities: ["outdoor pool", "tennis courts", "playground", "large open lawn", "picnic shelters"],
      },
      {
        name: "Normandale Park",
        amenities: ["playground", "open lawn", "picnic area"],
      },
    ],
    restaurants: [
      {
        name: "Pok Pok",
        cuisine: "Thai",
        vibe: "The Sandy Blvd location — still one of Portland's best known restaurants, loud and worth every minute of the wait",
      },
      {
        name: "Renata",
        cuisine: "Italian",
        vibe: "Not in Hollywood but where the neighborhood goes for a special occasion — worth knowing",
      },
      {
        name: "Tusk",
        cuisine: "American / Vegetable-forward",
        vibe: "Dinner spot on Sandy, creative menu, locals-first vibe",
      },
    ],
    coffee: [
      {
        name: "Coava Coffee Roasters",
        vibe: "The Sandy location is newer and less iconic than Grand Ave, but the coffee is identical and the line is shorter",
      },
      {
        name: "Never Coffee",
        vibe: "NE neighborhood stalwart, small space, strong lattes, familiar faces",
      },
    ],
    bars: [
      {
        name: "The Hollywood Theatre Bar",
        vibe: "Connected to the cinema — stay for a beer after the film, become a regular without trying",
      },
      {
        name: "Quaintrelle",
        vibe: "Wine bar on NE 28th, quieter than most options near Sandy",
      },
    ],
    medianHomePrice: 480000,
    priceRange: { low: 350000, high: 750000 },
    commuteToDowntown:
      "20 min by MAX Red/Green line from Hollywood TC, 25 min by car, 22 min by bike via NE Broadway",
    faqs: [
      {
        q: "Is Hollywood District a good place to buy a home?",
        a: "Depends on the block and what you're optimizing for. If transit access matters, it's one of the best-positioned neighborhoods in NE Portland. The residential streets a few blocks off Sandy are genuinely quiet and well-priced. The streets adjacent to the transit center or right on Sandy have more density and traffic. Do a weekday evening walk before you make an offer — the neighborhood shows itself honestly.",
      },
      {
        q: "What are the condo and multi-family options like in Hollywood?",
        a: "More than most NE neighborhoods. There are 1990s–2000s condo buildings within a few blocks of the transit center, plus newer apartment complexes along Sandy. Condo pricing starts around $250k for smaller units. FHA and conventional both work for condos here, though HOA dues and condo document reviews add time to the process. We handle condo loans regularly and know what to look for.",
      },
      {
        q: "How does the MAX affect home values in Hollywood?",
        a: "It's a genuine asset for buyers who use it, and it's priced in on the blocks closest to Hollywood TC. The trade-off is that MAX corridors also bring pedestrian traffic and commercial density that not every buyer wants. Houses one to three blocks off the main Sandy/Halsey corridor get the transit proximity without the street-level noise.",
      },
      {
        q: "What's the school situation in Hollywood?",
        a: "The Grant High boundary covers most of Hollywood District, and Grant is one of PPS's better-functioning comprehensive high schools. Elementary options include Beverly Cleary and Laurelhurst School, both of which have solid reputations. Middle school feeds through the same PPS system as the rest of NE. Confirm your specific address with PPS boundary maps before buying.",
      },
    ],
    testimonials: [
      {
        quote:
          "I specifically wanted to be close to the MAX for work. Bri helped me understand the difference between the blocks that feel urban-loud versus the ones that are just transit-convenient. Got a two-bed on NE 46th for $467k and I bike to the Hollywood TC in four minutes.",
        author: "Jason W.",
        context: "First-time buyer, Hollywood District, 2023",
      },
      {
        quote:
          "Divorce situation — needed to refinance the house into my name only within a tight timeline. Bri moved it through without making it more complicated than it needed to be. Closed in 28 days.",
        author: "Karen B.",
        context: "Divorce refinance, Hollywood District, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "divorce-lending"],
    adjacentNeighborhoods: ["beaumont-wilshire", "rose-city-park", "sabin", "laurelhurst"],
    seo: {
      title: "Buying a Home in Hollywood District, Portland OR | The Lindley Team",
      description:
        "Hollywood District real estate: MAX access, Sandy Blvd, and honest home prices. What buyers need to know before purchasing in NE Portland's transit hub. The Lindley Team.",
    },
  },

  {
    slug: "sabin",
    name: "Sabin",
    city: "Portland",
    state: "OR",
    description: [
      "Sabin Community Garden on NE 14th is one of the largest community gardens in Portland — over 200 plots, a long waiting list, and the kind of place that actually explains a neighborhood. The people who tend it have been there for years. Sabin sits between NE Alberta Street to the north and NE Fremont to the south, which means you're one or two blocks from two of the better commercial streets in inner NE without being in either Alberta Arts District or Beaumont Village. That positioning is exactly why Sabin works as a neighborhood.",
      "The housing is dense: bungalows on 25x100-foot lots, built mostly in the 1920s and 1930s, sitting close to each other and close to the sidewalk. It's not the spacious Craftsman on a 7,000-square-foot lot that you find in Alameda. Sabin houses are smaller, the yards are narrow, and parking is always a project. But you can walk to coffee on NE 15th, walk to dinner on Alberta, and be at NE Fremont shops without getting in your car. The trade-off is real and intentional.",
      "Street parking is genuinely difficult on residential blocks near Alberta. Summer weekends, when Alberta and its adjacent streets fill up with people from other neighborhoods, the parking crunch extends into Sabin blocks that used to be reliable. Buyers coming from the suburbs should understand this before purchase — off-street parking adds real value here. The median is around $560k, which is fair for inner NE Portland, but Sabin has seen some of the fastest appreciation in the area over the last five years.",
    ],
    personality: "One block from Alberta, half the noise, most of the walkability",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Sabin+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Sabin+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 83,
    bikeScore: 90,
    transitScore: 68,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Sabin Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 4 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Sabin Community Garden",
        amenities: ["200+ community garden plots", "composting area", "tool sharing"],
      },
      {
        name: "Fernhill Park",
        amenities: ["playground", "sports fields", "picnic area", "walking paths"],
      },
    ],
    restaurants: [
      {
        name: "Ox Restaurant",
        cuisine: "Argentine / Wood-fire",
        vibe: "One of Portland's best restaurants, Alberta Arts District — a short walk from most Sabin streets",
      },
      {
        name: "Tusk",
        cuisine: "American / Vegetable-forward",
        vibe: "Good dinner, thoughtful menu, rotating seasonal focus",
      },
      {
        name: "Luce",
        cuisine: "Italian",
        vibe: "Reliable, not trying too hard, the right call on a Tuesday",
      },
    ],
    coffee: [
      {
        name: "Never Coffee",
        vibe: "NE neighborhood institution — strong espresso, small space, regulars run the show",
      },
      {
        name: "Stumptown Coffee Roasters",
        vibe: "Belmont location is the closest outpost; many Sabin residents make the trip weekly",
      },
    ],
    bars: [
      {
        name: "The Bye and Bye",
        vibe: "Vegan bar on NE Alberta — the patio in summer is where this neighborhood goes to be social",
      },
      {
        name: "Expatriate",
        vibe: "NE 30th Ave cocktail bar, lower key than Alberta spots, worth knowing",
      },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 430000, high: 790000 },
    commuteToDowntown:
      "18–25 min by car, 22 min by bike via NE Broadway or the Sullivan's Gulch path, 35 min on bus Line 72",
    faqs: [
      {
        q: "How does Sabin compare to buying in the Alberta Arts District?",
        a: "Sabin is usually $30k–$80k cheaper than an equivalent house on the Alberta side of the street. The commercial noise and weekend foot traffic are lower because you're not on Alberta itself. You get walkability to Alberta without the summer circus. The trade-off is that the school boundaries for Sabin feed into Jefferson rather than Grant for high school — that matters to some buyers significantly.",
      },
      {
        q: "What are Sabin's schools like?",
        a: "Honest answer: the school picture is more complicated here than in Beaumont or Alameda. Sabin Elementary is solid for PPS. The high school boundary is Jefferson for much of Sabin, and Jefferson's academic profile is weaker than Grant's. Some Sabin families use PPS's transfer process to access Grant or other high schools — that process has a waitlist and isn't guaranteed. If the high school assignment matters, get the exact boundary confirmed for the specific address you're buying.",
      },
      {
        q: "Is parking really that bad in Sabin?",
        a: "On the blocks between NE 10th and NE 18th, yes, especially from May through September when Alberta draws visitors. If you're looking at a house without a garage or dedicated off-street parking, budget for the reality that you'll sometimes park two or three blocks from home on a Friday night. Houses with a driveway or garage carry a real premium here for exactly this reason.",
      },
      {
        q: "What's the Sabin Community Garden wait time?",
        a: "The waitlist has historically been 2–4 years depending on plot size. It's one of the longest in Portland. There are smaller neighborhood gardens nearby, and several Sabin homeowners have good-sized backyard growing space. It's a neighborhood detail worth knowing — if garden access is part of your lifestyle, plan for the wait.",
      },
    ],
    testimonials: [
      {
        quote:
          "We wanted Alberta walkability without the Alberta price. Bri showed us three Sabin houses in one afternoon, explained the school boundary situation clearly, and we made an offer the same day. Closed for $547k, one block from NE 15th coffee.",
        author: "Theo and Margot L.",
        context: "Purchase, Sabin, 2023",
      },
      {
        quote:
          "Used a cash-out refinance to do the kitchen remodel we'd been putting off. Bri helped us figure out whether it made more sense than a HELOC given our timeline. Straightforward process, no surprises.",
        author: "Dana K.",
        context: "Cash-out refinance, Sabin, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "heloc", "cash-out"],
    adjacentNeighborhoods: ["alberta-arts", "rose-city-park", "hollywood", "cully", "irvington"],
    seo: {
      title: "Buying a Home in Sabin, Portland OR | The Lindley Team",
      description:
        "Sabin neighborhood real estate: bungalows near Alberta, community garden, and honest school info. What buyers need to know. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "cully",
    name: "Cully",
    city: "Portland",
    state: "OR",
    description: [
      "Cully Park finally opened in 2021 after nearly two decades of community advocacy — 25 acres of green space on land that was a former gravel pit, with a covered outdoor stage, community garden plots, and a skate feature. It's the largest new park Portland has built in years, and it belongs to a neighborhood that waited a long time for it. Cully is Portland's largest neighborhood by area, running roughly from NE Alberta Street north to Prescott, and from NE 42nd east to NE 72nd. It does not feel like one neighborhood — it feels like six different blocks arranged in a loose grid, some of them fully settled residential and some of them still working out what they are.",
      "The housing is more varied than most inner Portland neighborhoods: post-war ranches, original bungalows, some newer construction infill, and a stretch along Columbia Blvd that transitions into industrial. There are blocks in Cully that feel like mid-century suburban Portland — wide lots, mature trees, garages, backyards that actually function. There are also blocks where a vinyl-sided rental abuts a storage facility. The southern half of Cully, near Alberta, tends to be more settled; the northern portions near Prescott and Columbia feel more in-transition. The Latino community that has anchored Cully for decades has maintained cultural businesses — taquerias, a Mexican grocery — that give the neighborhood genuine character.",
      "Cully is the most affordable neighborhood in inner NE Portland, and that attracts investor buyers who are active in the market. When a distressed house comes up below $400k, it gets multiple offers from people who will wholesale it or flip it — which can mean competing against cash buyers as a financed purchaser. The FHA and conventional markets are functional here in the $380k–$550k range, but you need to understand which blocks you're on, what the property condition triggers might be on an appraisal, and where Cully is going rather than just where it's been.",
    ],
    personality: "Portland's biggest neighborhood: affordable, uneven, genuinely itself",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Cully+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Cully+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 63,
    bikeScore: 78,
    transitScore: 57,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Rigler Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Faubion School", type: "elementary", grades: "K–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 4 },
    ],
    parks: [
      {
        name: "Cully Park",
        amenities: [
          "25-acre park",
          "covered outdoor stage",
          "community garden",
          "skate feature",
          "walking paths",
          "open lawn",
        ],
      },
      {
        name: "Whitaker Ponds Nature Park",
        amenities: ["ponds", "wildlife habitat", "nature trails", "birdwatching"],
      },
    ],
    restaurants: [
      {
        name: "Por Que No?",
        cuisine: "Mexican",
        vibe: "Beloved Portland taqueria — Alberta location is the nearest but worth the short drive from any Cully block",
      },
      {
        name: "Taqueria Los Gorditos",
        cuisine: "Mexican",
        vibe: "In-neighborhood tacos, cash-friendly, no tourist markup, exactly what the neighborhood has been doing for years",
      },
      {
        name: "Lovely's Fifty Fifty",
        cuisine: "Pizza / Ice Cream",
        vibe: "Mississippi Ave — not in Cully but a regular destination for the northern edge of the neighborhood",
      },
    ],
    coffee: [
      {
        name: "Coava Coffee Roasters",
        vibe: "Nearest quality coffee roaster — Cully residents make the drive to the Sandy location for good beans",
      },
      {
        name: "Case Study Coffee",
        vibe: "Closest specialty coffee shop with a sit-down vibe, Lloyd District location",
      },
    ],
    bars: [
      {
        name: "Breakside Brewery",
        vibe: "The Dekum location in Concordia is Cully's nearest craft brewery with a real taproom",
      },
      {
        name: "The Alibi",
        vibe: "North Portland tiki bar, a drive from Cully but an institution — worth going once",
      },
    ],
    medianHomePrice: 450000,
    priceRange: { low: 350000, high: 620000 },
    commuteToDowntown:
      "25–35 min by car depending on traffic, 30 min by bike via NE 42nd to Sullivan's Gulch, 40 min on bus Line 71 or 72",
    faqs: [
      {
        q: "Is Cully safe?",
        a: "It's a mixed picture. The residential streets in the southern half of Cully, closer to Alberta, are settled and quiet. Some northern blocks near Columbia Blvd have more crime incidents — check Portland's crime data maps rather than relying on neighborhood reputation alone. Like any large, economically mixed neighborhood, Cully varies block by block. A two-block difference can be a meaningful difference.",
      },
      {
        q: "Why are Cully homes cheaper than nearby NE neighborhoods?",
        a: "Larger neighborhood, more varied housing quality, less walkable commercial density, and a reputation that hasn't fully followed the physical improvements being made. Cully Park opening, the Concordia Brewing taproom on the southern edge, and continued infill development are closing the gap. The discount is real but it's compressing. What you buy in Cully for $430k today would have been $350k five years ago and might be $500k in five more.",
      },
      {
        q: "How do investor buyers affect the Cully market?",
        a: "Meaningfully, especially at the lower price points. Houses priced under $400k in distressed condition often attract cash offers from wholesale buyers and flippers. As a financed buyer, you can compete — but you need a fast pre-approval, strong earnest money, and realistic expectations on inspection flexibility. We've helped financed buyers win in Cully; it requires the offer to be clean and the lender to be fast.",
      },
      {
        q: "What's the Cully Park development story?",
        a: "The land sat as a gravel pit for decades while the community advocated for a park. After nearly 20 years of advocacy and $15M in funding, Cully Park opened in 2021. It's now one of the best neighborhood parks in NE Portland — 25 acres, designed with community input, with a skate feature, stage, and garden. It's the kind of investment that changes a neighborhood's trajectory. Buyers paying attention to long arcs should notice it.",
      },
    ],
    testimonials: [
      {
        quote:
          "We had $390k to spend and didn't think we could buy anything decent in inner NE. Bri walked us through Cully specifically — showed us which streets to focus on and why. We bought a solid three-bed on NE 57th for $378k. The neighbors have lived there for 20 years.",
        author: "Megan and Roy T.",
        context: "First-time buyers, Cully, 2023",
      },
      {
        quote:
          "VA loan, no down payment, bought on NE 52nd for $415k. Bri handled the VA appraisal process — there were a couple of flagged items on the property and she worked through it without panicking. Closed on time.",
        author: "Staff Sgt. Andre M. (ret.)",
        context: "VA purchase, Cully, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "investment", "refinance"],
    adjacentNeighborhoods: ["sabin", "alberta-arts", "kenton", "rose-city-park", "hollywood"],
    seo: {
      title: "Buying a Home in Cully, Portland OR | The Lindley Team",
      description:
        "Cully neighborhood real estate: Portland's largest and most affordable inner NE neighborhood. Honest guide to prices, blocks, schools, and what buyers need to know. The Lindley Team.",
    },
  },
];
