import { NavLink } from "react-router-dom";

import Logo from "../assets/levy1ac.png";
import Chatbox from "./chatBox/chatbox";
import {FaPhoneSquareAlt} from 'react-icons/fa';


const Footer = () => {   



  return (
    <div className="Footer">
     <div className="Footer_row">
          <div className="col">
               <h3>Company</h3>
               <ul>
                    <li><NavLink to="/about_us">About us</NavLink></li>
                    <li><NavLink to="/terms_of_use">Terms of use</NavLink></li>
                    <li><NavLink to="/privacy_policy">Privacy Policy</NavLink></li>
               </ul>
          </div>
          <div className="col">
               <h3>Countries</h3>
               <ul>
                    <li>Rwanda</li>
                    <li>Kenya</li>
                    <li>Uganda</li>
                    <li>DRC</li>
                    <li>United Araba Emirates</li>
                    <li>United Kingdom</li>
                    <li>South Korea</li>
               </ul>
          </div>
          <div className="col">
               <h3>Get Social</h3>
               <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>Instagram</li>
               </ul>
          </div>
          <div className="col">
               <h3>Support</h3>
               <ul>
                    <li><NavLink to="/get_help">Help</NavLink></li>
                    <li><NavLink to="/contact_us">Contact Us</NavLink></li>
                    <li className="phone-container"><i className="phone"><FaPhoneSquareAlt/> </i><a href="tel:+250788303754">+250788303754</a></li>
               </ul>
          </div>
     </div>
     <div className="Footer_row Footer_down">
          <div className="col">
               <img src={Logo} alt="company_logo" />
               
          </div>
     </div>
     <p>&#169; levytradingmotors.co.uk <br /> All rights reserved.</p>
     <Chatbox />
    </div>
  )
}

export default Footer