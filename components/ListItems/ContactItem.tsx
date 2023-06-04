import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC } from "react";

export type listItemType = {
  text: string;
  icon: IconDefinition;
  id: string;
};

type listItemProps = {
  listItem: listItemType;
};

const ContactItem: FC<listItemProps> = ({ listItem }) => {
  const { text, icon, id } = listItem;
  return (
    <li key={id} className="relative list-none my-[10px] cursor-pointer">
      <span className="inline-block w-[30px] text-[18px] text-[#03a9f4]">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="text-[#fff] font-[300]">{text}</span>
    </li>
  );
};

export default ContactItem;
