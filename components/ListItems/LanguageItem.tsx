import classNames from "classnames";
import { FC, useState } from "react";

export type languageItemType = {
  title: string;
  prosent: number;
  id: string;
};

type languageItemProps = {
  listItem: languageItemType;
};

const LanguageItem: FC<languageItemProps> = ({ listItem }) => {
  const { title, prosent, id } = listItem;

  let width = classNames(`w-[${prosent}%]`);

  // console.log("width => ", width);

  return (
    <li key={id} className="relative list-none my-[10px] cursor-pointer">
      <span className="text-[#fff] font-[300]">{title}</span>
      <span className="relative w-[100%] h-[6px] bg-[#081921] block mt-[5px]">
        <div
          style={{ width: `${prosent}%` }}
          className={`absolute top-0 left-0 h-[100%] bg-[#03a9f4]`}></div>
      </span>
    </li>
  );
};

export default LanguageItem;
