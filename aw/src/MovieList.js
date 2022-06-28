import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export function MovieList({ movieList ,setMovieList}) {

  return (
    <div className="movie-list">

      {movieList.map((mn, index) => <Movie
        key={index}
        poster={mn.poster}
        name={mn.name}
        rating={mn.rating}
        summary={mn.summary} 
        deleteButton={

          <IconButton 
          style={{marginLeft:"auto"}}
          onClick={()=>{
            console.log(index);
            const copyMovieList=[...movieList];
            copyMovieList.splice(index,1);
            setMovieList(copyMovieList);
            }} aria-label="delete"
              color='error'>
          <DeleteIcon />
        </IconButton>
      
        }
        
       
        />
       )}
    </div>
  );
}
