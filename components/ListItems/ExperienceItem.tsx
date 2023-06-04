import { FC } from "react";

export type experienceItemType = {
  title_1: string;
  title_2: string;
  title_3: string;
  text: string;
  id: string;
};

type experienceItemProps = {
  listItem: experienceItemType;
};

const ExperienceItem: FC<experienceItemProps> = ({ listItem }) => {
  const { title_1, title_2, title_3, text, id } = listItem;
  return (
    <div key={id} className="flex flex-row my-[20px]">
      <div className="min-w-[150px] uppercase text-[#848c90] font-[600]">
        <h5>{title_1}</h5>
        <h5>{title_2}</h5>
      </div>

      <div>
        <h4 className="uppercase text-[#2a7da2] text-[16px]">{title_3}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
