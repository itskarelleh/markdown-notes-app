import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./serviceWorker.js")
          .then((reg) => console.log("Success: ", reg.scope))
          .catch((err) => console.log("Failure: ", err));
      });
    }
  });

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script type="text/javascript" src="src/purify.js"></script>
        <script src="bulma-toast.min.js"></script>
        <script src="/node_modules/bulma-extensions/bulma-switch/dist/bulma-switch.min.js"></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </Html>
  );
}
