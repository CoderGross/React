import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './itemListDetail.css'; // Asegúrate de tener este archivo para estilos

const ItemListDetail = () => {
  const location = useLocation();
  const product = location.state.product; // Obtenemos el producto del estado

  return (
    <div className="item-list-detail container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h5>Precio: ${product.price}</h5>
          <h6>Métodos de Pago:</h6>
          <div className="payment-buttons">
            <button className="btn btn-primary me-2">Mercado Pago</button>
            <button className="btn btn-success">Mercado Crédito</button>
          </div>
          {/* Botón para volver a la tienda */}
          <Link to="/" className="btn btn-secondary mt-3">Volver a la Tienda</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemListDetail;
