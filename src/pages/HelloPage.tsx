import HelloComponent from "@/components/HelloComponent";
import ThemeButton from "@/components/ThemeButton";
import { FC } from "react";
import { Link } from "react-router-dom";

const HelloPage: FC = () => {
  return (
    <div>
    <div className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-6 items-center justify-end">
        <li>
          <Link to="/login" className="font-semibold hover:text-blue-300">
            Login
          </Link>
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </div>
    <HelloComponent name="name" />
  </div>
  );
};

export default HelloPage;
