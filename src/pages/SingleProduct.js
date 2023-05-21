import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const {image, name} = product

  return (
    <section className='section product'>
      <h4>
        {name}
      </h4>
      <p>Product ID: {productId}: </p>
      <img src={image} alt={name}/>
      <div></div>
      <Link to='/products' className='btn'>
        Back to Products page
      </Link>
    </section>
  );
};

export default SingleProduct;
