import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fennec from "../assets/fennec.jpg"

const Card = () => {
    return (
        <div className="card" style={{ width: '15rem' }}>
            <img src={fennec} className="card-img-top" alt="Card image" />
            <div className="card-body">
                <h5 className="card-title">Fennec</h5>
                <p className="card-text">
                    ¡Compra el Fennec y lleva tu experiencia de juego al siguiente nivel! Este auto icónico destaca por su diseño aerodinámico y su velocidad excepcional.
                </p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    );
};

export default Card;
