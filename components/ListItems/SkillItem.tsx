import { FC } from "react";

export type skillType = {
  title: string;
  prosent: number;
  id: string;
};

type skillProps = {
  listItem: skillType;
};

const Skill: FC<skillProps> = ({ listItem }) => {
  const { title, prosent, id } = listItem;

  return (
    <div
      key={id}
      className="relative items-center mt-[10px] w-[100%] grid grid-cols-[150px,1fr] justify-items-center">
      <h4 className="uppercase text-[#848c99] font-[600]">{title}</h4>
      <div className="relative w-[100%] h-[10px] bg-[#f0f0f0]">
        <div
          style={{ width: `${prosent}%` }}
          className="h-[100%] absolute top-0 left-0 bg-[#03a9f4]"></div>
      </div>
    </div>
  );
};

export default Skill;
