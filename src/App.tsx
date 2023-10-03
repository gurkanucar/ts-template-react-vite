import "./App.css";
import HelloPage from "./pages/HelloPage";
import UserPage from "./pages/userPage/UserPage";
import useTheme from "./util/ThemeChanger";

function App() {
  const { theme, toggleTheme } = useTheme("light");
  return (
    <>
      <div className={`h-screen ${theme === "dark" ? "dark" : ""}`}>
        <h1 className="font-nunito text-3xl text-primary font-bold dark:text-white">
          Vite + React!
        </h1>
        <div className="card bg-white dark:bg-gray-800 rounded">
          <div className="text-black dark:text-white">
            Current theme: {theme}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-yellow-500 dark:hover:bg-yellow-700"
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
          <HelloPage />
        </div>
        <UserPage />
      </div>
    </>
  );
}

export default App;
