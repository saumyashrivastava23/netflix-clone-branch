import React, { useState ,useEffect} from 'react';
import axios from './axios';
import './TVrow.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const baseUrl="https://image.tmdb.org/t/p/original/"


function TVrow({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
      async function fetchData(){
             const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
             return request;

      }
      fetchData();
    },[fetchUrl]);
    const season="/1";
    const episode="/1";


    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseOver2 = () => {
      setIsHovered2(true);
    };
  
    const handleMouseOut2 = () => {
      setIsHovered2(false);
    };



  return (
    
       
          
         
       

        <div className='tvrow'> 
        <h2
        style={{padding:"10px"}}>
            {title}
        </h2>
       <div className= "tvrow_posters">
          {movies.map(movie=>(



<Link to={`${/tvshow/}${movie.id}${movie.backdrop_path}${season}${episode}`}>



<div className={`tvrow_poster ${isLargeRow && "tvrow_posterLarge"}`}
      style={{
         // backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
         backgroundImage:`url(${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path} )`
     }}
     onMouseOver={handleMouseOver2}
     onMouseOut={handleMouseOut2} 
>

{ !isHovered2 && <div className={`row_poster ${isLargeRow && "row_posterLarge"}`}
onMouseOver={handleMouseOver2}
onMouseOut={handleMouseOut2}  
style={{
// backgroundImage: `url("https://image.tmdb.org/t/p/original/${name}")`,
backgroundImage:`url(${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path} )`
}}>

</div>}
{isHovered2 && <div className="hover-text">{movie.name}</div>}
 </div>

  </Link>
          ) )}
          
         
        </div>
    </div>
  
    
  )
}


export default TVrow