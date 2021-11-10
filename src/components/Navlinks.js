import react,{useContext} from "react";
/*import { NavLink } from "react-router-dom";*/
import "./Navlinks.css"
import { AuthContext } from "../authcontext/AuthContext";
const Navlinks= props =>{
    const auth=useContext(AuthContext) 

    return(
        <header>
            <div class="nav-bar">
             <span><h1>PLA-CIT</h1></span>
              <ul>
                <li><a href="/">All user</a></li>
                <li><a href="/MYPlaces">My places</a></li>
                <li><a href="AddPlaces">Add places</a></li>
                <li>{ auth.isLoggedIn && 'Loggenin' }</li>
              </ul>
            </div>

{/* <div class="top-rect">
  <h1>Take memories, leave footprints.</h1>
</div> */}


      </header>
    )
}
export default Navlinks;
