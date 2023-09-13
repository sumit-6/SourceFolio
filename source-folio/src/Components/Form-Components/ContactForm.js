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
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6" style={{display: props.isSelected?"":"none"}}>
            <div>Contact Details</div>
            <InputBox field="Email" type="email" id="email" name="email" placeholder="Enter email address" handleChange={handleinputchange} value={inputObj.email}></InputBox>
            <InputBox field="Mobile Number" type="number" id="telephone" name="telephone" placeholder="Enter mobile number (whatsapp number)" handleChange={handleinputchange} value={inputObj.telephone}></InputBox>
        </div>
    );
};

export default ContactForm;