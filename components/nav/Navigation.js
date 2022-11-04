import React, { useContext } from "react";
import ToggleMenu from "./ToggleMenu";
import { ThemeContext } from "@/context/ThemeProvider";
import Link from "next/link";
import { UserContext } from "@/context/UserProvider";
import UserAvatar from "./UserAvatar";

export default function Navigation() {
  const { theme } = useContext(ThemeContext);
  const { userAccount, userProfile } = useContext(UserContext);

  const MenuRightNoAuth = () => (
    <div className="nav-end navbar-end">
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

  const MenuRightUserAuth = () => (
    <div>
      <UserAvatar />
    </div>
  );
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className={`navbar is-fixed-top`}
    >
      <div
        className="block ml-2 flex-row is-align-items-center"
        style={{ height: "100%" }}
      >
        <ToggleMenu />
        <div
          // style={{ width: "12rem", paddingLeft: "1.25rem" }}
          className="flex nav-branding navbar-brand flex-col m-0 is-justify-content-center"
        >
          <Link classsName="navbar-item" href="/">
            <h1 className={`my-0 text-2xl text-bold`}>Markdown Notes</h1>
          </Link>
        </div>
        {/* {userProfile !== null || Object.keys(userProfile) >= 1 ? (
          <MenuRightUserAuth />
        ) : ( */}
        <MenuRightNoAuth />
        {/* )} */}
        {/*TODO: add ThemeToggleButton will either be under settings or the toggle menu component */}
        {/* <div className="theme-toggle-btn">
          <ThemeToggleButton />
        </div> */}
      </div>
    </nav>
  );
}
