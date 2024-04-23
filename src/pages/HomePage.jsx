import React from "react";
import { SideNav } from "../components/navigation/SideNav";
import { TopNav } from "../components/navigation/TopNav";
import { BottomNav } from "../components/navigation/BottomNav";
import { Feed } from "../components/feed/Feed";

export const HomePage = () => {
  return (
      <div className="flex flex-col flex-1 items-center md:mt-5 mt-20 mb-14 md:mb-4 overflow-y-auto  ">
        <Feed />
    </div>
  );
};
