//import Home_1 from "../assets/carImages/Home_1.jpg";
import Home_2 from "../assets/carImages/home_5.jpg";
import Truck_1 from "../assets/new/home_7.png";
import Truck_2 from "../assets/carImages/5.png";
import Truck_3 from "../assets/new_images/Truck_2.jpeg";
import Kigali from "../assets/carImages/Kigali_1.jpg";
import Bukavu from "../assets/carImages/Bukavu_1.png";
import Kampala from "../assets/carImages/Kampala_1.jpg";
import Dar_City from "../assets/carImages/Dar_City.jpg";
import Back_1 from "../assets/carImages/Home_1.jpg";

import {AiOutlineArrowRight} from 'react-icons/ai'



 
import { useEffect, useState } from "react";

import Slider from "../components/slider/slider";
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
          <Slider/>
          <div className="about_sec">
               <div className="about_para">
                    <h4>At Levy Trading Motors we provide</h4>
                    <div className="ul">
                         <div className="col">
                              <div className="row">
                                   <img src={Truck_1} alt="Truck_1" />
                              </div>
                              <div className="row text">
                                   <h5>Shipping of trucks</h5>
                                   <p>Work with us and get the truck of you choice shipped at your desired destination. We do shipping in the countries:<br/> <b>United Araba Emirates, United Kingdom and South Korea</b></p>
                              </div>
                         </div>
                         <div className="col">
                              <div className="row">
                                   <img src={Truck_2} alt="Truck_2" />
                              </div>
                              <div className="row text">
                                   <h5>Inland Transportation</h5>
                                   <p>Get your goods devlivered within in East Africa. Wok with the best transportation Company in <br /><b>Tanzania-Dar Es Salam, Rwanda-Kigali, DRC-Bukavu</b></p>
                              </div>
                         </div>
                         
                         <div className="col">
                              <div className="row">
                                   <img src={Truck_3} alt="Truck_3" />
                              </div>
                              <div className="row text">
                                   <h5>Dealing Trucks</h5>
                                   <p>Work with the most popular agency in dealing trucks and selling your used trucks at your desired price. Create an account and enjoy the best car deals on any continent.</p>
                              </div>
                         </div>
                         
                         
                    </div>
               </div>
          </div>
          <div className="country_sec" style={{backgroundImage: `url(${Back_1})`}} >
                    <div className="cover"></div>
                    <h4>We do inland transportation of goods with in East African Countries</h4>
                    <div className="ul">
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
                    </div>
          </div>
          <div className="trucks_sec">
               <div className="title"><h3>Get the best trucks from United Kingdom</h3><i><AiOutlineArrowRight/></i></div>
               <div className="title"><h3>Get the best trucks from United Arab Emirates</h3><i><AiOutlineArrowRight/></i></div>
               <div className="title"><h3>Get best trucks from Belgium</h3><i><AiOutlineArrowRight/></i></div>
               <div className="title"><h3>Get the best trucks from South Korea</h3><i><AiOutlineArrowRight/></i></div>
          </div>
    </div>
  )
}

export default Home;


// <h3 className="h3_2">The best car deals from United Kingdom and Ireland</h3>
// <h3 className="h3_3">Get your favorite car from Dubai and South Korea</h3>