import {MdEmail, MdCall} from 'react-icons/md';
import {BiTimeFive} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs'

const Contact_us = () => {
  return (
    <div className="Contact">
      <div className="Email Col">
        <div className="header">
          <i><MdEmail/></i>
          <h3>Email us</h3>
        </div>
        <div className="body">
          <p>If you have a complaint or complement, feel free to email us on <a href='mailto: info.levytradingmotors.co.uk'>info.levytradingmotors.co.uk</a></p>
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
  )
}

export default Contact_us;