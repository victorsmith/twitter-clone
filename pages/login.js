import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import constants from "../constants/constants";
import Cookies from "js-cookie";
import AppContext from "../components/AppContext";

export default function Login() {
  const router = useRouter();
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const api = constants.apiBaseUrl;
  // console.log("ApiBaseUrl:", api);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    // Get data from the form.
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const api = constants.apiBaseUrl;
    // console.log("ApiBaseUrl", api);

    const endpoint = `${api}/auth/login`;
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    };

    const res = await fetch(endpoint, options);

    if (res.ok) {
      const user = await res.json();
      console.log("Log In Info", user);

      const jwtCookie = Cookies.get("token");
      console.log("#### JwtCookie");
      console.log("JwtCookie", jwtCookie);

      // Handle JWT
      if (jwtCookie) {
        console.log("## user", user.user);
        context.setActiveUser(user.user);
        router.push("/home");
      }
    }
    event.target.username.value = "";
    event.target.password.value = "";
    setLoading(false);
  };

  return (
    <>
      <form
        className="flex min-h-screen flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
