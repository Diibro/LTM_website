import { useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/appcontext";
import { useContext } from "react";

const Product = () => {
  const { product } = useContext(AppContext);
  const [searchParams, setSearchedParams] = useSearchParams(product.name);

  // Null check for product
  if (!product) {
    return <div className="product">Loading...</div>;
  }

  return (
    <div className='product'>
      <div className="col-1">
        <div className="row">
          <h3>{product.name}</h3>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="row-2">
          {product.moreImages.map((pic) => (
            // Use a unique key for each image
            <img src={pic} alt={`Image of ${product.name}`} key={pic.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product;