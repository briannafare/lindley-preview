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

];

export function getNeighborhoodBySlug(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
