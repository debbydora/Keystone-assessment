import jersey1 from "./assets/images/jersey1.png";
import jersey2 from "./assets/images/jersey2.png";
import jersey3 from "./assets/images/jersey3.svg";
import jersey4 from "./assets/images/jersey4.png";
import pinkbar from "./assets/images/pinkbar.png";
import orangebar from "./assets/images/orangebar.png";
import areaflow from "./assets/images/area-stacked.png";
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

export const tableData = [
  {
    icon: jersey1,
    name: "PSG Stadium 20/21",
    variants: "3 variants",
    sku: " SKU:8600844",
    cloth: "jerseys",
    date: "12.11.2020",
    status: "published",
  },
  {
    icon: jersey3,
    name: "Los Angeles Lakers City",
    variants: "5 variants",
    sku: " SKU:8608647",
    cloth: "jerseys",
    date: "12.11.2020",
    status: "pending",
  },
  {
    icon: jersey2,
    name: "Miami Heat Courtside",
    variants: "4 variants",
    sku: " SKU:8600844",
    cloth: "Outwear",
    date: "10.11.2020",
    status: "published",
  },
  {
    icon: jersey4,
    name: "Liverpool FC 20/21 stadium",
    variants: "3 variants",
    sku: " SKU:8600844",
    cloth: "jerseys",
    date: "7.11.2020",
    status: "published",
  },
];

export const cardData = [
  {
    title: "Daily income",
    info: `$ 345`,
    icon: areaflow,
  },
  {
    title: "Daily Expense",
    info: `$ 380`,
    icon: pinkbar,
  },
  {
    title: "Weekly Income",
    info: `$ 5380`,
    icon: areaflow,
  },
  {
    title: "Weekly Expense",
    info: `$ 4320`,
    icon: orangebar,
  },
];

export const tableHeaders = [
  { field: "icon", header: "icon" },
  { field: "name", header: "name" },
  { field: "sku", header: "sku" },
  { field: "cloth", header: "cloth" },
  { field: "date", header: "date" },
  { field: "status", header: "status" },
];
