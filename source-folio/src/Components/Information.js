import { FaRegShareSquare } from "react-icons/fa";
import "./CssFiles/information.css"
import copy from "copy-to-clipboard"
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

function Information() {
  const [visible, setVisible] = useState(false);
  
  const path = window.location.href;
  function onClickCopy(text) {
    copy(text);
  }
  return (
    <span>
      <div className="relative inline-block">
        <FaRegShareSquare className="h-6 w-6 text-orange-500" aria-hidden="true" onClick={() => {setVisible(!visible)}}/>
        <div className={`${visible ? "visible opacity-100" : "invisible opacity-0"} absolute -top-4 left-7 z-20 flex-1 rounded-xl border bg-white p-2 text-gray-600 shadow-xl transition-all w-72`}>
          <div className="text-xs">
            <ImCancelCircle className="absolute top-3 right-3 sm:top-2 sm:right-2 text-lg font-bold text-orange-500 cursor-pointer" onClick={() => {setVisible(!visible)}}/>
            <div className="p-2">
                <span className="font-bold">Your Portfolio Link:</span> <span className="text-purple-700 break-words">{path}</span>
            </div>
            <div className="border border-white flex items-center justify-center p-2 text-orange-400 rounded-lg cursor-pointer hover:border-orange-400"
                onClick={() => {onClickCopy(path)}}>
                Copy Portfolio Link
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default Information;