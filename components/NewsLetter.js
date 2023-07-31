import React from 'react';
import "./nstyle.css"
function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Stay Up-to-Date</h2><br/>
      <p>  Sign up for our newsletter to get the latest news and updates!</p>
      <form>
        <input type="email" placeholder="Enter your email address"/>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;