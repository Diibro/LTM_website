//import Home_1 from "../assets/carImages/Home_1.jpg";
import Home_2 from "../assets/carImages/Home_2.jpeg";
import Truck_1 from "../assets/carImages/truck_1.jpeg";
import Truck_2 from "../assets/carImages/truck_2.jpeg";
import Truck_3 from "../assets/carImages/truck_3.jpeg";
import Kigali from "../assets/carImages/Kigali_1.jpg";
import Bukavu from "../assets/carImages/Bukavu_1.png";
import Kampala from "../assets/carImages/Kampala_1.jpg";
import Dar_City from "../assets/carImages/Dar_City.jpg"
 
import { useEffect, useState } from "react";


import {NavLink} from "react-router-dom";

const Home = () => {
     const [text, setText] = useState("The best Transport Agency in East Africa");
     useEffect(( ) => {
          var count = 0;
          if(count === 5){
               setText("The best car deals from United Kingdom and Ireland");
          }
          count++;
     }, [text])
  return (
    <div className="Home_page">
          <div className="Hello_sec" style={{backgroundImage: `url(${Home_2})`,}} >
               <div className="Hello_overlay"></div>
               <div className="intro_text">
                    <h3 className="h3_1">{text}</h3>
                    <h3 className="h3_2">The best car deals from United Kingdom and Ireland</h3>
                    <h3 className="h3_3">Get your favorite truck from Dubai and South Korea</h3>
               </div>
               <div className="search_container" >
                    <div className="search_list" >
                         <h3>Searching in</h3>
                         <ul>
                              <li><NavLink to="/">All</NavLink></li>
                              <li><NavLink to="/">Logistics</NavLink></li>
                              <li><NavLink to="/">Car Deals</NavLink></li>
                              <li><NavLink to="/">Trucks</NavLink></li>
                         </ul>
                    </div>
                    <div className="search_form" >
                         <input type="text" placeholder="Search anything" />
                         <button>Search</button>
                    </div>
               </div>
          </div>
          <div className="about_sec">
               <div className="about_para">
                    <h4>At Levy Trading Motors we have these services for you</h4>
                    <ul>
                         <div className="col">
                              <img src={Truck_1} alt="Truck_1" />
                              <li>Transportation of goods</li>
                         </div>
                         <div className="col">
                              <img src={Truck_2} alt="Truck_2" />
                              <li>Shipping of trucks</li>
                         </div>
                         
                         <div className="col">
                              <img src={Truck_3} alt="Truck_3" />
                              <li>Dealing Cars for clients</li>
                         </div>
                         
                         
                    </ul>
                    <h4>We do transportation of goods with in East Africa countries:</h4>
                    <ul>
                         <div className="col">
                              <img src={Kigali} alt="Kigali City" />
                              <li>Rwanda-Kigali</li>
                         </div>
                         <div className="col">
                              <img src={Bukavu} alt="Bukavu" />
                              <li>DRC-Bukavu</li>
                         </div>
                         <div className="col">
                              <img src={Kampala} alt="Kampala City" />
                              <li>Uganda-Kampala</li>
                         </div>
                         <div className="col">
                              <img src={Dar_City} alt="Dar Es Salam" />
                              <li>Tanzania-Dar Es Salam</li>
                         </div>
                         
                         
                         
                         
                    </ul>
               </div>
          </div>
          <div className="trucks_sec">
               <div className="title"><h3>Get the best trucks from United Kingdom</h3></div>
          </div>
          <div className="trucks_sec">
               <div className="title"><h3>Do with us the best Car deals from Dubai</h3></div>
          </div>
          <div className="trucks_sec">
               <div className="title"><h3>Get best trucks from Ireland</h3></div>
          </div>
          
          <div className="trucks_sec">
               <div className="title"><h3>Do with us the best Car deals from South Korea</h3></div>
               
          </div>
    </div>
  )
}

export default Home;


// <h3 className="h3_2">The best car deals from United Kingdom and Ireland</h3>
// <h3 className="h3_3">Get your favorite car from Dubai and South Korea</h3>