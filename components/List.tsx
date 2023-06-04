import { FC, ReactNode } from "react";

type listProps = {
  children: ReactNode;
};

const List: FC<listProps> = ({ children }) => {
  return <ul className="relative">{children}</ul>;
};

export default List;
