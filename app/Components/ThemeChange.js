"use client";
import React from "react";
import { useState, useEffect } from "react";

const ThemeChange = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "forest",
    "dracula",
  ];

  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ?? "light"
      : "light"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);

  return (
    <div className="mr-5 mt-5">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 btn-outline btn-accent"
        >
          Theme
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {themes.map((item) => (
            <li
              key={item}
              onClick={() => setTheme(item)}
              className={`menu-title ${
                theme === item ? "text-accent" : ""
              } hover:bg-accent hover:text-base-content hover:bg-opacity-10 rounded-md p-2 cursor-pointer`}
              style={{ "--tw-bg-opacity": theme === item ? "1" : "0.8" }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeChange;
