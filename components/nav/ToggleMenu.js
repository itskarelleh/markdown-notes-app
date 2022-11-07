import React, { useState, useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";
import Modal from "../modal/Modal";
import CreatePostButton from "../inputs/buttons/CreatePostButton";
import { UserContext } from "@/context/UserProvider";
import ThemeToggleButton from "../inputs/buttons/ThemeToggleButton";
import Link from "next/link";
import { motion } from "framer-motion";

const LinksMenu = ({ links }) => (
  <>
    <p className="menu-label">Notes</p>
    <ul className="menu-list mt-5 note-summaries">
      {links &&
        links.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
    </ul>
  </>
);
export default function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { userProfile } = useContext(UserContext);

  const authLinks = [
    { label: "Overview", url: "/overview" },
    { label: "Documents", url: "/documents" },
    { label: "Settings", url: "/documents" },
  ];

  const links = [
    { label: "Sign In", url: "/signin" },
    { label: "Sign Up", url: "/signup" },
  ];

  return (
    <>
      <div className="w-6 relative z-999">
        <button
          className="button text-3xl mr-4 w-full"
          style={{ border: "none", background: "none" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? (
            <ion-icon name="menu-outline"></ion-icon>
          ) : (
            <ion-icon name="close-outline"></ion-icon>
          )}
        </button>
      </div>
      <Modal open={isOpen}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className={`modal-menu bg-white dark:bg-zinc-800`}
        >
          <div>
            <p>Welcome {userProfile.displayName}</p>
          </div>
          <aside
            className="menu"
            style={{ marginTop: "5rem", padding: "0 1rem" }}
          >
            <CreatePostButton label="Create new note" />
            <LinksMenu
              links={Object.keys(userProfile).length >= 1 ? authLinks : links}
            />
            <div className="aside-footer">
              <ThemeToggleButton />
            </div>
          </aside>
        </motion.div>
      </Modal>
    </>
  );
}
