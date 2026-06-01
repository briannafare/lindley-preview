import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsClackamas: NeighborhoodData[] = [
  {
    slug: "lake-oswego",
    name: "Lake Oswego",
    city: "Lake Oswego",
    state: "OR",
    description: [
      "Oswego Lake is not a public amenity. That needs to be said up front, because people move here assuming they can kayak or swim in it — they can't unless they join the Lake Oswego Lake Corporation, which requires membership ranging from $25,000 to $35,000+ depending on the access tier, paid separately from any home purchase. What you do get with a Lake Oswego address is one of the most consistently well-maintained residential cities in Oregon, a downtown on A Avenue with actual independent restaurants like Tucci and Riccardo's Ristorante, and a walkable commercial core that most suburbs only approximate. State Street connects the east and west sides; it's the road you'll know after one week.",
      "The housing stock ranges from 1950s ranch homes on modest lots in the older Hallinan and Lake Grove areas to $2M+ estates with private lake easements on the east side. The Lake Oswego School District is repeatedly ranked among Oregon's top districts — River Grove, Westridge, Hallinan, and Uplands feed into Lake Oswego Middle and then Lake Oswego High, which has a graduation rate and test score profile that draws families from across the metro. The demographic is upper-income professionals, many of them tech workers or physicians commuting to Portland or Beaverton.",
      "MAX doesn't reach Lake Oswego. Your options are driving — I-5 or Highway 43 depending on your destination — or connecting to the Barbur TC bus service, which is an option but not a fast one. Commute to downtown Portland is typically 20–30 minutes by car in off-peak hours and 35–50 in peak traffic. The premium here is real and layered: you pay for the address, the school district, and if you want lake access, you pay for that separately. Buyers who know what they're buying get a lot for the price. Buyers who expect a public-access recreational lake get a more complicated experience.",
    ],
    personality: "Oregon's premier suburb — the lake is members-only, the schools are the best in the state",
    mapEmbedSrc: "https://maps.google.com/maps?q=Lake+Oswego+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Lake+Oswego+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 58,
    bikeScore: 44,
    transitScore: 34,
    schoolDistrict: "Lake Oswego School District",
    schools: [
      { name: "Uplands Elementary", type: "elementary", grades: "K–5", rating: 9 },
      { name: "Westridge Elementary", type: "elementary", grades: "K–5", rating: 9 },
      { name: "Lake Oswego Middle School", type: "middle", grades: "6–8", rating: 9 },
      { name: "Lake Oswego High School", type: "high", grades: "9–12", rating: 9 },
      { name: "Lakeridge High School", type: "high", grades: "9–12", rating: 9 },
    ],
    parks: [
      {
        name: "Millennium Plaza Park",
        amenities: ["fountain", "community events", "public gathering space", "adjacent to City Hall"],
      },
      {
        name: "George Rogers Park",
        amenities: ["Willamette River access", "picnic areas", "playground", "swimming beach (river)"],
      },
      {
        name: "Tryon Creek State Natural Area",
        amenities: ["hiking trails", "old-growth forest", "nature center", "equestrian trails"],
      },
    ],
    restaurants: [
      {
        name: "Tucci",
        cuisine: "Italian",
        vibe: "Upscale but not stiff — handmade pasta, good wine list, a real neighborhood restaurant on A Ave",
      },
      {
        name: "Riccardo's Ristorante",
        cuisine: "Italian",
        vibe: "Long-running, old-school service, the kind of place Lake Oswego regulars have been going for 20 years",
      },
      {
        name: "Red Rock",
        cuisine: "American",
        vibe: "Consistently busy, beer and burgers, accessible price point in an otherwise pricey downtown",
      },
    ],
    coffee: [
      { name: "Coffee House Five", vibe: "Local independent on A Ave, reliable espresso, neighborhood regulars" },
      {
        name: "Starbucks Reserve — Lake Oswego",
        vibe: "Predictable, but busy — there's one at every entry point to the city for a reason",
      },
    ],
    bars: [
      { name: "Lake Theater & Cafe", vibe: "Movie theater with a bar — Lake Oswego's version of a neighborhood pub" },
      { name: "Red Rock", vibe: "Doubles as the main bar scene downtown, especially weekends" },
    ],
    medianHomePrice: 900000,
    priceRange: { low: 550000, high: 3500000 },
    commuteToDowntown: "20–30 min by car off-peak, 35–50 in rush hour via Hwy 43 or I-5; no MAX, bus to Barbur TC available",
    faqs: [
      {
        q: "Is Oswego Lake open to the public?",
        a: "No. Oswego Lake is private, managed by the Lake Oswego Lake Corporation. Access requires a membership that is purchased separately from your home — costs typically range from $25,000 to $35,000+ depending on the tier. Some lakefront homes include easements. Buying a home in Lake Oswego does not grant lake access.",
      },
      {
        q: "How are the schools in Lake Oswego?",
        a: "Lake Oswego School District is consistently ranked among Oregon's top school districts. Lake Oswego High and Lakeridge High both have strong academic profiles. The district is one of the primary reasons families pay the Lake Oswego premium over nearby cities with comparable housing.",
      },
      {
        q: "Is there public transit from Lake Oswego to Portland?",
        a: "Not rail. MAX doesn't reach Lake Oswego. TriMet Line 35 runs from Lake Oswego downtown to downtown Portland in about 45–55 minutes. Driving to Barbur Transit Center and taking the bus from there is a faster option for some commuters. Most Lake Oswego residents drive.",
      },
      {
        q: "What's the difference between a lakefront home and a lake-access home in Lake Oswego?",
        a: "Lakefront homes sit directly on the lake and typically include private dock rights. Lake-access homes are in neighborhoods with shared lake easements — residents can reach the lake via a common path or shared dock. Neither guarantees full membership in the Lake Corporation; that's a separate purchase.",
      },
    ],
    testimonials: [
      {
        quote:
          "We came from NW Portland and the price difference for what we got was significant — same school quality we wanted, a 4-bedroom with a yard, and we closed at $880,000. In NW, that budget gets you a townhouse.",
        author: "The Nakamura family",
        context: "Moved from NW Portland to Lake Oswego, purchased at $880,000",
      },
      {
        quote:
          "We didn't join the lake right away. You should know that going in — it's a real conversation to have with yourself before you buy. The neighborhood is excellent regardless, but if the lake was why you're coming, budget for it separately.",
        author: "Sarah and Tom W.",
        context: "Relocated from Beaverton, first Lake Oswego home purchase",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc", "cash-out"],
    adjacentNeighborhoods: ["west-linn", "milwaukie", "sellwood-moreland", "tualatin", "wilsonville"],
    seo: {
      title: "Lake Oswego OR Homes & Mortgages | Bri Lindley, Mortgage Express",
      description:
        "Buying a home in Lake Oswego? Understand the lake access realities, school district, and price range before you shop. Bri Lindley, NMLS #1367416, Mortgage Express.",
    },
  },

  {
    slug: "west-linn",
    name: "West Linn",
    city: "West Linn",
    state: "OR",
    description: [
      "West Linn sits on a set of steep wooded hills above the west bank of the Willamette, directly across the river from Oregon City and south of Lake Oswego. The topography is real — Bolton Hill Road climbs hard, and navigating between the Sunset neighborhood on the plateau and Willamette neighborhood down by the river requires either knowing the roads or getting comfortable with GPS. Highway 43 connects West Linn to Lake Oswego to the north and to Willamette Falls Drive along the river. That falls — Willamette Falls, visible from several points near Oregon City — is a legitimate geological landmark: the second-largest waterfall by volume in the US, and West Linn is close enough that it's part of the area's identity even if it sits technically on the Oregon City side.",
      "The housing stock is predominantly 1970s–1990s single-family construction on good-sized lots, with some newer developments on the remaining hillside land and a handful of older homes in the Willamette neighborhood near the river. West Linn-Wilsonville School District has one of the strongest academic reputations in the state — Rosemont Ridge Middle and West Linn High are the names you'll hear most. The demographic overlaps substantially with Lake Oswego: dual-income families in professional fields who want top schools and suburban space but are working with a budget $150,000 to $200,000 below what Lake Oswego requires.",
      "I-205 is the main highway — it's faster than Highway 43 for reaching Portland, and the commute to downtown Portland runs 25–35 minutes depending on where exactly you're going and what hour you leave. That range can stretch to 45+ on bad traffic days. There is effectively no transit. The core trade-off that every West Linn buyer eventually articulates: comparable school quality to Lake Oswego, $150,000 to $200,000 less on the purchase price, and a commute that's slightly more I-205-dependent. That trade is real and it makes sense for a lot of families.",
    ],
    personality: "The Lake Oswego alternative — same school district quality, more accessible entry price, harder terrain",
    mapEmbedSrc: "https://maps.google.com/maps?q=West+Linn+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=West+Linn+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 31,
    bikeScore: 28,
    transitScore: 25,
    schoolDistrict: "West Linn-Wilsonville School District",
    schools: [
      { name: "Sunset Primary", type: "elementary", grades: "K–3", rating: 9 },
      { name: "Boeckman Creek Primary", type: "elementary", grades: "K–3", rating: 8 },
      { name: "Rosemont Ridge Middle School", type: "middle", grades: "6–8", rating: 9 },
      { name: "West Linn High School", type: "high", grades: "9–12", rating: 9 },
    ],
    parks: [
      {
        name: "Mary S. Young State Recreation Area",
        amenities: ["Willamette River access", "hiking trails", "off-leash dog area", "picnic areas"],
      },
      {
        name: "Burnside Park",
        amenities: ["sports fields", "playground", "open lawn", "picnic shelters"],
      },
      {
        name: "Bolton Nature Area",
        amenities: ["forested hiking", "creek access", "natural area", "unpaved trails"],
      },
    ],
    restaurants: [
      {
        name: "Bugatti's Ristorante",
        cuisine: "Italian",
        vibe: "Upscale date-night in West Linn — pasta and seafood, long-running local institution",
      },
      {
        name: "Abella Kitchen + Bar",
        cuisine: "American",
        vibe: "Newer spot, dinner-focused, reliable go-to for the Bolton Hill crowd",
      },
      {
        name: "The Dalles Restaurant",
        cuisine: "American",
        vibe: "Casual, family-friendly, long-time local spot in the Willamette neighborhood",
      },
    ],
    coffee: [
      { name: "Café Delirium", vibe: "Local coffee shop in the Willamette neighborhood, the go-to for morning regulars" },
      { name: "Stumptown Coffee (Willamette area)", vibe: "Reliable Pacific Northwest standard" },
    ],
    bars: [
      {
        name: "Pete's Bar & Grill",
        vibe: "Unpretentious neighborhood bar, West Linn's version of a local dive, sports on TV",
      },
      { name: "Abella Kitchen + Bar", vibe: "Doubles as the evening drinks spot for the neighborhood" },
    ],
    medianHomePrice: 700000,
    priceRange: { low: 480000, high: 1600000 },
    commuteToDowntown: "25–35 min by car via I-205; no light rail; limited bus service",
    faqs: [
      {
        q: "How does West Linn compare to Lake Oswego?",
        a: "The school districts are different but both top-rated. West Linn-Wilsonville and Lake Oswego School District consistently rank near the top of Oregon. West Linn typically prices $150,000–$200,000 lower on equivalent homes. The trade-off is that Lake Oswego has a more walkable downtown and more retail options. Most families doing the comparison come down on the side of West Linn when budget matters.",
      },
      {
        q: "What neighborhoods are within West Linn?",
        a: "The major sub-areas are Sunset (on the upper plateau, newer homes, most new development), Bolton (hilly, established, strong neighborhood identity), and Willamette (lower by the river, older stock, feels more like a river town). Each has a different character and different price points.",
      },
      {
        q: "Is there public transit in West Linn?",
        a: "Effectively no. TriMet operates limited service, but West Linn is a driving city. Most households have two cars. If transit access is important, Oregon City's bus connections or Milwaukie's MAX line are better options.",
      },
    ],
    testimonials: [
      {
        quote:
          "We looked at Lake Oswego seriously and ran the numbers. We bought a four-bedroom in West Linn for $695,000 — comparable to what we were seeing in LO for $850,000 to $900,000. The school district is different but both are excellent. It was not a hard call.",
        author: "Marcus and Yuki H.",
        context: "Relocated from Portland's Pearl District, compared Lake Oswego and West Linn before buying",
      },
      {
        quote:
          "The hills take some getting used to — you learn quickly which routes work in the morning and which don't. But after two years, we don't think about it. It's just home.",
        author: "Christina P.",
        context: "First-time buyer in the Bolton area, purchased at $642,000",
      },
    ],
    relatedServices: ["purchase", "refinance", "jumbo", "fha", "heloc", "cash-out"],
    adjacentNeighborhoods: ["lake-oswego", "oregon-city", "tualatin", "wilsonville"],
    seo: {
      title: "West Linn OR Homes & Mortgages | Bri Lindley, Mortgage Express",
      description:
        "West Linn offers top-rated schools at a lower price point than Lake Oswego. Learn what buyers need to know about the neighborhoods, commute, and housing market. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "oregon-city",
    name: "Oregon City",
    city: "Oregon City",
    state: "OR",
    description: [
      "Oregon City is the actual end of the Oregon Trail — the National Historic Trail designation ends here, and the End of the Oregon Trail Interpretive Center sits in a park on the south edge of town to mark it. More practically relevant to daily life is the municipal elevator: a free, city-operated lift that runs between the lower riverfront district and the upper bluff where much of the historic downtown sits. It's on 7th Street, it's operational, and it's one of the more unusual pieces of urban infrastructure in the Pacific Northwest. Willamette Falls is visible from several points along the river here — it's large, genuinely impressive when the river is running full, and one of the main natural features that distinguishes Oregon City from every other Clackamas County suburb.",
      "The housing stock covers a wide range: Victorian and Craftsman homes in the historic districts on the upper bluff, 1950s–1970s ranches in the McLoughlin area, and newer subdivisions that have expanded the city's footprint south and east over the past 20 years. Oregon City School District serves the area. For buyers who've been priced out of Lake Oswego, West Linn, and even Milwaukie, Oregon City represents a real entry point into the Clackamas County market at a price that pencils differently. The demographic is diverse — long-time Oregon City families, Portland buyers trading square footage for price, and some who genuinely prefer the smaller-city scale.",
      "The commute to Portland downtown is 30–40 minutes by car, more in peak traffic. MAX reaches Park Ave in Milwaukie — Oregon City is south of that terminus, which means the transit connection requires a bus link. That bus-to-MAX transfer adds time and complexity; most people drive. The honest trade-off: you get more house for less money than anywhere else this close to Portland, you're in a city with actual historic fabric and a functioning downtown, and you give up the premium school district name recognition and the easy light-rail connection.",
    ],
    personality: "The end of the Oregon Trail — real history, real affordability, real municipal elevator",
    mapEmbedSrc: "https://maps.google.com/maps?q=Oregon+City+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Oregon+City+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 47,
    bikeScore: 38,
    transitScore: 35,
    schoolDistrict: "Oregon City School District",
    schools: [
      { name: "Candy Lane Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Gardiner Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Oregon City High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Clackamette Park",
        amenities: ["Willamette River access", "boat launch", "RV area", "walking paths"],
      },
      {
        name: "Singer Creek Trail",
        amenities: ["forested hiking", "creek views", "natural area"],
      },
      {
        name: "End of the Oregon Trail Interpretive Center",
        amenities: ["historic site", "walking paths", "educational exhibits", "open grounds"],
      },
    ],
    restaurants: [
      {
        name: "McMenamins Hotel Oregon",
        cuisine: "American",
        vibe: "Historic hotel bar and restaurant on the upper bluff, a genuine Oregon institution",
      },
      {
        name: "Beavercreek Bar & Grill",
        cuisine: "American",
        vibe: "Long-running local spot, relaxed, sports-bar adjacent",
      },
      {
        name: "La Poblanita",
        cuisine: "Mexican",
        vibe: "Consistent, no-frills tacos and plates — the kind of place locals go on a weeknight",
      },
    ],
    coffee: [
      { name: "Rivershore Coffee", vibe: "Local independent, views toward the river, reliable morning spot" },
      { name: "Dutch Bros (Main St)", vibe: "Drive-through, fast, crowded — the practical choice for many commuters" },
    ],
    bars: [
      { name: "McMenamins Hotel Oregon Pub", vibe: "Rooftop bar in the summer, historic hotel setting, reliably good" },
      { name: "Oregon City Brewing", vibe: "Taproom with local beers, casual, often has live music on weekends" },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 320000, high: 850000 },
    commuteToDowntown: "30–40 min by car; bus to MAX Park Ave terminus then rail to downtown (~55–65 min total)",
    faqs: [
      {
        q: "What is the municipal elevator in Oregon City?",
        a: "It's a free, city-operated elevator on 7th Street that connects the lower McLoughlin-area riverfront to the upper bluff where the historic downtown sits. The city is built on two levels — the elevator has been there since 1915 in various forms and is still operational. It's used by residents daily, not just tourists.",
      },
      {
        q: "Does MAX reach Oregon City?",
        a: "No. The MAX Orange Line ends at Park Ave Station in Milwaukie. From there, TriMet bus service continues south to Oregon City, but the transfer adds significant time. Total transit commute to downtown Portland is typically 55–65 minutes. Most Oregon City residents drive.",
      },
      {
        q: "How does the Oregon City school district compare to Lake Oswego or West Linn?",
        a: "Oregon City School District is solid — Oregon City High School has good programs and strong community support. It's not at the same ranking level as Lake Oswego or West Linn-Wilsonville districts, and that difference shows up in the price. You're paying $400,000 less for a comparable home, and the school trade-off is part of that math.",
      },
    ],
    testimonials: [
      {
        quote:
          "We looked in SE Portland for a year and kept losing. We bought a 3-bedroom Craftsman in Oregon City's historic district for $468,000. In Sellwood, that same house is $700,000. We made our peace with the commute pretty fast.",
        author: "James and Kelsey T.",
        context: "Relocated from SE Portland after 18 months searching; purchased in Oregon City historic district",
      },
      {
        quote:
          "The elevator is actually useful — I work in the lower city and live up top. Takes less than a minute. People think it's a tourist thing but residents use it every day.",
        author: "Diane M.",
        context: "Oregon City resident and homeowner for 7 years",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "cash-out", "investment"],
    adjacentNeighborhoods: ["west-linn", "milwaukie", "happy-valley", "canby", "wilsonville"],
    seo: {
      title: "Oregon City OR Homes & Mortgages | Bri Lindley, Mortgage Express",
      description:
        "Oregon City offers real affordability in Clackamas County — historic neighborhoods, Willamette Falls, and a price point that opens doors for buyers priced out of Lake Oswego or West Linn. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "milwaukie",
    name: "Milwaukie",
    city: "Milwaukie",
    state: "OR",
    description: [
      "Park Ave Station in downtown Milwaukie is the southern terminus of the MAX Orange Line, which means Milwaukie has genuine light rail access to Portland — not a bus connection, not a park-and-ride at the edge of a freeway, but a station in the city's downtown core. The ride to the South Park Blocks or PSU takes about 20–25 minutes. The Springwater Corridor trail also connects Milwaukie directly to Portland by bike, running along the Willamette from Sellwood south. These two facts — MAX access and the Springwater Corridor — differentiate Milwaukie from every other Clackamas County suburb and make it the most transit-and-bike-accessible community south of Portland proper.",
      "The housing stock is a mix of 1940s–1960s working-class bungalows and ranches, with more recent infill development near the downtown core as the MAX line matured. North Clackamas School District covers Milwaukie — it's a well-regarded district, notably better than Portland Public Schools in overall rankings, serving a mix of Milwaukie, Happy Valley, and surrounding communities. Downtown Milwaukie has developed incrementally: Wy'East Pizza is the anchor of the Main Street scene, The Railyard food cart pod operates seasonally, and there's a small but real cluster of independent businesses. The demographic is younger buyers and families who want Portland-adjacent living at a price that's 20–30% below comparable inner SE neighborhoods.",
      "The trade-off that buyers need to acknowledge: Milwaukie is not inner SE Portland, even if it's adjacent to it and connected by trail and rail. The commercial infrastructure is still developing. McLoughlin Boulevard is not a pleasant street to be near. Some blocks have industrial or light-commercial uses that won't change. But for buyers who specifically want the Springwater connection and the MAX, who want North Clackamas schools instead of Portland Public, and who want to buy for $490,000 instead of $650,000, the calculation is clear and a lot of buyers are making it.",
    ],
    personality: "Clackamas County's most transit-connected suburb — MAX on one end, the Springwater on the other",
    mapEmbedSrc: "https://maps.google.com/maps?q=Milwaukie+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Milwaukie+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 56,
    bikeScore: 72,
    transitScore: 52,
    schoolDistrict: "North Clackamas School District",
    schools: [
      { name: "Linwood Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Rowe Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Milwaukie High School", type: "high", grades: "9–12", rating: 7 },
      { name: "Rex Putnam High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Springwater Corridor Trail",
        amenities: ["paved multi-use trail", "Willamette River adjacency", "cycling connection to Portland"],
      },
      {
        name: "Elk Rock Island",
        amenities: ["natural area", "seasonal island access", "bird watching", "hiking"],
      },
      {
        name: "Milwaukie Community Park",
        amenities: ["sports fields", "playground", "picnic areas", "community events space"],
      },
    ],
    restaurants: [
      {
        name: "Wy'East Pizza",
        cuisine: "Pizza",
        vibe: "Wood-fired, local ingredients, the restaurant that put downtown Milwaukie on the map",
      },
      {
        name: "The Railyard",
        cuisine: "Food cart pod",
        vibe: "Rotating carts, outdoor seating, casual and seasonal — good for a weekend lunch",
      },
      {
        name: "Casa Colima",
        cuisine: "Mexican",
        vibe: "Longstanding Milwaukie Mexican restaurant, family-run, consistently good",
      },
    ],
    coffee: [
      { name: "Kokiyo Teriyaki & Espresso", vibe: "Unpretentious, quick, the working neighborhood's coffee stop" },
      { name: "Milwaukie Coffee", vibe: "Small local shop near downtown, regulars-only feel" },
    ],
    bars: [
      { name: "Brewers Union Local 180 (Milwaukie)", vibe: "Oregon craft beer pub, comfortable, not loud" },
      { name: "Fultano's Pizza & Pub", vibe: "Neighborhood bar with pizza — been here longer than the MAX line" },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 340000, high: 750000 },
    commuteToDowntown: "20–25 min by MAX from Park Ave Station; 10–15 min by bike via Springwater; 20 min by car off-peak",
    faqs: [
      {
        q: "How does the MAX Orange Line work from Milwaukie?",
        a: "Park Ave Station is the southern terminus. From there, the Orange Line runs north through Southeast Portland, over the Tilikum Crossing bridge, to downtown Portland — South Waterfront, PSU, the South Park Blocks. The ride to downtown is about 20–25 minutes. Service runs frequently during peak hours.",
      },
      {
        q: "What school district serves Milwaukie?",
        a: "North Clackamas School District. It consistently rates above Portland Public Schools on state metrics. Milwaukie High School and Rex Putnam High School are the main high schools. For families who want better district performance than PPS without paying the Lake Oswego premium, North Clackamas is the reason many buyers choose Milwaukie.",
      },
      {
        q: "How is Milwaukie different from inner SE Portland?",
        a: "Price is the most obvious difference — median is around $490,000 versus $650,000+ in comparable inner SE neighborhoods. The school district is different (North Clackamas vs Portland Public). The commercial infrastructure is less dense. And Milwaukie is its own incorporated city with its own municipal services, not a Portland neighborhood. The Springwater trail makes the geographic connection to SE Portland feel shorter than it is.",
      },
    ],
    testimonials: [
      {
        quote:
          "We were renting in SE Portland and kept losing offers on houses in Woodstock and Sellwood. We found a three-bedroom in Milwaukie for $478,000, two blocks from the Springwater trail. I bike to the Orange Line platform in eight minutes. The commute is actually better than it was when we lived in the city.",
        author: "Aaron and Theresa G.",
        context: "Relocated from Woodstock/SE Portland, first-time buyers, purchased at $478,000",
      },
      {
        quote:
          "The schools were the deciding factor. North Clackamas is measurably better than PPS and we didn't want to pay Lake Oswego prices to get there. Milwaukie was the answer we didn't expect.",
        author: "Priya S.",
        context: "Moved from North Portland with school-age children, purchased in 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "cash-out", "investment", "heloc"],
    adjacentNeighborhoods: ["sellwood-moreland", "eastmoreland", "woodstock", "oregon-city", "happy-valley", "lake-oswego"],
    seo: {
      title: "Milwaukie OR Homes & Mortgages | Bri Lindley, Mortgage Express",
      description:
        "Milwaukie has MAX light rail, the Springwater Corridor, and North Clackamas schools at a price point well below inner SE Portland. Learn what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "happy-valley",
    name: "Happy Valley",
    city: "Happy Valley",
    state: "OR",
    description: [
      "From the higher streets in Happy Valley — Altamont Drive, the upper reaches of SE Sunnyside Road — you get clear views of Mt. Hood on the days the mountain shows itself. That view is real, and it's one of the things people mention when they describe why they bought here. The city sits in the Clackamas County foothills southeast of Portland, and it's one of the fastest-growing incorporated cities in Oregon over the past 15 years. What that growth looks like on the ground is subdivisions: planned communities from 2000 through 2020, some of which are still being built out, with names like Scouters Mountain Heights and Summerfield. The infrastructure is new. The streets are wide. The houses have garages.",
      "Nearly all of the housing stock is newer construction — 2-story single-family homes on established subdivisions lots, built by regional and national builders. You will not find 1920s bungalows in Happy Valley. What you will find is square footage: a 4-bedroom, 2.5-bath house at $600,000 that might be $850,000 in comparable Portland neighborhoods, or more. North Clackamas School District serves Happy Valley, and it's one of the primary draws — the district ranks well above Portland Public Schools, and the newer school facilities in Happy Valley reflect the city's recent growth. The demographic is young families, many of them first-time buyers moving from inner Portland or SE Portland apartments.",
      "The honest accounting: Happy Valley has no light rail, no meaningful transit network, and no walkable commercial core. I-205 is the main artery, and it slows materially during the evening peak. Commute to downtown Portland runs 25–40 minutes depending on traffic and your specific destination. You drive for everything — groceries, coffee, kids' activities, the school run. The neighborhood fabric is younger and still forming in ways that established Portland neighborhoods are not. What you get for those trade-offs is new construction, good schools, more space, and a price per square foot that's lower than anywhere closer to Portland.",
    ],
    personality: "Fast-growing foothills suburb — new construction, Mt. Hood views, no transit, good schools",
    mapEmbedSrc: "https://maps.google.com/maps?q=Happy+Valley+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Happy+Valley+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 22,
    bikeScore: 20,
    transitScore: 18,
    schoolDistrict: "North Clackamas School District",
    schools: [
      { name: "Happy Valley Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Happy Valley Middle School", type: "middle", grades: "6–8", rating: 8 },
      { name: "Clackamas High School", type: "high", grades: "9–12", rating: 8 },
      { name: "Oregon City High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Happy Valley Park",
        amenities: ["sports fields", "playground", "splash pad", "picnic shelters", "walking paths"],
      },
      {
        name: "Scouters Mountain Nature Park",
        amenities: ["hiking trails", "Mt. Hood views", "forested terrain", "natural area"],
      },
      {
        name: "Clackamas Town Center Area Paths",
        amenities: ["paved walking and biking", "multi-use paths connecting subdivisions"],
      },
    ],
    restaurants: [
      {
        name: "Rock Bottom Restaurant & Brewery",
        cuisine: "American",
        vibe: "Sit-down chain at Clackamas Town Center — reliable, suburban, frequently busy",
      },
      {
        name: "Mingo's Mexican Grill",
        cuisine: "Mexican",
        vibe: "Local spot near the center of Happy Valley, family-friendly, consistent",
      },
      {
        name: "Thai Orchid",
        cuisine: "Thai",
        vibe: "Strip mall Thai — the kind of place that's actually good and becomes a regular stop",
      },
    ],
    coffee: [
      { name: "Dutch Bros (multiple locations)", vibe: "Drive-through only, dominant in this area, fast and practical" },
      { name: "Starbucks (Sunnyside Rd)", vibe: "Suburban standard, crowded at 7:30am" },
    ],
    bars: [
      { name: "Rock Bottom Brewery", vibe: "The main sit-down bar option — family restaurant that also serves beer" },
      { name: "McMenamins Clackamas", vibe: "McMenamins outpost near the Town Center, reliable and predictable" },
    ],
    medianHomePrice: 600000,
    priceRange: { low: 450000, high: 950000 },
    commuteToDowntown: "25–40 min by car via I-205; no light rail or meaningful transit",
    faqs: [
      {
        q: "Is Happy Valley a good place for families with kids?",
        a: "For families specifically prioritizing newer construction, more square footage, and a good school district (North Clackamas), Happy Valley delivers on all three at a price point below Lake Oswego or West Linn. The trade-off is that it's a car-dependent community with limited walkable amenities, and the neighborhood character is newer and less established than older suburbs.",
      },
      {
        q: "What is the commute from Happy Valley to Portland?",
        a: "I-205 is the main route. In normal conditions, downtown Portland is 25–35 minutes. Evening rush hour can add 15–20 minutes. There is no light rail or meaningful transit option from Happy Valley. Budget for two cars and factor I-205 congestion into your daily schedule.",
      },
      {
        q: "Are all the homes in Happy Valley new construction?",
        a: "Nearly all. The city grew rapidly from 2000 to present, and the housing stock reflects that. If you want a 1950s ranch or a Craftsman bungalow, Happy Valley is not the market. If you want a 4-bedroom house with an open floor plan, good energy efficiency, and a proper garage, you'll have significant inventory to work with.",
      },
    ],
    testimonials: [
      {
        quote:
          "We had a 2-bedroom apartment in Portland and needed space for a second kid. We bought a 4-bedroom in Happy Valley for $589,000. That square footage does not exist in SE Portland at that price. We drive more now. It's worth it.",
        author: "Ryan and Michelle K.",
        context: "Former NE Portland renters, purchased new construction in Happy Valley at $589,000",
      },
      {
        quote:
          "North Clackamas schools were the thing we could not find a workaround for. Happy Valley was the most practical way to access that district at a price we could manage.",
        author: "Denise and Craig O.",
        context: "Moved from SE Portland, bought in Happy Valley in 2022 for school access",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "heloc", "cash-out", "investment"],
    adjacentNeighborhoods: ["milwaukie", "oregon-city", "west-linn", "canby"],
    seo: {
      title: "Happy Valley OR Homes & Mortgages | Bri Lindley, Mortgage Express",
      description:
        "Happy Valley is one of Oregon's fastest-growing cities — newer construction, North Clackamas schools, and Mt. Hood views. Learn what buyers need to know before they shop. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "canby",
    name: "Canby",
    city: "Canby",
    state: "OR",
    description: [
      "The Canby Ferry is a cable-guided ferry across the Willamette River — not a bridge, an actual ferry. It runs from Canby to the Wilsonville side, costs a few dollars, and takes about five minutes. It operates seasonally and carries cars, cyclists, and pedestrians. It's a practical crossing that also happens to be one of those Oregon things that people who know about it talk about. It's at the end of S Holly Street on the Canby side. Canby itself is a city of around 18,000 people, south of Wilsonville, with a genuine small-city downtown on 1st and 2nd Avenues — not a downtown that's been converted from something else, but one that grew that way over time, with local businesses that have been operating for decades.",
      "The housing stock mixes older 1940s–1970s homes in the historic core with newer subdivisions on Canby's edges. Canby School District is an independent district with strong community support — Canby High School is the main high school, and the district serves a population that's meaningfully different from the urban-professional demographic of Lake Oswego or Happy Valley. Agriculture is not a peripheral feature of Canby: the Canby area has active nurseries and farms — Horticulture is genuinely part of the local economy, and the land around the city reflects it. The price point reflects all of this: at a median of around $460,000, Canby offers more house than any other community covered here at an equivalent price.",
      "The commute is 35–45 minutes to Portland by car and entirely car-dependent — there's no transit option that makes sense for a daily commute. Highway 99E is the main north-south road connecting Canby to Wilsonville and Oregon City. For buyers who've been looking at the metro and want space, lower density, and a genuine break from the Portland suburban aesthetic, Canby is a real option — not a compromise, but a deliberate choice. The distance is a daily fact of life, and buyers who thrive here are the ones who've made peace with that up front.",
    ],
    personality: "Genuine small city at the edge of the metro — the ferry is real, the farms are real, the commute is real",
    mapEmbedSrc: "https://maps.google.com/maps?q=Canby+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Canby+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 38,
    bikeScore: 40,
    transitScore: 15,
    schoolDistrict: "Canby School District",
    schools: [
      { name: "Ackerman Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Baker Prairie Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Canby High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Canby City Park",
        amenities: ["sports fields", "playground", "picnic areas", "public pool", "walking paths"],
      },
      {
        name: "Molalla River State Park",
        amenities: ["Willamette River confluence", "boat launch", "fishing", "picnic areas", "natural area"],
      },
      {
        name: "Canby Ferry Crossing Area",
        amenities: ["scenic river crossing", "walking area", "Willamette River views", "cyclist-accessible"],
      },
    ],
    restaurants: [
      {
        name: "Canemah Brewing",
        cuisine: "American",
        vibe: "Local brewery with food, the anchor of Canby's downtown dining scene, solid weekend spot",
      },
      {
        name: "El Tapatio",
        cuisine: "Mexican",
        vibe: "Long-running Canby institution, the kind of neighborhood Mexican restaurant that doesn't need to advertise",
      },
      {
        name: "Abby's Legendary Pizza",
        cuisine: "Pizza",
        vibe: "Oregon chain, but the Canby location is a genuine local gathering spot",
      },
    ],
    coffee: [
      { name: "Dutch Bros (99E)", vibe: "Drive-through, the practical caffeine stop for most Canby commuters" },
      { name: "Canby Coffee Company", vibe: "Local independent, downtown location, where the early risers go" },
    ],
    bars: [
      { name: "Canemah Brewing", vibe: "Taproom side, relaxed, locals mix with visitors, outdoor seating in summer" },
      {
        name: "Horseshoe Tavern",
        vibe: "Old-school Canby bar — pool table, regulars, no pretense, been there longer than most residents",
      },
    ],
    medianHomePrice: 460000,
    priceRange: { low: 300000, high: 750000 },
    commuteToDowntown: "35–45 min by car via Hwy 99E and I-205; car-dependent, no transit option for daily commute",
    faqs: [
      {
        q: "What is the Canby Ferry?",
        a: "The Canby Ferry is a cable-guided river ferry across the Willamette, connecting Canby to the Wilsonville side. It carries cars, bicycles, and foot passengers. It operates seasonally (generally spring through fall, weather permitting) and costs a few dollars per vehicle. It's at the end of S Holly Street in Canby. It's both a functional crossing and, frankly, one of the more memorable Oregon experiences in a metro area full of bridges.",
      },
      {
        q: "How far is the commute from Canby to Portland?",
        a: "35–45 minutes by car under normal conditions via Highway 99E to I-205 or I-5. Add 10–15 minutes in peak hour traffic. There is no practical transit option for a daily Portland commute from Canby. Most households have multiple cars, and proximity to Canby's own commercial services reduces how often residents need to drive north.",
      },
      {
        q: "How are the schools in Canby?",
        a: "Canby School District is an independent district with strong local community support. Canby High School is the main high school. Rankings are solid for a community this size — not at the Lake Oswego or West Linn-Wilsonville level, but comparable to what you'd find in most independent Clackamas County districts. The district's smaller size means more direct community engagement with the schools.",
      },
      {
        q: "Is Canby a good area for first-time buyers?",
        a: "It can be, especially for buyers who want more house at a lower price and are comfortable with the commute. At a median of ~$460,000, the entry point is lower than any comparable suburb closer to Portland. FHA loans and conventional financing both work well in this price range. The key is being honest about the 35–45 minute commute before you commit.",
      },
    ],
    testimonials: [
      {
        quote:
          "We looked at everything between SE Portland and Oregon City for 14 months. We bought a 3-bedroom house in Canby for $441,000 with a half-acre. That does not exist closer to the city at that price. The commute is 40 minutes. We knew that going in.",
        author: "Jason and Lori B.",
        context: "First-time buyers after 14 months of searching; purchased in Canby at $441,000",
      },
      {
        quote:
          "We moved from Happy Valley. We wanted more land and less traffic around us. Canby was the move that made sense. The ferry is genuinely one of our favorite things about living here.",
        author: "Stephanie and Paul N.",
        context: "Moved from Happy Valley to Canby for more land and lower density",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "cash-out", "investment", "reverse-mortgage"],
    adjacentNeighborhoods: ["oregon-city", "happy-valley", "wilsonville", "west-linn"],
    seo: {
      title: "Canby OR Homes & Mortgages | Bri Lindley, Mortgage Express",
      description:
        "Canby is a small city at the southern edge of the Portland metro — the Canby Ferry, working farms, and the lowest price point in Clackamas County. Bri Lindley, NMLS #1367416, Mortgage Express.",
    },
  },
];
