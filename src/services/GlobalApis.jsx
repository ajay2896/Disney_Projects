import axios from 'axios';


const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "670583f809c0f28c1f7923a6efafa07d";

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);


export default { getTrendingVideos }