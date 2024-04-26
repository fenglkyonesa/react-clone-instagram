import React from "react";
import { HomePage } from "./pages/HomePage";
import { ExplorePage } from "./pages/ExplorePage";
import { Route, Routes } from "react-router-dom";
import { TopNav } from "./components/navigation/TopNav";
import { SideNav } from "./components/navigation/SideNav";
import { BottomNav } from "./components/navigation/BottomNav";
import { Reels } from "./pages/Reels";

export const App = () => {
  return (
    <div className=" w-full h-screen  flex flex-row   ">
      <div className=" fixed md:hidden  top-0 left-0 z-999 h-[70px]  w-full  light:bg-white   border-b-[1px] border-gray-700">
        <TopNav />
      </div>
      <div className="flex  hidden flex-col md:block  pl-3  light:bg-white w-[80px]  lg:w-[335px] h-screen border-r-1  border-gray-800">
        <SideNav />
      </div>
      <div className="fixed flex bottom-0 z-30 gap-1 md:hidden h-[50px] w-full justify-between  bg-black border-t-[1px] border-gray-700">
        <BottomNav />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/explore" element={<ExplorePage />}  />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </div>
  );
};
