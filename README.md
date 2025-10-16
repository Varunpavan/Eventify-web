# Eventify 🎟️

**Eventify** is a responsive web application that showcases **upcoming and recommended events**. Users can create accounts, log in, and explore events seamlessly on both desktop and mobile devices. Event data is fetched dynamically from provided APIs.

---

## Features ✨

- **User Authentication:**  
  - Signup and login functionality with email, username, and password  
  - Session management to maintain logged-in state  
  - Proper validation and error handling  

- **Responsive Design:**  
  - Optimized for desktop and mobile screens  
  - Hero banner highlighting upcoming events  
  - Touch-friendly horizontal scrolling for recommended shows  

- **Event Display:**  
  - **Recommended Shows:** 8 shows fetched from API, scrolls horizontally  
  - **Upcoming Events:** Vertical scrolling with lazy loading for multiple pages  
  - Displays thumbnail images, event name, location, date, weather, and distance  

- **Performance:**  
  - Lazy loading for upcoming events to optimize performance  
  - Smooth scrolling and quick loading times  

---

## Tech Stack 🛠️

- **Frontend:** React.js, Tailwind CSS, Bootstrap  
- **Routing & State:** React Router DOM, React Hooks  
- **API Integration:** REST APIs for recommended and upcoming events  
- **Fonts & Colors:**  
  - Font: Inter  
  - Heading: `#1E2022`, Subtitle: `#989090`, Logo: `#CF2D2D`  
  - Background: `#ffffff`, Borders: `#B0BABF`  

---

## API Endpoints 🔗

- **Recommended Shows:**  


- **Upcoming Events (Paginated):**  


> Lazy loading implemented to fetch additional pages on scroll  

---

## Installation & Setup ⚙️

1. Clone the repository:  
```bash
git clone <your-repo-link>

2. Navigate to the project folder:
cd REACT_PROJECT

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open http://localhost:3000 in your browser


Design Decisions 🎨

Horizontal Scrolling: Recommended shows implemented using a smooth, infinite scroll carousel

Lazy Loading: Upcoming events fetch only when the user reaches the end of the page

Responsive Layout: Flexbox/Grid for desktop and mobile adaptability

Styling: Consistent with provided color scheme and typography for a modern UI


Deployment 🌐

Host the website on platforms like Vercel. Ensure the APIs are accessible in production for full functionality.


Future Improvements 🚀

Integrate booking and payment functionality
Add event filters (by city, category, or date)
User profiles with saved/favorite events
Push notifications for upcoming events
