import React from 'react'
import { useRef,useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './pages/Navbar';

const API_KEY="2793700fcb28d5d9dad928548ac5ad57";
const baseUrl="https://image.tmdb.org/t/p/original/"


// const fetchidmovie="https://api.themoviedb.org/3/search/company?api_key="

function SearchBar() {
    
    // const [items,setItems]=useState(["sdfd"]);
    // const inputRef=useRef();
    // function onSubmit(e){
        
    //     const value=inputRef.current.value;
        
    //     alert(value);
    //     if(value==="")return
    //     setItems(prev=>{
    //         return[...prev,value]
    //     })
    //     inputRef.current.value="";
    //     // setItems(value);
    // }

    const [movies,setMovies]=useState([]);
    const [tvshows,setTVshows]=useState([]);
    const [term,setTerm]=useState('');
// function onChange(e){
//     const value=e.target.value;
// }
const value="dab";
    // const fetchUrlMovie= `${fetchid}${API_KEY}${"&query="}${value} `;
    const fetchUrlMovie=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${term}`;
    const fetchUrlTVshow=`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${term}`
   
    useEffect(()=>{
      async function fetchData(){
             const request=await axios.get(fetchUrlMovie);
            setMovies(request.data.results);
             return request;

      }
      fetchData();
    },[fetchUrlMovie]);
    
    useEffect(()=>{
      async function fetchData(){
             const request=await axios.get(fetchUrlTVshow);
            setTVshows(request.data.results);
             return request;

      }
      fetchData();
    },[fetchUrlTVshow]);



  return (
    <div className="Search">
      <Navbar></Navbar>
        <span style={{margin:"10px",
      fontSize:"large"}}>Search</span>
            <input value={term} onChange={e=>setTerm(e.target.value)} type="text" ></input>
            
<h2 style={{margin:"10px"}}>Movies</h2>
<div>
{movies.map(movie=>(
           <Link to={`${/movie/}${movie.id}${movie.poster_path}`}
           style={{margin:"5px"}}>
          <img 
            key={movie.id}
            className={`row_poster`}
            src={`${baseUrl}${movie.poster_path}`} alt={movie.name}
            style={{width:"auto",
            height:"150px",
            padding:"5px"
          }}
          />
             </Link>
          ) )}
          </div>
          <div>
          <h2 style={{margin:"10px"}}>TV Shows</h2>
          {tvshows.map(tvshow=>(
           <Link to={`${/tvshow/}${tvshow.id}${tvshow.poster_path}{"/1/1"}`}
           style={{margin:"5px"}}>
          <img 
            key={tvshow.id}
            className={`row_poster `}
            src={`${baseUrl}${tvshow.poster_path}`} alt={tvshow.name}
            style={{width:"auto",
            height:"150px",
            padding:"5px"
          }}
          />
             </Link>
          ) )}
          </div>

    </div>
    
  )
}

export default SearchBar