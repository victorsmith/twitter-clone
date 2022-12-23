import { useRouter } from "next/router";
import React, { useState } from "react";
import constants from "../../constants/constants";

export default function Login() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);


  const api = constants.apiBaseUrl;
  console.log("ApiBaseUrl:", api);

  const handleSubmit = async (data) => {
    setLoading(true);

    console.log("data", data)

    const res = await fetch(`${api}/auth/login`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    });

    const user = await res.json();
    console.log("User Info", user);
  };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
