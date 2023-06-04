import { FC } from "react";

type titleType = {
  text: string;
  flag: boolean;
};

type title1Props = {
  title: titleType;
};

const Title: FC<title1Props> = ({ title }) => {
  const { text, flag } = title;
  let button: JSX.Element;

  flag
    ? (button = (
        <h3 className="text-[#fff] uppercase font-[600] tracking-[1px] mb-[20px]">
          {text}
        </h3>
      ))
    : (button = (
        <h2 className="text-[#003147] uppercase tracking-[1px] mb-[10px] font-[700]">
          {text}
        </h2>
      ));

  return <>{button}</>;
};

export default Title;
