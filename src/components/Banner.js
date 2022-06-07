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

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n - 1) + "..." : str;
  }

  return (
    <>
    <header className="banner-container" style={{
      backgroundSize: "Cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      roundPosition:"center-center"
    }}>
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title|| movie?.name ||movie?.original_name }
        </h1>
        <div className="banner-button-container">
          <button className="banner-button">
            Assistir
          </button>
          <button className="banner-button">
            Minha Lista
          </button>
        </div>
        <div className="banner-description">

          {truncate(movie?.overview,150)}

        </div>
      </div>

    </header>
    </>
    )
}
