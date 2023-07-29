import { createContext, useState, useEffect } from "react";


export const AppContext = createContext();

import Hyundai_1 from '../assets/carImages/levy-trucks/Hyundai-white.png';
import Hyundai_2 from '../assets/carImages/levy-trucks/Hyundai-black.png';
import Rava4_1 from '../assets/carImages/levy-trucks/Rava4.png';
import Actros_1 from '../assets/carImages/levy-trucks/Truck-1.png';

import BImage1 from '../assets/carImages/levy-trucks/Hyundai-black/image-1.jpeg';
import BImage2 from '../assets/carImages/levy-trucks/Hyundai-black/image-2.jpeg';
import BImage3 from '../assets/carImages/levy-trucks/Hyundai-black/image-3.jpeg';
import BImage4 from '../assets/carImages/levy-trucks/Hyundai-black/image-4.jpeg';
import BImage5 from '../assets/carImages/levy-trucks/Hyundai-black/image-5.jpeg';
import BImage6 from '../assets/carImages/levy-trucks/Hyundai-black/image-6.jpeg';
import BImage7 from '../assets/carImages/levy-trucks/Hyundai-black/image-7.jpeg';

import WImage1 from '../assets/carImages/levy-trucks/Hyundai-white/image-1.jpeg';
import WImage2 from '../assets/carImages/levy-trucks/Hyundai-white/image-2.jpeg';
import WImage3 from '../assets/carImages/levy-trucks/Hyundai-white/image-4.jpeg';
import WImage4 from '../assets/carImages/levy-trucks/Hyundai-white/image-8.jpeg';
import WImage5 from '../assets/carImages/levy-trucks/Hyundai-white/image-11.jpeg';
import WImage6 from '../assets/carImages/levy-trucks/Hyundai-white/image-17.jpeg';
import WImage7 from '../assets/carImages/levy-trucks/Hyundai-white/image-18.jpeg';

import AImage1 from '../assets/carImages/levy-trucks/Actros/image-1.jpeg';
import AImage2 from '../assets/carImages/levy-trucks/Actros/image-2.jpeg';
import AImage3 from '../assets/carImages/levy-trucks/Actros/image-3.jpeg';
import AImage4 from '../assets/carImages/levy-trucks/Actros/image-4.jpeg';
import AImage5 from '../assets/carImages/levy-trucks/Actros/image-5.jpeg';
import AImage6 from '../assets/carImages/levy-trucks/Actros/image-6.jpeg';

import RImage1 from '../assets/carImages/levy-trucks/Rava 4/image-1.jpeg';
import RImage2 from '../assets/carImages/levy-trucks/Rava 4/image-2.jpeg';
import RImage3 from '../assets/carImages/levy-trucks/Rava 4/image-3.jpeg';
import RImage4 from '../assets/carImages/levy-trucks/Rava 4/image-4.jpeg';
import RImage5 from '../assets/carImages/levy-trucks/Rava 4/image-5.jpeg';
import RImage6 from '../assets/carImages/levy-trucks/Rava 4/image-6.jpeg';
import RImage7 from '../assets/carImages/levy-trucks/Rava 4/image-7.jpeg';

const Cars = [
     {
          name: "Hyundai Sonata Hybrid",
          price: "11,000,000",
          year: 2013,
          imageUrl: Hyundai_1,
          description: "",
          moreImages: [WImage1, WImage2,WImage3,WImage4,WImage5,WImage6,WImage7],
          condition: "New",
          color: "white"
     },
     {
          name: "Hyundai Sonata Hybrid",
          price: "10,500,000",
          year: 2012,
          imageUrl: Hyundai_2,
          description: "",
          moreImages: [BImage1, BImage2, BImage3, BImage4, BImage5, BImage6, BImage7],
          condition: "New",
          color: "Black"
     },
     {
          name: "Toyota Rava 4",
          price: "10,000,000",
          year: 2004,
          imageUrl: Rava4_1,
          description: "",
          moreImages: [RImage1, RImage2,RImage3, RImage4, RImage5, RImage6, RImage7],
          condition: "Used",
          color: "Silver"
     },
     {
          name: "Hyundai Sonata Hybrid",
          price: "11,000,000",
          year: 2013,
          imageUrl: Hyundai_1,
          description: "",
          moreImages: [WImage1, WImage2,WImage3,WImage4,WImage5,WImage6,WImage7],
          condition: "new",
          color: "White"
     },
     {
          name: "Mercedes-Benz Actros",
          price: "50,000,000",
          year: 2013,
          imageUrl: Actros_1,
          description: "",
          moreImages: [AImage1, AImage2, AImage3, AImage4],
          condition: "Used",
          color: "Silver"
     },
     
];

const AppData = ({children}) => {
     const [searched, setSearched] = useState({search: "", searcheType: "All"});
     const [stock, setStock] =  useState([]);
     const [product, setProduct] = useState(null);

     useEffect(() => {
          setStock(Cars);
     }, []);


     return(
          <AppContext.Provider value={{searched, setSearched, stock, setStock, product ,setProduct}} >
               {children}
          </AppContext.Provider>
     )
}

export default AppData;