import React from "react";

import "./contactUs.css";

import PhoneNumbers from "./phoneNumbers/phoneNumbers";
import ContactsEmail from "./contactsEmail/contactsEmail";
import Location from "./location/location";
import Subscribe from "components/subscribe/subscribe";

const ContactUs = () => (
  <div className="contacts">
    <h2>Contacts</h2>
    <h3>Support email:</h3>
    <ContactsEmail />
    <Location />
    <h3>Customer support phone numbers:</h3>
    <PhoneNumbers />
    <Subscribe />
  </div>
);

export default ContactUs;
