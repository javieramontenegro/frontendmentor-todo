import { useEffect, useState } from "react";
import Moon from "./svg/Moon";
import Sun from "./svg/Sun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="w-full md:w-1/2 h-auto flex flex-col ">
            <div className="flex justify-between content-center mb-9">
                <h1 className="text-4xl uppercase text font-semibold text-white tracking-[0.5rem] ">
                    to do
                </h1>
                <button
                    onClick={() => {
                        setDarkMode(!darkMode);
                    }}
                    className="cursor-pointer "
                >
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
