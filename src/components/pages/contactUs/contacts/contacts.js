import React from "react";

import "./contacts.css";
import PhoneNumbers from "./phoneNumbers/phoneNumbers";
import ContactsEmail from "./contactsEmail/contactsEmail";

const Contacts = () => (
  <div className="contacts">
    <h2>Contacts</h2>
    <h3>Customer support phone numbers!</h3>
    <PhoneNumbers />
    <ContactsEmail />
  </div>
);

export default Contacts;
