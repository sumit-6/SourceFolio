import React, {useState} from "react";
import InputBox from "./InputBox";
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const ContactForm = (props) => {
    const dispatch = useDispatch();
    const { email, telephone } = useSelector(state => state.portfolio.data);
    const handleinputchange = (e) => {
        const {name, value} = e.target;
        const obj = {
          email: email,
          telephone: telephone
        };
        obj[name] = value;
        dispatch(update_portfolio(obj));
    }
    return (
      <div
        className="border border-gray-700 rounded-lg p-2 sm:p-4 mt-6"
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
            value={email}
          ></InputBox>
          <InputBox
            field="Mobile Number"
            type="number"
            id="telephone"
            name="telephone"
            placeholder="Enter mobile number (whatsapp number)"
            handleChange={handleinputchange}
            value={telephone}
          ></InputBox>
        </div>
      </div>
    );
};

export default ContactForm;