import React from "react";
import InputBox from "./InputBox";

const ContactForm = () => {
    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-500 p-4 mt-6">
            <div>Contact Details</div>
            <InputBox field="Email" type="email" id="email" placeholder="Enter email address"></InputBox>
            <InputBox field="Mobile Number" type="number" id="telephone" placeholder="Enter mobile number (whatsapp number)"></InputBox>
        </div>
    );
};

export default ContactForm;