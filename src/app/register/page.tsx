"use client";

import Link from "next/link";
import { useState } from "react";
import { baseUrl } from "../url";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (data.password !== data["confirm-password"]) {
      setError("Passwords do not match");
      return;
    }
    if (data.username === "") {
      // remove username from data
      delete data.username;
    }
    fetch(`${baseUrl}auth/signup/`, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setError("");
        router.push("/login");
      } else {
        if (res.status === 400) {
          setError("Credentials already exist");
        }
        if (res.status === 401) {
          setError("Invalid Credentials");
        }
      }
    });
    setError(null);
  }
  return (
    <>
      <main className="flex flex-col items-center bg-zinc-600 pt-28">
        <form
          className="flex flex-col gap-4 w-full max-w-xl mx-auto my-8 p-8 bg-white rounded-xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="first_name">First name</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="first_name"
              name="first_name"
              minLength={2}
              required
            />
            <label htmlFor="middle_name">middle name</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="middle_name"
              name="middle_name"
              minLength={1}
            />
            <label htmlFor="last_name">Last name</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="last_name"
              name="last_name"
              minLength={1}
              required
            />
            <label htmlFor="company_name">Company name</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="company_name"
              name="company_name"
              minLength={2}
              required
            />
            <label htmlFor="company_contact_number">
              Company contact number
            </label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="tel"
              id="company_contact_number"
              name="company_contact_number"
              minLength={2}
            />
            <label htmlFor="company_address">Company address</label>
            <textarea
              className="border border-gray-300 rounded px-2 py-1"
              id="company_address"
              name="company_address"
              rows={3}
              required
            ></textarea>
            <label htmlFor="country">Country</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="country"
              name="country"
              required
            />
            <label htmlFor="state">State</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="state"
              name="state"
              required
            />
            <label htmlFor="city">City</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="city"
              name="city"
            />
            <label htmlFor="postal_zip">Zip code</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="number"
              id="postal_zip"
              name="postal_zip"
            />
            <label htmlFor="license_type">License type</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="license_type"
              name="license_type"
              minLength={1}
            />
            <label htmlFor="license_number">License number</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="text"
              id="license_number"
              name="license_number"
              minLength={1}
            />
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="password"
              id="password"
              name="password"
              pattern=".{8,}"
              title="Passwords must be at least 8 characters long"
              required
            />
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              className="border border-gray-300 rounded px-2 py-1"
              type="password"
              id="confirm-password"
              name="confirm-password"
              pattern=".{8,}"
              title="Passwords must be at least 8 characters long"
              required
            />
            <input
              className="hidden"
              type="text"
              id="username"
              name="username"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="px-4 py-2 bg-primary text-white rounded"
            type="submit"
          >
            Register
          </button>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login Here!
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
