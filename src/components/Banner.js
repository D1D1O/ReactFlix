import React, { useEffect } from 'react';
import categories, {getMovies} from '../api';
import './Banner.css'

export default function Banner() {

  const [movie,setMovie] = React.useState({});

  const fetchRandomMovie = async () =>{
    try{
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(movies[randomIndex])
      console.log("Movie-Banner",movie)
      console.log(movie?.backdrop_path)

    }catch(error){
      console.log('fetchRandomMovie',error);
    }
  }

  useEffect(() => {
    fetchRandomMovie()
  }, [])
  

  return (
    <>
    <h1>Banner</h1>
    <header className="banner-container" style={{
      backgroundSize: "Cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      roundPosition:"center-center"
    }}>

    </header>
    </>
    )
}
