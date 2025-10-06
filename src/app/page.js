"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let userIsAuthorized = false;
    if (userIsAuthorized) {
      redirect("/products");
    } else {
      redirect("/login");
    }
  }, []);
  return <div>Home Page</div>;
}
