import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='SharpThreads'
          price={6}
          description='Elevate your style with our impeccable collection of shirts.'
        />
      </ul>
    </section>
  );
};

export default Products;
