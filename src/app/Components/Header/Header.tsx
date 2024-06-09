import React from "react";

interface HeaderProps {
  title: string;
  body: string;
}

const Header: React.FC<HeaderProps> = ({ title, body }) => {
  return (
    <div className="px-7 flex flex-col font-helvetica-neue gap-2.5 md:gap-[25px]">
      <h1 className="md:text-[54px] md:leading-[64px] capitalize">{title}</h1>
      <p className="p-header md:w-[960px] md:text-[22px] md:leading-8 md:pr-[26px]">
        {body}
      </p>
    </div>
  );
};

export { Header };
