import Button from "../components/Button";
import { BsPlusLg, BsArrowUpCircle } from "react-icons/bs";
import AreaChart from "../components/charts/AreaChart";
import Card from "../components/Card";
import RadarChart from "../components/charts/RadarChart";
import Table from "../components/Table";
import { tableData, cardData, tableHeaders } from "../Data";
import Layout from "../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="bg-white w-full h-auto rounded-md shadow-lg mt-2 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[#343A41] font-bold tracking-tight text-base">
              Sales Overview
            </h1>
            <Button
              type="button"
              title="Add Offer"
              className=" flex rounded-lg  text-white  font-normal text-base  items-center justify-center lg:px-12 px-4 py-2 gap-2 bg-gradient-to-r from-lightblue via-midblue to-darkblue"
              icon={<BsPlusLg />}
            />
          </div>
          <hr className="" />
          <div className="flex flex-col lg:justify-between lg:flex-row md:flex-row md:justify-between  my-4 items-center">
            <div className="flex justify-between items-center gap-3 mb-4 lg:mb-0  lg:w-0">
              <span className="text-[#343A41] font-bold text-4xl">$80,630</span>
              <span>
                <BsArrowUpCircle className="bg-[#E5F6F5] " />
              </span>
              <span className="text-[#0AAFA5] font-bold">+6,7%</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[#B1B9C2] font-medium text-base">
                Incomes
              </span>
              <span className="text-[#B1B9C2] font-medium text-base">
                Expenses
              </span>
              <select className="border border-[#B1B9C2] flex px-2 py-1 shadow-sm outline-none rounded-md w-32 justify-between">
                <option
                  value=""
                  className="text-[#B1B9C2] font-medium text-base"
                >
                  Year
                </option>
                <option
                  value=""
                  className="text-[#B1B9C2] font-medium text-base"
                >
                  2020
                </option>
                <option
                  value=""
                  className="text-[#B1B9C2] font-medium text-base"
                >
                  2021
                </option>
              </select>
            </div>
          </div>
          <div className=" lg:w-full md:w-full">
            <AreaChart />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col w-full gap-6 lg:gap-0 justify-between">
          {cardData.map((card, index) => (
            <Card
              className="card"
              key={index}
              title={card.title}
              info={card.info}
              icon={card.icon}
            />
          ))}
        </div>
        <div className="flex w-full justify-between ">
          <RadarChart />
          <Table
            data={tableData}
            columns={tableHeaders}
            title={"Latest added products"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
