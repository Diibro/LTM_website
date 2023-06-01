import Logo from "../assets/levy2cd.png";
import { DividerLine } from "./SmallComponents";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
     <div className="Header__row">
          <div className="logo_container">
               <img src={Logo} alt="company_logo"/>
          </div>
          <div className="signIn_container">
               <button>Login or Sign up</button>
          </div>
     </div>
     <DividerLine />
     <div className="Header__row">
          <ul>
               <li><NavLink to="/">Motors</NavLink></li>
               <li><NavLink to="/">Property for Rent</NavLink></li>
               <li><NavLink to="/">Classifields</NavLink></li>
               <li><NavLink to="/">Furniture & Garden</NavLink></li>
               <li><NavLink to="/">Mobile & Talents</NavLink></li>
               <li><NavLink to="/">Jobs</NavLink></li>
               <li><NavLink to="/">Property for Sale</NavLink></li>
               <li><NavLink to="/aboutme">Community</NavLink></li>
          </ul>
     </div>
     <DividerLine />
    </div>
  )
}

export default Header