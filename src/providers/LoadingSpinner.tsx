import {  DotLoader } from "react-spinners";

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50 dark:bg-dark">
    <DotLoader color="#f21242" />
  </div>
);

export default LoadingSpinner;
