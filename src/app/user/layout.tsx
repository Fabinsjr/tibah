"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout(props: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user) {
      router.push("/login");
      return;
    }
    if (user["login_type"] === "admin") {
      setAdmin(true);
    }
  }, []);
  return <>{admin ? props.admin : props.user}</>;
}
