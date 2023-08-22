"use client";

import Link from "next/link";
import { baseUrl } from "@/app/url";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    let xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    let theUrl = `${baseUrl}auth/signin/`;
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.withCredentials = true;
    xmlhttp.onload = function (e) {
      if (this.status == 200) {
        setErrorMessage("");
        if (this.responseText) {
          const data = JSON.parse(this.responseText);
          localStorage.setItem("user", JSON.stringify(data));
          // set cookie for access token and refresh token
          document.cookie = `access-token=${data["access-token"]}; path=/;`;
          document.cookie = `refresh-token=${data["refresh-token"]}; path=/;`;
          router.push("/user");
        }
      } else if (this.status == 401) {
        setErrorMessage("Invalid Credentials");
      }
    };

    xmlhttp.send(JSON.stringify(data));
  }
  return (
    <>
      <main className="flex flex-col items-center bg-zinc-600 pt-28">
        <form
          className="flex flex-col gap-4 w-full max-w-md mx-auto my-8 p-8 bg-white rounded-xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-2 border"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-4 py-2 border"
              required
            />
          </div>
          <button
            className="px-4 py-2 bg-primary text-white rounded"
            type="submit"
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-primary">
              Register Here!
            </Link>
          </p>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </form>
      </main>
    </>
  );
}
