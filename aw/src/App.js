import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { Msg } from './Msg';
// import { AddColor } from './AddColor';
import { Movie } from './Movie';

// const users = [
//   {
//     pic: "https://imgs.capitalfm.com/images/287142?crop=16_9&width=660&relax=1&signature=6qduHeI4eOxFesqY-QXFX_Og8KI="
//     , name: "azhar"
//   },
//   {
//     pic: "https://wikibio.in/wp-content/uploads/2019/05/Justin-Bieber.jpg"
//     , name: "justin"
//   },
//   {
//     pic: "https://static.highsnobiety.com/thumbor/uF5GJNBO5INSEnCLBmZrTliAUWQ=/fit-in/800x1000/smart/static.highsnobiety.com/wp-content/uploads/2019/08/16150045/2019_Brand_Pages_JustinBieber_Kevin-Mazur.jpg"
//     , name: "bieber"
//   }
// ]
const initial_list = [
  {
    poster: "https://i.pinimg.com/originals/d4/ac/c8/d4acc863d31ab88d4a508976c22162de.jpg",
    name: "Spider man(2002)",
    rating: "7.3",
    summary: "Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in the Spider-Man trilogy, and stars Tobey Maguire as the titular character, alongside Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, and Rosemary Harris. The film tells the origin when outcast teen genius Peter Parker develops spider-like superhuman abilities after a genetically-altered spider bites him and decides to use his newfound powers to fight crime as Spider-Man, facing the villainous Green Goblin in the process."
  },
  {
    poster: "https://resizing.flixster.com/tnKNhFshSZGpRTjgKK_Yk_Ij2jI=/206x305/v2/https://flxt.tmsimg.com/assets/p34442_p_v8_aa.jpg",
    name: "Spider man-2",
    rating: "7.8",
    summary: "Spider-Man 2 is a 2004 American superhero film directed by Sam Raimi and written by Alvin Sargent from a story by Alfred Gough, Miles Millar and Michael Chabon. Based on the fictional Marvel Comics character of the same name, it is the second installment in the Spider-Man trilogy and the sequel to Spider-Man (2002), starring Tobey Maguire alongside Kirsten Dunst, James Franco, Alfred Molina, Rosemary Harris, and Donna Murphy. Set two years after the events of Spider-Man, the film finds Peter Parker struggling to manage both his personal life and his duties as Spider-Man, which affects his civilian life dramatically. Meanwhile scientist and Peter's mentor Dr. Otto Octavius becomes a diabolical villain after a failed experiment kills his wife and leaves him neurologically fused to mechanical tentacles."
  },
  {
    poster: "https://images.saymedia-content.com/.image/t_share/MTc0NTEwNTY1MDYwNzgyMDI1/should-i-watch-spider-man-3.jpg",
    name: "Spider man-3",
    rating: "8.5",
    summary: "Spider-Man 3 is a 2007 American superhero film based on the Marvel Comics character Spider-Man. It was directed by Sam Raimi from a screenplay by Raimi, his older brother Ivan and Alvin Sargent. It is the final installment in Raimi's Spider-Man trilogy. The film stars Tobey Maguire as Peter Parker / Spider-Man, alongside Kirsten Dunst, James Franco, Thomas Haden Church, Topher Grace, Bryce Dallas Howard, James Cromwell, Rosemary Harris, and J. K. Simmons. The film also marks the final film appearance of Cliff Robertson before his retirement and death in 2011. "
  },
  {
    poster: "https://m.media-amazon.com/images/I/91JfrNdI9kL._SL1500_.jpg",
    name: "The Amazing Spider man",
    rating: "8.8",
    summary: "The Amazing Spider-Man is a 2012 American superhero film based on the Marvel Comics character Spider-Man and sharing the title of the character's longest-running comic book series of the same name. It is the fourth theatrical Spider-Man film produced by Columbia Pictures and Marvel Entertainment, a reboot of the series following Sam Raimi's 2002–2007 Spider-Man trilogy, and the first of the two The Amazing Spider-Man films. The film was directed by Marc Webb and written by James Vanderbilt, Alvin Sargent and Steve Kloves from a story by Vanderbilt, and stars Andrew Garfield as Peter Parker / Spider-Man alongside Emma Stone, Rhys Ifans, Denis Leary, Campbell Scott, Irrfan Khan, Martin Sheen, and Sally Field. In the film, after Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe."
  },
  {
    poster: "https://images.moviesanywhere.com/757c9356f3c7c0d5ba2a39b388782cc0/3d097a17-3a37-4151-b536-f9deaa6d6bac.jpg",
    name: "The Amazing Spider man 2",
    rating: "9.2",
    summary: "The Amazing Spider-Man 2 (internationally titled The Amazing Spider-Man 2: Rise of Electro)[6] is a 2014 American superhero film based on the Marvel Comics character Spider-Man. The film was directed by Marc Webb and produced by Avi Arad and Matt Tolmach. It is the fifth theatrical Spider-Man film produced by Columbia Pictures and Marvel Entertainment, the sequel to The Amazing Spider-Man (2012), and the final film in The Amazing Spider-Man series. The studio hired James Vanderbilt to write the screenplay and Alex Kurtzman and Roberto Orci to rewrite it.[7][8] The film stars Andrew Garfield as Peter Parker / Spider-Man, alongside Emma Stone, Jamie Foxx, Dane DeHaan, Campbell Scott, Embeth Davidtz, Colm Feore, Paul Giamatti, and Sally Field. In the film, Peter Parker tries to protect Gwen Stacy as he investigates his parents' death, while also dealing with the supervillain Electro and the return of his childhood friend Harry Osborn, who is dying from a deadly genetic disease."
  },
  {
    poster: "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_FMjpg_UX1000_.jpg",
    name: "Spiderman Homecoming",
    rating: "9",
    summary: "Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the second Spider-Man film reboot and the 16th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts, from a screenplay by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna and Erik Sommers. Tom Holland stars as Peter Parker / Spider-Man, alongside Michael Keaton, Jon Favreau, Gwyneth Paltrow, Zendaya, Donald Glover, Jacob Batalon, Laura Harrier, Tony Revolori, Bokeem Woodbine, Tyne Daly, Marisa Tomei, and Robert Downey Jr. In Spider-Man: Homecoming, Peter Parker tries to balance high school life with being Spider-Man while facing the Vulture (Keaton)."
  }
]



function App() {

  const [movieList, setMovieList] = useState(initial_list);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummery] = useState("");

  return (
    <div className="App">
      {/* <Msg/> */}
      <div className='add-movie-form'>
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="outlined"
        />

        <TextField
          onChange={(event) => setSummery(event.target.value)}
          label="Summery"
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
      <div className="movie-list">
        {/* {users.map(ur=><Welcome pic={ur.pic} name={ur.name}/>)}
     <Counter/> */}
        {movieList.map((mn, index) => <Movie
          key={index}
          poster={mn.poster}
          name={mn.name}
          rating={mn.rating}
          summary={mn.summary}
        />)}

        {/* <AddColor /> */}
      </div>
    </div>
  );
}

export default App;
