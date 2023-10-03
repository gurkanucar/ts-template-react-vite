import { FC } from "react";

type Props = {
  name: string;
};

const HelloComponent: FC<Props> = (props) => {
  return <div className="text-dark dark:text-red-500">Hello {props.name}</div>;
};

export default HelloComponent;
