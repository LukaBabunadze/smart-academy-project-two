"use client";

import { useAppSelector } from "@/lib/hooks";

function page() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      {cart.cartProducts.map((item) => (
        <p>
          {item.title}
          <br />
          {item.quantity}
          <br />
          <hr />
        </p>
      ))}
    </div>
  );
}

export default page;
