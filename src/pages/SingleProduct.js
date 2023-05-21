import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <section className='section product'>
      <h4>Now displaying product {productId}</h4>
      <Link to='/products' className='btn'>Back to Products page</Link>
    </section>
  );
};

export default SingleProduct;
