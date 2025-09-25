"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

function page() {
  const pathname = usePathname();
  const params = useParams();

  console.log("pathname: ", pathname);
  console.log("params: ", params);
  return <div>product id</div>;
}

export default page;
