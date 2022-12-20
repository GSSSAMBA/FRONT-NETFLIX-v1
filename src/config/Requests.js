// https://api.themoviedb.org/3
// bc57c013bed28489ee620cf77702430c

const API_KEY = "bc57c013bed28489ee620cf77702430c";

const baseURL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default requests;