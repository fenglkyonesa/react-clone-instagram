import React, { useState, useEffect } from "react";
import PostImg from "../assets/post.png";

export const ExplorePage = () => {
  return (
    <div class="flex   items-center h-screen w-full flex-col  overflow-y-auto gap- pt-10 pb-10">
      <div className="flex justify-between w-[900px] h-[600px]  ">
        <div class="flex flex-wrap  w-[900px] h-[600px] gap-1 ">
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
        <div className="w-[435px] h-[603px] flex ">
          <img src={PostImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
