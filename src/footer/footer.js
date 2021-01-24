import React from "react";

import "./footer.css";

const Footer = () => (
  <div id="footer">
    <div className="footer-col">
      <div className="footer-col1">
        <h3>LinguaLand</h3>
        <p>About company</p>
        <p>Contact us</p>
        <p>Affiliate program</p>
      </div>
      <div className="footer-col2">
        <h3>For student</h3>
        <p>My account</p>
      </div>
    </div>
    <div className="footer-row">
      <div>
          LinguaLand.com 611 Gateway Blvd, South San Francisco, CA 94080, USA
      </div>
      <div>
        <span>Sitemap</span>
        <span>Privacy policy</span>
        <span>Terms of use</span>
      </div>
    </div>
  </div>
);

export default Footer;
