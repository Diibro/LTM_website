import Logo from "../assets/levy1ac.png";
import { DividerLine } from "./SmallComponents";
import { NavLink } from "react-router-dom";

//importing icons

//import{ BsGlobe2} from "react-icons/bs";

const Header = () => {
  return (
    <div className="Header">
     <div className="Header__row">
          <div className="logo_container">
               <NavLink to="/"><img src={Logo} alt="company_logo"/></NavLink>
          </div>
          <div className="signIn_container">
               <button>Login or Sign up</button>
          </div>
     </div>
     <DividerLine />
     <div className="Header__row">
          <ul>
               <li><NavLink to="/">Motors</NavLink></li>
               <li><NavLink to="/">Car Deals</NavLink></li>
               <li><NavLink to="/">Trucks</NavLink></li>
               <li><NavLink to="/">Inland Transportation</NavLink></li>
               <li><NavLink to="/">Importation</NavLink></li>
               <li><NavLink to="/">Cargo Handling</NavLink></li>
               <li><NavLink to="/">Warehousing</NavLink></li>
               <li><NavLink to="/aboutme">Exportation</NavLink></li>
          </ul>
     </div>
     <DividerLine />
    </div>
  )
}

export default Header