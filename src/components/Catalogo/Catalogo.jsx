import React from 'react';
import Card from '../Card/Card'; // Importa el componente Card

const Catalog = () => {
    return (
        <div className="container mt-4">
            <h2>Catálogo de Productos</h2>
            <Card /> {/* Llama al componente Card para mostrar las tarjetas */}
        </div>
    );
};

export default Catalog;
