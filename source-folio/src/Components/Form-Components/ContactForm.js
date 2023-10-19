import React, {useState} from "react";
import InputBox from "./InputBox";

const ContactForm = (props) => {
    const [inputObj, setInputObj] = useState(props.data);
    const handleinputchange = (e) => {
        const {name, value} = e.target;
        const obj = {...inputObj};
        obj[name] = value;
        setInputObj(obj);
        props.handleChange(e);
    }
    return (
      <div
        className="border border-gray-700 rounded-lg p-4 mt-6"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="text-xl text-white text-center">Contact Details!</div>
        <div className="mt-6">
          <InputBox
            field="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            handleChange={handleinputchange}
            value={inputObj.email}
          ></InputBox>
          <InputBox
            field="Mobile Number"
            type="number"
            id="telephone"
            name="telephone"
            placeholder="Enter mobile number (whatsapp number)"
            handleChange={handleinputchange}
            value={inputObj.telephone}
          ></InputBox>
        </div>
      </div>
    );
};

export default ContactForm;