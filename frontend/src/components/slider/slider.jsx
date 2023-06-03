
import Home_3 from "../../assets/carImages/home_4.jpg";
import Home_4 from "../../assets/carImages/Home_1.jpg";
import Home_5 from "../../assets/carImages/truck_2.png";

import './slider.css';
import { useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md';

export const Slide = ({children, Ref, Styles, Num}) => {
     return(
          <div style={Styles} className={`slide slide_${Num}`} ref={Ref}>
               {children}
          </div>
     )
}

const Slider = () =>{
const [slideNo, setSlideNo] = useState(1);
  const [dir, setDir] = useState("");

  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const leftRef =  useRef(null);
  const rightRef = useRef(null);

  

  
  function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms))
}

const MoveSlide = async ( ) => {
     if(dir === "left"){
          switch(slideNo){
               // case 1:
               //      slide1Ref.current.style.left = "-101%";
               //      slide2Ref.current.style.left = "1%";
               //      setSlideNo(2);
               //      break;
               case 2:
                    slide2Ref.current.style.left = "101%";
                    slide1Ref.current.style.left = "0.5%";
                    setSlideNo(1);
                    break;
               case 3:
                    slide3Ref.current.style.left = "110%";
                    slide2Ref.current.style.left = "0.5%";
                    setSlideNo(2);
                    break;
               default:
                    setSlideNo(1);
          }
          await sleep(2000);
          setDir("");
     }else if(dir === "right"){
          switch(slideNo){
               case 1:
                    slide1Ref.current.style.left = "-101%";
                    slide2Ref.current.style.left = "0.5%";
                    setSlideNo(2);
                    break;
               case 2:
                    slide2Ref.current.style.left = "-101%";
                    slide3Ref.current.style.left = "0.5%";
                    setSlideNo(3);
                    break;
               // case 3:
               //      slide3Ref.current.style.left = "101%";
               //      slide2Ref.current.style.left = "1%";
               //      setSlideNo(2);
               //      break;
               default:
                    setSlideNo(1);
          }

          await sleep(2000);
          setDir("");
     }

}

const handleClick = (direction) => {
     setDir(direction);
   };

   useEffect(() => {
     MoveSlide();
     if(slideNo === 1){
          leftRef.current.style.display = "none";
     }else if(slideNo == 3){
          rightRef.current.style.display = "none";
     }else{
          leftRef.current.style.display = "flex";
          rightRef.current.style.display = "flex";
     }
     
   }, [dir])

     return(
          <div className="company_sec" >
               <button ref={rightRef} onClick={() => handleClick("right")} className="btn-right"><MdOutlineKeyboardArrowRight/></button>
               <button ref={leftRef} onClick={() => handleClick("left")} className="btn-left"><MdOutlineKeyboardArrowLeft/></button>
               
               <Slide Num={1} Styles={{left: "0.5%"}} Ref={slide1Ref}>
                    <div className="text">
                         <h5><span>Welcome to Levy Trading Motors</span>, <br />your ultimate destination for exceptional solutions.</h5>
                         <p>We are a premier transportation company dedicated to providing reliable, efficient, and top-quality services to meet all your automotive needs.</p>
                    </div>
                    <div className="images">
                         <img src={Home_3} alt="Our Company" />
                    </div>
               </Slide>
               <Slide Num={2} Styles={{left: "110%"}} Ref={slide2Ref}>
                    <div className="images">
                         <img src={Home_4} alt="" />
                    </div>
                    <div className="text">
                         <h5>At Levy Trading Motors, we understand that your time is valuable. </h5>
                         <p>We strive to make your experience with us as seamless as possible.Whether you are searching for a new or pre-owned vehicle, or are in need of comprehensive logistics solutions, our team of skilled professionals is here to assist.</p>
                    </div>
               </Slide>
               <Slide Num={3} Styles={{left: "110%"}} Ref={slide3Ref}>
                    <div className="text">
                         <h5>Levy Trading Motors is proud to offer comprehensive logistics solutions tailored to your business needs</h5>
                         <p>Whether you require transportation for your goods or need assistance with supply chain management, our logistics experts will work closely with you to develop customized strategies that optimize efficiency and cost-effectiveness.</p>
                    </div>
                    <div className="images">
                         <img src={Home_5} alt="" />
                    </div>
               </Slide>
          </div>
     )
}

export default Slider;

Slide.propTypes = {
     children: PropTypes.node.isRequired,
  Ref: PropTypes.object,
  Styles: PropTypes.object,
};