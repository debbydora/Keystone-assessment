import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { SiOpenaccess } from "react-icons/si";
import { BsCart2 } from "react-icons/bs";
import {
  TbBuildingWarehouse,
  TbUsers,
  TbChartLine,
  TbChartBar,
  TbBriefcase,
  TbSettings,
} from "react-icons/tb";
import Harmburger from "../Harmburger";

const SideNav = () => {
  const [open] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", path: "/", src: <TbChartLine /> },
    { title: "Products", path: "/products", src: <TbBuildingWarehouse /> },
    { title: "Blog", path: "/blog", src: <BsCart2 /> },
    {
      title: "Transactions",
      path: "/transactions",
      src: <SiOpenaccess />,
    },
    { title: "Users", path: "/users", src: <TbUsers /> },
    { title: "Analysis", path: "/analysis", src: <TbChartBar /> },
    { title: "Reports", path: "/reports", src: <IoFlagOutline /> },
    { title: "Investment", path: "/investment", src: <TbBriefcase /> },
    { title: "Settings", path: "/settings", src: <TbSettings /> },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-60" : "w-fit"
        } hidden sm:block relative w-80 h-screen duration-300 p-5 g-white border-l border-gray-200 dark:border-gray-600`}
      >
        <Link to="/">
          <span className="text-4xl font-bold  font-heleveth tracking-tight  text-sky-700 whitespace-nowrap dark:text-white">
            RETRO
          </span>
        </Link>

        <ul className="pt-6 gap-2 flex flex-col">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-3 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${
                          location.pathname === menu.path &&
                          "bg-whitishblue text-sharpblue dark:bg-gray-700"
                        }`}
              >
                <span className="text-lg">{menu.src}</span>
                <span
                  className={` font-medium text-base  ${
                    location.pathname === menu.path
                      ? " text-sharpblue"
                      : "text-gray-400"
                  } ${!open && "hidden"} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <Harmburger setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
