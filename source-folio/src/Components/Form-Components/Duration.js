import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import { useSelector, useDispatch } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

function  Duration(props) {
    const dispatch = useDispatch();
    const { myExperience } = useSelector(state => state.portfolio.data);

    const handleinputchange=(e)=>{
        const {name, value} = e.target;
        const obj = {...myExperience[props.index].duration};
        obj[name] = value;
        
        const updatedExperience = {
            ...myExperience[props.index],
            duration: {...obj}
        }
        const experience = [
            ...myExperience
        ]
        experience[props.index] = updatedExperience;
        dispatch(update_portfolio({
            myExperience: experience
        }))
    }

    return (
        <>
            <InputBox field="Start" type="date" id={`start_${props.index}`} name="start" value={myExperience[props.index].duration.start} handleChange={handleinputchange}></InputBox>
            <InputBox field="End" type="date" id={`end_${props.index}`} name="end" value={myExperience[props.index].duration.end} handleChange={handleinputchange}></InputBox>
        </>
    );
}

export default Duration;