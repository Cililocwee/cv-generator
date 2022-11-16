import React from "react";

export default function Contact({ email, phonenumber, location }) {
  return (
    <div className="contacts">
      <div className="contacts-atom">
        <p>{email}</p>
        <p>{phonenumber}</p>
        <p>{location}</p>
      </div>
      {/* <ContactAtom info="hpainman@gmail.com" />
      <ContactAtom info="(+84) 76 534 1522" />
      <ContactAtom info="District 7, Ho Chi Minh City" /> */}
    </div>
  );
}
