const API_KEY="2793700fcb28d5d9dad928548ac5ad57";
const requests={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetfilxOriginals:`/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10749`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=27`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=99`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=53`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=18`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10751`,
    fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=878`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=80`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16`,

 
    fetchActionTV:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10759`,
    fetchAnimationTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16`,
    fetchComedyTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
    fecthCrimeTv:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc.desc&with_genres=80`,
    fetchDocumentaryTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`,
    fetchDramaTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&with_genres=18`,
    fetchFamilyTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10751`,
    fetchScifiTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10765`,
    fetchKidsTV:`/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10762`,
    // /discover/tv?api_key=2793700fcb28d5d9dad928548ac5ad57&language=en-US&sort_by=popularity.desc&with_generes=10759`
}
export default requests; 