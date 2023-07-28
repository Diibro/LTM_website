import {MdEmail, MdCall} from 'react-icons/md';
import {BiTimeFive} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs'
import { useState } from 'react';
import axios from "axios";
import { useNavigate} from 'react-router-dom';
// // import dotenv from "dotenv";

// dotenv.config();

const Contact_us = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name:"",
    email: "",
    phone: "",
    message: ""
  });

  const handleInput = (e, type) => {
    if(type === "name"){
      setInputs((prev) => ({
        ...prev, name: e.target.value
      }))
    }else if(type === "email"){
      setInputs((prev) => ({
        ...prev, email: e.target.value
      }))
    }else if(type === "phone"){
      setInputs((prev) => ({
        ...prev, phone: e.target.value
      }))
    }else if(type === "message"){
      setInputs((prev) => ({
        ...prev, message: e.target.value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    
    axios.post("http://localhost:3001/api/add-client-message", {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      message: inputs.message
    }).then(() => {
      console.log("Submitted");
      navigate("/");
      
    }).catch(error => {
      console.log(error);
    });
  }
  return (
    <div className="Contact">
      <div className="row_1">
        <div className="container">
        <h2>Send a message:</h2>
        <form>
          <div className="inputs">
            <input type="text" required placeholder='Full Name..ex Joe Roy' onChange={(e) => handleInput(e,"name")} />
            <input type="email" placeholder='Email... ' required onChange={(e) => handleInput(e,"email")} />
            <input type="text" required  placeholder='Phone.. ex +25078..' onChange={ (e) => handleInput(e, "phone")} />
          </div>
          <div className="inputs">
            <textarea name="message" required id="message" cols="30" rows="4" placeholder='Enter you message..' onChange={ (e) => handleInput(e, "message")}></textarea>
            <button type="submit" onClick={e => handleSubmit(e)} >Submit</button>
          </div>
        </form>
        </div>
        
      </div>
      <h3>OR</h3>
      <div className="row_2">
        <div className="Email Col">
          <div className="header">
            <i><MdEmail/></i>
            <h3>Email us</h3>
          </div>
          <div className="body">
            <p>If you have a complaint or complement, feel free to email us on <a href='mailto: info@levytradingmotors.co.uk'>info@levytradingmotors.co.uk</a></p>
          </div>
        </div>

        <div className="Phone Col">
          <div className="header">
            <i><MdCall/></i>
            <h3>Call us</h3>
          </div>
          <div className="body">
            <h5>Customer Service: <br/> <a href='tel:+250788303754'>+250788303754</a></h5>
            <h5>Send us a message: <br /><a href="https://wa.me/+250788303754"><i className='wa-icon'><BsWhatsapp/></i></a></h5>
            <p>Questions and support for shipping status, delivery and car deals</p>
          </div>
        </div>

        <div className="WorkDays Col">
          <div className="header">
            <i><BiTimeFive /></i>
            <h3>Holiday Hours</h3>
          </div>
          <div className="body">
            <h5>We are closed on these holidays</h5>
            <div className='list'>
              <h6>New Years Day</h6>
              <p>Jan 1</p>
            </div>
            <div className='list'>
              <h6>National Heroes&apos; day</h6>
              <p>Feb 1</p>
            </div>
            <div className='list'>
              <h6>Good Friday</h6>
              <p>Aprl 2</p>
            </div>
            <div className='list'>
              <h6>Tutsi Genocide Memorial Day</h6>
              <p>Apr 7</p>
            </div>
            <div className='list'>
              <h6>Labor Day</h6>
              <p>May 1</p>
            </div>
          </div>
          <div className='Hours'>
            <h3>Hours of operation</h3>
            <ul>
              <li>Monday-Friday : <span>08:00-17:00</span></li>
              <li>Saturday : <span>08:00-12:00</span></li>
              <li>Sunday : <span>Closed</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_us;