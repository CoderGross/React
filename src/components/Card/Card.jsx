import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fennec from "../assets/fennec.jpg";
import '../Card/card.css';

const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <img src={fennec} className="card-img-top" alt="Fennec" />
                    <div className="card-body">
                        <h5 className="card-title">Fennec</h5>
                        <p className="card-text">Este es un auto icónico que destaca por su diseño aerodinámico y su velocidad excepcional.</p>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Octane} className="card-img-top" alt="Octane" />
                    <div className="card-body">
                        <h5 className="card-title">Fennec</h5>
                        <p className="card-text">Este es un auto icónico que destaca por su diseño aerodinámico y su velocidad excepcional.</p>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={dominus} className="card-img-top" alt="Dominus" />
                    <div className="card-body">
                        <h5 className="card-title">Fennec</h5>
                        <p className="card-text">Este es un auto icónico que destaca por su diseño aerodinámico y su velocidad excepcional.</p>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


