import searchIcon from "../.././assets/icons/search.svg";
import avatar from "../.././assets/images/avatar.svg";

const Header = () => {
  return (
    <nav className=" w-full py-4">
      <div className="container flex justify-between items-center mx-auto ">
        <div className="xl:w-96 ">
          <div className="lg:flex md:flex xl:flex  w-full  justify-between p-4 bg-whitishblue  rounded-lg items-center hidden">
            <input
              type="text"
              className=" bg-whitishblue outline-none ml-2 text-base"
              placeholder="Search ..."
            />
            <img src={searchIcon} alt="searchicon" className="mr-2" />
          </div>
        </div>
        <div className="flex justify-center items-center  gap-3">
          <span className="flex flex-col">
            <p className="font-bold text-greycolor text-lg">
              Jamesbrown@example.com
            </p>
            <p className="self-end text-sm text-[#B1B9C2] font-medium">Admin</p>
          </span>
          <img src={avatar} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
