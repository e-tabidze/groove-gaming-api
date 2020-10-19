import React from "react";

import "../CSS/footer.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="first-column">
        <div className="media-icons">
          <a
            href="https://www.instagram.com/groove.gaming/?hl=en"
            target="_blank"
          >
            <i className="fa fa-instagram fa-lg" />
          </a>
          <a href="https://twitter.com/Groove__Gaming" target="_blank">
            <i className="fa fa-twitter fa-lg" />
          </a>

          <a href="https://www.facebook.com/Groovegaming1/" target="_blank">
            <i className="fa fa-facebook fa-lg" />
          </a>
        </div>
        <div className="phone-number"> +44 345 676 903 </div>
        <div className="email">Groovegaming@gmail.com</div>
        <div className="contact-us">Contact Us</div>
      </div>
    </div>
  );
};

export default Footer;
