import { FC } from "react";

export type educationItemType = {
  title: string;
  text: string;
  id: string;
};

type listItemProps = {
  listItem: educationItemType;
};

const EducationItem: FC<listItemProps> = ({ listItem }) => {
  const { title, text, id } = listItem;
  return (
    <li
      key={id}
      className="relative mb-[15px] list-none mt-[10px] cursor-pointer">
      <h5 className="text-[#03a9f4] font-[500]">2010 - 2013</h5>
      <h4 className="text-[#fff] font-[300]">{title}</h4>
      <h4 className="text-[#fff] font-[300]">{text}</h4>
    </li>
  );
};

export default EducationItem;
