import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsYamhill: NeighborhoodData[] = [
  {
    slug: "newberg",
    name: "Newberg",
    city: "Newberg",
    state: "OR",
    description: [
      "Highway 99W enters Newberg from the north past a Chevy dealer and a Fred Meyer, and somewhere around the first stoplight you notice the Chehalem Mountains rising to the south. That transition — from suburban commercial strip to the start of Willamette Valley wine country — happens fast here. George Fox University sits in the middle of town, which means you get a college-town calendar: events, lectures, the Bene Coffee on Villa Road that stays open late. Recipe on First Street does the kind of cooking that would draw a crowd in Portland. The Painted Lady, just off downtown, has been one of Oregon's better special-occasion restaurants for years.",
      "Housing is a mix of modest 1950s–1970s ranches in established neighborhoods, newer subdivisions on the east side of town, and the occasional older Victorian on the streets near downtown. Schools fall under the Newberg School District — Newberg High School is the main comprehensive high, and the district has a functional reputation without being exceptional. The pull for buyers is the price-to-land ratio and proximity to the AVA: you can have a half-acre lot with mountain views for what a small Portland bungalow costs. That calculation is drawing remote workers and people leaving larger metros in a serious way.",
      "The commute reality is the defining constraint of Newberg. Highway 99W is a two-lane road for long stretches, passes through Tigard with heavy signal congestion, and has no good bypass. In rush hour, the 25 miles from Newberg to downtown Portland takes 50 minutes on a good day and over an hour on a bad one. People who drive to Portland daily report it erodes the lifestyle advantage within six months. Buyers who work remotely, go in two or three days a week, or have relocated from somewhere with real commute pain often adjust fine. Daily commuters should price that drive honestly before they fall in love with the landscape.",
    ],
    personality: "Wine country access plus a real small-city downtown — best for remote workers who want Willamette Valley life without full rural isolation",
    mapEmbedSrc: "https://maps.google.com/maps?q=Newberg+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Newberg+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 52,
    bikeScore: 44,
    transitScore: 18,
    schoolDistrict: "Newberg School District",
    schools: [
      { name: "Mabel Rush Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Mountain View Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Newberg High School", type: "high", grades: "9–12", rating: 5 },
      { name: "George Fox University", type: "private", grades: "College", rating: 7 },
    ],
    parks: [
      {
        name: "Chehalem Cultural Center",
        amenities: ["community events", "gallery", "performing arts"],
      },
      {
        name: "Hoover Park",
        amenities: ["baseball fields", "picnic area", "playground", "restrooms"],
      },
      {
        name: "Rogers Landing County Park",
        amenities: ["Willamette River access", "boat ramp", "picnic tables", "fishing"],
      },
    ],
    restaurants: [
      {
        name: "Recipe",
        cuisine: "American",
        vibe: "Serious farm-to-table cooking on First Street — the kind of restaurant that justifies the drive from Portland",
      },
      {
        name: "The Painted Lady",
        cuisine: "French-American",
        vibe: "Special-occasion fine dining in a Victorian house — prix fixe, reservations essential, genuinely excellent",
      },
      {
        name: "Subterra Restaurant",
        cuisine: "Mediterranean",
        vibe: "Underground wine bar and restaurant on First Street, good for dates and late dinners",
      },
    ],
    coffee: [
      { name: "Bene Coffee", vibe: "George Fox adjacent, reliable espresso, stays open late on weeknights" },
      { name: "Chapters Books and Coffee", vibe: "Independent bookstore cafe on First Street, good for working mornings" },
    ],
    bars: [
      { name: "Ghost Hill Cellars", vibe: "Tasting room in a converted industrial space, pour-your-own flights, relaxed" },
      { name: "Subterra Wine Bar", vibe: "Curated Oregon wine list in a cellar setting, serious without being precious" },
    ],
    medianHomePrice: 450000,
    priceRange: { low: 325000, high: 850000 },
    commuteToDowntown: "35–55 min by car via Hwy 99W (traffic-dependent, no bypass); no practical transit option to Portland",
    faqs: [
      {
        q: "What's the commute from Newberg to Portland like?",
        a: "Highway 99W is the only real route and it has no bypass. In light traffic, the 25 miles takes about 35 minutes. During morning and evening rush hour — especially through Tigard — it regularly stretches to 50–60 minutes. There's no commuter rail and no express bus to downtown Portland. Remote workers and people with flexible schedules manage well. Daily office commuters should drive the route at 8 a.m. before they make an offer.",
      },
      {
        q: "What kind of homes are available in Newberg?",
        a: "The bulk of the market is 1960s–1990s single-family ranches and two-stories in established residential neighborhoods. The east side of town has newer construction from the 2000s and 2010s. Downtown-adjacent streets have older Victorians and Craftsmans. Acreage parcels with Chehalem Mountain views are available in the $500k–$800k range — that price point is nearly impossible in Washington County for comparable land.",
      },
      {
        q: "How are the schools in Newberg?",
        a: "The Newberg School District is functional — middle-of-the-pack for Oregon. Newberg High School has a solid athletics program and reasonable academics. Families with specific school priorities may want to look at private options; George Fox University's presence supports some local private schooling infrastructure.",
      },
      {
        q: "Is Newberg a good place to buy a home if I work in Portland?",
        a: "Depends on how often you go in. Two or three days a week, it's workable — you accept the commute as an occasional trade-off for significantly lower prices and better land. Five days a week, the 99W grind becomes the dominant fact of your life. Most buyers who struggled with Newberg commutes cite the unpredictability of 99W more than the raw distance.",
      },
    ],
    testimonials: [
      {
        quote:
          "We'd been looking in Beaverton and Hillsboro for two years. When we widened our search to Newberg, we found a 1,900-square-foot house with a view of the Chehalem Mountains for $420,000. We're both fully remote now, so we said yes immediately. Bri walked us through the financing in one conversation — she knows this market.",
        author: "Derek and Sasha M.",
        context: "Remote-work buyers, purchased 2024, $418,000",
      },
      {
        quote:
          "I retired from Intel and wanted out of the West Hills price point. Newberg gave me a bigger lot, a quieter street, and I'm twenty minutes from half a dozen wineries. It wasn't a complicated decision once I stopped thinking about Portland as the center of everything.",
        author: "Robert C.",
        context: "Retiree, purchased 2023, $485,000",
      },
      {
        quote:
          "Bri was honest with us that the commute was going to be the test. She was right — one of us goes to Portland two days a week and the other is fully remote. It works, but we're glad she set that expectation early instead of just telling us what we wanted to hear.",
        author: "Yuki and Tom F.",
        context: "Hybrid commuters, purchased 2024, $460,000",
      },
    ],
    relatedServices: [
      "purchase",
      "refinance",
      "fha",
      "va",
      "jumbo",
      "heloc",
      "cash-out",
      "divorce-lending",
      "investment",
      "reverse-mortgage",
    ],
    adjacentNeighborhoods: ["dundee", "mcminnville", "sherwood", "forest-grove", "tualatin"],
    seo: {
      title: "Buying a Home in Newberg, OR | Mortgage Lender | The Lindley Team",
      description:
        "Newberg real estate and home loans with Bri Lindley at Mortgage Express. Median $450k, wine country access, George Fox University, honest 99W commute guidance. NMLS #1367416.",
    },
  },

  {
    slug: "mcminnville",
    name: "McMinnville",
    city: "McMinnville",
    state: "OR",
    description: [
      "Third Street in downtown McMinnville is one of the better main streets in Oregon — not a marketing claim, just a fact you notice when you walk it. Nick's Italian Cafe has been there since 1977; the James Beard Foundation noticed. Bistro Maison does French country food in an old Victorian. The Evergreen Aviation and Space Museum holds the Spruce Goose — Howard Hughes's flying boat, the largest wooden aircraft ever built — and draws serious visitors from outside the state. On the southeast edge of town, the Carlton-Yamhill AVA and the Chehalem Mountains AVA are both within twenty minutes. McMinnville isn't just a gateway to wine country; it has its own identity that exists independent of the vineyards.",
      "The city functions more on its own terms than most small Oregon cities its size. There's a hospital (Willamette Valley Medical Center), a community college (Linfield University, now a four-year institution), county government employment, and a manufacturing base that includes PCC Airfoils and other aerospace suppliers. McMinnville School District covers elementary through high school. McMinnville High School is the comprehensive high, with an IB program and generally solid academic reputation for a district this size. Housing is a wide range: modest older ranch homes in the $350k–$450k band, newer construction subdivisions on the north and east edges of town in the $450k–$600k range, and acreage properties with vineyard adjacency that can push well past $700k.",
      "Most people who live in McMinnville don't commute to Portland, and the math tells you why. The drive is 40 miles via Highway 18 or 99W and takes 50–65 minutes in normal conditions — closer to 75 in morning rush. There's no rail connection and no meaningful transit. The city draws retirees from the Bay Area and Southern California who want Oregon's quality of life at a fraction of the cost, remote workers who prioritize wine country living, and buyers who work locally in agriculture, healthcare, or manufacturing. For a specific kind of buyer — one who has accepted that Portland is an occasional destination, not a daily commute — McMinnville offers a complete life in a way that smaller Yamhill County towns can't match.",
    ],
    personality: "The most self-sufficient small city in the Willamette Valley — wine country address, real employment base, and a downtown worth walking",
    mapEmbedSrc: "https://maps.google.com/maps?q=McMinnville+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=McMinnville+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 58,
    bikeScore: 54,
    transitScore: 20,
    schoolDistrict: "McMinnville School District",
    schools: [
      { name: "Memorial Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Duniway Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "McMinnville High School", type: "high", grades: "9–12", rating: 6 },
      { name: "Linfield University", type: "private", grades: "College", rating: 8 },
    ],
    parks: [
      {
        name: "Joe Dancer Park",
        amenities: ["sports fields", "walking trails", "picnic area", "disc golf", "BMX track"],
      },
      {
        name: "Rotary Park",
        amenities: ["playground", "picnic shelters", "restrooms", "open lawn"],
      },
      {
        name: "Evergreen Aviation and Space Museum",
        amenities: ["aviation exhibits", "IMAX theater", "Spruce Goose display", "educational programs"],
      },
    ],
    restaurants: [
      {
        name: "Nick's Italian Cafe",
        cuisine: "Italian",
        vibe: "James Beard-recognized institution on Third Street — minestrone, pasta, old-school service since 1977",
      },
      {
        name: "Bistro Maison",
        cuisine: "French",
        vibe: "French country cooking in a Victorian house on Third Street — the best date-night option in Yamhill County",
      },
      {
        name: "Craven Farm & Kitchen",
        cuisine: "American",
        vibe: "Farm-sourced, seasonal menu, the kind of place that changes with what's ready",
      },
    ],
    coffee: [
      { name: "Honest Chocolates", vibe: "Bean-to-bar chocolate and espresso on Third Street, unusual and good" },
      { name: "Cornerstone Coffee Roasters", vibe: "Local roaster, serious about sourcing, the working-morning anchor on Third" },
    ],
    bars: [
      { name: "Golden Valley Brewery", vibe: "McMinnville's original craft brewery — full menu, good house lagers, family-friendly" },
      { name: "Pinot Quarter", vibe: "Wine bar on Third Street with strong Yamhill County pours and late-evening hours" },
    ],
    medianHomePrice: 430000,
    priceRange: { low: 310000, high: 950000 },
    commuteToDowntown: "50–70 min by car via Hwy 18 or 99W; no commuter transit to Portland",
    faqs: [
      {
        q: "Is McMinnville far from Portland?",
        a: "About 40 miles, which sounds manageable until you account for Highway 18 through the Coast Range foothills and 99W congestion near Newberg and Tigard. Realistically, expect 55–70 minutes each way in normal driving conditions, longer in rush hour. Most McMinnville residents treat Portland as an occasional trip, not a daily commute. If you need to be in Portland regularly, this is the honest constraint.",
      },
      {
        q: "What makes McMinnville different from other Yamhill County towns?",
        a: "Scale and self-sufficiency. McMinnville has a hospital, a university, county employment, and a manufacturing sector — you don't have to drive to Hillsboro to get most of what you need. The downtown on Third Street functions as an actual destination: restaurants worth going out of your way for, coffee roasters, wine bars, and shops that aren't chains. Dundee and Carlton have more wine-country atmosphere, but much less infrastructure.",
      },
      {
        q: "How are McMinnville schools?",
        a: "McMinnville High School has an IB program, strong athletics, and a generally positive reputation for a district of its size. Elementary schools are solid. The district is not a top-ten Oregon district, but it performs better than the county averages would suggest, and Linfield University's presence means some educational enrichment at the high school level.",
      },
      {
        q: "What types of homes are available in McMinnville?",
        a: "The range is wide. Older ranch homes and Craftsmans in established neighborhoods start in the low $300ks. Newer construction on the north and east sides of town runs $450k–$600k. Vineyard-adjacent acreage properties and custom homes push $700k and above. The market moves slower than Portland suburbs, which means less competition pressure on individual offers.",
      },
    ],
    testimonials: [
      {
        quote:
          "My wife and I both left tech jobs in San Francisco. We wanted Oregon wine country and a real house. McMinnville gave us a four-bedroom with a yard for $495,000 — the same money that bought a one-bedroom condo in the Mission. Bri handled everything remotely until we flew up to close. Couldn't have been easier.",
        author: "Marco and Diana R.",
        context: "California relocation buyers, purchased 2023, $495,000",
      },
      {
        quote:
          "I work for Linfield University and wanted to live close by. Found a 1970s ranch three blocks from campus for $385,000. Bri got me a rate I didn't think I'd qualify for given my employment type. She knew exactly how to structure it.",
        author: "Patricia H.",
        context: "University employee, first-time buyer, purchased 2024, $385,000",
      },
      {
        quote:
          "We needed the hospital for my husband's care and wanted to stay close. McMinnville made sense — we weren't trying to commute anywhere. Third Street being ten minutes from our house is something we use every week. Bri walked us through a reverse mortgage option that let us do this without pressure on our monthly budget.",
        author: "Carol and Jim W.",
        context: "Retirees, purchased 2023, reverse mortgage",
      },
    ],
    relatedServices: [
      "purchase",
      "refinance",
      "fha",
      "va",
      "jumbo",
      "heloc",
      "cash-out",
      "divorce-lending",
      "investment",
      "reverse-mortgage",
    ],
    adjacentNeighborhoods: ["carlton", "dundee", "newberg", "forest-grove"],
    seo: {
      title: "Buying a Home in McMinnville, OR | Mortgage Lender | The Lindley Team",
      description:
        "McMinnville home loans with Bri Lindley at Mortgage Express. Yamhill County seat, Third Street dining, Evergreen Museum, median $430k. Honest mortgage guidance for wine country buyers. NMLS #1367416.",
    },
  },

  {
    slug: "dundee",
    name: "Dundee",
    city: "Dundee",
    state: "OR",
    description: [
      "The Dundee Hills AVA produces some of the most expensive Pinot Noir in North America, and the wineries that anchor it are all within a few miles of each other: Domaine Drouhin Oregon on Breyman Orchards Road, Argyle Winery on Highway 99W, Sokol Blosser on Orchard Lane, Archery Summit on Spring Valley Road. This is not a tourist approximation of wine country — it's the thing itself. The Dundee Bistro on Highway 99W is the town's dinner anchor, Willamette Valley Vineyards pours above it on the hill. The town of Dundee proper has around 3,500 people, one stoplight on 99W, and almost no commercial infrastructure beyond the restaurants and tasting rooms. That is either a feature or a bug depending on who's buying.",
      "Real estate here sorts into two categories: residential parcels in town (modest, older, the Newberg School District) and agricultural or vineyard-adjacent land on the surrounding hills. The residential median sits around $560,000, which sounds high until you see what $560k gets you elsewhere in the metro — and the vineyard-adjacent acreage parcels that come to market range from $700k for raw land to several million for established vineyard properties. The Newberg School District serves Dundee, which means Newberg High School is the high school of record. Families with school priorities typically view this as workable rather than exceptional, and many have structured their Dundee purchase partly around Linfield or George Fox university proximity for the cultural benefits rather than the K–12 schools specifically.",
      "Dundee is not a commuter town, and anyone honest about the traffic will tell you so. Highway 99W through Dundee is the single route in and out, and it feeds into the same 99W corridor that makes Newberg commutes hard — except you're adding another 8 miles. The drive to Portland on a clear Tuesday afternoon is 40 minutes. On a Friday evening in summer, when wine country visitors and Portland commuters are both on the road, it can be 75 minutes. People who buy here have typically made a definitive decision about where their life is centered: it's here, and Portland is something they visit. That clarity makes the purchase decision easier, and the lifestyle — rural quiet, one of Oregon's most beautiful landscapes, and being genuinely surrounded by world-class vineyards — is real.",
    ],
    personality: "The heart of Oregon wine country, for buyers who want the landscape as their actual life rather than a weekend destination",
    mapEmbedSrc: "https://maps.google.com/maps?q=Dundee+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Dundee+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 28,
    bikeScore: 22,
    transitScore: 8,
    schoolDistrict: "Newberg School District",
    schools: [
      { name: "Dundee Elementary School", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Mountain View Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Newberg High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Dundee Hills Trailhead",
        amenities: ["hiking", "vineyard views", "rural walking routes"],
      },
      {
        name: "Twohy Park",
        amenities: ["playground", "open lawn", "picnic area"],
      },
      {
        name: "Rex Hill Vineyard Grounds",
        amenities: ["walking paths", "winery gardens", "scenic overlooks"],
      },
    ],
    restaurants: [
      {
        name: "The Dundee Bistro",
        cuisine: "Pacific Northwest",
        vibe: "The town's main serious restaurant — wood-fired cooking, strong local wine list, the anchor of downtown Dundee dining",
      },
      {
        name: "Red Hills Market",
        cuisine: "American",
        vibe: "Wine country deli and market on 99W — sandwiches, local provisions, casual lunch before a winery afternoon",
      },
      {
        name: "The Painted Lady",
        cuisine: "French-American",
        vibe: "Fine dining in neighboring Newberg — prix fixe, reservations required, worth the short drive for special occasions",
      },
    ],
    coffee: [
      { name: "Red Hills Market", vibe: "Espresso and pastries alongside the deli — the morning stop for most Dundee residents" },
      { name: "Argyle Winery Tasting Room", vibe: "Not a coffee shop, but morning winery visits with sparkling pours before 11 a.m. are a real Dundee custom" },
    ],
    bars: [
      { name: "Domaine Drouhin Tasting Room", vibe: "Oregon Pinot and Chardonnay from one of the valley's most respected producers — appointment preferred" },
      { name: "Argyle Winery", vibe: "Walk-in sparkling wine and Pinot tasting on 99W — the most accessible tasting room in the AVA" },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 380000, high: 3500000 },
    commuteToDowntown: "45–75 min by car via Hwy 99W (highly variable, especially weekends and summer); no transit option",
    faqs: [
      {
        q: "What does real estate in Dundee actually look like?",
        a: "Two distinct markets. In-town residential: older homes, smaller lots, mostly in the $380k–$600k range, served by Newberg schools. Hillside and agricultural parcels: vineyard-adjacent land from $700k for raw acreage to several million for established, planted vineyard properties with structures. The spread is genuinely wide — a two-bedroom in-town house and a 20-acre Dundee Hills vineyard parcel are both 'Dundee real estate,' just completely different purchases.",
      },
      {
        q: "Is Dundee practical for someone who needs to get to Portland sometimes?",
        a: "Occasionally, yes. Daily, no. Highway 99W is the only route, and between Dundee's location and Portland rush-hour traffic, the drive is reliably 45 minutes on a good day and 75+ in summer or commute hours. Buyers who come here typically aren't optimizing for Portland access — they've made a deliberate choice about where their daily life is centered.",
      },
      {
        q: "What's the wine country lifestyle actually like in Dundee versus other towns?",
        a: "More concentrated than anywhere else in Yamhill County. The Dundee Hills AVA is small and the major producers — Domaine Drouhin, Sokol Blosser, Argyle, Archery Summit — are all within a few miles. Tasting rooms are genuinely close. The landscape on the hills above town is one of Oregon's finest. The trade-off is that the town itself has almost no commercial infrastructure beyond restaurants and tasting rooms, so you drive to Newberg or McMinnville for groceries and errands.",
      },
      {
        q: "Can I get a jumbo loan for a vineyard property in Dundee?",
        a: "It depends on the property structure. Agricultural land with a residential component often requires specialized financing — not all lenders can handle it. Bri Lindley at Mortgage Express has worked with vineyard-adjacent purchases in Yamhill County and can assess what financing structure fits the specific property. The answer varies considerably by acreage, existing improvements, and how the land is classified.",
      },
    ],
    testimonials: [
      {
        quote:
          "We spent three years in Napa before deciding Oregon was where we wanted to be. Dundee was the obvious answer — the AVA is serious, the prices were half of what comparable Napa hillside land costs, and the community of people who love wine here is genuine. Bri helped us structure a jumbo purchase on a property with both a residence and working vineyard. It was complicated and she handled every piece of it.",
        author: "Genevieve and Paul T.",
        context: "Vineyard property buyers, purchased 2023, $1.2M",
      },
      {
        quote:
          "I retired from software. I wanted ten acres, a view, and to stop commuting. Dundee gave me all three. I drove the 99W route once before I bought and knew I wasn't going to do it daily — that was fine with me. Bri made the financing clear and didn't oversell anything.",
        author: "Randall K.",
        context: "Retiree, acreage purchase, 2024, $725,000",
      },
      {
        quote:
          "We needed wine country proximity for our small production label and wanted to live where we work. Dundee Hills land made sense. The process was more complex than a standard residential purchase, and Bri walked us through the correspondent lending options that made it work.",
        author: "Theresa and Marcus D.",
        context: "Winemakers, land and improvement purchase, 2023",
      },
    ],
    relatedServices: [
      "purchase",
      "refinance",
      "jumbo",
      "heloc",
      "cash-out",
      "divorce-lending",
      "investment",
      "reverse-mortgage",
    ],
    adjacentNeighborhoods: ["newberg", "mcminnville", "carlton", "sherwood"],
    seo: {
      title: "Buying a Home in Dundee, OR | Mortgage Lender | The Lindley Team",
      description:
        "Dundee Hills real estate and home loans with Bri Lindley at Mortgage Express. Yamhill County wine country, Domaine Drouhin, Sokol Blosser, median $560k, vineyard financing specialists. NMLS #1367416.",
    },
  },

  {
    slug: "carlton",
    name: "Carlton",
    city: "Carlton",
    state: "OR",
    description: [
      "Main Street in Carlton is four blocks long and has more serious wine behind its doors than most American towns ten times its size. The Carlton Winemakers Studio opened in 2002 as the country's first custom-crush cooperative facility — multiple producers sharing a single space — and it put Carlton on the wine map before the Dundee Hills had mainstream recognition. Scott Paul Wines is around the corner. The Horse Radish, a wine bar and restaurant on Main Street, is the social center of town — cheese boards, a focused wine list, and the kind of Friday evening that makes you wonder why you ever needed a city. Carlton has about 2,200 residents, and on a Tuesday morning the main street is genuinely quiet.",
      "Housing reflects the town's scale: modest ranch homes and older farmhouses in the $350k–$500k range, with agricultural and rural residential parcels available at price points that aren't accessible in the Dundee Hills or even central Newberg. The McMinnville School District serves Carlton — students attend schools in McMinnville for middle and high school, which means a daily drive. For buyers who want Yamhill County wine country without Dundee Hills land prices or McMinnville's relative density, Carlton sits in an interesting gap. It's genuinely rural, genuinely quiet, and genuinely connected to the wine industry in a way that isn't tourist-facing.",
      "Carlton is not for anyone relying on Portland employment. The drive runs an hour to an hour-fifteen in typical conditions via Highway 47 north to Forest Grove and then 26 west, or via McMinnville and 99W — neither route is fast. Buyers in Carlton are either locally employed (healthcare in McMinnville, agriculture, the wine industry itself), fully remote, or retired. The upside is that the agricultural land market offers parcels and older farmhouses that simply don't exist at this price in Washington County or closer in. If the question is 'how little land can I afford that still feels like country life,' Carlton is worth calculating seriously.",
    ],
    personality: "Oregon wine country's quietest address — a four-block main street with serious wine credibility and rural land at prices the Dundee Hills don't offer",
    mapEmbedSrc: "https://maps.google.com/maps?q=Carlton+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Carlton+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 32,
    bikeScore: 28,
    transitScore: 5,
    schoolDistrict: "McMinnville School District",
    schools: [
      { name: "Carlton Elementary School", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Duniway Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "McMinnville High School", type: "high", grades: "9–12", rating: 6 },
    ],
    parks: [
      {
        name: "Wennerberg Park",
        amenities: ["sports fields", "playground", "picnic shelters", "walking paths"],
      },
      {
        name: "Miller Woods",
        amenities: ["forest trails", "creek access", "native plant restoration"],
      },
      {
        name: "Carlton Trailhead",
        amenities: ["hiking", "vineyard-adjacent walking routes", "rural views"],
      },
    ],
    restaurants: [
      {
        name: "The Horse Radish",
        cuisine: "Wine bar and small plates",
        vibe: "The heart of Carlton's Main Street — cheese boards, charcuterie, serious Oregon wine list, and a room full of people who actually live here",
      },
      {
        name: "Cuvée Restaurant",
        cuisine: "Pacific Northwest",
        vibe: "Dinner-only, farm-sourced, the most formal Carlton option — good for out-of-town guests who need a proper meal",
      },
      {
        name: "Carlton Bakery",
        cuisine: "Bakery",
        vibe: "Morning pastries and coffee, the town's casual social anchor before the tasting rooms open",
      },
    ],
    coffee: [
      { name: "Carlton Bakery", vibe: "Drip coffee and espresso alongside fresh pastries — the default morning stop" },
      { name: "The Horse Radish", vibe: "Opens for weekend brunch, pour-over available alongside the wine list" },
    ],
    bars: [
      { name: "Carlton Winemakers Studio", vibe: "Multiple producers, one space — the original cooperative tasting room, still the most interesting pour in town" },
      { name: "Scott Paul Wines", vibe: "Burgundy-focused Pinot in an industrial tasting room — serious and unpretentious" },
    ],
    medianHomePrice: 420000,
    priceRange: { low: 295000, high: 1100000 },
    commuteToDowntown: "60–80 min by car via Hwy 47 north or via McMinnville/99W; no transit option to Portland",
    faqs: [
      {
        q: "What makes Carlton different from other Yamhill County wine towns?",
        a: "The Carlton Winemakers Studio is part of it — it created a wine industry presence here that's more working and collaborative than tourist-facing. The town is smaller than Dundee by population but has a denser concentration of active producers on its main street. It also offers more agricultural land at lower prices than the Dundee Hills, which draws a different buyer: someone who wants land and quiet as the primary goal, with wine country adjacency as a bonus rather than the whole story.",
      },
      {
        q: "How far is Carlton from Portland?",
        a: "About 45 miles, but the routes are indirect. Highway 47 north connects to Highway 26 west of Forest Grove — that drive runs 60–75 minutes in normal conditions. The McMinnville route via 99W is similar. There's no fast option, no bypass, and no rail. Carlton buyers typically don't commute to Portland.",
      },
      {
        q: "What types of homes are available in Carlton?",
        a: "The in-town market has older single-family homes — ranches and Craftsmans from the 1940s through 1980s — in the $295k–$480k range. Rural residential parcels outside town offer farmhouses, older homes on acreage, and undeveloped agricultural land. The price ceiling on Carlton agricultural properties is lower than Dundee Hills comparables, often by $200k–$400k per acre, which is the primary financial argument for looking here.",
      },
      {
        q: "What are the schools like for Carlton residents?",
        a: "Carlton Elementary is in town for K–5. For middle and high school, students attend in McMinnville, which means a daily drive. McMinnville High School has an IB program and a solid reputation. Families consider this workable but should factor the transportation logistics into daily life planning.",
      },
    ],
    testimonials: [
      {
        quote:
          "We couldn't afford Dundee Hills land and didn't need that address for what we were doing — we make wine, we don't need a famous appellation on our mailbox. Carlton gave us four acres and a farmhouse for $540,000. Bri structured an FHA loan for the residence portion and helped us think through the agricultural component separately.",
        author: "Lena and Chris A.",
        context: "Small-production winemakers, farmhouse and acreage purchase, 2024, $540,000",
      },
      {
        quote:
          "I work fully remote and my wife is a nurse at Willamette Valley Medical in McMinnville. Carlton is fifteen minutes from her hospital and an hour from anything we'd need in Portland — which we go to maybe once a month. The house was $395,000 and we have a view of a vineyard from the kitchen. That math made sense.",
        author: "David and Keiko S.",
        context: "Remote worker and healthcare employee, purchased 2023, $395,000",
      },
      {
        quote:
          "After the divorce I wanted to start over somewhere real. Carlton was affordable without feeling like a compromise — the wine community here is welcoming, the town is quiet, and I have a small yard. Bri handled the divorce-lending situation with zero drama and explained every step clearly.",
        author: "Margaret L.",
        context: "Post-divorce buyer, purchased 2024, $335,000",
      },
    ],
    relatedServices: [
      "purchase",
      "refinance",
      "fha",
      "va",
      "jumbo",
      "heloc",
      "cash-out",
      "divorce-lending",
      "investment",
      "reverse-mortgage",
    ],
    adjacentNeighborhoods: ["mcminnville", "dundee", "newberg", "forest-grove"],
    seo: {
      title: "Buying a Home in Carlton, OR | Mortgage Lender | The Lindley Team",
      description:
        "Carlton, Oregon home loans with Bri Lindley at Mortgage Express. Yamhill County wine country, Carlton Winemakers Studio, median $420k, rural acreage financing. NMLS #1367416.",
    },
  },
];
