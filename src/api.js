const API_KEY = "9e1e924139fa2991789e4443bf2409b0";

const categories =[
  {
    name:"trending",
    title: "Em Alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-br`,
    isLarge: true,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

export const getMovies = async(path) =>{
  try{
    let url =`https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();

  }catch(error){
    console.log("Error getMovies: ",error);
  }
}
export default categories;

