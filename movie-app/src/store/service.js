import Axios from'axios';

export  const getTopMovies = async(page)=>{
   return await Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=69e1df8f28bf5f2a1d4ca4071c7b98a8&language=en-US&page=${page}`)
}
export  const getUpComing = async(page)=>{
   return await Axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=69e1df8f28bf5f2a1d4ca4071c7b98a8&language=en-US&page=${page}`)
}
export  const getNowPlaying = async(page)=>{
   return await Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=69e1df8f28bf5f2a1d4ca4071c7b98a8&language=en-US&page=${page}`)
}