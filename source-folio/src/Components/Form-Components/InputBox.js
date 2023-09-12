import React from "react";

const InputBox = (props) => {
    const {field, name, type, id, handleChange, placeholder="", value="", index=0} = props;
    return (
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={id}
            >
              {field}
            </label>
          </div>
          {type !== "file" ? <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id={id}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {handleChange(e, index)}}
            />
          </div> : <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id={id}
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={(e) => {handleChange(e, index)}}
            />
          </div> }
        </div>
    );
};

export default InputBox;