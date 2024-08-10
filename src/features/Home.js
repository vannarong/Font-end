import React, { Fragment, useState } from 'react';

import data from '../app/data';
import Product from './Product';
import AddForm from './Product/AddForm';

let currentProductId = 9;

export default function Home() {
  const [products, setProducts] = useState(data);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <Fragment>
      {
  products.length > 0 ? (
    <ul className="Home__products">
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </ul>
  ) : (
    <div>Loading products....</div>
  )
}
      <AddForm addProduct={addProduct} />
    </Fragment>
  );
}