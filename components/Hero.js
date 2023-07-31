import React from 'react';
import "./herostyle.css"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to our store</h1>
        <p>Check out our latest arrivals and hottest deals!</p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="https://igimages.gumlet.io/telugu/home/pawan_og18042023_c.jpg?w=900&dpr=1.3" alt="Hero"/>
      </div>
    </section>
  );
}

export default Hero;