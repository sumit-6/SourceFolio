import React from "react";
import TextArea from "./TextArea";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio } from "../../redux/features/portfolioSlice";

const AchievementsForm = (props) => {
    const dispatch = useDispatch();
    const { myAchievements } = useSelector(state => state.portfolio.data);
    const handleInputChange = (e, index) => {
      const {value} = e.target;
      const list = [...myAchievements];
      list[index] = value;
      dispatch(update_portfolio({
        myAchievements: list
      }));
    }

    const handleRemove= (event, index)=>{
      event.preventDefault();
      const list=[...myAchievements];
      list.splice(index,1);
      dispatch(update_portfolio({
        myAchievements: list
      }));
    }

    const handleAddClick=()=>{ 
      dispatch(update_portfolio({
        myAchievements: [...myAchievements, ""]
      }));
    }    

    return (
      <div
        className="border border-gray-700 rounded-lg p-2 sm:p-4 mt-6"
        style={{ display: props.isSelected ? "" : "none" }}
      >
        <div className="text-xl text-white text-center">
          Achievements Details!
        </div>

        {myAchievements.map((box, index) => {
          return (
            <div className="w-full flex mt-6">
              <div className="flex-1">
              <TextArea
                name={`myAchievements`}
                field="Achievement"
                id={`myAchievements_${index}`}
                placeholder="Enter your achievement"
                value={box}
                handleChange={handleInputChange}
                index={index}
              ></TextArea>
              </div>
              <div className="flex">
                {myAchievements.length - 1 === index && (
                  <IoIosAddCircleOutline
                    className="h-8 w-8 text-white mt-12"
                    onClick={(e) => handleAddClick(e)}
                  />
                )}

                {myAchievements.length !== 1 && (
                  <IoIosRemoveCircleOutline
                    className="h-8 w-8 text-white mt-12"
                    onClick={(e) => handleRemove(e, index)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default AchievementsForm;