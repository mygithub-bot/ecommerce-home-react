import React from 'react';
import "./ffstyle.css"
function Footer() {
return (
<footer>
<div className="footer-content">
<div className="footer-section about">
<h3>About Us</h3>
<p>With Love and Affection </p>
</div>
<div className="footer-section links">
<h3>Quick Links</h3>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Shop</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
</div>
<div className="footer-section contact">
<h3>Contact Us</h3>
<ul>
<li><i className="fas fa-phone"></i>123-456-7890</li>
<li><i className="fas fa-envelope"></i>infor@gmail.com</li>
<li><i className="fas fa-map-marker-alt"></i>Amalapuram </li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p>© 2023 - My Ecommerce Store</p>
<div className="social-icons">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-instagram"></i></a>
</div>
</div>
</footer>
);
}

export default Footer;