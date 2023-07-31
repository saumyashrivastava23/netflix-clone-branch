import React from 'react'
import requests from '../requests'
import TVrow from '../TVrow'
import Navbar from './Navbar'
function TV() {
  return (
    // <div>TV</div>
    <div className="TV">
   <Navbar></Navbar>

    {/* <Banner/> */}
    <TVrow title="Action" fetchUrl={requests.fetchActionTV}
    />
    <TVrow title="Comedy" fetchUrl={requests.fetchComedyTV}/>
 
    <TVrow title="Kids" fetchUrl={requests.fetchKidsTV}/>
    <TVrow title="Documentary" fetchUrl={requests.fetchDocumentaryTV}/>
    <TVrow title="Drama" fetchUrl={requests.fetchDramaTV}></TVrow>
    <TVrow title="Animation" fetchUrl={requests.fetchAnimationTV}></TVrow>
    <TVrow title="Sci-Fi & Fantasy" fetchUrl={requests.fetchScifiTV}></TVrow>
    <TVrow title="Family" fetchUrl={requests.fetchFamilyTV}></TVrow>
    <TVrow title="Crime" fetchUrl={requests.fecthCrimeTv}/>


    {/* <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/> */}
    {/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetfilxOriginals}/> */}


  </div>
  )
}

export default TV