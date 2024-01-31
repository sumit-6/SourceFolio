import React from "react";
import { useState, useRef } from "react";

function SearchBox(props) {
    const ref = useRef(null);
    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        props.handleInputChange(text);
    }
    return (
        <>
            <div className={`relative ${document.activeElement === ref.current ? "w-48" : "w-12"} mx-auto`}>
                <input type="search" name="search" id="search"
                ref={ref}
                
                 className="relative peer z-10 bg-transparent w-12 h-8 rounded-xl border 
                 focus:w-full focus:border-orange-300 focus:cursor-text focus:pl-16 focus:pr-4
                  pl-12
                  cursor-pointer outline-none" value={searchText}
                  onChange={(e) => {handleChange(e)}}></input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute inset-y-0 my-auto w-12 h-8 px-4 stroke-white border-r border-transparent peer-focus:stroke-orange-300 peer-focus:border-orange-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
        </>
    );
}

export default SearchBox;