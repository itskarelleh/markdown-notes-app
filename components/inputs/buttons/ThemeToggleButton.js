import React, { useContext } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      id="toggle"
      style={{ border: "none", background: "none" }}
    >
      {theme === 'light' ? (
        <ion-icon name="sunny-outline"></ion-icon>
      ) : (
        <ion-icon name="moon-outline"></ion-icon>
      )}
    </button>
  );
}
