import React from 'react'
import  "./Herobg.scss"
import { TopHeader } from '../TopHeader/TopHeader'

export const Herobg = ({img,text,title1,title2,page})=> {
  return (
    <div className="herobg">
      <div className="overlay">
        <TopHeader />
        <img src={img}  className="bg"/>

        <h1>{title1}</h1>
        <span className="sub-heading"></span>
        <p>{title2}</p>
        <div className="box">
          <p>
            Home / <span>{page}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
