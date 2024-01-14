import './body.css';

import React, { useState } from 'react';
import Products from './Products';
import Filter from './Filter';

const Body = function Body({data}) {
  const allProducts = data;
  const [productsData, setProductsData] = useState(allProducts);

  function refresh_products(min, max){
    setProductsData(filtrer(min, max))
  }

  function filtrer(min, max) {
      return allProducts.filter(item => item.price >= min && item.price <= max);
      
  }

  return (
      <div className='body'>
          <Products data={productsData} />
          <Filter filtrer={refresh_products} />

      </div>
  );
}

export default Body;
