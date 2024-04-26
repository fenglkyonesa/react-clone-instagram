import React, { useState, useEffect } from "react";
import PostImg from "../assets/post.png";
export const ExplorePage = () => {
  return (
    <div className="flex items-center h-screen w-full flex-col  overflow-y-auto gap-2 pt-10 pb-10 cursor-pointer">
      <div className="flex flex-row  w-[900px] h-[600px] ">
        <div className="flex flex-wrap  w-[630px] h-full gap-1 ">
          <div className="w-[300px] h-[300px]">
            <img src={PostImg} alt="" className="w-full h-full" />

          </div>
          <div className="w-[300px] h-[300px]">
            <img src={PostImg} alt="" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[300px]">
            <img src={PostImg} alt="" className="w-full h-full" />
          </div>
          <div className="w-[300px] h-[300px]">
            <img src={PostImg} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-[300px] h-[603px] ">
          <img src={PostImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
