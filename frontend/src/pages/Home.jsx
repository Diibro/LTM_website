//import Home_1 from "../assets/carImages/Home_1.jpg";
import Truck_1 from "../assets/new/home_7.png";
import Truck_2 from "../assets/carImages/truck_2.png";
import Truck_3 from "../assets/new_images/Truck_2.jpeg";
import Kigali from "../assets/carImages/Kigali_1.jpg";
import Bukavu from "../assets/carImages/Bukavu_1.png";
import Kampala from "../assets/carImages/Kampala_1.jpg";
import Dar_City from "../assets/carImages/Dar_City.jpg";
import Back_1 from "../assets/carImages/Home_1.jpg";
import Goma from "../assets/carImages/Goma.jpg";


import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiChevronsRight} from 'react-icons/bi';
import {FaCar, FaTruck, FaTruckLoading} from 'react-icons/fa';
// import {BsArrowRight} from 'react-icons/bs';

import Benz from '../assets/car logos/benz_1.ico';
import Scania from '../assets/car logos/scania_1.png';
import Logistic from '../assets/car logos/logitstics_1.png'


import {NavLink} from "react-router-dom";



const Home = () => {

  return (
    <div className="Home_page">
          <div className="Hello_sec-container">
               <div className="Hello_sec" style={{backgroundImage: `url(${Truck_1})`,}} >
                    <div className="Hello_overlay"></div>
                    <div className="intro_text">
                         <h3 className="h3_1">Welcome to Levy Trading Motors</h3>
                         <h3 className="h3_2">The best Transport Agency in East Africa and Africa</h3>
                         <h3 className="h3_3">The best car dealers from United Emirates, Belgium and South Korea</h3>
                    </div>
                    <div className="search_container" >
                         <div className="search_list" >
                              <h3>Searching in</h3>
                              <ul>
                                   <li><NavLink to="/">All</NavLink></li>
                                   <li><NavLink to="/">Logistics</NavLink></li>
                                   <li><NavLink to="/">Motors</NavLink></li>
                                   <li><NavLink to="/">Transport</NavLink></li>
                              </ul>
                         </div>
                         <div className="search_form" >
                              <input type="text" placeholder="Search anything" />
                              <button>Search</button>
                         </div>
                    </div>
               </div>
          </div>
          <div className="categories">
               <h3>Popular Categories</h3>
               <div className="row">
                    <div className="col">
                         <div className="title"><i><FaCar/></i><h4>Motors</h4></div>
                         <div className="list">
                              <NavLink>Brand New Cars</NavLink>
                              <NavLink>Used cars for sale</NavLink>
                              <NavLink>Hybrid cars</NavLink>
                              <NavLink>Automatic cars</NavLink>
                              <NavLink>All</NavLink>
                         </div>
                    </div>
                    <div className="col">
                         <div className="title"><i><FaTruck/></i><h4>Trucks</h4></div>
                         <div className="list">
                              <NavLink><img src={Benz} alt="Benz Icon" /> Mercedes Benz</NavLink>
                              <NavLink><img src={Scania} alt="Scania Icon" /> Scania</NavLink>
                              <NavLink>All</NavLink>
                         </div>
                    </div>
                    <div className="col">
                         <div className="title"><i><FaTruckLoading/></i><h4>Inland Transportation</h4></div>
                         <div className="list">
                              <NavLink>Countries</NavLink>
                              <NavLink>Destinations</NavLink>
                              <NavLink>Vehicles</NavLink>
                              <NavLink>All</NavLink>
                         </div>
                    </div>
                    <div className="col">
                         <div className="title"><img src={Logistic} alt="Logistic" /><h4>Logistics</h4></div>
                         <div className="list">
                              <NavLink>Locations</NavLink>
                              <NavLink>Destinations</NavLink>
                              <NavLink>Vehicles</NavLink>
                              <NavLink>All</NavLink>
                         </div>
                    </div>
               </div>
          </div>
          <div className="about_sec">
               <div className="about_para">
                    <div className="back_text">
                         <h2>Our Services</h2>
                         <h4>Our Services</h4>
                    </div>
                    
                    <div className="ul">
                         <div className="col">
                              <div className="row img">
                                   <img src={Truck_1} alt="Truck_1" />
                              </div>
                              <div className="row text">
                                   <h5>Shipping and Logistics</h5>
                                   <p>Work with us and get the truck of you choice shipped at your desired destination. We do shipping in the countries:<br/> <b>United Araba Emirates, United Kingdom and South Korea</b></p>
                              </div>
                         </div>
                         <div className="col">
                              <div className="row img">
                                   <img src={Truck_2} alt="Truck_2" />
                              </div>
                              <div className="row text">
                                   <h5>Inland Transportation</h5>
                                   <p>Get your goods devlivered within in East Africa. Wok with the best transportation Company in <br /><b>Tanzania-Dar Es Salam, Rwanda-Kigali, DRC-Bukavu, DRC-Goma</b></p>
                              </div>
                         </div>
                         
                         <div className="col">
                              <div className="row img">
                                   <img src={Truck_3} alt="Truck_3" />
                              </div>
                              <div className="row text">
                                   <h5>Dealing Trucks</h5>
                                   <p>Work with the most popular agency in dealing trucks and selling your used trucks at your desired price. Create an account and enjoy the best car deals on any continent.</p>
                              </div>
                         </div>
                         
                         
                    </div>
                    <div className="more-sec">
                         <NavLink>More <i><BiChevronsRight /></i></NavLink>
                         
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
                              <img src={Goma} alt="Bukavu" />
                              <li>DRC-Goma</li>
                         </div>
                         <div className="col">
                              <img src={Kampala} alt="Kampala City" />
                              <li>Uganda-Kampala</li>
                         </div>
                         <div className="col">
                              <img src={Dar_City} alt="Dar Es Salam" />
                              <li>Tz-Dar Es Salam</li>
                         </div>
                    </div>
                    <div className="contact-sec">
                         <NavLink>Get started</NavLink>
                         
                    </div>
          </div>
          <div className="trucks_sec">
               <div className="title"><h3>Get the best cars and trucks from United Kingdom</h3><i><AiOutlineArrowRight/></i></div>
               <div className="title"><h3>Get the best cars from United Arab Emirates</h3><i><AiOutlineArrowRight/></i></div>
               <div className="title"><h3>Get best cars and trucks from Belgium</h3><i><AiOutlineArrowRight/></i></div>
               <div className="title"><h3>Get the best cars from South Korea</h3><i><AiOutlineArrowRight/></i></div>
          </div>
    </div>
  )
}

export default Home;


// <h3 className="h3_2">The best car deals from United Kingdom and Ireland</h3>
// <h3 className="h3_3">Get your favorite car from Dubai and South Korea</h3>