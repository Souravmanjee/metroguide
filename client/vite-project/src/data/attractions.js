// Comprehensive tourist attractions and regional places in Kolkata
export const kolkataAttractions = [
  // Historical Places
  {
    id: 1,
    name: "Victoria Memorial",
    description: "Iconic marble monument dedicated to Queen Victoria, now a museum showcasing British colonial history",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 2,
    name: "Fort William",
    description: "Historic British fort built in 1696, now headquarters of the Eastern Command of Indian Army",
    nearbyStations: ["Maidan", "Esplanade"],
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 3,
    name: "Marble Palace",
    description: "19th-century mansion with marble walls and floors, featuring European sculptures and paintings",
    nearbyStations: ["Shyambazar", "Sovabazar-Sutanuti"],
    image: "https://images.pexels.com/photos/3573390/pexels-photo-3573390.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 4,
    name: "South Park Street Cemetery",
    description: "Historic colonial cemetery with Gothic monuments and tombs of British officials",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://images.pexels.com/photos/3573393/pexels-photo-3573393.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 5,
    name: "Writers' Building",
    description: "Historic government building that served as the secretariat of West Bengal",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 6,
    name: "Raj Bhavan",
    description: "Official residence of the Governor of West Bengal, former Government House",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://images.pexels.com/photos/1007428/pexels-photo-1007428.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },

  // Religious Places
  {
    id: 7,
    name: "Dakshineswar Kali Temple",
    description: "Sacred Hindu temple dedicated to Goddess Kali, associated with Sri Ramakrishna",
    nearbyStations: ["Dakshineswar"],
    image: "https://images.pexels.com/photos/3573384/pexels-photo-3573384.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 8,
    name: "Kalighat Temple",
    description: "Ancient temple dedicated to Goddess Kali, one of the 51 Shakti Peethas",
    nearbyStations: ["Kalighat"],
    image: "https://images.pexels.com/photos/3573386/pexels-photo-3573386.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 9,
    name: "Belur Math",
    description: "Headquarters of the Ramakrishna Math and Mission, founded by Swami Vivekananda",
    nearbyStations: ["Dakshineswar", "Baranagar"],
    image: "https://images.pexels.com/photos/3573392/pexels-photo-3573392.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 10,
    name: "St. Paul's Cathedral",
    description: "Anglican cathedral and the first episcopal church in Asia",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://images.pexels.com/photos/1007429/pexels-photo-1007429.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 11,
    name: "Nakhoda Mosque",
    description: "Principal mosque of Kolkata, built in Indo-Saracenic style",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://images.pexels.com/photos/1007430/pexels-photo-1007430.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 12,
    name: "Birla Mandir",
    description: "Modern Hindu temple dedicated to Lord Krishna and Radha",
    nearbyStations: ["Rabindra Sadan", "Maidan"],
    image: "https://images.pexels.com/photos/1007431/pexels-photo-1007431.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 13,
    name: "Jain Temple Pareshnath",
    description: "Beautiful Jain temple known for its intricate architecture and peaceful atmosphere",
    nearbyStations: ["Girish Park", "Central"],
    image: "https://images.pexels.com/photos/1007432/pexels-photo-1007432.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },

  // Cultural Places
  {
    id: 14,
    name: "Indian Museum",
    description: "Oldest and largest museum in India with rare collections of antiques and artifacts",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://images.pexels.com/photos/3573385/pexels-photo-3573385.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 15,
    name: "Academy of Fine Arts",
    description: "Premier institution for fine arts with galleries showcasing contemporary and traditional art",
    nearbyStations: ["Rabindra Sadan", "Maidan"],
    image: "https://images.pexels.com/photos/1007433/pexels-photo-1007433.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 16,
    name: "Rabindra Bharati Museum",
    description: "Museum dedicated to Nobel laureate Rabindranath Tagore's life and works",
    nearbyStations: ["Girish Park", "Sovabazar-Sutanuti"],
    image: "https://images.pexels.com/photos/1007434/pexels-photo-1007434.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 17,
    name: "Netaji Bhawan",
    description: "Ancestral home of Netaji Subhas Chandra Bose, now a museum",
    nearbyStations: ["Kalighat", "Jatin Das Park"],
    image: "https://images.pexels.com/photos/1007435/pexels-photo-1007435.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 18,
    name: "Tagore House",
    description: "Ancestral home of the Tagore family, birthplace of Rabindranath Tagore",
    nearbyStations: ["Girish Park", "Central"],
    image: "https://images.pexels.com/photos/1007436/pexels-photo-1007436.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 19,
    name: "Kala Mandir",
    description: "Cultural center hosting theater performances, concerts, and cultural events",
    nearbyStations: ["Rabindra Sadan", "Maidan"],
    image: "https://images.pexels.com/photos/1007437/pexels-photo-1007437.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },

  // Educational Places
  {
    id: 20,
    name: "Science City",
    description: "Largest science center in the Indian subcontinent with interactive exhibits",
    nearbyStations: ["Rabindra Sarobar", "Tollygunge"],
    image: "https://images.pexels.com/photos/3573387/pexels-photo-3573387.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },
  {
    id: 21,
    name: "Birla Planetarium",
    description: "One of the largest planetariums in Asia with astronomy shows and exhibitions",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://images.pexels.com/photos/3573389/pexels-photo-3573389.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },
  {
    id: 22,
    name: "Alipore Zoo",
    description: "One of the oldest zoos in India, home to diverse wildlife species",
    nearbyStations: ["Kalighat", "Jatin Das Park"],
    image: "https://images.pexels.com/photos/1007438/pexels-photo-1007438.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },
  {
    id: 23,
    name: "Aquatica",
    description: "Water theme park with thrilling rides and water attractions",
    nearbyStations: ["New Garia", "Kavi Nazrul"],
    image: "https://images.pexels.com/photos/1007439/pexels-photo-1007439.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },

  // Shopping Places
  {
    id: 24,
    name: "New Market",
    description: "Historic shopping complex in central Kolkata, famous for variety of goods",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://images.pexels.com/photos/3573388/pexels-photo-3573388.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Shopping"
  },
  {
    id: 25,
    name: "Gariahat Market",
    description: "Popular shopping destination for traditional Bengali sarees and handicrafts",
    nearbyStations: ["Rabindra Sarobar", "Kalighat"],
    image: "https://images.pexels.com/photos/1007440/pexels-photo-1007440.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Shopping"
  },
  {
    id: 26,
    name: "College Street",
    description: "Famous book market, largest second-hand book market in the world",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://images.pexels.com/photos/1007441/pexels-photo-1007441.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Shopping"
  },
  {
    id: 27,
    name: "Shyama Charan Street",
    description: "Traditional market known for ethnic wear and Bengali handicrafts",
    nearbyStations: ["Shyama Charan", "Shyambazar"],
    image: "https://images.pexels.com/photos/1007442/pexels-photo-1007442.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Shopping"
  },
  {
    id: 28,
    name: "Hatibagan Market",
    description: "Local market famous for fresh fish, vegetables, and daily essentials",
    nearbyStations: ["Shyambazar", "Sovabazar-Sutanuti"],
    image: "https://images.pexels.com/photos/1007443/pexels-photo-1007443.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Shopping"
  },
  {
    id: 29,
    name: "Burrabazar",
    description: "One of the largest wholesale markets in India for textiles and goods",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://images.pexels.com/photos/1007444/pexels-photo-1007444.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Shopping"
  },

  // Landmarks
  {
    id: 30,
    name: "Howrah Bridge",
    description: "Famous cantilever bridge over the Hooghly River, iconic symbol of Kolkata",
    nearbyStations: ["Howrah", "Howrah Maidan"],
    image: "https://images.pexels.com/photos/3573383/pexels-photo-3573383.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Landmark"
  },
  {
    id: 31,
    name: "Vidyasagar Setu",
    description: "Cable-stayed bridge connecting Kolkata and Howrah, second Hooghly bridge",
    nearbyStations: ["Howrah", "Esplanade"],
    image: "https://images.pexels.com/photos/1007445/pexels-photo-1007445.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Landmark"
  },
  {
    id: 32,
    name: "Shaheed Minar",
    description: "Historic monument commemorating the martyrs of Indian independence",
    nearbyStations: ["Esplanade", "Maidan"],
    image: "https://images.pexels.com/photos/1007446/pexels-photo-1007446.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Landmark"
  },
  {
    id: 33,
    name: "Millennium Park",
    description: "Riverside park along the Hooghly River with beautiful city views",
    nearbyStations: ["Howrah", "Esplanade"],
    image: "https://images.pexels.com/photos/1007447/pexels-photo-1007447.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Landmark"
  },

  // Sports & Recreation
  {
    id: 34,
    name: "Eden Gardens",
    description: "Historic cricket stadium and one of the largest in the world",
    nearbyStations: ["Maidan", "Esplanade"],
    image: "https://images.pexels.com/photos/3573391/pexels-photo-3573391.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Sports"
  },
  {
    id: 35,
    name: "Salt Lake Stadium",
    description: "Multi-purpose stadium, one of the largest football stadiums in the world",
    nearbyStations: ["New Town", "Baguiati"],
    image: "https://images.pexels.com/photos/1007448/pexels-photo-1007448.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Sports"
  },
  {
    id: 36,
    name: "Maidan",
    description: "Large urban park, the lungs of Kolkata with various sports facilities",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://images.pexels.com/photos/1007449/pexels-photo-1007449.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Sports"
  },
  {
    id: 37,
    name: "Rabindra Sarobar",
    description: "Artificial lake and recreational area, popular for morning walks and boating",
    nearbyStations: ["Rabindra Sarobar", "Tollygunge"],
    image: "https://images.pexels.com/photos/1007450/pexels-photo-1007450.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Sports"
  },

  // Entertainment
  {
    id: 38,
    name: "Nicco Park",
    description: "Amusement park with thrilling rides and entertainment for families",
    nearbyStations: ["New Town", "Baguiati"],
    image: "https://images.pexels.com/photos/1007451/pexels-photo-1007451.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Entertainment"
  },
  {
    id: 39,
    name: "Eco Park",
    description: "Large urban park with lakes, gardens, and recreational activities",
    nearbyStations: ["New Town", "Baguiati"],
    image: "https://images.pexels.com/photos/1007452/pexels-photo-1007452.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Entertainment"
  },
  {
    id: 40,
    name: "Quest Mall",
    description: "Modern shopping mall with retail stores, restaurants, and entertainment",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://images.pexels.com/photos/1007453/pexels-photo-1007453.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Entertainment"
  },

  // Food & Culture
  {
    id: 41,
    name: "Park Street",
    description: "Famous street known for restaurants, pubs, and nightlife",
    nearbyStations: ["Park Street"],
    image: "https://images.pexels.com/photos/1007454/pexels-photo-1007454.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Food"
  },
  {
    id: 42,
    name: "Kumartuli",
    description: "Traditional potter's quarter famous for clay idol making",
    nearbyStations: ["Sovabazar-Sutanuti", "Girish Park"],
    image: "https://images.pexels.com/photos/1007455/pexels-photo-1007455.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 43,
    name: "Chinatown",
    description: "Historic Chinese settlement with authentic Chinese restaurants and culture",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://images.pexels.com/photos/1007456/pexels-photo-1007456.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Food"
  },
  {
    id: 44,
    name: "Coffee House",
    description: "Historic coffee house, intellectual hub and cultural meeting place",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://images.pexels.com/photos/1007457/pexels-photo-1007457.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Food"
  },

  // Heritage & Architecture
  {
    id: 45,
    name: "High Court",
    description: "Historic building housing the Calcutta High Court, architectural marvel",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://images.pexels.com/photos/1007458/pexels-photo-1007458.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 46,
    name: "General Post Office",
    description: "Historic post office building with impressive colonial architecture",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://images.pexels.com/photos/1007459/pexels-photo-1007459.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 47,
    name: "Town Hall",
    description: "Neoclassical building housing various cultural and administrative offices",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://images.pexels.com/photos/1007460/pexels-photo-1007460.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Historical"
  },
  {
    id: 48,
    name: "Armenian Church",
    description: "Historic Armenian Apostolic church, one of the oldest in Kolkata",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://images.pexels.com/photos/1007461/pexels-photo-1007461.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },

  // Modern Attractions
  {
    id: 49,
    name: "Mother House",
    description: "Mother Teresa's residence and final resting place, now a pilgrimage site",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://images.pexels.com/photos/1007462/pexels-photo-1007462.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 50,
    name: "Prinsep Ghat",
    description: "Historic ghat on the Hooghly River with beautiful sunset views",
    nearbyStations: ["Esplanade", "Maidan"],
    image: "https://images.pexels.com/photos/1007463/pexels-photo-1007463.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Landmark"
  },
  {
    id: 51,
    name: "Babu Ghat",
    description: "Historic bathing ghat on the Hooghly River, popular for evening walks",
    nearbyStations: ["Esplanade", "Maidan"],
    image: "https://images.pexels.com/photos/1007464/pexels-photo-1007464.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Landmark"
  },
  {
    id: 52,
    name: "Botanical Garden",
    description: "Historic botanical garden famous for the Great Banyan Tree",
    nearbyStations: ["Howrah", "Howrah Maidan"],
    image: "https://images.pexels.com/photos/1007465/pexels-photo-1007465.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },

  // Additional Cultural Sites
  {
    id: 53,
    name: "Jorasanko Thakur Bari",
    description: "Ancestral home of Rabindranath Tagore, now Rabindra Bharati University",
    nearbyStations: ["Girish Park", "Central"],
    image: "https://images.pexels.com/photos/1007466/pexels-photo-1007466.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Cultural"
  },
  {
    id: 54,
    name: "Ramakrishna Mission Institute",
    description: "Educational and spiritual institution founded by Swami Vivekananda",
    nearbyStations: ["Tollygunge", "Rabindra Sarobar"],
    image: "https://images.pexels.com/photos/1007467/pexels-photo-1007467.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },
  {
    id: 55,
    name: "Calcutta University",
    description: "One of the oldest universities in India, historic educational institution",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://images.pexels.com/photos/1007468/pexels-photo-1007468.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },
  {
    id: 56,
    name: "Presidency University",
    description: "Premier educational institution with rich academic heritage",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://images.pexels.com/photos/1007469/pexels-photo-1007469.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Educational"
  },

  // Religious Diversity
  {
    id: 57,
    name: "Tipu Sultan Mosque",
    description: "Historic mosque built by Tipu Sultan, architectural significance",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://images.pexels.com/photos/1007470/pexels-photo-1007470.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 58,
    name: "Beth El Synagogue",
    description: "Historic Jewish synagogue, representing Kolkata's Jewish heritage",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://images.pexels.com/photos/1007471/pexels-photo-1007471.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 59,
    name: "Magen David Synagogue",
    description: "Beautiful synagogue showcasing Jewish architectural heritage",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://images.pexels.com/photos/1007472/pexels-photo-1007472.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  },
  {
    id: 60,
    name: "Gurudwara Bhai Joga Singh",
    description: "Sikh temple serving the Sikh community with langar and prayers",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://images.pexels.com/photos/1007473/pexels-photo-1007473.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Religious"
  }
]

// Get attractions near specific stations
export const getAttractionsNearStations = (stations) => {
  if (!stations || stations.length === 0) return kolkataAttractions
  
  return kolkataAttractions.filter(attraction =>
    attraction.nearbyStations.some(station =>
      stations.includes(station)
    )
  )
}

// Get attractions by category
export const getAttractionsByCategory = (category) => {
  return kolkataAttractions.filter(attraction => attraction.category === category)
}

// Get all categories
export const getCategories = () => {
  return [...new Set(kolkataAttractions.map(attraction => attraction.category))]
}

// Get attractions by search term
export const searchAttractions = (searchTerm) => {
  if (!searchTerm) return kolkataAttractions
  
  const term = searchTerm.toLowerCase()
  return kolkataAttractions.filter(attraction =>
    attraction.name.toLowerCase().includes(term) ||
    attraction.description.toLowerCase().includes(term) ||
    attraction.category.toLowerCase().includes(term) ||
    attraction.nearbyStations.some(station => station.toLowerCase().includes(term))
  )
}

// Get random featured attractions
export const getFeaturedAttractions = (count = 6) => {
  const shuffled = [...kolkataAttractions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}