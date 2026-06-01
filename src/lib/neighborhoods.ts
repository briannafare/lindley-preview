export interface School {
  name: string;
  type: "elementary" | "middle" | "high" | "private" | "charter";
  grades: string;
  rating: number;
}

export interface Park {
  name: string;
  amenities: string[];
}

export interface Place {
  name: string;
  cuisine?: string;
  vibe: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

export interface NeighborhoodData {
  slug: string;
  name: string;
  city: string;
  state: "OR" | "WA";
  description: string[];
  personality: string;
  mapEmbedSrc: string;
  directionsSrc: string;
  walkScore: number;
  bikeScore: number;
  transitScore: number;
  schoolDistrict: string;
  schools: School[];
  parks: Park[];
  restaurants: Place[];
  coffee: Place[];
  bars: Place[];
  medianHomePrice: number;
  priceRange: { low: number; high: number };
  commuteToDowntown: string;
  faqs: Array<{ q: string; a: string }>;
  testimonials: Testimonial[];
  relatedServices: string[];
  adjacentNeighborhoods: string[];
  seo: { title: string; description: string };
}

export const neighborhoods: NeighborhoodData[] = [
  {
    slug: "sellwood-moreland",
    name: "Sellwood-Moreland",
    city: "Portland",
    state: "OR",
    description: [
      "SE 13th Avenue smells like old wood and coffee on Saturday mornings. Antique shops line both sides — not vintage boutiques, actual antique stores, the kind where someone who knows what they're looking at can still find something good. The Springwater Corridor trail runs along the eastern edge of the neighborhood right next to the Willamette, and Oaks Bottom Wildlife Refuge backs up to it. You can watch blue herons from the trail on a weekday morning and be at a downtown office in 25 minutes.",
      "The housing is mostly 1910s–1940s Craftsmans, scattered ranches from the 1950s, and a handful of newer infill houses. Sellwood Park has a public outdoor pool — first-come, first-served — that fills up fast in July. The Sellwood Bridge was rebuilt in 2016 and is the neighborhood's main artery. It's a beautiful crossing. It also backs up every weekday afternoon.",
      "Traffic on SE Milwaukie Ave is a daily reality during rush hour. The stretch closest to the river floods a few times a year when the Willamette runs high. Inventory is tight — people move here and stay. When a house comes up between SE 7th and SE 17th, expect competition.",
    ],
    personality: "Portland's most livable neighborhood, if you can get in",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Sellwood+Moreland+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Sellwood+Moreland+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 71,
    bikeScore: 92,
    transitScore: 51,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Duniway Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Sellwood Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Cleveland High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Sellwood Park",
        amenities: ["outdoor pool", "tennis courts", "playground", "picnic shelters"],
      },
      {
        name: "Oaks Bottom Wildlife Refuge",
        amenities: ["hiking trails", "bird watching", "wetlands", "off-leash dog area"],
      },
      {
        name: "Springwater Corridor Trail",
        amenities: ["paved multi-use trail", "river views", "cycling"],
      },
    ],
    restaurants: [
      { name: "The Observatory", cuisine: "American", vibe: "Gastropub on SE Milwaukie — good burgers, good beer list, neighborhood crowd" },
      { name: "Guero's", cuisine: "Mexican", vibe: "Casual tacos and burritos, quick lunch, SE Milwaukie Ave" },
      { name: "Nick's Famous Coney Island", cuisine: "Diner", vibe: "Classic Portland diner on SE Milwaukie, been there forever, cash only" },
    ],
    coffee: [
      { name: "Fuller's Coffee Shop", vibe: "No-frills diner coffee on SE 13th, regulars only" },
      { name: "Lucky Lab Beer & Coffee", vibe: "Dog-friendly, big patio, more neighborhood pub than cafe" },
    ],
    bars: [
      { name: "The Sellwood Bar", vibe: "Neighborhood dive, pool table, no pretense" },
      { name: "The Observatory", vibe: "Doubles as a bar after dinner — good rotating taps" },
    ],
    medianHomePrice: 620000,
    priceRange: { low: 480000, high: 1100000 },
    commuteToDowntown: "20–25 min by car (35+ in rush hour), 10 min by bike via Springwater + Hawthorne Bridge, 40 min by bus",
    faqs: [
      {
        q: "What's the commute from Sellwood to downtown Portland?",
        a: "Driving is 20–25 minutes in normal traffic, 35+ during rush hour — the Sellwood Bridge is the only direct crossing and it backs up. Biking is faster: the Springwater Corridor connects to the Hawthorne Bridge path in about 10 minutes. The bus (Line 70) runs downtown but takes 40–45 minutes with transfers.",
      },
      {
        q: "Are the schools good in Sellwood?",
        a: "Solid within Portland Public Schools. Duniway Elementary is K–5 and well-regarded. Cleveland High has strong programs and is one of PPS's better comprehensive high schools. None rank at the very top of the district, but the community involvement is high and families tend to stay long-term.",
      },
      {
        q: "How much does a home cost in Sellwood-Moreland?",
        a: "Median is around $620,000. Most houses trade between $480k and $800k — Craftsmans on the residential streets between SE 7th and SE 17th sit in the middle of that range. Larger Victorian-era houses closer to the river push higher. Well-priced homes in good condition typically go over asking.",
      },
      {
        q: "Is Sellwood-Moreland good for families?",
        a: "Yes, one of Portland's best. Walkable for kids, a public outdoor pool, and a neighborhood that's been stable for decades. Oaks Bottom and the Springwater trail give actual outdoor space. The schools are decent, and families tend to plant roots here and not move.",
      },
    ],
    testimonials: [
      {
        quote: "We looked at 22 houses over 14 months. The day we saw the one on SE 14th, we wrote the offer that night. Bri called me the next morning to walk through the numbers before I second-guessed myself.",
        author: "Marcus T.",
        context: "Bought in Sellwood-Moreland, 2023",
      },
      {
        quote: "I refinanced when rates dropped and saved $340 a month. Bri ran the numbers three different ways and showed me the exact break-even point. Didn't feel like a sales pitch.",
        author: "Jennifer L.",
        context: "Refinanced in Sellwood, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha"],
    adjacentNeighborhoods: ["woodstock", "eastmoreland", "buckman"],
    seo: {
      title: "Buying a Home in Sellwood-Moreland, Portland OR | The Lindley Team",
      description:
        "Real talk on Sellwood-Moreland real estate: home prices, schools, commute, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "buckman",
    name: "Buckman",
    city: "Portland",
    state: "OR",
    description: [
      "Coava Coffee's Grand Avenue location is inside a converted basketball court. Ceilings 40 feet high, hanging plants, and genuinely excellent coffee. It's one block from the Hawthorne Bridge, which means you're in downtown Portland in eight minutes on a bike. This is what Buckman has over most Portland neighborhoods: proximity. You're not in the suburbs pretending to be in the city.",
      "Nostrana on SE Morrison has been making wood-fired pizza since 2005 and is still the answer when someone asks for a good dinner recommendation. Screen Door on East Burnside does Southern-style brunch — the wait is worth it once. Ladd's Addition is the residential sub-neighborhood to know: 1920s streets laid out in a diamond grid with rose test gardens at the intersections. Houses there sell fast, often over asking, in any market.",
      "Buckman is dense. Street parking is a daily negotiation. East Burnside is loud, the MAX runs close by, and there are bars within earshot of most residential streets. It floods occasionally near the lower-lying blocks close to SE Grand. If you need quiet, this is the wrong neighborhood. If walkability is the priority, few places in Portland beat it.",
    ],
    personality: "Eight minutes from downtown, zero excuses for not walking",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Buckman+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Buckman+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 88,
    bikeScore: 94,
    transitScore: 72,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Buckman Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Ladd's Addition Rose Gardens",
        amenities: ["rose test gardens", "historic streets", "walking paths"],
      },
      {
        name: "Sewallcrest Park",
        amenities: ["open lawn", "views", "quiet neighborhood park"],
      },
    ],
    restaurants: [
      { name: "Nostrana", cuisine: "Pizza", vibe: "Wood-fired, SE Morrison, been the answer to 'where should we go?' since 2005" },
      { name: "Screen Door", cuisine: "Southern", vibe: "Brunch institution, East Burnside, the wait is real and usually worth it" },
      { name: "Cheryl's on 12th", cuisine: "Breakfast", vibe: "Classic breakfast spot, regulars only feel after a few visits" },
    ],
    coffee: [
      { name: "Coava Coffee Roasters", vibe: "Flagship location in a converted basketball court on SE Grand — best coffee shop interior in Portland" },
      { name: "Water Avenue Coffee", vibe: "Industrial space near the river, where commercial roasters go to drink coffee" },
    ],
    bars: [
      { name: "East Burn", vibe: "Gastropub on E Burnside, big covered patio, local crowd" },
      { name: "Aalto Lounge", vibe: "SE Belmont spot, cocktails, low-key" },
    ],
    medianHomePrice: 470000,
    priceRange: { low: 320000, high: 800000 },
    commuteToDowntown: "8 min by bike, 12–15 min by car, 10 min on MAX, 15 min on bus",
    faqs: [
      {
        q: "Is Buckman walkable?",
        a: "Very. Walk Score typically 88–92 depending on the block. Grocery, coffee, restaurants, the library — nearly everything within 10–15 minutes on foot. The Hawthorne Bridge is 8 minutes by bike to downtown. If you're used to driving everywhere, Buckman will genuinely change your daily routine.",
      },
      {
        q: "What's Ladd's Addition?",
        a: "A sub-neighborhood of Buckman with a 1920s diamond-grid street plan and rose test gardens at the intersections. The roses bloom in May and June. Houses there are well-maintained early 20th-century Craftsmans on tight lots — it's a Portland Historic Landmark district, so design standards apply for exterior work. Prices run $600k+ for a well-maintained house.",
      },
      {
        q: "How much does a home cost in Buckman?",
        a: "Median is around $470,000, which includes condos and houses. Ladd's Addition houses trade significantly higher — $600k+ isn't unusual. Condos near SE Grand bring the average down. The entry point is below comparable walkability in most other cities.",
      },
      {
        q: "Is Buckman good for first-time buyers?",
        a: "Yes, with realistic expectations. Condos and townhomes bring the entry price under the Portland median. For single-family houses — especially in Ladd's Addition — competition is real. If your budget is under $400k, you're looking at attached housing. At $500k+, single-family becomes realistic.",
      },
    ],
    testimonials: [
      {
        quote: "I work downtown and didn't want to own a car. Buckman was the only neighborhood where that felt realistic. Bri helped me find a condo in Ladd's Addition and close in 28 days.",
        author: "Devon K.",
        context: "Bought in Ladd's Addition, 2023",
      },
      {
        quote: "First home purchase and I had a lot of questions. Bri answered every single one without making me feel like I was wasting her time.",
        author: "Rachel M.",
        context: "Bought in Buckman, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "jumbo"],
    adjacentNeighborhoods: ["sellwood-moreland", "irvington", "alberta-arts"],
    seo: {
      title: "Buying a Home in Buckman, Portland OR | The Lindley Team",
      description:
        "Buckman real estate: Ladd's Addition prices, walkability, commute, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "alberta-arts",
    name: "Alberta Arts District",
    city: "Portland",
    state: "OR",
    description: [
      "Last Thursday has been happening on NE Alberta Street every last Thursday of the month since 1997. Artists and food carts take over several blocks, the street closes to cars, and it draws a crowd from across the city. It's on tourist maps now, which some longtime residents find annoying. The commercial strip — Alberta from MLK to about 33rd — has stayed mostly independently owned, which is increasingly rare in Portland.",
      "Extracto Coffee at 2921 NE Alberta is one of Portland's best roasters. The Bye and Bye has been doing craft cocktails in a room full of hanging plants since before that was a design trend. Pine State Biscuits will ruin you for breakfast sandwiches. Tin Shed Garden Cafe does weekend brunch on a garden patio that works better than it should.",
      "The residential streets are Craftsman bungalows from the 1910s and 1920s. NE 24th through NE 28th off Alberta are where buyers compete hardest. If you work on the west side, get ready for the bridge commute — the Burnside Bridge is quickest from here and it backs up in the afternoon. On Last Thursday nights, parking disappears for a six-block radius.",
    ],
    personality: "Portland's arts corridor, still mostly owned by the people who made it",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Alberta+Arts+District+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Alberta+Arts+District+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 75,
    bikeScore: 88,
    transitScore: 55,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Sabin Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Fernhill Park",
        amenities: ["soccer fields", "playground", "off-leash dog area", "open lawn"],
      },
      {
        name: "Alberta Park",
        amenities: ["tennis courts", "wading pool", "basketball courts", "picnic area"],
      },
    ],
    restaurants: [
      { name: "Tin Shed Garden Cafe", cuisine: "American", vibe: "Weekend brunch on a garden patio, NE Alberta — better than it looks from the outside" },
      { name: "Aviary", cuisine: "New American", vibe: "Nice dinner on Alberta, creative menu, reservation recommended" },
      { name: "Pine State Biscuits", cuisine: "Southern", vibe: "Breakfast sandwiches that will ruin you for other breakfast sandwiches" },
      { name: "Radio Room", cuisine: "American", vibe: "Bar with good food, rooftop, Alberta Street staple" },
    ],
    coffee: [
      { name: "Extracto Coffee Roasters", vibe: "2921 NE Alberta — one of Portland's best roasters, period" },
      { name: "Case Study Coffee", vibe: "Clean, minimal, excellent espresso on NE Alberta" },
    ],
    bars: [
      { name: "The Bye and Bye", vibe: "1011 NE Alberta, craft cocktails, hanging plants everywhere, been here since it mattered" },
      { name: "Radio Room", vibe: "Rooftop bar, NE Alberta, good for summer evenings" },
    ],
    medianHomePrice: 480000,
    priceRange: { low: 350000, high: 800000 },
    commuteToDowntown: "25 min by car, 20 min by bike via Burnside Bridge, 30–35 min by bus",
    faqs: [
      {
        q: "What's it like living on Alberta Street vs. a few blocks off?",
        a: "Very different. Alberta Street itself has foot traffic, music from bars, and Last Thursday crowds once a month. The residential streets three or four blocks north or south are quiet Craftsman neighborhoods. Most people who live here choose a residential cross-street and use Alberta as a destination.",
      },
      {
        q: "How much does a home cost in the Alberta Arts District?",
        a: "Median is around $480,000. Craftsman bungalows on NE 24th through NE 28th run $430k–$650k depending on condition. Houses further from the commercial strip come in slightly lower. Investors compete in this market for rental properties, so cash buyers show up in some price ranges.",
      },
      {
        q: "Is Alberta Arts District good for families?",
        a: "It can work well. Sabin Elementary has solid community involvement. The neighborhood is walkable for kids. The tradeoff is that Alberta itself is busy, and Last Thursday brings real crowds once a month. Families who do well here are usually on the residential streets a few blocks off the main drag.",
      },
      {
        q: "What's the commute to downtown from Alberta?",
        a: "About 25 minutes by car. The bus (Lines 72 or 6) gets you downtown in 30–35 minutes. Biking is 20–25 minutes via the Burnside Bridge. Going to the west side adds bridge time — Burnside is the fastest crossing from NE Portland and it gets congested in the afternoon.",
      },
    ],
    testimonials: [
      {
        quote: "Moved from Denver and I knew the neighborhood from one visit. Bri flagged two houses before they hit Zillow. We bought the second one.",
        author: "Thomas B.",
        context: "Bought on NE 26th, 2024",
      },
      {
        quote: "We were nervous about buying an investment property. Bri walked through the rental math honestly — including the scenario where rates didn't drop. We bought anyway and it's been solid.",
        author: "Keisha and David R.",
        context: "Investment property in Alberta Arts, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["irvington", "buckman", "st-johns"],
    seo: {
      title: "Buying a Home in Alberta Arts District, Portland OR | The Lindley Team",
      description:
        "Alberta Arts District real estate: home prices, Last Thursday, commute, and what buyers should know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "pearl-district",
    name: "Pearl District",
    city: "Portland",
    state: "OR",
    description: [
      "Powell's Books takes up a full city block at NW 10th and Burnside and stays open until 11pm. This tells you something about the Pearl District: it's built for people who don't want to drive, and it actually delivers. The Portland Streetcar runs through it. Jamison Square has a fountain kids use as a splash pad in summer. Tanner Springs Park is a native-plant stormwater garden that doubles as the neighborhood's front lawn. You can walk to almost everything.",
      "You're buying condos here. The range is enormous — studios in older buildings start around $300k, penthouses in newer buildings push past $2M. HOA fees are a real part of the underwriting math. Newer buildings have lower fees and higher prices; older buildings have caught up over time. Jake's Famous Crawfish on SW 12th has been there since 1892 and feels like it. Coava Coffee has a Pearl location. The neighborhood has exactly the restaurants and services you'd expect for the price point.",
      "The honest numbers: no yard, neighbors on all sides, street noise along the main corridors is constant, and parking is either included in your unit or $200–$300/month in a garage. The neighborhood is designed for people who don't own a car. If you bring one anyway, it will cost you. The trade is square footage for location, and it's a trade plenty of buyers make willingly.",
    ],
    personality: "The neighborhood that made Portland prove it could do urban density",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Pearl+District+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Pearl+District+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 97,
    bikeScore: 96,
    transitScore: 92,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Chapman Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Lincoln High School", type: "high", grades: "9–12", rating: 8 },
    ],
    parks: [
      {
        name: "Jamison Square",
        amenities: ["fountain / splash pad", "open lawn", "dog friendly", "public art"],
      },
      {
        name: "Tanner Springs Park",
        amenities: ["native plants", "stormwater garden", "bird watching", "quiet seating"],
      },
    ],
    restaurants: [
      { name: "Jake's Famous Crawfish", cuisine: "Seafood", vibe: "Been here since 1892, SW 12th — classic Portland before Portland was cool" },
      { name: "Bullard Texas BBQ", cuisine: "BBQ", vibe: "Serious Texas-style on SW 12th, one of the better BBQ spots in the city" },
      { name: "Imperial", cuisine: "American", vibe: "Hotel Lucia's restaurant, NW Broadway, good for a business dinner" },
      { name: "Bamboo Sushi", cuisine: "Sushi", vibe: "Sustainable sushi, Pearl location, reservation recommended on weekends" },
    ],
    coffee: [
      { name: "Coava Coffee Roasters", vibe: "Pearl location on NW Davis — smaller than the Grand Ave flagship but same quality" },
      { name: "Barista", vibe: "NW 23rd area, precise espresso, minimal space" },
    ],
    bars: [
      { name: "Raven & Rose", vibe: "Upscale cocktail bar in a historic carriage house, SW Broadway" },
      { name: "Bailey's Taproom", vibe: "20+ rotating taps, SW Broadway, no-frills craft beer" },
    ],
    medianHomePrice: 580000,
    priceRange: { low: 300000, high: 2000000 },
    commuteToDowntown: "5–10 min on foot or Streetcar, MAX accessible at Old Town/Chinatown",
    faqs: [
      {
        q: "Is the Pearl District mostly condos?",
        a: "Yes. Almost entirely. The neighborhood is former industrial land that was converted to condos and lofts starting in the 1990s. Single-family houses don't really exist here. You're buying a condo or loft, and the HOA fee is part of every transaction.",
      },
      {
        q: "How much does a condo cost in the Pearl District?",
        a: "Range is wide: studios in older buildings from around $300k, up to $2M+ for top-floor units in newer buildings. Most buyers land between $400k and $900k. HOA fees add $400–$800/month depending on the building and amenities. Make sure you're accounting for that in your monthly budget.",
      },
      {
        q: "Is the Pearl District good for families?",
        a: "It can work, especially with younger kids. Chapman Elementary is well-regarded and walkable. The lack of yards is the main adjustment — Jamison Square and Tanner Springs become the outdoor space. Families often move to neighborhoods with more space when kids get older, but the Pearl works well for the early years.",
      },
      {
        q: "Do I need a car in the Pearl District?",
        a: "No. It's one of the only Portland neighborhoods where car-free living is genuinely practical. The Streetcar, MAX, and biking infrastructure cover most trips. Grocery, restaurants, coffee, Powell's — all walkable. If you do own a car, budget for parking separately; most street parking is metered or permit.",
      },
    ],
    testimonials: [
      {
        quote: "I'd been renting in the Pearl for four years and finally decided to buy. Bri walked me through the HOA financials on three different buildings before we found one that made sense. She caught a reserve fund issue I would have missed.",
        author: "Alex W.",
        context: "Bought a condo in Pearl District, 2024",
      },
      {
        quote: "Downsizing from a house in Lake Oswego. The Pearl was the only neighborhood that felt like a real trade rather than a compromise. Bri handled the whole thing cleanly.",
        author: "Carolyn and Jim B.",
        context: "Bought in Pearl District, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance"],
    adjacentNeighborhoods: ["buckman", "irvington", "st-johns"],
    seo: {
      title: "Buying a Condo in the Pearl District, Portland OR | The Lindley Team",
      description:
        "Pearl District condo prices, HOA fees, walkability, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "irvington",
    name: "Irvington",
    city: "Portland",
    state: "OR",
    description: [
      "Walk NE 19th Avenue between Knott and Tillamook on a spring evening and you'll understand why people pay a premium for Irvington. Victorian houses with original craftwork, old trees overhanging the sidewalk, front porches that get used. The neighborhood was developed between 1890 and 1930, and a lot of it looks like it. Irvington Elementary consistently ranks among PPS's top K–5 schools, which drives a significant portion of the demand.",
      "Grant High School runs an IB program that draws students from across NE Portland — one of PPS's genuine success stories. The school pipeline matters to buyers with kids, and it shows in the prices. Nothing move-in ready goes under $550k. Most houses trade in the $650k–$900k range. The jumbo threshold starts to matter here for buyers putting less than 20% down.",
      "The eastern streets toward the Lloyd District get more commercial traffic than the neighborhood's aesthetic implies — NE Broadway, the northern boundary, can be noisy. Prices are higher than comparable houses in Woodstock or St. Johns, and the honest question to ask yourself is whether the schools and address justify the premium for your situation. For some buyers they absolutely do.",
    ],
    personality: "NE Portland's historic benchmark — the school district drives half the demand",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Irvington+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Irvington+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 83,
    bikeScore: 88,
    transitScore: 60,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Irvington Elementary", type: "elementary", grades: "K–5", rating: 9 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Irving Park",
        amenities: ["community center", "tennis courts", "playground", "open lawn", "summer concerts"],
      },
      {
        name: "Grant Park",
        amenities: ["open lawn", "walking paths", "adjacent to Grant HS track"],
      },
    ],
    restaurants: [
      { name: "Screen Door", cuisine: "Southern", vibe: "SE Burnside brunch institution — technically just outside Irvington but everyone here goes" },
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams corridor, all-day breakfast, reservation worth it on weekends" },
      { name: "Dar Salam", cuisine: "Iraqi", vibe: "NE Alberta nearby, one of Portland's best underrated dinner spots" },
    ],
    coffee: [
      { name: "Never Coffee Lab", vibe: "2120 NE Alberta — serious espresso, minimal vibe, not trying to impress anyone" },
      { name: "Case Study Coffee", vibe: "NE Alberta location, clean and consistent" },
    ],
    bars: [
      { name: "Expatriate", vibe: "NE 30th Ave, small cocktail bar with a strong menu, one of Portland's best" },
      { name: "Pints Urban Brewery", vibe: "NW 14th area, solid house-brewed beers, low-key" },
    ],
    medianHomePrice: 750000,
    priceRange: { low: 550000, high: 1500000 },
    commuteToDowntown: "20 min by car, 25 min by bike, 30 min by bus (Lines 6, 77)",
    faqs: [
      {
        q: "Why is Irvington so expensive?",
        a: "A few things stack up: the housing stock is genuinely old and well-built, Irvington Elementary is one of PPS's top-rated schools, Grant High School has an IB program, and the neighborhood has been desirable for long enough that turnover is low. Supply is tight and demand from families is consistent.",
      },
      {
        q: "What are the homes like in Irvington?",
        a: "Mostly Victorians and Craftsmans built between 1895 and 1930, on lots that run 5,000–7,500 sq ft. Many have original woodwork, built-ins, and hardwood floors. Renovations are common but full flips are expensive given the house sizes. You'll find some infill from the 1950s–1970s on the less central streets.",
      },
      {
        q: "Is Irvington good for families with school-age kids?",
        a: "It's one of the strongest school pipelines in PPS — Irvington Elementary to Harriet Tubman Middle to Grant High with IB. The elementary school alone drives meaningful demand. The neighborhood is walkable for kids, Irving Park is large and well-maintained, and the block structure is safe and quiet.",
      },
      {
        q: "How does Irvington compare to Laurelhurst or Eastmoreland?",
        a: "Irvington has slightly better transit access and is closer to NE commercial corridors. Laurelhurst has the park and a stronger sense of enclave. Eastmoreland is quieter with larger lots. All three are in the upper tier of Portland residential neighborhoods. The school pipeline makes Irvington's case for families specifically.",
      },
    ],
    testimonials: [
      {
        quote: "We moved from Chicago specifically for the school situation. Irvington Elementary was the deciding factor. Bri helped us close on a Victorian on NE 22nd before it got a second offer.",
        author: "Sarah and Tom K.",
        context: "Bought in Irvington, 2023",
      },
      {
        quote: "I was skeptical about the price, but Bri walked me through the comparable sales going back five years. Irvington holds value. We bought and I haven't second-guessed it.",
        author: "Michael D.",
        context: "Bought in Irvington, 2024",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance"],
    adjacentNeighborhoods: ["alberta-arts", "buckman", "laurelhurst"],
    seo: {
      title: "Buying a Home in Irvington, Portland OR | The Lindley Team",
      description:
        "Irvington real estate: home prices, school quality, Victorian homes, and what buyers should know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "eastmoreland",
    name: "Eastmoreland",
    city: "Portland",
    state: "OR",
    description: [
      "Reed College sits at the southeastern edge of Eastmoreland, and Crystal Springs Rhododendron Garden runs right next to the campus. In May the rhododendrons bloom hard — it draws visitors from across the city. The residential streets around SE Crystal Springs Blvd and SE Bybee have some of the largest, best-maintained houses in inner SE Portland: Tudor Revivals, Colonial Revivals, and large Craftsmans from the 1920s through 1940s on wide lots.",
      "This is a quiet prestige neighborhood. No commercial strip to walk to, limited transit, almost no foot traffic. You drive or bike down to SE Woodstock or SE Division for coffee and food. The Eastmoreland Golf Course is a public course — a good amenity if you play. Duniway Elementary and Cleveland High School serve the area. The housing stock is the draw, not the walkability.",
      "Walk Score is around 58, no easy MAX access, and the bus to downtown takes 35 minutes. If you're comparing to Buckman or Irvington on urban convenience, Eastmoreland loses. If you're comparing on lot size, house quality, and quiet, it wins. The buyers who are happiest here know they're trading convenience for space.",
    ],
    personality: "SE Portland's quietest prestige neighborhood — big houses, no foot traffic, Reed College next door",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Eastmoreland+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Eastmoreland+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 58,
    bikeScore: 80,
    transitScore: 38,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Duniway Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Sellwood Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Cleveland High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Crystal Springs Rhododendron Garden",
        amenities: ["rhododendron collection", "duck pond", "walking paths", "seasonal blooms"],
      },
      {
        name: "Eastmoreland Golf Course",
        amenities: ["18-hole public course", "driving range", "pro shop"],
      },
    ],
    restaurants: [
      { name: "Grand Central Baking", cuisine: "Bakery / Cafe", vibe: "SE Woodstock location, good bread, neighborhood breakfast" },
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "SE Division, not walking distance but worth the trip — some of Portland's best cooking" },
      { name: "Hammy's Pizza", cuisine: "Pizza", vibe: "SE Woodstock, local takeout institution" },
    ],
    coffee: [
      { name: "Grand Central Baking", vibe: "SE Woodstock — bread bakery with espresso, opens early" },
      { name: "Stumptown Coffee", vibe: "Several locations reachable by short drive or bike" },
    ],
    bars: [
      { name: "Woodstock Wine & Deli", vibe: "SE Woodstock, wine bar feel, good for a quiet evening" },
      { name: "Sellwood Bar", vibe: "Short bike ride to Sellwood, neighborhood dive with no pretense" },
    ],
    medianHomePrice: 720000,
    priceRange: { low: 560000, high: 1400000 },
    commuteToDowntown: "25 min by car, 35 min by bus, 20 min by bike via Springwater Corridor",
    faqs: [
      {
        q: "What kind of homes are in Eastmoreland?",
        a: "Large 1920s–1940s houses on big lots: Tudor Revivals, Colonial Revivals, Craftsmans. Lot sizes often run 7,500–12,000 sq ft, which is generous for inner Portland. Houses are well-maintained — the neighborhood has strict homeowner standards and design review applies to major exterior changes.",
      },
      {
        q: "Is Eastmoreland good for families?",
        a: "Yes, particularly if school quality and space are the priorities. Duniway Elementary is solid, Cleveland High is one of PPS's better comprehensive high schools, and the neighborhood is quiet and safe. The lack of walkability means kids need rides to most activities — that's the main adjustment for families coming from more urban neighborhoods.",
      },
      {
        q: "How does Eastmoreland compare to Sellwood or Woodstock?",
        a: "More expensive and quieter than either. Sellwood has more of a commercial strip and community vibe. Woodstock is more affordable and has Reed College proximity. Eastmoreland has the largest houses and the most established streetscape. The three neighborhoods share schools.",
      },
      {
        q: "What's the Crystal Springs Rhododendron Garden?",
        a: "A 9.5-acre garden managed by the American Rhododendron Society, adjacent to Reed College. Entry is free Monday mornings and during the off-season; small admission fee April through June when the rhododendrons are blooming. Genuinely worth seeing in May — it's one of those Portland things that residents take for granted and visitors are stunned by.",
      },
    ],
    testimonials: [
      {
        quote: "We wanted a 1930s house with a real yard and didn't want to leave Portland. Eastmoreland was the answer. Bri found us a Tudor Revival on SE Bybee before it was formally listed.",
        author: "Patricia and Greg H.",
        context: "Bought in Eastmoreland, 2023",
      },
      {
        quote: "Coming from a condo in the Pearl, the lot size alone felt like a revelation. Bri walked us through what to expect on a house this size — insurance, maintenance, the works.",
        author: "Daniel F.",
        context: "Bought in Eastmoreland, 2024",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance"],
    adjacentNeighborhoods: ["sellwood-moreland", "woodstock", "buckman"],
    seo: {
      title: "Buying a Home in Eastmoreland, Portland OR | The Lindley Team",
      description:
        "Eastmoreland real estate: Tudor Revivals, large lots, Crystal Springs Garden, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },


  {
    slug: "laurelhurst",
    name: "Laurelhurst",
    city: "Portland",
    state: "OR",
    description: [
      "Laurelhurst Park has a lake. A real one — Crystal Lake, with wood ducks and a walking loop around the perimeter. The off-leash dog area at the north end is one of the busiest in Portland on a Sunday morning. The residential streets surrounding it — NE 35th, NE Glisan, NE Cesar Chavez — have some of the finest houses in inner Portland: large Craftsmans and Colonial Revivals from 1905–1930 on lots that were generous even when the neighborhood was new.",
      "Laurelhurst Elementary is one of PPS's top-rated K–5 schools, which is the single biggest driver of demand here. Grant High's IB program is the destination high school. Laurelhurst Market on SE 28th is part butcher shop, part restaurant, and worth knowing about — it's been a Portland institution for over a decade. East Burn on E Burnside is the gastropub for the neighborhood.",
      "The honest thing: Laurelhurst is expensive and the prices reflect real value, but you need to be clear about what you're paying for. The park, the school, the address, the house quality. If those things matter to you, the premium holds up. If MAX access or a short bike commute to downtown matters most, Laurelhurst's transit situation is mediocre and the bike routes aren't as good as Buckman or Alberta.",
    ],
    personality: "The park, the school, the houses — Portland's most justified premium neighborhood",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Laurelhurst+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Laurelhurst+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 76,
    bikeScore: 88,
    transitScore: 55,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Laurelhurst Elementary", type: "elementary", grades: "K–5", rating: 9 },
      { name: "Beaumont Middle School", type: "middle", grades: "6–8", rating: 7 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Laurelhurst Park",
        amenities: ["Crystal Lake", "off-leash dog area", "walking loop", "tennis courts", "playground"],
      },
    ],
    restaurants: [
      { name: "Laurelhurst Market", cuisine: "American / Steakhouse", vibe: "Butcher shop + restaurant on SE 28th — one of Portland's best dinner spots, take the beef seriously" },
      { name: "East Burn", cuisine: "American", vibe: "Gastropub on E Burnside, big covered patio, neighborhood crowd" },
      { name: "Tusk", cuisine: "New American", vibe: "NE 28th Ave, creative menu, good for date night" },
    ],
    coffee: [
      { name: "Never Coffee Lab", vibe: "NE Alberta, short bike or drive — serious espresso, no fuss" },
      { name: "Water Avenue Coffee", vibe: "SE Water Ave, worth the trip for a slow morning" },
    ],
    bars: [
      { name: "East Burn", vibe: "Doubles as the neighborhood bar after dinner — good rotating taps and a patio that actually works" },
      { name: "Expatriate", vibe: "NE 30th Ave cocktail bar, small, very good, reservation helps on weekends" },
    ],
    medianHomePrice: 780000,
    priceRange: { low: 580000, high: 1400000 },
    commuteToDowntown: "20 min by car, 25 min by bike, 30–35 min by bus (Line 15 or 20)",
    faqs: [
      {
        q: "Why is Laurelhurst so expensive?",
        a: "Three things stack: Laurelhurst Elementary is one of PPS's highest-rated K–5 schools, the park is genuinely excellent, and the housing stock is 100-year-old well-built Craftsmans with original detail. Supply is tight because turnover is low. Families move in when kids are school-age and stay.",
      },
      {
        q: "What are the homes like in Laurelhurst?",
        a: "Primarily Craftsmans and Colonial Revivals built 1905–1930, on lots of 5,000–8,000 sq ft. Many have original woodwork, built-ins, and double-hung windows. Renovated houses go over asking in most markets. Un-renovated houses are less common but show up occasionally at a discount — they're usually serious projects.",
      },
      {
        q: "How does Laurelhurst compare to Irvington?",
        a: "Both are NE Portland historic neighborhoods with strong elementary schools. Irvington is closer to the Alberta and Williams commercial corridors. Laurelhurst has the park — that's the differentiator most buyers point to. Irvington's transit is marginally better. Prices are similar with Laurelhurst trending slightly higher on comparable houses.",
      },
      {
        q: "Is Laurelhurst walkable?",
        a: "Somewhat — Walk Score of 76. The neighborhood itself is residential, and the park is the main destination on foot. For restaurants, coffee, and errands, you're mostly biking or driving to SE 28th Ave or NE 28th Ave. Not as walkable as Buckman or the Pearl, but better than Eastmoreland.",
      },
    ],
    testimonials: [
      {
        quote: "The school situation was the whole reason we were looking in Laurelhurst. Bri knew the comparable sales cold and helped us move fast when the right house came up on NE 36th.",
        author: "Amanda and Chris P.",
        context: "Bought in Laurelhurst, 2024",
      },
      {
        quote: "We almost bought in Irvington but came back to Laurelhurst for the park. Two kids and a dog — it made sense. Bri made the jumbo side of things straightforward.",
        author: "James T.",
        context: "Bought in Laurelhurst, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance"],
    adjacentNeighborhoods: ["irvington", "eastmoreland", "woodstock"],
    seo: {
      title: "Buying a Home in Laurelhurst, Portland OR | The Lindley Team",
      description:
        "Laurelhurst real estate: home prices, the park, school quality, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "woodstock",
    name: "Woodstock",
    city: "Portland",
    state: "OR",
    description: [
      "SE Woodstock Boulevard has been a real neighborhood street longer than most Portland residents have been alive. Reed College anchors the eastern end — the campus feels designed for the neighborhood, not the other way around. Crystal Springs Rhododendron Garden sits just past Reed and is one of the better reasons to live in this part of SE Portland. The commercial strip on Woodstock has stayed neighborhood-scale: Grand Central Baking opens early, there's a pizza place people actually order from, a wine shop that knows its regulars.",
      "Woodstock is more affordable than its neighbors Eastmoreland and Sellwood — not dramatically, but meaningfully. You're buying a Craftsman or ranch from the 1920s–1950s, probably with original hardwood floors and a backyard that's large by Portland standards. The houses are solid and the neighborhood doesn't have a lot of investor turnover. People buy here and stay.",
      "The transit situation to downtown is uninspiring. The 19 bus runs to downtown but takes 35–40 minutes. Biking is better — 25–30 minutes via the Sellwood Bridge or Hawthorne Bridge depending on your route. There's no MAX nearby. It's a car-friendly neighborhood in a city that sometimes forgets not everyone bikes in the rain.",
    ],
    personality: "Affordable, quiet, Reed College on one end and real-deal neighborhood on the other",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Woodstock+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Woodstock+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 73,
    bikeScore: 88,
    transitScore: 45,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Woodstock Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Hosford Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Cleveland High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Crystal Springs Rhododendron Garden",
        amenities: ["rhododendron collection", "duck pond", "walking paths", "free Monday mornings"],
      },
      {
        name: "Woodstock Park",
        amenities: ["playground", "tennis courts", "open lawn", "off-leash dog area"],
      },
    ],
    restaurants: [
      { name: "Hammy's Pizza", cuisine: "Pizza", vibe: "SE Woodstock takeout institution, the neighborhood answer for pizza night" },
      { name: "Grand Central Baking", cuisine: "Bakery / Cafe", vibe: "SE Woodstock location, opens early, good bread and espresso" },
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "SE Division — not on Woodstock but close enough and worth the trip, some of Portland's best cooking" },
    ],
    coffee: [
      { name: "Grand Central Baking", vibe: "The neighborhood morning stop — bread bakery with solid espresso" },
      { name: "Stumptown Coffee", vibe: "Short drive or bike to multiple locations" },
    ],
    bars: [
      { name: "Woodstock Wine & Deli", vibe: "Wine bar feel on SE Woodstock, good for a quiet Tuesday evening" },
      { name: "The Observatory", vibe: "Short ride to Sellwood — gastropub with good beer list" },
    ],
    medianHomePrice: 500000,
    priceRange: { low: 370000, high: 800000 },
    commuteToDowntown: "25 min by car, 30 min by bike, 35–40 min by bus (Line 19)",
    faqs: [
      {
        q: "How does Woodstock compare to Eastmoreland in price?",
        a: "Woodstock runs about $200k lower on median — around $500k vs $720k. The lots in Eastmoreland are larger and the houses are bigger, which accounts for much of the gap. If the school situation is similar (they share Sellwood Middle and Cleveland High) and you don't need the square footage, Woodstock often makes better financial sense.",
      },
      {
        q: "Is Woodstock good for first-time buyers?",
        a: "Yes. It's one of the better entry points into SE Portland. The price point is below Sellwood, Laurelhurst, and Eastmoreland. The neighborhood is stable, the housing stock is solid, and the Woodstock commercial strip gives you actual walkable amenities. FHA works well here — there's enough housing variety for buyers with 3–5% down.",
      },
      {
        q: "What's Reed College's impact on the neighborhood?",
        a: "Reed keeps the eastern end of Woodstock lively — coffee shops, bookstores, foot traffic. It also brings in academic staff who buy in the neighborhood, which keeps the community engaged and property values stable. The campus is open to the public and the canyon trail through it is a genuine neighborhood amenity.",
      },
      {
        q: "Are there good schools in Woodstock?",
        a: "Woodstock Elementary is solid but not exceptional. The middle school (Hosford) and high school (Cleveland) are the same as Sellwood, which serves families well. Cleveland High School consistently performs above the PPS average. If top-tier elementary ratings are the priority, Irvington or Laurelhurst rank higher.",
      },
    ],
    testimonials: [
      {
        quote: "We maxed out at $520k and thought we'd have to leave SE Portland. Bri found us a 1940s house in Woodstock with a real backyard. We've been there two years and love the neighborhood.",
        author: "Lauren and Eric M.",
        context: "Bought in Woodstock, 2023",
      },
      {
        quote: "Woodstock was our backup plan. It became our first choice once Bri walked us through what we were actually getting for the price difference vs. Sellwood.",
        author: "Nina W.",
        context: "Bought in Woodstock, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance"],
    adjacentNeighborhoods: ["eastmoreland", "sellwood-moreland", "laurelhurst"],
    seo: {
      title: "Buying a Home in Woodstock, Portland OR | The Lindley Team",
      description:
        "Woodstock real estate: affordable SE Portland, Reed College proximity, home prices, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "st-johns",
    name: "St. Johns",
    city: "Portland",
    state: "OR",
    description: [
      "Stand under the Cathedral Park arches at dusk when the Gothic towers of the St. Johns Bridge are lit and the water is calm. You'll understand why people who move to St. Johns tend to stay. The park sits directly under one of the most dramatic bridge structures in the Pacific Northwest — the kind of place that feels like it belongs somewhere more famous than North Portland.",
      "N Lombard Street is the main drag: coffee shops, a hardware store, barbershops, restaurants, and McMenamins St. Johns Pub and Movie Theater in a restored 1913 building. Smith BBQ on N Lombard is the answer when someone asks where to get brisket in Portland. The neighborhood has a strong community identity — the St. Johns neighborhood association is active and pays attention to what happens here.",
      "Prices are lower than inner NE and SE Portland, which is why first-time buyers and investors both pay attention. That also means the neighborhood is in active transition — longtime residents and newcomers still figuring out the balance. The commute to the west side is the main friction: the St. Johns Bridge puts you in NW Portland quickly, but going to Beaverton or the Sunset corridor takes real time.",
    ],
    personality: "Cathedral Park, N Lombard, and a neighborhood that doesn't care if you've heard of it",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=St+Johns+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=St+Johns+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 82,
    bikeScore: 78,
    transitScore: 50,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "James John Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "George Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Roosevelt High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Cathedral Park",
        amenities: ["Willamette River access", "picnic areas", "boat launch", "views of St. Johns Bridge"],
      },
      {
        name: "Smith and Bybee Wetlands Natural Area",
        amenities: ["wildlife viewing", "kayak/canoe launch", "walking trails", "migrating bird habitat"],
      },
    ],
    restaurants: [
      { name: "Smith BBQ", cuisine: "BBQ", vibe: "N Lombard, wood-smoked brisket, the real answer to where to get BBQ in Portland" },
      { name: "Tulip Bakery", cuisine: "Bakery / Cafe", vibe: "N Lombard, neighborhood breakfast, regulars know the staff by name" },
      { name: "The Fixin' To", cuisine: "Southern", vibe: "N Lombard, comfort food, strong neighborhood following" },
    ],
    coffee: [
      { name: "McMenamins St. Johns", vibe: "The pub serves coffee — it's the neighborhood gathering place more than a serious coffee bar" },
      { name: "Posies Cafe", vibe: "N Lombard, neighborhood bakery cafe, good for a slower morning" },
    ],
    bars: [
      { name: "McMenamins St. Johns Pub & Movie Theater", vibe: "8203 N Ivanhoe — restored 1913 building, second-run movies, pub food, St. Johns institution" },
      { name: "The Standard", vibe: "N Denver Ave, neighborhood bar, low-key" },
    ],
    medianHomePrice: 420000,
    priceRange: { low: 325000, high: 650000 },
    commuteToDowntown: "25 min by car, 40 min by bus (Line 75), 35 min by bike",
    faqs: [
      {
        q: "Is St. Johns a good neighborhood for first-time buyers?",
        a: "Yes, and it's been one of the better entry points into Portland for several years. Prices are meaningfully below inner NE and SE Portland. The neighborhood has real character, walkable amenities on N Lombard, and Cathedral Park is a legitimate asset. The schools are below average for PPS, which affects some buyers' decisions.",
      },
      {
        q: "Is St. Johns safe?",
        a: "By Portland standards, St. Johns is a normal neighborhood. Like most of Portland, some blocks are better than others. N Lombard and the streets closest to Cathedral Park are active and well-maintained. The neighborhood association is engaged and crime is lower than many inner Portland neighborhoods that cost significantly more.",
      },
      {
        q: "What's the commute from St. Johns to downtown?",
        a: "About 25 minutes by car to downtown Portland — the St. Johns Bridge takes you to NW Portland, then it's a straight shot on Burnside or Broadway. Bus service (Line 75) takes about 40 minutes. Biking is 35 minutes. Getting to the west side suburbs (Beaverton, Hillsboro) adds real time — that's the main friction for tech workers.",
      },
      {
        q: "What types of homes are in St. Johns?",
        a: "Smaller Craftsman bungalows from the 1910s–1940s, ranches from the 1950s, and some more recent infill. Lots are typically 4,500–6,000 sq ft. Houses are smaller than comparable prices in SE Portland — you get less square footage but more neighborhood per dollar. Basements are common and often unfinished, which is either a project or a feature depending on your plans.",
      },
    ],
    testimonials: [
      {
        quote: "Everyone told us to look in SE Portland first. We looked at St. Johns on Bri's recommendation and bought a 1925 Craftsman on N Central for $379k. I dare you to find that price in Sellwood.",
        author: "Owen and Lily S.",
        context: "Bought in St. Johns, 2023",
      },
      {
        quote: "Cathedral Park sealed the deal. I run there three times a week. Bri knew the neighborhood well enough to tell me which blocks to focus on.",
        author: "Cassandra P.",
        context: "Bought in St. Johns, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["alberta-arts", "kenton", "woodstock"],
    seo: {
      title: "Buying a Home in St. Johns, Portland OR | The Lindley Team",
      description:
        "St. Johns real estate: Cathedral Park, N Lombard, home prices, and what first-time buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },


  {
    slug: "kenton",
    name: "Kenton",
    city: "Portland",
    state: "OR",
    description: [
      "There is a 31-foot fiberglass Paul Bunyan statue on N Denver Avenue, and Portland has decided to love it rather than question it. Kenton is that kind of neighborhood. The Yellow MAX line runs through — N Kenton/Denver Ave station — which gives you a real transit connection to downtown and north to the Expo Center. The commercial strip on N Denver has been developing slowly and honestly, without the full polish of Alberta or Mississippi.",
      "Po'Shines Café de la Soul on N Denver is the neighborhood restaurant people point you to first. The Kenton Club has been a dive bar long enough that nobody questions it. The houses are 1940s and 1950s bungalows on 5,000 sq ft lots — smaller than St. Johns, smaller than Alberta, but with MAX access that those neighborhoods don't have. Prices are among the lowest for single-family homes with light rail access in Portland.",
      "Because of the price point and the MAX connection, investors compete with first-time buyers for the same houses. That's the main thing to know going in. A well-priced Craftsman in good condition won't last long, and cash buyers show up regularly. The neighborhood is in active transition — longtime residents and newer arrivals working out what Kenton becomes next.",
    ],
    personality: "Portland's most affordable MAX-accessible neighborhood, in motion",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Kenton+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Kenton+Portland+OR&daddr=10260+SW+Greenburg+Rd+Ste+830+Portland+OR+97223&output=embed",
    walkScore: 75,
    bikeScore: 72,
    transitScore: 68,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Kenton Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "George Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Roosevelt High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Kenton Park",
        amenities: ["playground", "open lawn", "picnic area", "tennis courts"],
      },
      {
        name: "Delta Park",
        amenities: ["soccer fields", "disc golf", "open space", "adjacent to Yellow MAX line"],
      },
    ],
    restaurants: [
      { name: "Po'Shines Café de la Soul", cuisine: "Soul Food", vibe: "N Denver Ave — fried chicken, greens, cornbread, the real answer to Sunday lunch" },
      { name: "Proper Eats", cuisine: "American", vibe: "N Denver food cart pod, rotating vendors, good for a quick lunch" },
    ],
    coffee: [
      { name: "Posies Cafe", vibe: "N Lombard nearby — doubles as the area's morning stop" },
      { name: "Dutch Bros", vibe: "N Interstate — drive-through, not destination coffee, but it's there" },
    ],
    bars: [
      { name: "The Kenton Club", vibe: "N Denver Ave dive bar — pool table, no pretense, been here decades" },
      { name: "The Standard Bar & Grill", vibe: "N Denver, neighborhood bar with food, low-key" },
    ],
    medianHomePrice: 380000,
    priceRange: { low: 290000, high: 600000 },
    commuteToDowntown: "30 min on Yellow MAX, 25 min by car, 40 min by bike",
    faqs: [
      {
        q: "Is Kenton a good neighborhood for first-time buyers?",
        a: "It can be, with clear eyes. The price point is genuinely low for Portland — one of the few places where single-family houses still trade under $400k. The MAX connection to downtown is real. The competition from investors is also real. If you can move fast and have your financing pre-approved, Kenton is worth pursuing. If you need weeks to decide, you'll lose houses.",
      },
      {
        q: "How does Kenton compare to St. Johns?",
        a: "Kenton is cheaper and has better transit (Yellow MAX vs. bus-only in most of St. Johns). St. Johns has Cathedral Park, a more developed commercial strip, and a stronger community identity. They share George Middle School and Roosevelt High School. For buyers who commute downtown, Kenton's MAX access can justify the choice even if the neighborhood feels earlier in its development.",
      },
      {
        q: "What's the commute from Kenton?",
        a: "The Yellow MAX line to downtown takes about 30 minutes from N Kenton/Denver Ave station. Driving to downtown is 25 minutes. The line also runs north to the Expo Center and south to downtown and Clackamas, which makes it useful if you work on the east side of downtown or the Convention Center area.",
      },
      {
        q: "Is Kenton safe?",
        a: "By Portland standards, Kenton is a normal working-class neighborhood. The blocks closest to N Denver Ave and the MAX station are the most active. Crime statistics are similar to other North Portland neighborhoods at this price point. The neighborhood association is active and residents are engaged about what happens here.",
      },
    ],
    testimonials: [
      {
        quote: "I had $340k to spend and thought I was out of the Portland market. Bri showed me Kenton. We got a 1948 bungalow with a full basement for $318k. Two years later, I've put $40k into it and it's worth $430k.",
        author: "Marcus B.",
        context: "Bought in Kenton, 2022",
      },
      {
        quote: "The MAX access is the whole reason. I don't have a car. Kenton made Portland ownership possible for me in a way nothing else did at my budget.",
        author: "Simone L.",
        context: "Bought in Kenton, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["st-johns", "alberta-arts", "woodstock"],
    seo: {
      title: "Buying a Home in Kenton, Portland OR | The Lindley Team",
      description:
        "Kenton real estate: affordable Portland with MAX access, home prices, and what first-time buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },



{
    slug: "beaumont-wilshire",
    name: "Beaumont-Wilshire",
    city: "Portland",
    state: "OR",
    description: [
      "Beaumont Village on NE Fremont Street is about four blocks long and has been the same four blocks for decades. Empire Provisions does charcuterie and sandwiches. Beaumont Hardware is still there. Some of the best independent retail left in inner NE Portland, none of it national chains. The residential streets east of NE 33rd Ave are quiet in the way that feels earned — mature street trees, kids on bikes, neighbors who actually know each other's names.",
      "The housing is mostly 1910s through 1940s: Craftsmans, bungalows, and the occasional Dutch Colonial. Lots are mid-sized, houses are well-maintained, and the neighborhood has one of the lowest turnover rates in Portland. Fernwood Middle School is the feeder for Grant High, which is the most sought-after comprehensive high school in PPS. That pipeline matters to buyers with kids, and it's priced into the houses.",
      "Low turnover cuts both ways. You won't find much inventory, and when something comes up, you're competing with buyers who've been waiting. Median prices have pushed past $700k, and the lower end of the range doesn't stay on market long. If you need to buy quickly, Beaumont is not a patient neighborhood. Come in with a lender letter ready and your terms tight.",
    ],
    personality: "Fremont Street shops, quiet streets, zero for-sale signs",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Beaumont+Wilshire+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Beaumont+Wilshire+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 74,
    bikeScore: 82,
    transitScore: 54,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Beaumont Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Fernwood Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
      { name: "Beverly Cleary School", type: "elementary", grades: "K–5", rating: 7 },
    ],
    parks: [
      {
        name: "Wilshire Park",
        amenities: ["basketball courts", "playground", "open lawn", "picnic area"],
      },
      {
        name: "Beaumont Park",
        amenities: ["playground", "open lawn", "quiet neighborhood green"],
      },
    ],
    restaurants: [
      {
        name: "Empire Provisions",
        cuisine: "Deli / Charcuterie",
        vibe: "Excellent sandwiches and house-cured meats on Fremont — worth the line at lunch",
      },
      {
        name: "Tabla Mediterranean Bistro",
        cuisine: "Mediterranean",
        vibe: "Neighborhood dinner spot on Fremont, reliable and well-priced for the quality",
      },
      {
        name: "Gado Gado",
        cuisine: "Indonesian",
        vibe: "One of Portland's best restaurants, period — the peanut sauce is the reason people drive here from other neighborhoods",
      },
    ],
    coffee: [
      {
        name: "Anchor Coffee",
        vibe: "Small, neighborhood-loyal, NE Fremont — regulars leave their mugs on the shelf",
      },
      {
        name: "Stumptown Coffee Roasters",
        vibe: "Closest location is on Belmont but worth noting — the NE crowd ends up here on weekends",
      },
    ],
    bars: [
      {
        name: "The Bye and Bye",
        vibe: "Vegan bar on Alberta — not in the neighborhood but where Beaumont residents go when they want actual nightlife",
      },
      {
        name: "Fremont Station",
        vibe: "Low-key neighborhood bar on Fremont, not a destination, but it's yours if you live nearby",
      },
    ],
    medianHomePrice: 710000,
    priceRange: { low: 560000, high: 1100000 },
    commuteToDowntown:
      "20–25 min by car, 25 min by bike via NE Broadway or the Sullivan's Gulch trail, 35 min on bus Line 75",
    faqs: [
      {
        q: "Why is Beaumont-Wilshire so expensive?",
        a: "Low supply, high demand, and a school pipeline that buyers will pay for. The Grant High attendance boundary brings buyers who want a strong public high school option without paying private school tuition. When you combine that with genuinely few listings and a neighborhood that rarely sees turnover, prices stay elevated. You're not buying a house — you're buying into a long-term hold.",
      },
      {
        q: "What's the commute like from Beaumont-Wilshire to downtown?",
        a: "Driving is 20–25 minutes outside of rush hour and 30–40 with traffic on NE Broadway or NE 33rd. Biking the Sullivan's Gulch path to the Lloyd District and across the Steel or Burnside Bridge takes about 25 minutes. Bus service exists but isn't fast — the 75 line runs along Fremont and connects to MAX at the Lloyd Center.",
      },
      {
        q: "What are the schools like in Beaumont-Wilshire?",
        a: "Beverly Cleary (elementary) and the Grant High pipeline are the draws. Grant is one of PPS's more functional comprehensive high schools — strong electives, competitive sports programs, and a student body that broadly reflects NE Portland. Like all Portland public schools, individual classroom experiences vary by year and teacher. The boundary has shifted before; verify your address feeds where you expect before buying.",
      },
      {
        q: "How competitive is the Beaumont-Wilshire housing market?",
        a: "Very. Houses that are correctly priced and in good condition routinely attract multiple offers. The inventory is chronically low — some years fewer than 40 homes sell in the entire neighborhood. If you're a serious buyer, get your financing locked in before you start looking. Coming in pre-approved but without a rate lock is how people lose houses here.",
      },
    ],
    testimonials: [
      {
        quote:
          "We lost three houses before we got this one. Bri helped us tighten up our offer structure — shorter inspection period, escalation clause with a hard cap, strong earnest money. The fourth house, we got it at $38k over asking and we don't regret a dollar.",
        author: "Sarah and Tom K.",
        context: "Bought in Beaumont-Wilshire, 2023, purchase price $748,000",
      },
      {
        quote:
          "I've owned my house on NE 37th for eleven years. Did a cash-out refi last spring to fund a rental purchase. Bri ran the whole thing cleanly — no surprises at closing, rate was better than I expected given the market.",
        author: "David M.",
        context: "Cash-out refinance, Beaumont-Wilshire, 2024",
      },
    ],
    relatedServices: ["purchase", "jumbo", "refinance", "heloc"],
    adjacentNeighborhoods: ["alameda", "rose-city-park", "hollywood", "irvington"],
    seo: {
      title: "Buying a Home in Beaumont-Wilshire, Portland OR | The Lindley Team",
      description:
        "Honest guide to Beaumont-Wilshire real estate: home prices, schools, Grant High, and what buyers actually need to know. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "alameda",
    name: "Alameda",
    city: "Portland",
    state: "OR",
    description: [
      "Alameda Ridge runs diagonally across NE Portland, and on a clear day from the upper streets you can see both Mt. Hood and Mt. St. Helens at the same time. The streets curve around the hillside — they don't follow the Portland grid — which gives the neighborhood an unusual physical presence for a city this flat. Houses from the 1920s and 1930s: large Craftsmans, Tudor Revivals, and a few Colonial Revivals that look slightly out of place and are usually the most expensive things on the block.",
      "Alameda Elementary has a strong reputation within PPS and is one of the reasons families target this specific neighborhood over adjacent Beaumont-Wilshire. There's no commercial district inside Alameda itself — for coffee or dinner you're driving or biking to NE Fremont Street to the west, which is lined with the Beaumont Village shops. That's not a complaint from most residents; it keeps the neighborhood genuinely quiet. Streets are wide, parking is easy, and Friday nights don't have bar noise.",
      "The price point is real: the floor on a single-family home in Alameda is around $750k, and the ceiling on a well-restored large Craftsman has broken $1.4 million more than once. Buyers who come in expecting Beaumont prices and find themselves looking at Alameda listings are usually surprised in the wrong direction. These are not starter homes. If you're looking at a jumbo loan threshold, you're looking at Alameda.",
    ],
    personality: "Hilltop Craftsmans with mountain views and zero commercial noise",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Alameda+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Alameda+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 68,
    bikeScore: 72,
    transitScore: 48,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Alameda Elementary", type: "elementary", grades: "K–5", rating: 8 },
      { name: "Fernwood Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Alameda Park",
        amenities: ["playground", "open lawn", "quiet residential park"],
      },
      {
        name: "Grant Park",
        amenities: ["outdoor pool", "tennis courts", "playground", "picnic shelters", "open lawn"],
      },
    ],
    restaurants: [
      {
        name: "Gado Gado",
        cuisine: "Indonesian",
        vibe: "Five minutes west on Fremont — one of Portland's best, worth the trip every time",
      },
      {
        name: "Tabla Mediterranean Bistro",
        cuisine: "Mediterranean",
        vibe: "Reliable neighborhood dinner on Fremont, been a local anchor for years",
      },
      {
        name: "Irving Street Kitchen",
        cuisine: "American",
        vibe: "More of a drive to NW but where Alameda residents go for a proper date night",
      },
    ],
    coffee: [
      {
        name: "Anchor Coffee",
        vibe: "Closest true neighborhood coffee shop, NE Fremont — small, locals only",
      },
      {
        name: "Water Avenue Coffee",
        vibe: "Better beans, worth driving for on a weekend morning",
      },
    ],
    bars: [
      {
        name: "The Cleaners at the Ace",
        vibe: "Not nearby but where Alameda's younger crowd ends up on weekends",
      },
      {
        name: "Fremont Station",
        vibe: "Walking distance, unpretentious, exactly what a neighborhood bar should be",
      },
    ],
    medianHomePrice: 820000,
    priceRange: { low: 750000, high: 1450000 },
    commuteToDowntown:
      "22–28 min by car, 30 min by bike via NE 33rd to Sullivan's Gulch trail, limited direct bus service",
    faqs: [
      {
        q: "What makes Alameda homes so expensive compared to nearby neighborhoods?",
        a: "Location on the ridge, large lot sizes, quality of original construction, and the school zone. Alameda Elementary is one of the better-regarded elementary schools in PPS, and the houses are genuinely bigger than what you find in adjacent neighborhoods. You're also buying into a neighborhood that has maintained its character for 80 years. That stability costs money.",
      },
      {
        q: "Do I need a jumbo loan to buy in Alameda?",
        a: "Probably, yes. The conforming loan limit for 2025 is $806,500. With most Alameda houses priced above $800k and a standard down payment, you'll be in jumbo territory. Jumbo loans have different underwriting requirements — typically tighter debt-to-income limits and sometimes higher reserves. We work jumbo loans regularly and can walk you through exactly what you'll need.",
      },
      {
        q: "Is Alameda walkable?",
        a: "Less than you might expect for inner NE Portland. The hillside location means you're biking or driving to Fremont Street for coffee or groceries rather than walking. It's not a car-free lifestyle neighborhood the way Buckman or Alberta is. If you're buying in Alameda, you're buying for the house, the schools, and the views — not the walk score.",
      },
      {
        q: "How are the schools in Alameda?",
        a: "Alameda Elementary has a consistently strong reputation within PPS — rated higher than most Portland elementary schools and with active parent involvement. Fernwood feeds into Grant High, which is one of the more stable and comprehensive PPS high schools. As always with PPS, verify boundaries before purchasing — attendance zones have shifted.",
      },
    ],
    testimonials: [
      {
        quote:
          "We moved from San Francisco and were used to jumbo loans, but Oregon's process was different than we expected. Bri explained the reserve requirements and DTI thresholds clearly upfront. Closed at $1.1M without drama.",
        author: "Rachel and James P.",
        context: "Jumbo purchase, Alameda, 2024",
      },
      {
        quote:
          "Used equity from the Alameda house to buy a rental in St. Johns. Bri structured the HELOC so the numbers actually worked instead of just telling me what I wanted to hear.",
        author: "Michael O.",
        context: "HELOC, Alameda, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "heloc", "refinance"],
    adjacentNeighborhoods: ["beaumont-wilshire", "rose-city-park", "irvington", "hollywood"],
    seo: {
      title: "Buying a Home in Alameda, Portland OR | The Lindley Team",
      description:
        "Alameda real estate guide: hilltop Craftsmans, mountain views, Alameda Elementary, and what jumbo buyers need to know. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "rose-city-park",
    name: "Rose City Park",
    city: "Portland",
    state: "OR",
    description: [
      "Rose City Golf Course runs along the western edge of the neighborhood — 18 holes operated by the city, open to the public, and surrounded by some of the most underpriced housing in inner NE Portland. The residential streets between NE 57th and NE 72nd are mostly 1920s and 1930s bungalows: small front yards, covered porches, and the occasional larger Craftsman that someone bought for $180k in 2001 and renovated well. The neighborhood sits between Hollywood to the west and Beaumont-Wilshire to the north, which means the bones are similar but the prices are not.",
      "Hollywood Transit Center is close enough that the MAX Red and Green lines are genuinely useful from here. Buyers who are priced out of Irvington often land in Rose City Park and find the housing type is nearly identical — same bungalow stock, same era, similar street scale — for meaningfully less money. That story has been true for a decade and the gap is narrowing. The commercial options are thin inside the neighborhood itself, but Sandy Blvd and the Hollywood district shops and restaurants are a short bike ride away.",
      "The trade-offs are real. NE Sandy Boulevard is loud if you're on a block close to it, and the closer you get to the Hollywood district, the more the neighborhood transitions toward apartment density. The golf course is a strong boundary on the west side, but it also means the blocks on NE Halsey and NE Glisan near 57th have consistent cut-through traffic from the course. School options are PPS standard — Rose City Park Elementary feeds into Grant High via Beaumont Middle.",
    ],
    personality: "Irvington bungalows, three zip codes cheaper",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Rose+City+Park+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Rose+City+Park+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 72,
    bikeScore: 80,
    transitScore: 64,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Rose City Park Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Beaumont Middle School", type: "middle", grades: "6–8", rating: 6 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Rose City Golf Course",
        amenities: ["18-hole public golf course", "walking paths along perimeter"],
      },
      {
        name: "Rose City Park",
        amenities: ["playground", "open lawn", "picnic area"],
      },
    ],
    restaurants: [
      {
        name: "Luce",
        cuisine: "Italian",
        vibe: "Neighborhood Italian on NE 28th, close enough to be the answer for a Tuesday dinner out",
      },
      {
        name: "Pastini",
        cuisine: "Italian",
        vibe: "Casual, reliable, and the kids eat everything on the menu",
      },
      {
        name: "Cricket Cafe",
        cuisine: "Breakfast",
        vibe: "Breakfast on Belmont — the line moves, the food justifies it",
      },
    ],
    coffee: [
      {
        name: "Heart Coffee Roasters",
        vibe: "Closest specialty roaster, worth the short drive to NE 22nd location",
      },
      {
        name: "Stumptown Coffee Roasters",
        vibe: "Belmont location is the neighborhood default for weekend mornings",
      },
    ],
    bars: [
      {
        name: "The Hollywood Theatre Bar",
        vibe: "Bar attached to the Hollywood Theatre — you stay for a beer after the movie and end up closing it down",
      },
      {
        name: "Tanuki",
        vibe: "Izakaya on NE Burnside, short bike ride, strong cocktails",
      },
    ],
    medianHomePrice: 555000,
    priceRange: { low: 420000, high: 780000 },
    commuteToDowntown:
      "25–30 min by car, 20 min by MAX Red/Green line from Hollywood TC, 25 min by bike via NE Broadway",
    faqs: [
      {
        q: "How is Rose City Park different from Beaumont-Wilshire?",
        a: "The housing stock is similar — same bungalow era, same lot sizes, comparable condition on the renovated ones — but Rose City Park is roughly $150k cheaper at the median. The trade-off is proximity to Sandy Blvd and the Hollywood district, which adds traffic and noise on some blocks. If the Grant High school boundary matters to you, confirm your specific address because parts of Rose City Park feed differently.",
      },
      {
        q: "Is the MAX useful from Rose City Park?",
        a: "Yes, more than most inner NE neighborhoods. Hollywood Transit Center is walking or biking distance from most of the neighborhood. The Red Line goes to the airport and the Green Line covers the Lloyd District, downtown, and Powell. If you work downtown or in the Lloyd District and don't need a car for work, Rose City Park is one of the more transit-functional inner NE options.",
      },
      {
        q: "What's the catch with Rose City Park's lower price?",
        a: "Proximity to Sandy Blvd on the western edge, which is a commercial corridor with some grit. A few blocks near the Hollywood TC feel more urban-transitional than the deep residential streets near the golf course. It's not dangerous — it's just not as quiet as Beaumont or Alameda. Know which blocks you're buying on before you make an offer.",
      },
      {
        q: "Are there FHA-eligible homes in Rose City Park?",
        a: "Yes. The price range here includes a lot of homes in the $420k–$600k range that work well for FHA financing. Most are single-family detached, which clears the property eligibility bar easily. The main FHA consideration in this price range is making sure the house passes the FHA appraisal — older bungalows sometimes have deferred maintenance that triggers conditions.",
      },
    ],
    testimonials: [
      {
        quote:
          "We kept losing in Beaumont and Irvington. Bri suggested we look at Rose City Park and we were skeptical. Ended up buying on NE 62nd for $537k — three bedrooms, garage, original hardwoods. We would have paid $700k for the same house eight blocks west.",
        author: "Nadia and Chris F.",
        context: "First-time buyers, Rose City Park, 2023",
      },
      {
        quote:
          "FHA loan, 3.5% down, first house. Bri walked us through every step and never made us feel like we were a less serious buyer than the conventional loan people.",
        author: "Erin S.",
        context: "FHA purchase, Rose City Park, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance"],
    adjacentNeighborhoods: ["beaumont-wilshire", "hollywood", "alameda", "sabin"],
    seo: {
      title: "Buying a Home in Rose City Park, Portland OR | The Lindley Team",
      description:
        "Rose City Park real estate: bungalows near the golf course, MAX access, and better prices than adjacent neighborhoods. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "hollywood",
    name: "Hollywood",
    city: "Portland",
    state: "OR",
    description: [
      "The Hollywood Theatre on NE Sandy Boulevard has been showing films since 1926 and is still independently operated — repertory cinema, first runs, and a bar inside. It's the neighborhood's most important landmark and a good signal of what Hollywood District is at its best: old bones repurposed well. Sandy Boulevard is the commercial spine from NE 33rd to around NE 52nd, and it runs the full range from genuinely excellent restaurants to check-cashing storefronts within four blocks of each other. You take the strip as a whole or you don't take it.",
      "Hollywood Transit Center sits at NE 42nd and Halsey and is one of the most functional transit hubs in east Portland — MAX Red and Green lines, eight TriMet bus routes, and covered waiting areas. For buyers who work downtown or at OHSU and don't want to drive, this is one of the few NE neighborhoods where transit is a real alternative. The housing mix is broader than most NE neighborhoods: single-family 1920s–1950s homes on the residential streets, 1990s and 2000s condo buildings closer to Sandy, and enough newer apartment complexes to keep the neighborhood's density visible.",
      "Hollywood's median for single-family homes sits around $480k, but the neighborhood's reputation is mixed enough that buyers with options sometimes skip it. The blocks east of NE 42nd toward the transit center have more foot traffic and some of the grit that comes with commercial density. A few blocks off Sandy in either direction and it quiets down considerably. It's not a neighborhood you buy into without knowing which end of Sandy you're on.",
    ],
    personality: "Transit-first, Sandy Blvd grit, Hollywood Theatre is worth it",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Hollywood+District+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Hollywood+District+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 85,
    bikeScore: 82,
    transitScore: 78,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Beverly Cleary School", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Laurelhurst School", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Grant Park",
        amenities: ["outdoor pool", "tennis courts", "playground", "large open lawn", "picnic shelters"],
      },
      {
        name: "Normandale Park",
        amenities: ["playground", "open lawn", "picnic area"],
      },
    ],
    restaurants: [
      {
        name: "Pok Pok",
        cuisine: "Thai",
        vibe: "The Sandy Blvd location — still one of Portland's best known restaurants, loud and worth every minute of the wait",
      },
      {
        name: "Renata",
        cuisine: "Italian",
        vibe: "Not in Hollywood but where the neighborhood goes for a special occasion — worth knowing",
      },
      {
        name: "Tusk",
        cuisine: "American / Vegetable-forward",
        vibe: "Dinner spot on Sandy, creative menu, locals-first vibe",
      },
    ],
    coffee: [
      {
        name: "Coava Coffee Roasters",
        vibe: "The Sandy location is newer and less iconic than Grand Ave, but the coffee is identical and the line is shorter",
      },
      {
        name: "Never Coffee",
        vibe: "NE neighborhood stalwart, small space, strong lattes, familiar faces",
      },
    ],
    bars: [
      {
        name: "The Hollywood Theatre Bar",
        vibe: "Connected to the cinema — stay for a beer after the film, become a regular without trying",
      },
      {
        name: "Quaintrelle",
        vibe: "Wine bar on NE 28th, quieter than most options near Sandy",
      },
    ],
    medianHomePrice: 480000,
    priceRange: { low: 350000, high: 750000 },
    commuteToDowntown:
      "20 min by MAX Red/Green line from Hollywood TC, 25 min by car, 22 min by bike via NE Broadway",
    faqs: [
      {
        q: "Is Hollywood District a good place to buy a home?",
        a: "Depends on the block and what you're optimizing for. If transit access matters, it's one of the best-positioned neighborhoods in NE Portland. The residential streets a few blocks off Sandy are genuinely quiet and well-priced. The streets adjacent to the transit center or right on Sandy have more density and traffic. Do a weekday evening walk before you make an offer — the neighborhood shows itself honestly.",
      },
      {
        q: "What are the condo and multi-family options like in Hollywood?",
        a: "More than most NE neighborhoods. There are 1990s–2000s condo buildings within a few blocks of the transit center, plus newer apartment complexes along Sandy. Condo pricing starts around $250k for smaller units. FHA and conventional both work for condos here, though HOA dues and condo document reviews add time to the process. We handle condo loans regularly and know what to look for.",
      },
      {
        q: "How does the MAX affect home values in Hollywood?",
        a: "It's a genuine asset for buyers who use it, and it's priced in on the blocks closest to Hollywood TC. The trade-off is that MAX corridors also bring pedestrian traffic and commercial density that not every buyer wants. Houses one to three blocks off the main Sandy/Halsey corridor get the transit proximity without the street-level noise.",
      },
      {
        q: "What's the school situation in Hollywood?",
        a: "The Grant High boundary covers most of Hollywood District, and Grant is one of PPS's better-functioning comprehensive high schools. Elementary options include Beverly Cleary and Laurelhurst School, both of which have solid reputations. Middle school feeds through the same PPS system as the rest of NE. Confirm your specific address with PPS boundary maps before buying.",
      },
    ],
    testimonials: [
      {
        quote:
          "I specifically wanted to be close to the MAX for work. Bri helped me understand the difference between the blocks that feel urban-loud versus the ones that are just transit-convenient. Got a two-bed on NE 46th for $467k and I bike to the Hollywood TC in four minutes.",
        author: "Jason W.",
        context: "First-time buyer, Hollywood District, 2023",
      },
      {
        quote:
          "Divorce situation — needed to refinance the house into my name only within a tight timeline. Bri moved it through without making it more complicated than it needed to be. Closed in 28 days.",
        author: "Karen B.",
        context: "Divorce refinance, Hollywood District, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "divorce-lending"],
    adjacentNeighborhoods: ["beaumont-wilshire", "rose-city-park", "sabin", "laurelhurst"],
    seo: {
      title: "Buying a Home in Hollywood District, Portland OR | The Lindley Team",
      description:
        "Hollywood District real estate: MAX access, Sandy Blvd, and honest home prices. What buyers need to know before purchasing in NE Portland's transit hub. The Lindley Team.",
    },
  },

  {
    slug: "sabin",
    name: "Sabin",
    city: "Portland",
    state: "OR",
    description: [
      "Sabin Community Garden on NE 14th is one of the largest community gardens in Portland — over 200 plots, a long waiting list, and the kind of place that actually explains a neighborhood. The people who tend it have been there for years. Sabin sits between NE Alberta Street to the north and NE Fremont to the south, which means you're one or two blocks from two of the better commercial streets in inner NE without being in either Alberta Arts District or Beaumont Village. That positioning is exactly why Sabin works as a neighborhood.",
      "The housing is dense: bungalows on 25x100-foot lots, built mostly in the 1920s and 1930s, sitting close to each other and close to the sidewalk. It's not the spacious Craftsman on a 7,000-square-foot lot that you find in Alameda. Sabin houses are smaller, the yards are narrow, and parking is always a project. But you can walk to coffee on NE 15th, walk to dinner on Alberta, and be at NE Fremont shops without getting in your car. The trade-off is real and intentional.",
      "Street parking is genuinely difficult on residential blocks near Alberta. Summer weekends, when Alberta and its adjacent streets fill up with people from other neighborhoods, the parking crunch extends into Sabin blocks that used to be reliable. Buyers coming from the suburbs should understand this before purchase — off-street parking adds real value here. The median is around $560k, which is fair for inner NE Portland, but Sabin has seen some of the fastest appreciation in the area over the last five years.",
    ],
    personality: "One block from Alberta, half the noise, most of the walkability",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Sabin+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Sabin+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 83,
    bikeScore: 90,
    transitScore: 68,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Sabin Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 4 },
      { name: "Grant High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Sabin Community Garden",
        amenities: ["200+ community garden plots", "composting area", "tool sharing"],
      },
      {
        name: "Fernhill Park",
        amenities: ["playground", "sports fields", "picnic area", "walking paths"],
      },
    ],
    restaurants: [
      {
        name: "Ox Restaurant",
        cuisine: "Argentine / Wood-fire",
        vibe: "One of Portland's best restaurants, Alberta Arts District — a short walk from most Sabin streets",
      },
      {
        name: "Tusk",
        cuisine: "American / Vegetable-forward",
        vibe: "Good dinner, thoughtful menu, rotating seasonal focus",
      },
      {
        name: "Luce",
        cuisine: "Italian",
        vibe: "Reliable, not trying too hard, the right call on a Tuesday",
      },
    ],
    coffee: [
      {
        name: "Never Coffee",
        vibe: "NE neighborhood institution — strong espresso, small space, regulars run the show",
      },
      {
        name: "Stumptown Coffee Roasters",
        vibe: "Belmont location is the closest outpost; many Sabin residents make the trip weekly",
      },
    ],
    bars: [
      {
        name: "The Bye and Bye",
        vibe: "Vegan bar on NE Alberta — the patio in summer is where this neighborhood goes to be social",
      },
      {
        name: "Expatriate",
        vibe: "NE 30th Ave cocktail bar, lower key than Alberta spots, worth knowing",
      },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 430000, high: 790000 },
    commuteToDowntown:
      "18–25 min by car, 22 min by bike via NE Broadway or the Sullivan's Gulch path, 35 min on bus Line 72",
    faqs: [
      {
        q: "How does Sabin compare to buying in the Alberta Arts District?",
        a: "Sabin is usually $30k–$80k cheaper than an equivalent house on the Alberta side of the street. The commercial noise and weekend foot traffic are lower because you're not on Alberta itself. You get walkability to Alberta without the summer circus. The trade-off is that the school boundaries for Sabin feed into Jefferson rather than Grant for high school — that matters to some buyers significantly.",
      },
      {
        q: "What are Sabin's schools like?",
        a: "Honest answer: the school picture is more complicated here than in Beaumont or Alameda. Sabin Elementary is solid for PPS. The high school boundary is Jefferson for much of Sabin, and Jefferson's academic profile is weaker than Grant's. Some Sabin families use PPS's transfer process to access Grant or other high schools — that process has a waitlist and isn't guaranteed. If the high school assignment matters, get the exact boundary confirmed for the specific address you're buying.",
      },
      {
        q: "Is parking really that bad in Sabin?",
        a: "On the blocks between NE 10th and NE 18th, yes, especially from May through September when Alberta draws visitors. If you're looking at a house without a garage or dedicated off-street parking, budget for the reality that you'll sometimes park two or three blocks from home on a Friday night. Houses with a driveway or garage carry a real premium here for exactly this reason.",
      },
      {
        q: "What's the Sabin Community Garden wait time?",
        a: "The waitlist has historically been 2–4 years depending on plot size. It's one of the longest in Portland. There are smaller neighborhood gardens nearby, and several Sabin homeowners have good-sized backyard growing space. It's a neighborhood detail worth knowing — if garden access is part of your lifestyle, plan for the wait.",
      },
    ],
    testimonials: [
      {
        quote:
          "We wanted Alberta walkability without the Alberta price. Bri showed us three Sabin houses in one afternoon, explained the school boundary situation clearly, and we made an offer the same day. Closed for $547k, one block from NE 15th coffee.",
        author: "Theo and Margot L.",
        context: "Purchase, Sabin, 2023",
      },
      {
        quote:
          "Used a cash-out refinance to do the kitchen remodel we'd been putting off. Bri helped us figure out whether it made more sense than a HELOC given our timeline. Straightforward process, no surprises.",
        author: "Dana K.",
        context: "Cash-out refinance, Sabin, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "heloc", "cash-out"],
    adjacentNeighborhoods: ["alberta-arts", "rose-city-park", "hollywood", "cully", "irvington"],
    seo: {
      title: "Buying a Home in Sabin, Portland OR | The Lindley Team",
      description:
        "Sabin neighborhood real estate: bungalows near Alberta, community garden, and honest school info. What buyers need to know. The Lindley Team, Portland mortgage lenders.",
    },
  },

  {
    slug: "cully",
    name: "Cully",
    city: "Portland",
    state: "OR",
    description: [
      "Cully Park finally opened in 2021 after nearly two decades of community advocacy — 25 acres of green space on land that was a former gravel pit, with a covered outdoor stage, community garden plots, and a skate feature. It's the largest new park Portland has built in years, and it belongs to a neighborhood that waited a long time for it. Cully is Portland's largest neighborhood by area, running roughly from NE Alberta Street north to Prescott, and from NE 42nd east to NE 72nd. It does not feel like one neighborhood — it feels like six different blocks arranged in a loose grid, some of them fully settled residential and some of them still working out what they are.",
      "The housing is more varied than most inner Portland neighborhoods: post-war ranches, original bungalows, some newer construction infill, and a stretch along Columbia Blvd that transitions into industrial. There are blocks in Cully that feel like mid-century suburban Portland — wide lots, mature trees, garages, backyards that actually function. There are also blocks where a vinyl-sided rental abuts a storage facility. The southern half of Cully, near Alberta, tends to be more settled; the northern portions near Prescott and Columbia feel more in-transition. The Latino community that has anchored Cully for decades has maintained cultural businesses — taquerias, a Mexican grocery — that give the neighborhood genuine character.",
      "Cully is the most affordable neighborhood in inner NE Portland, and that attracts investor buyers who are active in the market. When a distressed house comes up below $400k, it gets multiple offers from people who will wholesale it or flip it — which can mean competing against cash buyers as a financed purchaser. The FHA and conventional markets are functional here in the $380k–$550k range, but you need to understand which blocks you're on, what the property condition triggers might be on an appraisal, and where Cully is going rather than just where it's been.",
    ],
    personality: "Portland's biggest neighborhood: affordable, uneven, genuinely itself",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Cully+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Cully+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 63,
    bikeScore: 78,
    transitScore: 57,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Rigler Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Faubion School", type: "elementary", grades: "K–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 4 },
    ],
    parks: [
      {
        name: "Cully Park",
        amenities: [
          "25-acre park",
          "covered outdoor stage",
          "community garden",
          "skate feature",
          "walking paths",
          "open lawn",
        ],
      },
      {
        name: "Whitaker Ponds Nature Park",
        amenities: ["ponds", "wildlife habitat", "nature trails", "birdwatching"],
      },
    ],
    restaurants: [
      {
        name: "Por Que No?",
        cuisine: "Mexican",
        vibe: "Beloved Portland taqueria — Alberta location is the nearest but worth the short drive from any Cully block",
      },
      {
        name: "Taqueria Los Gorditos",
        cuisine: "Mexican",
        vibe: "In-neighborhood tacos, cash-friendly, no tourist markup, exactly what the neighborhood has been doing for years",
      },
      {
        name: "Lovely's Fifty Fifty",
        cuisine: "Pizza / Ice Cream",
        vibe: "Mississippi Ave — not in Cully but a regular destination for the northern edge of the neighborhood",
      },
    ],
    coffee: [
      {
        name: "Coava Coffee Roasters",
        vibe: "Nearest quality coffee roaster — Cully residents make the drive to the Sandy location for good beans",
      },
      {
        name: "Case Study Coffee",
        vibe: "Closest specialty coffee shop with a sit-down vibe, Lloyd District location",
      },
    ],
    bars: [
      {
        name: "Breakside Brewery",
        vibe: "The Dekum location in Concordia is Cully's nearest craft brewery with a real taproom",
      },
      {
        name: "The Alibi",
        vibe: "North Portland tiki bar, a drive from Cully but an institution — worth going once",
      },
    ],
    medianHomePrice: 450000,
    priceRange: { low: 350000, high: 620000 },
    commuteToDowntown:
      "25–35 min by car depending on traffic, 30 min by bike via NE 42nd to Sullivan's Gulch, 40 min on bus Line 71 or 72",
    faqs: [
      {
        q: "Is Cully safe?",
        a: "It's a mixed picture. The residential streets in the southern half of Cully, closer to Alberta, are settled and quiet. Some northern blocks near Columbia Blvd have more crime incidents — check Portland's crime data maps rather than relying on neighborhood reputation alone. Like any large, economically mixed neighborhood, Cully varies block by block. A two-block difference can be a meaningful difference.",
      },
      {
        q: "Why are Cully homes cheaper than nearby NE neighborhoods?",
        a: "Larger neighborhood, more varied housing quality, less walkable commercial density, and a reputation that hasn't fully followed the physical improvements being made. Cully Park opening, the Concordia Brewing taproom on the southern edge, and continued infill development are closing the gap. The discount is real but it's compressing. What you buy in Cully for $430k today would have been $350k five years ago and might be $500k in five more.",
      },
      {
        q: "How do investor buyers affect the Cully market?",
        a: "Meaningfully, especially at the lower price points. Houses priced under $400k in distressed condition often attract cash offers from wholesale buyers and flippers. As a financed buyer, you can compete — but you need a fast pre-approval, strong earnest money, and realistic expectations on inspection flexibility. We've helped financed buyers win in Cully; it requires the offer to be clean and the lender to be fast.",
      },
      {
        q: "What's the Cully Park development story?",
        a: "The land sat as a gravel pit for decades while the community advocated for a park. After nearly 20 years of advocacy and $15M in funding, Cully Park opened in 2021. It's now one of the best neighborhood parks in NE Portland — 25 acres, designed with community input, with a skate feature, stage, and garden. It's the kind of investment that changes a neighborhood's trajectory. Buyers paying attention to long arcs should notice it.",
      },
    ],
    testimonials: [
      {
        quote:
          "We had $390k to spend and didn't think we could buy anything decent in inner NE. Bri walked us through Cully specifically — showed us which streets to focus on and why. We bought a solid three-bed on NE 57th for $378k. The neighbors have lived there for 20 years.",
        author: "Megan and Roy T.",
        context: "First-time buyers, Cully, 2023",
      },
      {
        quote:
          "VA loan, no down payment, bought on NE 52nd for $415k. Bri handled the VA appraisal process — there were a couple of flagged items on the property and she worked through it without panicking. Closed on time.",
        author: "Staff Sgt. Andre M. (ret.)",
        context: "VA purchase, Cully, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va", "investment", "refinance"],
    adjacentNeighborhoods: ["sabin", "alberta-arts", "kenton", "rose-city-park", "hollywood"],
    seo: {
      title: "Buying a Home in Cully, Portland OR | The Lindley Team",
      description:
        "Cully neighborhood real estate: Portland's largest and most affordable inner NE neighborhood. Honest guide to prices, blocks, schools, and what buyers need to know. The Lindley Team.",
    },
  },

{
    slug: "sunnyside",
    name: "Sunnyside",
    city: "Portland",
    state: "OR",
    description: [
      "The Powell's Books annex on SE Hawthorne is the size of a small library. On a Saturday you'll spend two hours in there without meaning to, then walk across the street to Paxton Gate and spend another twenty minutes looking at taxidermied animals and oddities. Hawthorne Boulevard is Sunnyside's main spine — it runs east from the Willamette past cafes, bars, bookstores, and restaurants for about two miles, dense enough that you can forget you have a car for weeks at a time. The Produce Row neighborhood to the north used to be industrial warehouses; a lot of it still is, but that's changing.",
      "The housing is almost all early 1900s — small lots, houses close together, a lot of bungalows and foursquares from the 1910s and 1920s. Apartment buildings are scattered throughout, and ADUs behind the main houses are common. Division Street forms the southern boundary and has developed into one of Portland's best restaurant corridors over the past decade. People move here because they want to walk to everything and don't mind smaller houses in exchange for location. The bike infrastructure is genuinely good — SE Ankeny, Salmon, and the Hawthorne Bridge path get you downtown in under 15 minutes.",
      "Parking is the ongoing argument Sunnyside residents have with the neighborhood. Street parking near Hawthorne on weekend evenings is not a given, and several blocks have no off-street parking at all. The housing stock is old — deferred maintenance issues show up regularly in inspections. Houses on very small lots feel close to neighbors. If you need a yard and quiet evenings, this isn't the right fit. If you want walkability without the Pearl District price tag, Sunnyside is one of the better options left in inner SE.",
    ],
    personality: "Hawthorne bookstores, bikes, and no parking anywhere",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Sunnyside+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Sunnyside+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 92,
    bikeScore: 97,
    transitScore: 68,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Sunnyside Environmental School", type: "elementary", grades: "K–8", rating: 7 },
      { name: "Mt. Tabor Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Cleveland High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Sewallcrest Park",
        amenities: ["open lawn", "basketball court", "views of SE Portland"],
      },
      {
        name: "Ladd's Addition Rose Gardens",
        amenities: ["rose test gardens", "historic diamond-grid streets", "walking paths"],
      },
      {
        name: "Berkeley Park",
        amenities: ["playground", "open lawn", "picnic area"],
      },
    ],
    restaurants: [
      { name: "Tasty n Daughters", cuisine: "American", vibe: "SE Hawthorne brunch institution — long wait, worth it once a month" },
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "One of Portland's best restaurants, Hawthorne and 29th, reservations fill fast" },
      { name: "Pok Pok", cuisine: "Thai", vibe: "The original SE Division location, still drawing lines after two decades" },
    ],
    coffee: [
      { name: "Stumptown Coffee Roasters", vibe: "The original SE Division location — still the measuring stick for Portland espresso" },
      { name: "Extracto Coffee Roasters", vibe: "Quieter Hawthorne outpost, good for getting actual work done" },
    ],
    bars: [
      { name: "Produce Row Cafe", vibe: "Long-running SE Oak bar with one of Portland's better draft beer lists, low-key crowd" },
      { name: "Horse Brass Pub", vibe: "British-style pub on SE Belmont, 300+ beers, no television pretense" },
    ],
    medianHomePrice: 560000,
    priceRange: { low: 340000, high: 850000 },
    commuteToDowntown: "12–15 min by bike via Hawthorne Bridge, 15–20 min by car, 20 min by bus on Line 14",
    faqs: [
      {
        q: "What's it actually like to live in Sunnyside day to day?",
        a: "Very walkable. You can go a week without driving if you're buying groceries at Market of Choice on SE Hawthorne and eating or drinking locally. The bike network is excellent — SE Ankeny and Salmon are neighborhood greenways that connect to downtown quickly. The flip side is that it's dense and street parking is genuinely scarce, especially on weekends near Hawthorne.",
      },
      {
        q: "How much does a house cost in Sunnyside?",
        a: "Median single-family is around $560,000. There's also a real condo and ADU market here — attached units and smaller condos start around $340,000–$380,000. Houses on the larger lots between Division and Hawthorne closer to SE 30th push into the $700s. Well-conditioned houses in good locations sell quickly.",
      },
      {
        q: "Are the Portland Public Schools in Sunnyside worth it?",
        a: "Mixed. Sunnyside Environmental School is well-regarded and has a distinctive outdoor-learning focus — it's a draw for families. Mt. Tabor Middle is mid-tier by PPS standards. Cleveland High is one of the better comprehensive high schools in the district. Like most PPS schools, family involvement and program quality vary more by classroom than by school.",
      },
      {
        q: "Is Sunnyside safe?",
        a: "Generally yes by Portland standards. Like most inner SE neighborhoods, there's some property crime — car break-ins are more common than violent incidents. The Hawthorne corridor has occasional issues near the bars late at night. Most longtime residents don't feel unsafe walking the neighborhood at night, but it's not a suburb.",
      },
    ],
    testimonials: [
      {
        quote: "We bought a $520k house two blocks from Hawthorne and I haven't filled my gas tank in three months. That wasn't the plan going in — it just happened. Bri helped us figure out the FHA numbers when our down payment wasn't where we thought it needed to be.",
        author: "Kelsey M.",
        context: "First-time buyer in Sunnyside, 2023",
      },
      {
        quote: "The inspection came back with a list. Old knob-and-tube wiring in the attic, the furnace was original. Bri walked us through what we could negotiate and what was just the cost of buying a 1918 house. We still bought it.",
        author: "David and Renata F.",
        context: "Purchased in Sunnyside, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "heloc"],
    adjacentNeighborhoods: ["richmond", "buckman", "mount-tabor", "laurelhurst"],
    seo: {
      title: "Buying a Home in Sunnyside, Portland OR | The Lindley Team",
      description:
        "Honest guide to Sunnyside Portland real estate: home prices, walkability, schools, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "richmond",
    name: "Richmond",
    city: "Portland",
    state: "OR",
    description: [
      "SE Division Street between 20th and 50th might be the best restaurant street in Portland. Ava Gene's has been turning out vegetable-forward plates that make you forget you're not eating meat. Tusk is a few blocks down. Checkerboard Pizza opened on Division and the line has not shortened. The street didn't get here overnight — it took about a decade of incremental openings, and the result is a walkable dining strip that doesn't feel like it was designed by a real estate developer.",
      "Richmond's housing is mostly 1920s — bungalows and foursquares on 4,000–5,000 square foot lots, well-maintained because the neighborhood has been desirable long enough for owners to invest. Clinton Street is a secondary commercial corridor to the south — quieter, more neighborhood-scaled, with a handful of good coffee spots and bars. The houses here are denser than Sellwood but less expensive than Laurelhurst. The neighborhood's sweet spot is the blocks between Division and Clinton, roughly SE 26th to SE 44th.",
      "Division Street has a noise and traffic problem that no amount of good restaurants fixes. On weekend evenings, the street is loud, parking is a competition, and food cart lines stretch half a block. Houses on or very near Division are priced lower for exactly this reason. The neighborhood has also appreciated significantly over the past ten years — what was a relatively affordable inner SE option in 2015 is now firmly in the $580k median range. Clinton Street still has some of that older character, but it won't last forever.",
    ],
    personality: "Portland's best restaurant street, with houses attached",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Richmond+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Richmond+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 88,
    bikeScore: 95,
    transitScore: 64,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Richmond Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Mt. Tabor Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Cleveland High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Colonel Summers Park",
        amenities: ["open lawn", "picnic tables", "Sunday farmers market", "off-leash dog area"],
      },
      {
        name: "Clinton City Park",
        amenities: ["playground", "basketball court", "community garden"],
      },
      {
        name: "Berkeley Park",
        amenities: ["open lawn", "playground", "picnic area"],
      },
    ],
    restaurants: [
      { name: "Ava Gene's", cuisine: "Vegetable-forward", vibe: "SE Division, one of Portland's best restaurants — reservations or a long wait at the bar" },
      { name: "Tusk", cuisine: "American", vibe: "Division Street, natural wines, carefully sourced ingredients, not cheap" },
      { name: "Checkerboard Pizza", cuisine: "Pizza", vibe: "Detroit-style, SE Division, the lines are real and the pizza is worth it" },
    ],
    coffee: [
      { name: "Coava Coffee Roasters", vibe: "SE Division outpost, same quality as the flagship, slightly less cavernous" },
      { name: "Either/Or", vibe: "Clinton Street spot — books on the shelves, slower pace, good for an afternoon" },
    ],
    bars: [
      { name: "Bar Avignon", vibe: "Natural wine bar on SE Division, small, good list, needs a reservation on weekends" },
      { name: "The Bye and Bye", vibe: "Vegan bar on Alberta, technically not Richmond but walkable — worth noting" },
    ],
    medianHomePrice: 580000,
    priceRange: { low: 420000, high: 950000 },
    commuteToDowntown: "14–18 min by bike via Division or Clinton, 18–22 min by car, 25 min on Line 9 bus",
    faqs: [
      {
        q: "How does Richmond compare to Sunnyside or Laurelhurst price-wise?",
        a: "Richmond sits between them. Sunnyside medians around $560k, Richmond around $580k, Laurelhurst pushes into the $700s and above. You get more lot than Sunnyside and more location than Laurelhurst. The houses are good condition 1920s stock — not the fancier Craftsmans you see in Irvington, but solid.",
      },
      {
        q: "What's the parking situation on Division Street?",
        a: "Difficult on Friday and Saturday nights. Street parking within two blocks of Division fills by 6pm on weekends. Most Richmond houses have a driveway or detached garage, so it's less of a daily problem — but if you have guests coming for dinner, manage expectations. The neighborhood is genuinely better approached by bike.",
      },
      {
        q: "Are there good schools in Richmond?",
        a: "Richmond Elementary has a solid reputation within PPS and the parent community is engaged. Mt. Tabor Middle is mid-range. Cleveland High is one of the better comprehensive highs in the district. 'Good' in Portland schools context means good relative to PPS — if you're coming from a suburban district, recalibrate expectations.",
      },
      {
        q: "Is Richmond good for biking?",
        a: "Very good. SE Clinton is a dedicated bike boulevard — low traffic, bike-specific signals at major intersections, connects to the Hawthorne Bridge path downtown. Most of the neighborhood is within easy bike range of downtown, the Central Eastside, and inner SE. It's one of the reasons Richmond has stayed popular as cars become more expensive to operate.",
      },
    ],
    testimonials: [
      {
        quote: "We sold our place in Lake Oswego and bought on SE 36th in Richmond. Size was smaller, price was similar. We walk to dinner three nights a week now. Bri helped us make the math work when we were underwater on the timing.",
        author: "Tom and Claire S.",
        context: "Moved from Lake Oswego to Richmond, 2023",
      },
      {
        quote: "First house, $547,000. I was convinced I couldn't afford inner SE. Bri ran the FHA numbers and showed me I was wrong by about $80,000 in the wrong direction. We closed in 32 days.",
        author: "Nina K.",
        context: "First-time buyer in Richmond, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "heloc", "investment"],
    adjacentNeighborhoods: ["sunnyside", "mount-tabor", "woodstock", "creston-kenilworth", "buckman"],
    seo: {
      title: "Buying a Home in Richmond, Portland OR | The Lindley Team",
      description:
        "Honest guide to Richmond Portland real estate: home prices, the Division Street food scene, schools, and what buyers should know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "mount-tabor",
    name: "Mount Tabor",
    city: "Portland",
    state: "OR",
    description: [
      "Mount Tabor Park sits at the top of an extinct volcano — the only cinder cone inside a U.S. city limit. The park has old-growth Douglas firs, three reservoirs, and a hiking loop that takes about an hour at a reasonable pace. On a clear day from the summit you can see Hood, St. Helens, and Adams. People who live in the surrounding neighborhood have park access most cities don't give you within a national forest. They walk up to it from their backyards.",
      "The houses surrounding the park are some of the best in SE Portland. 1910s–1930s Craftsmans and Victorian foursquares on large, tree-lined lots. The streets are quiet in a way that inner SE usually isn't — wide setbacks, mature trees, and a neighborhood that takes its historic character seriously. Hoyt Arboretum is nearby; the community is connected. People who move here tend to stay. The SE Hawthorne corridor and Division Street are both within easy biking distance for restaurants and errands.",
      "Mount Tabor is expensive relative to most of SE Portland, and the prices reflect how much people want to be here. Median is around $680,000, and well-situated houses near the park push well above that. East Burnside to the north brings noise and traffic to the northern edge of the neighborhood. The Hawthorne commercial strip has become more congested than it used to be. And like all of SE Portland, Portland Public Schools are what they are — families often have strong opinions about specific schools before choosing which block to buy on.",
    ],
    personality: "Hiking trails and Craftsmans, volcano included",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Mount+Tabor+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Mount+Tabor+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 78,
    bikeScore: 85,
    transitScore: 58,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Glencoe Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Mt. Tabor Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Franklin High School", type: "high", grades: "9–12", rating: 6 },
    ],
    parks: [
      {
        name: "Mount Tabor Park",
        amenities: ["volcanic cinder cone", "old-growth Douglas firs", "three reservoirs", "hiking trails", "off-leash dog area", "amphitheater"],
      },
      {
        name: "Colonel Summers Park",
        amenities: ["open lawn", "farmers market", "off-leash dog area"],
      },
    ],
    restaurants: [
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "SE Hawthorne, one of Portland's best, reservations required most nights" },
      { name: "Tabor Bread", cuisine: "Bakery/Cafe", vibe: "Wood-fired breads on SE Hawthorne, the sourdough is worth the detour" },
      { name: "Luce", cuisine: "Italian", vibe: "Tiny SE Hawthorne spot, good pasta, cash-comfortable crowd" },
    ],
    coffee: [
      { name: "Case Study Coffee", vibe: "SE Hawthorne location, good single-origin pour-overs, quieter than most inner SE cafes" },
      { name: "Barista", vibe: "SE Hawthorne outpost, precise brewing, minimal aesthetic, serious about coffee" },
    ],
    bars: [
      { name: "The Standard", vibe: "SE Hawthorne neighborhood bar, pool table, no theatrics" },
      { name: "Sapphire Hotel", vibe: "Moody hotel bar on SE Hawthorne, cocktails, good for a date" },
    ],
    medianHomePrice: 680000,
    priceRange: { low: 520000, high: 1400000 },
    commuteToDowntown: "18–22 min by bike via SE Hawthorne, 20–25 min by car, 30 min on Line 14 bus",
    faqs: [
      {
        q: "What makes Mount Tabor worth the premium over other SE Portland neighborhoods?",
        a: "The park. You can walk to an actual hiking trail from your front door — old-growth trees, reservoir views, a volcanic summit. That's not available anywhere else in the city. The housing stock is also generally better condition and larger lots than inner SE. People pay the premium knowingly.",
      },
      {
        q: "How expensive are homes near the park itself?",
        a: "Houses with direct park access or park views — meaning on the roads that border or climb the park itself — routinely sell above $800,000. The premium over comparable houses a few blocks away is real. If the park is the reason you're buying, expect to pay for it. The broader neighborhood median is around $680k.",
      },
      {
        q: "What are the schools like in Mount Tabor?",
        a: "Glencoe Elementary is one of the more stable PPS elementary schools. Mt. Tabor Middle is mid-tier. Franklin High has improved in recent years but doesn't have the reputation of Cleveland or Lincoln. Families here tend to be engaged — parent teacher organizations are active. Private school families often buy here too and factor that into their budget.",
      },
      {
        q: "Is Mount Tabor quiet?",
        a: "Most of it, yes. The residential blocks are genuinely quiet — wide lots, mature trees, low through-traffic. The northern edge near East Burnside is noisier, and SE Hawthorne picks up on weekends. If you're buying in the blocks between the park and about SE 60th, you'll notice a real drop in ambient noise compared to inner SE.",
      },
    ],
    testimonials: [
      {
        quote: "We stretched to $695k and I had anxiety about it for a year. Two years later the house appraised at $760k and I took out a HELOC to finish the basement. Bri walked me through both transactions.",
        author: "Greg and Marta H.",
        context: "Purchased near Mount Tabor Park, 2022",
      },
      {
        quote: "We moved from a condo in the Pearl. The yard is bigger than our old living room. I walk up to the park with the dog every morning. Worth every dollar of the price difference.",
        author: "Amanda S.",
        context: "Bought in Mount Tabor, 2023",
      },
    ],
    relatedServices: ["purchase", "jumbo", "heloc", "refinance", "cash-out"],
    adjacentNeighborhoods: ["sunnyside", "richmond", "montavilla", "laurelhurst"],
    seo: {
      title: "Buying a Home in Mount Tabor, Portland OR | The Lindley Team",
      description:
        "Honest guide to Mount Tabor Portland real estate: home prices, the park, schools, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "montavilla",
    name: "Montavilla",
    city: "Portland",
    state: "OR",
    description: [
      "SE Stark Street near 78th is the strip to watch in Montavilla. Bipartisan Cafe has been pulling shots and hosting neighborhood debates since 2009. Asylum Records is a few doors down. The Montavilla Community Center anchors the neighborhood's civic life — it has a public pool, gym, and meeting rooms that actually get used. This is outer SE, which means the vibe is less curated than inner SE and the prices reflect it.",
      "Housing is mostly 1940s–1960s — post-war ranches and boxes, with some older Craftsmans from the teens and twenties scattered in. The neighborhood sits between SE Burnside to the north and SE Division to the south, roughly from 72nd to 92nd. It's more affordable than inner SE by a meaningful margin — a two-bedroom house that would be $580k in Richmond is $440k here. SE 82nd Avenue runs along the western edge: it's the commercial arterial that Portlanders love to complain about, but it has groceries, hardware, and Vietnamese food within easy distance.",
      "The 82nd Ave MAX light rail project has been discussed for years and will eventually get built, which will push Montavilla prices when it does. That's the speculative upside. The current reality is a neighborhood in the middle of a decade-long transition — some blocks feel fully arrived, others don't. SE 82nd itself is genuinely unglamorous: traffic, car dealerships, and the infrastructure of a busy urban arterial. Buyers who understand that dynamic and price accordingly tend to be happy here. Buyers expecting inner SE at outer SE prices are often surprised by what $440k looks like on the ground.",
    ],
    personality: "Outer SE's best-kept affordable secret, transitioning fast",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Montavilla+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Montavilla+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 72,
    bikeScore: 80,
    transitScore: 55,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Vestal Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 4 },
      { name: "David Douglas High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Montavilla Park",
        amenities: ["Montavilla Community Center", "public pool", "gym", "playground", "basketball courts", "meeting rooms"],
      },
      {
        name: "Ventura Park",
        amenities: ["open lawn", "playground", "picnic area"],
      },
    ],
    restaurants: [
      { name: "Ya Hala", cuisine: "Lebanese", vibe: "SE Stark, one of the best Lebanese restaurants in Portland, been here for decades" },
      { name: "Jade Bistro", cuisine: "Vietnamese-American", vibe: "SE 82nd, excellent pho and Vietnamese-American fusion, packed at lunch" },
      { name: "Montavilla Brew Works", cuisine: "Pub", vibe: "Neighborhood brewpub on SE Stark, low-key, locals only feel on weekday evenings" },
    ],
    coffee: [
      { name: "Bipartisan Cafe", vibe: "SE Stark institution — coffee, pie, and actual neighborhood conversation since 2009" },
      { name: "Either/Or", vibe: "Books and coffee on SE Stark, slower pace, good selection" },
    ],
    bars: [
      { name: "Montavilla Brew Works", vibe: "The neighborhood brewery — no pretense, neighborhood crowd, reasonable prices" },
      { name: "Thanh Thao", vibe: "Vietnamese dive bar and restaurant on SE 82nd, cheap, honest, packed on weekends" },
    ],
    medianHomePrice: 440000,
    priceRange: { low: 320000, high: 650000 },
    commuteToDowntown: "25–30 min by car, 35 min by bus on Line 14, 30 min by bike to downtown",
    faqs: [
      {
        q: "Why is Montavilla so much cheaper than inner SE?",
        a: "Distance and perception. Montavilla is about three miles further east than the Hawthorne corridor, which in Portland real estate terms is a significant price difference. The neighborhood is also transitioning — not all of SE 82nd is there yet, and the housing stock is more post-war ranch than 1920s Craftsman. Buyers who do the math on $140k savings and a slightly longer commute often end up happy.",
      },
      {
        q: "Will the 82nd Ave MAX really change prices?",
        a: "Almost certainly, yes — when it gets built. The Orange Line lifted Milwaukie prices measurably. The question is timing, and this project has been 'coming' for a long time. Don't buy in Montavilla banking on imminent MAX service, but don't be surprised if transit access changes the calculus in 5–8 years.",
      },
      {
        q: "What are the schools like?",
        a: "Honestly, below average for Portland, which is itself below Oregon averages. This is one of the real trade-offs for the lower price point. Families in Montavilla who prioritize schools often look at private options, apply for PPS magnet programs, or factor private school tuition into their housing budget from the start.",
      },
      {
        q: "Is Montavilla safe?",
        a: "By Portland standards, the residential blocks are fine. SE 82nd has more visible issues than inner SE neighborhoods — it's a high-traffic arterial that serves a wide area. The blocks east of 82nd toward 92nd are generally quieter. It's not inner SE, but it's not sketchy either. Most residents walk their neighborhood without concern.",
      },
    ],
    testimonials: [
      {
        quote: "We couldn't afford $560k in Richmond. We bought a nice house in Montavilla for $418k and have $140k in equity after two years. Bri was honest with us that the schools weren't great — we're private school anyway so it didn't matter.",
        author: "Priya and James W.",
        context: "Purchased in Montavilla, 2022",
      },
      {
        quote: "Investment property. We bought at $390k, put $25k in, and rent it at $2,200 a month. The numbers made sense and Bri helped us structure the financing to keep cash flow positive.",
        author: "Dan O.",
        context: "Investment purchase in Montavilla, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "investment", "refinance"],
    adjacentNeighborhoods: ["mount-tabor", "foster-powell", "lents", "richmond"],
    seo: {
      title: "Buying a Home in Montavilla, Portland OR | The Lindley Team",
      description:
        "Honest guide to Montavilla Portland real estate: affordable outer SE, home prices, schools, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "foster-powell",
    name: "Foster-Powell",
    city: "Portland",
    state: "OR",
    description: [
      "The neighborhood is named for the intersection where Foster Road and Powell Boulevard meet, and that corner tells you a lot. It's not pretty, but it's functional — a busy urban intersection surrounded by businesses that serve people who actually live here: a hardware store, a Vietnamese restaurant, a bar that doesn't charge too much. Foster Road running east from there has been developing for about fifteen years, and it's reached a point where you can eat well, drink well, and get your car fixed all within a ten-block radius.",
      "The housing is almost entirely post-WWII — 1940s and 1950s ranches and small boxes, occasionally a bungalow from the 1920s that survived. Lots are tight. The neighborhood has been appreciating faster than its reputation suggested it should, which is what happens when inner SE prices push buyers east. The Foster-Powell Neighborhood Association is one of the more active in outer SE — they publish a newsletter, organize cleanups, and actually show up at city council when something affects the neighborhood. That matters in Portland.",
      "Powell Boulevard is the northern boundary, and it is loud. Houses on Powell itself are significantly cheaper — sometimes $50k cheaper — than comparable houses two blocks south, because the traffic noise is real and constant. Foster Road has improved but it still has some rough edges. Lot sizes are smaller than Sellwood and yards are minimal. Buyers who want a large backyard should adjust expectations or look further out.",
    ],
    personality: "Working Portland, affordable, and more than a little scrappy",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Foster-Powell+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Foster-Powell+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 75,
    bikeScore: 82,
    transitScore: 58,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Grout Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Kellogg Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Franklin High School", type: "high", grades: "9–12", rating: 6 },
    ],
    parks: [
      {
        name: "Foster Road Park",
        amenities: ["playground", "picnic area", "community garden"],
      },
      {
        name: "Woodstock Park",
        amenities: ["outdoor pool", "playground", "tennis courts", "open lawn"],
      },
      {
        name: "Lents Park",
        amenities: ["baseball fields", "playground", "picnic shelters", "off-leash dog area"],
      },
    ],
    restaurants: [
      { name: "Jade Bistro", cuisine: "Vietnamese-American", vibe: "Foster Road mainstay, excellent pho, packed for lunch, honest prices" },
      { name: "Fopiano's", cuisine: "Italian-American", vibe: "Classic Foster Road Italian, red sauce, checkered tablecloths, neighborhood institution" },
      { name: "Bollywood Theater", cuisine: "Indian street food", vibe: "Division Street location technically, but the Foster-Powell crowd knows it" },
    ],
    coffee: [
      { name: "Never Coffee Lab", vibe: "Foster Road coffee — serious about beans, neighborhood crowd, good for working" },
      { name: "Staccato Gelato", vibe: "Not coffee, but the Foster Road dessert stop that anchors the commercial strip" },
    ],
    bars: [
      { name: "Bar Carlo", vibe: "Italian wine bar on SE Foster, small, good by-the-glass list, neighborhood regulars" },
      { name: "Apex", vibe: "SE Division, technically close enough — one of Portland's best beer lists, no kitchen, no pretense" },
    ],
    medianHomePrice: 460000,
    priceRange: { low: 340000, high: 650000 },
    commuteToDowntown: "22–28 min by car, 30 min by bus on Line 9 or Line 17, 28 min by bike",
    faqs: [
      {
        q: "How does Foster-Powell compare to Richmond and Woodstock price-wise?",
        a: "Foster-Powell is cheaper than both. Richmond medians around $580k, Woodstock around $530k, Foster-Powell around $460k. You get a similar housing vintage (with FoPo being more post-war than 1920s) but more square footage per dollar. The trade-off is that Foster Road isn't as polished as Division or SE Hawthorne.",
      },
      {
        q: "Is Foster-Powell good for first-time buyers?",
        a: "It's one of the better options for first-timers who want a house in Portland without stretching to the absolute limit. The $340k–$460k range is realistic for a 2BR or small 3BR. FHA works here. The neighborhood is stable and improving. The school quality is mid-tier, which matters for some buyers and doesn't matter for others.",
      },
      {
        q: "What's the noise situation near Powell Boulevard?",
        a: "Real. Powell is a major arterial with bus service, truck traffic, and steady volume from morning to night. Houses on Powell itself — especially the north side — are priced to reflect it. Two blocks south the noise drops substantially. When you're looking at houses, the difference between a Powell-facing lot and a side-street lot is worth understanding before you write an offer.",
      },
      {
        q: "Is the neighborhood association actually active?",
        a: "Yes, more than most. The Foster-Powell Neighborhood Association has pushed back on development decisions, organized streetscape improvements on Foster, and maintains active communication with residents. In Portland, a functioning neighborhood association makes a real difference on zoning and development issues.",
      },
    ],
    testimonials: [
      {
        quote: "We bought at $445k and put $30k into the kitchen and bathrooms. Two years later we refinanced based on a $530k appraisal. Bri helped us time the refi right and pulled $45k in equity without killing our rate.",
        author: "Carlos and Elena M.",
        context: "Purchased and refinanced in Foster-Powell, 2022–2024",
      },
      {
        quote: "First house at 31. I thought I'd have to move to Gresham. Bri showed me Foster-Powell and I didn't know it existed. Bought a three-bedroom on SE 64th for $418,000.",
        author: "Ryan B.",
        context: "First-time buyer in Foster-Powell, 2023",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "cash-out", "heloc"],
    adjacentNeighborhoods: ["richmond", "woodstock", "creston-kenilworth", "lents", "montavilla"],
    seo: {
      title: "Buying a Home in Foster-Powell, Portland OR | The Lindley Team",
      description:
        "Honest guide to Foster-Powell Portland real estate: home prices, the Foster Road scene, schools, and what buyers should know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "brooklyn",
    name: "Brooklyn",
    city: "Portland",
    state: "OR",
    description: [
      "Brooklyn is one of the smaller, less-discussed SE Portland neighborhoods, which is part of why it still has value for buyers who know where to look. The Springwater Corridor runs along its eastern edge — the 40-mile multi-use trail that connects inner Portland to Boring and beyond. From Brooklyn you can get on the trail in five minutes and be at Sellwood Park in fifteen. McLoughlin Boulevard cuts through the neighborhood on a viaduct, which is less of a daily nuisance than it sounds and more of a dividing line that keeps through traffic off the residential streets.",
      "The housing stock is early 1900s — small Victorians, bungalows, and foursquares from the 1900s through 1920s. The Brooklyn Action Corps neighborhood association has been active for decades and takes the neighborhood's character seriously. The area is wedged between Sellwood-Moreland to the south and the Central Eastside industrial district to the north, which gives it an odd geography — residential blocks that feel settled and quiet, then a hard edge into warehousing and rail. The Union Pacific yard is nearby and you will hear trains.",
      "The train noise is the honest issue. Depending on where in Brooklyn you're buying, you might hear one freight train a night or several. The rail yard is not decorative. McLoughlin Boulevard also creates some visual and noise friction along the western edge. The neighborhood's proximity to the industrial edge keeps prices below what you'd pay in Sellwood, and buyers who aren't bothered by the industrial adjacency often find it's a reasonable trade. Median is around $490k — about $130k less than Sellwood for similar housing vintage.",
    ],
    personality: "Industrial edges, early 1900s houses, and underpriced by buyers who don't look",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Brooklyn+Neighborhood+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Brooklyn+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 66,
    bikeScore: 88,
    transitScore: 52,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Brooklyn Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Kellogg Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Cleveland High School", type: "high", grades: "9–12", rating: 7 },
    ],
    parks: [
      {
        name: "Springwater Corridor Trail",
        amenities: ["40-mile multi-use trail", "cycling", "running", "river access"],
      },
      {
        name: "Brentwood-Darlington Park",
        amenities: ["open lawn", "playground", "picnic area"],
      },
    ],
    restaurants: [
      { name: "Ristretto Roasters", cuisine: "Cafe", vibe: "Not in Brooklyn proper, but the NE Sandy flagship is where the neighborhood's coffee crowd ends up" },
      { name: "Lauretta Jean's", cuisine: "Pie/Breakfast", vibe: "SE Oak location is close enough — pie shop with a short, serious menu" },
      { name: "The Lunchbox", cuisine: "American", vibe: "Working lunch counter near the industrial edge, unpretentious" },
    ],
    coffee: [
      { name: "Good Coffee", vibe: "SE Milwaukie location nearby — clean, well-sourced, no gimmicks" },
      { name: "Extracto Coffee Roasters", vibe: "A short ride away on Hawthorne — the Brooklyn crowd bikes to it" },
    ],
    bars: [
      { name: "Loyal Legion", vibe: "SE Belmont, technically not Brooklyn but close — 99 Oregon taps, huge space, no bad beer options" },
      { name: "The Bullpen", vibe: "Neighborhood sports bar, unpretentious, close to the rail yards" },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 360000, high: 720000 },
    commuteToDowntown: "15–20 min by car, 18 min by bike via Springwater + Hawthorne Bridge, 35 min by bus",
    faqs: [
      {
        q: "How bad is the train noise in Brooklyn?",
        a: "It depends entirely on which block you're buying. Houses closer to the Union Pacific yard — roughly west of SE 17th and north of Holgate — hear more. Houses in the quieter residential interior hear much less. When you're touring a house in Brooklyn, go back at night and stand outside for ten minutes. That will tell you more than any description.",
      },
      {
        q: "Why is Brooklyn cheaper than Sellwood?",
        a: "Primarily the industrial adjacency and the train noise. The housing vintage and quality is comparable — both neighborhoods have early 1900s stock in reasonable condition. Sellwood has the Willamette river proximity, the antique strip, and better perception. Brooklyn has the Springwater access and lower prices. For buyers who do the comparison, the $130k savings is real.",
      },
      {
        q: "What does the Springwater Corridor access actually mean for daily life?",
        a: "It's the best multi-use trail in inner Portland. From Brooklyn you can reach the Eastbank Esplanade and the Steel Bridge bike path in about 20 minutes, or go south toward Sellwood and beyond. For cyclists and runners it's a significant daily asset. It also means the neighborhood doesn't feel as cut off from the rest of the city as the map might suggest.",
      },
      {
        q: "Is Brooklyn in Portland Public Schools?",
        a: "Yes. Brooklyn Elementary is mid-tier within PPS. Cleveland High draws from this area and has a stronger reputation than Franklin or David Douglas. The school question matters less in Brooklyn than the location-versus-price question — this is a neighborhood where the financial decision is often the primary driver.",
      },
    ],
    testimonials: [
      {
        quote: "We looked at Sellwood for eight months. Couldn't compete. Our agent suggested Brooklyn and we bought a 1912 Victorian for $482k that would have been $640k on SE 13th. Yes, there are trains. I can sleep through anything.",
        author: "Paul and Margot D.",
        context: "Purchased in Brooklyn after searching Sellwood, 2023",
      },
      {
        quote: "I was the buyer who got scared off by the industrial thing. Then Bri showed me the actual numbers — $108k less than a comparable house in Sellwood, three blocks from the Springwater trail. I wish I'd bought sooner.",
        author: "Simone A.",
        context: "Bought in Brooklyn, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance", "investment"],
    adjacentNeighborhoods: ["sellwood-moreland", "buckman", "foster-powell", "brentwood-darlington"],
    seo: {
      title: "Buying a Home in Brooklyn, Portland OR | The Lindley Team",
      description:
        "Honest guide to Brooklyn Portland real estate: underpriced SE homes, train noise trade-offs, Springwater access, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

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

{
    slug: "overlook",
    name: "Overlook",
    city: "Portland",
    state: "OR",
    description: [
      "N Willamette Boulevard runs along the bluffs above the river, and on a clear day you can see Mount Hood framed between houses. This isn't a selling point some agent dreamed up — it's just what the street looks like. Overlook Park sits at the edge of the bluff with benches facing west across the Willamette to the West Hills. The Interstate MAX line runs along the eastern edge of the neighborhood, and the N Interstate/Overlook Park station puts you in downtown in under 20 minutes without a car.",
      "The housing stock is predominantly 1910s and 1920s bungalows and four-squares, with slightly larger lots than you'll find a mile north in Kenton or Piedmont. The blocks feel established — not polished, just old in a good way, with mature trees and front yards that get used. There's not much commercial in Overlook proper; most residents go to the Mississippi corridor or to the shops along N Interstate for everyday needs. The neighborhood association has been active here for a long time and tends to stay involved in what happens to it.",
      "The bluff location is the main draw and also creates a real geographic constraint — east-west access off the bluff involves a limited set of streets, and the Interstate MAX corridor, while excellent for downtown commuters, isn't the quietest eastern edge to live next to. Prices have held up because supply is constrained: the bluff frontage doesn't grow and the neighborhood isn't big. Competition at or under $500k is real.",
    ],
    personality: "Bluff views, MAX access, and a neighborhood that doesn't need to advertise",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Overlook+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Overlook+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 62,
    bikeScore: 68,
    transitScore: 65,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Overlook Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Overlook Park",
        amenities: ["bluff views", "Willamette River overlook", "playground", "open lawn", "picnic area"],
      },
      {
        name: "Arbor Lodge Park",
        amenities: ["open lawn", "playground", "picnic shelters", "walking paths"],
      },
    ],
    restaurants: [
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams corridor — all-day breakfast, reservation worth it on weekends, one of Portland's better morning spots" },
      { name: "Prost!", cuisine: "German", vibe: "N Mississippi Ave German beer hall, solid sausages and a great patio in summer" },
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "N Mississippi Ave, one of Portland's best tables regardless of neighborhood" },
    ],
    coffee: [
      { name: "Stumptown Coffee", vibe: "N Williams location nearby — the standard Portland morning stop" },
      { name: "Water Avenue Coffee", vibe: "Worth the short drive, one of the better roasters in the city" },
    ],
    bars: [
      { name: "Prost!", vibe: "N Mississippi Ave beer hall — German imports on draft, long tables, good in any weather" },
      { name: "The Bye and Bye", vibe: "NE Alberta — short bike ride, craft cocktails, the neighborhood bar when you want something better than a dive" },
    ],
    medianHomePrice: 500000,
    priceRange: { low: 385000, high: 750000 },
    commuteToDowntown: "18–22 min on Interstate MAX, 20 min by car, 25 min by bike",
    faqs: [
      {
        q: "What makes Overlook different from other North Portland neighborhoods?",
        a: "The bluff location and the river views. N Willamette Boulevard is genuinely one of the better residential streets in North Portland — the houses face the Willamette, the lots are slightly larger than neighborhoods a mile north, and the mature tree canopy has had a long time to develop. It's also one of the only North Portland neighborhoods where you can walk to a MAX station and get to downtown in under 20 minutes.",
      },
      {
        q: "How are the schools in Overlook?",
        a: "Average within PPS. Overlook Elementary is solid but not exceptional. Jefferson High School, the destination high school for this part of North Portland, has been working through a long improvement process and isn't yet where some buyers want it to be. Families who prioritize school ratings often look at this carefully before deciding.",
      },
      {
        q: "How much does a home cost in Overlook?",
        a: "Median is around $500k. The range goes from low $400s for smaller bungalows needing work, up to $700k+ for renovated houses with actual river views on N Willamette Blvd. The bluff-facing properties command a real premium. Properties further east toward the Interstate MAX corridor come in at the lower end of the range.",
      },
      {
        q: "Is Overlook walkable?",
        a: "Moderately. Walk Score around 62 — there's no dense commercial strip within the neighborhood. The N Interstate Avenue corridor is accessible and has some services, but it's not the same as living on N Mississippi or N Alberta. For most errands you're driving or biking to the commercial corridors nearby.",
      },
    ],
    testimonials: [
      {
        quote: "We wanted North Portland but with a real commute option downtown. Overlook was the answer — Bri got us into a 1920s four-square with a view of the river for $488k. I bike to the MAX station most mornings.",
        author: "Derek and Kate M.",
        context: "Bought in Overlook, 2023",
      },
      {
        quote: "We refinanced when rates dropped a point and a half. Bri showed us the break-even at 26 months given our closing costs. The math made sense and she didn't oversell it.",
        author: "Patricia G.",
        context: "Refinanced in Overlook, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha"],
    adjacentNeighborhoods: ["piedmont", "humboldt", "boise-eliot", "arbor-lodge"],
    seo: {
      title: "Buying a Home in Overlook, Portland OR | The Lindley Team",
      description:
        "Overlook real estate: Willamette bluff views, Interstate MAX access, home prices, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "piedmont",
    name: "Piedmont",
    city: "Portland",
    state: "OR",
    description: [
      "Ainsworth Elementary on N Borthwick Avenue has one of the better reputations of any elementary school in North Portland — within PPS, families who care about school ratings seek it out, and that affects where people buy. The residential streets around Ainsworth are 1920s and 1930s bungalows on lots around 5,000 sq ft, with the mature landscaping that comes from a neighborhood that's been settled for 90 years. N Dekum Street has a small commercial node — a few restaurants, a coffee shop — that gives the neighborhood its own modest gravity.",
      "Piedmont sits between Overlook to the south and Kenton to the north, and it has a quieter character than either. There's no signature park, no dramatic geography, no trendy commercial strip. What it has is stable: homeowners who stay, well-kept blocks, and a price point that's accessible without being in the investor-target range. The neighborhood association is active and long-established. People buy here and the turnover is low.",
      "The transit situation is honest about its limitations. The Interstate MAX line is accessible but requires a walk or bike ride to reach — this isn't a neighborhood where you walk out your front door and step onto light rail. For downtown commuters who want to drive, the commute is straightforward. For people who want to be car-free, Piedmont requires more planning than Kenton or Overlook. Prices are lower than Overlook for roughly equivalent housing, and that gap reflects the transit and geography difference.",
    ],
    personality: "North Portland's stable middle — solid schools, quiet blocks, honest prices",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Piedmont+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Piedmont+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 55,
    bikeScore: 68,
    transitScore: 52,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Ainsworth Elementary", type: "elementary", grades: "K–5", rating: 7 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Piedmont Park",
        amenities: ["playground", "open lawn", "picnic area", "basketball courts"],
      },
      {
        name: "Peninsula Park",
        amenities: ["sunken rose garden", "community center", "playground", "spray pad", "tennis courts"],
      },
    ],
    restaurants: [
      { name: "Gracie's Apizza", cuisine: "Pizza", vibe: "N Dekum — New Haven-style thin crust, the neighborhood dinner answer" },
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams nearby, all-day breakfast, one of the better morning restaurants in North Portland" },
      { name: "Mississippi Pizza", cuisine: "Pizza", vibe: "N Mississippi Ave, casual, live music some nights, good for a weeknight out" },
    ],
    coffee: [
      { name: "Never Coffee Lab", vibe: "Short ride to N Alberta — serious espresso, no fuss" },
      { name: "Albina Press", vibe: "N Williams corridor — reliable neighborhood coffee" },
    ],
    bars: [
      { name: "Ecliptic Brewing", vibe: "N Overlook Blvd — good house beers, food that works, neighborhood brewery crowd" },
      { name: "Prost!", vibe: "N Mississippi Ave, German beer hall, easy bike ride from Piedmont" },
    ],
    medianHomePrice: 470000,
    priceRange: { low: 360000, high: 650000 },
    commuteToDowntown: "22 min by car, 30 min by bike, 35 min on bus to Interstate MAX connection",
    faqs: [
      {
        q: "Why do families choose Piedmont over other North Portland neighborhoods?",
        a: "Ainsworth Elementary. It's one of the better-rated PPS elementary schools in North Portland and families who care about elementary school ratings shop around it specifically. That reputation drives meaningful demand for houses in the attendance zone. If your kids are past elementary age or you don't have kids, the premium for Ainsworth proximity doesn't apply to you.",
      },
      {
        q: "How much does a home cost in Piedmont?",
        a: "Median is around $470k — meaningfully below Overlook and Irvington, roughly comparable to Arbor Lodge. Most houses trade between $360k and $580k. The 1920s–1930s bungalows are the dominant type: 1,100–1,600 sq ft, 5,000 sq ft lots, original hardwood floors in most. Well-maintained and move-in ready homes go quickly.",
      },
      {
        q: "What's the commute like from Piedmont?",
        a: "Driving to downtown takes about 22 minutes. The Interstate MAX isn't walkable from most of the neighborhood — you're biking or driving to a station. If you need daily transit downtown, Kenton or Overlook are better positioned. Bus service runs on N Interstate but isn't fast.",
      },
      {
        q: "Is Piedmont a good neighborhood for first-time buyers?",
        a: "Yes. The price range is accessible, the neighborhood is stable, and the housing stock is solid 1920s–1930s construction. FHA works well here. The main thing to know is that competition increases notably below $450k — investor buyers show up in that range. At $470k–$550k for a move-in ready bungalow, first-time buyers tend to have less competition.",
      },
    ],
    testimonials: [
      {
        quote: "Ainsworth was the whole reason we looked in Piedmont. Bri ran the financing scenarios and we got a 1930s bungalow two blocks from the school for $451k. The house needed paint and nothing else.",
        author: "Julie and Aaron T.",
        context: "Bought in Piedmont, 2023",
      },
      {
        quote: "I'd been priced out of Overlook and thought North Portland was done for me. Bri showed me Piedmont. We closed in 30 days on a 3-bedroom for $438k. I still feel like I found something.",
        author: "Marcus W.",
        context: "Bought in Piedmont, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "refinance"],
    adjacentNeighborhoods: ["overlook", "kenton", "arbor-lodge", "humboldt"],
    seo: {
      title: "Buying a Home in Piedmont, Portland OR | The Lindley Team",
      description:
        "Piedmont real estate: Ainsworth Elementary, affordable North Portland bungalows, home prices, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "portsmouth",
    name: "Portsmouth",
    city: "Portland",
    state: "OR",
    description: [
      "N Lombard Street is Portsmouth's main commercial corridor and it's better than its reputation. You'll find independent spots alongside the usual strip-mall businesses — dry cleaners, nail salons, a couple of decent food options, the things a working neighborhood actually needs. The University of Portland campus anchors the western end of the neighborhood, a full 131-acre bluff campus with trails, athletic fields, and the kind of physical presence that keeps the streets around it stable and maintained.",
      "The residential blocks off N Lombard are 1940s and 1950s housing — a later vintage than most of inner North Portland. Ranch homes and modest bungalows with larger front lawns, more setback from the street, a suburban-scaled feeling. These aren't Victorian-era blocks; they're the kind of neighborhood that grew up after World War II when North Portland was still being built out. Families and longtime residents make up the core. The neighborhood has held steady over time without the churn that some North Portland neighborhoods have experienced.",
      "Portsmouth is the most affordable of the University of Portland-adjacent neighborhoods, and that gap from University Park is real — you're getting less dramatic bluff geography and no Willamette views, but you're paying $70k less for comparable housing. The school situation is the main honest concern: Portsmouth Elementary and Roosevelt High School are below average within PPS, and families who prioritize school ratings will want to look carefully. Some buyers account for private school costs in their mortgage math.",
    ],
    personality: "Affordable, stable, and more neighborhood than Portland gives it credit for",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Portsmouth+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Portsmouth+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 58,
    bikeScore: 62,
    transitScore: 48,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Portsmouth Elementary", type: "elementary", grades: "K–5", rating: 4 },
      { name: "George Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Roosevelt High School", type: "high", grades: "9–12", rating: 5 },
      { name: "University of Portland Campus School", type: "private", grades: "K–8", rating: 8 },
    ],
    parks: [
      {
        name: "Cathedral Park",
        amenities: ["Willamette River access", "picnic areas", "boat launch", "views of St. Johns Bridge"],
      },
      {
        name: "University of Portland Campus Trails",
        amenities: ["bluff walking trails", "athletic fields", "river views", "open campus access"],
      },
    ],
    restaurants: [
      { name: "Smith BBQ", cuisine: "BBQ", vibe: "N Lombard, the real answer to where to get brisket in North Portland" },
      { name: "Tulip Bakery", cuisine: "Bakery / Cafe", vibe: "N Lombard, neighborhood breakfast spot, regulars on a first-name basis" },
      { name: "Gracie's Apizza", cuisine: "Pizza", vibe: "Short drive to N Dekum — New Haven-style thin crust, worth the trip" },
    ],
    coffee: [
      { name: "Posies Cafe", vibe: "N Lombard — the neighborhood morning stop, bakery cafe, good for a slower start" },
      { name: "Stumptown Coffee", vibe: "Short drive to several locations, no dedicated neighborhood spot" },
    ],
    bars: [
      { name: "McMenamins St. Johns Pub & Movie Theater", vibe: "8203 N Ivanhoe — the closest real destination bar, 1913 building, second-run movies" },
      { name: "The Standard", vibe: "N Denver Ave, neighborhood bar, low-key and unpretentious" },
    ],
    medianHomePrice: 420000,
    priceRange: { low: 320000, high: 600000 },
    commuteToDowntown: "25 min by car, 35 min by bus (Line 40 or 75), 30 min by bike",
    faqs: [
      {
        q: "How does Portsmouth compare to St. Johns in price and feel?",
        a: "They're close in price — Portsmouth median is around $420k, St. Johns around $420k as well. St. Johns has Cathedral Park and a more developed N Lombard commercial strip with more destination restaurants. Portsmouth has University of Portland as a physical anchor and slightly newer housing stock from the 1940s–50s. Both share the same school options: George Middle and Roosevelt High.",
      },
      {
        q: "Are the schools good in Portsmouth?",
        a: "Below average within PPS. Portsmouth Elementary rates in the lower tier of North Portland elementary schools. Roosevelt High School is an improving school but hasn't reached the level of Cleveland or Grant. Families with school-age kids often weigh private school costs against the price savings compared to neighborhoods with stronger public school pipelines.",
      },
      {
        q: "What's the University of Portland's impact on the neighborhood?",
        a: "Mostly positive and mostly indirect. The campus keeps the blocks around it stable and well-maintained. UP campus events are open to the public. The bluff trails on campus are accessible. Faculty and staff buy homes in the neighborhood. It's not the same kind of neighborhood-defining presence as Reed in Woodstock, but it keeps the western end of Portsmouth anchored.",
      },
      {
        q: "What types of homes are in Portsmouth?",
        a: "Mostly 1940s–1960s ranches and bungalows — a different vintage than most of North Portland. Think single-story ranches with attached garages, 1,000–1,400 sq ft, on lots with big front lawns. Less architectural character than the 1920s Craftsmans in Piedmont or Overlook, but often more livable without renovation. Basements are less common than in earlier-built neighborhoods.",
      },
    ],
    testimonials: [
      {
        quote: "My ceiling was $400k. Bri told me to look at Portsmouth when everything else was out of reach. We got a 1952 ranch for $387k with a garage and a real backyard. Nobody had told me Portsmouth was an option.",
        author: "Renee and Paul B.",
        context: "Bought in Portsmouth, 2023",
      },
      {
        quote: "I work at UP and wanted to be close. Bri ran FHA scenarios and we closed at $412k with 3.5% down. The mortgage is $300 less a month than my rent was.",
        author: "Daniel K.",
        context: "Bought in Portsmouth, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "va"],
    adjacentNeighborhoods: ["university-park", "st-johns", "kenton", "arbor-lodge"],
    seo: {
      title: "Buying a Home in Portsmouth, Portland OR | The Lindley Team",
      description:
        "Portsmouth real estate: affordable North Portland, University of Portland proximity, home prices, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "university-park",
    name: "University Park",
    city: "Portland",
    state: "OR",
    description: [
      "The view from N Willamette Boulevard here is the same geography as Overlook — bluffs above the Willamette, Mount Hood on the horizon on a clear morning, the West Hills across the water — but quieter, less trafficked, and anchored physically by the University of Portland campus. The UP Pilot House sits at the edge of the bluff. The residential streets between the campus and the bluff edge have some of the most stable and well-maintained housing in North Portland: 1920s and 1930s houses on good lots, neighbors who have been there for decades.",
      "University Park attracts faculty, university staff, and families who want North Portland prices with a more settled character than neighborhoods further south on the Interstate corridor. The commercial options within the neighborhood are minimal — a few UP-adjacent spots, but nothing like N Mississippi or N Alberta for walkable restaurants and coffee. Most residents drive or bike to N Lombard or the Mississippi corridor for daily needs. It's a neighborhood built around the residential experience, not around nightlife or commercial energy.",
      "The car dependence is real. Without a direct MAX connection, getting to downtown requires driving or biking — the bike route via the Willamette Boulevard path is excellent but takes 35 minutes. Grocery runs require a car. The price premium over Portsmouth is meaningful for what feels like relatively similar geography; you're paying for the bluff views, the UP campus atmosphere, and a quieter character. Buyers who try to compare it to more transit-connected neighborhoods often feel the gap isn't worth it. Buyers who want exactly what it is find it hard to leave.",
    ],
    personality: "Bluff views, campus calm, and residents who stay a long time",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=University+Park+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=University+Park+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 45,
    bikeScore: 64,
    transitScore: 40,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Astor Elementary", type: "elementary", grades: "K–5", rating: 6 },
      { name: "George Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Roosevelt High School", type: "high", grades: "9–12", rating: 5 },
      { name: "University of Portland Campus School", type: "private", grades: "K–8", rating: 8 },
    ],
    parks: [
      {
        name: "University of Portland Campus & Bluff Trails",
        amenities: ["bluff walking paths", "Willamette River views", "athletic fields", "open campus"],
      },
      {
        name: "Columbia Park",
        amenities: ["swimming pool", "playground", "picnic areas", "rose garden", "open lawn"],
      },
    ],
    restaurants: [
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams corridor — all-day breakfast, one of the better morning destinations in North Portland" },
      { name: "Smith BBQ", cuisine: "BBQ", vibe: "N Lombard, wood-smoked brisket, worth the short drive" },
      { name: "Prost!", cuisine: "German", vibe: "N Mississippi Ave, easy drive south, German beer hall with good sausages" },
    ],
    coffee: [
      { name: "Posies Cafe", vibe: "N Lombard — the closest real neighborhood cafe, good for a morning stop" },
      { name: "Stumptown Coffee", vibe: "Short drive to multiple locations — there's no dedicated neighborhood coffee shop" },
    ],
    bars: [
      { name: "Ecliptic Brewing", vibe: "N Overlook Blvd — short drive south, good house beers, neighborhood brewery crowd" },
      { name: "McMenamins St. Johns Pub", vibe: "N Ivanhoe in St. Johns, 1913 building, the closest destination bar" },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 380000, high: 720000 },
    commuteToDowntown: "25 min by car, 35 min by bike via N Willamette Blvd path, 40 min by bus",
    faqs: [
      {
        q: "What's the difference between University Park and Portsmouth?",
        a: "About $70k in median home price and a bluff. University Park sits on the Willamette bluffs adjacent to the UP campus, with river views from the higher streets and a more settled, quieter residential character. Portsmouth is slightly inland, flatter, with 1940s–50s housing on a similar price tier. Both share George Middle and Roosevelt High. University Park is more expensive for the geography and the character, not for better schools or better transit.",
      },
      {
        q: "Do I need a car to live in University Park?",
        a: "Realistically, yes. Walk Score is around 45. There's no MAX station nearby. Grocery, restaurants, most services — you're driving or biking. The N Willamette Boulevard bike path is excellent for recreational riding and for commuting downtown if you have the time for a 35-minute bike ride. For anything else, you're in a car.",
      },
      {
        q: "How are the schools in University Park?",
        a: "Middle of the pack within PPS. Astor Elementary is solid but not exceptional. Roosevelt High School is the destination high school and is in an improvement process — not yet where some buyers want it. The UP Campus School is a private K–8 option right in the neighborhood, which some families factor into their decision.",
      },
      {
        q: "Who is University Park a good fit for?",
        a: "People who specifically want the Willamette bluff setting and the UP campus atmosphere, are comfortable with car dependence, and don't need to be walking distance from transit or commercial amenities. Faculty, staff, and families who've been here for years account for a meaningful portion of the neighborhood. Buyers who prioritize walkability or transit connectivity tend to land in a different part of North Portland.",
      },
    ],
    testimonials: [
      {
        quote: "We teach at UP and wanted to be close. The house we found on N Willamette Blvd has a view of the river and we paid $476k. I've spent 25 years in academia — I've never owned something this good.",
        author: "Claudia and Mark R.",
        context: "Bought in University Park, 2023",
      },
      {
        quote: "Everyone told us to look at Overlook instead. We saw one house in University Park and stopped looking. Bri helped us close quickly before a second offer came in.",
        author: "Sam T.",
        context: "Bought in University Park, 2024",
      },
    ],
    relatedServices: ["purchase", "refinance", "fha"],
    adjacentNeighborhoods: ["portsmouth", "st-johns", "overlook"],
    seo: {
      title: "Buying a Home in University Park, Portland OR | The Lindley Team",
      description:
        "University Park real estate: Willamette bluff views, University of Portland proximity, home prices, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "boise-eliot",
    name: "Boise-Eliot",
    city: "Portland",
    state: "OR",
    description: [
      "N Mississippi Avenue has changed more in 20 years than most Portland streets change in 50. Prost! opened in the early 2000s. Gado Gado, one of Portland's best restaurants regardless of neighborhood, is on N Mississippi. Mississippi Pizza has been there long enough to feel like a fixture. Tasty n Daughters does all-day breakfast on N Williams. The commercial stretch between N Fremont and N Skidmore is one of the most dense concentrations of independent restaurants and bars in North Portland. The housing is 1900s–1920s bungalows and Victorian cottages — the walkable fabric is intact because the buildings survived.",
      "The neighborhood was predominantly Black through the mid-20th century. Vanport flooding in 1948 displaced thousands of Black Portlanders into this part of North Portland. Urban renewal in the 1950s and 1960s demolished the Albina neighborhood to the south. What remained in Boise-Eliot was built by a community that had been systematically pushed to this part of the city. The commercial investment on Mississippi Avenue starting in the 2000s brought money and new residents, and it displaced many of the people who had built what made the neighborhood worth investing in. That's not ancient history — it's living memory for people still in Portland. If you're buying here, that context is part of what you're buying into.",
      "On the practical side: the neighborhood is genuinely walkable, the bike infrastructure on N Williams is among the best in North Portland, and transit connections on N Interstate are solid. The median is around $540k, which is among the higher entry points in North Portland. Competition below $500k is intense. The honest buyer question here is whether you've thought through what it means to be a new homeowner in a neighborhood with this specific history — not to be paralyzed by it, but to be clear-eyed.",
    ],
    personality: "N Mississippi's best tables, a history that still matters, real walkability",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Boise+Eliot+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Boise+Eliot+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 82,
    bikeScore: 90,
    transitScore: 65,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Boise-Eliot/Humboldt Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Overlook Park",
        amenities: ["bluff views", "Willamette overlook", "playground", "open lawn"],
      },
      {
        name: "Unthank Park",
        amenities: ["basketball courts", "playground", "open lawn", "picnic area"],
      },
    ],
    restaurants: [
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "N Mississippi Ave — one of Portland's best restaurants, full stop. Malaysian-Indonesian, reservation recommended" },
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams, all-day breakfast, the neighborhood morning spot with actual buzz" },
      { name: "Prost!", cuisine: "German", vibe: "N Mississippi Ave German beer hall — sausages, imported beers, big patio, a neighborhood anchor since 2005" },
      { name: "Mississippi Pizza", cuisine: "Pizza", vibe: "N Mississippi Ave, casual pizza and live music, been here long enough to earn its place" },
    ],
    coffee: [
      { name: "Albina Press", vibe: "N Williams corridor — solid neighborhood coffee, been serving this part of Portland for years" },
      { name: "Coava Coffee", vibe: "Short bike ride south, one of Portland's best roasters for when the morning calls for something more serious" },
    ],
    bars: [
      { name: "Prost!", vibe: "N Mississippi Ave — German imports on draft, long communal tables, the go-to neighborhood beer bar" },
      { name: "The Bye and Bye", vibe: "NE Alberta — craft cocktails, hanging plants, easy bike ride, the elevated option nearby" },
    ],
    medianHomePrice: 540000,
    priceRange: { low: 400000, high: 800000 },
    commuteToDowntown: "20 min by car, 18 min by bike via N Williams corridor, 22 min on Interstate MAX",
    faqs: [
      {
        q: "What do I need to know about buying in Boise-Eliot as someone who didn't grow up here?",
        a: "The neighborhood has a specific history: it was predominantly Black for much of the 20th century, the community here was the result of discriminatory housing policies that confined Black Portlanders to North Portland, and the commercial investment starting in the 2000s accelerated displacement of longtime residents. You don't need to feel guilty about buying a house, but knowing this history means being a more thoughtful neighbor and community member. There are longtime organizations in North Portland doing housing and community preservation work worth being aware of.",
      },
      {
        q: "How walkable is Boise-Eliot?",
        a: "Very. Walk Score around 82. N Mississippi and N Williams have dense independent restaurant and retail coverage. The N Williams bike boulevard is one of the better-designed bike corridors in Portland — protected stretches, consistent infrastructure. The Interstate MAX is a short ride for downtown trips. This is one of the most genuinely walkable neighborhoods in North Portland.",
      },
      {
        q: "How much does a home cost in Boise-Eliot?",
        a: "Median is around $540k — higher than most North Portland neighborhoods. The Victorian cottages and early bungalows closest to N Mississippi trade at a premium. Renovated houses in good condition on the residential streets between the two commercial corridors typically land $480k–$680k. Cash buyers and investors compete in this price range, especially below $500k.",
      },
      {
        q: "How do the schools compare in Boise-Eliot?",
        a: "Below average within PPS. Boise-Eliot/Humboldt Elementary and Jefferson High School are not among the district's higher-rated schools. Families who prioritize school ratings often look at this carefully. Jefferson has programs including an African-American studies curriculum that some families specifically seek out, but academically it hasn't ranked at the top of the PPS system.",
      },
    ],
    testimonials: [
      {
        quote: "Bri was honest with us about the neighborhood history before we started looking. We appreciated that it was part of the conversation, not something we had to bring up ourselves. We bought on N Borthwick for $512k.",
        author: "Jess and Mike D.",
        context: "Bought in Boise-Eliot, 2023",
      },
      {
        quote: "I wanted to be within biking distance of everything. Boise-Eliot was the answer. Bri helped me find a 1915 bungalow for $488k. I bike to work, walk to Gado Gado, and I'm on the MAX in five minutes.",
        author: "Priya N.",
        context: "Bought in Boise-Eliot, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["humboldt", "overlook", "arbor-lodge", "piedmont"],
    seo: {
      title: "Buying a Home in Boise-Eliot, Portland OR | The Lindley Team",
      description:
        "Boise-Eliot real estate: N Mississippi Avenue, neighborhood history, home prices, and what buyers should know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "humboldt",
    name: "Humboldt",
    city: "Portland",
    state: "OR",
    description: [
      "The N Williams Avenue bike corridor runs through Humboldt's eastern edge, connecting this neighborhood to the Mississippi and Alberta commercial corridors by a protected bike lane that actually gets used. Humboldt itself is quieter than its western neighbor Boise-Eliot — fewer destination restaurants, fewer bars, more residential blocks that feel like people's actual neighborhoods rather than places to go out. The housing is 1910s and 1920s bungalows and four-squares on standard North Portland lots, the same vintage and footprint you'd find a mile in any direction.",
      "Humboldt shares the same demographic history as Boise-Eliot — this part of North Portland was home to Portland's Black community for most of the 20th century, shaped by the same discriminatory housing policies that concentrated that community here. The neighborhood has experienced significant demographic change over the past two decades, more quietly than Boise-Eliot but no less real. That's not context to be dismissed when thinking about what kind of neighbor you want to be here.",
      "The proximity to I-5 is audible from the blocks closest to the freeway — that's a real consideration when you're walking properties. The farther west you are in Humboldt, the better the noise situation. Prices sit below Boise-Eliot for roughly equivalent housing, which makes sense given less destination commercial within the neighborhood. The honest trade: you get more house per dollar than on N Mississippi, less walking-distance convenience, and a neighborhood that's still working out its identity.",
    ],
    personality: "Quieter than Mississippi, same housing stock, less of a scene",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Humboldt+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Humboldt+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 68,
    bikeScore: 85,
    transitScore: 60,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Boise-Eliot/Humboldt Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Humboldt Park",
        amenities: ["playground", "open lawn", "picnic area", "basketball courts"],
      },
      {
        name: "Unthank Park",
        amenities: ["playground", "basketball courts", "open lawn"],
      },
    ],
    restaurants: [
      { name: "Gado Gado", cuisine: "Indonesian", vibe: "Short bike ride west to N Mississippi — one of Portland's best restaurants and the obvious answer for a nice dinner" },
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams corridor — all-day breakfast, neighborhood institution, easy bike access" },
      { name: "Gracie's Apizza", cuisine: "Pizza", vibe: "N Dekum, New Haven-style thin crust, the neighborhood pizza answer" },
    ],
    coffee: [
      { name: "Albina Press", vibe: "N Williams corridor — reliable neighborhood coffee, steady crowd from the bike lane regulars" },
      { name: "Never Coffee Lab", vibe: "Short ride to N Alberta — serious espresso, no fuss, worth the extra five minutes" },
    ],
    bars: [
      { name: "Prost!", vibe: "N Mississippi Ave, short bike ride — German beer hall, the obvious answer when you want a beer and a seat" },
      { name: "Ecliptic Brewing", vibe: "N Overlook Blvd nearby — solid house beers, food that works, good for a weeknight" },
    ],
    medianHomePrice: 490000,
    priceRange: { low: 370000, high: 680000 },
    commuteToDowntown: "20 min by car, 20 min by bike via N Williams, 25 min on Interstate MAX",
    faqs: [
      {
        q: "How does Humboldt compare to Boise-Eliot?",
        a: "Similar housing vintage and lot sizes, but Boise-Eliot has N Mississippi Avenue's concentration of destination restaurants and bars — that's the primary price difference. Humboldt trades at roughly $50k below Boise-Eliot on comparable houses. The N Williams bike corridor runs through both, so bike access to commercial corridors is similar. If the destination commercial matters to you, Boise-Eliot costs more. If you want residential quiet and are fine biking 10 minutes to dinner, Humboldt makes financial sense.",
      },
      {
        q: "Is the I-5 noise a serious issue in Humboldt?",
        a: "It depends on the block. The streets closest to I-5 on the eastern side of the neighborhood have audible highway noise — it's a real factor when walking properties. The western portions of Humboldt, closer to N Interstate Ave, are significantly quieter. When you're looking at houses here, the specific block location relative to the freeway matters enough to factor into your decision.",
      },
      {
        q: "What types of homes are in Humboldt?",
        a: "1910s–1920s bungalows and four-squares are the dominant type — similar to Boise-Eliot, Piedmont, and Overlook. Lots are typically 4,500–5,500 sq ft. Houses run 1,000–1,500 sq ft. Original hardwood floors in most. Renovation levels vary significantly from fully updated to original condition — the spread in the price range reflects that as much as location.",
      },
      {
        q: "Is Humboldt good for first-time buyers?",
        a: "Yes, with the same caveats that apply across North Portland: investor competition below $450k is real, financing pre-approval matters, and you need to be ready to move. The N Williams bike corridor makes Humboldt genuinely useful for car-free or car-light living in a way that more car-dependent North Portland neighborhoods aren't. At $430k–$510k for a solid bungalow, it's a reasonable entry point.",
      },
    ],
    testimonials: [
      {
        quote: "I almost bought in Boise-Eliot and got outbid twice. Bri suggested Humboldt and I was skeptical. Got a 1918 bungalow for $463k with a full basement. It needed work and I liked that — I wanted a project.",
        author: "Tyler S.",
        context: "Bought in Humboldt, 2023",
      },
      {
        quote: "The bike lane access was the whole thing for us. My partner commutes to downtown on a bike and Humboldt made that realistic. We paid $481k and have zero regrets.",
        author: "Kara and Nate F.",
        context: "Bought in Humboldt, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["boise-eliot", "overlook", "piedmont", "arbor-lodge"],
    seo: {
      title: "Buying a Home in Humboldt, Portland OR | The Lindley Team",
      description:
        "Humboldt real estate: N Williams bike corridor, North Portland bungalows, home prices, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

  {
    slug: "arbor-lodge",
    name: "Arbor Lodge",
    city: "Portland",
    state: "OR",
    description: [
      "N Killingsworth station on the Interstate MAX Yellow Line is the neighborhood's main transit anchor — downtown in about 25 minutes, no car needed. N Interstate Avenue runs through the eastern edge with enough commercial presence to handle daily needs: coffee, food, hardware, a few restaurants. N Rosa Parks Way has been developing slowly with some newer businesses. Arbor Lodge Park is the neighborhood's central green space — not Cathedral Park, but a genuine neighborhood park with lawns and a rose garden that gets used.",
      "The housing is 1920s–1940s bungalows on small lots, typical of the North Portland pattern. The neighborhood has a working-class character that hasn't been fully polished away by new investment — the blocks have some mix of original and renovated homes, some long-term residents, and some turnover. It's not as far along in its transition as Boise-Eliot or Kenton, which means lower prices and less destination commercial, but also less of the investor frenzy that comes with higher-profile neighborhoods.",
      "The real talk on Arbor Lodge: investor competition is a factor. The combination of MAX access and entry-level prices makes this a target for investors buying for rentals and flips, and they compete against first-time buyers for the same houses. When a well-priced bungalow comes up in good condition, expect multiple offers in 24–48 hours. The neighborhoods around Arbor Lodge are also worth knowing — you're adjacent to Piedmont to the east and Humboldt to the south, which gives you proximity to their amenities without paying their prices.",
    ],
    personality: "MAX access, entry-level prices, and investor competition you should know about",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Arbor+Lodge+Portland+OR&output=embed&z=14",
    directionsSrc:
      "https://maps.google.com/maps?saddr=Arbor+Lodge+Portland+OR&daddr=15115+SW+Sequoia+Pkwy+Suite+100+Portland+OR+97224&output=embed",
    walkScore: 70,
    bikeScore: 72,
    transitScore: 68,
    schoolDistrict: "Portland Public Schools",
    schools: [
      { name: "Chief Joseph Elementary", type: "elementary", grades: "K–5", rating: 5 },
      { name: "Harriet Tubman Middle School", type: "middle", grades: "6–8", rating: 5 },
      { name: "Jefferson High School", type: "high", grades: "9–12", rating: 5 },
    ],
    parks: [
      {
        name: "Arbor Lodge Park",
        amenities: ["rose garden", "open lawn", "playground", "picnic shelters", "off-leash dog area"],
      },
      {
        name: "Peninsula Park",
        amenities: ["sunken rose garden", "community center", "spray pad", "tennis courts", "short bike ride south"],
      },
    ],
    restaurants: [
      { name: "Gracie's Apizza", cuisine: "Pizza", vibe: "N Dekum — New Haven-style thin crust, the local dinner answer without driving far" },
      { name: "Po'Shines Café de la Soul", cuisine: "Soul Food", vibe: "N Denver Ave in Kenton — fried chicken and greens, worth the short drive" },
      { name: "Tasty n Daughters", cuisine: "American", vibe: "N Williams corridor — all-day breakfast, reasonable bike ride, one of North Portland's better mornings" },
    ],
    coffee: [
      { name: "Never Coffee Lab", vibe: "Short ride to N Alberta — serious espresso, the destination option when you want quality" },
      { name: "Albina Press", vibe: "N Williams corridor, accessible by bike, solid neighborhood roaster" },
    ],
    bars: [
      { name: "Ecliptic Brewing", vibe: "N Overlook Blvd — good house beers, pizza that works, the neighborhood brewery for a weeknight" },
      { name: "Prost!", vibe: "N Mississippi Ave, easy bike ride south — German beer hall, big patio, the destination bar nearby" },
    ],
    medianHomePrice: 430000,
    priceRange: { low: 330000, high: 610000 },
    commuteToDowntown: "25 min on Interstate MAX Yellow Line, 22 min by car, 25 min by bike",
    faqs: [
      {
        q: "Is Arbor Lodge a good entry point into Portland homeownership?",
        a: "It's one of the better options in North Portland for buyers at the $380k–$470k range who want MAX access. The Yellow Line is a real daily-use transit connection to downtown. The tradeoff is that investor competition is consistent at this price point — you need to be pre-approved, decisive, and ready to move quickly. If you're flexible enough to act in 24 hours when the right house comes up, Arbor Lodge works. If you need weeks to decide, you'll lose houses to cash offers.",
      },
      {
        q: "How does Arbor Lodge compare to Kenton?",
        a: "Very similar. Both have Yellow MAX access, similar housing vintage and price ranges, and share the same school options. Kenton has a slightly more developed commercial strip on N Denver with Po'Shines and the Kenton Club as genuine anchors. Arbor Lodge is slightly more residential-feeling with Arbor Lodge Park as its main amenity. The price difference is minimal. Which one makes sense depends mostly on which specific house and location appeals to you.",
      },
      {
        q: "What types of homes are in Arbor Lodge?",
        a: "1920s–1940s bungalows are the dominant type, on lots around 4,500–5,500 sq ft. Houses run 1,000–1,400 sq ft typically, with some larger examples. Renovation levels vary from original condition needing work to fully updated. The smaller lot sizes mean less outdoor space than neighborhoods north or east, but more than what you'd get in a condo.",
      },
      {
        q: "What's the investor competition situation really like?",
        a: "It's real and consistent. Arbor Lodge's combination of entry-level prices and MAX proximity makes it attractive to both owner-occupants and investors buying for rentals. On well-priced houses under $450k in acceptable condition, cash buyers and investor-backed offers show up regularly. As an owner-occupant buyer, your financing pre-approval needs to be airtight and your decision timeline needs to be short. FHA is workable here but competes against conventional and cash.",
      },
    ],
    testimonials: [
      {
        quote: "Bri warned us that Arbor Lodge moves fast. We wrote an offer the day we saw our house, $15k over asking at $447k. Got it. The couple who toured after us was two hours too late.",
        author: "Hannah and Rob C.",
        context: "Bought in Arbor Lodge, 2023",
      },
      {
        quote: "I needed MAX access or my daily commute didn't work. Arbor Lodge was the only neighborhood at my budget — $410k — where I could make that happen. Bri got me pre-approved in 48 hours and we closed in 28 days.",
        author: "Jerome W.",
        context: "Bought in Arbor Lodge, 2024",
      },
    ],
    relatedServices: ["purchase", "fha", "investment"],
    adjacentNeighborhoods: ["piedmont", "humboldt", "overlook", "kenton", "portsmouth"],
    seo: {
      title: "Buying a Home in Arbor Lodge, Portland OR | The Lindley Team",
      description:
        "Arbor Lodge real estate: Interstate MAX access, affordable North Portland bungalows, investor competition, and what buyers need to know. Bri Lindley, NMLS #1367416.",
    },
  },

];

export function getNeighborhoodBySlug(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
