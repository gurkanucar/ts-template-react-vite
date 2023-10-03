import { FC } from "react";

type Props = {
  name: string;
};

const HelloComponent: FC<Props> = (props) => {
  return <div>Hello {props.name}</div>;
};

export default HelloComponent;
