import React, { useEffect, useState } from "react";
import { Product_card } from "../Product_card/Product_card";
import { fetchBooks } from "../../store/reducer/dataSlice";
import "./Recomended.scss";
import { useDispatch, useSelector } from "react-redux";
export const Recomended = () => {
  const { books } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
    return () => {};
  }, []);
  return (
    <div className="_product_wrapper">
      <div className="_recomended_container _container">
        <h1>Recomended</h1>
        <span className="sub-heading"></span>
        <div className="_cards">
          {books.slice(0, 11).map((product) => (
            <div className="_card">
              <Product_card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
