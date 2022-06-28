import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Msg } from './Msg';
// import { AddColor } from './AddColor';
import { Switch ,Route } from 'react-router-dom';
import { initial_list } from './initial_list';
import { NotFound } from './NotFound';
import { MovieList } from './MovieList';

function App() {

  const [movieList, setMovieList] = useState(initial_list);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummery] = useState("");

  return (
    <div className="App">
       <ul className='banner'>
       
        <li>
        <Button href="/">Home</Button>
      
        </li>
      </ul>
      <Switch>
        <Route path="/movies">
        <div className='add-movie-form'>
        <TextField
      
          onChange={(event) => setName(event.target.value)}
          label="Enter a movie Name"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Past a movie Poster url"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Enter a movie Rating"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setSummery(event.target.value)}
          label="Enter a movie Summery"
          variant="outlined"
        />

        {/* <button >add movie</button> */}
        <Button onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary
          }
          setMovieList([...movieList, newMovie])
        }} variant="contained">Add movie</Button>
      </div>
      
   <MovieList movieList={movieList} setMovieList={setMovieList}/>
        </Route>
        
        <Route exact path="/">
          <Msg/>
        </Route>
        <Route path="**">
         <NotFound/>
        </Route>
      </Switch>
     
    </div>
    
  );
}
export default App;
