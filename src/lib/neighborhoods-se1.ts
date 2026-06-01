import type { NeighborhoodData } from "./neighborhoods";

export const neighborhoodsSE1: NeighborhoodData[] = [
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
];
