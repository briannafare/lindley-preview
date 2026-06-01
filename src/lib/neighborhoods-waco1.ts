import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsWACo1: NeighborhoodData[] = [
  {
    slug: "beaverton",
    name: "Beaverton",
    city: "Beaverton",
    state: "OR",
    description: [
      "Intel's campus on NW Murray Boulevard employs more than 20,000 people — the single largest private employer in Oregon — and it sits inside Beaverton city limits. That fact explains a lot: the diversity (significant South Asian and East Asian communities from the tech corridor), the traffic on TV Highway and Beaverton-Hillsdale Highway, and why housing demand here is durable even when the broader market softens. The MAX Blue and Red lines both terminate at Beaverton Transit Center, making this the most transit-connected suburb in the metro. Cedar Hills Crossing and Beaverton Town Square cover the major retail.",
      "Housing is a mix of 1970s–1990s ranches and split-levels, scattered condos and townhome complexes, and newer infill on parcels that used to be commercial. You get more square footage per dollar than comparable inner Portland neighborhoods. The Beaverton School District consistently outperforms Portland Public Schools on standardized measures — high school graduation rates are strong, and the district has added capacity as the city has grown. Families who moved out of Portland for schools tend to stay. Sunset High School and Westview High School both draw from strong feeder systems.",
      "The trade-off is traffic. TV Highway (OR-8) and Beaverton-Hillsdale Highway are gridlocked during rush hours, and the Canyon Road corridor backing up onto Hwy 26 is a daily reality if you're driving east. The MAX handles the commute better than driving — Beaverton Transit Center to downtown Portland is about 35 minutes — but most daily errands still require a car outside of the few blocks around Beaverton Central MAX station. This is a suburb. The space and value are real. So is the drive.",
    ],
    personality: "Intel town, MAX access, more house for less",
    mapEmbedSrc: "https://maps.google.com/maps?q=Beaverton+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Beaverton+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 52,
    bikeScore: 58,
    transitScore: 48,
    schoolDistrict: "Beaverton School District",
    schools: [
      {
        name: "Errol Hassell Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Mountain View Middle School",
        type: "middle",
        grades: "6–8",
        rating: 7,
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
      {
        name: "Valley Catholic High School",
        type: "private",
        grades: "9–12",
        rating: 8,
      },
    ],
    parks: [
      {
        name: "Tualatin Hills Nature Park",
        amenities: [
          "hiking trails",
          "wetlands",
          "wildlife viewing",
          "interpretive center",
          "paved paths",
        ],
      },
      {
        name: "Beaverton City Park",
        amenities: [
          "sports fields",
          "playground",
          "picnic shelters",
          "splash pad",
        ],
      },
      {
        name: "Progress Ridge Townsquare Greenway",
        amenities: ["walking paths", "open lawn", "community gathering space"],
      },
    ],
    restaurants: [
      {
        name: "Swagat Indian Cuisine",
        cuisine: "Indian",
        vibe: "Long-running Indian restaurant on SW Canyon Road, buffet lunch draws the Intel crowd",
      },
      {
        name: "Lela's Bistro",
        cuisine: "American",
        vibe: "Pacific NW ingredients, local wine list, Cedar Hills area — date night without driving to Portland",
      },
      {
        name: "Pho Van",
        cuisine: "Vietnamese",
        vibe: "Reliable pho on TV Highway, busy at lunch, fast and honest",
      },
      {
        name: "Sayler's Old Country Kitchen",
        cuisine: "Steakhouse",
        vibe: "Old-school steakhouse institution, been here since 1946, enormous portions",
      },
    ],
    coffee: [
      {
        name: "Insomnia Coffee",
        vibe: "Local mini-chain with a Beaverton location — better than the chains, actual espresso standards",
      },
      {
        name: "Blackbird Coffee",
        vibe: "Small neighborhood cafe near Beaverton Central MAX, regular customer base, no laptop crowd",
      },
    ],
    bars: [
      {
        name: "Thirsty Lion Gastropub",
        vibe: "Cedar Hills Crossing location, big selection, sports on TV — suburban gastropub done well",
      },
      {
        name: "Beaverton Ales",
        vibe: "Local tap room with rotating Oregon craft beers, low-key weekend spot",
      },
    ],
    medianHomePrice: 525000,
    priceRange: { low: 350000, high: 900000 },
    commuteToDowntown:
      "35–40 min on MAX Blue or Red line; 25–35 min by car in normal traffic, 45–55 min in rush hour via Hwy 26",
    faqs: [
      {
        q: "How is the commute from Beaverton to downtown Portland?",
        a: "MAX is the honest answer. Beaverton Transit Center to Pioneer Courthouse Square is about 35 minutes on the Blue or Red line — predictable, no traffic. Driving on Hwy 26 runs 25 minutes in off-peak hours but can stretch to 50+ during morning rush, especially on Fridays. If you work downtown and live in Beaverton, buy a MAX pass.",
      },
      {
        q: "Are Beaverton schools worth moving for?",
        a: "Yes, they're consistently stronger than Portland Public Schools on test scores and graduation rates. Westview and Sunset high schools are the two main comprehensive high schools and both perform well. The district has also maintained relatively stable funding as Beaverton has grown. If school quality is driving your location decision, Beaverton School District holds up.",
      },
      {
        q: "What's the housing market like in Beaverton?",
        a: "Median around $525,000. You'll find 1970s–1990s ranches and split-levels in the $400k–$600k range, condos and townhomes from the mid-$300s, and newer construction pushing into the $700k+ range. Comparable space to inner SE Portland generally costs 15–25% less here. Well-priced homes in good condition move quickly.",
      },
      {
        q: "Is Beaverton walkable?",
        a: "Partially. The blocks immediately around Beaverton Central and Beaverton Transit Center MAX stations are the most walkable. Most of the city requires a car for daily errands — grocery runs, school pickup, appointments. It's a suburb with MAX access, not a walkable urban neighborhood.",
      },
    ],
    testimonials: [
      {
        quote:
          "We moved from SE Portland when our oldest was about to start kindergarten. We bought a four-bedroom house in Beaverton for $498,000 — the equivalent in Woodstock would have been $650,000 minimum and smaller. Two years in, the school decision was clearly right.",
        author: "Sarah and Tom D.",
        context: "Moved from SE Portland to Beaverton, 2022",
      },
      {
        quote:
          "I'm an Intel contractor. Living in Beaverton and biking to the Jones Farm campus means I never deal with that commute. Bri helped me understand the condo vs. house math. We went with a townhome for $387,000 and it's worked out.",
        author: "David K.",
        context: "First purchase, Beaverton townhome, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "heloc"],
    adjacentNeighborhoods: ["hillsboro", "tigard", "hillsdale", "multnomah-village"],
    seo: {
      title: "Buying a Home in Beaverton, OR | The Lindley Team",
      description:
        "Honest Beaverton real estate guide: home prices, Intel commute, Beaverton School District, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "hillsboro",
    name: "Hillsboro",
    city: "Hillsboro",
    state: "OR",
    description: [
      "Intel's Jones Farm and Hawthorn Farm campuses in Hillsboro together make up one of the largest semiconductor manufacturing operations in the United States. The eastern edge of the city feels like a tech corridor — campuses, hotels, and new apartments along Cornell Road. But drive five minutes west toward downtown and you hit Main Street, the Venetian Theatre (a 1921 movie palace that still runs films), and a Saturday farmers market that's been running since 1982. Hillsboro has a downtown that actually functions. The MAX Blue line runs the length of the city and connects to Portland, though the ride to downtown Portland is about 45 minutes.",
      "Housing here is more affordable than Beaverton because Hillsboro is further from Portland and the western side of the city is still actively developing. You can find 3-bedroom houses from the 1990s and early 2000s in the mid-$400s, and new construction subdivisions on the west side pushing toward $600k+. The Hillsboro School District has a strong reputation — particularly at the elementary level — and the district has grown to keep pace with the city's expansion since 2010. The growth has been significant: new apartment towers downtown, new subdivisions where farmland was, new commercial strips on the west side.",
      "Hillsboro is car-dependent for the majority of daily life. Outside of a few walkable blocks around the MAX stations and downtown, you're driving. Cornell Road and Baseline Road carry heavy traffic during commutes. The 45-minute MAX ride to downtown Portland is a real constraint if you work or socialize there regularly — this is a city that functions most naturally for people who work within it or in nearby Beaverton, not for people who need to be in Portland daily.",
    ],
    personality: "Silicon Forest city with a real downtown",
    mapEmbedSrc: "https://maps.google.com/maps?q=Hillsboro+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Hillsboro+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 42,
    bikeScore: 52,
    transitScore: 40,
    schoolDistrict: "Hillsboro School District",
    schools: [
      {
        name: "McKinney Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Poynter Middle School",
        type: "middle",
        grades: "6–8",
        rating: 7,
      },
      {
        name: "Liberty High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
      {
        name: "Hillsboro High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
      {
        name: "Glencoe High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
    ],
    parks: [
      {
        name: "Rood Bridge Park",
        amenities: [
          "Tualatin River access",
          "hiking trails",
          "picnic areas",
          "disc golf",
          "off-leash dog area",
        ],
      },
      {
        name: "Jackson Bottom Wetlands Preserve",
        amenities: [
          "wetlands trails",
          "wildlife viewing",
          "interpretive programs",
          "birdwatching",
        ],
      },
      {
        name: "Tualatin Hills Athletic Center",
        amenities: [
          "indoor pools",
          "fitness center",
          "basketball courts",
          "running track",
        ],
      },
    ],
    restaurants: [
      {
        name: "The Venetian Theatre Café",
        cuisine: "American",
        vibe: "Inside the 1921 theater on E Main Street — dinner and a movie without driving to Portland",
      },
      {
        name: "Muchas Gracias",
        cuisine: "Mexican",
        vibe: "24-hour Mexican fast food with a loyal following, practical and consistent",
      },
      {
        name: "Akadi Restaurant",
        cuisine: "West African",
        vibe: "West African cuisine on NE Cornell Road, diverse Hillsboro dining scene on display",
      },
      {
        name: "Old Town Kitchen",
        cuisine: "American",
        vibe: "Downtown Hillsboro breakfast spot, packed on weekends, worth the wait",
      },
    ],
    coffee: [
      {
        name: "Public Coast Brewing",
        vibe: "Hillsboro taproom that also does solid coffee service, mixed crowd of tech workers and locals",
      },
      {
        name: "Barley Pod Coffee",
        vibe: "Small independent coffee shop near the MAX line, no-frills, consistent espresso",
      },
    ],
    bars: [
      {
        name: "McMenamins Cornelius Pass Roadhouse",
        vibe: "McMenamins compound in a historic farmstead — outdoor seating, multiple bars, family-friendly early",
      },
      {
        name: "Plank Town Brewing",
        vibe: "Hillsboro brewpub, rotating taps, neighborhood crowd, sports on in the corner",
      },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 330000, high: 850000 },
    commuteToDowntown:
      "45 min on MAX Blue line; 30–40 min by car to Portland downtown in normal traffic, 55–70 min in rush hour via Hwy 26",
    faqs: [
      {
        q: "How long is the commute from Hillsboro to downtown Portland?",
        a: "About 45 minutes on the MAX Blue line from Hillsboro Central to Pioneer Courthouse Square — it's reliable and you can work on the train. Driving runs 30–40 minutes in light traffic but realistically 55–70 minutes during rush hour on Hwy 26. The farther west you live in Hillsboro, the longer the drive to Portland. Most people who buy here work in Hillsboro or Beaverton.",
      },
      {
        q: "How are the schools in Hillsboro?",
        a: "Hillsboro School District is solid — consistently above Oregon state averages, with strong elementary programs and three comprehensive high schools (Liberty, Hillsboro, and Glencoe). The district has grown significantly as the city has developed and has generally kept quality up as enrollment increased. Families moving for school quality from Portland find it a meaningful upgrade.",
      },
      {
        q: "What's the housing market like in Hillsboro?",
        a: "Median around $490,000, which is typically $30,000–$50,000 less than comparable Beaverton homes. The east side of Hillsboro near MAX and Intel is more established — 1990s–2000s houses in the $420k–$580k range. The west side has newer construction from the past decade, often in the $550k–$800k+ range. First-time buyers find more entry-level inventory here than in Beaverton or Tigard.",
      },
      {
        q: "Is Hillsboro a good place for families?",
        a: "Yes, particularly if at least one person in the household works locally. Good schools, affordable housing for the size, and parks like Rood Bridge and Jackson Bottom give kids real outdoor space. The trade-off is Portland proximity — trips to the city for culture, dining, or entertainment take real time. It works best when Hillsboro is your primary world, not a base for commuting west.",
      },
    ],
    testimonials: [
      {
        quote:
          "We couldn't afford anything in Portland that had a yard and three bedrooms. In Hillsboro we found exactly that for $467,000. We both work at Intel, so the commute is literally five minutes. Bri walked us through the FHA process without making it feel complicated.",
        author: "Carlos and Mei L.",
        context: "First-time buyers, Hillsboro, 2023",
      },
      {
        quote:
          "I relocated from San Jose and the price difference was staggering. We bought a 2,100-square-foot house for $512,000. In the Bay Area that doesn't exist. Bri understood the relocation timeline and made the close work on our schedule.",
        author: "Priya S.",
        context: "Relocated from California, purchased in Hillsboro, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance"],
    adjacentNeighborhoods: ["beaverton", "cornelius", "forest-grove"],
    seo: {
      title: "Buying a Home in Hillsboro, OR | The Lindley Team",
      description:
        "Real Hillsboro real estate guide: home prices, Intel commute, Hillsboro School District, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "tigard",
    name: "Tigard",
    city: "Tigard",
    state: "OR",
    description: [
      "Highway 217 cuts through the middle of Tigard and I-5 runs along its eastern edge — these two roads define the city more than anything else about it. Washington Square Mall has anchored the northern end since 1973, and the Tigard Triangle, the redevelopment zone near 99W, is slowly becoming a denser commercial district. The location is genuinely central: 20 minutes to downtown Portland, 15 minutes to Beaverton, 10 minutes to Tualatin or Lake Oswego. For people who work across the south metro — or who need I-5 access toward Salem or points south — Tigard's position is hard to beat.",
      "Housing is mostly 1960s–1990s ranches and split-levels with a scattering of newer subdivisions where older commercial land has been redeveloped. The price point sits above Hillsboro and Tualatin but below Lake Oswego directly to the east. The Tigard-Tualatin School District is one of the stronger suburban districts in the metro — Durham Elementary, Fowler Middle School, and Tigard High are all consistently rated well. Families who leave Portland for schools often land here because the schools are good and the housing is still affordable relative to the Eastside suburbs.",
      "Tigard is not walkable in most of its neighborhoods. 99W (Pacific Highway) carries heavy traffic and is primarily a commercial strip. There is no light rail yet — the Southwest Corridor MAX line has been approved and is in planning, but it won't change daily life anytime soon. If you're coming from an inner Portland neighborhood where you walked to coffee and dinner, Tigard will require adjustment. The payoff is a house with a yard, good schools, and a location that puts you within range of the entire south metro without being deep in the suburbs.",
    ],
    personality: "South metro crossroads, honest suburban trade-off",
    mapEmbedSrc: "https://maps.google.com/maps?q=Tigard+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Tigard+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 39,
    bikeScore: 44,
    transitScore: 35,
    schoolDistrict: "Tigard-Tualatin School District",
    schools: [
      {
        name: "Durham Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Metzger Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Fowler Middle School",
        type: "middle",
        grades: "6–8",
        rating: 7,
      },
      {
        name: "Tigard High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
      {
        name: "Oregon Episcopal School",
        type: "private",
        grades: "PK–12",
        rating: 9,
      },
    ],
    parks: [
      {
        name: "Summerlake Park",
        amenities: [
          "lake",
          "walking trails",
          "playground",
          "picnic areas",
          "fishing",
        ],
      },
      {
        name: "Cook Park",
        amenities: [
          "Tualatin River access",
          "sports fields",
          "boat ramp",
          "off-leash dog area",
          "picnic shelters",
        ],
      },
      {
        name: "Fanno Creek Trail",
        amenities: [
          "multi-use paved trail",
          "wetlands",
          "wildlife corridor",
          "connects to Beaverton",
        ],
      },
    ],
    restaurants: [
      {
        name: "Bridgeport Brewing",
        cuisine: "Brewpub",
        vibe: "Washington Square area location, reliable pub food, good for groups after shopping",
      },
      {
        name: "Tigard Harvest Fresh",
        cuisine: "American",
        vibe: "Neighborhood grocery deli that's become a lunch institution among locals",
      },
      {
        name: "Gado Gado",
        cuisine: "Indonesian",
        vibe: "Portland-famous Indonesian spot with a Tigard outpost — worth the trip specifically",
      },
      {
        name: "El Sol de Mexico",
        cuisine: "Mexican",
        vibe: "Long-running Mexican restaurant on Pacific Highway, lunch regulars and families",
      },
    ],
    coffee: [
      {
        name: "Case Study Coffee",
        vibe: "Serious Portland roaster with a Tigard Triangle location — best coffee in the city limits",
      },
      {
        name: "Coffee Tree",
        vibe: "Local drive-through coffee stand with a following, practical morning stop",
      },
    ],
    bars: [
      {
        name: "Tigard Taphouse",
        vibe: "Neighborhood bar with Oregon taps and no pretense, comfortable for regulars",
      },
      {
        name: "Claim 52 Brewing",
        vibe: "Eugene brewery with a Tigard taproom, good rotating selection, family-friendly earlier in the evening",
      },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 400000, high: 950000 },
    commuteToDowntown:
      "20–30 min by car via Barbur Blvd (I-5) in normal traffic, 40–50 min in rush hour; no direct MAX — bus line 12 runs to downtown via Barbur in 45–55 min",
    faqs: [
      {
        q: "How do you commute from Tigard to downtown Portland?",
        a: "Most people drive Barbur Blvd (which runs parallel to I-5) or take I-5 north. In normal traffic it's 20–30 minutes. In rush hour — particularly northbound in the morning — it regularly runs 40–50 minutes. Bus Line 12 on Barbur runs to downtown and takes about 45–55 minutes. There is no MAX light rail in Tigard yet — the Southwest Corridor project is approved but years away from opening.",
      },
      {
        q: "How are the Tigard schools?",
        a: "Tigard-Tualatin School District is well-regarded. Tigard High School has solid academic programs and above-average graduation rates. The district has maintained quality as Tigard has grown and is consistently rated above PPS on most measures. If you're moving from Portland for schools, the difference is noticeable, particularly at the elementary level.",
      },
      {
        q: "How does Tigard compare to Lake Oswego for housing value?",
        a: "Meaningfully more affordable. Lake Oswego's median sits roughly $150,000–$200,000 higher than Tigard's, and Lake Oswego has tighter lot sizes. In Tigard you're more likely to find a ranch with a real backyard in the $500k–$600k range. The schools are both good — different districts but comparable reputations. The main difference is Lake Oswego has more walkable commercial areas. Tigard does not.",
      },
      {
        q: "Is the Tigard Triangle worth buying into?",
        a: "It's the most active redevelopment zone in the city — the area near 99W and Hwy 217. New apartment projects and commercial development have been approved and some are underway. Buying near the Triangle now means living through construction for a few years. The long-term case is reasonable if you're holding for 5+ years, but it's not a quiet neighborhood today.",
      },
    ],
    testimonials: [
      {
        quote:
          "We were renting in Division Street and paying $2,100 a month. We bought a three-bedroom ranch in Tigard for $541,000 and our mortgage is $2,800. The schools alone made it worth it — our daughter is in third grade and the difference from her Portland school is immediately obvious.",
        author: "Amanda and Ryan P.",
        context: "Moved from SE Portland to Tigard, 2022",
      },
      {
        quote:
          "I work in Tualatin and my wife is in Beaverton. Tigard puts us both within 20 minutes of work. We found a 1980s ranch for $489,000, put money into the kitchen, and it's ours now. Bri helped us figure out the math on rate buydown vs. saving the cash for renovations.",
        author: "Jason M.",
        context: "Purchased in Tigard, 2023",
      },
    ],
    relatedServices: ["purchase", "refinance", "heloc", "fha", "cash-out"],
    adjacentNeighborhoods: ["beaverton", "tualatin", "lake-oswego", "hillsdale"],
    seo: {
      title: "Buying a Home in Tigard, OR | The Lindley Team",
      description:
        "Tigard real estate guide: home prices, commute, Tigard-Tualatin School District, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "tualatin",
    name: "Tualatin",
    city: "Tualatin",
    state: "OR",
    description: [
      "Tualatin Commons is the downtown that Tualatin built from scratch — a mixed-use development centered on a small lake, with restaurants, a public plaza, and apartments ringing the water. It works better than it sounds. On summer evenings the lake path fills up with strollers and dog walkers, and the restaurants that face the water are actually good. The I-5/I-205 interchange nearby makes Tualatin one of the most regionally accessible cities in the metro — you can be at PDX in 25 minutes, Salem in 45, or Beaverton in 20. The tradeoff is that Tualatin exists primarily as a car city, and the Tualatin-Sherwood Road commercial strip is the daily retail experience for most residents.",
      "New housing has been added on the western side of the city — subdivisions from the 2010s and 2020s with 3- and 4-bedroom homes that typically run in the $500s and $600s. Older sections of the city, particularly near the river and around the commons, have 1970s–1990s ranches that often come in below $500k with more land. The Tigard-Tualatin School District serves the city — the same solid district as Tigard, with Tualatin High School as the main comprehensive high school and consistently strong elementary programs. Tualatin is a genuine option for families who want good schools and don't need to be near Portland.",
      "The Tualatin River runs along the northern edge of the city and provides the most compelling natural feature — Tualatin Community Park sits on the bank and is worth knowing. But Tualatin is not a city you walk around. Most neighborhoods require a car for every errand. There is no light rail and the bus connections to Portland take close to an hour. If proximity to Portland matters to you daily, Tualatin makes that commute real work. If your life is oriented around the south metro — Tualatin, Tigard, Sherwood, Wilsonville — the location is excellent.",
    ],
    personality: "Built-from-scratch lakefront downtown, south metro freeway access",
    mapEmbedSrc: "https://maps.google.com/maps?q=Tualatin+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Tualatin+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 33,
    bikeScore: 38,
    transitScore: 28,
    schoolDistrict: "Tigard-Tualatin School District",
    schools: [
      {
        name: "Byrom Elementary",
        type: "elementary",
        grades: "K–5",
        rating: 7,
      },
      {
        name: "Hazelbrook Middle School",
        type: "middle",
        grades: "6–8",
        rating: 7,
      },
      {
        name: "Tualatin High School",
        type: "high",
        grades: "9–12",
        rating: 7,
      },
    ],
    parks: [
      {
        name: "Tualatin Community Park",
        amenities: [
          "Tualatin River access",
          "sports fields",
          "off-leash dog area",
          "picnic shelters",
          "playground",
        ],
      },
      {
        name: "Tualatin Commons",
        amenities: [
          "lake path",
          "public plaza",
          "public art",
          "seasonal events",
        ],
      },
      {
        name: "Brown's Ferry Park",
        amenities: [
          "Tualatin River trail",
          "natural area",
          "fishing access",
          "quiet walking paths",
        ],
      },
    ],
    restaurants: [
      {
        name: "Bridgewater Bar & Grill",
        cuisine: "American",
        vibe: "On the commons lake, casual seafood and American fare, best patio in Tualatin on a warm evening",
      },
      {
        name: "Sho Japanese Cuisine",
        cuisine: "Japanese",
        vibe: "Solid sushi and Japanese comfort food, consistent and popular with the evening crowd",
      },
      {
        name: "McMenamins Tualatin",
        cuisine: "Pub",
        vibe: "McMenamins compound, full menu, family-friendly earlier in the night, local draft beers",
      },
      {
        name: "El Sombrero",
        cuisine: "Mexican",
        vibe: "Neighborhood Mexican restaurant, loaded plates, cash-preferred lunch spot",
      },
    ],
    coffee: [
      {
        name: "Dutch Bros Coffee",
        vibe: "Drive-through institution for the south suburbs — fast, sweet, everyone has their order",
      },
      {
        name: "Tualatin Coffee House",
        vibe: "Small independent shop near the commons, regular customer base, reliable espresso",
      },
    ],
    bars: [
      {
        name: "Inn at the Commons",
        vibe: "Hotel bar on the lake — quieter, good for a catch-up conversation, unexpected setting for a suburb",
      },
      {
        name: "Hopworks Urban Brewery",
        vibe: "Tualatin location of the Portland organic brewery — good food, family-friendly, busy on weekends",
      },
    ],
    medianHomePrice: 520000,
    priceRange: { low: 380000, high: 850000 },
    commuteToDowntown:
      "25–35 min by car via I-5 in normal traffic, 45–60 min in rush hour; no direct MAX — commuter bus takes 55–65 min to downtown Portland",
    faqs: [
      {
        q: "How far is Tualatin from downtown Portland?",
        a: "About 16 miles by road. In light traffic via I-5, that's 25–35 minutes. During rush hour, northbound I-5 can easily become 50–60 minutes. There is no MAX light rail in Tualatin. TriMet bus service connects to the MAX at Barbur Transit Center, but the total commute to downtown Portland typically runs 55–65 minutes. This is a city where you're essentially committing to driving if Portland is your daily destination.",
      },
      {
        q: "What schools serve Tualatin?",
        a: "Tigard-Tualatin School District, the same district serving Tigard. Tualatin High School is the main high school and has strong academic programs and above-average graduation rates. Elementary schools in the Tualatin portion of the district are consistently well-rated. For families moving from Portland for school quality, the difference is real and the district has maintained it as the area has grown.",
      },
      {
        q: "What is Tualatin Commons?",
        a: "A mixed-use development built around a small lake near downtown Tualatin. There's a paved path around the water, restaurants, a public plaza, and apartments. The city holds events there in summer. It's one of the more successful examples of suburban downtown-building in the metro — not a traditional Main Street, but an actual place where people go on purpose.",
      },
      {
        q: "How does Tualatin compare to Tigard for home buyers?",
        a: "Tualatin typically comes in slightly below Tigard in median price — you can find more 1970s–1990s ranches with larger lots in Tualatin in the $400k–$500k range. The newer west-side subdivisions in both cities are similarly priced. Tigard has marginally better Portland access. Tualatin has better freeway access toward Salem and the south valley. If you're working in Wilsonville or Sherwood, Tualatin's position is actually better.",
      },
    ],
    testimonials: [
      {
        quote:
          "We bought a 1980s ranch on a quarter-acre for $482,000. Same house in Tigard would have been $530,000, same house in Lake Oswego wouldn't exist under $700,000. We both work in Tualatin so the commute is nothing. Bri laid out our options without pushing us toward anything.",
        author: "Mark and Diane F.",
        context: "Purchased in Tualatin, 2023",
      },
      {
        quote:
          "First house. We had $28,000 saved and were terrified nothing would work. Bri ran the FHA numbers and we closed on a three-bedroom for $415,000. I didn't know a first-time buyer could actually do that. The south suburbs made it possible.",
        author: "Keisha T.",
        context: "First-time buyer, Tualatin, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "investment"],
    adjacentNeighborhoods: ["tigard", "sherwood", "wilsonville", "lake-oswego"],
    seo: {
      title: "Buying a Home in Tualatin, OR | The Lindley Team",
      description:
        "Tualatin real estate guide: home prices, schools, Tualatin Commons, and what south Washington County buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },
];
