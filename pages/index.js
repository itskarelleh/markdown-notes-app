import React from "react";
import { useContext } from "react";
import Navigation from "@/components/nav/Navigation";
import Editor from "@/components/editor";
import BaseLayout from "../components/BaseLayout";
import { UserContext } from "../context/UserProvider";

export default function Index() {
  const handleTestRes = async () => {
    try {
      const reqResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_API_ENDPOINT}/test/all`,
        {
          method: "GET",
        }
      );

      const response = await reqResponse.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="mt-6">
      <h1>The Home page</h1>
      <button onClick={handleTestRes}>Test API</button>
    </main>
  );
}
