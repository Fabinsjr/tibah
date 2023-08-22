"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function NotSignedIn() {
  return (
    <>
      {/* you are not signed in page */}
      <div className="flex flex-col items-center justify-center bg-zinc-100 h-[50vh] pt-28">
        <h1 className="text-2xl font-bold text-center">
          You are not signed in
        </h1>
        <p className="text-center">
          Please{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>{" "}
          or{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>{" "}
          to order custom sheet metal from us
        </p>
      </div>
    </>
  );
}

export default function Page(props: { signedin: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setSignedIn(true);
      if (!JSON.parse(localStorage.getItem("user") || "{}")["access-token"]) {
        setSignedIn(false);
      }
    }
  }, []);
  if (!signedIn) return <NotSignedIn />;
  return <>{props.signedin}</>;
}
