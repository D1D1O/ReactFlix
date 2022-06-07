import React from 'react';
import { getMovies } from '../api';
import "./Row.css"

// import { Container } from './styles';
const imageHost = "https://image.tmdb.org/t/p/original/";
function Row({title,path,isLarge}) {

  const [movies,setMovies] = React.useState([]);

  const fetchMovies = async(_path) => {
    try{
        const data = await getMovies(_path);
        //console.log("Datas",data)
        setMovies(data?.results);
        
    }catch(error){
      console.log("Error fetchMovies: ", error);
    }
  }

  React.useEffect(() => {
  //faz algo quando mudar o State  
    fetchMovies(path)
  }, [])


  /* RENDER() */
  return (
    <>
      <div className="row-container">
        <h2 className="row-header" >{title}</h2>
        <div className="row-cards">
           {
             movies?.map(movie =>{
               return(
                 <img className={isLarge ? 'movie-card-larger' : 'movie-card'}
                      key={movie.id} 
                      src={`${imageHost}${
                              isLarge ? movie.backdrop_path : movie.poster_path} 
                            `} 
                      alt={movie.name}
                  
                      //lassName={` movie-card ${isLarge ? `movie-card-larger`:''} `} 
                      
                      // 
                      />
               )
             })
           }
        </div>

      </div>
    </>
  )
}

export default Row;