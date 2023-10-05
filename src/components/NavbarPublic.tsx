import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="/public1" className="hover:text-blue-300">
              Public Page 1
            </a>
          </li>
          <li>
            <a href="/public2" className="hover:text-blue-300">
              Public Page 2
            </a>
          </li>
          <li>
            <a href="/private1" className="hover:text-blue-300">
              Private Page 1
            </a>
          </li>
          <li>
            <a href="/private2" className="hover:text-blue-300">
              Private Page 2
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-blue-300">
              Login
            </a>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
