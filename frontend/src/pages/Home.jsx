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

import RwandaF from '../assets/Flags/RwandaF.jpeg';
import BurundiF from '../assets/Flags/BurundiF.png';
import FranceF from '../assets/Flags/FranceF.png';
import RDCF from '../assets/Flags/RDCF.png';
import SouthKF from '../assets/Flags/SouthKF.png';
import TzF from '../assets/Flags/TzF.png';
import DubaiF from '../assets/Flags/DubaiF.png';


import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiChevronsRight} from 'react-icons/bi';
import {FaCar, FaTruck, FaTruckLoading} from 'react-icons/fa';
// import {BsArrowRight} from 'react-icons/bs';

import Benz from '../assets/car logos/benz_1.ico';
import Scania from '../assets/car logos/scania_1.png';
import Logistic from '../assets/car logos/logitstics_1.png'


import {NavLink, useNavigate} from "react-router-dom";
import {useRef, useContext} from 'react';
import { Searched } from "../Context/SearchContext";

import { Sec_1 } from "../components/Free_sec/Free_sec";


const Cars = [
     {
          name: "Toyota Prius",
          price: "7,000,000",
          imageUrl: ""
     },
     {
          name: "Rava4",
          price: "15,000,000",
          imageUrl: ""
     },
     {
          name: "Tesla",
          price: "30,000,000",
          imageUrl: ""
     },
     {
          name: "Toyota Hybrid",
          price: "12,000,000",
          imageUrl: ""
     },
];


const Home = () => {
     const  [searched,setSearched] = useContext(Searched);

     const searchRef = useRef();
     const navigate = useNavigate();

     const handleSubmit = () => {
          if(searchRef.current.value != ""){
               searchRef.current.value = "";
               navigate('/search')
          }
     }


  return (
    <div className="Home_page">
          <div className="Hello_sec-container">
               <div className="Hello_sec" style={{backgroundImage: `url(${Truck_1})`,}} >
                    <div className="Hello_overlay"></div>
                    <div className="intro_text">
                         <h3 className="h3_1">Welcome to Levy Trading Motors</h3>
                         <h3 className="h3_2">The best Transport Agency in East Africa and Africa</h3>
                         <h3 className="h3_3">The best car dealers from United Arab Emirates, Belgium and South Korea</h3>
                    </div>
                    <div className="search_container" >
                         <div className="search_list" >
                              <h3>Searching in</h3>
                              <ul>
                                   <li><NavLink activeClassName="activeSearch" to="/" onClick={() => setSearched((prev) => ({...prev, searchType: "All"}))}>All</NavLink></li>
                                   <li><NavLink activeClassName="activeSearch" to="/" onClick={() => setSearched((prev) => ({...prev, searchType: "Logistics"}))}>Logistics</NavLink></li>
                                   <li><NavLink activeClassName="activeSearch" to="/" onClick={() => setSearched((prev) => ({...prev, searchType: "Motors"}))}>Motors</NavLink></li>
                                   <li><NavLink activeClassName="activeSearch" to="/" onClick={() => setSearched((prev) => ({...prev, searchType: "Transport"}))}>Transport</NavLink></li>
                              </ul>
                         </div>
                         <div className="search_form" >
                              <input ref={searchRef} type="text" placeholder="Search anything" onChange={(e) => setSearched((prev) => ({...prev, search: e.target.value}))} />
                              <button onClick={handleSubmit}>Search</button>
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
          <Sec_1 />
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
          <div className="country_sec"  >
                    <h2>Our Offices</h2>
                    <div className="offices">
                         <div className="col">
                              <div className="row">
                                   <img src={RwandaF} alt="" />
                                   <p>
                                        <b>Rwanda</b>: Levy Trading Motors Ltd <br />
                                        Rwanda-kigali, P.O Box 1184 Kigali <br />
                                        KN 3Rd, Le Prestige House, Ground Floor F06 <br />
                                        <b>Tel</b>: <a href="tel:+250788303754">+250 788-303-754</a>
                                   </p>
                              </div>
                              <div className="row">
                                   <img src={BurundiF} alt="" />
                                   <p>
                                        <b>Burundi</b>: Commune Mukaza, Zone Rohero <br />
                                        Avenue des Euphorbes No 8 <br />
                                        <b>Tel</b>: <a href="tel:+25771685307">+257 71 68 5307</a>
                                   </p>
                              </div>
                              <div className="row">
                                   <img src={SouthKF} alt="" />
                                   <p>
                                        <b>South Korea</b>: Levy Trading Motors Ltd <br />
                                        South Korea <br />
                                        <b>Tel</b>: <a href="tel:+821081208573">+82 10-8120-8573</a>
                                   </p>
                              </div>
                              <div className="row">
                                   <img src={DubaiF} alt="" />
                                   <p>
                                        <b>Dubai</b>: Rashidia. Umm Ramool <br />
                                        P.O Box 238479, Emirates <br />
                                        <b>Tel</b>: <a href="tel:+971582503369">+97 15-82-50-3369</a> <br />
                                        <b>Whatsapp</b>: <a href="https://wa.me/+971556150861">+97 15-56-15-0861</a>
                                   </p>
                              </div>
                              
                         </div>
                         <div className="col">
                         <div className="row">
                                   <img src={FranceF} alt="" />
                                   <p>
                                        <b>France</b>: Residence des Sources, 4eme Etage No 2 <br />
                                        16 Rue des Sources Saint Genis Laval 69230, France <br />
                                        <b>Tel</b>: <a href="tel:+33776173877">+33 77-61-73877</a>
                                   </p>
                              </div>
                              <div className="row">
                                   <img src={RDCF} alt="" />
                                   <p>
                                        <b>R.D Congo - Goma</b>: Rond-point Chukudu vers Papirus au Galerie Mbaga, Q les Volcans <br />
                                        Av. Touriste en face de la Regideso en Diagonale avec DGi <br />
                                        <b>Tel</b>: <a href="tel:+243970323638">+243 970-323-638</a> <br />
                                        <b>R.D Congo - Bukavu</b>: Ville de Bukavu <br />
                                        Commune D&apos;ibanda, Avenue Manilema Numero 74 <br />
                                        <b>Tel</b>: <a href="tel:+243992119239">+243 992-119-239</a>
                                   </p>
                              </div>
                              <div className="row">
                                   <img src={TzF} alt="" />
                                   <p>
                                        <b>Tanzania</b>: PPF Tower, 14th Floor Garden Ave <br />
                                        House No 10, PLot No. 70 Block C <br />
                                        P.O Box 31704 <br />
                                        <b>Tel</b>: <a href="tel:+255784368358">+255 784-368-358</a>
                                   </p>
                              </div>
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