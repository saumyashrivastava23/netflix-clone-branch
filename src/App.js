// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests  from './requests';
import Banner from './Banner';
import { Link } from "react-router-dom";
import Navbar from './pages/Navbar';
function App() {
  return (
    <div className="App">
      {/* <h1 className="title" >
        <Link to="/tv">
          Netflix 
          </Link> */}
          {/* <Navbar></Navbar> */}
        
      <Banner>jhkgkh</Banner>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetfilxOriginals}
      isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title=" Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy " fetchUrl={requests.fetchComedyMovies}/>
      <Row title=" Animation" fetchUrl={requests.fetchAnimationMovies}/>
      <Row title="Romance " fetchUrl={requests.fetchRomanceMovies}/>
      <Row title=" Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>
      <Row title=" Family" fetchUrl={requests.fetchFamilyMovies}/>
      <Row title=" Thriller" fetchUrl={requests.fetchThrillerMovies}/>
      <Row title=" Sci-Fi" fetchUrl={requests.fetchScifiMovies}/>
      <Row title=" Drama" fetchUrl={requests.fetchDramaMovies}/>
      
      <Row title=" Crime" fetchUrl={requests.fetchCrimeMovies}/>




      {/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetfilxOriginals}/> */}


    </div>
  );
}

export default App;
