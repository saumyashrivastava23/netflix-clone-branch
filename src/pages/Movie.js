// import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Movie.css'
import Navbar from './Navbar';
import Youtube from "react-youtube";

const baseUrl = "https://image.tmdb.org/t/p/original/"
const API_KEY = "2793700fcb28d5d9dad928548ac5ad57";


const youtubeAPI = process.env.youtubeAPI;

function Movie() {
  const params = useParams();
  const { name } = params;
  const { id } = params;
  const fetchgenre = `https://api.themoviedb.org/3/movie/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_generes=10749`;
  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  // const fetchUrl=`${webid}${id}${similarmovieApi}`;
  const fetchMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  //  const fetchUrl="https://api.themoviedb.org/3/movie/76600/similar?api_key=2793700fcb28d5d9dad928548ac5ad57&language=en-US&page=1"; 
  const [movies, setMovies] = useState([]);
  const [overview, setOverview] = useState();
  const [title, setTitle] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchMovie);
      //  setSeasons(request.data.seasons);
      setOverview(request.data.overview);
      setTitle(request.data.title);

      return request;

    }
    fetchData();
  }, [fetchMovie]);

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


  const opts = {
    height: "500px",
    width: "1200px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const [trailerId, setTrailerId] = useState('');

  const fetchTrailer = async () => {
    try {
      const apiKey = youtubeAPI;
      const seriesName = title;

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


  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };


  return (
    <div className="rowm">
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
                <h2 className='description'>{title}</h2>
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



      {/* <img className="main_poster"
          src={`${baseUrl}${name}`} alt='no image'></img> */}





      <h2 style={{ padding: "10px" }}>Similar Movies</h2>
      <div className="row_postersm">
        {movies.map(movie => (

          <Link to={`${/movie/}${movie.id}${movie.backdrop_path}`}
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
              {isHovered2 && <div className="hover-text">{movie.title}</div>}
            </div>

          </Link>
        ))}
      </div>

    </div>

  )

}

export default Movie