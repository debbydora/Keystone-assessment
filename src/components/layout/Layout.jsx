import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ className, children }) => {
  return (
    <>
      <div
        className={`${
          className ? className : ""
        }flex flex-auto border  w-full lg:pl-10`}
      >
        <SideNav />
        <div className="w-full bg-grayishBlue px-6 ">
          <Header />
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
