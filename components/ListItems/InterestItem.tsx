import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export type interestItemType = {
  text: string;
  icon: IconDefinition;
  id: string;
};

type interestProps = {
  listItem: interestItemType;
};

const InterestItem: FC<interestProps> = ({ listItem }) => {
  const { text, icon, id } = listItem;
  return (
    <li key={id} className="list-none text-[#333] font-[500] my-[10px]">
      <FontAwesomeIcon
        className="text-[#03a9f4] text-[18px] w-[30px]"
        icon={icon}
      />
      {text}
    </li>
  );
};

export default InterestItem;
