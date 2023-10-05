import HelloComponent from "@/components/HelloComponent";
import { FC } from "react";

const HelloPage: FC = () => {
  return (
    <div>
      <h2 className="text-blue-400 dark:text-red-500">Hello Page</h2>
      <HelloComponent name="name" />
    </div>
  );
};

export default HelloPage;
