const key = '61c97ad1e3ad3ecfa14ee3391a58aa50'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_networks=213`,
    requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=28`,
    requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=35`,
    requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=10749`,
    requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=99`,
  };

  export default requests