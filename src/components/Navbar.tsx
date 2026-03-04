"use client" // this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = useState(false);


    return (
        <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <Link to="home">
                            <div className="md:py-5 md:block cursor-pointer">
                                <div className="flex">
                                    <Image 
                                        className="mr-3"
                                        src="/images/nanotechnology.png"
                                        alt="Personal logo"
                                        width={30}
                                        height={30}
                                    />
                                    <h1 className="text-2xl font-bold">Elkin Rodriguez Siatama</h1>
                                </div>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button onClick={() => setNavbar((prev) => !prev)} aria-label="Toggle navigation menu">
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <nav aria-label="Primary navigation">
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.page}>
                                    <Link
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true} 
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                {currentTheme === "dark" ? (
                                    <button
                                        onClick={() => setTheme("light")}
                                        className="bg-slate-100 p-2 rounded-xl"
                                        aria-label="Switch to light theme"
                                    >
                                        <RiSunLine size={25} color="black"/>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setTheme("dark")}
                                        className="bg-slate-100 p-2 rounded-xl"
                                        aria-label="Switch to dark theme"
                                    >
                                        <RiMoonFill size={25} color="black"/>
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Navbar;