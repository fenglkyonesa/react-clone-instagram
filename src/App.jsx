import "./App.css";
import { SideNav } from "./components/navigation/SideNav";
import { TopNav } from "./components/navigation/TopNav";
import { BottomNav } from "./components/navigation/BottomNav";
import { Feed } from "./components/feed/Feed";
import { Suggestion } from "./components/suggestion/Suggestion";

export default function App() {
  const followNum = 10;
  return (
    <>
      <div className=" w-full h-screen  flex flex-row justify-between gap-4 ">
        <div className=" fixed md:hidden  top-0 left-0 z-999 h-[70px]  w-full  light:bg-white   border-b-[1px] border-gray-700">
          <TopNav />
        </div>
        <div className="flex  hidden flex-col md:block  pl-3  light:bg-white w-[80px]  lg:w-[335px] h-screen border-r-1  border-gray-800">
          <SideNav />
        </div>
        <div className="fixed flex bottom-0 z-30 gap-1 md:hidden h-[50px] w-full justify-between  bg-black border-t-[1px] border-gray-700">
          <BottomNav />
        </div>

        <div className="flex flex-col flex-1 items-center md:mt-10 mt-20   overflow-y-auto  ">
          <Feed />
        </div>
        {followNum !== 0 && (
          <div className="hidden md:block felx md:justify-start  pt-10 flex-1 pl-4  ">
            <Suggestion />
          </div>
        )}
      </div>
    </>
  );
}
