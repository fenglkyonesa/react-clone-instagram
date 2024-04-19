import "./App.css";
import { BottomNav } from "./components/Nav/BottomNav";
import { SideNav } from "./components/Nav/SideNav";
import TopNav from "./components/Nav/TopNav";

export default function App() {
  return (
    <>
      <div className=" w-full h-screen  flex md:flex-row flex-col gap-6">
        <TopNav />
        <div className="pl-3 hidden md:block w-[80px] lg:w-[335px] light:bg-white  h-screen border-r-1  border-gray-800">
          <SideNav />
        </div>
        <div className="fixed flex gap-1 md:hidden bottom-0 w-full justify-space-between h-[50px] bg-black border-t-[1px] border-gray-700">
          <BottomNav />
        </div>
        <div className="flex flex-[0.7] lg:justify-end justify-center border-r-1 border-gray-800 ">feed</div>
        <div className="hidden md:block felx  flex-[0.3]">suggestion</div>
      </div>
    </>
  );
}
