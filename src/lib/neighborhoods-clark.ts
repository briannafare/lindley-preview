import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsClark: NeighborhoodData[] = [
  {
    slug: "vancouver-wa",
    name: "Vancouver",
    city: "Vancouver",
    state: "WA",
    description: [
      "Officers Row on East Evergreen Boulevard is fourteen Victorian and Colonial Revival homes built for the U.S. Army in the 1880s, running alongside what was once Fort Vancouver — a Hudson's Bay Company trading post before Oregon was even a state. The National Historic Site sits immediately adjacent. It's a real thing, not a reconstructed tourist attraction, and it's two miles from the I-5 bridge. The Waterfront Vancouver development that opened in 2018 added restaurants and a walking path along the Columbia, and the area around Esther Short Park has enough foot traffic now to feel like a downtown rather than a city center that emptied out twenty years ago.",
      "The housing draw across the Columbia is, bluntly, Washington's lack of a state income tax. Oregon's top marginal rate is 9.9%. On a $150,000 household income, that math can translate to $10,000–$13,000 a year in additional take-home pay after the move — enough to meaningfully affect how much mortgage a buyer can carry. The Clark County School District covers most of Vancouver proper and is a large district, solid across the middle with strong programs at Hudson's Bay High. The Uptown neighborhood between McLoughlin and 33rd has older Craftsman housing and some of the most competitive inventory in the city.",
      "The I-5 bridge between Vancouver and Portland was built in 1917. The I-205 bridge, ten miles east, is the alternative when I-5 backs up, which is every weekday afternoon. The Columbia River Crossing — a replacement bridge with light rail — has been proposed, studied, and litigated since the mid-2000s without a shovel in the ground. Commute to downtown Portland runs 25–35 minutes on a good day and 50–70 in afternoon rush hour. That is not a temporary construction problem. It is the daily reality of living in Vancouver.",
    ],
    personality: "Oregon's commuter city that happens to be in Washington",
    mapEmbedSrc: "https://maps.google.com/maps?q=Vancouver+WA&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Vancouver+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 42,
    bikeScore: 55,
    transitScore: 38,
    schoolDistrict: "Vancouver Public Schools",
    schools: [
      { name: "Lieser Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Discovery Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Hudson's Bay High School", type: "high", grades: "9–12", rating: 6 },
      { name: "Prairie High School", type: "high", grades: "9–12", rating: 7 },
      { name: "Vancouver School of Arts and Academics", type: "charter", grades: "6–12", rating: 8 },
    ],
    parks: [
      {
        name: "Esther Short Park",
        amenities: ["splash pad", "playground", "farmers market", "event space", "rose garden"],
      },
      {
        name: "Fort Vancouver National Historic Site",
        amenities: ["historic tours", "walking paths", "museum", "reconstructed fort"],
      },
      {
        name: "Vancouver Lake Regional Park",
        amenities: ["swimming beach", "boat launch", "wildlife viewing", "trails"],
      },
      {
        name: "Waterfront Park",
        amenities: ["Columbia River views", "paved trail", "public art", "fishing pier"],
      },
    ],
    restaurants: [
      {
        name: "Twigs Bistro and Martini Bar",
        cuisine: "American",
        vibe: "Downtown Vancouver date night anchor — better than it sounds, reliable for a weeknight out",
      },
      {
        name: "The Grant House",
        cuisine: "American",
        vibe: "Inside the Officers Row historic district, lunch and brunch in a 19th-century Army officer's home",
      },
      {
        name: "Who Song and Larry's",
        cuisine: "Mexican",
        vibe: "On the waterfront with Columbia River views, margaritas, and enough guac to make the bridge traffic worth it",
      },
      {
        name: "WildFin American Grill",
        cuisine: "Seafood",
        vibe: "Waterfront location, happy hour crowd, the kind of place where a table with a river view is actually achievable",
      },
    ],
    coffee: [
      { name: "Relevant Coffee", vibe: "Third-wave downtown Vancouver, single-origins and pour-overs, regulars who work downtown" },
      { name: "Compass Coffee", vibe: "Waterfront-adjacent, quick stop before crossing the bridge, busy on weekday mornings" },
      { name: "Hidden River Roasters", vibe: "Local roaster with a cafe, more relaxed than downtown spots, good for a longer sit" },
    ],
    bars: [
      { name: "Main Event", vibe: "Downtown dive that has outlasted several waves of redevelopment, no-pretense crowd" },
      { name: "Loowit Brewing", vibe: "Local craft brewery with food, named for Mount St. Helens, good for a post-work pint" },
      { name: "At the Waterfront", vibe: "Marina bar on the Columbia, boat crowd and bridge commuters in equal measure" },
    ],
    medianHomePrice: 480000,
    priceRange: { low: 320000, high: 850000 },
    commuteToDowntown:
      "25–35 min in light traffic; 50–70 min in afternoon rush hour via I-5 or I-205. Both bridges back up daily. No light rail option exists yet.",
    faqs: [
      {
        q: "How bad is the commute from Vancouver WA to Portland?",
        a: "It depends entirely on when you drive. Northbound in the morning is generally fine — you're going against the flow. Southbound into Portland from 4–6:30 PM is the problem. The I-5 Bridge (built 1917) backs up past the Mill Plain exit regularly. I-205 is the alternative but adds 10–15 miles each way. Budget 50–70 minutes on a bad afternoon. If your job has flexible hours or remote days, this becomes much more manageable.",
      },
      {
        q: "Is there any transit from Vancouver to Portland?",
        a: "C-TRAN runs express bus routes to downtown Portland. They're faster than driving in peak traffic and reasonably reliable, but the service runs on a schedule and requires park-and-ride. There's no light rail — the Columbia River Crossing project has been proposed and studied for over 20 years without construction starting. Don't plan your commute around future light rail.",
      },
      {
        q: "How much does not paying Oregon income tax actually save?",
        a: "Oregon's top marginal income tax rate is 9.9% starting at $125,000 for joint filers. On a $150,000 household income, the difference between Oregon and Washington tax burdens is roughly $8,000–$12,000 per year, depending on deductions. That's real money — it's the equivalent of a meaningfully larger mortgage payment. Washington has no state income tax at all. Property taxes in Clark County are comparable to Multnomah County.",
      },
      {
        q: "Can I use an Oregon mortgage lender if I'm buying in Washington?",
        a: "Yes. Bri Lindley at The Lindley Team is licensed in both Oregon and Washington (NMLS #1367416). Many Portland-area buyers purchasing in Clark County prefer to work with a lender who already knows the market on both sides of the river.",
      },
      {
        q: "What are Vancouver's best neighborhoods?",
        a: "Uptown (between McLoughlin and 33rd, roughly) has older Craftsman housing and good walkability by Vancouver standards. The area near Officers Row and the National Historic Site is quieter and has larger lots. The Waterfront district is newer and skews toward condos and townhomes. Hough is a mid-century neighborhood north of downtown that draws first-time buyers.",
      },
    ],
    testimonials: [
      {
        quote: "We were renting in Northeast Portland and doing the math on whether we could afford to buy. Bri showed us that across the river in Vancouver, we could buy a three-bedroom house for what we were paying in rent — and we'd stop paying Oregon income tax. The first year alone we came out ahead by more than $14,000.",
        author: "Derek and Camille S.",
        context: "Relocated from Portland to Vancouver, purchased 2023",
      },
      {
        quote: "I was skeptical about the commute. My job is downtown Portland. It's real — some evenings it takes me an hour to get home. But I work from home two days a week, and on those days I'm sitting on a patio with a Columbia River view. I don't regret it.",
        author: "Theresa M.",
        context: "Portland commuter, bought in Uptown Vancouver, 2022",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "va", "heloc", "cash-out", "investment"],
    adjacentNeighborhoods: ["camas", "washougal", "battle-ground", "ridgefield"],
    seo: {
      title: "Buying a Home in Vancouver WA | Clark County Mortgage | The Lindley Team",
      description:
        "Vancouver WA home buying guide: prices, schools, bridge commute realities, and the income tax math. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "camas",
    name: "Camas",
    city: "Camas",
    state: "WA",
    description: [
      "Google built a major data center campus in Camas — roughly 400 acres along the Columbia. It's not the city's identity, but it's the city's largest property taxpayer and a signal that east Clark County has tech infrastructure underneath the small-town surface. The paper mill at the western edge of the city — originally Camas Paper, later Crown Zellerbach, now Nippon Paper — has been operating since 1883. On certain wind directions you know it's there. But downtown Camas has put enough distance between itself and the mill identity that first-time visitors are often surprised: the 1920s brick storefronts along NE 4th Avenue are genuinely intact, Grains of Wrath brewery fills a former hardware store, and the old Camas Hotel has been restored. This is not a city that looks like it should be this good.",
      "Camas School District is the main reason buyers stretch their budget to get here. It's consistently one of the top-rated districts in Washington state — small enough that teachers know students, large enough to offer AP tracks and strong extracurricular programs. Camas High School regularly ranks in the top five percent of Washington high schools. Buyers relocating from Portland who have kids in middle school or older specifically target Camas for the schools. The housing reflects that demand: medians run $100,000–$150,000 above Vancouver proper, and well-priced homes don't sit. Lacamas Lake Regional Park anchors the outdoor life — a 304-acre lake with swimming, kayaking, and loop trails that see serious use on summer weekends.",
      "Camas is 25 miles east of Portland via Highway 14 along the Columbia, then across the Glenn Jackson Bridge on I-205. Southbound I-205 backs up reliably every weekday afternoon — expect 45–60 minutes to downtown Portland in peak traffic. The longer route is faster exactly never. What buyers are trading for that commute is no Oregon income tax, schools that outperform most of Portland's options, and a downtown that doesn't feel like a trade-off.",
    ],
    personality: "The school district that makes people do the bridge commute math twice",
    mapEmbedSrc: "https://maps.google.com/maps?q=Camas+WA&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Camas+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 38,
    bikeScore: 44,
    transitScore: 18,
    schoolDistrict: "Camas School District",
    schools: [
      { name: "Lacamas Heights Elementary", type: "elementary", grades: "K–5", rating: 9 },
      { name: "Dorothy Fox Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Skyridge Middle School", type: "middle", grades: "6–8", rating: 8 },
      { name: "Camas Middle School", type: "middle", grades: "6–8", rating: 8 },
      { name: "Camas High School", type: "high", grades: "9–12", rating: 9 },
    ],
    parks: [
      {
        name: "Lacamas Lake Regional Park",
        amenities: ["swimming", "kayaking", "loop trails", "fishing", "picnic areas", "waterfall"],
      },
      {
        name: "Heritage Park",
        amenities: ["downtown anchor", "gazebo", "events", "splash pad"],
      },
      {
        name: "Round Lake Natural Area",
        amenities: ["quiet lake loop", "bird watching", "unpaved trails"],
      },
    ],
    restaurants: [
      {
        name: "Grains of Wrath",
        cuisine: "Brewery / American",
        vibe: "The go-to downtown Camas spot — solid food, excellent beer list, in a restored hardware store building",
      },
      {
        name: "Alma Chocolate & Cafe",
        cuisine: "Cafe",
        vibe: "Downtown dessert and light lunch, good for weekend browsing days when you're in the brick district",
      },
      {
        name: "Niche Wine Bar",
        cuisine: "Wine bar / Small plates",
        vibe: "Compact downtown wine bar, good list, the kind of place that fills up on Friday nights",
      },
      {
        name: "Cellar 55 Brewing",
        cuisine: "Brewery",
        vibe: "Family-friendly tap room east of downtown, larger space, good for groups",
      },
    ],
    coffee: [
      { name: "Caffe Piccolo", vibe: "Downtown Camas classic, espresso bar in the brick district, neighborhood regulars" },
      { name: "The Human Bean", vibe: "Drive-through chain with a Camas location, practical for the morning bridge run" },
    ],
    bars: [
      { name: "Grains of Wrath", vibe: "Doubles as the main bar — the tap list is the reason to stay after dinner" },
      { name: "Cellar 55 Brewing", vibe: "More a taproom than a bar, but that's not a complaint" },
    ],
    medianHomePrice: 620000,
    priceRange: { low: 480000, high: 1200000 },
    commuteToDowntown:
      "45–60 min to downtown Portland in afternoon peak via I-205 South. Highway 14 west to I-205 is the standard route. No transit option that makes commuting practical.",
    faqs: [
      {
        q: "Why is Camas more expensive than the rest of Clark County?",
        a: "The school district. Camas School District is one of Washington state's top-rated districts and the premium is priced in. Buyers who want those schools — and don't want to pay private school tuition — pay up for Camas addresses. The district boundaries are specific: always verify a home's address falls within Camas SD before making an offer.",
      },
      {
        q: "What's the commute from Camas to downtown Portland?",
        a: "Camas is about 25 miles from downtown Portland. The route is Highway 14 west to I-205 south across the Glenn Jackson Bridge. In morning traffic going south, 35–45 minutes is realistic. Southbound in the afternoon is the problem: 45–60 minutes is the norm, longer when there's an accident on the bridge. There's no meaningful transit option — this is a car-dependent commute.",
      },
      {
        q: "Can I smell the paper mill?",
        a: "Sometimes. The Nippon Paper mill at the western edge of Camas has operated for 140 years. Wind direction matters — homes closer to downtown Camas on the west side are more likely to notice it. Homes on the east side of the city, near Lacamas Lake, are far enough away that most residents say it's not a factor day-to-day. Tour the specific neighborhood you're considering on a day with westerly winds.",
      },
      {
        q: "Is Camas growing fast?",
        a: "Yes. New subdivisions have been going in on the north and east sides of the city for the last decade, and the population has roughly doubled since 2000. The schools are still managing capacity well, but it's worth paying attention to — Camas SD has passed bond measures for new facilities to keep pace.",
      },
      {
        q: "Can an Oregon-based lender help me buy in Camas?",
        a: "Yes. Bri Lindley at The Lindley Team holds a Washington state mortgage license (NMLS #1367416) and works with buyers across Clark County. If you're moving from Portland or working with Oregon-based agents, having a lender who knows both markets helps.",
      },
    ],
    testimonials: [
      {
        quote: "We moved from Lake Oswego specifically for the Camas school district. Our accountant ran the income tax numbers and we're saving about $11,000 a year. The commute adds 20 minutes to my day. It was not a hard decision.",
        author: "Patrick and Sarah W.",
        context: "Relocated from Lake Oswego, bought in Camas, 2023",
      },
      {
        quote: "Bri had worked with three other families from our neighborhood who had made the same move. She knew exactly what the Camas market does — move fast and don't wait for a second showing. We were under contract in four days.",
        author: "Monica R.",
        context: "Bought near Lacamas Lake, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "jumbo", "heloc", "cash-out", "investment"],
    adjacentNeighborhoods: ["vancouver-wa", "washougal", "battle-ground"],
    seo: {
      title: "Buying a Home in Camas WA | Top-Rated Schools & Clark County Mortgage | The Lindley Team",
      description:
        "Camas WA home buying guide: school district rankings, home prices at Lacamas Lake, bridge commute realities. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "washougal",
    name: "Washougal",
    city: "Washougal",
    state: "WA",
    description: [
      "Pendleton Woolen Mills has had a factory in Washougal since 1912. The wool blankets and shirts made there sell in gear shops across the country, and the factory outlet store at 2 Pendleton Way is worth the stop. It's not a museum piece — the factory still runs, you can watch the looms through the windows, and the seconds rack has real deals. Washougal sits at the point where the Columbia starts to narrow into the beginning of the Gorge, and from the right streets on the south side of town you get Columbia River views that in any other housing market would add $200,000 to the asking price. Here they don't, because Washougal is still east county before the money arrived.",
      "The housing is more affordable than Camas — medians run about $130,000 less — and buyers who want the east-county character without the Camas price tag end up here. The Washougal School District is smaller and somewhat less decorated than Camas SD, but Washougal High School has strong vocational and outdoor education programs, and the district is stable. The real draw for outdoor-oriented buyers is geography: Cape Horn — one of the Columbia Gorge's most dramatic viewpoints — is 15 minutes east on Highway 14. The National Scenic Area boundary is effectively at the city's eastern edge, which means the land east of Washougal cannot be developed. That view is not going away.",
      "Commute to Portland is the honest complication. There's no direct interstate — the route is Highway 14 west through Camas to I-205, then south across the Glenn Jackson Bridge. In morning traffic, plan 50–65 minutes to downtown Portland. In afternoon peak, 60–80 minutes is realistic on bad days. Some Washougal residents use the Bridge of the Gods at Cascade Locks (45 minutes east) to cross into Oregon and take I-84 west — it adds mileage but avoids the I-205 backup on days when the bridge is the problem. Neither option is quick. The buyers who make it work have flexible schedules, remote work flexibility, or specific jobs in the east metro area.",
    ],
    personality: "Columbia Gorge access at prices that don't yet reflect the view",
    mapEmbedSrc: "https://maps.google.com/maps?q=Washougal+WA&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Washougal+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 28,
    bikeScore: 32,
    transitScore: 12,
    schoolDistrict: "Washougal School District",
    schools: [
      { name: "Jemtegaard Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Hathaway Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Canyon Creek Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Washougal High School", type: "high", grades: "9–12", rating: 6 },
    ],
    parks: [
      {
        name: "Washougal Waterfront Park",
        amenities: ["Columbia River access", "boat launch", "paved trail", "picnic areas"],
      },
      {
        name: "Steigerwald Lake National Wildlife Refuge",
        amenities: ["hiking trails", "bird watching", "wetlands restoration", "Columbia River views"],
      },
      {
        name: "Captain William Clark Regional Park",
        amenities: ["disc golf", "water park", "sports fields", "camping"],
      },
    ],
    restaurants: [
      {
        name: "The Jealous Monk",
        cuisine: "Brewery / Pub",
        vibe: "Washougal's main brewery and gathering spot, good tap list, unpretentious crowd",
      },
      {
        name: "Mike's Bar & Grill",
        cuisine: "American",
        vibe: "Local diner-bar that has been feeding the east county for decades, breakfast all day",
      },
      {
        name: "Cape Horn Pub",
        cuisine: "Pub food",
        vibe: "Neighborhood pub named for the nearby viewpoint, good for a post-hike meal",
      },
    ],
    coffee: [
      { name: "Café Nola", vibe: "Local coffee shop downtown, relaxed morning vibe, knows the regulars by order" },
      { name: "Dutch Bros Coffee", vibe: "Drive-through on the way to the highway, the practical choice for early morning bridge runs" },
    ],
    bars: [
      { name: "The Jealous Monk", vibe: "Craft beer anchor for the city, patio open when the weather cooperates" },
      { name: "Mike's Bar & Grill", vibe: "Old-school bar that comes with the diner, cash-friendly crowd" },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 360000, high: 780000 },
    commuteToDowntown:
      "50–65 min on a good morning via Hwy 14 to I-205 south. Afternoon peak runs 60–80 minutes. Some residents route via Bridge of the Gods to I-84 west — longer mileage, sometimes faster.",
    faqs: [
      {
        q: "How far is Washougal from Portland?",
        a: "About 28 miles by road. The route is Highway 14 west through Camas to I-205 south. In morning traffic heading toward Portland, plan 50–65 minutes. The afternoon return is worse — 60–80 minutes on heavy traffic days. Some residents drive east to the Bridge of the Gods at Cascade Locks and come in on I-84 — it adds miles but can save time when I-205 is backed up from an accident.",
      },
      {
        q: "How does Washougal compare to Camas for home buyers?",
        a: "Washougal is typically $100,000–$150,000 less expensive than Camas for comparable homes. The school district is smaller and less ranked than Camas SD. The Gorge access is equivalent or better — Cape Horn is closer to Washougal than it is to Camas. Buyers who prioritize outdoor access and price over school district ratings tend to choose Washougal.",
      },
      {
        q: "Is Washougal growing?",
        a: "Yes, but slower than Ridgefield or Battle Ground. New subdivisions have been going in on the north side of the city, and the waterfront area has seen investment. It's growing from a small base — the city has about 18,000 people — so growth is visible but not overwhelming. The eastern edge is the National Scenic Area and can't be developed, which limits sprawl in that direction.",
      },
      {
        q: "What's the Cape Horn viewpoint like?",
        a: "Cape Horn is a Columbia Gorge viewpoint about 10 miles east of Washougal on Highway 14. The loop trail is 7.5 miles with 1,400 feet of elevation gain and views down the Gorge that are among the best accessible by day hike from the Portland metro area. On weekends in summer and fall it's busy. On a Tuesday morning in March you might have it to yourself.",
      },
    ],
    testimonials: [
      {
        quote: "We couldn't afford Camas and didn't need the school district — our kids are grown. Washougal gave us a Columbia River view, a garage, a backyard, and no Oregon income tax. We sold our SE Portland house and came out $180,000 ahead on the transaction alone.",
        author: "Jim and Carol B.",
        context: "Empty-nesters who relocated from SE Portland, bought in Washougal, 2023",
      },
      {
        quote: "I work remotely four days a week. One commute day into Portland I can handle. Washougal made financial sense — between the price difference and the income tax, the math was obvious. Bri walked me through the Washington-side mortgage process and it was no different than buying in Oregon.",
        author: "Nate F.",
        context: "Remote worker, purchased in Washougal, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "va", "heloc", "cash-out"],
    adjacentNeighborhoods: ["camas", "vancouver-wa"],
    seo: {
      title: "Buying a Home in Washougal WA | Columbia Gorge & Clark County Mortgage | The Lindley Team",
      description:
        "Washougal WA home buying guide: home prices, Gorge access, Pendleton Mills, and the honest commute to Portland. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "battle-ground",
    name: "Battle Ground",
    city: "Battle Ground",
    state: "WA",
    description: [
      "Battle Ground Lake State Park is four miles north of the city — a volcanic crater lake with a campground, swimming, and trails. It's one of the few crater lakes in the contiguous United States accessible by car and genuinely usable for an after-work swim. The city of Battle Ground itself sits in north Clark County with working farms on most of its edges. The Bi-Mart and the Ace Hardware and the drive-through coffee stands along SR-503 are the commercial texture here, alongside a Main Street with a few restaurants and a Saturday farmers market that draws from a wide radius. This is a city of 25,000 that feels its size accurately — not a suburb pretending to be a city, and not a town trying to become something else.",
      "The financial math that brings buyers here is straightforward. No Washington state income tax, land prices that still allow a half-acre lot at reasonable cost, and new construction subdivisions going in on all four edges of the city at prices $100,000–$200,000 below Vancouver proper. Battle Ground School District is a solid mid-tier district — Prairie High School has strong athletics and vocational programs. Buyers with young families who want a true yard, a garage that fits two cars, and room for a dog without shared walls end up here. The trade-off is that this is one of the most car-dependent addresses in Clark County — there's essentially no sidewalk grid in the newer subdivisions and the concept of walking to anything is theoretical.",
      "The commute to Portland is the realistic constraint that limits who can live in Battle Ground long-term. It's 20 miles north of Vancouver and 40 miles from downtown Portland. On a Tuesday morning with no incidents: 45 minutes. During a normal afternoon rush hour: 60–75 minutes. On a bad day with bridge backup: 90 minutes is not unusual. There's no express bus service that makes commuting practical. This is a city for buyers who work in Clark County, work remotely, or have made a deliberate decision that the trade-off is worth it for the price, the space, and the tax savings.",
    ],
    personality: "Rural adjacency, genuine land, and a commute that demands honest evaluation",
    mapEmbedSrc: "https://maps.google.com/maps?q=Battle+Ground+WA&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Battle+Ground+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 22,
    bikeScore: 28,
    transitScore: 8,
    schoolDistrict: "Battle Ground Public Schools",
    schools: [
      { name: "Tukes Valley Primary", type: "elementary", grades: "K–4", rating: 6 },
      { name: "Amboy Middle School", type: "middle", grades: "5–8", rating: 6 },
      { name: "Battle Ground High School", type: "high", grades: "9–12", rating: 6 },
      { name: "Prairie High School", type: "high", grades: "9–12", rating: 7 },
      { name: "Summit View High School", type: "charter", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Battle Ground Lake State Park",
        amenities: ["swimming", "camping", "hiking trails", "crater lake", "fishing", "picnic areas"],
      },
      {
        name: "Grace Court Park",
        amenities: ["playground", "basketball courts", "open fields"],
      },
      {
        name: "Lewisville Regional Park",
        amenities: ["East Fork Lewis River swimming", "camping", "trails", "picnic shelters", "dog-friendly"],
      },
    ],
    restaurants: [
      {
        name: "McMenamins on the Columbia",
        cuisine: "American / Brewery",
        vibe: "The most recognizable name in north county, reliable McMenamins format — good enough, never surprising",
      },
      {
        name: "Casa Ramos",
        cuisine: "Mexican",
        vibe: "Family Mexican restaurant on Main Street, weekend crowds from the surrounding rural areas",
      },
      {
        name: "Pizza Schmizza",
        cuisine: "Pizza",
        vibe: "Local pizza chain presence, practical family dinner option",
      },
      {
        name: "Knead Bakery",
        cuisine: "Bakery / Cafe",
        vibe: "Downtown Battle Ground breakfast and lunch stop, Saturday farmers market adjacent",
      },
    ],
    coffee: [
      { name: "Dutch Bros Coffee", vibe: "Drive-through on SR-503, the practical pre-commute option for early departures toward Portland" },
      { name: "Main Street Coffee", vibe: "Downtown cafe, slower pace, better for a work-from-home morning than a commuter run" },
    ],
    bars: [
      { name: "Battle Ground Pub", vibe: "Low-key neighborhood bar, sports on the TV, north county crowd" },
      { name: "Smokey's Tavern", vibe: "Old-school tavern, the kind of place that's been there through multiple rounds of city growth" },
    ],
    medianHomePrice: 460000,
    priceRange: { low: 340000, high: 750000 },
    commuteToDowntown:
      "45–75 min to downtown Portland on a normal day via I-5 south or SR-503 to I-205. 90+ minutes is possible on days with bridge incidents. No practical transit alternative.",
    faqs: [
      {
        q: "Is Battle Ground a good place to live if you work in Portland?",
        a: "Honestly, it depends on your work schedule and tolerance for a long drive. If you commute to downtown Portland five days a week during peak hours, you're looking at 60–75 minutes each direction on average — and 90+ on bad days. If you have two or more remote days per week, a flexible schedule, or a job on the north side of Portland, the math changes significantly. Many Battle Ground residents have made it work; it requires intentionality about commute days.",
      },
      {
        q: "How much land can I get in Battle Ground?",
        a: "More than anywhere else in the active Clark County market. New subdivisions offer lots from 6,000–10,000 square feet as standard. Older properties on the city edges frequently have quarter to full acres. Properties just outside city limits — in unincorporated Clark County — can have 1–5 acres at prices that are still achievable. This is the city to look at if you want room for a large garden, a shop, animals, or just a backyard that doesn't border your neighbor's deck.",
      },
      {
        q: "What are the schools like in Battle Ground?",
        a: "Battle Ground Public Schools is a mid-sized district with six elementary schools, two middle schools, and four high schools including Prairie High and Summit View. It's solid — not the ranked excellence of Camas SD, but a stable district with good vocational programs and strong athletic traditions. Prairie High has won state championships in multiple sports and has a good reputation in the region.",
      },
      {
        q: "Is Battle Ground growing too fast?",
        a: "It's growing fast — new subdivisions on the north, east, and south edges have been delivering homes at pace for the last five years. Whether 'too fast' depends on what you value. Infrastructure has been slower than development in some areas. The city has been updating its comprehensive plan to manage growth, but Battle Ground has gone from a small town to a mid-sized city in less than two decades and is still adjusting.",
      },
      {
        q: "How much does Washington's no income tax save a Battle Ground resident?",
        a: "Oregon taxes income on the source — if you work in Oregon, you owe Oregon income tax regardless of where you live. If you work in Washington or remotely for a Washington employer, living in Battle Ground means you pay no state income tax at all. On a $120,000 income, that's roughly $8,000–$10,000 per year in Oregon taxes you don't pay. Check with a tax professional on your specific employment situation.",
      },
    ],
    testimonials: [
      {
        quote: "We bought five acres outside Battle Ground for less than a 1,200-square-foot house in Beaverton would have cost us. My company went remote-first. We don't miss Portland — we visit it.",
        author: "Greg and Amanda P.",
        context: "Remote workers, purchased rural property outside Battle Ground, 2022",
      },
      {
        quote: "Three bedrooms, a shop, half an acre, and no Oregon income tax on my Washington job. I'm commuting to Ridgefield, not Portland. The math was obvious. Bri helped us close in 28 days.",
        author: "Kevin T.",
        context: "Bought in Battle Ground, works in Clark County, 2023",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "va", "heloc", "investment", "cash-out"],
    adjacentNeighborhoods: ["vancouver-wa", "ridgefield"],
    seo: {
      title: "Buying a Home in Battle Ground WA | Land & Affordability in Clark County | The Lindley Team",
      description:
        "Battle Ground WA home buying guide: land, prices, schools, and the honest 45–75 minute Portland commute. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "ridgefield",
    name: "Ridgefield",
    city: "Ridgefield",
    state: "WA",
    description: [
      "The Ridgefield National Wildlife Refuge covers more than 5,000 acres of Columbia River floodplain wetlands at the edge of town. During fall migration, the Birding Loop trail puts you within 50 yards of sandhill cranes, tundra swans, and northern pintails in numbers that bird people come from across the region to see. The refuge is free, the parking lot fills early on October mornings, and it's the single clearest reason Ridgefield is a different kind of town than its size suggests. The city itself has about 12,000 people, a Main Street that's still forming its identity, and new construction on virtually every available parcel.",
      "Ridgefield has been one of Washington's fastest-growing cities by percentage for the better part of a decade — growing from 4,700 people in 2010 to over 12,000 today. The growth is visible in real time: crane-set roof trusses on new subdivisions, freshly paved cul-de-sacs with no houses yet, model homes with flags. The Ridgefield School District is small — Ridgefield High School has under 1,000 students — and consistently rated well. Teachers know students, class sizes are manageable, and the district has passed bond measures to build schools ahead of the enrollment curve. The new construction means buyers can often get warranties, energy-efficient construction, and layouts designed for how people actually live now.",
      "The I-5 commute from Ridgefield to downtown Portland is 35–45 minutes on a good morning and 55–70 minutes southbound in afternoon peak. Ridgefield is about 20 miles north of the I-5 bridge — close enough that the commute is challenging but manageable for people who've already absorbed what the Vancouver commute looks like. The no-income-tax calculation still applies, the schools outperform most of what's available for the price on the Oregon side, and the wildlife refuge means you can take a genuine half-day off within five minutes of your front door. The trade-off is that the city is still being built — if you need a long-established restaurant scene or a walkable downtown, Ridgefield is not that yet.",
    ],
    personality: "Washington's fastest-growing small city, building itself in real time next to a world-class wildlife refuge",
    mapEmbedSrc: "https://maps.google.com/maps?q=Ridgefield+WA&output=embed&z=13",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Ridgefield+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 18,
    bikeScore: 24,
    transitScore: 10,
    schoolDistrict: "Ridgefield School District",
    schools: [
      { name: "South Ridge Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Union Ridge Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "View Ridge Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Ridgefield High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Ridgefield National Wildlife Refuge",
        amenities: ["Birding Loop trail", "sandhill crane viewing", "waterfowl migration", "fishing", "auto tour route"],
      },
      {
        name: "Davis Park",
        amenities: ["playground", "picnic shelters", "sports fields", "walking path"],
      },
      {
        name: "Abrams Park",
        amenities: ["disc golf", "open field", "neighborhood access"],
      },
    ],
    restaurants: [
      {
        name: "Captain's Table",
        cuisine: "American",
        vibe: "Family-friendly Ridgefield staple, the kind of place that fills up after high school games",
      },
      {
        name: "Hazel Dell Thai Restaurant",
        cuisine: "Thai",
        vibe: "Short drive south toward Vancouver, consistent and reliable for when Ridgefield's limited options run thin",
      },
      {
        name: "Pioneer Pizza",
        cuisine: "Pizza",
        vibe: "Local pizza in a city that doesn't yet have a full restaurant district — practical and liked by the regulars",
      },
    ],
    coffee: [
      { name: "Dutch Bros Coffee", vibe: "Drive-through on Pioneer Street, the commuter morning anchor before heading to I-5" },
      { name: "Ridgefield Coffee Company", vibe: "Small local cafe, relaxed atmosphere, better suited to work-from-home mornings than commute days" },
    ],
    bars: [
      { name: "Ridgefield Pub", vibe: "Neighborhood bar with a small-town feel — limited options, loyal regulars, unpretentious" },
    ],
    medianHomePrice: 520000,
    priceRange: { low: 410000, high: 820000 },
    commuteToDowntown:
      "35–45 min to downtown Portland on a good morning via I-5 south. Afternoon peak runs 55–70 minutes. No transit option for Portland commuters.",
    faqs: [
      {
        q: "What's the commute from Ridgefield to downtown Portland?",
        a: "Ridgefield sits about 20 miles north of the I-5 Columbia River Bridge. On a typical weekday morning heading south, plan 35–45 minutes to downtown Portland. Afternoon southbound is not the problem — it's northbound, returning to Ridgefield, when I-5 backs up from the bridge. Expect 55–70 minutes on a normal afternoon, longer when there's an incident. If your workplace allows flexibility on start time, leaving Portland by 3:15 or after 6:30 PM makes the drive significantly shorter.",
      },
      {
        q: "Is Ridgefield school district as good as Camas?",
        a: "Ridgefield SD is well-regarded and rated higher than most of what's available in the Portland metro area at comparable price points. Camas School District is consistently ranked among Washington's top five and carries a well-earned reputation. Ridgefield is strong — Ridgefield High School graduation rates and test scores are above state averages — but buyers specifically optimizing for school district rankings typically choose Camas if they can afford the premium.",
      },
      {
        q: "Is all the housing in Ridgefield new construction?",
        a: "Mostly, but not entirely. The downtown core has older housing from the 1950s–1980s. The neighborhoods built since 2010 — which is most of the housing stock by count — are new or near-new construction. If you want a house with a mature yard and established trees, look at the older streets near downtown. If you want warranty coverage and energy-efficient construction, the new subdivisions deliver that.",
      },
      {
        q: "What's the wildlife refuge actually like day-to-day?",
        a: "The Ridgefield National Wildlife Refuge is one of the few places in the Pacific Northwest where you can reliably see sandhill cranes in large numbers during fall migration — hundreds to a few thousand birds at peak. The Birding Loop is 4.2 miles and accessible to anyone who can walk a flat trail. Spring and winter bring tundra swans, northern pintails, and other waterfowl in numbers. It's a serious birding destination, not a park with a duck pond.",
      },
      {
        q: "Will Ridgefield's restaurant and shopping options improve?",
        a: "Yes, with the growth rate it has. Commercial development typically lags residential by 5–10 years in fast-growing cities. Ridgefield in 2026 has the amenities of a city half its current size because the growth happened so quickly. The commercial corridor on Pioneer Street is building out. Short-term, Vancouver is 15 minutes south and has full retail options.",
      },
    ],
    testimonials: [
      {
        quote: "We bought new construction in Ridgefield in 2021. Our mortgage is $2,100 a month. Our friends who stayed in Portland are paying $3,400 for smaller houses with older systems. We're also not paying Oregon income tax on my wife's remote job. The math is not close.",
        author: "Brandon and Lisa K.",
        context: "Relocated from NE Portland, new construction purchase in Ridgefield, 2021",
      },
      {
        quote: "I was skeptical about Ridgefield — I'd never heard of it. Bri suggested it because the school district matched what we wanted and the prices were $80,000 below comparable homes in Camas. We drove out on a Saturday, walked the wildlife refuge, and wrote an offer the following week.",
        author: "Stephanie O.",
        context: "Moved from Vancouver WA to Ridgefield for the school district, purchased 2023",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha", "va", "heloc", "investment", "new-construction"],
    adjacentNeighborhoods: ["vancouver-wa", "battle-ground"],
    seo: {
      title: "Buying a Home in Ridgefield WA | Wildlife Refuge & Fast-Growing Clark County | The Lindley Team",
      description:
        "Ridgefield WA home buying guide: new construction, school district ratings, wildlife refuge access, and the I-5 commute to Portland. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },
];
