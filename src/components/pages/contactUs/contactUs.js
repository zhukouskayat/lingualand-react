import React from "react";

import "./contactUs.css";
import PhoneNumbers from "./phoneNumbers/phoneNumbers" 

const ContactUs = () => (
  <div id="contacts">
    <h2>Contacts</h2>
    <h3>Customer support phone numbers!</h3>
    <PhoneNumbers />
    <h3>United States</h3>
    <p>LinguaLand Inc. registered in the USA.</p>
    <p>Our head office is located at:</p>
    <p>
      Suite 120 and 200, 611 Gateway Blvd, South San Francisco, CA 94080, USA
    </p>
  </div>
);

export default ContactUs;
