import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  //Can now use state on this component
  const contactContext = useContext(ContactContext);

  //info from contact state
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <h3>{contact.name}</h3>
      ))}
    </Fragment>
  );
};

export default Contacts;
