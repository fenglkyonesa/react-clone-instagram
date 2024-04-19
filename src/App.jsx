import "./App.css";
import { BottomNav } from "./components/Nav/BottomNav";
import { SideNav } from "./components/Nav/SideNav";
import Suggestion from "./components/suggestion/Suggestion";
import TopNav from "./components/Nav/TopNav";

export default function App() {
  return (
    <>
      <div className=" w-full h-screen  flex md:flex-row flex-col gap-6">
        <TopNav />
        <div className="pl-3 hidden md:block w-[80px] lg:w-[335px] light:bg-white  h-screen border-r-1  border-gray-800">
          <SideNav />
        </div>
        <div className="fixed flex gap-1 md:hidden bottom-0 w-full justify-between h-[50px] bg-black border-t-[1px] border-gray-700">
          <BottomNav />
        </div>
        <div className="flex flex-[0.6] xl:justify-end justify-center pt-20  md:pt-10 border-r-2 border-gray-800 ">
          feed
        </div>
        <div className="hidden md:block felx  flex-[0.4] pt-10 max-w-[280px]">
          <Suggestion />
        </div>
      </div>
    </>
  );
}
