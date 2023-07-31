import React from "react";
import { useState, useEffect } from "react";
import requests from './requests';
import axios from "./axios";
import "./Banner.css"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Navbar from "./pages/Navbar";



const youtubeAPI = process.env.youtubeAPI;
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetfilxOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length)
        ]
      )
      return request;
    }
    fetchData();
  }, []);


  const opts = {
    height: "400px",
    width: "1200px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };




  const [trailerUrl, setTrailerUrl] = useState('');
  const handleClick = () => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie.title).
        then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }

  }





  const [trailerId, setTrailerId] = useState('');

  const fetchTrailer = async () => {
    try {
      const apiKey = youtubeAPI;
      const seriesName = movie.title;

      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: apiKey,
            q: `${seriesName}  official trailer`,
            part: 'snippet',
            type: 'video',
            maxResults: 1,
          },
        }
      );

      const trailer = response.data.items[0];
      if (trailer) {
        setTrailerId(trailer.id.videoId);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };




  return (
    <header className="banner"
    >
      <div className="banner_contents"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
        onClick={() => setTrailerId('')}
      >
        <Navbar
          style={{ background: "transparent" }}></Navbar>
        {!trailerId && <div className="banner_box">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_title">{movie?.overview}</div>
          {/* <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div> */}

          <div className='description'><button className='play-button'
            onClick={() => { fetchTrailer() }}><span></span><p></p></button></div>

        </div>}

        <div>
          {trailerId && <Youtube videoId={trailerId} opts={opts}>
            {/* <button className="youtube-close-button" onClick={()=>setTrailerId('')}>
            close
          </button> */}
          </Youtube>}</div>
      </div>



    </header>
  )

}
export default Banner;