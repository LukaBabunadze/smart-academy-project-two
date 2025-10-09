"use client";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const pathname = usePathname();
  const params = useParams();
  const dispatch = useAppDispatch();

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

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
  };

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
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
}

export default page;
