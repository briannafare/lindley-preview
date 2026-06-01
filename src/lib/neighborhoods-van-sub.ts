import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsVanSub: NeighborhoodData[] = [
  {
    slug: "salmon-creek",
    name: "Salmon Creek",
    city: "Vancouver",
    state: "WA",
    description: [
      "Salmon Creek is North Vancouver's most recognizable address — the name belongs to both the community and the actual creek that winds through it, flanked by the Salmon Creek Greenway Trail, a paved multi-use path running 3.1 miles along the water through wetlands and forest. Legacy Salmon Creek Medical Center (2211 NE 139th St) anchors the area as a major employer and trauma resource for all of Clark County, opened in 2005 and offering full inpatient and emergency services. The housing stock runs from 1990s ranches and colonials through 2010s planned subdivisions, mostly on standard suburban lots with some larger parcels toward the creek corridor.",
      "Schools here are among the strongest in Vancouver Public Schools. Skyview High School, opened in 1997, carries a B+ Niche grade and a 7/10 GreatSchools rating, with a 95% graduation rate and a competitive SMT magnet program. Salmon Creek Elementary consistently ranks in the top 20% of Washington elementary schools. The pull toward North Vancouver from Portland-area families is partly about schools and partly about the Washington state income tax situation — there is none, and families doing the long-term math often land here.",
      "The trade-off is the I-5 bridge. Commuting south to Portland means joining the 130,000+ vehicles a day that cross the Interstate Bridge, which dates to 1917 northbound and 1958 southbound, lifts for river traffic, and backs up badly during morning and evening peaks. Thirty-five to forty-five minutes to Portland in decent conditions becomes over an hour when traffic spreads. That is the real cost of Salmon Creek's otherwise excellent positioning, and buyers should factor it in honestly before deciding the no-income-tax calculation works in their favor.",
    ],
    personality: "Clark County's most sought-after zip code — schools, hospitals, and greenway trails, with an I-5 commute cost",
    mapEmbedSrc: "https://maps.google.com/maps?q=Salmon+Creek+Vancouver+WA&output=embed&z=14",
    directionsSrc: "https://maps.google.com/maps?saddr=Salmon+Creek+Vancouver+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 32,
    bikeScore: 42,
    transitScore: 28,
    schoolDistrict: "Vancouver Public Schools",
    schools: [
      { name: "Salmon Creek Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Jason Lee Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Skyview High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Salmon Creek Regional Park / Klineline Pond",
        amenities: ["swim beach", "splash pad", "fishing platforms", "picnic shelters", "35 acres developed parkland", "368 acres undeveloped"],
      },
      {
        name: "Salmon Creek Greenway Trail",
        amenities: ["3.1-mile paved trail", "restored wetland habitat", "native salmon runs", "bird watching", "cycling"],
      },
    ],
    restaurants: [
      { name: "Kitchen Table Cafe – Salmon Creek", cuisine: "American", vibe: "Breakfast and lunch focused — pancakes, omelets, burgers; a reliable neighborhood anchor at NE 134th St" },
      { name: "El Tapatio Salmon Creek", cuisine: "Mexican", vibe: "Family Mexican restaurant, casual and consistent, popular with the surrounding residential crowd" },
      { name: "Billygan's Roadhouse", cuisine: "American", vibe: "Laid-back bar and grill, peanut shells on the floor, families and regulars, the kind of place you go after a soccer game" },
    ],
    coffee: [
      { name: "Starbucks – NE 139th & 20th", vibe: "Drive-through speed for commuters heading south on I-5; consistently busy mornings" },
      { name: "Black Rock Coffee Bar", vibe: "Regional Pacific Northwest chain, reliable espresso and drive-through window, faster than the Starbucks lines" },
    ],
    bars: [
      { name: "Hudson's Bar and Grill", vibe: "Located inside the Heathman Lodge — Northwest farm-to-table menu, local ingredients, adult crowd, far less casual than Billygan's" },
      { name: "Billygan's Roadhouse", vibe: "The neighborhood bar you actually end up at — cold beer, burgers, no pretense" },
    ],
    medianHomePrice: 540000,
    priceRange: { low: 420000, high: 850000 },
    commuteToDowntown: "35–45 min to Portland in decent traffic via I-5; 55–75 min during peak hours crossing the Interstate Bridge; no practical transit option",
    faqs: [
      {
        q: "What is the commute from Salmon Creek to Portland like?",
        a: "The I-5 Interstate Bridge is the chokepoint. In good traffic, 35–45 minutes to downtown Portland. During morning and evening rush, the bridge — which dates to 1917 and still lifts for river traffic — can turn that into 60–75 minutes. The I-205 Glenn Jackson Bridge is an alternative but adds 10–15 minutes of distance. There is no practical transit option from Salmon Creek. Buyers should test the actual commute at their real departure time before committing.",
      },
      {
        q: "Is the Washington state no-income-tax benefit real for Portland workers?",
        a: "It can be significant. Oregon's top income tax rate is among the highest in the country, and workers who live in Washington and work in Oregon owe Oregon income tax on Oregon-sourced income — but they keep Washington residency for all other tax purposes. For high earners, the annual savings can more than offset higher home prices and commute costs. Run the numbers with a tax professional using your specific income before treating this as a certain win.",
      },
      {
        q: "How are the schools in Salmon Creek?",
        a: "They are among the strongest in Vancouver Public Schools. Salmon Creek Elementary ranks in the top 20% of Washington elementary schools. Skyview High School has a B+ Niche grade, a 95% graduation rate, and a competitive Science, Math, and Technology magnet program. These ratings are meaningfully better than schools in the Hazel Dell and Orchards areas and a primary reason families specifically seek out North Vancouver.",
      },
      {
        q: "What is Legacy Salmon Creek Medical Center?",
        a: "It is a full-service, award-winning hospital opened in 2005 at 2211 NE 139th St, offering emergency, surgical, obstetrics, psychiatric, pediatric, and oncology services. It is one of Clark County's primary trauma resources and one of the area's largest employers. Having a major hospital two miles away matters for resale and peace of mind.",
      },
    ],
    testimonials: [
      {
        quote: "We had the Portland commute math wrong initially. Bri actually walked us through what our Oregon income taxes would look like if we stayed versus moved to Salmon Creek, and the numbers shifted the decision. We've been here three years and don't regret it.",
        author: "Derek and Megan S.",
        context: "Purchased in Salmon Creek, relocated from SE Portland",
      },
      {
        quote: "We specifically wanted Skyview's magnet program for our daughter. Bri helped us close on a house in the Skyview boundary with two weeks left in the school year so she could enroll for fall.",
        author: "Patricia L.",
        context: "Bought in Salmon Creek, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "jumbo", "va", "fha", "heloc", "cash-out"],
    adjacentNeighborhoods: ["felida", "hazel-dell", "battle-ground", "ridgefield", "vancouver-wa"],
    seo: {
      title: "Buying a Home in Salmon Creek, Vancouver WA | The Lindley Team",
      description:
        "Real talk on Salmon Creek real estate: home prices, schools, the I-5 commute, and what Portland-area buyers need to know. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "felida",
    name: "Felida",
    city: "Vancouver",
    state: "WA",
    description: [
      "Felida occupies the northwest corner of Vancouver — north of the Columbia River, west of I-5, and largely east of the ridge that drops toward the Lewis River lowlands. It has the most rural-feeling character of any community in the Vancouver metro while still sitting 20–25 minutes from Portland via I-5. Lots commonly run a quarter acre to a full acre, with custom homes and estate-style subdivisions scattered alongside older farmhouses. Some properties retain horse facilities or agricultural outbuildings. The Felida Village commercial node at NW 36th Ave and NW 119th St provides a small-town center without being a full shopping district.",
      "Schools draw from Vancouver Public Schools, with Felida Elementary as the standout — ranked in the top quartile of Washington elementary schools, with 58% math proficiency and 69% reading proficiency, well above state averages. Students feed to McLoughlin Middle School and Hudson's Bay High School, which is where the academic picture becomes more mixed. Buyers with older children or a multi-decade view on school quality should research the full pipeline. The Felida community has consistently high owner-occupancy and long-tenured residents.",
      "The practical trade-offs are real. There is no meaningful transit. Every errand requires a car. The Felida corridor can back up on NW 36th Ave during evening hours as traffic filters from I-5. Higher median prices reflect lot size and land, not necessarily newer construction or premium finishes. Buyers expecting Portland-level walkability or a 20-minute bridge crossing will need to recalibrate. What Felida offers instead is space, quiet, and a western-facing hillside feel that is genuinely hard to find this close to a major metro.",
    ],
    personality: "Northwest Vancouver's closest thing to acreage living — large lots, quiet roads, and a small commercial village, all within 25 minutes of Portland",
    mapEmbedSrc: "https://maps.google.com/maps?q=Felida+Vancouver+WA&output=embed&z=14",
    directionsSrc: "https://maps.google.com/maps?saddr=Felida+Vancouver+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 14,
    bikeScore: 22,
    transitScore: 10,
    schoolDistrict: "Vancouver Public Schools",
    schools: [
      { name: "Felida Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "McLoughlin Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Hudson's Bay High School", type: "high", grades: "9–12", rating: 4 },
    ],
    parks: [
      {
        name: "Felida Village Trailhead / Lake Shore Area",
        amenities: ["walking paths", "open space", "lake access points nearby"],
      },
      {
        name: "Salmon Creek Greenway (southern access)",
        amenities: ["paved trail", "wetlands", "wildlife viewing", "cycling"],
      },
    ],
    restaurants: [
      { name: "Farrar's Bistro", cuisine: "American", vibe: "Neighborhood bistro at 12514 NW 36th Ave — elevated comfort food, patio dining, handcrafted cocktails, live music on weekends; been here since 2007" },
      { name: "Mahoney's Public House", cuisine: "Pub", vibe: "Family-owned neighborhood pub at NW Lakeshore Ave — casual handhelds, solid craft beer lineup, the place locals walk to from the surrounding streets" },
    ],
    coffee: [
      { name: "Hearth Coffee", vibe: "Local shop at 3602 NW 119th St — breakfast sandwiches and burritos alongside espresso; Pacific Northwest feel, friendly baristas" },
      { name: "Deep Roots Felida Coffee House", vibe: "Pastries from Bleu Door Bakery, a range of espresso drinks, neighborhood regulars who treat it like a second living room" },
    ],
    bars: [
      { name: "Mahoney's Public House", vibe: "The after-work bar for Felida — craft taps, nothing pretentious, neighborhood crowd" },
      { name: "Farrar's Bistro", vibe: "Doubles as a bar on weekends — cocktail-forward, patio crowd, more of a date-night spot than a dive" },
    ],
    medianHomePrice: 650000,
    priceRange: { low: 500000, high: 1200000 },
    commuteToDowntown: "20–25 min to Portland via I-5 in off-peak; 45–60 min during rush hour crossing the Interstate Bridge; no transit option",
    faqs: [
      {
        q: "What makes Felida different from other North Vancouver neighborhoods?",
        a: "Lot size and feel. Most Felida properties sit on a quarter acre to a full acre, and some horse properties and larger acreage parcels still exist. The area feels semi-rural while sitting 20–25 minutes from Portland in normal traffic. You won't find that combination anywhere else in Clark County at this proximity to the metro.",
      },
      {
        q: "How is the commute from Felida to Portland?",
        a: "Felida feeds quickly onto I-5, and in good traffic the Portland commute is 20–25 minutes. The variable is the Interstate Bridge — the two spans crossing the Columbia River carry 130,000+ vehicles daily and back up badly during morning and evening peaks. Budget 45–60 minutes in those windows. The I-205 crossing at Camas is an option but adds 20–25 minutes of driving distance.",
      },
      {
        q: "Which school district serves Felida?",
        a: "Most of Felida falls within Vancouver Public Schools, with Felida Elementary as the local K–5. Felida Elementary is one of the top-performing elementary schools in the Vancouver district. The pipeline continues to McLoughlin Middle School and Hudson's Bay High School, where academic performance ratings are lower. Parcel-by-parcel boundary verification is worth doing before purchase if specific schools matter.",
      },
      {
        q: "Is Felida a good investment?",
        a: "Felida has maintained value well because land scarcity is real — you cannot build new quarter-acre lots in NW Vancouver without going further out. Buyers who hold long tend to do well. The risk is the premium attached to lot size: if you need to sell in a market where buyers are pulling back from large-lot maintenance, the pool of buyers is narrower.",
      },
    ],
    testimonials: [
      {
        quote: "We wanted land. We had been told that was impossible under $700k near Portland. Bri found us a 0.6-acre parcel in Felida with a well-maintained custom home, and we closed without drama.",
        author: "James and Carrie H.",
        context: "Purchased in Felida, jumbo loan, 2024",
      },
      {
        quote: "The no-state-income-tax conversation was useful but Bri was careful not to oversell it. She said run it by your CPA, and she was right to say that — our situation was more complicated than a simple savings number.",
        author: "Tom R.",
        context: "Relocated from Lake Oswego, purchased in Felida",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc", "cash-out", "investment"],
    adjacentNeighborhoods: ["salmon-creek", "hazel-dell", "ridgefield", "vancouver-wa"],
    seo: {
      title: "Buying a Home in Felida, Vancouver WA | The Lindley Team",
      description:
        "Real talk on Felida real estate: large lots, home prices, commute to Portland, and what buyers need to know. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "hazel-dell",
    name: "Hazel Dell",
    city: "Vancouver",
    state: "WA",
    description: [
      "Hazel Dell runs along NE Highway 99 (the old Pacific Highway) north of downtown Vancouver, a corridor that has been commercial for decades and shows it. Strip malls, chain restaurants, a Fred Meyer, a Target, and a Home Depot bracket the residential streets that branch off the main road. The housing is mostly 1950s–1980s single-family ranches and bungalows on large lots with mature trees, mixed with apartment complexes at the arterial edges. It is not a neighborhood people move to for aesthetics. They move here because it is the most affordable entry point in North Vancouver, and because I-5 access from NE Hazel Dell Ave is immediate.",
      "Vancouver Public Schools serves the area — Hazel Dell Elementary (K–5), Jason Lee Middle School, and Hudson's Bay High School. Of the three tiers, the elementary tends to be rated above average locally; Hudson's Bay High School has GreatSchools scores in the low range and academic proficiency well below state averages, though its graduation rate runs above the state average. Families with school-age children who are prioritizing academic rankings should compare Hazel Dell's pipeline to Salmon Creek or Felida before committing.",
      "Hazel Dell's genuine advantage is price and access. You can find houses in the $380k–$430k range that would cost $100k–$150k more in Salmon Creek. The Parade of Bands, held annually since 1964 on Armed Forces Day, is a legitimate community tradition that draws 20,000 spectators. Luke Jensen Sports Park is a well-maintained hub for youth sports. For buyers who want to own a house in Clark County without Washington state income tax liability and are willing to take an older home on a busy corridor, Hazel Dell closes the deal.",
    ],
    personality: "North Vancouver's most affordable entry point — older housing, highway corridor, no pretense, quick I-5 access",
    mapEmbedSrc: "https://maps.google.com/maps?q=Hazel+Dell+Vancouver+WA&output=embed&z=14",
    directionsSrc: "https://maps.google.com/maps?saddr=Hazel+Dell+Vancouver+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 52,
    bikeScore: 38,
    transitScore: 34,
    schoolDistrict: "Vancouver Public Schools",
    schools: [
      { name: "Hazel Dell Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Jason Lee Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Hudson's Bay High School", type: "high", grades: "9–12", rating: 4 },
    ],
    parks: [
      {
        name: "Hazel Dell Community Park",
        amenities: ["picnic shelters", "playground", "walking trails", "open grassy areas"],
      },
      {
        name: "Hazel Dell Ross Dog Park",
        amenities: ["off-leash area", "fenced gates", "small dog area", "8 acres", "hilly terrain"],
      },
      {
        name: "Luke Jensen Sports Park",
        amenities: ["youth sports fields", "softball diamonds", "community events hub"],
      },
    ],
    restaurants: [
      { name: "Frontier Public House", cuisine: "American", vibe: "Family-oriented spot at 4909 NE Hazel Dell Ave — handcrafted cocktails, local beers, PNW wines, full menu" },
      { name: "Margarita Factory – Hazel Dell", cuisine: "Mexican", vibe: "Locally owned, best happy hour reputation in the corridor, strong margarita selection, consistently full tables" },
      { name: "Carol's Corner Cafe", cuisine: "Diner", vibe: "Classic diner-style breakfast and lunch — the kind of regular-customer place that doesn't change much and doesn't need to" },
    ],
    coffee: [
      { name: "Dutch Bros – NE Hazel Dell Ave", vibe: "Drive-through speed, enthusiastic staff, the default quick-stop for most of the neighborhood on the way to I-5" },
      { name: "Starbucks – Fred Meyer Hazel Dell", vibe: "Inside Fred Meyer at 7720 NE Highway 99 — convenient for grocery runs, not a destination" },
    ],
    bars: [
      { name: "Frontier Public House", vibe: "Doubles as the neighborhood bar — local tap list, sports on TV, approachable prices" },
      { name: "Billy Blues Bar and Grill", vibe: "Weekly jam nights, live music, the main entertainment anchor for the area's regular crowd" },
    ],
    medianHomePrice: 400000,
    priceRange: { low: 320000, high: 550000 },
    commuteToDowntown: "30–40 min to Portland via I-5 in normal traffic; 50–70 min at peak crossings; C-TRAN bus routes available but limited for Portland commuters",
    faqs: [
      {
        q: "Is Hazel Dell safe?",
        a: "It is a working-class suburban neighborhood with typical suburban property crime levels — higher than Salmon Creek or Felida, lower than inner-city Portland. The stretch along NE Highway 99 has more commercial density and transient activity than the residential side streets. Individual blocks vary; the streets running west off NE Hazel Dell Ave toward the residential interior are meaningfully quieter than the highway frontage.",
      },
      {
        q: "Why is Hazel Dell cheaper than the rest of North Vancouver?",
        a: "Housing stock age (1950s–1980s), proximity to a commercial corridor, and school performance ratings. Homes here are functionally sound but older, and the Highway 99 corridor is busy and commercial, not residential and park-fronted. Buyers get more square footage or a bigger lot than they would in Salmon Creek at the same price.",
      },
      {
        q: "What about the I-5 and I-205 bridge situation for commuters?",
        a: "From Hazel Dell, I-5 south is the direct route to Portland. The Interstate Bridge, one of the oldest auto bridges in the state, backs up badly during morning and evening rush hours — expect 50–70 minutes in heavy traffic. I-205 at Camas is an option if your Portland destination is on the east side, but it adds 15–20 minutes of distance from Hazel Dell. Factor real commute time, not Google Maps ideal-conditions time, before buying.",
      },
      {
        q: "Are there any new homes in Hazel Dell?",
        a: "Minimal new construction — the area is largely built out. What exists is infill on previously subdivided lots. Most buyers in Hazel Dell are working with 40–70-year-old houses that need updating. Budget for deferred maintenance, particularly on plumbing, electrical panels, and roofs when looking at 1960s–1970s stock.",
      },
    ],
    testimonials: [
      {
        quote: "We were priced out of Salmon Creek and thought we'd have to rent another year. Bri found us a three-bedroom in Hazel Dell at $395k and we got it under asking. It needed work but we knew that going in.",
        author: "Kyle and Amanda F.",
        context: "First-time buyers, FHA loan, Hazel Dell 2024",
      },
      {
        quote: "Bri didn't sugarcoat the schools. She told us what the ratings were, told us to tour them ourselves, and let us make the call. We appreciated that she didn't pretend everything was equally good.",
        author: "Nadia T.",
        context: "Bought in Hazel Dell, relocated from Beaverton",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "cash-out"],
    adjacentNeighborhoods: ["salmon-creek", "felida", "vancouver-wa", "orchards"],
    seo: {
      title: "Buying a Home in Hazel Dell, Vancouver WA | The Lindley Team",
      description:
        "Real talk on Hazel Dell real estate: Clark County's most affordable North Vancouver community, home prices, schools, and commute. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "orchards",
    name: "Orchards",
    city: "Vancouver",
    state: "WA",
    description: [
      "Orchards takes its name from the commercial orchards that covered this part of East Vancouver until suburban development rolled through in the 1960s and accelerated through the 1990s. The housing stock is a legible record of that timeline — 1960s ranches on the western edges, 1970s–1980s colonials filling in the middle, newer infill developments toward the east. The area sits between NE Fourth Plain Blvd to the north and SR-500 and Highway 14 to the south, with NE Mill Plain Blvd serving as the main east-west corridor. Orchards Community Park, 33 acres with forested picnic areas and a rose garden, is one of the better neighborhood parks in East Vancouver.",
      "Evergreen School District serves the area. Orchards Elementary has struggled on standardized testing — proficiency rates well below district and state averages — and sits near the bottom of the district's elementary school rankings. The Evergreen District overall runs a mixed picture: Mountain View High School carries an A- Niche grade and a 7/10 GreatSchools rating with a 92% graduation rate, which is meaningfully better than the district's lower-performing schools. Buyers with school-age children should verify boundaries — which school specifically serves their address — rather than evaluating the district as a single unit.",
      "The price point is East Vancouver's main competitive advantage. Median pricing around $440k gets buyers into established suburban housing that would cost 20–30% more in North Vancouver. The I-205 commute to Portland runs 25–35 minutes in normal traffic, and Vancouver Mall is minutes away for daily errands. The honest trade-off: the area is car-dependent, transit is minimal, and the Highway 14 / SR-500 edges are noisier and more industrial-adjacent than the interior residential streets.",
    ],
    personality: "East Vancouver's family-practical neighborhood — older housing, fair prices, I-205 access, and a park system that punches above its weight",
    mapEmbedSrc: "https://maps.google.com/maps?q=Orchards+Vancouver+WA&output=embed&z=14",
    directionsSrc: "https://maps.google.com/maps?saddr=Orchards+Vancouver+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 38,
    bikeScore: 34,
    transitScore: 26,
    schoolDistrict: "Evergreen Public Schools",
    schools: [
      { name: "Orchards Elementary", type: "elementary", grades: "PK–5", rating: 3 },
      { name: "Shahala Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Mountain View High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Orchards Community Park",
        amenities: ["33 acres", "forested picnic areas", "walking trails", "open lawn", "rose garden", "active play areas"],
      },
      {
        name: "Orchards Highlands Neighborhood Park",
        amenities: ["heavily wooded", "8.7 acres", "trails", "natural setting"],
      },
      {
        name: "Orchards West Park",
        amenities: ["wooded neighborhood park", "near Vancouver Mall and I-205"],
      },
    ],
    restaurants: [
      { name: "Kitchen Table Cafe – Orchards", cuisine: "American", vibe: "Breakfast and lunch at 11500 NE 76th St — dependable pancakes and lunch plates, busy weekend mornings" },
      { name: "Orchards Tap", cuisine: "American", vibe: "Bar and grill at 10514 NE Fourth Plain Blvd — karaoke seven nights a week, pool tables, pinball, Taco Tuesdays; a genuine neighborhood gathering point" },
      { name: "Margarita Factory", cuisine: "Mexican", vibe: "Local Mexican on Mill Plain — handcrafted dishes and margaritas, solid happy hour, consistently popular" },
    ],
    coffee: [
      { name: "Brewed Awakenings Coffee Roasters", vibe: "Local Vancouver roaster at 6500 NE 117th Ave — drive-through and patio, roasts their own beans, early hours for commuters" },
      { name: "Dutch Bros – Fourth Plain corridor", vibe: "Multiple locations in the Fourth Plain corridor; fast drive-through, standard Pacific Northwest chain experience" },
    ],
    bars: [
      { name: "Orchards Tap", vibe: "The neighborhood bar — pool, karaoke, games, cold beer; the spot locals default to when they want a no-fuss weeknight" },
      { name: "Fourth Plain Bar & Grill", vibe: "Older-school tavern on the Fourth Plain corridor, longtime regulars, no surprises" },
    ],
    medianHomePrice: 440000,
    priceRange: { low: 340000, high: 620000 },
    commuteToDowntown: "25–35 min to Portland via I-205 in normal traffic; 40–60 min during peak bridge crossings; Vancouver Mall area C-TRAN routes available but slow for Portland commuters",
    faqs: [
      {
        q: "How does the Orchards commute to Portland work?",
        a: "Orchards connects quickly to I-205, which crosses the Glenn Jackson Bridge into Portland. In normal traffic, 25–35 minutes to downtown Portland. During morning rush hour southbound and evening northbound, the bridge backs up — plan on 40–60 minutes in peak windows. I-205 is less congested than the I-5 Interstate Bridge for most of the day, which is one of East Vancouver's practical advantages over North Vancouver.",
      },
      {
        q: "What are the schools like in Orchards?",
        a: "Mixed. Orchards Elementary has below-average proficiency scores and ranks near the bottom of the Evergreen District — this is a fact worth knowing. Shahala Middle School is middle-of-the-road. Mountain View High School is genuinely strong — A- on Niche, 7/10 GreatSchools, 92% graduation rate. If you have a high schooler or are buying long-term, the pathway improves significantly by upper grades. Verify your parcel's boundary assignments before purchase.",
      },
      {
        q: "Is Orchards growing?",
        a: "Gradually. East Vancouver has seen infill development and some newer subdivisions over the past decade. Prices have risen steadily. The area benefits from Vancouver Mall's commercial infrastructure without the congestion associated with it — the neighborhood streets themselves are largely residential and calm.",
      },
      {
        q: "How does the I-205 bridge compare to the I-5 bridge for commuters?",
        a: "The Glenn Jackson Bridge (I-205) was built in 1982 and is generally less congested than the older I-5 Interstate Bridge, which dates to 1917 northbound and backs up with bridge lifts for river traffic. For Orchards buyers whose Portland jobs are downtown or on the east side, I-205 is often the faster and less frustrating option. Still plan for rush-hour slowdowns — both bridges reach capacity during peak periods.",
      },
    ],
    testimonials: [
      {
        quote: "We got a 1980s ranch in Orchards with a big backyard for $425k when the equivalent in Salmon Creek was $550k minimum. Bri was straightforward about what each area actually offered, not what we wanted to hear.",
        author: "Marcus and Jen D.",
        context: "Purchased in Orchards, conventional loan, 2023",
      },
      {
        quote: "We asked Bri to be honest about the Orchards schools. She was — she showed us the actual rating data and then helped us think through the high school timeline. We decided Mountain View was worth the tradeoff at the lower price point.",
        author: "Damon W.",
        context: "Bought in Orchards, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "refinance", "heloc", "cash-out", "investment"],
    adjacentNeighborhoods: ["cascade-park", "hazel-dell", "vancouver-wa", "camas"],
    seo: {
      title: "Buying a Home in Orchards, Vancouver WA | The Lindley Team",
      description:
        "Real talk on Orchards real estate: home prices, schools, I-205 commute, and what East Vancouver buyers need to know. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },

  {
    slug: "cascade-park",
    name: "Cascade Park",
    city: "Vancouver",
    state: "WA",
    description: [
      "Cascade Park is East Vancouver's most established and accessible community for Portland commuters. Centered roughly at SE 164th Ave and Mill Plain Blvd, it has the infrastructure of a complete neighborhood: the Cascade Park Community Library (a well-designed 25,000-square-foot branch with a signature sloped-wood ceiling reading room), the Cascade Athletic Club, and a Mill Plain Blvd commercial strip that covers groceries, dining, and daily services without driving to the sprawl further east. The housing stock is 1970s–1990s single-family suburban on standard lots — mature trees, established landscaping, the look of a neighborhood that has been lived-in for thirty years because it has.",
      "Evergreen Public Schools serves the area, with Crestline Elementary (PK–5), Cascade Middle School (6–8), and Mountain View High School (9–12) covering the K–12 pipeline. Crestline and Cascade Middle run below district and state averages on proficiency measures. Mountain View High School is the positive outlier in the district — A- Niche grade, 7/10 GreatSchools, 92% graduation rate, above-average science performance. The arc from elementary to high school improves noticeably, which buyers with young children should factor into long-term planning.",
      "I-205 access is the neighborhood's strongest geographic asset. From Cascade Park, the Glenn Jackson Bridge crossing to Portland takes 20–30 minutes in normal conditions — better than the I-5 corridor for most of the day. The bridge still backs up during morning and evening rush, and there is no useful transit connection for Portland workers. The price premium over Orchards is modest — typically $20k–$30k median — which buyers tend to attribute to the library, the established feel, and slightly better proximity to the freeway.",
    ],
    personality: "East Vancouver's most complete neighborhood — a real library, a real commercial strip, and the best I-205 position in Clark County",
    mapEmbedSrc: "https://maps.google.com/maps?q=Cascade+Park+Vancouver+WA&output=embed&z=14",
    directionsSrc: "https://maps.google.com/maps?saddr=Cascade+Park+Vancouver+WA&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 44,
    bikeScore: 40,
    transitScore: 30,
    schoolDistrict: "Evergreen Public Schools",
    schools: [
      { name: "Crestline Elementary", type: "elementary", grades: "PK–5", rating: 4 },
      { name: "Cascade Middle School", type: "middle", grades: "6–8", rating: 4 },
      { name: "Mountain View High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Cascade Park",
        amenities: ["3.5-acre neighborhood park", "playground", "walking paths", "open lawn", "adjacent to Crestline Elementary"],
      },
      {
        name: "Bella Vista Park",
        amenities: ["5 acres", "playground", "paved walkways", "basketball court", "picnic tables", "leash-friendly"],
      },
    ],
    restaurants: [
      { name: "Little Italy's Trattoria", cuisine: "Italian", vibe: "Authentic Italian since 1995, a reliable anchor for the neighborhood — antipasti, fresh pasta, outdoor seating, happy hour" },
      { name: "Café Yumm!", cuisine: "Northwest / Bowls", vibe: "Cascade Park Plaza location — healthy bowls with local and sustainable ingredients, quick and consistent for lunch" },
      { name: "TJ's Cascade Bar & Grill", cuisine: "American", vibe: "Neighborhood bar and grill at 15000 SE Mill Plain Blvd — 19 taps, full menu, live music, karaoke; the area's social anchor" },
    ],
    coffee: [
      { name: "Larson's Bakery, Deli and Coffee Bar", vibe: "A Cascade Park institution — from-scratch Danish pastries and family recipes, sandwich counter, coffee bar; the kind of place that's been there 30 years because it earned it" },
      { name: "Dutch Bros – Mill Plain corridor", vibe: "Drive-through standard for the morning I-205 run; fast and consistent" },
    ],
    bars: [
      { name: "TJ's Cascade Bar & Grill", vibe: "Nineteen taps, pool tables, live music and karaoke on weekends; the legitimate neighborhood bar for East Vancouver" },
      { name: "Little Italy's Trattoria", vibe: "Happy hour bar side — Italian wines and cocktails, patio, lower-key than the main dining room crowd" },
    ],
    medianHomePrice: 460000,
    priceRange: { low: 360000, high: 660000 },
    commuteToDowntown: "20–30 min to Portland via I-205 in normal traffic; 40–55 min during peak bridge crossings; Portland International Airport 15 min; no practical transit connection to Portland",
    faqs: [
      {
        q: "Why choose Cascade Park over Orchards?",
        a: "Mostly the library, the slightly closer I-205 position, and the neighborhood's established commercial center on Mill Plain. Cascade Park has a more complete feel — the library branch, Little Italy's, Larson's Bakery — than Orchards, which is more residential with a more dispersed commercial strip. The price difference is typically $20k–$30k at median. Whether that premium is worth it depends on how much the neighborhood infrastructure matters to you day-to-day.",
      },
      {
        q: "How is the commute from Cascade Park to Portland?",
        a: "Cascade Park has some of the best I-205 access of any Vancouver neighborhood. In normal traffic, 20–30 minutes to downtown Portland via the Glenn Jackson Bridge. The I-205 bridge is newer and generally less congested than the I-5 bridge, which backs up with bridge lifts and has significantly more daily volume. Budget 40–55 minutes for peak-hour commutes — both Columbia River crossings slow down under heavy demand. There is no useful light rail or bus connection to Portland from Cascade Park.",
      },
      {
        q: "What are the schools like in Cascade Park?",
        a: "Crestline Elementary and Cascade Middle School are below district and state averages on proficiency measures — this is documented and worth knowing before purchase. Mountain View High School, where students end up, is meaningfully stronger: A- on Niche, 7/10 GreatSchools rating, 92% graduation rate, with above-average science scores. The K–8 pipeline is a real consideration for families with young children. The high school pipeline is competitive.",
      },
      {
        q: "Is Cascade Park convenient to Portland International Airport?",
        a: "Yes — PDX is approximately 15 minutes from Cascade Park via I-205 north. For buyers who travel frequently for work, this is a genuine quality-of-life factor that rarely shows up in neighborhood descriptions but matters for anyone making monthly or weekly trips.",
      },
    ],
    testimonials: [
      {
        quote: "The library was the unexpected thing. Our kids are at it three times a week. It's a real community building, not an afterthought. We didn't think that would matter when we were buying, and it does.",
        author: "Rachel and Paul M.",
        context: "Purchased in Cascade Park, refinanced 2024",
      },
      {
        quote: "Bri told us straight: the elementary school ratings aren't great, Mountain View is solid, and here's what that means if you have a five-year-old. She didn't sell the neighborhood, she explained it. That's why we trusted her.",
        author: "Antonia G.",
        context: "Bought in Cascade Park, VA loan, 2023",
      },
    ],
    relatedServices: ["purchase", "va", "fha", "refinance", "heloc", "cash-out", "investment", "reverse-mortgage"],
    adjacentNeighborhoods: ["orchards", "vancouver-wa", "camas"],
    seo: {
      title: "Buying a Home in Cascade Park, Vancouver WA | The Lindley Team",
      description:
        "Real talk on Cascade Park real estate: home prices, schools, I-205 commute to Portland, and what East Vancouver buyers need to know. Bri Lindley, NMLS #1367416, licensed in WA.",
    },
  },
];
