import React from "react";
import { useContext } from "react";
import Navigation from "@/components/nav/Navigation";
import Editor from "@/components/editor";
import BaseLayout from "../components/BaseLayout";
import { UserContext } from "../context/UserProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const { userAccount } = useContext(UserContext);

  return (
    <BaseLayout>
      <h1>The Home page</h1>
    </BaseLayout>
  );
}
