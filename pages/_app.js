import React from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import SEO from "../next-seo.config";
import "@/styles/markdown-guide.scss";
import "@/styles/App.scss";
import "@/styles/index.scss";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@/context/UserProvider";
import Navigation from "@/components/nav/Navigation";
import { PostsProvider } from "@/context/PostsProvider";
import BaseLayout from "@/components/BaseLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>
      <UserProvider>
        <ThemeProvider attribute="class">
          <PostsProvider>
            <BaseLayout>
              <Navigation />
              <Component {...pageProps} />
            </BaseLayout>
          </PostsProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
