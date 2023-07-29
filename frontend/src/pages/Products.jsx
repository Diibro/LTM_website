import { ProductCard } from "../components/Free_sec/Free_sec";
import Hyundai_1 from '../assets/carImages/Hyundai-white.jpeg';
import Hyundai_2 from '../assets/carImages/Hyundai-black.jpeg';
import Rava4_1 from '../assets/carImages/rava-1.jpeg';
import Actros_1 from '../assets/carImages/truck-1.jpeg';

// import { NavLink } from "react-router-dom";

const Cars = [
     {
          name: "Hyundai Sonata Hybrid",
          price: "11,000,000",
          year: 2013,
          imageUrl: Hyundai_1
     },
     {
          name: "Hyundai Sonata Hybrid",
          price: "10,500,000",
          year: 2012,
          imageUrl: Hyundai_2
     },
     {
          name: "Toyota Rava 4",
          price: "10,000,000",
          year: 2004,
          imageUrl: Rava4_1
     },
     {
          name: "Hyundai Sonata Hybrid",
          price: "11,000,000",
          year: 2013,
          imageUrl: Hyundai_1
     },
     {
          name: "Hyundai Sonata Hybrid",
          price: "10,500,000",
          year: 2012,
          imageUrl: Hyundai_2
     },
     
];
const Products = () => {
  return (
    <div>
     <div className="products_section">
               <h3>Brand new cars in Stock</h3>
               <div className="products-container">
                    {Cars.map((car, index) => {
                         return(
                              <ProductCard key={index}>
                                   <img src={car.imageUrl} alt={car.name} />
                                   <h4>{car.name} {car.year}</h4>
                                   <p>{car.price} Rwf</p>
                                   <button>View Product</button>
                              </ProductCard>
                         )
                    })}
                    
               </div>
          </div>
    </div>
  )
}

export default Products