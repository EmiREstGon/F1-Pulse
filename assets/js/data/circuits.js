const circuitExtraInfo = {
  "Melbourne": { length: "5.278", laps: "58", lapRecord: "1:19.813", lapRecordDriver: "Charles Leclerc", lapRecordYear: "2024", turns: "14" },
  "Shanghai": { length: "5.451", laps: "56", lapRecord: "1:32.238", lapRecordDriver: "Michael Schumacher", lapRecordYear: "2004", turns: "16" },
  "Suzuka": { length: "5.807", laps: "53", lapRecord: "1:30.965", lapRecordDriver: "Kimi Antonelli", lapRecordYear: "2025", turns: "18" },
  "Bahrain": { length: "5.412", laps: "57", lapRecord: "1:31.447", lapRecordDriver: "Pedro de la Rosa", lapRecordYear: "2005", turns: "15" },
  "Jeddah": { length: "6.174", laps: "50", lapRecord: "1:30.734", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2021", turns: "27" },
  "Miami": { length: "5.412", laps: "57", lapRecord: "1:29.708", lapRecordDriver: "Max Verstappen", lapRecordYear: "2023", turns: "19" },
  "Montreal": { length: "4.361", laps: "70", lapRecord: "1:13.078", lapRecordDriver: "Valtteri Bottas", lapRecordYear: "2019", turns: "14" },
  "Monaco": { length: "3.337", laps: "78", lapRecord: "1:12.909", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2021", turns: "19" },
  "Barcelona": { length: "4.657", laps: "66", lapRecord: "1:15.743", lapRecordDriver: "Oscar Piastri", lapRecordYear: "2025", turns: "14" },
  "Spielberg": { length: "4.326", laps: "71", lapRecord: "1:07.924", lapRecordDriver: "Oscar Piastri", lapRecordYear: "2025", turns: "10" },
  "Silverstone": { length: "5.891", laps: "52", lapRecord: "1:27.097", lapRecordDriver: "Max Verstappen", lapRecordYear: "2020", turns: "18" },
  "Spa": { length: "7.004", laps: "44", lapRecord: "1:44.701", lapRecordDriver: "Sergio Perez", lapRecordYear: "2024", turns: "19" },
  "Budapest": { length: "4.381", laps: "70", lapRecord: "1:16.627", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2020", turns: "14" },
  "Zandvoort": { length: "4.259", laps: "72", lapRecord: "1:11.097", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2021", turns: "14" },
  "Monza": { length: "5.793", laps: "53", lapRecord: "1:20.901", lapRecordDriver: "Lando Norris", lapRecordYear: "2025", turns: "11" },
  "Madrid": { length: "5.416", laps: "57", lapRecord: "N/D", lapRecordDriver: "N/D", lapRecordYear: "2026", turns: "22" },
  "Baku": { length: "6.003", laps: "51", lapRecord: "1:43.009", lapRecordDriver: "Charles Leclerc", lapRecordYear: "2019", turns: "20" },
  "Singapore": { length: "4.927", laps: "62", lapRecord: "1:33.808", lapRecordDriver: "Lewis Hamilton", lapRecordYear: "2025", turns: "19" },
  "Austin": { length: "5.513", laps: "56", lapRecord: "1:36.169", lapRecordDriver: "Charles Leclerc", lapRecordYear: "2019", turns: "20" },
  "Mexico City": { length: "4.304", laps: "71", lapRecord: "1:17.774", lapRecordDriver: "Valtteri Bottas", lapRecordYear: "2021", turns: "17" },
  "São Paulo": { length: "4.309", laps: "71", lapRecord: "1:10.540", lapRecordDriver: "Valtteri Bottas", lapRecordYear: "2018", turns: "15" },
  "Las Vegas": { length: "6.201", laps: "50", lapRecord: "1:33.365", lapRecordDriver: "Max Verstappen", lapRecordYear: "2025", turns: "17" },
  "Qatar": { length: "5.419", laps: "57", lapRecord: "1:22.384", lapRecordDriver: "Lando Norris", lapRecordYear: "2024", turns: "16" },
  "Abu Dhabi": { length: "5.281", laps: "58", lapRecord: "1:25.637", lapRecordDriver: "Kevin Magnussen", lapRecordYear: "2024", turns: "16" }
};

const circuitAliases = {
  "Albert Park": "Melbourne", "Melbourne": "Melbourne",
  "Shanghai": "Shanghai",
  "Suzuka": "Suzuka",
  "Bahrain International Circuit": "Bahrain", "Sakhir": "Bahrain", "Bahrain": "Bahrain",
  "Jeddah Corniche Circuit": "Jeddah", "Jeddah": "Jeddah",
  "Miami International Autodrome": "Miami", "Miami": "Miami",
  "Circuit Gilles Villeneuve": "Montreal", "Montreal": "Montreal",
  "Circuit de Monaco": "Monaco", "Monte-Carlo": "Monaco", "Monaco": "Monaco",
  "Circuit de Barcelona-Catalunya": "Barcelona", "Barcelona-Catalunya": "Barcelona", "Catalunya": "Barcelona", "Barcelona": "Barcelona",  "Montmeló": "Barcelona",
  "Red Bull Ring": "Spielberg", "Spielberg": "Spielberg", "Austria": "Spielberg",
  "Silverstone Circuit": "Silverstone", "Silverstone": "Silverstone",
  "Circuit de Spa-Francorchamps": "Spa", "Spa-Francorchamps": "Spa", "Spa": "Spa",
  "Hungaroring": "Budapest", "Budapest": "Budapest",
  "Circuit Zandvoort": "Zandvoort", "Zandvoort": "Zandvoort",
  "Autodromo Nazionale Monza": "Monza", "Monza": "Monza",
  "Madring": "Madrid", "Madrid": "Madrid",
  "Baku City Circuit": "Baku", "Baku": "Baku",
  "Marina Bay Street Circuit": "Singapore", "Marina Bay": "Singapore", "Singapore": "Singapore",
  "Circuit of the Americas": "Austin", "Austin": "Austin",
  "Autódromo Hermanos Rodríguez": "Mexico City", "Mexico City": "Mexico City",
  "Autódromo José Carlos Pace": "São Paulo", "Interlagos": "São Paulo", "São Paulo": "São Paulo",
  "Las Vegas Strip Street Circuit": "Las Vegas", "Las Vegas": "Las Vegas",
  "Losail International Circuit": "Qatar", "Al Daayen": "Qatar", "Qatar": "Qatar",
  "Yas Marina Circuit": "Abu Dhabi", "Abu Dhabi": "Abu Dhabi"
};

const circuitSectoredImages = {
  "Melbourne": "assets/img/circuits/sectored/albert-park.webp",
  "Shanghai": "assets/img/circuits/sectored/shanghai.webp",
  "Suzuka": "assets/img/circuits/sectored/suzuka.webp",
  "Bahrain": "assets/img/circuits/sectored/sakhir.webp",
  "Jeddah": "assets/img/circuits/sectored/jeddah.webp",
  "Miami": "assets/img/circuits/sectored/miami.webp",
  "Montreal": "assets/img/circuits/sectored/montreal.webp",
  "Monaco": "assets/img/circuits/sectored/monte-carlo.webp",
  "Barcelona": "assets/img/circuits/sectored/catalunya.webp",
  "Spielberg": "assets/img/circuits/sectored/spielberg.webp",
  "Silverstone": "assets/img/circuits/sectored/silverstone.webp",
  "Spa": "assets/img/circuits/sectored/spa-francorchamps.webp",
  "Budapest": "assets/img/circuits/sectored/hungaroring.webp",
  "Zandvoort": "assets/img/circuits/sectored/zandvoort.webp",
  "Monza": "assets/img/circuits/sectored/monza.webp",
  "Madrid": "assets/img/circuits/sectored/madring.webp",
  "Baku": "assets/img/circuits/sectored/baku.webp",
  "Singapore": "assets/img/circuits/sectored/singapore.webp",
  "Austin": "assets/img/circuits/sectored/austin.webp",
  "Mexico City": "assets/img/circuits/sectored/mexico-city.webp",
  "São Paulo": "assets/img/circuits/sectored/interlagos.webp",
  "Las Vegas": "assets/img/circuits/sectored/las-vegas.webp",
  "Qatar": "assets/img/circuits/sectored/lusail.webp",
  "Abu Dhabi": "assets/img/circuits/sectored/yas-marina.webp"
};

const circuitTrackImages = {
  "Melbourne": "assets/img/circuits/tracks/albert-park.svg",
  "Shanghai": "assets/img/circuits/tracks/shanghai.svg",
  "Suzuka": "assets/img/circuits/tracks/suzuka.svg",
  "Bahrain": "assets/img/circuits/tracks/sakhir.svg",
  "Jeddah": "assets/img/circuits/tracks/jeddah.svg",
  "Miami": "assets/img/circuits/tracks/miami.svg",
  "Montreal": "assets/img/circuits/tracks/montreal.svg",
  "Monaco": "assets/img/circuits/tracks/monte-carlo.svg",
  "Barcelona": "assets/img/circuits/tracks/catalunya.svg",
  "Spielberg": "assets/img/circuits/tracks/spielberg.svg",
  "Silverstone": "assets/img/circuits/tracks/silverstone.svg",
  "Spa": "assets/img/circuits/tracks/spa-francorchamps.svg",
  "Budapest": "assets/img/circuits/tracks/hungaroring.svg",
  "Zandvoort": "assets/img/circuits/tracks/zandvoort.svg",
  "Monza": "assets/img/circuits/tracks/monza.svg",
  "Madrid": "assets/img/circuits/tracks/madring.svg",
  "Baku": "assets/img/circuits/tracks/baku.svg",
  "Singapore": "assets/img/circuits/tracks/singapore.svg",
  "Austin": "assets/img/circuits/tracks/austin.svg",
  "Mexico City": "assets/img/circuits/tracks/mexico-city.svg",
  "São Paulo": "assets/img/circuits/tracks/interlagos.svg",
  "Las Vegas": "assets/img/circuits/tracks/las-vegas.svg",
  "Qatar": "assets/img/circuits/tracks/lusail.svg",
  "Abu Dhabi": "assets/img/circuits/tracks/yas-marina.svg"
};

const circuitTicketUrls = {
  "Melbourne": "https://tickets.formula1.com/es/f1-3159-australia",
  "Shanghai": "https://tickets.formula1.com/es/f1-3182-china",
  "Suzuka": "https://tickets.formula1.com/es/f1-3309-japon",
  "Bahrain": "https://tickets.formula1.com/es/f1-3176-bahrein",
  "Jeddah": "https://tickets.formula1.com/es/f1-54298-arabia-saudita",
  "Miami": "https://tickets.formula1.com/es/f1-54987-miami",
  "Montreal": "https://tickets.formula1.com/es/f1-3215-canada",
  "Monaco": "https://tickets.formula1.com/es/f1-3202-monaco",
  "Barcelona": "https://tickets.formula1.com/es/f1-3190-espana",
  "Spielberg": "https://tickets.formula1.com/es/f1-3222-austria",
  "Silverstone": "https://tickets.formula1.com/es/f1-3226-gran-bretana",
  "Spa": "https://tickets.formula1.com/es/f1-3286-belgica",
  "Budapest": "https://tickets.formula1.com/es/f1-3277-hungria",
  "Zandvoort": "https://tickets.formula1.com/es/f1-42837-paises-bajos",
  "Monza": "https://tickets.formula1.com/es/f1-3293-italia",
  "Madrid": "https://tickets.formula1.com/es/f1-77449-madrid-spain-gp",
  "Baku": "https://tickets.formula1.com/es/f1-10851-azerbaiyan",
  "Singapore": "https://tickets.formula1.com/es/f1-3301-singapur",
  "Austin": "https://tickets.formula1.com/es/f1-3320-estados-unidos",
  "Mexico City": "https://tickets.formula1.com/es/f1-4861-mexico",
  "São Paulo": "https://tickets.formula1.com/es/f1-3325-brasil",
  "Las Vegas": "https://tickets.formula1.com/es/f1-59007-las-vegas",
  "Qatar": "https://tickets.formula1.com/es/f1-56257-qatar",
  "Abu Dhabi": "https://tickets.formula1.com/es/f1-3312-abu-dhabi"
};

const circuitLocations = {
  "Melbourne": {
    name: "Albert Park Circuit",
    city: "Melbourne",
    country: "Australia",
    lat: -37.8497,
    lng: 144.9680
  },
  "Shanghai": {
    name: "Shanghai International Circuit",
    city: "Shanghai",
    country: "China",
    lat: 31.3389,
    lng: 121.2200
  },
  "Suzuka": {
    name: "Suzuka Circuit",
    city: "Suzuka",
    country: "Japan",
    lat: 34.8431,
    lng: 136.5410
  },
  "Bahrain": {
    name: "Bahrain International Circuit",
    city: "Sakhir",
    country: "Bahrain",
    lat: 26.0325,
    lng: 50.5106
  },
  "Jeddah": {
    name: "Jeddah Corniche Circuit",
    city: "Jeddah",
    country: "Saudi Arabia",
    lat: 21.6319,
    lng: 39.1044
  },
  "Miami": {
    name: "Miami International Autodrome",
    city: "Miami",
    country: "United States",
    lat: 25.9581,
    lng: -80.2389
  },
  "Montreal": {
    name: "Circuit Gilles Villeneuve",
    city: "Montreal",
    country: "Canada",
    lat: 45.5000,
    lng: -73.5228
  },
  "Monaco": {
    name: "Circuit de Monaco",
    city: "Monte Carlo",
    country: "Monaco",
    lat: 43.7347,
    lng: 7.4206
  },
  "Barcelona": {
    name: "Circuit de Barcelona-Catalunya",
    city: "Montmeló",
    country: "Spain",
    lat: 41.5700,
    lng: 2.2611
  },
  "Spielberg": {
    name: "Red Bull Ring",
    city: "Spielberg",
    country: "Austria",
    lat: 47.2197,
    lng: 14.7647
  },
  "Silverstone": {
    name: "Silverstone Circuit",
    city: "Silverstone",
    country: "United Kingdom",
    lat: 52.0733,
    lng: -1.0147
  },
  "Spa": {
    name: "Circuit de Spa-Francorchamps",
    city: "Stavelot",
    country: "Belgium",
    lat: 50.4372,
    lng: 5.9714
  },
  "Budapest": {
    name: "Hungaroring",
    city: "Mogyoród",
    country: "Hungary",
    lat: 47.5789,
    lng: 19.2486
  },
  "Zandvoort": {
    name: "Circuit Zandvoort",
    city: "Zandvoort",
    country: "Netherlands",
    lat: 52.3888,
    lng: 4.5409
  },
  "Monza": {
    name: "Autodromo Nazionale Monza",
    city: "Monza",
    country: "Italy",
    lat: 45.6156,
    lng: 9.2811
  },
  "Madrid": {
    name: "Madring",
    city: "Madrid",
    country: "Spain",
    lat: 40.4650,
    lng: -3.6160
  },
  "Baku": {
    name: "Baku City Circuit",
    city: "Baku",
    country: "Azerbaijan",
    lat: 40.3725,
    lng: 49.8533
  },
  "Singapore": {
    name: "Marina Bay Street Circuit",
    city: "Singapore",
    country: "Singapore",
    lat: 1.2914,
    lng: 103.8640
  },
  "Austin": {
    name: "Circuit of the Americas",
    city: "Austin",
    country: "United States",
    lat: 30.1328,
    lng: -97.6411
  },
  "Mexico City": {
    name: "Autódromo Hermanos Rodríguez",
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4042,
    lng: -99.0907
  },
  "São Paulo": {
    name: "Autódromo José Carlos Pace",
    city: "São Paulo",
    country: "Brazil",
    lat: -23.7036,
    lng: -46.6997
  },
  "Las Vegas": {
    name: "Las Vegas Strip Circuit",
    city: "Las Vegas",
    country: "United States",
    lat: 36.1147,
    lng: -115.1728
  },
  "Qatar": {
    name: "Lusail International Circuit",
    city: "Lusail",
    country: "Qatar",
    lat: 25.4900,
    lng: 51.4542
  },
  "Abu Dhabi": {
    name: "Yas Marina Circuit",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    lat: 24.4672,
    lng: 54.6031
  }
};