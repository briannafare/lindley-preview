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

export function getNeighborhoodBySlug(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
