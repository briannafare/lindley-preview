import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsWACo2: NeighborhoodData[] = [
  {
    slug: "sherwood",
    name: "Sherwood",
    city: "Sherwood",
    state: "OR",
    description: [
      "Sherwood sits at the southern end of Washington County where 99W finally stops pretending to be a city street and starts moving again. Roy Rogers Road marks the line between Tualatin and Sherwood — cross it and the subdivisions get newer and the lots get slightly larger. Old Town Sherwood, clustered around SW Railroad Street, has an actual independent hardware store, a handful of restaurants, and a seasonal farmers market. It's not a destination, but it functions. Sherwood's growth in the 2000s and 2010s added thousands of homes in master-planned developments east and west of town — Sherwood's Meadowbrook, Maplewood Estates, and the newer sections north of Sunset Boulevard.",
      "The draw for most buyers is the Sherwood School District. It's consistently rated among the top five districts in Washington County — Edy Ridge Elementary, Middleton Elementary, and Sherwood Middle School all pull strong test scores, and Sherwood High School has above-average graduation rates and a range of AP courses. The district is small enough that it hasn't fractured into attendance-zone politics the way larger districts have. Homes here run about $600k at the median, which buys a 4-bedroom house built in the 1990s or 2000s with a real yard — the same money in Lake Oswego or west Portland gets you less house on a smaller lot in an older building.",
      "There is no light rail to Sherwood and no plan for one. TriMet bus service (Line 96) runs up 99W to Tigard and connects to MAX, but the trip from Sherwood to downtown Portland takes 90 minutes minimum in each direction. Most Sherwood residents drive. Tualatin Valley Highway backs up through Tigard every weekday morning from about 7:15 to 8:30, and again in reverse on the return. If you're commuting to the west side — Hillsboro, Beaverton, Tigard itself — it's manageable. If you're going downtown daily, build the commute time into the decision.",
    ],
    personality: "Top-rated schools, new subdivisions, and a 99W commute that's the honest price of admission",
    mapEmbedSrc: "https://maps.google.com/maps?q=Sherwood+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Sherwood+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 31,
    bikeScore: 28,
    transitScore: 22,
    schoolDistrict: "Sherwood School District 88J",
    schools: [
      { name: "Edy Ridge Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Middleton Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Sherwood Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Sherwood High School", type: "high", grades: "9–12", rating: 8 },
      { name: "St. Francis School", type: "private", grades: "K–8", rating: 7 },
    ],
    parks: [
      {
        name: "Stella Olsen Memorial Park",
        amenities: ["sports fields", "playground", "walking paths", "picnic area"],
      },
      {
        name: "Snyder Park",
        amenities: ["youth sports fields", "restrooms", "parking"],
      },
      {
        name: "Sherwood Community Sports Complex",
        amenities: ["baseball diamonds", "soccer fields", "concessions", "bleachers"],
      },
    ],
    restaurants: [
      {
        name: "Merchant's Bar & Grill",
        cuisine: "American",
        vibe: "Old Town Sherwood anchor — burgers, salads, a full bar, and outdoor seating in good weather",
      },
      {
        name: "McMenamins Sherwood",
        cuisine: "American",
        vibe: "Reliable McMenamins formula in a historic building on Railroad Street — pub food, house beer",
      },
      {
        name: "Koi Fusion",
        cuisine: "Korean-Mexican",
        vibe: "Fast-casual Korean-Mexican on Tualatin-Sherwood Road — solid for a quick lunch",
      },
    ],
    coffee: [
      {
        name: "Human Bean Sherwood",
        vibe: "Drive-through coffee chain that actually does the job — faster than a sit-down cafe on school mornings",
      },
      {
        name: "Dutch Bros Coffee",
        vibe: "The line at Tualatin-Sherwood Road is long for a reason — consistent and fast",
      },
    ],
    bars: [
      {
        name: "Merchant's Bar & Grill",
        vibe: "The neighborhood bar for Old Town Sherwood — approachable, not a scene",
      },
      {
        name: "McMenamins Sherwood",
        vibe: "House-brewed ales, full menu, families and adults both — the 6pm crowd is mostly parents who just left a school event",
      },
    ],
    medianHomePrice: 600000,
    priceRange: { low: 440000, high: 950000 },
    commuteToDowntown: "40–55 min by car via 99W through Tigard (longer in rush hour); 90+ min by TriMet bus to MAX to downtown; no light rail",
    faqs: [
      {
        q: "Is the Sherwood School District really worth moving for?",
        a: "For families prioritizing K–12 public schools, it's one of the strongest arguments for buying in Sherwood over comparable-priced suburbs closer to Portland. The district is small (around 5,000 students), test scores are above Oregon averages, and Sherwood High has a solid course catalog. If schools are the deciding factor and Lake Oswego is out of budget, Sherwood is the conversation.",
      },
      {
        q: "What does $600,000 buy in Sherwood?",
        a: "At the median you're typically looking at a 4-bedroom, 2.5-bath house built between 1995 and 2010, with a two-car garage and a yard — usually 6,000–8,000 square feet of lot. Most of these are in master-planned developments east or west of downtown. Anything under $500k needs work or is smaller than average.",
      },
      {
        q: "Can I commute from Sherwood to downtown Portland without a car?",
        a: "Technically yes — TriMet Line 96 runs up 99W and connects to MAX at Tigard Transit Center. Realistically it's 80–100 minutes each way. Most Sherwood residents drive. If you're commuting to Beaverton or Hillsboro on the west side, the numbers are much better.",
      },
      {
        q: "How fast is the Sherwood real estate market?",
        a: "Competitive for anything priced correctly in the $500k–$700k range. Well-presented homes in good school attendance zones routinely go over asking. The market slows somewhat above $800k — there's less demand at that price point relative to inventory.",
      },
    ],
    testimonials: [
      {
        quote: "We were renting in Beaverton and wanted a yard and good schools without going into Clackamas County. Sherwood hit both. Bri got us into a 4-bed on Maplewood for $588k — we made an offer the day it listed.",
        author: "Danielle and Chris M.",
        context: "Purchased in Sherwood, 2024",
      },
      {
        quote: "The school district was the whole reason we looked at Sherwood. We got a house two blocks from Edy Ridge Elementary for $565k. Same house would have been $750k in Lake Oswego.",
        author: "Todd R.",
        context: "Purchased in Sherwood, 2023",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "va", "jumbo"],
    adjacentNeighborhoods: ["tualatin", "tigard", "wilsonville"],
    seo: {
      title: "Buying a Home in Sherwood, OR | The Lindley Team",
      description:
        "Sherwood, Oregon home prices, school district ratings, commute times, and what buyers need to know. Bri Lindley, NMLS #1367416, Mortgage Express.",
    },
  },

  {
    slug: "wilsonville",
    name: "Wilsonville",
    city: "Wilsonville",
    state: "OR",
    description: [
      "Wilsonville sits at the junction of I-5 and the Boone Bridge, right where Clackamas County meets the southern edge of Washington County. Intel, Xerox, and Mentor Graphics (now Siemens EDA) have operated facilities here for decades, which means the city has a base of tech and manufacturing workers who don't necessarily need to commute to Portland at all. The WES Commuter Rail station at Wilsonville Town Center connects north to Beaverton, where passengers transfer to the MAX Blue or Red line — the full trip to downtown Portland is 55–70 minutes, but it runs on a schedule and doesn't involve sitting on I-5. SMART Bus provides service south toward Salem and Canby. The freeway access is the other piece: I-5 onramps here are not the bottleneck — they're at Tualatin or Tigard.",
      "West Linn-Wilsonville School District serves the city and has a strong reputation — Wilsonville High School consistently ranks in the top tier for Washington County. Villebois, the master-planned development on the city's west side, has been growing since the mid-2000s and now represents a significant share of the city's housing stock. It's walkable within itself, with pocket parks, a town green, and higher-density attached housing alongside detached single-family homes. Median prices here run about $580k — buyers get more square footage than they would in Beaverton or Tigard for similar money, and the lots are newer construction.",
      "Wilsonville is a bedroom community in the honest sense — most of the retail is utilitarian (grocery stores, a Costco nearby in Tualatin, chain restaurants along Boones Ferry Road), and the cultural life is limited. If going to a show, a museum, or an independent restaurant matters to the household, you're making a 30–40 minute drive to Portland. That's a real trade-off. The city is also growing fast, which means construction traffic and evolving infrastructure are part of daily life in some neighborhoods. The Charbonneau district on the south end is a separate golf-course retirement community — it operates differently from the rest of the city and has its own HOA landscape.",
    ],
    personality: "WES commuter rail, I-5 access, and one of the county's better school districts — minus the nightlife",
    mapEmbedSrc: "https://maps.google.com/maps?q=Wilsonville+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Wilsonville+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 33,
    bikeScore: 37,
    transitScore: 30,
    schoolDistrict: "West Linn-Wilsonville School District",
    schools: [
      { name: "Boones Ferry Primary School", type: "elementary", grades: "K–3", rating: 8 },
      { name: "Lowrie Primary School", type: "elementary", grades: "K–3", rating: 7 },
      { name: "Wilsonville Middle School", type: "middle", grades: "6–8", rating: 8 },
      { name: "Wilsonville High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Memorial Park",
        amenities: ["sports fields", "picnic shelters", "playground", "restrooms", "river access trail nearby"],
      },
      {
        name: "Villebois Town Green",
        amenities: ["open lawn", "community events space", "walking paths", "small playground"],
      },
      {
        name: "Coffee Lake Park",
        amenities: ["walking trails", "wetland views", "benches", "off-leash dog area"],
      },
    ],
    restaurants: [
      {
        name: "Bugatti's Ristorante",
        cuisine: "Italian",
        vibe: "Long-running Italian on Old Wilsonville Road — white tablecloths, good pasta, a local institution",
      },
      {
        name: "Opus Creek Brewing",
        cuisine: "American",
        vibe: "Wilsonville's craft brewery — brick interior, solid pub food, neighborhood regulars on weekday evenings",
      },
      {
        name: "Thoa's Restaurant",
        cuisine: "Thai/Vietnamese",
        vibe: "Family-owned spot on Town Center Loop — reliable pho and pad thai, good lunch option",
      },
    ],
    coffee: [
      {
        name: "Beanware Coffee",
        vibe: "Local Wilsonville coffee shop in Town Center — actual espresso, laptop-friendly tables",
      },
      {
        name: "Starbucks (Wilsonville Town Center)",
        vibe: "Predictable but well-placed near the WES station — useful for catching the 7:14 train",
      },
    ],
    bars: [
      {
        name: "Opus Creek Brewing",
        vibe: "The default answer for a beer in Wilsonville — house-brewed, no pretense, good patio when the weather cooperates",
      },
      {
        name: "McMenamins Old Church & Pub",
        vibe: "McMenamins presence in a renovated space — live music occasionally, house beer, family-friendly early and bar-focused late",
      },
    ],
    medianHomePrice: 580000,
    priceRange: { low: 400000, high: 1100000 },
    commuteToDowntown: "55–70 min via WES Commuter Rail + MAX transfer at Beaverton; 35–45 min by car on I-5 in light traffic (longer in peak hours)",
    faqs: [
      {
        q: "Does the WES Commuter Rail actually make Wilsonville practical for a Portland commute?",
        a: "For the right schedule, yes. WES runs peak-direction trains — southbound in the evening, northbound in the morning — with transfers to MAX at Beaverton TC. Portland City Center to Wilsonville is 55–70 minutes. It's not fast, but it's predictable and you're not driving I-5. Off-peak service is limited, so it works best for traditional 9-to-5 schedules.",
      },
      {
        q: "What is Villebois and is it a good place to buy?",
        a: "Villebois is a 1,500-acre master-planned development on Wilsonville's west side, built out starting in 2005. It mixes attached townhomes, cottages, and detached single-family homes with pocket parks and a walkable town center. HOA fees apply. It's newer construction with good walkability within the development, and it tends to appeal to buyers who want a low-maintenance lifestyle with yard space.",
      },
      {
        q: "How are the schools in Wilsonville?",
        a: "West Linn-Wilsonville School District is one of the best-regarded districts in the Portland metro. Wilsonville High School is the primary high school and consistently performs well on state assessments. It's a genuine draw — comparable to Sherwood SD in reputation.",
      },
      {
        q: "What's the difference between Wilsonville and Charbonneau?",
        a: "Charbonneau is an age-restricted (55+) golf course community on the south end of Wilsonville with its own HOA structure, private streets, and separate community amenities. It operates largely independently from the rest of Wilsonville. If you're not 55+, it's a different product entirely.",
      },
    ],
    testimonials: [
      {
        quote: "I take the WES train to Beaverton every morning and my spouse works at Mentor Graphics five minutes away. Wilsonville made sense financially and logistically. Bri helped us close on a 3-bed in Villebois for $547k — we were surprised we could make it work.",
        author: "Kevin and Maya S.",
        context: "Purchased in Wilsonville, 2023",
      },
      {
        quote: "We had a $560k budget and wanted West Linn-Wilsonville schools. Everything in West Linn was out of range. Bri walked us through a Wilsonville option with a VA loan — no down payment, closed in 32 days.",
        author: "James H., U.S. Navy veteran",
        context: "VA purchase in Wilsonville, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "va", "jumbo", "heloc"],
    adjacentNeighborhoods: ["tualatin", "sherwood", "tigard"],
    seo: {
      title: "Buying a Home in Wilsonville, OR | The Lindley Team",
      description:
        "Wilsonville, Oregon home prices, WES commuter rail access, West Linn-Wilsonville schools, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "forest-grove",
    name: "Forest Grove",
    city: "Forest Grove",
    state: "OR",
    description: [
      "Pacific University has been on Pacific Avenue in Forest Grove since 1849, which makes it one of the oldest universities west of the Rockies. The campus sits near the downtown core and employs a few hundred people in teaching, administration, and healthcare — Pacific has a well-regarded optometry school and a physical therapy program. Main Street has a mix of independent restaurants, an old-school hardware store, a small theater, and a few antique shops. Forest Grove is the seat of what was once Oregon's hop-growing industry; the surrounding farmland still produces nursery stock and some grain. Wine country is 15–20 minutes south on Hwy 47 toward Gaston — the Tualatin Valley AVA has 40-plus wineries within reasonable driving distance.",
      "Housing affordability is Forest Grove's main argument for buyers. The median sits around $420k, which puts a 3- or 4-bedroom house within reach for first-time buyers who've been priced out of Hillsboro and Beaverton. The stock is older — lots of 1960s and 1970s ranches, some Craftsman-era houses in the historic neighborhoods near downtown — which means buyers should budget for updates. Forest Grove School District is adequate; it's not a district families move from Portland specifically to access, but it's functional and improving. The city has a fairly large Latinx community, particularly concentrated near the downtown corridor, which gives the local restaurant scene more texture than you'd expect for a city this size.",
      "The commute is the honest problem. Forest Grove is 25 miles west of Portland, and getting there from downtown means Hwy 26 to Hwy 8 — two-lane highway much of the way, no freeway bypass. In traffic that combination runs 50–70 minutes each direction. There is TriMet bus service (Line 57) to Hillsboro and MAX, but the full trip to Portland takes 75–90 minutes minimum. Remote or hybrid workers do well here. Daily commuters to Portland typically reassess within a year. The payoff is that the dollar goes further than anywhere else in Washington County, and you're close to outdoor recreation — Hagg Lake is 15 minutes south, the Coast Range is accessible on weekends.",
    ],
    personality: "Washington County's most affordable city, anchored by a university, 25 miles from Portland",
    mapEmbedSrc: "https://maps.google.com/maps?q=Forest+Grove+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Forest+Grove+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 48,
    bikeScore: 53,
    transitScore: 27,
    schoolDistrict: "Forest Grove School District 15",
    schools: [
      { name: "Fern Hill Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Harvey Clarke Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Neil Armstrong Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Forest Grove High School", type: "high", grades: "9–12", rating: 6 },
      { name: "Pacific University Early Learning Community", type: "private", grades: "PK–K", rating: 7 },
    ],
    parks: [
      {
        name: "Rogers Park",
        amenities: ["sports fields", "playground", "picnic shelters", "splash pad", "restrooms"],
      },
      {
        name: "Fernhill Wetlands",
        amenities: ["walking trails", "bird watching", "wetland boardwalks", "interpretive signage"],
      },
      {
        name: "Henry Hagg Lake (Scoggins Valley Park)",
        amenities: ["swimming beach", "boat launch", "fishing", "cycling loop", "camping", "picnic areas"],
      },
    ],
    restaurants: [
      {
        name: "Maggie's Buns",
        cuisine: "Cafe/Diner",
        vibe: "Beloved Forest Grove breakfast spot on Pacific Avenue — lines on weekend mornings, large portions, cash-friendly",
      },
      {
        name: "Taqueria El Cabrito",
        cuisine: "Mexican",
        vibe: "Longtime taqueria downtown — no-frills, authentic, one of the better cheap meals in Washington County",
      },
      {
        name: "Boas Tasting Room",
        cuisine: "Wine bar",
        vibe: "Small tasting room in the downtown core — local Tualatin Valley AVA wines, knowledgeable staff, weekend afternoons",
      },
    ],
    coffee: [
      {
        name: "Coffee Mill",
        vibe: "Pacific University-adjacent coffee shop — student-heavy during the week, relaxed on weekends",
      },
      {
        name: "Human Bean Forest Grove",
        vibe: "Drive-through on the commercial strip — quick, consistent, part of the morning routine for commuters heading east on Hwy 8",
      },
    ],
    bars: [
      {
        name: "Bier Stein Forest Grove",
        vibe: "Craft beer tap room with rotating Pacific Northwest selections — laid-back, wood interior, good for a weeknight beer",
      },
      {
        name: "McMenamins Grand Lodge",
        vibe: "Renovated Masonic lodge on Pac Ave with multiple bars, a soaking pool, gardens, and hotel rooms — biggest nightlife anchor in Forest Grove",
      },
    ],
    medianHomePrice: 420000,
    priceRange: { low: 295000, high: 700000 },
    commuteToDowntown: "50–70 min by car via Hwy 8 to Hwy 26 (longer in peak traffic); 75–90 min by TriMet Line 57 to Hillsboro MAX station to downtown",
    faqs: [
      {
        q: "Why is Forest Grove so much cheaper than the rest of Washington County?",
        a: "Distance. It's 25 miles from Portland — significantly farther west than Hillsboro or Beaverton — and there's no freeway connection, just Hwy 8 and Hwy 26. That commute friction depresses prices relative to comparable-sized cities closer in. Buyers get substantially more house and lot for their dollar here than anywhere else in the county.",
      },
      {
        q: "What are the schools like in Forest Grove?",
        a: "Forest Grove School District is average-to-adequate by Oregon standards — not a primary reason families move here, but not a reason to rule it out either. Forest Grove High has career technical education programs and some AP courses. Families who prioritize top-tier public schools tend to look at Sherwood or West Linn-Wilsonville instead.",
      },
      {
        q: "Is Forest Grove a good place for remote workers?",
        a: "Yes, probably the best fit in Washington County for fully remote workers. The price advantage is significant, the downtown is walkable enough for daily errands, and Hagg Lake and the wine country make weekends worthwhile. The commute penalty is real but irrelevant if you're not commuting.",
      },
      {
        q: "What's near Forest Grove for outdoor recreation?",
        a: "Henry Hagg Lake (Scoggins Valley Park) is 15 minutes south — swimming, fishing, a paved bike loop, and boat rentals. The Coast Range is 30–40 minutes west. Tualatin Valley wine country starts about 15 minutes south on Hwy 47. It's a practical location for people who use weekends actively.",
      },
    ],
    testimonials: [
      {
        quote: "We kept getting outbid in Hillsboro. Bri suggested we look at Forest Grove — same commute distance for my wife's job in Aloha, $80k less for the same size house. We bought a 1970s ranch on a big lot for $389k. No regrets.",
        author: "Aaron and Lidia V.",
        context: "Purchased in Forest Grove, 2023",
      },
      {
        quote: "I work fully remote and wanted a yard and a mortgage under $2,000 a month. Forest Grove was the only place in Washington County where that was possible with a conventional loan. Bri ran the numbers on an FHA option too — we ended up going conventional with 10% down.",
        author: "Priya N.",
        context: "First-time purchase in Forest Grove, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "cash-out", "investment"],
    adjacentNeighborhoods: ["hillsboro", "cornelius"],
    seo: {
      title: "Buying a Home in Forest Grove, OR | The Lindley Team",
      description:
        "Forest Grove, Oregon home prices, school district info, commute realities, and what buyers need to know. Bri Lindley, NMLS #1367416, Mortgage Express.",
    },
  },

  {
    slug: "cornelius",
    name: "Cornelius",
    city: "Cornelius",
    state: "OR",
    description: [
      "Cornelius is a city of about 13,000 people sandwiched between Hillsboro and Forest Grove on Tualatin Valley Highway. Cornelius Pass Road runs north-south through the area and has been a local landmark since well before the city existed — the Cornelius Pass Roadhouse, a McMenamins property in a historic farmhouse at the north end of the road in Hillsboro, takes its name from the same route. The city's commercial core is thin: a strip of services along Adair Street and TV Hwy, a Bi-Mart, some auto-repair shops, and a scattering of small restaurants. Most residents drive to Hillsboro's Tanasbourne district or to Forest Grove for larger grocery runs and retail.",
      "The housing stock dates mostly to the 1960s through 1990s — single-family ranches, smaller bungalows, and some manufactured housing. Cornelius has a substantial and longtime Latinx community, reflecting its agricultural history as a hub for farmworkers in the Tualatin Valley. That history shows in the restaurant options along TV Hwy: there are several small taquerias and Mexican grocery stores that are among the better cheap-food options in Washington County. Hillsboro School District serves most of Cornelius, which means students feed into Liberty High School and Hillsboro's network of elementary and middle schools — a better outcome than the city's small commercial base might suggest. Prices here are among the lowest in Washington County — median is around $400k.",
      "Cornelius is affordable specifically because it doesn't have much. There's no downtown with independent businesses the way Forest Grove does, no light rail, and no major employer within city limits. TriMet Line 57 runs east to Hillsboro MAX, making a westside commute workable, but getting to Portland downtown takes 70–80 minutes transit or 35–45 minutes by car. The city is improving — sidewalks and parks have been upgraded in recent years — but it remains a place where buyers trade proximity to amenities for a lower entry price. For buyers who work in Hillsboro's tech corridor (Intel, Nike, Epson) or in Forest Grove, the location is genuinely practical.",
    ],
    personality: "Washington County's most affordable city for single-family houses, ten minutes from Hillsboro's job corridor",
    mapEmbedSrc: "https://maps.google.com/maps?q=Cornelius+OR&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Cornelius+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 38,
    bikeScore: 42,
    transitScore: 28,
    schoolDistrict: "Hillsboro School District 1J",
    schools: [
      { name: "Echo Shaw Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "J.W. Poynter Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Liberty High School", type: "high", grades: "9–12", rating: 6 },
    ],
    parks: [
      {
        name: "Shute Park (Hillsboro, adjacent)",
        amenities: ["aquatic center", "sports fields", "walking paths", "library adjacent"],
      },
      {
        name: "Cornelius City Park",
        amenities: ["playground", "picnic tables", "open lawn", "restrooms"],
      },
      {
        name: "Rood Bridge Park (Hillsboro, nearby)",
        amenities: ["Tualatin River access", "walking trails", "picnic shelters", "rose garden"],
      },
    ],
    restaurants: [
      {
        name: "Taqueria Mi Tierra",
        cuisine: "Mexican",
        vibe: "Family-run taqueria on TV Hwy — tortas, carnitas, and birria that hold up to anything in the metro area",
      },
      {
        name: "Los Dos Amigos",
        cuisine: "Mexican",
        vibe: "Casual Mexican restaurant near the Adair Street corridor — sit-down, full menu, good for families",
      },
      {
        name: "Shari's of Hillsboro (nearby)",
        cuisine: "American Diner",
        vibe: "A few minutes east on TV Hwy — 24-hour diner option when Cornelius's thin commercial strip comes up short",
      },
    ],
    coffee: [
      {
        name: "Human Bean (Hillsboro, 10 min east)",
        vibe: "Cornelius doesn't have its own independent coffee shops — the Human Bean on TV Hwy in Hillsboro is the practical answer",
      },
      {
        name: "Dutch Bros (Hillsboro, TV Hwy)",
        vibe: "Five-minute drive east — the standard west-side morning stop for many Cornelius commuters heading toward Hillsboro",
      },
    ],
    bars: [
      {
        name: "Cornelius Pass Roadhouse (McMenamins, Hillsboro)",
        vibe: "Technically in Hillsboro but the most identifiable local institution named after this area — historic farmhouse, outdoor grounds, McMenamins beer and spirits",
      },
      {
        name: "TV Hwy Tavern",
        vibe: "Straightforward neighborhood tavern on Tualatin Valley Highway — pool table, cold beer, no frills",
      },
    ],
    medianHomePrice: 400000,
    priceRange: { low: 290000, high: 600000 },
    commuteToDowntown: "35–45 min by car to downtown Portland via Hwy 26; 70–80 min by TriMet Line 57 to Hillsboro MAX then Blue Line to downtown; 10–15 min to Hillsboro tech corridor",
    faqs: [
      {
        q: "Why is Cornelius cheaper than Hillsboro when they're right next to each other?",
        a: "Cornelius has a smaller commercial base, fewer amenities within city limits, and less infrastructure investment than Hillsboro. The housing stock is older and the city has historically had less political and developer attention. That's changing incrementally, but the price gap remains meaningful — typically $80k–$120k lower for comparable square footage.",
      },
      {
        q: "What schools do Cornelius kids attend?",
        a: "Hillsboro School District 1J serves Cornelius, which is a meaningful benefit relative to price. Echo Shaw Elementary and J.W. Poynter Middle School are the main feeders, with Liberty High School as the high school. The district is larger and better-resourced than Forest Grove's, and Liberty has stronger programs than its test scores alone suggest.",
      },
      {
        q: "Is Cornelius a practical base for Intel or Nike employees?",
        a: "Yes. Intel's Ronler Acres campus in Hillsboro is 10–15 minutes east. Nike's Beaverton campus is 20–25 minutes. Both are significantly more manageable than commuting from the east side. Cornelius offers the lowest entry price in western Washington County for workers who don't need to be in Portland proper.",
      },
      {
        q: "What are the realistic downsides of buying in Cornelius?",
        a: "Limited walkability and almost no commercial amenities within city limits — you'll drive to Hillsboro or Forest Grove for most errands. The housing stock is older and some properties need meaningful capital investment. School ratings are below the county average. It's the trade you make to access Washington County at a price closer to $400k than $600k.",
      },
    ],
    testimonials: [
      {
        quote: "We work at Intel and couldn't afford anything close to the campuses. Bri showed us that a 3-bedroom in Cornelius at $385k made more sense than renting in Hillsboro indefinitely. We closed with an FHA loan and 3.5% down.",
        author: "Emmanuel and Rosa T.",
        context: "First-time purchase in Cornelius, 2023",
      },
      {
        quote: "I was honest with Bri that I had a $420k ceiling and good credit but not a huge down payment. She found us a house in Cornelius with a big backyard for $395k. Our mortgage is less than we were paying in rent.",
        author: "Sarah K.",
        context: "Purchased in Cornelius, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "investment"],
    adjacentNeighborhoods: ["hillsboro", "forest-grove"],
    seo: {
      title: "Buying a Home in Cornelius, OR | The Lindley Team",
      description:
        "Cornelius, Oregon home prices, Hillsboro school district, commute times, and what buyers need to know. Bri Lindley, NMLS #1367416, Mortgage Express.",
    },
  },
];
