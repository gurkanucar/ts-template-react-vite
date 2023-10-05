import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-600 p-4 text-white">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/public1" className="hover:text-blue-300">
              Public Page 1
            </Link>
          </li>
          <li>
            <Link to="/public2" className="hover:text-blue-300">
              Public Page 2
            </Link>
          </li>
          <li>
            <Link to="/private1" className="hover:text-blue-300">
              Private Page 1
            </Link>
          </li>
          <li>
            <Link to="/private2" className="hover:text-blue-300">
              Private Page 2
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
