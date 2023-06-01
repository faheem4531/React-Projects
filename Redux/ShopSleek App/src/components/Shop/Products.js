import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_products = [
  {
    id: 'p1',
    price: 4,
    title: 'Dress Shirt',
    description: 'Elevate your formal attire with our impeccably tailored dress shirts.'
  },
  {
    id: 'p2',
    price: 7,
    title: 'Flannel Shirts',
    description: 'Stay cozy and fashionable with our soft and comfortable flannel shirts.'
  },
  {
    id: 'p3',
    price: 5,
    title: 'Denim Shirts',
    description: 'Unleash your rugged charm with our durable denim shirts.'
  },
  {
    id: 'p4',
    price: 12,
    title: 'Graphic Tees',
    description: 'Make a statement with our bold and expressive graphic tees.'
  },
  {
    id: 'p5',
    price: 6,
    title: 'Casual Comfort',
    description: 'Relaxed and comfortable shirts for everyday wear.'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_products.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />)
        )}

      </ul>
    </section>
  );
};

export default Products;
