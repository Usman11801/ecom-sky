import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>VA - Virtual Assistance Services</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
