import React, { useEffect, useState } from "react";
import { FeatureTop } from "../FeatureTop/FeatureTop";
import { useDispatch, useSelector } from "react-redux";
import "./Feature.scss";
import { Link } from "react-router-dom";
import { Feature_box } from "../Feature_box/Feature_box";
import { arrowLink } from "../../Conestants";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { fetchBooks } from "../../store/reducer/dataSlice";
export const Feature = () => {
  const isOpen = useSelector((state) => state.feature.isOpen);
  const { books } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
    return () => {};
  }, []);
  console.log("====================================");
  console.log(books);
  console.log("====================================");
  return (
    <div className="_feature_wrapper">
      <FeatureTop />
      {isOpen &&
        books.slice(0, 8).map((p, i) => (
          <div className="_card" key={i*i}>
            <Feature_box product={p} />
          </div>
        ))}
      {!isOpen && (
        <div className="_box">
          {books.slice(1, 10).map((p,i) => (
            <Link key={i} to={`/features/${p.id}`}>
              <FeatureCard product={p} />
            </Link>
          ))}
        </div>
      )}
      <div className="_arrow">
        <select>
          <option>show 10</option>
        </select>
        <div>
          {arrowLink.map((item) => {
            return <a href="/">{item}</a>;
          })}
        </div>
      </div>
    </div>
  );
};
