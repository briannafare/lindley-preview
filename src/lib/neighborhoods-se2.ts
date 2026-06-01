import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsSE2: NeighborhoodData[] = [
  {
    slug: "concordia",
    name: "Concordia",
    city: "Portland",
    state: "OR",
    description: [
      "NE Alberta Street runs right through the southern edge of Concordia, so you get the independent coffee shops and restaurants without paying Alberta Arts District prices. Extracto is a ten-minute walk. The Last Thursday crowds are within range if you want them, far enough away if you don't. The old Concordia University campus — the Lutheran school that closed in 2020 — sits at NE 28th and Killingsworth. Parts of it have been converted to housing and community use; the main building still looks like a college campus dropped into a residential neighborhood, which is exactly what it is.",
      "The housing is mostly bungalows from the 1920s and 1940s — smaller lots, smaller square footage than what you'd find in Irvington, but the same architectural era. People buy here when they lose a bidding war on a house in Alberta proper and then realize this was the better deal all along. The blocks between NE 33rd and NE 42nd are the core residential streets. Gardening is taken seriously here — front yards tend to be planted, not just mowed. Community garden plots fill up years in advance.",
      "Killingsworth Street east of 33rd is rougher than the residential blocks, and there's a noticeable drop-off in walkability once you're east of 42nd. The schools in the attendance area are mid-tier within PPS — not the district's worst, not the best. Inventory is limited and buyers who discover this neighborhood often get competitive fast. The good news is that the price gap from Alberta has been shrinking for several years, which means entry points are still meaningfully lower but the discount won't last forever.",
    ],
    personality: "Alberta's quieter neighbor, where the deals still occasionally exist",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Concordia+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Concordia+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 72,
    bikeScore: 87,
    transitScore: 53,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Faubion School", type: "elementary", grades: "PK–8", rating: 6 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Concordia Park",
        amenities: ["baseball field", "playground", "open lawn", "picnic tables"],
      },
      {
        name: "Vernon Park",
        amenities: ["community garden", "playground", "open space"],
      },
      {
        name: "Columbia Park",
        amenities: ["tennis courts", "sports fields", "walking paths"],
      },
    ],
    restaurants: [
      {
        name: "Tabor Bread",
        cuisine: "Bakery/Cafe",
        vibe: "Wood-fired whole-grain breads and breakfast, SE Hawthorne — slightly out of neighborhood but the draw is real",
      },
      {
        name: "Eem",
        cuisine: "Thai-BBQ",
        vibe: "Thai barbecue on NE Alberta, James Beard recognition, worth the wait",
      },
      {
        name: "Proud Mary",
        cuisine: "Australian-style cafe",
        vibe: "NE Alberta brunch spot, good coffee, get there before 10am on weekends",
      },
    ],
    coffee: [
      {
        name: "Extracto Coffee Roasters",
        vibe: "Excellent single-origin roaster on NE Killingsworth, regulars take it for granted, visitors are always surprised",
      },
      {
        name: "Either/Or",
        vibe: "Small, focused, NE Alberta — treats the craft seriously without being precious about it",
      },
    ],
    bars: [
      {
        name: "The Bye and Bye",
        vibe: "Vegan cocktail bar on NE Alberta, hanging plants, been doing its thing since before it was trendy",
      },
      {
        name: "Prost!",
        vibe: "German beer hall on Mississippi Ave nearby, good for a group, loud in the best way",
      },
    ],
    medianHomePrice: 520000,
    priceRange: { low: 400000, high: 750000 },
    commuteToDowntown:
      "25–30 min by car, 35+ in rush hour via Burnside Bridge; 20 min by bike; 40 min on the 72 bus",
    faqs: [
      {
        q: "How is Concordia different from the Alberta Arts District?",
        a: "They share the Alberta commercial strip on the south edge of Concordia, but Concordia is its own neighborhood — quieter residential streets, smaller bungalows, and prices that run $50k–$100k below comparable houses in Alberta proper. It's where buyers who lose Alberta deals often end up, and many say the trade was worth it.",
      },
      {
        q: "What happened to Concordia University?",
        a: "The Lutheran liberal arts college on NE 28th closed in 2020 after financial difficulties. The campus has been partially redeveloped into housing and community space. The main buildings still stand and give the area a distinctive look. It's not a negative for the neighborhood — the campus is genuinely attractive — but buyers should know the full block isn't traditional residential.",
      },
      {
        q: "How much does a home cost in Concordia?",
        a: "Median is around $520,000. Most houses trade between $400k and $650k. Smaller 2-bedroom bungalows in need of work can still come in under $450k. Well-maintained 3-bedrooms on the core residential streets are typically $525k–$650k. Competition exists but it's not as intense as Alberta or Irvington.",
      },
      {
        q: "What are the schools like in Concordia?",
        a: "Mid-range for Portland Public Schools. Faubion is an interesting option — it's a PK–8 school co-located with a Lewis & Clark graduate education program, which brings resources. Jefferson High School is the attendance-area high school and has been through significant changes; families who stay with PPS through high school often look at Benson Polytechnic or other option schools.",
      },
    ],
    testimonials: [
      {
        quote:
          "We lost three offers in Alberta before Bri suggested we look at Concordia. Found a 1928 bungalow for $498,000 — two blocks from the same coffee shop we were fighting traffic to visit anyway.",
        author: "Priya & James M.",
        context: "Bought in Concordia, 2023",
      },
      {
        quote:
          "First-time buyer, budget was firm at $480k. Bri was honest that Alberta was mostly out of reach at that number and steered me toward Concordia without making me feel like I was settling. Closed at $467,000.",
        author: "Tyler S.",
        context: "First purchase in Concordia, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["alberta-arts", "concordia", "kenton", "irvington"],
    seo: {
      title: "Buying a Home in Concordia, Portland OR | The Lindley Team",
      description:
        "Real talk on Concordia real estate: home prices near Alberta Arts District, schools, commute, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "creston-kenilworth",
    name: "Creston-Kenilworth",
    city: "Portland",
    state: "OR",
    description: [
      "Powell Blvd on the north end of this neighborhood is what it is: a wide commercial arterial with car dealerships, tire shops, fast food, and a few unremarkable strip malls. Don't let that drive by define the neighborhood. Turn south on SE 26th or SE 34th and the streets change immediately. Wide tree-lined blocks, 1940s and 1950s working-class houses with genuine front yards, the kind of neighborhood where people still leave things on their porch overnight. Creston Park anchors the center of it — one of Portland's best neighborhood parks, with a public outdoor pool that opens in summer and fills up with kids from a six-block radius.",
      "The housing stock here is honest. These were built as working-class homes and many have been in the same families for decades. Larger lots than you'd find in Richmond or Sunnyside — 5,500 to 7,000 square feet is common. Ranch-style houses from the 1950s alongside Cape Cods and small bungalows. Buyers who prioritize square footage and yard space over address prestige figure this out faster than most. SE 26th Avenue between Powell and Holgate is a modest but functional commercial strip: a few restaurants, a bakery, a hardware store.",
      "The honest assessment: this neighborhood doesn't have the cachet of Sunnyside or Richmond, and the schools at the high school level are a real consideration. SE Powell is the first thing people see, and it shapes perception unfairly. Buyer competition is lower here than comparable SE Portland neighborhoods, which is partly the Powell effect and partly the distance from the inner SE core. That gap has been narrowing and will continue to.",
    ],
    personality: "SE Portland's best-kept non-secret, priced for people who actually look",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Creston-Kenilworth+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Creston-Kenilworth+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 68,
    bikeScore: 80,
    transitScore: 55,
    schoolDistrict: "Portland Public Schools",
    schools: [
      {
        name: "Creston Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 5,
      },
      {
        name: "Kellogg Middle School",
        type: "middle",
        grades: "6–8",
        rating: 5,
      },
      {
        name: "Cleveland High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
    ],
    parks: [
      {
        name: "Creston Park",
        amenities: [
          "outdoor pool",
          "baseball fields",
          "playground",
          "picnic shelters",
          "tennis courts",
        ],
      },
      {
        name: "Kenilworth Park",
        amenities: ["open lawn", "playground", "community garden plots"],
      },
    ],
    restaurants: [
      {
        name: "Cha Cha Cha",
        cuisine: "Mexican",
        vibe: "On SE Division nearby, reliable Mexican, the kind of neighborhood spot that's been there so long it stopped needing to try",
      },
      {
        name: "Bollywood Theater",
        cuisine: "Indian street food",
        vibe: "SE Division, counter service, genuinely good food, lines out the door on weekends",
      },
      {
        name: "Reverend's BBQ",
        cuisine: "BBQ/Southern",
        vibe: "SE Milwaukie, real pit barbecue, counter order, one of Portland's better BBQ stops",
      },
    ],
    coffee: [
      {
        name: "Stumptown Coffee",
        vibe: "SE Belmont flagship nearby — the place that launched Portland's coffee identity, still worth going",
      },
      {
        name: "Case Study Coffee",
        vibe: "SE Grand location nearby, serious single-origin program, quieter than downtown locations",
      },
    ],
    bars: [
      {
        name: "Horse Brass Pub",
        vibe: "SE Belmont institution, 50-tap British-style pub, been there since 1976, wood paneling and all",
      },
      {
        name: "Apex",
        vibe: "SE Division, 50-tap bottle shop and bar, outdoor space, no food so you order in — a Portland institution",
      },
    ],
    medianHomePrice: 440000,
    priceRange: { low: 340000, high: 620000 },
    commuteToDowntown:
      "20–25 min by car; 25 min by bike via SE Division or Hawthorne routes; 35–40 min on the 9-Powell or 10-Harold bus",
    faqs: [
      {
        q: "Why is Creston-Kenilworth more affordable than other SE Portland neighborhoods?",
        a: "Mostly perception: SE Powell Blvd on the north edge isn't attractive, and the neighborhood doesn't have the name recognition of Sunnyside or Richmond. The residential streets behind Powell are genuinely nice, and the housing stock is solid. Buyers who look past the Powell frontage tend to feel like they found something most people missed.",
      },
      {
        q: "What is Creston Park like?",
        a: "One of SE Portland's best neighborhood parks. The outdoor pool is a community anchor in summer — public, free on some days, and well-maintained. There are baseball fields, tennis courts, a playground, and picnic shelters. It fills up but rarely feels overcrowded because the neighborhood isn't as dense as inner SE.",
      },
      {
        q: "What do homes cost in Creston-Kenilworth?",
        a: "Median is around $440,000. Most single-family houses trade between $370k and $550k. You can still find a 3-bedroom 1950s ranch on a 6,000 sq ft lot in the low $400s if you move quickly. That's meaningfully below comparable houses in Sunnyside, Richmond, or Sellwood.",
      },
      {
        q: "How are the schools in Creston-Kenilworth?",
        a: "Creston Elementary and Kellogg Middle are below the PPS average on most metrics. Cleveland High School — the attendance-area high school — is one of PPS's stronger comprehensives and pulls this picture up considerably at the high school level. Many families use PPS option schools for K–8 while staying in the neighborhood.",
      },
    ],
    testimonials: [
      {
        quote:
          "We had $420,000 and were getting killed in Sunnyside and Richmond. Bri walked us through Creston-Kenilworth honestly — she didn't oversell it, told us exactly what Powell was like. We bought a 1952 ranch on a big lot for $408,000. Zero regrets.",
        author: "Sandra & Mark P.",
        context: "Bought in Creston-Kenilworth, 2022",
      },
      {
        quote:
          "I'm a single buyer, needed three bedrooms for a home office. Everything in inner SE was $550k+. Found a house in Creston-Kenilworth for $435,000 and Bri structured the FHA loan so my payment is less than I was paying in rent.",
        author: "Dani R.",
        context: "First purchase in Creston-Kenilworth, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: [
      "richmond",
      "sunnyside",
      "foster-powell",
      "brooklyn",
      "lents",
    ],
    seo: {
      title: "Buying a Home in Creston-Kenilworth, Portland OR | The Lindley Team",
      description:
        "Honest guide to Creston-Kenilworth real estate: home prices, Creston Park, schools, and commute. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "lents",
    name: "Lents",
    city: "Portland",
    state: "OR",
    description: [
      "The MAX Green Line stops at SE Foster and 92nd — Lents/Foster station — and puts you at PSU in 28 minutes and PDX in 36. That's a legitimate transit commute in a city where transit is often more aspiration than reality. SE Foster Road has changed over the past decade: Hey Love is a hotel bar that draws people from across Portland, and the Foster-Powell restaurant corridor between 50th and 72nd has genuine range. Lents Park, the neighborhood anchor, has sports fields, a community garden, and hosts the Lents International Farmers Market in season.",
      "The housing here is Portland's most affordable mix of single-family stock that still has decent bones. 1940s and 1950s working-class houses, some with garages and actual yard space, on streets that are genuinely quiet once you're off the main arterials. Lents Town Center has been in development discussion and partial construction for years — there's a mix of new affordable housing, some commercial space, and long-planned improvements that move slowly. The industrial land to the northeast keeps some streets from being purely residential in character.",
      "Investor activity in Lents is real and ongoing. Cash buyers from outside the neighborhood cycle through frequently, which matters if you're financing — you will lose some deals to cash offers. Portland's property crime statistics in outer SE run higher than inner SE, and Lents is no exception; that's the honest picture. What the neighborhood offers in return is the lowest price point for a freestanding house that still has functional access to the city — and the MAX connection is real infrastructure, not just a park-and-ride.",
    ],
    personality: "Outer SE's entry point, with a MAX line and a legitimate upside case",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Lents+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Lents+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 60,
    bikeScore: 73,
    transitScore: 58,
    schoolDistrict: "Portland Public Schools",
    schools: [
      {
        name: "Lents Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 4,
      },
      {
        name: "Harold Oliver Intermediate",
        type: "elementary",
        grades: "3–5",
        rating: 4,
      },
      {
        name: "Lane Middle School",
        type: "middle",
        grades: "6–8",
        rating: 4,
      },
      {
        name: "David Douglas High School",
        type: "high",
        grades: "9–12",
        rating: 5,
      },
    ],
    parks: [
      {
        name: "Lents Park",
        amenities: [
          "baseball fields",
          "soccer fields",
          "community garden",
          "playground",
          "farmers market (seasonal)",
          "basketball courts",
        ],
      },
      {
        name: "Lents Town Center Plaza",
        amenities: ["open plaza", "community events space"],
      },
    ],
    restaurants: [
      {
        name: "Hey Love",
        cuisine: "Pacific Northwest/Bar",
        vibe: "Hotel bar at The Jupiter Next, SE Foster — tropical drinks, good food, draws a citywide crowd to outer SE",
      },
      {
        name: "Taqueria Los Gorditos",
        cuisine: "Mexican",
        vibe: "SE Division location nearby, outstanding tacos, one of Portland's best Mexican spots at any price",
      },
      {
        name: "Jade Teahouse & Patisserie",
        cuisine: "Cafe/Pastry",
        vibe: "SE Woodstock, solid neighborhood cafe, good baked goods, not pretentious",
      },
    ],
    coffee: [
      {
        name: "Water Avenue Coffee",
        vibe: "SE Grand roaster, one of Portland's best — a bit of a drive from Lents but worth keeping in rotation",
      },
      {
        name: "Deadstock Coffee",
        vibe: "SE Foster area, hip hop culture and good espresso — SE Foster's contribution to Portland coffee",
      },
    ],
    bars: [
      {
        name: "Horse Brass Pub",
        vibe: "SE Belmont classic, technically neighboring area, but closest quality pub to Lents — 50 taps, been open since 1976",
      },
      {
        name: "Apex",
        vibe: "SE Division bottle shop and bar, 50-tap, outdoor space, a real destination from Lents on a bike",
      },
    ],
    medianHomePrice: 390000,
    priceRange: { low: 290000, high: 540000 },
    commuteToDowntown:
      "28 min on MAX Green Line; 25–30 min by car outside rush hour; 40+ min by car in rush hour",
    faqs: [
      {
        q: "Is Lents a good investment neighborhood?",
        a: "The fundamentals are in place: MAX access, Lents Town Center development, low entry prices, and a larger lot sizes than inner SE. The honest risk is that 'in development' has described parts of Lents Town Center for over a decade — things move slowly. For investors who can hold 7–10 years and have cash, the thesis is reasonable. For owner-occupants financing at today's rates, it's a lower-competition entry into Portland homeownership.",
      },
      {
        q: "What is the MAX access from Lents like?",
        a: "The Green Line at Lents/Foster is real, reliable service — PSU in 28 minutes, PDX in 36, downtown Morrison in 22. It's one of the better transit connections in outer SE Portland and is the primary reason many buyers prioritize Lents over comparable neighborhoods without MAX access.",
      },
      {
        q: "What do homes cost in Lents?",
        a: "Median around $390,000 for a single-family residence. Fixer-uppers and smaller houses still trade in the high $200s to low $300s. A solid 3-bedroom with a functional kitchen and yard runs $380k–$470k. Cash offers from investors are common and competitive on anything under $400k in good condition.",
      },
      {
        q: "How are the schools in Lents?",
        a: "Below the Portland average on most metrics. Lents Elementary and Lane Middle School both rate around 4 out of 10 on GreatSchools. David Douglas High School is the attendance-area high school — it's a large school with career technical programs, rated around a 5. Families with school-age kids typically evaluate PPS option schools and charter options seriously before buying.",
      },
    ],
    testimonials: [
      {
        quote:
          "I needed to stop renting and had $330,000 to work with in Portland. Bri was honest that my options were limited but real — we found a 1948 house in Lents for $315,000. I'm building equity instead of paying someone else's mortgage.",
        author: "Kevin O.",
        context: "First purchase in Lents, 2023",
      },
      {
        quote:
          "Investment property, bought at $298,000 in 2022. Bri walked me through the numbers including realistic vacancy and repair reserves. She didn't just tell me what I wanted to hear.",
        author: "Marie T.",
        context: "Investment property in Lents, 2022",
      },
    ],
    relatedServices: ["purchase", "fha", "investment", "cash-out"],
    adjacentNeighborhoods: [
      "foster-powell",
      "creston-kenilworth",
      "brentwood-darlington",
      "reed",
    ],
    seo: {
      title: "Buying a Home in Lents, Portland OR | The Lindley Team",
      description:
        "Honest guide to Lents real estate: Portland's most affordable inner SE neighborhood with MAX access. Prices, schools, and investment picture. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "reed",
    name: "Reed",
    city: "Portland",
    state: "OR",
    description: [
      "Reed College's campus has a canyon in the middle of it. Crystal Springs Creek runs through a wooded ravine that students use for trail runs, and the canyon is open to the public — you can walk it on a weekday morning and mostly have it to yourself. The college's nuclear reactor, TRIGA Mark I, is operational and run by students. It's one of only two student-operated research reactors in the country. The campus buildings are early 20th-century collegiate gothic, and the whole institution has a long-standing reputation for academic intensity and individualism. It shapes the surrounding neighborhood in visible ways: the coffee shops have a certain clientele, the bookshop matters, the weekly farmer's market draws people who care about that kind of thing.",
      "Woodstock Boulevard is the commercial main street. Woodstock Wine & Deli has been a neighborhood institution for decades — good charcuterie, good wine selection, not precious about it. Tails & Trails at SE Woodstock and 45th draws the dog crowd. The housing on the blocks immediately surrounding the college is a mix of faculty-owned Craftsmans, rentals in various states of upkeep, and 1920s single-family homes that have aged at different rates. SE 28th Place to SE 38th between Woodstock and Steele is the most desirable residential section — prices reflect it.",
      "Student rentals keep a proportion of the neighborhood's housing in a perpetual maintenance negotiation. If you're buying, look at the immediate block carefully. Proximity to campus drives up prices for owner-occupants competing with families of students willing to pay for location. SE Division access to the east via SE 39th adds convenience but also traffic noise on the edges. The school picture here is stronger than much of SE Portland — Cleveland High School is the attendance area high school and is consistently one of PPS's better options.",
    ],
    personality: "College-town neighborhood with a canyon, a reactor, and a good wine shop",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Reed+Neighborhood+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Reed+Neighborhood+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 70,
    bikeScore: 84,
    transitScore: 55,
    schoolDistrict: "Portland Public Schools",
    schools: [
      {
        name: "Woodstock Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 6,
      },
      {
        name: "Sellwood Middle School",
        type: "middle",
        grades: "6–8",
        rating: 6,
      },
      {
        name: "Cleveland High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
    ],
    parks: [
      {
        name: "Reed College Canyon",
        amenities: [
          "creek trail",
          "old-growth trees",
          "wildlife habitat",
          "open to public",
        ],
      },
      {
        name: "Crystal Springs Rhododendron Garden",
        amenities: [
          "rhododendron collection",
          "duck pond",
          "walking paths",
          "seasonal admission",
        ],
      },
      {
        name: "Westmoreland Park",
        amenities: [
          "sports fields",
          "casting pond",
          "playground",
          "disc golf",
        ],
      },
    ],
    restaurants: [
      {
        name: "Woodstock Wine & Deli",
        cuisine: "Deli/Wine",
        vibe: "SE Woodstock neighborhood institution, charcuterie and wine you don't have to overthink, been there forever",
      },
      {
        name: "Gado Gado",
        cuisine: "Indonesian",
        vibe: "SE Division, one of Portland's best restaurants full stop — Indonesian family cooking, book ahead",
      },
      {
        name: "Ava Gene's",
        cuisine: "Vegetable-forward Italian",
        vibe: "SE Division, James Beard recognized, vegetable-forward dinner — the kind of place you bring someone you want to impress",
      },
    ],
    coffee: [
      {
        name: "Stumptown Coffee",
        vibe: "SE Belmont original location, the one that started Portland's coffee reputation — small, wood-paneled, no laptop circus",
      },
      {
        name: "Tails & Trails",
        vibe: "SE Woodstock, dog-and-coffee combination shop — works better than the concept sounds, neighborhood regulars",
      },
    ],
    bars: [
      {
        name: "Horse Brass Pub",
        vibe: "SE Belmont institution, 50 taps, British pub character, been the neighborhood anchor since 1976",
      },
      {
        name: "Backyard Social",
        vibe: "SE Division, good cocktails, extensive backyard patio, neighborhood crowd on weeknights",
      },
    ],
    medianHomePrice: 580000,
    priceRange: { low: 440000, high: 850000 },
    commuteToDowntown:
      "25–30 min by car; 20–25 min by bike via SE Division or Hawthorne; 35–45 min on the 14-Hawthorne or 75-Cesar Chavez bus",
    faqs: [
      {
        q: "Can you visit Reed College's campus?",
        a: "Yes, the canyon trail and Crystal Springs Creek area are open to the public. The nuclear reactor has public open house events a few times per year — they fill up fast. The campus grounds are walkable and the buildings worth seeing if you're considering the neighborhood.",
      },
      {
        q: "Is the Reed neighborhood good for families?",
        a: "Yes, with some specificity. Woodstock Elementary and Cleveland High School are both solid within PPS. The canyon and Crystal Springs Rhododendron Garden give real outdoor access. The student rental factor is real — specific blocks near campus are noisier and less well-maintained. Target the residential streets between SE 28th and SE 38th south of Woodstock for the best family housing.",
      },
      {
        q: "What does a home cost in the Reed neighborhood?",
        a: "Median around $580,000. The range is wide — smaller Craftsmans and post-war houses south of the college can come in at $450k–$500k. Well-maintained 1920s houses close to the college or near Woodstock Blvd trade at $600k–$750k. Faculty housing and owner-occupied houses near the campus grounds command premiums.",
      },
      {
        q: "How does the Reed neighborhood compare to Woodstock or Eastmoreland?",
        a: "Eastmoreland is more expensive and more uniform in housing quality. Woodstock to the north is more commercial. Reed sits between — it has the walkability of Woodstock commercial access, some of the architectural character of Eastmoreland, with a lower price point than either for equivalent condition. The college is both the draw and the source of the rental inventory management issue.",
      },
    ],
    testimonials: [
      {
        quote:
          "We were set on Eastmoreland but couldn't justify the $750k+ prices. Bri pointed out that Reed gives you access to the same high school and similar housing stock at a real discount. We paid $565,000 for a house we love.",
        author: "Greg & Alison F.",
        context: "Bought in Reed neighborhood, 2023",
      },
      {
        quote:
          "Faculty member at Reed, needed to buy near campus. Bri understood the competitive dynamics — faculty competing with investor-buyers near campus — and helped me move fast. Closed in 22 days.",
        author: "Dr. Sarah W.",
        context: "Faculty purchase in Reed, 2024",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance"],
    adjacentNeighborhoods: [
      "woodstock",
      "eastmoreland",
      "sellwood-moreland",
      "creston-kenilworth",
      "lents",
    ],
    seo: {
      title: "Buying a Home in Reed, Portland OR | The Lindley Team",
      description:
        "Guide to the Reed neighborhood in SE Portland: home prices, Reed College campus access, schools, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "brentwood-darlington",
    name: "Brentwood-Darlington",
    city: "Portland",
    state: "OR",
    description: [
      "SE 52nd Avenue runs north-south through the middle of Brentwood-Darlington and is the neighborhood's main organizing street. At the north end it connects to Foster Road; at the south end it runs toward Woodstock and eventually Milwaukie. The commercial options on 52nd are modest: a few convenience stores, a laundromat, some auto services, a handful of restaurants. You drive to Foster or Powell for anything beyond basics. The neighborhood is quiet in the genuine sense — not the real estate brochure sense. Streets in here on a Tuesday afternoon are essentially empty.",
      "The housing is 1950s and 1960s ranches and split-levels on lots that run 6,000 to 8,000 square feet, sometimes larger. These are real lots — room for a garden, room for a dog, room to put up a fence. The construction is functional rather than architectural: aluminum siding, attached garages, original windows that haven't been updated since the Carter administration on some houses. Buyers who know how to evaluate a house and don't mind a project can find genuine value here. The square footage per dollar is among the best in Portland proper.",
      "The schools in this attendance area rate below the Portland average at every level — that's not an opinion, it's the data. Barbur Blvd is the western edge of the neighborhood and is a freeway-speed arterial with noise and no pedestrian environment. The neighborhood is not walkable — you need a car. There is no MAX or frequent-service bus. For buyers who need square footage and lot size and have exhausted everything under $450k in inner SE, Brentwood-Darlington deserves an honest look. It doesn't deserve a pitch about its potential — it deserves a buyer who understands what it is.",
    ],
    personality: "Outer SE's most honest value: real lots, real space, real trade-offs",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Brentwood-Darlington+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Brentwood-Darlington+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 49,
    bikeScore: 58,
    transitScore: 40,
    schoolDistrict: "Portland Public Schools",
    schools: [
      {
        name: "Brentwood Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 4,
      },
      {
        name: "Whitman Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 4,
      },
      {
        name: "Lane Middle School",
        type: "middle",
        grades: "6–8",
        rating: 4,
      },
      {
        name: "Franklin High School",
        type: "high",
        grades: "9–12",
        rating: 5,
      },
    ],
    parks: [
      {
        name: "Brentwood Park",
        amenities: [
          "baseball field",
          "basketball courts",
          "playground",
          "open lawn",
        ],
      },
      {
        name: "Tideman Johnson Natural Area",
        amenities: [
          "Johnson Creek riparian trail",
          "native plants",
          "bird habitat",
        ],
      },
      {
        name: "Gilbert Park",
        amenities: ["playground", "open space", "quiet neighborhood park"],
      },
    ],
    restaurants: [
      {
        name: "Foster Burger",
        cuisine: "Burgers",
        vibe: "SE Foster, straightforward smash burgers, been a neighborhood staple, no frills",
      },
      {
        name: "Podnah's Pit",
        cuisine: "BBQ",
        vibe: "NE Killingsworth, a drive but Portland's most consistent Texas-style BBQ — worth keeping in the rotation",
      },
      {
        name: "Taqueria Santa Cruz",
        cuisine: "Mexican",
        vibe: "SE Foster, cash-preferred, honest tacos at honest prices, mostly to-go",
      },
    ],
    coffee: [
      {
        name: "Coava Coffee",
        vibe: "SE Grand flagship — worth the drive out of the neighborhood, converted gymnasium, best espresso program in Portland",
      },
      {
        name: "Guilder",
        vibe: "SE Division, Scandinavian-influenced cafe, excellent pour-overs, destination from this neighborhood",
      },
    ],
    bars: [
      {
        name: "Tin Shed Garden Cafe",
        vibe: "Alberta Arts, more a restaurant than a bar but good late-night options, worth the drive north on a weekend",
      },
      {
        name: "Lompoc Tavern",
        vibe: "NW Portland pub, in-house brews, the neighborhood's approach to this is simply driving",
      },
    ],
    medianHomePrice: 380000,
    priceRange: { low: 290000, high: 530000 },
    commuteToDowntown:
      "30–40 min by car (highly variable with Barbur/I-5 or SE Powell); 45–55 min by bus; limited MAX access",
    faqs: [
      {
        q: "What's the honest case for buying in Brentwood-Darlington?",
        a: "Price and lot size. You get a freestanding house with a real yard in Portland proper for under $400,000 in most cases. That entry point doesn't exist in inner SE anymore. If you work remotely or commute at off-hours, the commute is manageable. If you need schools in the top half of PPS, you'll be looking at option schools. If you need walkability or transit, this neighborhood doesn't offer it.",
      },
      {
        q: "Is Brentwood-Darlington safe?",
        a: "Property crime rates in outer SE Portland run higher than the Portland average. Brentwood-Darlington is not an outlier within outer SE — it's similar to Lents or parts of Foster-Powell. It's not a neighborhood where most residents feel unsafe in their day-to-day life. The honest answer is: look at the current crime data for specific blocks, not neighborhood-level statistics.",
      },
      {
        q: "What does a home in Brentwood-Darlington cost?",
        a: "Median around $380,000. Smaller 1950s ranches and split-levels start in the high $290s–$320s with work needed. A solid, updated 3-bedroom ranch on a 7,000 sq ft lot runs $380k–$450k. The price per square foot is among the lowest in Portland inside the city limits.",
      },
      {
        q: "Are there plans for development in Brentwood-Darlington?",
        a: "The Foster corridor to the north has seen consistent investment over the past decade. SE 52nd has some rezoning and infill on a slow timeline. There is no announced major development project for the interior of Brentwood-Darlington itself. Buyers who bought here 10 years ago have seen appreciation — that's the realistic case for long-term holds, not a short-term flip thesis.",
      },
    ],
    testimonials: [
      {
        quote:
          "We had two kids and needed a yard and three bedrooms. Everything with a real yard in SE Portland was $550k+. Bri showed us a 1961 ranch in Brentwood-Darlington for $365,000. It needed a kitchen update. We could actually afford to do that. We bought it.",
        author: "Tom & Lucia K.",
        context: "Bought in Brentwood-Darlington, 2023",
      },
      {
        quote:
          "Bri was the only lender who gave me a straight answer on what I could afford. She didn't try to push me toward inner SE at a price that would have stressed me out. Closed at $342,000, manageable payment.",
        author: "Brandon H.",
        context: "First purchase in Brentwood-Darlington, 2022",
      },
    ],
    relatedServices: ["purchase", "fha", "investment", "cash-out"],
    adjacentNeighborhoods: [
      "lents",
      "foster-powell",
      "woodstock",
      "creston-kenilworth",
    ],
    seo: {
      title: "Buying a Home in Brentwood-Darlington, Portland OR | The Lindley Team",
      description:
        "Honest guide to Brentwood-Darlington real estate: Portland's most affordable outer SE neighborhood, home prices, schools, and trade-offs. Bri Lindley, NMLS #1367416.",
    },
  },
];
