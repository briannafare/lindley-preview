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
];

export function getNeighborhoodBySlug(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
