import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ itemCount, onEmptyCart }) => {
  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-secondary ms-2">{itemCount}</span>
      <button 
        className="btn btn-danger btn-sm ms-2" 
        onClick={onEmptyCart}
        disabled={itemCount === 0}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default CartWidget;
