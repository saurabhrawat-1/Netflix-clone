const API__KEY = "b220f8c71cf6183dc2e4a9e23be929dc";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API__KEY}&with_networks=213`,
  fetchTrendingNow: `/trending/all/week?api_key=${API__KEY}&language=en-US`,
  fetchTopRated: `/discover/tv?api_key=${API__KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API__KEY}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${API__KEY}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API__KEY}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${API__KEY}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${API__KEY}&with_genres=80`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${API__KEY}&with_genres=99`,
  fetchDramaMovies: `/discover/movie?api_key=${API__KEY}&with_genres=18`,
  fetchFamilyMovies: `/discover/movie?api_key=${API__KEY}&with_genres=10751`,
  fetchFantasyMovies: `/discover/movie?api_key=${API__KEY}&with_genres=14`,
  fetchHistoryMovies: `/discover/movie?api_key=${API__KEY}&with_genres=36`,
  fetchHorrorMovies: `/discover/movie?api_key=${API__KEY}&with_genres=27`,
  fetchMusicMovies: `/discover/movie?api_key=${API__KEY}&with_genres=10402`,
  fetchMysteryMovies: `/discover/movie?api_key=${API__KEY}&with_genres=9648`,
  fetchRomanceMovies: `/discover/movie?api_key=${API__KEY}&with_genres=10749`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API__KEY}&with_genres=878`,
  fetchTvMovies: `/discover/movie?api_key=${API__KEY}&with_genres=10770`,
  fetchThrillerMovies: `/discover/movie?api_key=${API__KEY}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${API__KEY}&with_genres=10752`,
  fetchWesternMovies: `/discover/movie?api_key=${API__KEY}&with_genres=37`,
};

export default requests;
