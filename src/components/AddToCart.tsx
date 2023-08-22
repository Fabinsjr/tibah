"use client";

import { baseUrl, refreshToken } from "@/app/url";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function AddToCart({ productID }: { productID: string }) {
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(1); // [count, setCount
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}")["access-token"]);
  }, []);
  const handleClick = useMemo(() => {
    setAdded(false);
    return () => {
      fetch(`${baseUrl}cart/add-to-cart/${productID}/${count}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user") || "{}")["access-token"] ||
            ""
          }`,
        },
      })
        .then((e) => {
          if (!e.ok) {
            if (e.status === 401) {
              refreshToken().then(() => {
                handleClick();
              });
            }
            throw new Error("Error adding to cart");
          }
          return e.json();
        })
        .then((data) => {
          if (data["message"] === "Product added to cart successfully") {
            setAdded(true);
          }
        });
    };
  }, [productID, count]);

  if (!user) {
    return (
      <Link
        href="/login"
        className="bg-violet-700 text-white px-4 py-2 rounded-md w-fit mt-5 hover:bg-violet-900"
      >
        Login to add to cart
      </Link>
    );
  }
  return (
    <div className="flex items-center gap-2 justify-start mt-8">
      <label htmlFor="count">Quantity</label>
      <input
        type="number"
        name="count"
        id="count"
        className="px-4 py-2 border w-16 text-black"
        value={count}
        min={1}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
      <button
        className={`bg-violet-700 text-white px-4 py-2 rounded-md w-fit ${
          !added && `hover:bg-violet-900`
        }`}
        onClick={handleClick}
      >
        Add to cart
      </button>
      <p className="text-green-500">{added && `Added ${count} to cart `}</p>
    </div>
  );
}
