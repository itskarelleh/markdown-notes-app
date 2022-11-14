import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [userAccount, setUserAccount] = useState({});

  // useEffect(() => {});
  // useEffect(() => {
  // }, [userAccount]);
  // TODO: check cookies for user

  async function authenticateUser(user) {
    // const token = sessionStorage.getItem("bearer");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_SERVER_URL}`,
          Accept: "application/json",
          "Accept-Control-Max-Age": "86400000",
        },
        mode: "cors",
        credentials: "same-origin",
        //   integrity: "",
        body: JSON.stringify(
          { email: user.email, password: user.password },
          2,
          null
        ),
      }
    );

    // const data = await response.json().then((d) => {
    //   setUserAccount(d);
    // });

    // setUserAccount(data);
  }

  function logoutUser() {
    //remove jwt cookie
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`,
      {
        method: "POST",
      }
    );

    setUserAccount({});
  }

  function registerNewUser({ values }) {}

  return (
    <AuthContext.Provider
      value={{
        userProfile,
        userAccount,
        authenticateUser,
        registerNewUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
