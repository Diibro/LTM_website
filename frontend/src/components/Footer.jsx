import Logo from "../assets/levy1ac.png";

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
                    <li>Nigeria</li>
                    <li>Algeria</li>
                    <li>Burundi</li>
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
                    <li>Call us</li>
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
    </div>
  )
}

export default Footer