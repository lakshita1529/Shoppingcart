import React, { useState } from "react";
import { Button } from "react-bootstrap";

type CartButtonsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function CartButtons({}: CartButtonsProps) {
  const [quantity, setQuantity] = useState(0);

  const AddToCart = () => {
    setQuantity(1);
  };

  const toIncrement = () => {
    setQuantity(quantity + 1);
  };

  const toDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const toRemove = () => {
    setQuantity(0);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {quantity === 0 ? (
        <Button onClick={AddToCart} className="w-100">
          + Add to Cart
        </Button>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center mb-2">
            <Button onClick={toDecrement} className="me-2">
              -
            </Button>
            <span>{quantity} in cart</span>
            <Button onClick={toIncrement} className="ms-2">
              +
            </Button>
          </div>
          <Button onClick={toRemove} variant="danger">
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}
