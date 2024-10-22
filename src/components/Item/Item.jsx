import React from 'react';

const Item = () => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src="path_to_image" className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">Nombre de Prueba</h5>
          <p className="card-text">Aca voy a poner una breve description dsp</p>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
