import {Link} from "react-router-dom";
export function Msg() {
    
  return (
    <div >
      
      <div className="none" >
        <h1 className="content">Welcome to Add movie list🎬</h1> 
     <div className="out"><button className="home"> <Link to ="/movies">Movies</Link></button></div>
     
         
      {/* <img src="https://wallpaperaccess.com/full/2000058.jpg" alt="home"/> */}
      </div>
    </div>
  );
}
