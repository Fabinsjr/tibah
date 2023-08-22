"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const router = usePathname();
  return (
    useEffect(() => {
      localStorage.getItem("user") && setLoggedIn(true);
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user) {
        return;
      }
      if (user["login_type"] === "admin") {
        setAdmin(true);
      }
    }),
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
        document.querySelector("main")?.addEventListener("click", () => {
          setOpen(false);
        });
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.querySelector("main")?.removeEventListener("click", () => {
          setOpen(false);
        });
      };
    }, [open]),
    (
      <header className="flex items-center justify-between p-6 w-full bg-black bg-opacity-80 backdrop-blur-md absolute z-50">
        <nav className="flex flex-col xl:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
          <div className="flex justify-between w-full xl:w-auto items-center">
            <Link
              href="/"
              className="text-2xl flex justify-center items-center "
            >
              <img
                src="/Logo-Tibah-HighRes-Logo.png"
                alt="Logo of Tibah"
                className="h-14 mr-2"
              />
            </Link>
            <button
              className="xl:hidden cursor-pointer"
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              !open ? "hidden" : "flex"
            } xl:flex flex-col items-end`}
          >
            <p className="text-slate-100 mb-2">Contact Us : (289) 266-3082</p>
            <div
              className={`${
                !open ? "hidden" : "flex"
              } xl:flex flex-col xl:flex-row items-center gap-6 mx-auto xl:mx-0 xl:ml-auto text-slate-50 `}
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-md font-medium ${
                    link.href === router ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* <Link
                href="/custom-sheet-metal"
                className="px-5 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-opacity-70"
              >
                Custom Sheet Metal
              </Link> */}
              {!loggedIn ? (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 text-sm font-medium text-white border-primary border rounded hover:bg-opacity-70 hover:bg-slate-950"
                >
                  Log in
                </Link>
              ) : (
                <Link
                  href="/user"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white border-primary border rounded hover:bg-opacity-70 hover:bg-slate-950"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Profile
                </Link>
              )}
              {!admin && loggedIn && (
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white border-primary border rounded hover:bg-opacity-70 hover:bg-slate-950"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Cart
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    )
  );
}
