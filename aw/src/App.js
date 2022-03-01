
import './App.css';


const users=[
  {
    pic:"https://imgs.capitalfm.com/images/287142?crop=16_9&width=660&relax=1&signature=6qduHeI4eOxFesqY-QXFX_Og8KI=" 
    ,name:"azhar"
  },
  {
    pic:"https://wikibio.in/wp-content/uploads/2019/05/Justin-Bieber.jpg"
    ,name:"justin"
  },
  {
    pic:"https://static.highsnobiety.com/thumbor/uF5GJNBO5INSEnCLBmZrTliAUWQ=/fit-in/800x1000/smart/static.highsnobiety.com/wp-content/uploads/2019/08/16150045/2019_Brand_Pages_JustinBieber_Kevin-Mazur.jpg"
    , name:"bieber"
  }
]


function App() {
  return (
    <div className="App">
     {users.map(ur=><Welcome pic={ur.pic} name={ur.name}/>)}
    </div>
  );
}

function Welcome({pic,name}){
return(
  <div className="welcome">
    <img className="pic" src={pic} alt={name} />
   <h1>welcome {name}</h1> 
  </div>
);
}



export default App;


