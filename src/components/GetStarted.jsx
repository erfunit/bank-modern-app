import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary group w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins mr-2 font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          className="w-[23px] relative group-hover:-top-1 group-hover:left-1 top-0 left-0 transition-all h-[23px] object-contain"
          alt="arrow"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
