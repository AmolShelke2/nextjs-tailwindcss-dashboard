import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "./data";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

interface SubItem {
  title: string;
  link: string;
}

interface MainItem {
  title: string;
  icon: JSX.Element;
  link: string;
  subItems?: SubItem[];
}

const style = {
  title: "font-normal mx-4 text-sm",
  active:
    "border-r-4 border-blue-500 border-r-4 border-blue-500 bg-[#5D87FF] lg:hover:bg-[none] text-white",
  link: "duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-black capitalize rounded-xl mx-4",
};

export function SidebarItems() {
  const { pathname } = useRouter();

  // State to keep track of expanded items
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const handleItemClick = (title: string) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [title]: !prevExpandedItems[title],
    }));
  };

  const renderSubItems = (subItems: SubItem[]) => (
    <ul>
      {subItems.map((subItem) => (
        <li key={subItem.title} className="list-disc">
          <Link href={subItem.link}>
            <h3
              className={`flex items-center px-8 py-2 text-black text-[15px] hover:text-blue-500 capitalize ${
                subItem.link === pathname && style.active
              }`}>
              <TbPointFilled className=" mr-4" size={15} />
              {subItem.title}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <ul>
      {data.map((item: MainItem) => (
        <li key={item.title}>
          <Link
            href={item.link}
            onClick={() => handleItemClick(item.title)}
            className={`cursor-pointer fle items-center ${style.link} ${
              item.link === pathname && style.active
            }`}>
            <span>{item.icon}</span>
            <span className={style.title}>{item.title}</span>
            {item.subItems && (
              <span className="ml-auto">
                {expandedItems[item.title] ? (
                  <MdArrowDropUp size={25} />
                ) : (
                  <MdArrowDropDown size={25} />
                )}
              </span>
            )}
          </Link>
          {expandedItems[item.title] &&
            item.subItems &&
            renderSubItems(item.subItems)}
        </li>
      ))}
    </ul>
  );
}
