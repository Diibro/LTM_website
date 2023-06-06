import Logo from "../assets/levy1ac.png";
import Chatbox from "./chatBox/chatbox";


const Footer = () => {   



  return (
    <div className="Footer">
     <div className="Footer_row">
          <div className="col">
               <h3>Company</h3>
               <ul>
                    <li>About us</li>
                    <li>Advertising</li>
                    <li>Careers</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
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
                    <li>Help</li>
                    <li>Contact us</li>
                    <li>Call us:  <a href="tel:+250788303754">0788303754</a></li>
               </ul>
          </div>
     </div>
     <div className="Footer_row Footer_down">
          <div className="col">
               <img src={Logo} alt="company_logo" />
               <p>&#169; levytradingmotors.co.uk All rights reserved.</p>
          </div>
          <div  className="col"> </div>
     </div>
     <Chatbox />
    </div>
  )
}

export default Footer