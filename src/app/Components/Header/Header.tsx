import React from "react";

interface HeaderProps {
  title: string;
  body: string;
}

const Header: React.FC<HeaderProps> = ({ title, body }) => {
  return (
    <div className="px-7 flex flex-col font-helvetica-neue gap-2.5 lg:gap-[25px]">
      <h1 className="lg:text-[54px] lg:leading-[64px]">{title}</h1>
      <p className="p-header pr-[3px] lg:w-[960px] lg:text-[22px] lg:leading-8 lg:pr-[26px]">
        {body}
      </p>
    </div>
  );
};

export { Header };
