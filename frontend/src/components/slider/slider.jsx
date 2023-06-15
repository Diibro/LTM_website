
import Home_3 from "../../assets/carImages/home_4.jpg";
import Home_4 from "../../assets/carImages/Home_1.jpg";
import Home_5 from "../../assets/carImages/truck_2.png";

import './slider.css';
import PropTypes from 'prop-types';

export const Slide = ({children, Ref, Styles, Num}) => {
     return(
          <div style={Styles} className={`slide slide_${Num}`} ref={Ref}>
               {children}
          </div>
     )
}

const Slider = () =>{
     return(
          <div className="company_sec" >
               <div className="slide-container">
                    <Slide Num={1} >
                         <div className="text">
                              <h5><span>Welcome to Levy Trading Motors</span>, <br />your ultimate destination for exceptional solutions.</h5>
                              <p>We are a premier transportation company dedicated to providing reliable, efficient, and top-quality services to meet all your automotive needs.</p>
                         </div>
                    </Slide>
                    <Slide Num={2} >
                         <div className="text">
                              <h5>Levy Trading Motors, we understand that your time is valuable. </h5>
                              <p>We strive to make your experience with us as seamless as possible.Whether you are searching for a new or pre-owned vehicle, or are in need of comprehensive logistics solutions, our team of skilled professionals is here to assist.</p>
                         </div>
                    </Slide>
                    <Slide Num={3} >
                         <div className="text">
                              <h5>Levy Trading Motors is proud to offer comprehensive logistics solutions tailored to your business needs</h5>
                              <p>Whether you require transportation for your goods or need assistance with supply chain management, our logistics experts will work closely with you to develop customized strategies that optimize efficiency and cost-effectiveness.</p>
                         </div>
                    </Slide>
               </div>
          </div>
     )
}

export default Slider;

Slide.propTypes = {
     children: PropTypes.node.isRequired,
  Ref: PropTypes.object,
  Styles: PropTypes.object,
};