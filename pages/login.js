import { useRouter } from "next/router";
import React, { useState } from "react";
import constants from "../constants/constants";
import Cookie from "js-cookie";
import { setCookie } from "cookies-next";

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const api = constants.apiBaseUrl;
  console.log("ApiBaseUrl:", api);

  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault();

    // Get data from the form.
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const api = constants.apiBaseUrl;
    console.log("ApiBaseUrl", api);

    const endpoint = `${api}/auth/login`;
    const options = {
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        // Authorization: jwt,
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    };

    const res = await fetch(endpoint, options);
    console.log("Res (post tweet)", res);    

    if (res.ok) {
      const user = await res.json();
      console.log("Log In Info", user);
      
      // Handle JWT
      if (user.token) {
          setCookie("token", user.token);
          localStorage.setItem('token', user.token);
          // router.push("/");
        }
        
      const checkLS = localStorage.getItem('token', user.token);
      console.log('jwt org', user.token)
      console.log('checkLS', checkLS)
    }
    event.target.username.value = "";
    event.target.password.value = "";
    setLoading(false)
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
