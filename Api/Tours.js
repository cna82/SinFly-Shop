const TOURS = [
  {
    id: 0,
    imgSrc: {
      img1: "./Images/Tours/NorthPole/1.png",
      img2: "./Images/Tours/NorthPole/2.png",
      img3: "./Images/Tours/NorthPole/3.png",
    },
    title: "North Pole (Russia)",
    hasSpecialOffer: true,
    date: "2024-10-30 / 2024-11-06",
    duration: "7 Nights",
    transportationVehicle: "Plane",
    price: 1200,
    discountPercent: 10,
    rating: 4.9,
    description: `
      A North Pole tour is an extraordinary adventure to the very top of the world.
      Travelers typically embark on icebreaker ships to navigate through the Arctic sea ice.
      You will witness stunning landscapes of endless ice and snow, encounter incredible wildlife like polar bears and seals. ",
      `,
  },
  {
    id: 1,
    imgSrc: {
      img1: "./Images/Tours/Paris/1.png",
      img2: "./Images/Tours/Paris/2.png",
      img3: "./Images/Tours/Paris/3.png",
    },
    title: "France ( Paris )",
    hasSpecialOffer: true,
    date: "2024-11-02 / 2024-11-07",
    duration: "5 Nights",
    transportationVehicle: "Train",
    price: 1100,
    discountPercent: 5,
    rating: 4.8,
    description: `
      A Paris tour offers an enchanting journey through the City of Light. You'll explore iconic landmarks like the Eiffel Tower,
      Notre-Dame Cathedral, and the Louvre Museum.Wander through charming neighborhoods such as Montmartre and the Latin Quarter,
      savor exquisite French cuisine at local bistros, and stroll along the Seine River.
      `,
  },
  {
    id: 2,
    imgSrc: {
      img1: "./Images/Tours/Hanoi/1.png",
      img2: "./Images/Tours/Hanoi/2.png",
      img3: "./Images/Tours/Hanoi/3.png",
    },
    title: "Vietnam ( Hanoi )",
    hasSpecialOffer: true,
    date: "2024-11-05 / 2024-11-19",
    duration: "14 Nights",
    transportationVehicle: "Plane",
    price: 2000,
    discountPercent: 3,
    rating: 4.6,
    description: `
      A Hanoi tour offers a vibrant journey through Vietnam's capital, rich in history, culture, and bustling energy.
      Explore the Old Quarter with its narrow streets and traditional shophouses, visit historical sites such as the Ho Chi Minh Mausoleum,
      and enjoy the serene beauty of Hoan Kiem Lake.,
      `,
  },
  {
    id: 3,
    imgSrc: {
      img1: "./Images/Tours/Istanbul/1.png",
      img2: "./Images/Tours/Istanbul/2.png",
      img3: "./Images/Tours/Istanbul/3.png",
    },
    title: "Turkey ( Istanbul )",
    hasSpecialOffer: true,
    date: "2024-11-10 / 2024-11-17",
    duration: "7 Nights",
    transportationVehicle: "Plane",
    price: 800,
    discountPercent: 6,
    rating: 4.7,
    description: `
      An Istanbul tour is a captivating journey through a city that straddles two continents, Europe and Asia. 
      You'll explore magnificent landmarks such as the Hagia Sophia, Blue Mosque, and Topkapi Palace,
      which showcase the city's rich history and diverse architecture. Wander through the bustling Grand Bazaar.",
      `,
  },
  {
    id: 4,
    imgSrc: {
      img1: "./Images/Tours/Dubai/1.png",
      img2: "./Images/Tours/Dubai/2.png",
      img3: "./Images/Tours/Dubai/3.png",
    },
    title: "UAE ( Dubai )",
    hasSpecialOffer: true,
    date: "2024-11-8 / 2024-11-20",
    duration: "12 Nights",
    transportationVehicle: "Boat",
    price: 750,
    discountPercent: 10,
    rating: 4.5,
    description: `
      A Dubai tour offers a dazzling experience in one of the world  most luxurious and modern cities.
      You will explore iconic landmarks such as the Burj Khalifa, the tallest building in the world,
      and the Palm Jumeirah, an artificial archipelago. Shop at the extravagant Dubai Mall and the traditional souks.
      `,
  },
  {
    id: 5,
    imgSrc: {
      img1: "./Images/Tours/Antalya/1.png",
      img2: "./Images/Tours/Antalya/2.png",
      img3: "./Images/Tours/Antalya/3.png",
    },
    title: "Turkey ( Antalya )",
    date: "2024-11-2 / 2024-11-10",
    duration: "8 Nights",
    transportationVehicle: "Plane",
    price: 850,
    rating: 4.4,
    description: `
      An Antalya tour offers an enchanting mix of historical sites, stunning beaches, and vibrant culture on Turkey’s Mediterranean coast.
      You'll explore ancient ruins like the Roman Hadrian’s Gate and the well-preserved theater in Aspendos.
      The old town of Kaleiçi, with its narrow, winding streets.`,
  },
  {
    id: 6,
    imgSrc: {
      img1: "./Images/Tours/Van/1.png",
      img2: "./Images/Tours/Van/2.png",
      img3: "./Images/Tours/Van/3.png",
    },
    title: "Turkey ( Van )",
    hasSpecialOffer: false,
    date: "2024-11-04 / 2024-11-09",
    duration: "5 Nights",
    transportationVehicle: "Bus",
    price: 400,
    rating: 3.9,
    description: `
      A Van tour offers a captivating experience in eastern Turkey, known for its rich history, stunning landscapes, and cultural heritage.
      You can explore the ancient Van Castle, which offers panoramic views of Lake Van, the largest lake in Turkey.
      Visit the historic Akdamar Island and its famous Armenian Church of the Holy Cross.`,
  },
  {
    id: 7,
    imgSrc: {
      img1: "./Images/Tours/Beijing/1.png",
      img2: "./Images/Tours/Beijing/2.png",
      img3: "./Images/Tours/Beijing/3.png",
    },
    title: "China ( Beijing )",
    hasSpecialOffer: true,
    date: "2024-11-09 / 2024-11-29",
    duration: "20 Nights",
    transportationVehicle: "Plane",
    price: 1500,
    discountPercent: 4,
    rating: 4.1,
    description: `
      A Beijing tour offers an immersive journey through China's historic and vibrant capital.
      You'll explore iconic landmarks such as the Great Wall, Forbidden City, and Tiananmen Square.
      Discover the rich cultural heritage at the Summer Palace and Temple of Heaven. Wander through the bustling hutongs.`,
  },
  {
    id: 8,
    imgSrc: {
      img1: "./Images/Tours/Tiflis/1.png",
      img2: "./Images/Tours/Tiflis/2.png",
      img3: "./Images/Tours/Tiflis/3.png",
    },
    title: "Georgia ( Tiflis )",
    hasSpecialOffer: false,
    date: "2024-11-2 / 2024-11-10",
    duration: "8 Nights",
    transportationVehicle: "Bus",
    price: 1000,
    rating: 4.2,
    description: `
      A Tbilisi tour offers an enchanting exploration of Georgia's capital, known for its unique blend of ancient history and modern vibrancy.
      Wander through the cobblestone streets of the Old Town, with its charming balconies.`,
  },
  {
    id: 9,
    imgSrc: {
      img1: "./Images/Tours/Tokyo/1.png",
      img2: "./Images/Tours/Tokyo/2.png",
      img3: "./Images/Tours/Tokyo/3.png",
    },
    title: "Japan ( Tokyo )",
    hasSpecialOffer: true,
    date: "2024-11-20 / 2024-12-05",
    duration: "15 Nights",
    transportationVehicle: "Plane",
    price: 2500,
    discountPercent: 1,
    rating: 4,
    description: `
      A Tokyo tour offers an exciting journey through one of the most vibrant and dynamic cities in the world.
      Explore the bustling neighborhoods of Shibuya and Shinjuku, where neon lights and towering skyscrapers define the skyline. 
      Visit historic sites like the Senso-ji Temple in Asakusa and the Meiji Shrine nestled in a serene forested area.`,
  },
  {
    id: 10,
    imgSrc: {
      img1: "./Images/Tours/Amazon/1.png",
      img2: "./Images/Tours/Amazon/2.png",
      img3: "./Images/Tours/Amazon/3.png",
    },
    title: "Brazil ( Amazon )",
    hasSpecialOffer: false,
    date: "2024-11-08 / 2024-11-28",
    duration: "20 Nights",
    transportationVehicle: "Plane",
    price: 3500,
    rating: 4.2,
    description: `
      An Amazon tour in Brazil offers an extraordinary adventure through the world's largest rainforest.
      You'll embark on guided expeditions along the Amazon River, encountering diverse wildlife such as monkeys,
      pink dolphins, and countless bird species. Explore lush rainforests, experience the local indigenous culture,
      and visit remote villages. Night safaris provide a glimpse into the vibrant nocturnal life of the jungle.`,
  },
  {
    id: 11,
    imgSrc: {
      img1: "./Images/Tours/Shiraz/1.png",
      img2: "./Images/Tours/Shiraz/2.png",
      img3: "./Images/Tours/Shiraz/3.png",
    },
    title: "Iran ( Shiraz )",
    hasSpecialOffer: true,
    date: "2024-11-03 / 2024-11-10",
    duration: "7 Nights",
    transportationVehicle: "Plane",
    price: 500,
    discountPercent: 2,
    rating: 4.8,
    description: `
      A Shiraz tour offers a journey through the heart of Persian culture and history.
      Known as the city of poets, literature, wine, and flowers, Shiraz boasts beautiful gardens,
      historic sites, and stunning architecture. Explore the majestic Persepolis ruins, a UNESCO World Heritage site, and the ancient city of Pasargadae.`,
  },
  {
    id: 12,
    imgSrc: {
      img1: "./Images/Tours/Najaf/1.png",
      img2: "./Images/Tours/Najaf/2.png",
      img3: "./Images/Tours/Najaf/3.png",
    },
    title: "Iraq ( Najaf )",
    hasSpecialOffer: false,
    date: "2024-11-05 / 2024-11-13",
    duration: "8 Nights",
    transportationVehicle: "Bus",
    price: 400,
    rating: 4,
    description: `
      A Najaf tour offers a deeply immersive experience in one of the holiest cities for Shia Muslims. 
      The centerpiece of the tour is the Imam Ali Shrine, where Ali ibn Abi Talib, the cousin and son-in-law of Prophet Muhammad, 
      is buried. This shrine attracts millions of pilgrims each year, serving as a site of profound spiritual and historical importance.`,
  },
  {
    id: 13,
    imgSrc: {
      img1: "./Images/Tours/Rome/1.png",
      img2: "./Images/Tours/Rome/2.png",
      img3: "./Images/Tours/Rome/3.png",
    },
    title: "Italy ( Rome )",
    hasSpecialOffer: false,
    date: "2024-11-10 / 2024-11-22",
    duration: "12 Nights",
    transportationVehicle: "Boat",
    price: 1250,
    rating: 3.5,
    description: `
      A Rome tour offers an unforgettable journey through the heart of ancient and modern Italy. 
      Discover iconic landmarks such as the Colosseum, Roman Forum, and the Pantheon, which showcase the city's rich history and architectural grandeur.
      Wander through the picturesque streets of Trastevere, visit the majestic Vatican City with St. Peter's Basilica and the Sistine Chapel.`,
  },
  {
    id: 14,
    imgSrc: {
      img1: "./Images/Tours/Mashhad/1.png",
      img2: "./Images/Tours/Mashhad/2.png",
      img3: "./Images/Tours/Mashhad/3.png",
    },
    title: "Iran ( Mashhad )",
    hasSpecialOffer: true,
    date: "2024-11-02 / 2024-11-06",
    duration: "4 Nights",
    transportationVehicle: "Train",
    price: 200,
    discountPercent: 5,
    rating: 3.4,
    description: `
      A tour of Mashhad offers a deeply spiritual and culturally enriching experience in one of Iran's most revered cities.
      At the heart of the tour is the Imam Reza Shrine, the largest mosque in the world by dimension and the burial place of the eighth Shia Imam,
      attracting millions of pilgrims annually.`,
  },
  {
    id: 15,
    imgSrc: {
      img1: "./Images/Tours/Yazd/1.png",
      img2: "./Images/Tours/Yazd/2.png",
      img3: "./Images/Tours/Yazd/3.png",
    },
    title: "Iran ( Yazd )",
    hasSpecialOffer: false,
    date: "2024-11-03 / 2024-11-07",
    duration: "4 Nights",
    transportationVehicle: "Bus",
    price: 250,
    rating: 3.6,
    description: `
      A Yazd tour offers a fascinating journey through one of Iran's oldest and most unique cities.
      Known for its ancient Persian architecture, Yazd features mud-brick houses, wind towers (badgirs), and labyrinthine alleys.
      Key attractions include the Zoroastrian Fire Temple, home to a fire that has been burning for over 1,500 years, and the Towers of Silence,
      ancient Zoroastrian burial grounds.`,
  },
  {
    id: 16,
    imgSrc: {
      img1: "./Images/Tours/Munich/1.png",
      img2: "./Images/Tours/Munich/2.png",
      img3: "./Images/Tours/Munich/3.png",
    },
    title: "Germany ( Munich )",
    hasSpecialOffer: false,
    date: "2024-11-20 / 2024-11-29",
    duration: "9 Nights",
    transportationVehicle: "plane",
    price: 1890,
    rating: 4.2,
    description: `
      A Munich tour offers a rich blend of history, culture, and Bavarian charm.
      You'll explore iconic sites such as the Marienplatz with its famous Glockenspiel,
      the majestic Nymphenburg Palace, and the historic Frauenkirche. Wander through the vibrant Viktualienmarkt,
      a bustling food market, and relax in the picturesque English Garden.
      Munich is also home to world-renowned museums like the Deutsches Museum and the BMW Museum.`,
  },
  {
    id: 17,
    imgSrc: {
      img1: "./Images/Tours/Stockholm/1.png",
      img2: "./Images/Tours/Stockholm/2.png",
      img3: "./Images/Tours/Stockholm/3.png",
    },
    title: "Sweden ( Stockholm )",
    hasSpecialOffer: true,
    date: "2024-11-02 / 2024-11-17",
    duration: "15 Nights",
    transportationVehicle: "Boat",
    price: 2120,
    discountPercent: 10,
    rating: 4.5,
    description: `
      A tour of Stockholm offers a delightful journey through Sweden's capital, known for its stunning archipelago, 
      rich history, and vibrant culture. You'll explore the picturesque Gamla Stan (Old Town)
      with its cobblestone streets and colorful buildings.Visit iconic landmarks such as the Royal Palace,
      the Nobel Prize Museum.`,
  },
  {
    id: 18,
    imgSrc: {
      img1: "./Images/Tours/Basel/1.png",
      img2: "./Images/Tours/Basel/2.png",
      img3: "./Images/Tours/Basel/3.png",
    },
    title: "Switzerland ( Basel )",
    hasSpecialOffer: false,
    date: "2024-11-05 / 2024-11-25",
    duration: "20 Nights",
    transportationVehicle: "plane",
    price: 2610,
    rating: 4.5,
    description: `
      A Basel tour offers a delightful journey through Switzerland's third-largest city, located at the borders of France and Germany. 
      Explore the charming Old Town with its cobblestone streets, historic Basel Cathedral, and the vibrant town hall. 
      Discover world-class museums such as the Tinguely Museum and the Kunstmuseum Basel, which showcase an impressive collection of art.`,
  },
  {
    id: 19,
    imgSrc: {
      img1: "./Images/Tours/Arboga/1.png",
      img2: "./Images/Tours/Arboga/2.png",
      img3: "./Images/Tours/Arboga/3.png",
    },
    title: "Sweden ( Arboga )",
    hasSpecialOffer: false,
    date: "2024-11-10 / 2024-11-28",
    duration: "18 Nights",
    transportationVehicle: "Boat",
    price: 2100,
    rating: 4.1,
    description: `
      A tour of Arboga, Sweden, offers a charming glimpse into a city with a rich history and picturesque surroundings. 
      Explore the well-preserved medieval city center, complete with unique architecture and boutique shops. Visit the Heliga Trefaldighetskyrkan, 
      a beautiful church with detailed explanations in both Swedish and English.`,
  },
  {
    id: 20,
    imgSrc: {
      img1: "./Images/Tours/Qeshm/1.png",
      img2: "./Images/Tours/Qeshm/2.png",
      img3: "./Images/Tours/Qeshm/3.png",
    },
    title: "Iran ( Qeshm )",
    hasSpecialOffer: true,
    date: "2024-11-02 / 2024-11-08",
    duration: "6 Nights",
    transportationVehicle: "Plane",
    price: 600,
    discountPercent: 5,
    rating: 4.6,
    description: `
      A tour of Qeshm Island in Iran offers a unique adventure through one of the Persian Gulf's largest islands. Here's a glimpse of what you can expect:
      Qeshm Island Geopark: Explore stunning geological formations, including mountains, caves, and valleys, all part of this UNESCO Global Geopark.
      Hara Mangrove Forests: Visit the mangrove forests.`,
  },
  {
    id: 21,
    imgSrc: {
      img1: "./Images/Tours/Kish/1.png",
      img2: "./Images/Tours/Kish/2.png",
      img3: "./Images/Tours/Kish/3.png",
    },
    title: "Iran ( Kish )",
    hasSpecialOffer: false,
    date: "2024-11-03 / 2024-11-07",
    duration: "4 Nights",
    transportationVehicle: "Plane",
    price: 550,
    rating: 4.6,
    description: `
      A tour of Kish Island in Iran offers a delightful escape to a luxurious resort in the Persian Gulf. Known as the "Pearl of the Persian Gulf," 
      Kish boasts beautiful beaches with crystal-clear waters, towering palm trees, and a laid-back atmosphere.
      Explore historical attractions like the ruins of Harireh, an ancient port city, and the Kariz Underground City, a network of ancient water channels.`,
  },
  {
    id: 22,
    imgSrc: {
      img1: "./Images/Tours/Isfahan/1.png",
      img2: "./Images/Tours/Isfahan/2.png",
      img3: "./Images/Tours/Isfahan/3.png",
    },
    title: "Iran ( Isfahan )",
    hasSpecialOffer: true,
    date: "2024-11-10 / 2024-11-15",
    duration: "5 Nights",
    transportationVehicle: "Train",
    price: 700,
    rating: 4.2,
    discountPercent: 2,
    description: `
      A tour of Isfahan, Iran,offers a captivating journey through a city known for its stunning architecture, rich history, 
      and vibrant culture. referred to as "Half of the World" due to its numerous cultural sites, Isfahan boasts breathtaking landmarks such as:
      Naqsh-e Jahan Square: this historic square is surrounded by the Imam Mosque, Sheikh Lotfollah Mosque, and the Ali Qapu Palace.
      Si-o-se-pol Bridge.`,
  },
  {
    id: 23,
    imgSrc: {
      img1: "./Images/Tours/Prague/1.png",
      img2: "./Images/Tours/Prague/2.png",
      img3: "./Images/Tours/Prague/3.png",
    },
    title: "Czech ( Prague )",
    hasSpecialOffer: false,
    date: "2024-11-20 / 2024-12-10",
    duration: "20 Nights",
    transportationVehicle: "Plane",
    price: 4650,
    rating: 4.7,
    description: `
      A tour of Prague, the capital of the Czech Republic, offers an enchanting experience through a city rich in history and stunning architecture.
      Some highlights include:
      Prague Castle: The largest ancient castle in the world, home to the magnificent St. Vitus Cathedral and picturesque Golden Lane.
      Charles Bridge.`,
  },
  {
    id: 24,
    imgSrc: {
      img1: "./Images/Tours/Bangkok/1.png",
      img2: "./Images/Tours/Bangkok/2.png",
      img3: "./Images/Tours/Bangkok/3.png",
    },
    title: "Thailand ( Bangkok )",
    hasSpecialOffer: true,
    date: "2024-11-01 / 2024-11-25",
    duration: "24 Nights",
    transportationVehicle: "Plane",
    price: 7000,
    discountPercent: 12,
    rating: 4.4,
    description: `
      Bangkok's vibrant nightlife, delicious street food, and rich cultural heritage make it a must-visit destination for travelers.
      Whether you're exploring historic temples, shopping in bustling markets, or indulging in Thai cuisine,
      Bangkok promises an unforgettable travel experience.`,
  },
  {
    id: 25,
    imgSrc: {
      img1: "./Images/Tours/Chefchaouen/1.png",
      img2: "./Images/Tours/Chefchaouen/2.png",
      img3: "./Images/Tours/Chefchaouen/3.png",
    },
    title: "Morocco( Chefchaouen )",
    hasSpecialOffer: false,
    date: "2024-11-04 / 2024-11-15",
    duration: "11 Nights",
    transportationVehicle: "Plane",
    price: 4700,
    rating: 4.1,
    description: `
      A tour of Chefchaouen, Morocco, offers a magical journey through a city known for its striking blue-washed buildings and narrow, winding streets.
      Nestled in the Rif Mountains, Chefchaouen provides a serene and picturesque escape with plenty to explore:
      Medina: Wander through the charming Medina, filled with vibrant markets.
      Kasbah Museum: Visit this historic fortress and museum in the heart of the Medina.`,
  },
  {
    id: 26,
    imgSrc: {
      img1: "./Images/Tours/Amsterdam/1.png",
      img2: "./Images/Tours/Amsterdam/2.png",
      img3: "./Images/Tours/Amsterdam/3.png",
    },
    title: "NTH- ( Amsterdam )",
    hasSpecialOffer: false,
    date: "2024-11-15 / 2024-11-22",
    duration: "7 Nights",
    transportationVehicle: "Plane",
    price: 2200,
    rating: 4.6,
    description: `
      A tour of Amsterdam, the capital of the Netherlands, offers a rich blend of history, culture, and scenic beauty. Here are some highlights:
      Canal Cruises: Experience the charm of Amsterdam's historic canals with a boat tour, providing a unique perspective of the city's architecture and bridges.
      Rijksmuseum: Discover the Netherlands' premier art museum.`,
  },
  {
    id: 27,
    imgSrc: {
      img1: "./Images/Tours/London/1.png",
      img2: "./Images/Tours/London/2.png",
      img3: "./Images/Tours/London/3.png",
    },
    title: "England ( London )",
    hasSpecialOffer: true,
    date: "2024-11-17 / 2024-11-30",
    duration: "13 Nights",
    transportationVehicle: "Plane",
    discountPercent: 3,
    price: 3700,
    rating: 4.5,
    description: `
      A tour of London, the capital of the United Kingdom, offers a captivating mix of historical landmarks, 
      cultural treasures, and modern attractions.
      London's blend of historic charm and modern vibrancy makes it an unforgettable destination. Whether exploring its iconic landmarks, enjoying world-class museums.`,
  },
  {
    id: 28,
    imgSrc: {
      img1: "./Images/Tours/Vancouver/1.png",
      img2: "./Images/Tours/Vancouver/2.png",
      img3: "./Images/Tours/Vancouver/3.png",
    },
    title: "Canada ( Vancouver )",
    hasSpecialOffer: false,
    date: "2024-11-22 / 2024-12-12",
    duration: "13 Nights",
    transportationVehicle: "Plane",
    price: 3900,
    rating: 4.2,
    description: `
      A tour of Vancouver, Canada, offers a mix of natural beauty, urban sophistication, and diverse cultural experiences. Here are some highlights:
      Stanley Park: Explore this vast urban park with its scenic seawall, lush forests, and beautiful gardens. Don't miss the Vancouver Aquarium and the iconic totem poles.
      Granville Island: Visit this bustling area known for its public market, artisan shops, and vibrant food scene.`,
  },
  {
    id: 29,
    imgSrc: {
      img1: "./Images/Tours/Madrid/1.png",
      img2: "./Images/Tours/Madrid/2.png",
      img3: "./Images/Tours/Madrid/3.png",
    },
    title: "Spain ( Madrid )",
    hasSpecialOffer: true,
    date: "2024-11-01 / 2024-12-01",
    duration: "30 Nights",
    transportationVehicle: "Plane",
    price: 8500,
    discountPercent: 5,
    rating: 4.3,
    description: `
      A tour of Madrid, Spain, offers a vibrant mix of cultural richness, historical grandeur, and modern flair.
      Madrid's lively atmosphere, rich cultural heritage, and delicious cuisine make it an unforgettable destination. 
      Whether you're exploring its historical sites, enjoying world-class art, or simply soaking up the local vibe.`,
  },
  {
    id: 30,
    imgSrc: {
      img1: "./Images/Tours/Seoul/1.png",
      img2: "./Images/Tours/Seoul/2.png",
      img3: "./Images/Tours/Seoul/3.png",
    },
    title: "S-korea ( Seoul )",
    hasSpecialOffer: false,
    date: "2024-11-01 / 2024-12-12",
    duration: "11 Nights",
    transportationVehicle: "Train",
    price: 2000,
    rating: 3.6,
    description: `
      A tour of Seoul, South Korea, offers a vibrant mix of modern skyscrapers, historic temples, and bustling markets. Here's a quick overview:
      Gyeongbokgung Palace: Visit this grand royal palace, which dates back to the Joseon Dynasty and features beautiful gardens and the National Folk Museum.
      Bukchon Hanok Village: Wander through this traditional village.`,
  },
  {
    id: 31,
    imgSrc: {
      img1: "./Images/Tours/SaintPetersburg/1.png",
      img2: "./Images/Tours/SaintPetersburg/2.png",
      img3: "./Images/Tours/SaintPetersburg/3.png",
    },
    title: "Saint-Petersburg",
    hasSpecialOffer: false,
    date: "2024-11-10 / 2024-12-17",
    duration: "7 Nights",
    transportationVehicle: "Plane",
    price: 2800,
    rating: 3.9,
    description: `
      A tour of Saint Petersburg, Russia, offers a captivating glimpse into the city's rich history, stunning architecture, and vibrant cultural scene. Here are some highlights:
      The Hermitage Museum: One of the largest and oldest museums in the world, housing a vast collection of art and artifacts, located in the magnificent Winter Palace.
      Saint Isaac's Cathedral: Marvel at the grandeur of this iconic cathedral, known for its massive dome and lavish interior.`,
  },
  {
    id: 32,
    imgSrc: {
      img1: "./Images/Tours/Singapore/1.png",
      img2: "./Images/Tours/Singapore/2.png",
      img3: "./Images/Tours/Singapore/3.png",
    },
    title: "Singapore ",
    hasSpecialOffer: false,
    date: "2024-11-12 / 2024-12-21",
    duration: "9 Nights",
    transportationVehicle: "Plane",
    price: 3600,
    rating: 3.5,
    description: `
      A tour of Singapore offers a dynamic blend of modern architecture, lush greenery, and rich cultural heritage. Here’s a quick overview:
      Marina Bay Sands: Marvel at the iconic Marina Bay Sands hotel, with its stunning rooftop infinity pool and observation deck offering panoramic views of the city.
      Gardens by the Bay: Explore this futuristic park featuring the awe-inspiring Supertree Grove, Flower Dome, and Cloud Forest.`,
  },
  {
    id: 33,
    imgSrc: {
      img1: "./Images/Tours/Dehli/1.png",
      img2: "./Images/Tours/Dehli/2.png",
      img3: "./Images/Tours/Dehli/3.png",
    },
    title: "India ( Dehli )",
    hasSpecialOffer: true,
    date: "2024-11-01 / 2024-11-21",
    duration: "20 Nights",
    transportationVehicle: "Plane",
    price: 4500,
    discountPercent: 5,
    rating: 4.3,
    description: `
      A tour of Delhi, India, offers an extraordinary journey through a city brimming with history, culture, and vibrant life.
      Delhi's rich tapestry of ancient monuments, vibrant markets, and diverse culinary scene offers a captivating and enriching travel experience.
      Whether you're exploring its historical landmarks.`,
  },
  {
    id: 34,
    imgSrc: {
      img1: "./Images/Tours/Tabriz/1.png",
      img2: "./Images/Tours/Tabriz/2.png",
      img3: "./Images/Tours/Tabriz/3.png",
    },
    title: "Iran ( Tabriz )",
    hasSpecialOffer: true,
    date: "2024-11-08 / 2024-11-13",
    duration: "5 Nights",
    transportationVehicle: "Bus",
    price: 700,
    discountPercent: 9,
    rating: 4.6,
    description: `
      A tour of Tabriz, Iran, offers a fascinating journey through a city rich in history, culture, and beautiful architecture.
      Tabriz's blend of historical landmarks, vibrant markets, and friendly locals makes it a captivating destination for travelers.
      Whether you're exploring its ancient bazaars, admiring its architectural wonders`,
  },
  {
    id: 35,
    imgSrc: {
      img1: "./Images/Tours/Brussels/1.png",
      img2: "./Images/Tours/Brussels/2.png",
      img3: "./Images/Tours/Brussels/3.png",
    },
    title: "Belgium ( Brussels )",
    hasSpecialOffer: false,
    date: "2024-11-25 / 2024-12-6",
    duration: "11 Nights",
    transportationVehicle: "Plane",
    price: 4000,
    rating: 3.9,
    description: `
      A tour of Brussels, Belgium, offers a blend of historical charm, modern vibrancy, and rich cultural experiences.
      Brussels' mix of historical landmarks, cultural attractions, and culinary delights makes it an exciting and diverse travel destination. 
      Whether you're exploring its historic squares, savoring Belgian waffles.`,
  },
  {
    id: 36,
    imgSrc: {
      img1: "./Images/Tours/Copenhagen/1.png",
      img2: "./Images/Tours/Copenhagen/2.png",
      img3: "./Images/Tours/Copenhagen/3.png",
    },
    title: "Denmark ( Copenhagen )",
    hasSpecialOffer: true,
    date: "2024-11-13 / 2024-11-27",
    duration: "14 Nights",
    transportationVehicle: "Plane",
    price: 5200,
    discountPercent: 3,
    rating: 4.5,
    description: `
      A tour of Copenhagen, Denmark, offers a delightful blend of history, modernity, and Scandinavian charm.
      Copenhagen's blend of historical landmarks, cultural attractions, and modern amenities make it a captivating destination. 
      Whether you're exploring royal palaces , enjoying the vibrant waterfront.`,
  },
  {
    id: 37,
    imgSrc: {
      img1: "./Images/Tours/Montevideo/1.png",
      img2: "./Images/Tours/Montevideo/2.png",
      img3: "./Images/Tours/Montevideo/3.png",
    },
    title: "Uruguay ( Montevideo )",
    hasSpecialOffer: false,
    date: "2024-12-01 / 2024-12-13",
    duration: "14 Nights",
    transportationVehicle: "Plane",
    price: 5100,
    rating: 3.5,
    description: `
      A tour of Montevideo, Uruguay, offers a captivating mix of historical charm, vibrant culture, and beautiful coastal scenery.
      Montevideo's blend of historic sites, cultural attractions, and coastal beauty makes it a charming and diverse destination.
      Whether you're exploring its rich history, relaxing by the waterfront.`,
  },
  {
    id: 38,
    imgSrc: {
      img1: "./Images/Tours/Washington/1.png",
      img2: "./Images/Tours/Washington/2.png",
      img3: "./Images/Tours/Washington/3.png",
    },
    title: "USA( Washington )",
    hasSpecialOffer: true,
    date: "2024-12-07 / 2024-12-27",
    duration: "20 Nights",
    transportationVehicle: "Plane",
    price: 4950,
    discountPercent: 2,
    rating: 3.3,
    description: `
      A tour of Washington, D.C., offers a rich journey through American history, politics, and culture.
      Washington, D.C.'s blend of monumental architecture, rich history, and vibrant cultural scene makes it a must-visit destination. 
      Whether you're exploring its historic sites or enjoying its world-class museums,`,
  },
  {
    id: 39,
    imgSrc: {
      img1: "./Images/Tours/Rasht/1.png",
      img2: "./Images/Tours/Rasht/2.png",
      img3: "./Images/Tours/Rasht/3.png",
    },
    title: "Iran ( Rasht )",
    hasSpecialOffer: false,
    date: "2024-11-01 / 2024-12-05",
    duration: "4 Nights",
    transportationVehicle: "Bus",
    price: 600,
    rating: 4.5,
    description: `
      A tour of Rasht, Iran, offers a delightful blend of natural beauty, rich culture, and culinary delights.
      Rasht's blend of historical landmarks, vibrant markets, and natural wonders makes it a captivating destination for travelers.
      Whether you're indulging in local cuisine, exploring the scenic landscapes`,
  },
];
module.exports = TOURS;
