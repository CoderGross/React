import React from 'react';
import { useParams } from 'react-router-dom';
import fennec from "../assets/fennec.jpg";
import '../ProductDetail/productDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = {
        name: "Fennec",
        description: "Este es un auto icónico que destaca por su diseño aerodinámico y su velocidad excepcional.",
        image: fennec,
        price: 299.99,
    };

    return (
        <div className="container mt-4">
            <h2>{product.name}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h3>Descripción</h3>
                    <p>{product.description}</p>
                    <h4>Precio: ${product.price.toFixed(2)}</h4>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
