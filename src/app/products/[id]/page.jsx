"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const pathname = usePathname();
  const params = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const result = await response.json();
      setSingleProduct(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  if (loading) {
    return <div>პროდუქტი იძებნება</div>;
  }

  return (
    <div>
      {singleProduct !== null ? (
        <section>{singleProduct.title}</section>
      ) : (
        <div>პროდუქტი ვერ მოიძებნა</div>
      )}
    </div>
  );
}

export default page;
