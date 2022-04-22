import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';

export function Movie({ poster, name, rating, summary }) {

  const styles = {
    color: rating > 8.5 ? "green" : "red"
  };

  const [show, setShow] = useState(false);

  // const summaryStyles={
  //   display: show? "block":"none",
  // };
  return (
    <Card className='movie-container'>
      <img className='movie-poster' src={poster} alt={name} />
      <CardContent>
        <div className='movie-specs'>
          <h2 className='movie-name'>{name}
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="toggle description">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles} className='movie-rating'>{rating}⭐</p>
        </div>

        {/* <button onClick={() => setShow(!show)}>toggle description</button> */}
        {/* <p style={summaryStyles} className='movie-summary'>{summary}</p> */}
        {show ? <p className='movie-summary'>{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>

    </Card>
  );
}
