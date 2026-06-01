import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsSW: NeighborhoodData[] = [
  {
    slug: "multnomah-village",
    name: "Multnomah Village",
    city: "Portland",
    state: "OR",
    description: [
      "Annie Bloom's Books on SW Capitol Highway has been a neighborhood independent bookstore since 1978 — the kind of place where the staff has opinions and the shelves are curated rather than algorithmic. The Capitol Highway commercial strip running through Multnomah Village has a half-dozen businesses that have been in the same location for decades: a hardware store, a barber, Obi for Japanese izakaya, a pizza spot that doesn't have a website. It's a genuine small-town commercial strip inside Portland city limits, and that's not an accident — residents have pushed back against chain creep for years.",
      "Gabriel Park, at 90 acres, is one of the better parks in SW Portland: tennis courts, a skate park, a large off-leash dog area, soccer and baseball fields, and trails that connect into the SW greenway network. The housing is primarily 1940s–1960s ranches and split-levels — affordable by Portland standards, well-built, on lots that run 6,000–10,000 sq ft. Craftsmans from the 1930s show up occasionally and sell fast. The neighborhood sits at about 400 feet elevation, which means views from the upper streets and a legitimate hill climb if you're biking in.",
      "There is no meaningful transit to downtown. The 44 bus runs but adds 45+ minutes each way, which is why everyone drives. SW Capitol Highway through the village backs up at afternoon rush — it's the main arterial and there's no good workaround. Buyers coming from inner NE Portland are sometimes surprised by how car-dependent this is. If that's a dealbreaker, Multnomah Village isn't the right neighborhood. If it's not, you get a lot of house and a genuinely functional neighborhood for around $620k.",
    ],
    personality: "Real small-town street inside Portland — car-dependent and proud of it",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Multnomah+Village+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Multnomah+Village+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 62,
    bikeScore: 55,
    transitScore: 35,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Hayhurst Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Robert Gray Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Wilson High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Gabriel Park",
        amenities: [
          "tennis courts",
          "skate park",
          "off-leash dog area",
          "soccer fields",
          "baseball field",
          "trails",
          "community garden",
        ],
      },
      {
        name: "Multnomah Village Parkway",
        amenities: ["neighborhood walking path", "stream corridor", "benches"],
      },
    ],
    restaurants: [
      {
        name: "Obi",
        cuisine: "Japanese",
        vibe: "Izakaya on SW Capitol Hwy — yakitori, sake, good for a weeknight dinner when you don't want to drive far",
      },
      {
        name: "Jade Kitchen",
        cuisine: "Chinese-American",
        vibe: "SW Capitol Hwy, neighborhood Chinese, the kind of place regulars return to for years",
      },
      {
        name: "Fat City Cafe",
        cuisine: "Diner",
        vibe: "SW Multnomah Blvd breakfast diner, been there since forever, order the biscuits and gravy",
      },
      {
        name: "Marco's Cafe",
        cuisine: "American",
        vibe: "SW Multnomah Blvd, neighborhood cafe-restaurant with loyal regulars and a good weekend brunch",
      },
    ],
    coffee: [
      {
        name: "Coffee Time",
        vibe: "SW Capitol Hwy — neighborhood coffee spot, not trying to be anything other than functional and good",
      },
      {
        name: "Marco's Cafe",
        vibe: "Doubles as the neighborhood morning stop — espresso and breakfast on SW Multnomah Blvd",
      },
    ],
    bars: [
      {
        name: "The Village Pub",
        vibe: "SW Capitol Hwy, neighborhood bar, low-key, not going anywhere",
      },
      {
        name: "Jade Kitchen",
        vibe: "Has a bar side worth knowing about — quiet weeknights, good well drinks",
      },
    ],
    medianHomePrice: 620000,
    priceRange: { low: 480000, high: 950000 },
    commuteToDowntown:
      "20–25 min by car (35+ in rush hour on SW Barbur or SW Capitol), no meaningful transit option",
    faqs: [
      {
        q: "What's the commute from Multnomah Village to downtown Portland?",
        a: "It's a car commute, full stop. SW Capitol Highway to SW Barbur Blvd takes 20–25 minutes in normal traffic, 35–40 in afternoon rush. The 44 bus runs but takes 45+ minutes with the trip to a transit hub. There's no MAX nearby. If you need reliable non-car transit to downtown, Multnomah Village isn't the right call.",
      },
      {
        q: "What are the schools like in Multnomah Village?",
        a: "The pipeline is Hayhurst Elementary → Robert Gray Middle → Wilson High School. Wilson is one of PPS's stronger high schools and gets most of the attention. Hayhurst is a well-regarded neighborhood elementary with active parent involvement. The middle school is average for PPS. Overall, the school situation is a legitimate draw for families, not just a talking point.",
      },
      {
        q: "How much does a home cost in Multnomah Village?",
        a: "Median is around $620,000. Most houses trade between $480k and $750k — ranches and split-levels from the 1950s and 1960s at the lower end, better-maintained or larger Craftsmans pushing higher. Inventory is low and turnover is slow. Well-priced houses in the village core tend to move fast.",
      },
      {
        q: "Is Multnomah Village good for families?",
        a: "It's one of the better SW Portland options for families specifically: Gabriel Park is big and well-equipped, the school pipeline through Wilson High is solid, and the village commercial strip gives kids actual walkable destinations without sending them to a strip mall. The trade is a full car-dependent commute for whoever works outside the neighborhood.",
      },
    ],
    testimonials: [
      {
        quote:
          "We'd been priced out of Sellwood and didn't want to leave the SW. Bri found us a 1958 split-level in Multnomah Village at $597k. Two blocks from Gabriel Park. We'd looked for eight months and couldn't believe it was still available.",
        author: "Alicia and Ben T.",
        context: "Bought in Multnomah Village, 2023",
      },
      {
        quote:
          "We refinanced and got down to 5.9%. Bri showed me three rate scenarios before we committed. It wasn't a pressure situation — she wanted to make sure it actually made sense for us.",
        author: "Frank D.",
        context: "Refinanced in Multnomah Village, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "heloc"],
    adjacentNeighborhoods: ["hillsdale", "goose-hollow", "nob-hill"],
    seo: {
      title: "Buying a Home in Multnomah Village, Portland OR | The Lindley Team",
      description:
        "Multnomah Village real estate: Gabriel Park, Annie Bloom's Books, home prices, and what SW Portland buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "hillsdale",
    name: "Hillsdale",
    city: "Portland",
    state: "OR",
    description: [
      "The Hillsdale Town Center sits at SW Capitol Highway and SW Sunset Boulevard — a strip commercial intersection with a New Seasons Market, a hardware store, a Thai restaurant, and a handful of independently-owned businesses that have lasted long enough to count. It doesn't have the postcard quality of Multnomah Village, but it's functional in a way that matters more on a Tuesday: grocery, pharmacy, coffee, lunch, all within a quarter mile. Wilson High School is four blocks away, which explains a significant portion of why families move to Hillsdale.",
      "The housing stock is more suburban than inner Portland — ranch houses and split-levels from the 1950s and 1960s on standard city lots, with some older Craftsmans mixed in on the streets above the town center. The Duniway Park trail connects the neighborhood east toward Barbur Blvd and eventually the South Park Blocks. Ava's Kitchen on SW Capitol Hwy has been a neighborhood Mexican restaurant for years and is the kind of place you go back to. The Barbur World Foods grocery — a local institution — is nearby on Barbur Blvd.",
      "The honest assessment: Hillsdale is car-dependent. Barbur Blvd MAX — when it eventually opens as part of the Southwest Corridor project — will change the transit picture, but that's been 'coming soon' long enough that buyers shouldn't factor it into a near-term purchase decision. Right now you drive, and Barbur Blvd rush hour is real friction. Prices are lower than Multnomah Village because the neighborhood is more utilitarian, but the school pipeline is identical.",
    ],
    personality: "Workhorse SW neighborhood — Wilson High, New Seasons, and no pretense",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Hillsdale+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Hillsdale+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 65,
    bikeScore: 48,
    transitScore: 38,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Rieke Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Robert Gray Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Wilson High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Duniway Park",
        amenities: ["walking and running trail", "connection to Terwilliger Blvd trail", "open lawn"],
      },
      {
        name: "Gabriel Park",
        amenities: [
          "tennis courts",
          "skate park",
          "off-leash dog area",
          "sports fields",
          "adjacent to Multnomah Village",
        ],
      },
    ],
    restaurants: [
      {
        name: "Ava's Kitchen",
        cuisine: "Mexican",
        vibe: "SW Capitol Hwy, neighborhood Mexican with a loyal following, not flashy, consistently good",
      },
      {
        name: "Bridgeport Brewpub",
        cuisine: "American / Brewpub",
        vibe: "Short drive on SW Barbur, one of Portland's original craft beer spots, solid pub food",
      },
      {
        name: "Syun Izakaya",
        cuisine: "Japanese",
        vibe: "Hillsboro location for the splurge, but worth knowing — excellent ramen circuit for the area",
      },
      {
        name: "Thai Orchid",
        cuisine: "Thai",
        vibe: "SW Capitol Hwy in the town center, neighborhood Thai that's been there for years",
      },
    ],
    coffee: [
      {
        name: "Stumptown Coffee",
        vibe: "Close enough via SW Barbur — the Hillsdale area runs on short drives to nearby options",
      },
      {
        name: "New Seasons Hillsdale",
        vibe: "The grocery store coffee bar works well enough for weekday mornings — it's what most people actually do",
      },
    ],
    bars: [
      {
        name: "Bridgeport Brewpub",
        vibe: "One of Portland's original craft brewpubs on SW Barbur — the patio is the main draw in summer",
      },
      {
        name: "Hillsdale Brew & Chew",
        vibe: "SW Capitol Hwy, casual neighborhood pub, patio, not a destination bar but a solid local option",
      },
    ],
    medianHomePrice: 580000,
    priceRange: { low: 440000, high: 880000 },
    commuteToDowntown:
      "20–25 min by car on SW Barbur or I-5 (30–40 in rush hour), bus service on Barbur takes 40+ min",
    faqs: [
      {
        q: "When will the Barbur Blvd MAX open, and will it change Hillsdale?",
        a: "The Southwest Corridor MAX project, which would serve Barbur Blvd, has been in planning and funding stages for years with no firm opening date. It would meaningfully improve Hillsdale's transit situation if and when it opens. But buyers shouldn't underwrite that into a purchase today — the neighborhood is car-dependent now and will remain so until that line is operational.",
      },
      {
        q: "How does Hillsdale compare to Multnomah Village?",
        a: "They share the same school pipeline — Rieke vs. Hayhurst at the elementary level, then Robert Gray and Wilson. Multnomah Village has a more developed, walkable commercial strip. Hillsdale's town center is more utilitarian. Prices in Hillsdale tend to run $20k–$50k lower on comparable houses, which is the trade most buyers make.",
      },
      {
        q: "Is Hillsdale good for families?",
        a: "Yes, particularly because Wilson High School is literally four blocks from the town center. The school pipeline is the same as Multnomah Village — Rieke Elementary is well-regarded, Robert Gray Middle is average, Wilson is one of PPS's stronger comprehensive high schools. Gabriel Park is close. It's a reasonable place to raise kids with a lower price tag than some comparable neighborhoods.",
      },
      {
        q: "What types of homes are in Hillsdale?",
        a: "Mostly 1950s and 1960s ranch houses and split-levels on 6,000–8,500 sq ft lots. Some older Craftsmans from the 1930s–1940s on the upper streets, and a small number of newer infill houses. Basements are common and often partially finished. Not a lot of Victorian or early Portland character — this is practical postwar housing that's held up well.",
      },
    ],
    testimonials: [
      {
        quote:
          "Wilson High was the reason we were looking in SW Portland at all. Hillsdale got us into the zone $60k cheaper than Multnomah Village. Bri ran the school boundary maps herself so we knew exactly which streets qualified.",
        author: "Susan and Mark H.",
        context: "Bought in Hillsdale, 2023",
      },
      {
        quote:
          "I used the HELOC to pay off the roof and convert the basement. Bri explained the draw period and variable rate mechanics before I committed — I didn't feel like I was guessing.",
        author: "Roger P.",
        context: "HELOC on Hillsdale home, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "heloc", "refinance"],
    adjacentNeighborhoods: ["multnomah-village", "goose-hollow", "nob-hill"],
    seo: {
      title: "Buying a Home in Hillsdale, Portland OR | The Lindley Team",
      description:
        "Hillsdale real estate: Wilson High School, town center, home prices, and what SW Portland buyers should know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "nob-hill",
    name: "Nob Hill",
    city: "Portland",
    state: "OR",
    description: [
      "NW 23rd Avenue — 'Trendy-Third' to people who've lived in Portland long enough — is still the most walkable retail street in residential Portland. Ken's Artisan Bakery on NW 21st opens at 7am and is one of the best reasons to live in this part of the city. St. Honoré Boulangerie on NW 23rd is the other one. Elephants Delicatessen, Escape from New York Pizza, the original Patagonia store — the commercial strip has had turnover over the years but the density of independently-owned businesses per block is still higher here than anywhere outside the Pearl. Thurman Street at the north end of 23rd leads directly into Forest Park.",
      "The housing stock is what Portland built before cars became the organizing principle: Victorian houses from the 1880s–1910s, early 20th-century apartment buildings, and narrow lots with deep houses on a street grid that actually works on foot. Chapman Elementary feeds into West Sylvan Middle School and Lincoln High School — Lincoln runs the International Baccalaureate program, which is the school anchor for NW Portland. Most of the residential streets between NW Lovejoy and NW Thurman are quiet despite the commercial activity two blocks away.",
      "The hills between Nob Hill and downtown are real. The route to the city center looks bikeable on a map until you're on it. The Burnside Bridge approach involves climbing NW 14th or dealing with the MAX corridor. Driving is easier but parking is metered or permitted on most streets near 23rd. The entry price for a Victorian with original woodwork is real: $850k is the median, and that buys a house that needs work on the upper streets or a well-maintained one further from the park trailhead.",
    ],
    personality: "Portland's best walking street, backed into Forest Park",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Nob+Hill+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Nob+Hill+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 92,
    bikeScore: 72,
    transitScore: 68,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Chapman Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "West Sylvan Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Forest Park",
        amenities: [
          "Wildwood Trail (30+ miles)",
          "Thurman Street trailhead",
          "old-growth fir stands",
          "off-leash dog sections",
        ],
      },
      {
        name: "Wallace Park",
        amenities: ["playground", "open lawn", "community space"],
      },
    ],
    restaurants: [
      {
        name: "Ken's Artisan Pizza",
        cuisine: "Pizza",
        vibe: "NW 21st Ave, wood-fired, James Beard-recognized, the best pizza in Portland and most people agree",
      },
      {
        name: "Paley's Place",
        cuisine: "New American",
        vibe: "NW 21st Ave, long-running Northwest cuisine, good for a real dinner occasion",
      },
      {
        name: "Escape from New York Pizza",
        cuisine: "Pizza",
        vibe: "NW 23rd Ave, by the slice, open late, been on that corner for decades",
      },
      {
        name: "Elephants Delicatessen",
        cuisine: "Deli / Cafe",
        vibe: "NW 22nd Ave, prepared foods, catering, has fed this neighborhood for 40+ years",
      },
    ],
    coffee: [
      {
        name: "St. Honoré Boulangerie",
        vibe: "NW 23rd Ave French bakery — croissants and espresso that make the rent worth it",
      },
      {
        name: "Ken's Artisan Bakery",
        vibe: "NW 21st Ave, opens 7am, the pastries and bread alone justify living in this neighborhood",
      },
    ],
    bars: [
      {
        name: "Rogue Ales Public House",
        vibe: "NW 23rd Ave, Rogue's flagship Portland spot, solid taps and a bar crowd that's been coming for years",
      },
      {
        name: "Bluehour",
        vibe: "NW 13th Ave in the Pearl edge, upscale cocktails, worth the walk if you're doing a proper evening",
      },
    ],
    medianHomePrice: 850000,
    priceRange: { low: 600000, high: 1800000 },
    commuteToDowntown:
      "15–20 min by car (parking at destination is the issue), 25–30 min by bike (hilly), 20 min on bus (Line 15 or 77)",
    faqs: [
      {
        q: "Is Nob Hill actually walkable, or is that overstated?",
        a: "NW 23rd and NW 21st are genuinely walkable — grocery, bakeries, restaurants, coffee, hardware, clothing, all within a 10-minute walk of most residential blocks. The walk score is earned. What people sometimes don't mention: the streets get steeper as you go north toward Thurman, and downtown is downhill going in but uphill coming home. It's walkable to the neighborhood; walking to downtown is a workout.",
      },
      {
        q: "What do homes in Nob Hill cost?",
        a: "Median is around $850,000. The range is wide: smaller condos in older buildings from $500k, Victorians with original character on NW 18th–22nd from $750k–$1.2M, and full-renovation projects at the upper end. Parking is often missing or in a garage, which affects price. If you're buying for the IB program at Lincoln High, budget above $750k for a house.",
      },
      {
        q: "Is Nob Hill good for families?",
        a: "Yes, particularly at the school level. Chapman Elementary is well-regarded, West Sylvan Middle School is one of PPS's stronger middle schools, and Lincoln High School runs the IB program — it's the school destination in NW Portland and one of PPS's best. The neighborhood is walkable for kids. The trade is price: you're paying a significant premium over comparable family neighborhoods in SE Portland.",
      },
      {
        q: "How close is Forest Park?",
        a: "Thurman Street at the top of NW 23rd hits the Leif Erikson trailhead directly. From most Nob Hill blocks you're walking to the trailhead in 15–20 minutes. Wildwood Trail runs 30+ miles from there. It's one of the genuine amenities of this neighborhood and not something you can replicate elsewhere in the city at this price.",
      },
    ],
    testimonials: [
      {
        quote:
          "We moved from Manhattan and Nob Hill was the only Portland neighborhood that didn't feel like a downgrade on walkability. Bri helped us close on a Victorian on NW 19th — it needed work, we knew that going in, but the bones were worth it.",
        author: "Claire and James O.",
        context: "Bought in Nob Hill, 2023",
      },
      {
        quote:
          "The jumbo loan process was smoother than I expected. Bri had pre-approval in hand before we even started seriously looking — it's the only way to compete in this market.",
        author: "Nathan W.",
        context: "Bought in Nob Hill, 2024",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc"],
    adjacentNeighborhoods: ["slabtown", "pearl-district", "goose-hollow"],
    seo: {
      title: "Buying a Home in Nob Hill (NW 23rd), Portland OR | The Lindley Team",
      description:
        "Nob Hill real estate: Victorian homes, NW 23rd walkability, Forest Park access, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "slabtown",
    name: "Slabtown",
    city: "Portland",
    state: "OR",
    description: [
      "Portland's newest officially designated neighborhood — official status came in 2015 — Slabtown sits between Nob Hill and the Pearl District in a way that makes the geography easy to explain but the feel harder to pin down. The NW 23rd commercial strip runs along its eastern edge, giving residents walking access to Ken's Artisan Bakery, St. Honoré, and the rest of the NW 23rd infrastructure without paying Nob Hill Victorian prices. Amazon Fresh opened a location here. The MAX Blue and Red lines stop at NW 23rd and Lovejoy, which is the best transit situation in NW Portland.",
      "The housing stock is entirely dense: condos, townhomes, and a handful of converted industrial buildings. No single-family homes. The buyers here are skewing young, skewing professional, and skewing toward the tradeoff of square footage for location — a 750 sq ft condo at NW 18th and Hoyt at $450k is the entry-level calculation. Newer buildings have better energy efficiency and higher HOA fees; older converted buildings have more character and deferred maintenance risks worth checking. The neighborhood fills in a gap that used to be light industrial, and some of the best buildings here preserve that aesthetic.",
      "Everything Nob Hill has on walkability and transit, Slabtown has too, at a lower price point and without the Victorian character. That's the honest pitch. The tradeoff: no yard, no single-family option, and HOA fees are a permanent part of your housing cost. If your budget is $400k–$700k and car-free or car-light living matters, this is one of the strongest cases in Portland. If you're eventually planning for a yard, buy here knowing you'll outgrow it.",
    ],
    personality: "The Pearl's younger neighbor — condos, MAX access, NW 23rd walkable",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Slabtown+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Slabtown+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 94,
    bikeScore: 88,
    transitScore: 82,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Chapman Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "West Sylvan Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Forest Park",
        amenities: [
          "Thurman Street trailhead (walkable from northern Slabtown)",
          "Wildwood Trail",
          "off-leash dog sections",
        ],
      },
      {
        name: "Couch Park",
        amenities: ["playground", "open lawn", "dog-friendly", "close-in NW Portland"],
      },
    ],
    restaurants: [
      {
        name: "Ken's Artisan Pizza",
        cuisine: "Pizza",
        vibe: "NW 21st Ave, within easy walking distance — Portland's best pizza, James Beard confirmed",
      },
      {
        name: "Luce",
        cuisine: "Italian",
        vibe: "NW 21st Ave, neighborhood Italian, solid pasta and wine list without the occasion pressure",
      },
      {
        name: "Tasty n Alder",
        cuisine: "American",
        vibe: "Downtown, short MAX ride or 20-min walk — all-day menu, one of Portland's best all-around",
      },
      {
        name: "Escape from New York Pizza",
        cuisine: "Pizza",
        vibe: "NW 23rd, by the slice, open late, in walking range from most Slabtown blocks",
      },
    ],
    coffee: [
      {
        name: "St. Honoré Boulangerie",
        vibe: "NW 23rd Ave French bakery — the easiest commute to a good croissant you will ever have",
      },
      {
        name: "Barista",
        vibe: "NW 23rd area, precise single-origin espresso, minimal aesthetic, for when you're taking coffee seriously",
      },
    ],
    bars: [
      {
        name: "Bullards",
        vibe: "NW 23rd Ave area, solid neighborhood bar without the Pearl District price tag",
      },
      {
        name: "Rogue Ales Public House",
        vibe: "NW 23rd Ave, reliable taps and a bar that's been the NW Portland standard for years",
      },
    ],
    medianHomePrice: 620000,
    priceRange: { low: 400000, high: 900000 },
    commuteToDowntown:
      "10 min on MAX Blue/Red from NW 23rd & Lovejoy, 15 min by bike, 15–20 min by car",
    faqs: [
      {
        q: "What's the difference between Slabtown and Nob Hill?",
        a: "Slabtown is denser, newer, and lacks single-family housing. Nob Hill has Victorian houses and a more established neighborhood character. They share NW 23rd walkability and the same school district. Slabtown typically runs $150k–$200k lower in median price on comparable square footage, and the transit situation with the MAX stop at Lovejoy is better in Slabtown than most of Nob Hill.",
      },
      {
        q: "Are there any single-family homes in Slabtown?",
        a: "No. Slabtown is entirely condos, townhomes, and apartment buildings. If a single-family house is the requirement, the adjacent neighborhoods to look at are Nob Hill to the north or the Pearl District to the south — though Pearl is also entirely condo. The nearest single-family stock at a reasonable price is several blocks into Nob Hill.",
      },
      {
        q: "What does a condo in Slabtown cost?",
        a: "Entry-level studios and one-bedrooms in older buildings start around $400k. Two-bedrooms in newer buildings with amenities run $600k–$800k. HOA fees range from $350 to $600/month depending on building age and amenities. Always factor HOA into your monthly housing number — on a $500k purchase at $450/month HOA, you're effectively carrying $550k in housing costs.",
      },
      {
        q: "Is Slabtown good for first-time buyers?",
        a: "For buyers who want to be in NW Portland without the Victorian premium, yes. The entry price is lower than Nob Hill, the transit situation is excellent, and the NW 23rd walkability is genuine. The tradeoff for first-time buyers is no yard and HOA fees that add to monthly costs. FHA loans work on condos here if the building meets FHA approval requirements — worth checking before you fall in love with a unit.",
      },
    ],
    testimonials: [
      {
        quote:
          "I work at OHSU and needed MAX access. Slabtown was the only neighborhood where I could actually commute without a car. Bri found me a two-bed at NW 18th for $548k and we closed in 21 days.",
        author: "Priya M.",
        context: "Bought in Slabtown, 2024",
      },
      {
        quote:
          "We compared Slabtown and the Pearl side by side for three months. Bri walked us through the HOA financials on four buildings total. We bought in Slabtown for $180k less than the comparable Pearl unit we were watching.",
        author: "Kyle and Nadia R.",
        context: "Bought in Slabtown, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "jumbo", "refinance"],
    adjacentNeighborhoods: ["nob-hill", "pearl-district", "goose-hollow"],
    seo: {
      title: "Buying a Condo in Slabtown, Portland OR | The Lindley Team",
      description:
        "Slabtown real estate: NW Portland condos, MAX access, walkability, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "goose-hollow",
    name: "Goose Hollow",
    city: "Portland",
    state: "OR",
    description: [
      "Providence Park — Portland Timbers and Thorns home stadium — sits at SW 18th and Morrison, and it is the physical organizing fact of Goose Hollow. On match days the neighborhood fills with green scarves, noise, and a line out the door at every bar within four blocks. On non-match days it's one of the most convenient neighborhoods in Portland: downtown is a 10-minute walk on flat ground, the MAX Blue and Red lines run along SW Jefferson, and Lincoln High School — PPS's IB school — is two blocks from the park. If you work downtown or commute by rail, the location calculus is hard to beat.",
      "The housing is dense. Apartments and condos make up most of the stock, with some single-family houses appearing on the southern and western edges where the neighborhood transitions into the West Hills. Lincoln High School and the adjacent area have a small cluster of 1920s–1940s houses for buyers willing to look carefully. The neighborhood has good transit scores and genuinely earns them — SW Jefferson MAX runs frequently and connects quickly to the Red and Blue line network. Parking is permit-required on most residential streets and limited near the park.",
      "The two things to know going in: match day noise is real and predictable — 10,000 people, 90 minutes of continuous chanting, and a post-match crowd that disperses through the neighborhood. It's not constant but it's not subtle. Street parking is essentially unusable on match days even blocks away. Single-family homes are rare and expensive here, pushing $700k when they appear. The condo market ranges from $300k for an older one-bedroom to $600k+ for a newer two-bedroom with a parking spot.",
    ],
    personality: "Downtown on foot, MAX out the door, Timbers noise included",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Goose+Hollow+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Goose+Hollow+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 88,
    bikeScore: 78,
    transitScore: 80,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Chapman Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "West Sylvan Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Washington Park",
        amenities: [
          "Oregon Zoo",
          "Portland Japanese Garden",
          "International Rose Test Garden",
          "hiking trails",
          "MAX Washington Park station",
        ],
      },
      {
        name: "Duniway Park",
        amenities: ["running and walking trail", "open lawn", "connects to Terwilliger Blvd trail"],
      },
    ],
    restaurants: [
      {
        name: "McCormick & Schmick's Harborside",
        cuisine: "Seafood",
        vibe: "SW Harbor Drive nearby, the kind of place you take out-of-town visitors, reliably good seafood",
      },
      {
        name: "Jake's Famous Crawfish",
        cuisine: "Seafood",
        vibe: "SW 12th Ave, been here since 1892, classic Portland before Portland was cool — walkable from Goose Hollow",
      },
      {
        name: "Luce",
        cuisine: "Italian",
        vibe: "Short walk into NW Portland, neighborhood Italian without the occasion pressure",
      },
      {
        name: "Southpark Seafood",
        cuisine: "Seafood",
        vibe: "SW Salmon, downtown-edge location, good wine list and fish, worth the 10-minute walk on a nice evening",
      },
    ],
    coffee: [
      {
        name: "Coffeehouse Northwest",
        vibe: "NW 23rd area, a short walk north — one of Portland's better independent espresso bars",
      },
      {
        name: "Barista",
        vibe: "NW 23rd, precise espresso, for when the neighborhood coffee order matters",
      },
    ],
    bars: [
      {
        name: "Tugboat Brewing",
        vibe: "SW Ankeny, tiny brewpub near downtown, beers brewed in the back, regulars-only feel after a few visits",
      },
      {
        name: "Bailey's Taproom",
        vibe: "SW Broadway, 20+ rotating taps, no food, the kind of place you go to actually drink good beer",
      },
    ],
    medianHomePrice: 700000,
    priceRange: { low: 300000, high: 1200000 },
    commuteToDowntown:
      "10 min on foot, 5 min on MAX Blue/Red from SW Jefferson, 10 min by bike",
    faqs: [
      {
        q: "What's it like living near Providence Park?",
        a: "There are about 25 Timbers and Thorns home games per year combined. On those days, the neighborhood gets loud — chanting starts an hour before kickoff and the crowd doesn't fully disperse until 30–45 minutes after the final whistle. Street parking disappears. The bars are packed. If you're a soccer fan, this is a feature. If you work from home and need quiet on Tuesday evenings, get a feel for the match calendar before committing.",
      },
      {
        q: "Are there single-family homes in Goose Hollow?",
        a: "Yes, but they're rare. Most appear on the southern and western edges of the neighborhood toward SW Vista Ave and SW 20th. When they hit the market they tend to move quickly — $700k+ is typical for anything in decent condition. Most buyers in Goose Hollow are buying condos or apartments. If a house is the specific requirement, the adjacent inventory in Nob Hill and the West Hills is the better hunting ground.",
      },
      {
        q: "How good is the transit from Goose Hollow?",
        a: "Genuinely good. The MAX Blue and Red lines run along SW Jefferson with a stop at SW 18th — from there you can reach downtown in 5 minutes, the Lloyd District in 15, or the airport in about 45. The streetcar runs nearby into NW Portland and the Pearl. If you commute by rail or work downtown, this is one of the most transit-convenient residential neighborhoods in Portland.",
      },
      {
        q: "Is Goose Hollow good for families?",
        a: "The school pipeline is one of the strongest in PPS: Chapman Elementary → West Sylvan Middle → Lincoln High School with the IB program. That's the draw for families. The neighborhood itself is dense and not particularly oriented toward kids — no neighborhood park equivalent to Gabriel Park or Laurelhurst, and the condo-heavy stock means no yards. Washington Park is a 10-minute walk up the hill and covers outdoor space reasonably well.",
      },
    ],
    testimonials: [
      {
        quote:
          "I work at OHSU and then at a downtown firm — two completely different commute directions. Goose Hollow was the only place where both worked. Bri found me a two-bed at SW 20th for $512k, walked me through the HOA, and we closed without drama.",
        author: "Dr. Yusuf A.",
        context: "Bought in Goose Hollow, 2024",
      },
      {
        quote:
          "Lincoln High was the whole reason. We were renters in the neighborhood for two years waiting for the right condo. When it came up Bri had pre-approval ready and we wrote the same day. Closed in 18 days.",
        author: "Ellen and Marcus T.",
        context: "Bought in Goose Hollow, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "jumbo", "refinance"],
    adjacentNeighborhoods: ["nob-hill", "slabtown", "pearl-district", "multnomah-village"],
    seo: {
      title: "Buying a Home in Goose Hollow, Portland OR | The Lindley Team",
      description:
        "Goose Hollow real estate: Providence Park, MAX access, Lincoln High IB program, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },
];
