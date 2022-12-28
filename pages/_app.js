import App from "next/app";
import AppContext from "../components/AppContext";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    console.log("Active User Changed")
    console.log("Active User: ", activeUser)
  }, [activeUser])

  return (
    <AppContext.Provider
      value={{
        state: { activeUser: activeUser },
        setActiveUser: setActiveUser,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
