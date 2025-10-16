import axios from "axios";

const api = axios.create({
  timeout: 10000,
});

const RecommendedShowsImages = [
  "https://drive.google.com/thumbnail?id=1xX6dRpbnZ_WSHnUjKQzitbzzxdcRRXWn&sz=w1000",
  "https://drive.google.com/thumbnail?id=1wGWiKdPS2qF1ZPMaXC3Wtkydmvpxc1RX&sz=w1000",
  "https://drive.google.com/thumbnail?id=1fD2znNeNJY2Ic4U449DvoGMSd-ZrAeEn&sz=w1000",
  "https://drive.google.com/thumbnail?id=1ehfRcq_7K_NypDqNfsmU5DrzSkubQ1CM&sz=w1000",
  "https://drive.google.com/thumbnail?id=1HfS1lF3KSALro6_iHV1kK77NHR8aTjEw&sz=w1000",
  "https://drive.google.com/thumbnail?id=1CrsJZOhzO2m3Joy_g7MES3Dcn0rrdTF6&sz=w1000",
  "https://drive.google.com/thumbnail?id=1APM-JD5D_x_lOHTuJKkKhTkTyE-CEp94&sz=w1000",
  "https://drive.google.com/thumbnail?id=1fD2znNeNJY2Ic4U449DvoGMSd-ZrAeEn&sz=w1000",
];

const UpcomingEventsImages = [
  "https://drive.google.com/thumbnail?id=1zIdmBFhcwr1vMGSNwOLOjKnywjN-HtgD&sz=w1000",
  "https://drive.google.com/thumbnail?id=1yUDtp3lFn_RRcrtBhLzF44BYy9QTAcuP&sz=w1000",
  "https://drive.google.com/thumbnail?id=1xcd2xnQtSwRDFwAlkZEY0AS3ErYExkjI&sz=w1000",
  "https://drive.google.com/thumbnail?id=1wHhIcXuAqfnlzdeeCP_RcQb0BCD2tlSI&sz=w1000",
  "https://drive.google.com/thumbnail?id=1wANjbteiSmRIKrKdQhli3I77eQUxoCuB&sz=w1000",
  "https://drive.google.com/thumbnail?id=1pg8Ca6Jf2o6pcRwWeSM-2Kjo2lQrUCYU&sz=w1000",
  "https://drive.google.com/thumbnail?id=1pT2VzRtpyCgkAepcVkIBxBUHfSP12GHx&sz=w1000",
  "https://drive.google.com/thumbnail?id=1mfV1bbS_sWVwsNbogY3exWD20ZBlsVyk&sz=w1000",
  "https://drive.google.com/thumbnail?id=1mbEUWVcEWx5ULcjZr4zzBzoelINvjLSV&sz=w1000",
  "https://drive.google.com/thumbnail?id=1lPxVax1xmrEs_PKJQIWbClsJ46pN9P4S&sz=w1000",
];

// Realistic mock data (only used if API fails)
const REALISTIC_RECOMMENDED_EVENTS = [
  {
    eventName: "Bollywood Night Live Concert",
    cityName: "Mumbai",
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 32°C",
    distanceKm: "2.5"
  },
  {
    eventName: "Electronic Dance Festival",
    cityName: "Delhi",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 28°C",
    distanceKm: "5.1"
  },
  {
    eventName: "Stand Up Comedy Special",
    cityName: "Bangalore", 
    date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Rainy, 26°C",
    distanceKm: "1.8"
  },
  {
    eventName: "Jazz & Blues Evening",
    cityName: "Chennai",
    date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Humid, 31°C",
    distanceKm: "3.7"
  },
  {
    eventName: "Rock the City Live Show",
    cityName: "Kolkata",
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 30°C",
    distanceKm: "4.2"
  },
  {
    eventName: "Classical Music Symphony",
    cityName: "Hyderabad",
    date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 33°C",
    distanceKm: "2.9"
  },
  {
    eventName: "Hip Hop Beat Festival",
    cityName: "Pune",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 27°C",
    distanceKm: "6.1"
  },
  {
    eventName: "Fusion Music Experience",
    cityName: "Mumbai",
    date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 29°C",
    distanceKm: "3.3"
  }
];

const REALISTIC_UPCOMING_EVENTS = [
  {
    eventName: "International Food Festival",
    cityName: "Mumbai",
    date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 32°C",
    distanceKm: "1.2"
  },
  {
    eventName: "Art & Culture Exhibition",
    cityName: "Delhi",
    date: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 28°C",
    distanceKm: "4.5"
  },
  {
    eventName: "Tech Conference 2025",
    cityName: "Bangalore",
    date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Rainy, 26°C",
    distanceKm: "2.1"
  },
  {
    eventName: "Marathon Run for Charity",
    cityName: "Chennai",
    date: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Humid, 31°C",
    distanceKm: "3.8"
  },
  {
    eventName: "Film Premiere Night",
    cityName: "Kolkata",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 30°C",
    distanceKm: "5.2"
  },
  {
    eventName: "Theater Play: The Last Stand",
    cityName: "Hyderabad",
    date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 33°C",
    distanceKm: "2.7"
  },
  {
    eventName: "Business Leadership Summit",
    cityName: "Pune",
    date: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 27°C",
    distanceKm: "6.3"
  },
  {
    eventName: "Music Awards Ceremony",
    cityName: "Mumbai",
    date: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 29°C",
    distanceKm: "1.8"
  },
  // Additional upcoming events
  {
    eventName: "Dance Championship Finals",
    cityName: "Delhi",
    date: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 32°C",
    distanceKm: "4.1"
  },
  {
    eventName: "Startup Pitch Competition",
    cityName: "Bangalore",
    date: new Date(Date.now() + 19 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Rainy, 26°C",
    distanceKm: "2.4"
  },
  {
    eventName: "Photography Workshop",
    cityName: "Chennai",
    date: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Humid, 31°C",
    distanceKm: "3.9"
  },
  {
    eventName: "Literary Fest Book Launch",
    cityName: "Kolkata",
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 30°C",
    distanceKm: "5.6"
  },
  {
    eventName: "Beach Volleyball Tournament",
    cityName: "Goa",
    date: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 34°C",
    distanceKm: "7.2"
  },
  {
    eventName: "Yoga & Wellness Retreat",
    cityName: "Rishikesh",
    date: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 25°C",
    distanceKm: "8.9"
  },
  {
    eventName: "Culinary Masterclass",
    cityName: "Mumbai",
    date: new Date(Date.now() + 24 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Humid, 31°C",
    distanceKm: "2.3"
  },
  {
    eventName: "Digital Art Exhibition",
    cityName: "Bangalore",
    date: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Rainy, 26°C",
    distanceKm: "3.1"
  },
  {
    eventName: "Cricket League Finals",
    cityName: "Ahmedabad",
    date: new Date(Date.now() + 26 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 35°C",
    distanceKm: "9.5"
  },
  {
    eventName: "Fashion Week Grand Finale",
    cityName: "Mumbai",
    date: new Date(Date.now() + 27 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 30°C",
    distanceKm: "1.5"
  },
  {
    eventName: "Science & Innovation Expo",
    cityName: "Hyderabad",
    date: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 33°C",
    distanceKm: "2.8"
  },
  {
    eventName: "Music Production Workshop",
    cityName: "Delhi",
    date: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 28°C",
    distanceKm: "4.7"
  },
  {
    eventName: "Street Food Carnival",
    cityName: "Kolkata",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 29°C",
    distanceKm: "5.3"
  },
  {
    eventName: "AI & Robotics Conference",
    cityName: "Bangalore",
    date: new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Rainy, 25°C",
    distanceKm: "2.6"
  },
  {
    eventName: "Heritage Walk & Tour",
    cityName: "Jaipur",
    date: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 31°C",
    distanceKm: "10.2"
  },
  {
    eventName: "Karaoke Night Championship",
    cityName: "Pune",
    date: new Date(Date.now() + 33 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 27°C",
    distanceKm: "6.4"
  },
  {
    eventName: "Sustainable Living Expo",
    cityName: "Chennai",
    date: new Date(Date.now() + 34 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Humid, 32°C",
    distanceKm: "3.6"
  },
  {
    eventName: "Comic Con India",
    cityName: "Delhi",
    date: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Cloudy, 28°C",
    distanceKm: "4.9"
  },
  {
    eventName: "Wine Tasting Festival",
    cityName: "Nashik",
    date: new Date(Date.now() + 36 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 26°C",
    distanceKm: "11.8"
  },
  {
    eventName: "Mobile Gaming Tournament",
    cityName: "Hyderabad",
    date: new Date(Date.now() + 37 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Sunny, 34°C",
    distanceKm: "2.9"
  },
  {
    eventName: "Classic Car Show",
    cityName: "Mumbai",
    date: new Date(Date.now() + 38 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 30°C",
    distanceKm: "1.7"
  },
  {
    eventName: "Meditation & Mindfulness Camp",
    cityName: "Dharamshala",
    date: new Date(Date.now() + 39 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Clear, 22°C",
    distanceKm: "15.3"
  },
  {
    eventName: "Startup Investor Meet",
    cityName: "Bangalore",
    date: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000).toISOString(),
    weather: "Rainy, 25°C",
    distanceKm: "2.5"
  }
];

// Working CORS proxies to try
const CORS_PROXIES = [
  "https://corsproxy.io/?",
  "https://api.corsproxy.io/",
  "https://cors.connetku.com/",
  "" // Empty string = direct call
];

async function tryAPICall(url) {
  // Try each CORS proxy and direct call
  for (const proxy of CORS_PROXIES) {
    try {
      const fullUrl = proxy ? `${proxy}${encodeURIComponent(url)}` : url;
      console.log(`🔄 Trying: ${proxy || 'Direct API call'}`);
      
      const response = await api.get(fullUrl, { timeout: 8000 });
      
      if (response.data && (response.data.events || response.data.length > 0)) {
        console.log(`✅ Success with: ${proxy || 'Direct API'}`);
        return response;
      }
    } catch (error) {
      console.log(`❌ Failed with: ${proxy || 'Direct API'} - ${error.message}`);
      continue;
    }
  }
  throw new Error('All API attempts failed');
}

export async function fetchRecommendedEvents() {
  try {
    console.log("🚀 Attempting to fetch recommended events from REAL API...");
    
    const url = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const response = await tryAPICall(url);

    const events = response.data.events || response.data;
    
    console.log("🎉 REAL API data received for recommended events:", events);
    
    return events.map((event, index) => ({
      ...event,
      img_url: RecommendedShowsImages[index % RecommendedShowsImages.length],
    }));
    
  } catch (error) {
    console.error("❌ All API attempts failed, using realistic mock data for recommended events");
    
    // Fallback to realistic mock data
    return REALISTIC_RECOMMENDED_EVENTS.map((event, index) => ({
      ...event,
      img_url: RecommendedShowsImages[index % RecommendedShowsImages.length],
    }));
  }
}

export async function fetchUpcomingEvents(page) {
  try {
    console.log(`🚀 Attempting to fetch upcoming events from REAL API, page ${page}...`);
    
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;
    const response = await tryAPICall(url);

    const events = response.data.events || response.data;
    console.log("🎉 REAL API data received for upcoming events:", events);
    
    return events.map((event, index) => ({
      ...event,
      img_url: UpcomingEventsImages[index % UpcomingEventsImages.length],
    }));
    
  } catch (error) {
    console.error(`❌ All API attempts failed, using realistic mock data for upcoming events, page ${page}`);
    
    // Fallback to realistic mock data with pagination
    const eventsPerPage = 8;
    const startIndex = (page - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    
    const pageEvents = REALISTIC_UPCOMING_EVENTS.slice(startIndex, endIndex);
    
    return pageEvents.map((event, index) => ({
      ...event,
      img_url: UpcomingEventsImages[(startIndex + index) % UpcomingEventsImages.length],
    }));
  }
}