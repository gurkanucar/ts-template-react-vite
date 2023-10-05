import { useState } from "react";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={handleClick}
      className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
        isDark ? "bg-white text-black" : "bg-black text-white"
      } p-2 rounded`}
    >
      <i className={`fas fa-${isDark ? "sun" : "moon"}`}></i>
    </button>
  );
};

export default ThemeButton;
