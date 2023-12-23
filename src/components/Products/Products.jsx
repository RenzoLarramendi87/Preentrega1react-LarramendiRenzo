import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import { Link } from "react-router-dom";

import "./Products.css";

const Products = () => {
const {data} = useContext(dataContext);    
  return data.map((product) => {
    return(
        <div className="card">
            <link to={'/item/${products.id}'}>
            <img src={product.img} alt="imagen product-card" />
            </link>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button>buy</button>
        </div>
    )
  })
  
}

export default Productsd