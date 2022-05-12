import "./Stylesheet.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import Form from "./Form";

export interface Contact{
  
  email:string;
  name:{
    title:string;
    first:string;
    last:string;
  }
  picture: {
    medium:string;

  }
}

function Contact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [numberOfContacts, setNumberOfContacts] = useState<number>(0);

  useEffect(() => {
    (async function () {
      if (numberOfContacts === 0) return;
      await axios
        .get(`https://randomuser.me/api/?results=${numberOfContacts}`)
        .then((res) => {
          setContacts(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        
        });
    })();
  }, [numberOfContacts]);

  return (
    <div data-testid="ancestor">
      <div className="container"  data-testid="descendant">
        <Form numberOfContacts={numberOfContacts} setNumberOfContacts={setNumberOfContacts} />
      </div>
      <Card contacts={contacts} />
    </div>
  );
}

export default Contact;

