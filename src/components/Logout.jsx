"use client";

import { redirect } from "next/navigation";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    redirect("/");
  };
  return <button onClick={handleLogout}>Log Out</button>;
}

export default Logout;
