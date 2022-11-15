import React from "react";
import ContactAtom from "../words/ContactAtom";

export default function Contact() {
  return (
    <div className="contacts">
      <ContactAtom info="hpainman@gmail.com" />
      <ContactAtom info="(+84) 76 534 1522" />
      <ContactAtom info="District 7, Ho Chi Minh City" />
    </div>
  );
}
