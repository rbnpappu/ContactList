import React, { useState } from "react";
import './Stylesheet.css'
export default function Form(props: any) {
  const [formValue, setFromValue] = useState<number>(0);

  function handleSubmit(e: any) {
    e.preventDefault();
    props.setNumberOfContacts(formValue)
  }

  return (
    <div id="Form" className="userform">
      <form
       
        onSubmit={handleSubmit}
      >
        <label>Please enter the input </label>
        <input
          name="userinput"
          value={formValue}
          onChange={(e) => setFromValue(parseInt(e.target.value))}
          className="InputBox"
       
        />

        <input type="submit" value="Submit"  className= "SubmitButton"  />
      </form>
    </div>
  );
}
