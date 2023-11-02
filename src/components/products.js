import React, { useState, useEffect } from 'react';
import ProductCard from './product-card';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/products', { method: 'GET' })
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="row">
            {products.map((producto, index) => (
                <ProductCard producto={producto} key={index} />
            ))}
        </div>
    )
}