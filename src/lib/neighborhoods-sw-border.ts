import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsSWBorder: NeighborhoodData[] = [
  {
    slug: "forest-heights",
    name: "Forest Heights",
    city: "Portland",
    state: "OR",
    description: [
      "NW Cornelius Pass Road climbs out of the Tualatin Valley and dead-ends, essentially, into Forest Heights. The neighborhood was carved out of West Hills timber land starting in the early 1990s, and the result is one of the only parts of Portland where you can buy a 3,500-square-foot house built after 1995 with a Portland address. Homes run large — four-bedroom Colonials and Craftsman-revival houses on quarter-acre lots with views of the Tualatin Valley and, on clear days, the Coast Range. The Forest Heights Town Center at NW Miller Road has a New Seasons, a handful of services, and not much else.",
      "Skyline K–8 feeds into Lincoln High School, which is Portland Public Schools' IB school and one of the most academically competitive high schools in the district. The Tualatin Hills Nature Park is a seven-minute drive and has over five miles of trails through lowland forest — it's where Forest Heights families actually recreate. Closer in, the West Hills Trail system is accessible from several neighborhood trailheads. The HOA maintains common areas and enforces architectural standards, which keeps the neighborhood tidy and is either a comfort or an annoyance depending on your disposition.",
      "Forest Heights is honest-to-goodness car-dependent. NW 23rd is 20 minutes in normal traffic; downtown is 25–30 minutes. There is no MAX, no meaningful bus service, and no plan for either. The trade-off is a newer house, a Portland address, good public schools, and access to West Hills green space — at a price point noticeably below the closer-in West Hills neighborhoods like Nob Hill or Goose Hollow. If someone at your dinner table will be commuting to the Pearl District or downtown every day, test the drive yourself at 8 a.m. on a Tuesday before you make an offer.",
    ],
    personality: "Portland address, newer construction, no bus route",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Forest+Heights+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Forest+Heights+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 18,
    bikeScore: 14,
    transitScore: 22,
    schoolDistrict: "Portland Public Schools",
    schools: [
      {
        name: "Skyline K–8 School",
        type: "elementary",
        grades: "K–8",
        rating: 7,
      },
      {
        name: "Lincoln High School",
        type: "high",
        grades: "9–12",
        rating: 9,
      },
      {
        name: "Northwest Academy",
        type: "private",
        grades: "6–12",
        rating: 8,
      },
    ],
    parks: [
      {
        name: "Tualatin Hills Nature Park",
        amenities: [
          "5+ miles of trails",
          "old-growth forest",
          "wetlands",
          "nature center",
        ],
      },
      {
        name: "Forest Heights Park",
        amenities: ["playground", "open lawn", "picnic tables"],
      },
      {
        name: "West Hills Trail System",
        amenities: [
          "forested hiking",
          "mountain bike trails",
          "neighborhood trailhead access",
        ],
      },
    ],
    restaurants: [
      {
        name: "New Seasons Market Café",
        cuisine: "Deli / Prepared Foods",
        vibe:
          "The Town Center anchor — grab lunch from the hot bar, which is better than it sounds",
      },
      {
        name: "Beaverton Bakery",
        cuisine: "Bakery",
        vibe:
          "Short drive down Cornell, been making custom cakes and pastries since 1948",
      },
      {
        name: "Gustav's Pub & Grill",
        cuisine: "German-American",
        vibe:
          "Cedar Mill neighbor — big portions, solid bar, reliably packed on weekend evenings",
      },
    ],
    coffee: [
      {
        name: "Coffee House Five",
        vibe:
          "Small independent shop in the Forest Heights Town Center, locals run into each other here on weekday mornings",
      },
      {
        name: "Starbucks at New Seasons",
        vibe:
          "Practical — if you're already in the parking lot, it's there",
      },
    ],
    bars: [
      {
        name: "McMenamins at the Mission Theater",
        vibe: "Short drive into NW — classic McMenamins room, movies and pub food",
      },
      {
        name: "Gustav's Pub & Grill",
        vibe:
          "Closest actual bar to Forest Heights, Cedar Mill location, neighborhood regulars",
      },
    ],
    medianHomePrice: 750000,
    priceRange: { low: 580000, high: 1400000 },
    commuteToDowntown:
      "25–30 min by car to downtown (40+ in morning rush), no practical transit option",
    faqs: [
      {
        q: "What schools serve Forest Heights?",
        a: "Most of Forest Heights is in the Skyline K–8 attendance zone, which feeds Lincoln High School. Lincoln is Portland Public Schools' International Baccalaureate school and consistently ranks as one of the top public high schools in Oregon. Confirm the specific parcel's school assignment with PPS before making an offer — a handful of western lots near the city boundary have had different assignments historically.",
      },
      {
        q: "How car-dependent is Forest Heights?",
        a: "Extremely. There is no MAX stop, and TriMet bus service is minimal. Driving is how every errand gets done. NW 23rd and the shops on that corridor are about 20 minutes in normal traffic; downtown Portland is 25–30 minutes. If a household member commutes daily to downtown, expect 40+ minutes each way during morning rush.",
      },
      {
        q: "Does Forest Heights have an HOA?",
        a: "Most of the neighborhood does, yes. The Forest Heights HOA manages common green space and enforces architectural covenants that govern exterior changes, fencing, and landscaping. HOA fees are typically $100–$200 per month depending on the sub-association. Review the CC&Rs carefully before closing — the rules are real and enforced.",
      },
      {
        q: "How does Forest Heights compare to other West Hills neighborhoods on price?",
        a: "Forest Heights runs meaningfully less expensive than closer-in West Hills neighborhoods like the West Hills above NW 23rd or Goose Hollow. The trade-off is newer construction and larger lots — most homes here were built in the 1990s and 2000s — but much longer commutes to downtown and the Pearl. Median is around $750,000, compared to $900k+ for the closer hills.",
      },
    ],
    testimonials: [
      {
        quote:
          "We needed a four-bedroom in Portland Public Schools and didn't want a 1940s fixer. Forest Heights checked every box. Bri walked us through the HOA documents before we even made the offer.",
        author: "Kevin and Allison R.",
        context: "Bought in Forest Heights, 2023",
      },
      {
        quote:
          "The jumbo loan process felt like a black box until Bri explained exactly what the underwriter was looking at. We closed on time with no surprises.",
        author: "Thomas W.",
        context: "Purchased in Forest Heights, 2024",
      },
    ],
    relatedServices: [
      "purchase",
      "jumbo",
      "refinance",
      "heloc",
      "cash-out",
    ],
    adjacentNeighborhoods: [
      "nob-hill",
      "west-haven-sylvan",
      "cedar-mill",
      "goose-hollow",
    ],
    seo: {
      title:
        "Buying a Home in Forest Heights, Portland OR | The Lindley Team",
      description:
        "Forest Heights real estate: newer construction, Portland Public Schools, and a long car commute. Honest home prices and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "beaverton-hillsdale",
    name: "Beaverton-Hillsdale",
    city: "Portland",
    state: "OR",
    description: [
      "Beaverton-Hillsdale Highway is one of those Portland roads that exists in the gap between jurisdictions. The corridor runs through SW Portland, clips through unincorporated Washington County, and bumps up against Beaverton city limits — sometimes within a single block. The housing reflects that geography: 1950s and 1960s ranches with oversized lots, original hardwood floors, single-car garages, and none of the polish that makes comparable houses in Hillsdale or Multnomah Village cost $75,000 more. Grocery Options include Fred Meyer on SW Beaverton-Hillsdale, and the Raleigh Hills area just to the west adds a QFC and a handful of services.",
      "SW Barbur Boulevard is a few minutes north, connecting to downtown Portland in 15–20 minutes by car. Highway 217 is equally close and routes traffic south to Lake Oswego and Tualatin. Tri-Met Line 54 and Line 56 both run along Beaverton-Hillsdale Highway and provide real, if slow, bus service — 40 to 50 minutes to downtown. The mix of Portland and unincorporated Washington County addresses here matters for taxes and services. Portland city addresses pay Portland city income tax and property tax rates; Washington County unincorporated addresses do not pay the city income tax, which is a real dollar difference.",
      "The honest trade-off here is that Beaverton-Hillsdale is not a destination neighborhood. The commercial strip on the highway is functional rather than appealing. School district assignments require verification by parcel — some blocks are Portland Public, some are Beaverton School District, and that gap in school quality matters to families. What you get is a lower entry point into SW Portland, genuinely large lots by Portland standards, and proximity to both downtown Portland and the Washington County tech corridor. For buyers priced out of Hillsdale or Multnomah Village, this is where the math starts working.",
    ],
    personality: "SW Portland pricing without the SW Portland premium",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Beaverton-Hillsdale+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Beaverton-Hillsdale+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 52,
    bikeScore: 38,
    transitScore: 44,
    schoolDistrict: "Portland Public Schools or Beaverton School District — verify by parcel",
    schools: [
      {
        name: "Raleigh Park Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Whitford Middle School",
        type: "middle",
        grades: "6–8",
        rating: 6,
      },
      {
        name: "Beaverton High School",
        type: "high",
        grades: "9–12",
        rating: 6,
      },
      {
        name: "Wilson High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
    ],
    parks: [
      {
        name: "Gabriel Park",
        amenities: [
          "athletic fields",
          "off-leash dog area",
          "community garden",
          "playground",
          "tennis courts",
        ],
      },
      {
        name: "Raleigh Hills Community Park",
        amenities: ["open lawn", "playground", "picnic area"],
      },
      {
        name: "Fanno Creek Greenway",
        amenities: [
          "paved multi-use trail",
          "creek-side walking",
          "wildlife habitat",
        ],
      },
    ],
    restaurants: [
      {
        name: "Hazel Room",
        cuisine: "American",
        vibe:
          "Hillsdale neighborhood restaurant a few minutes east — local farm sourcing, good wine list, not a chain",
      },
      {
        name: "Laughing Planet Café",
        cuisine: "Wraps / Bowls",
        vibe:
          "Quick and filling, SW Beaverton-Hillsdale location, reliably fast lunch",
      },
      {
        name: "Banning's Restaurant & Pie House",
        cuisine: "Diner",
        vibe:
          "Old-school SW Portland diner on Barbur, pies are the reason to go",
      },
    ],
    coffee: [
      {
        name: "Peet's Coffee",
        vibe:
          "Reliable and close to the Fred Meyer corridor — practical stop on the way out of the neighborhood",
      },
      {
        name: "Case Study Coffee",
        vibe:
          "Short drive into SW — best pour-over in the area if you're willing to make the trip",
      },
    ],
    bars: [
      {
        name: "The Tavern on Killingsworth",
        vibe: "Straightforward neighborhood bar, no theme, cold beer",
      },
      {
        name: "Multnomah Village Bars",
        vibe:
          "Marco's Café and the Village area are 10 minutes east for better options",
      },
    ],
    medianHomePrice: 510000,
    priceRange: { low: 390000, high: 750000 },
    commuteToDowntown:
      "15–20 min by car via Barbur Blvd (30 min in rush hour), 40–50 min by bus on Lines 54/56",
    faqs: [
      {
        q: "Is my Beaverton-Hillsdale address Portland or Washington County?",
        a: "It depends on the specific parcel. The area straddles the City of Portland boundary and unincorporated Washington County. A Portland address means Portland city income tax, higher property tax rates, and PPS schools. A Washington County unincorporated address means no city income tax, lower property tax rates, and likely Beaverton School District. Always check the county tax record and school district lookup before making an offer — the financial difference is real.",
      },
      {
        q: "What school district serves Beaverton-Hillsdale?",
        a: "Both Portland Public Schools and Beaverton School District serve parts of this area. Which one applies depends entirely on the address. Beaverton SD is generally considered stronger at the elementary level. Use the PPS and BSD school locator tools with the specific parcel address, not just the zip code.",
      },
      {
        q: "How are the commutes from Beaverton-Hillsdale?",
        a: "Downtown Portland is 15–20 minutes via SW Barbur Boulevard in normal traffic, closer to 30–35 minutes during morning rush. The Washington County tech corridor — Intel, Nike, Tektronix — is 15–20 minutes west via Highway 217. Bus service exists on Lines 54 and 56 along the highway, though expect 40–50 minutes to downtown.",
      },
      {
        q: "How does Beaverton-Hillsdale compare to nearby Hillsdale and Raleigh Hills?",
        a: "All three feel similar on the ground — quiet, suburban, 1950s–1970s housing stock. Hillsdale and Multnomah Village carry a small premium for their walkable village centers. Raleigh Hills is unincorporated Washington County throughout, so the tax situation is cleaner. Beaverton-Hillsdale has the most complicated jurisdictional picture, which some buyers find confusing and others see as an opportunity if they find a parcel with a Washington County address.",
      },
    ],
    testimonials: [
      {
        quote:
          "I kept losing bidding wars in Hillsdale. Bri suggested we look two miles west — we found a better lot, paid less, and closed in 30 days.",
        author: "Stephanie and Aaron M.",
        context: "Bought in Beaverton-Hillsdale, 2023",
      },
      {
        quote:
          "The school district question had me paralyzed for weeks. Bri helped me get the actual BSD school locator result for the specific house before we made any decisions.",
        author: "Chris F.",
        context: "Bought in Beaverton-Hillsdale, 2024",
      },
    ],
    relatedServices: [
      "purchase",
      "fha",
      "refinance",
      "cash-out",
      "investment",
    ],
    adjacentNeighborhoods: [
      "hillsdale",
      "multnomah-village",
      "raleigh-hills",
      "beaverton",
      "west-haven-sylvan",
    ],
    seo: {
      title:
        "Buying a Home in Beaverton-Hillsdale, Portland OR | The Lindley Team",
      description:
        "Beaverton-Hillsdale real estate: cross-jurisdiction addresses, school district quirks, and lower prices than nearby SW Portland. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "raleigh-hills",
    name: "Raleigh Hills",
    city: "Portland",
    state: "OR",
    description: [
      "Raleigh Hills sits in a gap on most maps — unincorporated Washington County, wedged between the City of Portland's SW neighborhoods and Beaverton's eastern edge. SW Scholls Ferry Road and SW Beaverton-Hillsdale Highway bracket it on two sides. The housing is almost entirely 1950s through 1970s: ranches, split-levels, and a few two-story colonials on lots that run 8,000 to 15,000 square feet — larger than what the same money buys inside Portland city limits. The QFC at SW Scholls Ferry and the Raleigh Hills commercial area on Beaverton-Hillsdale Highway handle the basics.",
      "Being unincorporated Washington County means no Portland city income tax. That single fact draws buyers from SW Portland who want to stay in the same geographic corridor but shed the city tax burden. Property taxes also run lower than Portland rates. Most parcels fall in the Beaverton School District, which has performed consistently above Portland Public Schools at both the elementary and high school levels. Beaverton High School and Sunset High School both serve Raleigh Hills addresses depending on location; both are solid comprehensive high schools.",
      "The trade-off is that Raleigh Hills is suburban through and through. There is no walkable commercial core, no coffee shop to walk to, no Friday night you can do on foot. The mailing address can say Portland or Beaverton depending on the parcel, which confuses buyers and complicates school district lookups. Do not rely on Zillow's school information for specific parcels here — verify directly with Beaverton School District using the parcel address. Transit is sparse. If two people in a household are commuting, expect two cars.",
    ],
    personality: "Washington County taxes, Beaverton schools, Portland-area location",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Raleigh+Hills+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Raleigh+Hills+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 42,
    bikeScore: 32,
    transitScore: 35,
    schoolDistrict: "Beaverton School District (most parcels — verify by address)",
    schools: [
      {
        name: "Raleigh Park Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Whitford Middle School",
        type: "middle",
        grades: "6–8",
        rating: 7,
      },
      {
        name: "Beaverton High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
      {
        name: "Sunset High School",
        type: "high",
        grades: "9–12",
        rating: 8,
      },
    ],
    parks: [
      {
        name: "Raleigh Hills Community Park",
        amenities: ["playground", "open lawn", "picnic tables", "walking path"],
      },
      {
        name: "Fanno Creek Greenway",
        amenities: [
          "multi-use paved trail",
          "creek views",
          "wildlife habitat",
          "connects to Beaverton trail system",
        ],
      },
      {
        name: "Cooper Mountain Nature Park",
        amenities: [
          "native prairie habitat",
          "hiking trails",
          "wildflower meadows",
          "5 miles of trails",
        ],
      },
    ],
    restaurants: [
      {
        name: "Gustav's Pub & Grill",
        cuisine: "German-American",
        vibe:
          "Long-running SW Portland staple on SW Scholls Ferry — big portions, local regulars, reliable",
      },
      {
        name: "Sayler's Old Country Kitchen",
        cuisine: "Steakhouse",
        vibe:
          "A Portland steakhouse institution since 1945, nearby on SW Scholls Ferry — cash-and-carry energy",
      },
      {
        name: "Original Taco House",
        cuisine: "Mexican",
        vibe:
          "SW Portland institution on SW Capitol Highway — no frills, consistent, been there for decades",
      },
    ],
    coffee: [
      {
        name: "Dutch Bros Coffee",
        vibe:
          "Drive-through on SW Scholls Ferry — fast, inexpensive, the practical choice when you're in the car anyway",
      },
      {
        name: "Starbucks",
        vibe:
          "Raleigh Hills commercial area — reliable if unremarkable",
      },
    ],
    bars: [
      {
        name: "Gustav's Pub & Grill",
        vibe:
          "Doubles as the neighborhood bar — the pub side has a solid German beer list",
      },
      {
        name: "Kell's Irish Restaurant & Pub",
        vibe:
          "Short drive into SW Portland — reliably good Irish pub energy without the downtown cover charge",
      },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 430000, high: 850000 },
    commuteToDowntown:
      "20–25 min by car via Barbur Blvd or Hwy 217 (35+ in rush hour), minimal transit service",
    faqs: [
      {
        q: "Is Raleigh Hills in Portland or Beaverton?",
        a: "Neither, technically. It's unincorporated Washington County — outside both city limits. Mailing addresses vary: some parcels use a Portland zip, some use Beaverton. For tax purposes, you're in Washington County either way, which means no Portland city income tax and lower property tax rates. School district and emergency services are also Washington County, not City of Portland.",
      },
      {
        q: "What are the financial benefits of Raleigh Hills vs. SW Portland?",
        a: "The two main ones are no Portland city income tax (1% for residents) and lower property tax rates. Over a few years, those savings add up meaningfully. Beaverton School District also tends to outperform Portland Public Schools, which is a non-financial benefit that buyers with children weight heavily.",
      },
      {
        q: "What schools serve Raleigh Hills?",
        a: "Most of Raleigh Hills is in Beaverton School District. Elementary school assignment is typically Raleigh Park Elementary, middle school is Whitford, and high school is Beaverton or Sunset depending on location. Use the Beaverton School District's address-based lookup tool — do not rely on Zillow or Redfin school data, which can be wrong for individual parcels in this area.",
      },
      {
        q: "How walkable is Raleigh Hills?",
        a: "Not very. There are no walkable retail or restaurant clusters within reasonable walking distance of most residential streets. You need a car for groceries, coffee, and most errands. The Fanno Creek Greenway is accessible from some parts of the neighborhood for recreation, which is a real amenity — just not a substitute for walkability.",
      },
    ],
    testimonials: [
      {
        quote:
          "We crossed the city line and saved the Portland income tax. Same commute, same neighborhood feel, different tax bill. Bri flagged the school district question before we'd even thought about it.",
        author: "Eric and Dana S.",
        context: "Bought in Raleigh Hills, 2023",
      },
      {
        quote:
          "I thought I needed to be in Portland proper. Bri walked me through the numbers side by side. Raleigh Hills made more financial sense for our family.",
        author: "Megan H.",
        context: "Purchased in Raleigh Hills, 2024",
      },
    ],
    relatedServices: [
      "purchase",
      "fha",
      "refinance",
      "cash-out",
      "heloc",
    ],
    adjacentNeighborhoods: [
      "beaverton-hillsdale",
      "hillsdale",
      "cedar-mill",
      "beaverton",
      "west-haven-sylvan",
    ],
    seo: {
      title:
        "Buying a Home in Raleigh Hills OR | The Lindley Team",
      description:
        "Raleigh Hills real estate: unincorporated Washington County taxes, Beaverton schools, and SW Portland proximity. What buyers need to verify before making an offer. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "cedar-mill",
    name: "Cedar Mill",
    city: "Beaverton",
    state: "OR",
    description: [
      "NW Cornell Road has been Cedar Mill's commercial spine since before the area had a name. The Cedar Mill Business District between NW 107th and NW 118th has a real, functioning commercial strip: QFC for groceries, a handful of independent restaurants, a library branch, and enough services that most weekly errands can happen within a half mile. It's not a lifestyle district — nobody's doing a Saturday morning wander here — but it works, and it's been working for 40 years without requiring a major redevelopment plan to survive.",
      "The housing is 1960s and 1970s ranches, split-levels, and two-stories on generous lots. Mature firs and alders line most residential streets, and the setbacks are large enough that neighbors aren't looking into each other's living rooms. Beaverton School District serves the entire community — there's no cross-district boundary confusion here. Sunset High School is the main high school feed, and it consistently tests above state averages. NW Cornell connects westward to Portland's NW district in about 15 minutes in normal traffic, which gives Cedar Mill residents reasonable access to Portland restaurants and culture without the city tax bill.",
      "Cedar Mill sits in unincorporated Washington County, which means no Portland or Beaverton city income taxes. That's the financial argument, and it's straightforward. The honest limitation is that Cedar Mill is suburban in a way that neither Portland nor the newer Bethany development tries to be — the streets don't have sidewalks on every block, MAX doesn't come anywhere near it, and dinner options beyond the Cornell corridor require a drive. For buyers who want a newer-ish house on a big lot, good schools, and a short drive to both Portland and the Intel/Nike campuses, Cedar Mill delivers without pretending to be something it's not.",
    ],
    personality: "Functional suburb with a genuine commercial strip",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Cedar+Mill+Beaverton+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Cedar+Mill+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 48,
    bikeScore: 42,
    transitScore: 38,
    schoolDistrict: "Beaverton School District",
    schools: [
      {
        name: "Cedar Mill Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Tumwater Middle School",
        type: "middle",
        grades: "6–8",
        rating: 7,
      },
      {
        name: "Sunset High School",
        type: "high",
        grades: "9–12",
        rating: 8,
      },
    ],
    parks: [
      {
        name: "Cedar Mill Community Park",
        amenities: [
          "playground",
          "sports courts",
          "open lawn",
          "picnic shelters",
        ],
      },
      {
        name: "Tualatin Hills Nature Park",
        amenities: [
          "5+ miles of trails",
          "lowland forest",
          "wetlands",
          "nature center",
        ],
      },
      {
        name: "Rock Creek Trail",
        amenities: [
          "paved multi-use trail",
          "creek-side walking",
          "connects to regional trail network",
        ],
      },
    ],
    restaurants: [
      {
        name: "Pizzicato",
        cuisine: "Pizza",
        vibe:
          "NW Cornell — good gourmet pizza, quick, reliable for a Tuesday dinner without planning ahead",
      },
      {
        name: "Koji Osakaya",
        cuisine: "Japanese",
        vibe:
          "Cedar Mill strip — legitimate Japanese food, not a strip mall surprise, regulars know it",
      },
      {
        name: "The Station",
        cuisine: "American",
        vibe:
          "Local bar and grill on NW Cornell, easy neighborhood dinner, not trying too hard",
      },
    ],
    coffee: [
      {
        name: "Insomnia Coffee",
        vibe:
          "Small local chainlet, NW Cornell — reliable espresso, comfortable seating, popular with remote workers",
      },
      {
        name: "Dutch Bros Coffee",
        vibe:
          "Drive-through on NW Cornell — fast and practical for the morning commute",
      },
    ],
    bars: [
      {
        name: "The Station Bar",
        vibe:
          "The neighborhood bar — low-key, local crowd, nothing fancy",
      },
      {
        name: "McMenamins Cornelius Pass Roadhouse",
        vibe:
          "Short drive up Cornell — historic farmhouse setting, multiple bars and spaces, reliably good for groups",
      },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 430000, high: 850000 },
    commuteToDowntown:
      "20–25 min by car via NW Cornell or Hwy 26 (35 min in rush hour), no MAX service",
    faqs: [
      {
        q: "Is Cedar Mill part of Beaverton or Portland?",
        a: "Neither — Cedar Mill is unincorporated Washington County. It uses a Beaverton mailing address (97229 zip code), and it's served by Beaverton School District and Washington County services, but it's not legally inside Beaverton city limits. This means no Beaverton city taxes and no Portland city taxes. Property and income taxes run lower than Portland's.",
      },
      {
        q: "What high school do Cedar Mill students attend?",
        a: "Most of Cedar Mill feeds into Sunset High School in Beaverton School District. Sunset consistently performs above state averages and offers a range of AP and advanced coursework. There's no cross-district ambiguity here — the whole community is Beaverton SD.",
      },
      {
        q: "How's the commute to downtown Portland from Cedar Mill?",
        a: "About 20–25 minutes via NW Cornell Road or US-26 West in normal traffic, 30–35 minutes during morning rush. There's no MAX stop in Cedar Mill, so driving is essentially required. Commutes to the Intel campus in Hillsboro or Nike's Beaverton campus are 15–20 minutes.",
      },
      {
        q: "Why do buyers choose Cedar Mill over Beaverton or Hillsboro?",
        a: "Three main reasons: unincorporated Washington County taxes (lower than Portland, also lower than Beaverton city taxes), good public schools through Beaverton SD, and the Cornell Road connection to Portland's NW district. The housing stock also tends to run on bigger lots than you get in Beaverton proper at similar price points.",
      },
    ],
    testimonials: [
      {
        quote:
          "We work in Beaverton but wanted to stay close to Portland. Cedar Mill was the answer we didn't know we were looking for. Bri explained the tax situation better than any accountant we talked to.",
        author: "Sarah and Jason T.",
        context: "Bought in Cedar Mill, 2023",
      },
      {
        quote:
          "The house had been on the market 45 days and we almost passed on it. Bri ran the numbers on what updates would actually add value and we made an offer. Best decision we made.",
        author: "Derek L.",
        context: "Purchased in Cedar Mill, 2024",
      },
    ],
    relatedServices: [
      "purchase",
      "fha",
      "refinance",
      "heloc",
      "cash-out",
    ],
    adjacentNeighborhoods: [
      "bethany",
      "raleigh-hills",
      "cedar-hills",
      "beaverton",
      "hillsboro",
      "forest-heights",
    ],
    seo: {
      title:
        "Buying a Home in Cedar Mill OR | The Lindley Team",
      description:
        "Cedar Mill real estate: unincorporated Washington County, Beaverton School District, and 20 minutes from Portland. What buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "cedar-hills",
    name: "Cedar Hills",
    city: "Beaverton",
    state: "OR",
    description: [
      "Cedar Hills Crossing sits at the SW Cedar Hills Boulevard MAX station — a regional retail center that opened in 1969 and has cycled through formats over the decades. It anchors the neighborhood's sense of place in a way that few Washington County suburbs can claim: the MAX Blue Line stops here, which means you can get to downtown Portland in about 35 minutes without a car and without a transfer. For a suburb this far west, that's genuinely useful. The shopping center has a Target, a theater, and enough everyday retail that households without a second car can make it work.",
      "The housing stock is primarily 1950s and 1960s construction — ranches and split-levels on lots ranging from 7,000 to 14,000 square feet. Streets are tree-lined in the older sections, and mature landscaping gives the neighborhood a settled appearance that newer Washington County developments like Bethany lack. Beaverton School District serves Cedar Hills entirely; most residential streets feed into Sunset High School. The Tualatin Hills Park & Recreation District runs a large community center at SW Walker Road and SW Cedar Hills Boulevard with a pool, gym, and full programming — it's a real facility.",
      "Cedar Hills is not a destination, but it's genuinely functional. The MAX access is the differentiator — if transit matters to your household, this is one of the few Washington County communities where it's a real daily option rather than a theoretical one. The trade-off is that Cedar Hills Boulevard can feel like any Pacific Northwest suburban arterial, the commercial options outside of Cedar Hills Crossing are thin, and the housing stock needs updating in many cases. What you get is reliable transit, good schools, lower taxes than Portland, and a price point that's come down from its peak.",
    ],
    personality: "Washington County suburb with real MAX access",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Cedar+Hills+Beaverton+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Cedar+Hills+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 54,
    bikeScore: 48,
    transitScore: 58,
    schoolDistrict: "Beaverton School District",
    schools: [
      {
        name: "Elmonica Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 6,
      },
      {
        name: "Five Oaks Middle School",
        type: "middle",
        grades: "6–8",
        rating: 6,
      },
      {
        name: "Sunset High School",
        type: "high",
        grades: "9–12",
        rating: 8,
      },
      {
        name: "Valley Catholic School",
        type: "private",
        grades: "K–12",
        rating: 8,
      },
    ],
    parks: [
      {
        name: "Tualatin Hills Aquatic Center",
        amenities: [
          "indoor competition pool",
          "lap lanes",
          "family swim area",
          "fitness center",
        ],
      },
      {
        name: "Cedar Hills Recreation Center",
        amenities: [
          "gymnasium",
          "weight room",
          "fitness classes",
          "youth programs",
        ],
      },
      {
        name: "Cedar Hills Park",
        amenities: [
          "baseball fields",
          "tennis courts",
          "playground",
          "open lawn",
        ],
      },
    ],
    restaurants: [
      {
        name: "Red Robin",
        cuisine: "American",
        vibe:
          "Cedar Hills Crossing — family-friendly, reliable, zero pretense",
      },
      {
        name: "Gustav's Pub & Grill",
        cuisine: "German-American",
        vibe:
          "SW Cedar Hills Boulevard — the neighborhood's best sit-down dinner option, long-running, consistently good",
      },
      {
        name: "Muchas Gracias",
        cuisine: "Mexican",
        vibe:
          "Late-night fast-food Mexican on SW Cedar Hills — open until 4 a.m., useful after the MAX ride home",
      },
    ],
    coffee: [
      {
        name: "Starbucks",
        vibe:
          "Multiple Cedar Hills Crossing locations — practical anchor for the neighborhood",
      },
      {
        name: "Dutch Bros Coffee",
        vibe:
          "SW Cedar Hills Boulevard drive-through — fast, cheap, popular with the morning commute crowd",
      },
    ],
    bars: [
      {
        name: "Gustav's Pub & Grill",
        vibe:
          "The neighborhood bar for Cedar Hills — large German beer selection, food until late, local regulars",
      },
      {
        name: "McMenamins Beaverton",
        vibe:
          "Short drive south on Cedar Hills Boulevard — classic McMenamins setup with multiple bars and a movie theater",
      },
    ],
    medianHomePrice: 530000,
    priceRange: { low: 390000, high: 780000 },
    commuteToDowntown:
      "35 min on MAX Blue Line, 20–25 min by car via US-26 (30–40 min in rush hour)",
    faqs: [
      {
        q: "How useful is the MAX for Cedar Hills commuters?",
        a: "More useful than in most Washington County suburbs. The Blue Line stop at Cedar Hills Crossing puts downtown Portland about 35 minutes away without traffic. If you work in downtown Portland or the Lloyd District, this is a legitimate daily option. If you work in Hillsboro, the MAX also runs that direction. The catch: if your job is anywhere not served by the Blue Line, you're still driving.",
      },
      {
        q: "What school district serves Cedar Hills?",
        a: "Beaverton School District, with no cross-district complications. Most of Cedar Hills is zoned for Sunset High School, which is one of Beaverton SD's stronger high schools academically. Elementary assignments vary by street — use BSD's address lookup to confirm.",
      },
      {
        q: "Is Cedar Hills inside Beaverton city limits?",
        a: "Most of Cedar Hills is unincorporated Washington County, same as Cedar Mill. The Cedar Hills Crossing retail area sits at the city edge. Either way, Washington County taxes apply, not Beaverton city taxes, which means no city income tax and lower overall tax rates than Portland.",
      },
      {
        q: "What's happening with Cedar Hills Crossing?",
        a: "The shopping center has had vacancies over the past few years as retail has shifted. There are long-running plans for mixed-use redevelopment around the MAX station, but those timelines have stretched repeatedly. For current buyers, the practical reality is a functional but not exciting retail center — the Target and grocery options remain operational.",
      },
    ],
    testimonials: [
      {
        quote:
          "My husband takes the MAX to his downtown office every day. Cedar Hills was the obvious choice once we ran the commute comparison. Bri walked us through the numbers on Washington County taxes versus Portland.",
        author: "Lin and Marcus B.",
        context: "Bought in Cedar Hills, 2023",
      },
      {
        quote:
          "We had a tight timeline and Bri got us to closing in 21 days. I didn't think that was possible.",
        author: "Pamela G.",
        context: "Purchased in Cedar Hills, 2024",
      },
    ],
    relatedServices: [
      "purchase",
      "fha",
      "refinance",
      "cash-out",
      "investment",
    ],
    adjacentNeighborhoods: [
      "cedar-mill",
      "beaverton",
      "hillsboro",
      "beaverton-hillsdale",
      "raleigh-hills",
    ],
    seo: {
      title:
        "Buying a Home in Cedar Hills OR | The Lindley Team",
      description:
        "Cedar Hills real estate: MAX Blue Line access, Beaverton School District, and Washington County taxes. What buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "bethany",
    name: "Bethany",
    city: "Beaverton",
    state: "OR",
    description: [
      "Bethany grew fast. Through the 2010s it was one of Washington County's most active new-construction zones — subdivisions carved out of farmland along NW 185th Avenue and NW Springville Road at a pace that generated a consistent waiting list at local schools. The housing reflects that growth: 2000s and 2010s construction, four-bedroom Craftsman-revival and contemporary houses on 5,000–8,000-square-foot lots, two-car garages, open floor plans. Bethany Town Center at NW 185th and NW Laidlaw has the basics — Starbucks, a grocery store, a few chain restaurants — and functions as the community's practical center.",
      "Intel's Hillsboro campus is about 15 minutes west on US-26, which explains a large portion of Bethany's buyer pool. Nike's campus is 20 minutes south. Both campuses have enough employment concentration that Bethany gets frequent mentions in relocation conversations among tech and semiconductor workers. Beaverton School District serves the whole community; Sunset High School and Westview High School both serve Bethany depending on address, and both are among Beaverton SD's better high schools. The schools fill up during enrollment periods — verify school capacity and assignment before making an offer.",
      "Bethany is unincorporated Washington County, which means no city income tax and Washington County property tax rates. Those are genuine financial advantages. The honest trade-off is that Bethany is car-dependent in a way that's hard to overstate — there is no MAX, bus service is sparse, and NW 185th and NW Springville back up significantly during rush hour. The community is also still maturing: some retail pads in Bethany Town Center remain undeveloped, and the built infrastructure doesn't yet match the residential density. Buyers choosing Bethany are generally making a clear trade: newer house, good schools, lower taxes, longer commute to Portland.",
    ],
    personality: "New-construction suburb built for the Intel commute",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Bethany+Beaverton+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Bethany+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 32,
    bikeScore: 28,
    transitScore: 24,
    schoolDistrict: "Beaverton School District",
    schools: [
      {
        name: "Sato Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 8,
      },
      {
        name: "Stoller Middle School",
        type: "middle",
        grades: "6–8",
        rating: 8,
      },
      {
        name: "Westview High School",
        type: "high",
        grades: "9–12",
        rating: 8,
      },
      {
        name: "Sunset High School",
        type: "high",
        grades: "9–12",
        rating: 8,
      },
    ],
    parks: [
      {
        name: "Bethany Lake Park",
        amenities: [
          "lake",
          "paved walking loop",
          "playground",
          "picnic shelters",
          "fishing",
        ],
      },
      {
        name: "Bethany Creek Trail",
        amenities: [
          "paved multi-use trail",
          "creek corridor",
          "connects to regional trail network",
        ],
      },
      {
        name: "Springville Road Park",
        amenities: ["athletic fields", "playground", "open lawn"],
      },
    ],
    restaurants: [
      {
        name: "The Observatory",
        cuisine: "American",
        vibe:
          "Bethany Town Center — neighborhood gastropub, solid burgers and beer, the evening spot within walking distance of nearby subdivisions",
      },
      {
        name: "Swagat Indian Cuisine",
        cuisine: "Indian",
        vibe:
          "NW 185th — one of the better Indian restaurants in Washington County, lunch buffet is worth planning around",
      },
      {
        name: "El Tepeyac Mexican Restaurant",
        cuisine: "Mexican",
        vibe:
          "Bethany area — family-run, consistent, the practical weeknight dinner choice",
      },
    ],
    coffee: [
      {
        name: "Starbucks",
        vibe:
          "Bethany Town Center — the primary coffee option for the neighborhood, drive-through line runs long on weekday mornings",
      },
      {
        name: "Dutch Bros Coffee",
        vibe:
          "NW 185th corridor — fast, inexpensive, the competition for the morning commute dollar",
      },
    ],
    bars: [
      {
        name: "The Observatory",
        vibe:
          "Doubles as the neighborhood bar — better beer selection than you'd expect, comfortable for a weeknight",
      },
      {
        name: "McMenamins Cornelius Pass Roadhouse",
        vibe:
          "10 minutes east on NW Cornell — the closest McMenamins to Bethany, multiple rooms and a covered outdoor space",
      },
    ],
    medianHomePrice: 650000,
    priceRange: { low: 500000, high: 1100000 },
    commuteToDowntown:
      "30–40 min by car via US-26 or NW Cornell (45+ in rush hour), no MAX service",
    faqs: [
      {
        q: "Why do so many Intel and Nike employees buy in Bethany?",
        a: "The Intel Hillsboro campus is roughly 15 minutes west on US-26. Nike's Beaverton campus is 20 minutes south. Both are short commutes from Bethany. Combined with new construction at a lower cost per square foot than comparable Portland neighborhoods, Beaverton School District's strong test scores, and Washington County's lower tax burden, the math works well for tech workers who want a newer house and a predictable commute.",
      },
      {
        q: "Is Bethany inside Beaverton city limits?",
        a: "No. Bethany is unincorporated Washington County, using a Beaverton zip code and address but outside city limits. This means Washington County property taxes and no city income tax — neither Portland's nor Beaverton's. It also means Washington County provides planning and zoning services, which has historically allowed faster development approvals than incorporated cities.",
      },
      {
        q: "What schools serve Bethany?",
        a: "Beaverton School District throughout, with no cross-district confusion. Elementary assignments vary by subdivision — Sato Elementary and Jacob Wismer Elementary are the main feeds. Middle school is typically Stoller. High school is either Westview or Sunset depending on location; both rank among BSD's stronger high schools. Use BSD's address-based school finder to confirm the specific parcel's assignment.",
      },
      {
        q: "What's the commute to downtown Portland from Bethany?",
        a: "Driving is 30–40 minutes via US-26 East in normal conditions, 45+ minutes during morning rush. There is no MAX in Bethany — the nearest station is Cedar Hills Crossing, about 15 minutes east by car, from which the Blue Line runs to downtown. If someone in your household needs to commute to Portland daily, test the actual drive during rush hour before committing.",
      },
    ],
    testimonials: [
      {
        quote:
          "We moved here for an Intel relo and needed to close in six weeks. Bri made it happen. She knew Washington County construction loans inside out.",
        author: "Priya and Ravi N.",
        context: "Bought in Bethany, 2023",
      },
      {
        quote:
          "We compared Bethany to Hillsboro and Beaverton proper. Bri built us a spreadsheet that showed total cost of ownership over five years across all three. Made the decision easy.",
        author: "Andrew C.",
        context: "Purchased in Bethany, 2024",
      },
    ],
    relatedServices: [
      "purchase",
      "jumbo",
      "fha",
      "refinance",
      "va",
      "heloc",
    ],
    adjacentNeighborhoods: [
      "cedar-mill",
      "cedar-hills",
      "hillsboro",
      "beaverton",
      "forest-heights",
    ],
    seo: {
      title:
        "Buying a Home in Bethany OR | The Lindley Team",
      description:
        "Bethany real estate: new construction, Beaverton School District, Intel proximity, and Washington County taxes. What buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },
];
