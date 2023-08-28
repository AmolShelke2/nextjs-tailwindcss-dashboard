import css from "../style.module.css";
import { SidebarItems } from "./SidebarItems";
import { SidebarHeader } from "./SidebarHeader";
import { useDashboardContext } from "../Provider";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  container:
    "pb-32 lg:pb-6 transition-all duration-1000 border-r-1 border-slate-50 ",
  close: "hidden lg:block lg:w-64 lg:z-auto transition-all duration-1000",
  open: "w-8/12 absolute z-40 sm:w-5/12 lg:hidden transition-all duration-1000",
  default:
    "bg-white h-screen overflow-y-auto top-0 lg:relative border-r-1 border-slate-50",
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}>
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}
