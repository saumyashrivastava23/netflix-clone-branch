// import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TVshow.css';
import Navbar from './Navbar';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


const youtubeAPI = process.env.youtubeAPI;
const baseUrl = "https://image.tmdb.org/t/p/original/"
const API_KEY = "2793700fcb28d5d9dad928548ac5ad57";
const webid = "https://api.themoviedb.org/3/movie/"
const similarmovieApi = "/similar?api_key=2793700fcb28d5d9dad928548ac5ad57&language=en-US"


function TVshow() {
  const params = useParams();
  const { name } = params;
  const { id } = params;
  const { season } = params;
  const { episode } = params;

  const fetchgenre = `https://api.themoviedb.org/3/movie/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_generes=10749`;
  const fetchUrl = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  const [movies, setMovies] = useState([]);

  const opts = {
    height: "500px",
    width: "1200px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);

        return request;

      }
      fetchData();
    }
    catch (error) {

      async function fetchData() {
        const request = await axios.get(fetchgenre);
        setMovies(request.data.results);

        return request;

      }
      fetchData();
    };


  }, [fetchUrl, fetchgenre]);

  const fetchSeason = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  const fetchEpisode = `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${API_KEY}&language=en-US`;
  //  const fetchEpisode=`https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=${API_KEY}&language=en-US`;
  const [seasons, setSeasons] = useState([]);
  const [overview, setOverview] = useState();
  const [ename, setEname] = useState();
  const [poster, setPoster] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchSeason);
      setSeasons(request.data.seasons);
      setOverview(request.data.overview);
      setEname(request.data.name);
      setPoster(request.data.poster_path);
      return request;

    }
    fetchData();
  }, [fetchSeason])
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const request = await axios.get(fetchEpisode);
      setEpisodes(request.data.episodes);

      return request;

    }
    fetchData();
  }, [fetchEpisode])

  const season1 = "/1";
  const episode1 = "/1";


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };


  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };






  const [trailerId, setTrailerId] = useState('');

  const fetchTrailer = async () => {
    try {
      const apiKey = youtubeAPI;
      const seriesName = ename;

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
    <div className="tvrowm">
      <Navbar></Navbar>


      <div className="tvmain_poster "
        // onClick={handleClick}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //  backgroundSize: "100% auto",
          backgroundPositionY: "30%",

          width: "100%",

          //  opacity:"0.5",
          //  backgroundAttachment:"fixed",

          backgroundPositionY: "30%",
        }}>

        <div>
          {/* {trailerId && <div className='closeButton'><button onClick={()=>setTrailerId('')}>Close</button></div>} */}
          {!trailerId && <div
            className='description_box'
          >
            <div
              className='description'
            >
              <div className='description'><button className='play-button'
                onClick={() => { fetchTrailer() }}><span></span><p></p></button></div>
              <div className='description'>
                <h2 className='description'>{ename}</h2>
              </div>
              <div className='description'>{overview}</div>

            </div>

          </div>}
        </div>
        <div  >
          {trailerId && <Youtube videoId={trailerId} opts={opts}>
            {/* <button className="youtube-close-button" onClick={()=>setTrailerId('')}>
            close
          </button> */}
          </Youtube>}</div>
      </div>


      <h1
        style={{
          padding: "20px"
        }}>Seasons</h1>
      <div className='seasonNumber'>
        {seasons.map(season => (
          <Link to={(season.season_number !== 0) && `${/tvshow/}${id}${"/"}${name}${"/"}${season.season_number}${episode1}`}
            style={{ textDecoration: "none" }}
          >{(season.season_number !== 0) && <h2
            style={{
              padding: "10px",
              textDecoration: "none",
            }}>Season {season.season_number}</h2>}</Link>
        ))}
      </div>
      <h2 style={{ padding: "10px" }}>Episodes</h2>
      <div className="episodeNumber">
        {episodes.map(episode => (
          <Link to={`${/tvshow/}${id}${"/"}${name}${"/"}${season}${"/"}${episode.episode_number}`}
            onClick={() => setTrailerId('')}>

            <div className='episodes'
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
                // backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                backgroundPositionY: "30%",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >

              {!isHovered && <div className='episodes'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
                  // backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                  backgroundPositionY: "30%",
                }}>

              </div>}
              {isHovered && <div className="hover-text">{episode.name}</div>}
            </div>
          </Link>

        ))}
      </div>

      <h2 style={{ padding: "10px" }}>Similar TV Shows</h2>
      <div className="tvrow_postersm">
        {movies.map(movie => (

          <Link to={`${/tvshow/}${movie.id}${movie.backdrop_path}${season1}${episode1}`}
            onClick={() => setTrailerId('')}>


            <div className='episodes'
              style={{
                // backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
                backgroundImage: `url(${baseUrl}${movie.backdrop_path})`
              }}
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
            >

              {!isHovered2 && <div className='episodes'
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
                style={{
                  // backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
                  backgroundImage: `url(${baseUrl}${movie.backdrop_path})`
                }}>

              </div>}
              {isHovered2 && <div className="hover-text">{movie.name}</div>}
            </div>

          </Link>
        ))}
      </div>

    </div>

  )

}

export default TVshow