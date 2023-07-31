import React from 'react';
import "./fstyle.css"
function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        <div className="product">
          <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1655149220-Soothing-Cleanser-3606000463660-SkinCeuticals.jpg?crop=0.667xw:1xh;center,top&resize=980:*" alt="Product"/>
          <h3>Product Name</h3>
          <p>$10.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1608750469-screen-shot-2020-12-23-at-2-06-55-pm-1608750428.png?crop=1.00xw:0.896xh;0,0.0443xh&resize=980:*" alt="Product"/>
          <h3>Product Name</h3>
          <p>$12.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1608751092-2b3a6111-4438-423e-88b8-2be3fd433dd5_1.07b5f92569d0fa44b66094c3df2eeb37.jpg?crop=0.667xw:1xh;center,top&resize=980:*" alt="Product"/>
          <h3>Product Name</h3>
          <p>$8.99</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;