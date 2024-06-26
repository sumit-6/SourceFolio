import React from "react";
import InputBox from "./InputBox";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

function MainDesignations() {
    const { mainDesignations } = useSelector(state => state.portfolio.data);
    const dispatch = useDispatch();
  
  const handleinputchange=(e, index)=>{
    const {value}= e.target;
    const list= [...mainDesignations];
    list[index]= value;
    dispatch(update_portfolio({ mainDesignations: list }));
  }
 
  const handleRemove= (event, index) => {
    event.preventDefault();
    let list=[...mainDesignations];
    list.splice(index,1);
    dispatch(update_portfolio({ mainDesignations: list }));
  }

  const handleAddClick=()=>{ 
    dispatch(update_portfolio({ mainDesignations: [...mainDesignations, ""] }));
  }
    return (
        <>
            {mainDesignations.map((x, index) => {
                return (
                    <div className="flex">
                    <div className="flex-1">
                    <InputBox field="Designation" type="text" id={`mainDesignation_${index}`} name="mainDesignations" placeholder="Full Stack Developer/Coder/App Developer/..." handleChange={handleinputchange} value={x} index={index}></InputBox>
                    </div>
                    <div className="flex justify-center">
                        {
                            mainDesignations.length - 1 === index && 
                            <IoIosAddCircleOutline className="h-8 w-8 text-white mt-8 md:mt-0" onClick={(e)=> handleAddClick(e)}/>
                        }
                        {
                            mainDesignations.length !== 1 &&
                            <IoIosRemoveCircleOutline className="h-8 w-8 text-white mt-8 md:mt-0" onClick={(e)=> handleRemove(e, index)}/> 
                        }
                    </div>
                 </div>
                );
            })
            }

            
        </>
    );
}

export default MainDesignations;