import { ProductCard } from "../components/Free_sec/Free_sec";

// import { NavLink } from "react-router-dom";

const Cars = [
     {
          name: "Toyota Prius",
          price: "7,000,000",
          year: 2022,
          imageUrl: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/06/1200/675/prius-hero.jpg?ve=1&tl=1"
     },
     {
          name: "Rava4",
          price: "15,000,000",
          year: 2021,
          imageUrl: "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3038/"
     },
     {
          name: "Tesla",
          price: "30,000,000",
          year: 2020,
          imageUrl: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2019-tesla-model-y-suv-blue-1200x800-%281%29.jpg"
     },
     {
          name: "Toyota Hybrid",
          price: "12,000,000",
          year: 2020,
          imageUrl: "https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/3/6/5/8/8/1/9/01-e1b53b3c2b34410c.jpeg?force_format=avif%2Cwebp%2Cjpeg&org_if_sml=1&q=70&width=1019"
     },
     {
          name: "Toyota Hybrid",
          price: "12,000,000",
          year: 2023,
          imageUrl: "data:image/jpeg;base64,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"
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