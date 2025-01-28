import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbCategory, TbMenu } from "react-icons/tb";
 
import "./FeatureTop.scss";
import { setOpen } from "../../store/reducer/FeatureReducer";
export const FeatureTop = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.feature.isOpen);
  return (
    <div className="_feature_top_wrapper">
      <div className="_feature_top_container ">
        <div className="_content">
          <div className="flex">
            <select>
              <option>default sort</option>
              <option>Feature</option>
            </select>
            <h1 className="_title">12,911 items</h1>
          </div>

          <div className="box-icon-wrapper">
            <div>
              <TbCategory
                id="custom-icon"
                class={!isOpen ? "active" : ""}
                onClick={(ev) => {
                  dispatch(setOpen(false));
                }}
              />
              <TbMenu
                id="custom-icon"
                class={isOpen ? "active" : ""}
                onClick={() => dispatch(setOpen(true))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
