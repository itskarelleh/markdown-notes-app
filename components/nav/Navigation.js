import React, { useContext } from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";
import { AuthContext } from "@/context/AuthProvider";
import UserAvatar from "./UserAvatar";

export default function Navigation() {
  const MenuRightNoAuth = () => (
    <div className="navbar-end">
      <ul className="navbar-item">
        <li className="mr-3" style={{ display: "inline" }}>
          <Link className="navbar-link" href="/signin">
            Sign In
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link className="navbar-link" href="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );

  const MenuRightUserAuth = () => <div className="nav-end navbar-end"></div>;

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="relative w-full mx-auto navbar fixed top-0 left-0 right-0 p-6"
    >
      <div
        className="w-full flex flex-row justify-between"
        style={{ height: "100%" }}
      >
        <div className="flex flex-row ml-4 justify-center navbar-start">
          <ToggleMenu />
          <Link classsName="navbar-item" href="/">
            <h1 className="my-0 ml-4 text-2xl relative z-999">
              Markdown Notes
            </h1>
          </Link>
        </div>
        <MenuRightNoAuth />
      </div>
    </nav>
  );
}
