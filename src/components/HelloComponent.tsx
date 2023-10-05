import { FC } from "react";

type Props = {
  name: string;
};

const HelloComponent: FC<Props> = (props) => {
  return (
    <div className="text-dark dark:text-red-500 text-lg font-semibold m-5">
      Hello{" "}
      <span className="font-bold text-xl hover:text-orange-400">
        {props.name}
      </span>
    </div>
  );
};

export default HelloComponent;
