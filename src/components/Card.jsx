import React from "react";

const Card = ({
  title,
  info,
  children,
  className,
  icon,
  titleClassName,
  infoClassName,
}) => {
  return (
    <>
      <div
        className={`shadow-lg bg-white rounded-xl w-full lg:w-[237px] md:w-[237px]  h-auto  px-6 py-4 ${
          className ? className : ""
        }`}
      >
        <p
          className={`title font-medium text-base text-gray-400 h-8 ${
            titleClassName ? titleClassName : ""
          }`}
        >
          {title}
        </p>
        <div className="flex justify-between  items-center ">
          <p
            className={`font-bold text-3xl ${
              infoClassName ? infoClassName : ""
            }`}
          >
            {info}
          </p>
          {icon && (
            <img
              src={icon}
              alt="card icon"
              width={48}
              height={48}
              className="mb-4"
            />
          )}
        </div>

        {children}
      </div>
    </>
  );
};

export default Card;
