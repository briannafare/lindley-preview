import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsClackSub: NeighborhoodData[] = [
  {
    slug: "gladstone",
    name: "Gladstone",
    city: "Gladstone",
    state: "OR",
    description: [
      "Gladstone sits at the confluence of the Clackamas and Willamette rivers, a geographic fact that shapes the city more than anything else. Meldrum Bar Park stretches along the Willamette — a long gravel bar with boat launches, grassy flats, and unobstructed river views that residents of much pricier neighborhoods would pay a premium to access. The Clackamas River is minutes away in the other direction. At roughly 12,000 people, Gladstone is small enough that you recognize faces at the Fred Meyer on McLoughlin.",
      "The housing stock is mostly 1950s through 1970s — single-story ranches, split-levels, and a few two-story colonials on larger lots. The Gladstone School District is compact: one high school, one middle school, and two elementaries. That size means staff knows students. The city has its own parks system with Meldrum Bar as the centerpiece, plus smaller neighborhood parks scattered through the residential grid. Commuting north to Portland takes 30 to 40 minutes via I-205 or McLoughlin Blvd depending on traffic — Oregon City sits right to the south along the same corridor.",
      "Gladstone is not heavily developed and is not trying to become something else. There is no revitalized downtown with craft cocktail bars. McLoughlin Blvd through the city edge is commercial strip the same as it is everywhere along that corridor. What you get instead is stable working-class community, low competition for housing relative to the rest of the metro, and river access that would cost considerably more one county north.",
    ],
    personality: "River access and stable prices where the Clackamas meets the Willamette",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Gladstone+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Gladstone+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 42,
    bikeScore: 38,
    transitScore: 28,
    schoolDistrict: "Gladstone School District",
    schools: [
      { name: "Gladstone Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Kraxberger Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Gladstone High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Meldrum Bar Park",
        amenities: ["boat launch", "river access", "gravel bar", "fishing", "picnic areas", "dog walking"],
      },
      {
        name: "Gladstone Community Park",
        amenities: ["sports fields", "playground", "tennis courts", "picnic shelters"],
      },
      {
        name: "Riverfront Park",
        amenities: ["Willamette River access", "walking paths", "picnic areas"],
      },
    ],
    restaurants: [
      {
        name: "La Cabaña Mexican Restaurant",
        cuisine: "Mexican",
        vibe: "Family-run, Portland Ave location, neighborhood staple for sit-down Mexican",
      },
      {
        name: "Taqueria Los Gorditos",
        cuisine: "Mexican",
        vibe: "Counter-service tacos, fast and filling, local crowd",
      },
      {
        name: "Denny's",
        cuisine: "Diner",
        vibe: "McLoughlin Blvd location, open late, exactly what you expect",
      },
    ],
    coffee: [
      {
        name: "Dutch Bros Coffee",
        vibe: "Drive-through on McLoughlin, fast and consistent, always a line in the morning",
      },
      {
        name: "Starbucks",
        vibe: "Portland Ave location, standard stop before the I-205 on-ramp",
      },
    ],
    bars: [
      {
        name: "The River Tap",
        vibe: "Local bar near the river, cold beer, no agenda",
      },
      {
        name: "Gladstone Tavern",
        vibe: "Old-school dive, pool table, regulars who've been coming for years",
      },
    ],
    medianHomePrice: 430000,
    priceRange: { low: 330000, high: 600000 },
    commuteToDowntown: "30–40 min by car via I-205 or McLoughlin Blvd, 50+ min by TriMet bus",
    faqs: [
      {
        q: "How is the commute from Gladstone to Portland?",
        a: "About 30 to 40 minutes by car depending on traffic — I-205 north to the Marquam Bridge is the standard route, or McLoughlin Blvd if you're going to SE Portland directly. Peak hour adds meaningful time. There is no light rail connection; TriMet bus service runs but is slow. This is a car-dependent commute.",
      },
      {
        q: "What are the schools like in Gladstone?",
        a: "The Gladstone School District is small — one high school, one middle school, and two elementaries. That size creates a tight-knit feel where staff actually knows students. Academic ratings are average for the region. Families who prioritize the community feel over test rankings often find it suits them well.",
      },
      {
        q: "How much does a home cost in Gladstone?",
        a: "Median is around $430,000, making it one of the more affordable cities in Clackamas County. Most homes trade between $330k and $550k. The 1950s–1970s ranch stock is solid but older — budget for updates on anything in that range. Well-maintained homes with river proximity sit at the higher end.",
      },
      {
        q: "Is Gladstone a good place for first-time buyers?",
        a: "It's one of the more accessible entry points in the south metro. Prices are lower than Oregon City to the south and significantly below Lake Oswego or Milwaukie to the north. FHA financing works well here — the price points keep you well within conforming loan limits. Competition is lower than inner Portland, which gives buyers a bit more room to do inspections and ask for repairs.",
      },
    ],
    testimonials: [
      {
        quote: "We had been priced out of everywhere else we wanted to be. Gladstone gave us a real house with a yard and river access five minutes away. Bri ran three loan scenarios and we picked the one that kept our payment where we needed it.",
        author: "Derek and Alicia M.",
        context: "First-time buyers in Gladstone, 2024",
      },
      {
        quote: "I didn't know Gladstone at all — Bri mentioned it when I described what I was looking for. Ended up being the right call. The neighborhood is quiet, the commute is manageable, and I paid $80k less than comparable houses in Milwaukie.",
        author: "James R.",
        context: "Purchased in Gladstone, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "investment"],
    adjacentNeighborhoods: ["oak-grove", "milwaukie", "oregon-city", "jennings-lodge", "west-linn"],
    seo: {
      title: "Buying a Home in Gladstone, OR | The Lindley Team",
      description:
        "Honest guide to Gladstone real estate: home prices, schools, commute, and river access. Bri Lindley, mortgage lender serving Clackamas County. NMLS #1367416.",
    },
  },

  {
    slug: "lake-grove",
    name: "Lake Grove",
    city: "Lake Oswego",
    state: "OR",
    description: [
      "Lake Grove is the southern section of Lake Oswego, below the lake itself and separated from it by about a mile of residential streets. Boones Ferry Road runs north-south as the commercial spine — a mix of local services, small restaurants, and neighborhood retail that has been there for decades without much churn. The area sits mostly between Highway 43 (State Street) to the east and the I-5 corridor to the west, with Kruse Way and the tech office parks forming the northern anchor.",
      "The draw for buyers here is straightforward: Lake Oswego School District without Lake Oswego lake-view prices. Bryant Elementary is well-regarded within the district. Lakeridge Middle and Lakeridge High School serve the area, and Lakeridge is consistently one of the stronger performing high schools in the region. The housing stock is 1960s through 1980s ranches and split-levels on flat to gently rolling lots — not the larger Craftsmans and colonials of the neighborhoods immediately around the lake, but well-maintained and solidly built. Lot sizes run 7,000 to 10,000 square feet on most blocks.",
      "Buyers who want Lake Oswego schools and the Lake Oswego label on their address typically find Lake Grove 15 to 20 percent less expensive than the neighborhoods north of the lake. That gap is real and worth understanding: you get the same school district, similar commute access, and a quieter residential character, but none of the waterfront premium and none of the lake access that comes with the higher-priced addresses. It is a rational trade-off for families where schools are the priority.",
    ],
    personality: "Lake Oswego schools at a discount from the lake-view premium",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Lake+Grove+Lake+Oswego+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Lake+Grove+Lake+Oswego+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 52,
    bikeScore: 44,
    transitScore: 35,
    schoolDistrict: "Lake Oswego School District",
    schools: [
      { name: "Bryant Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Lakeridge Middle School", type: "middle", grades: "6–8", rating: 8 },
      { name: "Lakeridge High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Luscher Farm",
        amenities: ["community gardens", "open fields", "dog walking", "walking paths"],
      },
      {
        name: "Lake Grove Swim Park",
        amenities: ["public pool", "swim lessons", "open swim", "picnic area"],
      },
      {
        name: "Sundeleaf Plaza",
        amenities: ["small plaza", "seating", "community gathering space"],
      },
    ],
    restaurants: [
      {
        name: "Nicoletta's Table",
        cuisine: "Italian",
        vibe: "Boones Ferry Rd neighborhood Italian, reliable weeknight dinner, good wine list",
      },
      {
        name: "Thai Orchid",
        cuisine: "Thai",
        vibe: "Long-running Thai spot in Lake Grove, consistent, lunch specials draw the office crowd from Kruse Way",
      },
      {
        name: "Lake Grove Pub",
        cuisine: "American",
        vibe: "Casual bar and grill on Boones Ferry, game nights, neighborhood regulars",
      },
    ],
    coffee: [
      {
        name: "Starbucks",
        vibe: "Boones Ferry location, standard morning stop, drive-through gets long",
      },
      {
        name: "Dutch Bros Coffee",
        vibe: "Drive-through on Boones Ferry, faster than Starbucks, younger crowd",
      },
    ],
    bars: [
      {
        name: "Lake Grove Pub",
        vibe: "The neighborhood watering hole on Boones Ferry — sports on TV, unpretentious",
      },
      {
        name: "Gustav's Pub & Grill",
        vibe: "German-American pub near the I-5 corridor, extensive tap list, loud on game days",
      },
    ],
    medianHomePrice: 680000,
    priceRange: { low: 530000, high: 950000 },
    commuteToDowntown: "25–35 min by car via I-5 or Hwy 43, 45+ min by TriMet bus",
    faqs: [
      {
        q: "What's the difference between Lake Grove and the rest of Lake Oswego?",
        a: "Location and price. Lake Grove is the southern part of Lake Oswego, roughly below the lake. You're in the same city, same school district, same mailing address — but you're not near the lake and you're not paying for lake adjacency. That typically means 15 to 25 percent less than comparable square footage in the neighborhoods immediately around Oswego Lake.",
      },
      {
        q: "Are the Lake Oswego schools really worth the premium?",
        a: "If school quality is the deciding factor, Lake Oswego SD consistently performs among the best in Oregon — Lakeridge High regularly ranks in the top tier statewide. Lake Grove lets you access those schools at a lower entry price than the lake-adjacent neighborhoods. Whether the school premium justifies a higher payment than nearby Tigard or West Linn is a question worth running through the numbers on.",
      },
      {
        q: "How much do homes cost in Lake Grove?",
        a: "Median is around $680,000. Most of the 1960s–1980s ranches and split-levels sell between $530k and $850k. Larger updated homes and anything with recent renovations push past that. The price difference from the neighborhoods north of the lake is real — similar square footage near Oswego Lake often runs $800k to $1.2M or more.",
      },
      {
        q: "What's the commute from Lake Grove to Portland?",
        a: "Twenty-five to 35 minutes by car via I-5 north or Highway 43 north into SW Portland. I-5 is faster when traffic cooperates; Highway 43 (State Street) is the backup route and is slower but avoids the freeway merge. TriMet bus service runs but is not fast — most residents drive.",
      },
    ],
    testimonials: [
      {
        quote: "We specifically wanted Lake Oswego schools and couldn't swing the prices north of the lake. Bri helped us understand the loan options and we landed in Lake Grove — same district, $150k less. That's been huge.",
        author: "Sarah and Tom K.",
        context: "Bought in Lake Grove, 2024",
      },
      {
        quote: "Bri was straightforward about what we qualified for and what the monthly payment actually looked like at different price points. No pressure to stretch. We found a place in Lake Grove that worked.",
        author: "Michelle P.",
        context: "First purchase in Lake Grove, 2023",
      },
    ],
    relatedServices: ["purchase", "refinance", "jumbo", "heloc", "fha"],
    adjacentNeighborhoods: ["lake-oswego", "west-linn", "oak-grove", "milwaukie"],
    seo: {
      title: "Buying a Home in Lake Grove, Lake Oswego OR | The Lindley Team",
      description:
        "Guide to Lake Grove real estate in Lake Oswego: home prices, Lakeridge schools, commute, and how it compares to the rest of LO. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "oak-grove",
    name: "Oak Grove",
    city: "Milwaukie",
    state: "OR",
    description: [
      "Oak Grove is an unincorporated Clackamas County community wedged between Milwaukie to the north and Lake Oswego to the south, with McLoughlin Blvd running the length of its western edge. McLoughlin is commercial, loud at rush hour, and not the place you want to be walking — but it does mean the drive to Portland or Oregon City is straightforward. The residential streets that run east from McLoughlin into the interior of Oak Grove are a different story: established trees, large lots on many blocks, and the kind of quiet that you do not get two miles north in inner SE Portland.",
      "North Clackamas School District serves Oak Grove, which includes Lewelling Elementary, Rowe Middle School, and Milwaukie High School for most of the area. The Springwater Corridor Trail runs along the eastern edge with river access points — an asset that does not get as much attention as it should. North Clackamas Sports Park is a significant recreational facility with multiple athletic fields that draws use from across the district. The housing stock is primarily 1950s through 1970s, with some larger lots than you find in Milwaukie proper.",
      "Oak Grove has not gentrified at the pace of Milwaukie or Sellwood, which is why prices are still lower than those neighborhoods to the north. The trade-off is fewer walkable amenities — most daily needs require a drive on McLoughlin. There is no town center. Being unincorporated also means the city does not have its own services; County roads and County governance. For buyers who want space and affordability without the isolation of a rural purchase, Oak Grove offers a genuine middle option.",
    ],
    personality: "Quiet residential streets with large lots between Milwaukie and Lake Oswego",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Oak+Grove+Milwaukie+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Oak+Grove+Milwaukie+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 38,
    bikeScore: 42,
    transitScore: 32,
    schoolDistrict: "North Clackamas School District",
    schools: [
      { name: "Lewelling Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Rowe Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Milwaukie High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "North Clackamas Sports Park",
        amenities: ["athletic fields", "soccer", "baseball", "restrooms", "parking"],
      },
      {
        name: "Springwater Corridor Trail",
        amenities: ["paved multi-use trail", "Willamette River access", "cycling", "running"],
      },
      {
        name: "Oak Grove Park",
        amenities: ["playground", "open lawn", "neighborhood park"],
      },
    ],
    restaurants: [
      {
        name: "Oak Grove Diner",
        cuisine: "Diner",
        vibe: "Breakfast and lunch staple on McLoughlin, counter seating, honest diner food",
      },
      {
        name: "Casa Naranja",
        cuisine: "Mexican",
        vibe: "Mexican restaurant on McLoughlin, family-run, reliable lunch and dinner",
      },
      {
        name: "Burgerville",
        cuisine: "Burgers",
        vibe: "McLoughlin location, local chain with seasonal menus, quick stop on the way home",
      },
    ],
    coffee: [
      {
        name: "Dutch Bros Coffee",
        vibe: "McLoughlin drive-through, efficient, always busy before 9 am",
      },
      {
        name: "Starbucks",
        vibe: "McLoughlin location, standard commuter stop",
      },
    ],
    bars: [
      {
        name: "The Raven",
        vibe: "Neighborhood bar in Oak Grove, no-frills, local regulars",
      },
      {
        name: "Oak Grove Inn",
        vibe: "Long-running dive on McLoughlin, pool table, cash-friendly",
      },
    ],
    medianHomePrice: 460000,
    priceRange: { low: 350000, high: 650000 },
    commuteToDowntown: "25–35 min by car via McLoughlin Blvd or I-205, 45+ min by TriMet bus",
    faqs: [
      {
        q: "What is Oak Grove exactly — is it part of Milwaukie?",
        a: "Oak Grove is an unincorporated community in Clackamas County. It has a Milwaukie mailing address on many streets, but it is not within the Milwaukie city limits and is not governed by the City of Milwaukie. Roads and services are administered by Clackamas County. In practice this affects property taxes slightly and means you will not have access to some city-specific services.",
      },
      {
        q: "How are the schools in Oak Grove?",
        a: "Oak Grove is served by North Clackamas School District, which also covers Milwaukie and Jennings Lodge. Milwaukie High School is the main high school for the area. North Clackamas SD is considered solid — better than Portland Public Schools on average metrics, and with reasonable class sizes. It is not Lake Oswego SD, but it is a functioning district with good community support.",
      },
      {
        q: "How much do homes cost in Oak Grove?",
        a: "Median is around $460,000 — lower than Milwaukie proper and well below Lake Oswego to the south. The 1950s–1970s ranches and split-levels that make up most of the inventory run $350k to $580k depending on size, lot, and condition. Large-lot properties with older homes that need work can come in lower.",
      },
      {
        q: "Can I bike to the Springwater Corridor from Oak Grove?",
        a: "Yes — the Springwater Corridor runs along Oak Grove's eastern edge and connects north to Sellwood and downtown Portland, and south toward Boring. It is a paved multi-use trail and is legitimately useful for recreational cycling and running. Biking to inner SE Portland takes 30 to 40 minutes on trail; to downtown Portland is closer to 45 to 55 minutes.",
      },
    ],
    testimonials: [
      {
        quote: "We wanted a big yard and couldn't find it in Milwaukie at a price that worked. Oak Grove had what we needed — more space, mature trees, and still close to the city. Bri got us to the finish line faster than I expected.",
        author: "Paul and Karen F.",
        context: "Bought in Oak Grove, 2024",
      },
      {
        quote: "I asked Bri which neighborhoods gave the most house for the money south of Portland. She mentioned Oak Grove specifically and explained why. We ended up there and I'm still happy with the decision two years later.",
        author: "Eric W.",
        context: "Purchased in Oak Grove, 2022",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "investment", "cash-out"],
    adjacentNeighborhoods: ["milwaukie", "jennings-lodge", "lake-grove", "lake-oswego", "sellwood-moreland"],
    seo: {
      title: "Buying a Home in Oak Grove, OR | The Lindley Team",
      description:
        "Oak Grove real estate guide: home prices, North Clackamas schools, Springwater trail access, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "jennings-lodge",
    name: "Jennings Lodge",
    city: "Milwaukie",
    state: "OR",
    description: [
      "Jennings Lodge is an unincorporated Clackamas County community along the Willamette River bluff south of Oak Grove. The bluff-top streets — Courtney Ave, Jennings Ave, and the residential grid just behind the western face — have Willamette River views that would cost considerably more in almost any other part of the metro. On a clear morning you can see across the river to the fields and hills of Clackamas County's west side. Not many people in the broader metro know this exists.",
      "North Clackamas School District covers Jennings Lodge — the same schools as Oak Grove, with Milwaukie High School as the high school. McLoughlin Blvd forms the western edge of the community: commercial, busy, and not particularly pleasant to live next to. The residential streets behind the bluff are entirely insulated from it. Housing ranges from 1940s bungalows and post-war ranches to 1970s construction, with a genuine mix of conditions. Some properties have been well-maintained for decades; others need real work. Lot sizes vary.",
      "The south metro's best-kept secret is a cliché we will not use, but people who find Jennings Lodge tend to stay. The community is genuinely quiet — there is no commercial district, no coffee shop on the corner, no walkable anything. Everything requires a car. McLoughlin is the spine to get you north to Portland or south to Oregon City. For buyers who prioritize river views, quiet streets, and affordability over walkability and urban amenities, this is a rational choice that few buyers have on their radar.",
    ],
    personality: "Willamette bluff views and genuine quiet in an overlooked south metro pocket",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Jennings+Lodge+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Jennings+Lodge+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 28,
    bikeScore: 30,
    transitScore: 22,
    schoolDistrict: "North Clackamas School District",
    schools: [
      { name: "Jennings Lodge Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Rowe Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Milwaukie High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Jennings Lodge Willamette River Access",
        amenities: ["river access", "informal fishing spots", "Willamette views"],
      },
      {
        name: "Hebb Park",
        amenities: ["boat ramp", "Willamette River access", "picnic area", "parking"],
      },
      {
        name: "Springwater Corridor Trail",
        amenities: ["paved trail", "cycling", "running", "river corridor access"],
      },
    ],
    restaurants: [
      {
        name: "Elmer's Restaurant",
        cuisine: "American",
        vibe: "McLoughlin Blvd breakfast and brunch institution, family-friendly, been there for years",
      },
      {
        name: "Casa Naranja",
        cuisine: "Mexican",
        vibe: "Nearby Oak Grove location, family-run Mexican, solid option on McLoughlin",
      },
      {
        name: "Burgerville",
        cuisine: "Burgers",
        vibe: "Quick stop on McLoughlin, local chain, better than the national alternatives",
      },
    ],
    coffee: [
      {
        name: "Dutch Bros Coffee",
        vibe: "McLoughlin drive-through, standard south metro morning stop",
      },
      {
        name: "Starbucks",
        vibe: "Nearby Oak Grove location on McLoughlin, consistent morning option",
      },
    ],
    bars: [
      {
        name: "Oak Grove Inn",
        vibe: "Closest bar, old-school McLoughlin dive, unpretentious",
      },
      {
        name: "The Raven",
        vibe: "Neighborhood bar in nearby Oak Grove, local crowd, cold beer",
      },
    ],
    medianHomePrice: 460000,
    priceRange: { low: 340000, high: 680000 },
    commuteToDowntown: "30–40 min by car via McLoughlin Blvd or I-205, 50+ min by TriMet",
    faqs: [
      {
        q: "Where exactly is Jennings Lodge?",
        a: "Jennings Lodge is an unincorporated Clackamas County community along the Willamette River, south of Oak Grove and north of Oregon City. It has a Milwaukie mailing address on many streets but is not within Milwaukie city limits. It sits between McLoughlin Blvd on the west and the Willamette River bluff on the east.",
      },
      {
        q: "What are the river views like?",
        a: "Genuinely good. Streets along the bluff have clear western views across the Willamette, particularly on the upper tier. Properties directly on or near the bluff edge command a premium. Not every street in Jennings Lodge has views — the lower blocks closer to McLoughlin do not — but the bluff streets are the reason people specifically seek this community out.",
      },
      {
        q: "How much do homes cost in Jennings Lodge?",
        a: "Median is around $460,000. The range is wide — older homes that need significant work can come in around $340k, while well-maintained bluff-view properties with updates push $600k to $700k. Condition variance is higher here than in more turnover-active neighborhoods, so inspections and contingencies matter.",
      },
      {
        q: "Is Jennings Lodge a good investment area?",
        a: "It is a community with upside that has not been fully priced in, partly because it lacks visibility. River views at these prices are unusual in the metro. The risk is that there is no built-in demand driver — no commercial development, no transit improvement planned — so appreciation depends on broader south metro dynamics. For a primary residence it offers real value; as a pure investment the upside is speculative.",
      },
    ],
    testimonials: [
      {
        quote: "I wanted a river view and didn't want to spend Lake Oswego money. Bri knew exactly where to point me — Jennings Lodge wasn't even on my list. We got a bluff-top house with a Willamette view and I think about that every morning.",
        author: "Craig N.",
        context: "Purchased in Jennings Lodge, 2023",
      },
      {
        quote: "The house needed work but the bones were solid and the location was everything we wanted. Bri helped us structure the financing so we had budget left for improvements. Worth every conversation.",
        author: "Danielle and Mark S.",
        context: "Bought in Jennings Lodge, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "cash-out", "investment", "heloc"],
    adjacentNeighborhoods: ["oak-grove", "milwaukie", "oregon-city", "gladstone", "west-linn"],
    seo: {
      title: "Buying a Home in Jennings Lodge, OR | The Lindley Team",
      description:
        "Jennings Lodge real estate: Willamette River bluff views, home prices, North Clackamas schools, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "west-haven-sylvan",
    name: "West Haven-Sylvan",
    city: "Portland",
    state: "OR",
    description: [
      "West Haven-Sylvan occupies the lower West Hills between Highway 26 (the Sunset Highway) and SW Scholls Ferry Road, roughly west of NW 53rd Ave and east of the Beaverton city limits. Oregon Zoo and Washington Park are at the northeastern edge, which means Forest Park trailheads are reachable without getting in a car. OHSU is a 10-minute drive down the hill. The neighborhood is Portland city limits, Portland Public Schools, and a Portland property tax bill — but the character reads more like a quiet hill suburb than anything in the inner city.",
      "The housing is primarily 1950s through 1970s construction — ranch homes and split-levels on larger lots than you find in inner SW Portland, with some newer hillside infill from the 1990s and 2000s on steeper terrain. West Sylvan Middle School serves the area and feeds to Lincoln High School, which is one of Portland Public Schools' stronger comprehensive high schools. Families specifically seeking the Lincoln High attendance area find West Haven-Sylvan an affordable entry compared to the inner SW neighborhoods closer to the river.",
      "The trade-off is walkability. There is no commercial main street. Daily errands require a car — the nearest grocery is a drive away. Highway 26 is close enough to hear on some blocks. The Sunset Highway on-ramp connection makes commuting to the west side tech campuses reasonable (Nike, Intel), but Portland downtown means going back east through the tunnel, which is reliable until it is not. The view corridors from some of the upper streets looking east toward Mt. Hood make up for the lack of a neighborhood coffee shop.",
    ],
    personality: "West Hills quiet with Washington Park at the edge and Lincoln High feeding the area",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=West+Haven-Sylvan+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=West+Haven-Sylvan+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 32,
    bikeScore: 28,
    transitScore: 38,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Bridlemile Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "West Sylvan Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Washington Park",
        amenities: ["Oregon Zoo", "Japanese Garden", "International Rose Test Garden", "hiking trails", "picnic areas"],
      },
      {
        name: "Hoyt Arboretum",
        amenities: ["12 miles of trails", "tree collections", "accessible paths", "educational programs"],
      },
      {
        name: "Sylvan Park",
        amenities: ["baseball diamond", "playground", "open lawn", "picnic tables"],
      },
    ],
    restaurants: [
      {
        name: "Pastini",
        cuisine: "Italian",
        vibe: "Casual pasta on SW Canyon Rd, reliable weeknight dinner, family-friendly",
      },
      {
        name: "Pho Van",
        cuisine: "Vietnamese",
        vibe: "Beaverton-area location nearby, bowl of pho on a cold evening, efficient and good",
      },
      {
        name: "Gustav's Pub & Grill",
        cuisine: "German-American",
        vibe: "Nearby in the Beaverton-Hillsdale area, large tap list, solid pub food",
      },
    ],
    coffee: [
      {
        name: "Starbucks",
        vibe: "SW Canyon Rd location, commuter stop before the 26 on-ramp",
      },
      {
        name: "Dutch Bros Coffee",
        vibe: "Nearby on SW Canyon, drive-through, morning line is consistent",
      },
    ],
    bars: [
      {
        name: "The Original Dinerant",
        vibe: "Hillside area option, cocktails and diner food, accessible from the hill",
      },
      {
        name: "Stanich's",
        vibe: "SW Scholls Ferry area institution, historic burger bar, been open since 1949",
      },
    ],
    medianHomePrice: 680000,
    priceRange: { low: 520000, high: 1100000 },
    commuteToDowntown: "15–25 min by car via Hwy 26 or SW Canyon Rd, 30 min on TriMet bus line 54",
    faqs: [
      {
        q: "What schools serve West Haven-Sylvan?",
        a: "Most of West Haven-Sylvan feeds to Bridlemile Elementary, West Sylvan Middle School, and Lincoln High School. Lincoln is one of Portland Public Schools' stronger comprehensive high schools, with competitive AP programs and historically solid test scores. The Lincoln High attendance boundary is a real draw for families choosing between this area and inner SW neighborhoods.",
      },
      {
        q: "How is the commute from West Haven-Sylvan to downtown Portland?",
        a: "Fifteen to 25 minutes by car on a normal day via Highway 26 east or SW Canyon Road. The Sunset Tunnel is the pinch point — it backs up during incidents, but on a normal morning is reliable. TriMet bus line 54 runs from SW Scholls Ferry through the neighborhood to downtown. It takes about 30 to 35 minutes and is genuinely usable.",
      },
      {
        q: "How much do homes cost in West Haven-Sylvan?",
        a: "Median is around $680,000. The 1950s–1970s ranches and split-levels on the flatter streets run $520k to $750k. Newer hillside construction and properties with east-facing view corridors push above $800k and sometimes above $1M. The area is priced below the neighborhoods immediately around Washington Park but above Beaverton for similar square footage.",
      },
      {
        q: "Is West Haven-Sylvan good for families?",
        a: "Yes, specifically because of the school pipeline to Lincoln High. The neighborhood is quiet, lots are larger than inner Portland, and Washington Park and Hoyt Arboretum are accessible without driving. The lack of walkable amenities is a real consideration — you will drive for groceries and coffee. Families who prioritize yard space, good public schools, and proximity to Forest Park over walkability tend to find it fits well.",
      },
    ],
    testimonials: [
      {
        quote: "We needed to be in the Lincoln High boundary and couldn't afford the houses closer to downtown. West Haven-Sylvan gave us the school district and a yard. Bri was clear about all the financing options from the start.",
        author: "Robert and Jenna T.",
        context: "Bought in West Haven-Sylvan, 2024",
      },
      {
        quote: "The view from the backyard looking east to Mt. Hood sealed it for us. Bri ran the numbers twice when we weren't sure about the payment and helped us find a structure that worked.",
        author: "Amanda C.",
        context: "Purchased in West Haven-Sylvan, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc", "fha", "va"],
    adjacentNeighborhoods: ["hillsdale", "multnomah-village", "forest-heights", "eastmoreland"],
    seo: {
      title: "Buying a Home in West Haven-Sylvan, Portland OR | The Lindley Team",
      description:
        "West Haven-Sylvan real estate guide: home prices, Lincoln High schools, Washington Park access, and West Hills commute. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "skyline",
    name: "Skyline",
    city: "Portland",
    state: "OR",
    description: [
      "Skyline Blvd runs the length of the West Hills ridge, a two-lane road that winds from the northern end of Forest Park south through terrain that reads as rural but is technically within Portland city limits. The views are east-facing — Mt. Hood on a clear morning, the Tualatin Valley to the west at dusk. Properties range from older farmhouses on one-acre lots to newer custom builds on five-plus acres, and the road itself passes working farms, a small airstrip, and more deer than traffic signals. This is Portland's back forty.",
      "Portland Public Schools serves Skyline — Skyline K-8 is the neighborhood school, a combined elementary and middle that sits on the ridge and serves a small community of students who arrive mostly by bus because there is no other option. High school feeds to Lincoln or Wilson depending on address. The Forest Park trailhead system is accessible directly from Skyline Blvd; several trailheads within a short drive give access to 80-plus miles of trail in the country's largest urban forest. The Northwest 23rd commercial district and the Hillside neighborhoods are 15 to 20 minutes down the hill.",
      "Car dependence here is not a caveat — it is the defining feature. There is no grocery store, no coffee shop, no pharmacy within any reasonable distance. Skyline Blvd itself is two lanes with no shoulder in most stretches and becomes genuinely difficult in ice or snow. The tradeoff is space, privacy, and a natural setting that is unlike anything else available within Portland city limits. Buyers here are making a deliberate choice about what they value, and the price reflects it.",
    ],
    personality: "Rural ridge living within Portland city limits — Forest Park at the door, grocery store 25 minutes away",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Skyline+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Skyline+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 8,
    bikeScore: 12,
    transitScore: 10,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Skyline K-8 School", type: "elementary", grades: "K–8", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Forest Park",
        amenities: ["80+ miles of trails", "Wildwood Trail", "wildlife habitat", "multiple Skyline Blvd trailheads"],
      },
      {
        name: "Pittock Mansion",
        amenities: ["historic house museum", "viewpoint", "hiking trails", "picnic areas"],
      },
      {
        name: "Skyline Memorial Gardens",
        amenities: ["peaceful grounds", "viewpoint", "historic site"],
      },
    ],
    restaurants: [
      {
        name: "The Skyline Restaurant",
        cuisine: "American",
        vibe: "The ridge diner — longtime Skyline Blvd institution, breakfast and lunch, no frills",
      },
      {
        name: "Cornell Farm",
        cuisine: "Farm market",
        vibe: "Not a restaurant but the closest thing to a local stop — produce, plants, seasonal goods on Cornell Rd",
      },
      {
        name: "Helvetia Tavern",
        cuisine: "Burgers",
        vibe: "A short drive north on Helvetia Rd, legendary 1930s burger bar in the farmland, cash only, worth the trip",
      },
    ],
    coffee: [
      {
        name: "Skyline Restaurant",
        vibe: "Coffee with your eggs on the ridge — the only reliable option without driving down the hill",
      },
      {
        name: "Starbucks (NW 23rd)",
        vibe: "Down the hill 15 minutes, standard option after the drive in",
      },
    ],
    bars: [
      {
        name: "Helvetia Tavern",
        vibe: "The genuine article — cash-only burger and beer bar that has been on Helvetia Rd since 1933, worth the drive",
      },
      {
        name: "Besaw's",
        vibe: "NW 23rd option down the hill, upscale-casual, good cocktail program",
      },
    ],
    medianHomePrice: 850000,
    priceRange: { low: 550000, high: 2500000 },
    commuteToDowntown: "25–40 min by car via Hwy 30 or Cornell Rd to NW 23rd, no meaningful transit option",
    faqs: [
      {
        q: "How far is Skyline from downtown Portland?",
        a: "Twenty-five to 40 minutes by car depending on route and traffic. Cornell Road or NW Germantown Road take you down the hill to NW 23rd and the Burnside Bridge corridor. Highway 30 is the faster arterial once you reach the valley floor. There is no meaningful TriMet connection — you are driving.",
      },
      {
        q: "What are the schools like in Skyline?",
        a: "Skyline K-8 is the neighborhood school — a small combined elementary and middle school that serves the ridge community. Students bus to the building. High school feeds to Lincoln (one of PPS's better comprehensives) depending on your address. The small K-8 size means close teacher-student relationships, which some families find valuable.",
      },
      {
        q: "How much do homes cost on Skyline?",
        a: "Median is around $850,000, but the range is extremely wide. Older farmhouses and cottages on smaller lots can come in at $550k to $700k. Custom builds on several acres with views push $1.5M to $2.5M or higher. Jumbo financing is common in this area. There is not a typical Skyline house — it depends entirely on lot size, condition, and position on the ridge.",
      },
      {
        q: "What about snow and ice on Skyline Blvd?",
        a: "It is a real consideration. Skyline Blvd at ridge elevation gets ice and snow conditions that do not exist in the Portland basin. The road has no shoulder and is two lanes with curves. When the valley gets light snow, the ridge can be genuinely impassable for a day or two. Most Skyline residents have all-wheel or four-wheel drive for this reason. It is not frequent, but it happens multiple times most winters.",
      },
      {
        q: "Is Skyline a good investment?",
        a: "Skyline properties have appreciated over time, but liquidity is lower than standard Portland neighborhoods — the buyer pool for a custom five-acre ridge property is smaller than for an inner SE Craftsman. Days on market tend to run longer. For buyers who plan to stay long-term and are buying for the lifestyle rather than near-term appreciation, the math often works out. For investors looking for quick turns, it is the wrong market.",
      },
    ],
    testimonials: [
      {
        quote: "We knew Skyline was unusual and we were prepared for the financing to be complicated. Bri had done jumbo loans on the ridge before — she knew the appraisal questions and got us through the process without surprises.",
        author: "David and Laura H.",
        context: "Purchased on Skyline, 2024",
      },
      {
        quote: "People think living on Skyline is impractical. It is, a little. But the mornings are unlike anything in the city. Bri helped us figure out a structure that made the payment sustainable long term.",
        author: "Christine M.",
        context: "Bought on Skyline Blvd, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc", "cash-out", "reverse-mortgage"],
    adjacentNeighborhoods: ["forest-heights", "west-haven-sylvan", "hillsdale", "multnomah-village"],
    seo: {
      title: "Buying a Home on Skyline, Portland OR | The Lindley Team",
      description:
        "Skyline Portland real estate: ridge properties, Forest Park access, home prices, and what buyers need to know about this unusual corner of Portland city limits. Bri Lindley, NMLS #1367416.",
    },
  },
];
