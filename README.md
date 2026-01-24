# StreamApp 🎬

StreamApp is a high-performance movie discovery and streaming platform built with **React** and **Vite**. It features a modern, responsive interface inspired by top-tier streaming services, allowing users to browse trending content, search for specific titles, and stream media directly in their browser.

## 🚀 Key Features

* 
**Dynamic Content Discovery**: Automatically fetches and categorizes media into rows like Trending, Top Rated, Action, and Documentaries using the TMDB API.


* 
**Integrated Media Player**: Features a built-in streaming interface that supports high-quality movie and TV show playback.


* 
**Robust Search**: A dedicated search engine that allows users to find movies and TV shows across the entire database in real-time.


* 
**Responsive Design**: A mobile-friendly layout with smooth transitions, hover effects, and horizontal scrolling for an optimal viewing experience.


* 
**Dual-Mode Backend**: Designed with a built-in safety switch to toggle between a public demo mode (trailers) and a private full-feature streaming mode.



## 🛠️ Tech Stack

* 
**Frontend**: React 19 with Vite for lightning-fast development and optimized builds.


* 
**Routing**: React Router DOM for seamless navigation between the Home, Search, and Watch pages.


* 
**Data Fetching**: Axios for handling API requests to external media databases.


* 
**Icons**: Lucide-React for clean and modern UI elements.



## 📁 Project Structure

```text
src/
[cite_start]├── api.js           # API configuration and endpoint definitions [cite: 66, 68]
[cite_start]├── components/      # Reusable UI components (Navbar, Row, etc.) [cite: 13]
[cite_start]├── pages/           # Main views (SearchPage, Watch, Home) [cite: 13]
[cite_start]├── App.jsx          # Root component with route definitions [cite: 74, 79]
[cite_start]└── index.css        # Global styles and theme [cite: 80]

```

## ⚙️ Configuration & Streaming Setup

### API Keys

The application requires a TMDB API key to fetch movie metadata. Create a `.env` file in the root directory and add:


`VITE_TMDB_KEY=your_tmdb_key_here` 

### Enabling Full Streaming

By default, the project is set to **Public Demo Mode** (YouTube trailers). To enable full movie and TV streaming:

1. Open `src/pages/Watch.jsx`.
2. Locate the `IS_PUBLIC_DEMO` variable.
3. Change its value to `false`.




## 📖 Usage

1. 
**Browse**: Scroll through the homepage to discover trending and genre-specific content.


2. 
**Search**: Use the navigation bar to search for any title in the global database.


3. 
**Watch**: Click on any poster to enter the streaming environment and begin playback.



---

*Created with a focus on performance and user experience.*
