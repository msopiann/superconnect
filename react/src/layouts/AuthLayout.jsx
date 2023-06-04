import { useEffect, useState } from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet, Link } from "react-router-dom";
import ReactSwitch from "react-switch";

const AuthLayout = () => {
    const { user, logout } = useAuthContext();

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').watches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = (() => {
        setTheme(theme === "dark" ? "light" : "dark");
    });

    return user ? (
        <>
            <nav className="bg-indigo-900 text-white px-2 py-2.5 sm:px-4 dark:bg-black text-white">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <a href="/" className="flex items-start">
                        <img className="text-white" src="/logo.png" alt="logo" width={100}/>
                    </a>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul
                            className="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
                        >
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/update-profile"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >
                                    Profile
                                </Link>
                            </li>

                            {user ? (
                                <>
                                    <li>
                                        <button
                                            onClick={logout}
                                            className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                  md:border-0
                "
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                            <li>
                                <ReactSwitch onChange={handleThemeSwitch} checked={theme === "dark"} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    ) : (
        <Navigate to={"/login"} />
    );
};

export default AuthLayout;
