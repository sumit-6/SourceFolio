import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";

function Duration(props) {
    const [inputObj, setInputObj] = useState(props.data);
    const {index} = props;
    useEffect(() => {
        const list = props.data || {start: "", end: ""};
        setInputObj(list);
    }, [props.data]);

    const handleinputchange=(e)=>{
        const {name, value} = e.target;
        const obj = {...inputObj};
        obj[name] = value;
        setInputObj(obj);
        props.onChange(obj, props.index);
    }

    return (
        <>
            <InputBox field="Start" type="date" id={`start_${index}`} name="start" value={inputObj.start} handleChange={handleinputchange}></InputBox>
            <InputBox field="End" type="date" id={`end_${index}`} name="end" value={inputObj.end} handleChange={handleinputchange}></InputBox>
        </>
    );
}

export default Duration;