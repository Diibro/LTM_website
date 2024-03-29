import Logo from "../assets/levy1ac.png";
import { DividerLine } from "./SmallComponents";
import { NavLink, useNavigate } from "react-router-dom";
import {BsFacebook, BsWhatsapp} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';

//importing icons

//import{ BsGlobe2} from "react-icons/bs";



const Header = () => {
     const navigate = useNavigate();
  return (
    <div className="Header">
     <div className="Header__row Header_1">
          <div className="logo_container">
               <NavLink to="/"><img src={Logo} alt="company_logo"/></NavLink>
          </div>
          <div className="social-container">
               <i className="fb"><NavLink to="https://www.facebook.com/profile.php?id=100078261281042&mibextid=LQQJ4d" target="_blank"><BsFacebook /></NavLink></i>
               <i className="twitter"><NavLink to="https://www.twitter.com/levy_motors" target="_blank"><FaTwitterSquare /></NavLink></i>
               <i className="ig"><NavLink><AiFillInstagram /></NavLink></i>
               <i className="whatsapp"><NavLink to="https://wa.me/+250788303754" target="_blank"><BsWhatsapp /></NavLink></i>
          </div>
          <div className="signIn_container">
               <button onClick={() => navigate("/contact_us")} >Contact us</button>

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