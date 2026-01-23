import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { api } from '../api'; // Need API to fetch trailer

// --- SAFETY SWITCH ---
// Set this to TRUE before pushing to GitHub
const IS_PUBLIC_DEMO = true; 
// ---------------------

const Watch = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [trailerKey, setTrailerKey] = useState(null);

  // 1. Logic for Public Demo (Fetch YouTube Trailer)
  useEffect(() => {
    if (IS_PUBLIC_DEMO) {
      async function fetchTrailer() {
        try {
          // Fetch videos from TMDB
          const response = await api.get(`/${type}/${id}/videos?language=en-US`);
          // Find the first "Trailer"
          const trailer = response.data.results.find(
            (vid) => vid.site === "YouTube" && vid.type === "Trailer"
          );
          // If no trailer, take the first video, or null
          setTrailerKey(trailer ? trailer.key : response.data.results[0]?.key);
        } catch (error) {
          console.error("No trailer found", error);
        }
      }
      fetchTrailer();
    }
  }, [type, id]);

  // 2. Logic for Private Use (Vidking)
  const season = 1;
  const episode = 1;
  const vidkingUrl = type === 'movie'
    ? `https://www.vidking.net/embed/movie/${id}?color=E50914&autoPlay=true`
    : `https://www.vidking.net/embed/tv/${id}/${season}/${episode}?color=E50914&autoPlay=true`;

  // 3. Decide which URL to show
  const finalUrl = IS_PUBLIC_DEMO 
    ? `https://www.youtube.com/embed/${trailerKey}?autoplay=1`
    : vidkingUrl;

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div 
        onClick={() => navigate('/')}
        style={{
          position: 'absolute', top: 20, left: 20, zIndex: 50,
          color: 'white', cursor: 'pointer', background: 'rgba(0,0,0,0.5)',
          padding: '10px', borderRadius: '50%'
        }}
      >
        <ArrowLeft />
      </div>

      {IS_PUBLIC_DEMO && !trailerKey ? (
        <div style={{color: 'white', display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
          <h1>No Trailer Available (Demo Mode)</h1>
        </div>
      ) : (
        <iframe 
          src={finalUrl}
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen
          title="Player"
        />
      )}
    </div>
  );
};

export default Watch;
