import "./App.css";
import { BottomNav } from "./components/Nav/BottomNav";
import { SideNav } from "./components/Nav/SideNav";
import TopNav from "./components/Nav/TopNav";

export default function App() {
  return (
    <>
      <div className=" w-full h-screen ">
        <TopNav />
        <div className="fixed hidden w-[80px] lg:w-[335px] light:bg-white md:block h-screen border-r-1  border-gray-800">
          <SideNav />
        </div>
        <div className="fixed flex gap-1 md:hidden bottom-0 w-full justify-space-between h-[50px] bg-black border-t-[1px] border-gray-700">
          <BottomNav />
        </div>
      </div>
    </>
  );
}
