import Link from "next/link";
import { data } from "./data";
import { useRouter } from "next/router";

const style = {
  title: "font-normal mx-4 text-sm",
  active:
    "border-r-4 border-blue-500 border-r-4 border-blue-500 bg-[#5D87FF] lg:hover:bg-[#5D87FF] text-white",
  link: "duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase rounded-xl lg:hover:bg-[#ECF2FF] mx-4",
};

export function SidebarItems() {
  const { pathname } = useRouter();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <span
              className={`${style.link} 
              ${
                item.link === pathname ? style.active : ""
              } hover:bg-[#5D87FF]`}>
              <span>{item.icon}</span>
              <span className={style.title}>{item.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
