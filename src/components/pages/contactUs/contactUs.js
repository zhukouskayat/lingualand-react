import React from "react";

import "./contactUs.css";
import Contacts from "./contacts/contacts";
import Location from "./location/location";
import Subscribe from "components/subscribe/subscribe";

const ContactUs = () => (
  <div id="contactUs">
    <Contacts />
    <Location />
    <Subscribe />
  </div>
);

export default ContactUs;
