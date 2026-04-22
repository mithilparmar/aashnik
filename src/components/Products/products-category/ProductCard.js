// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product, categoryId }) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        {categoryId !== 'genuine-spares' && (
            <Link to={`/products/${categoryId}/${product.id}`} className="explore-button">
                Explore
            </Link>
        )}
    </div>
);

export default ProductCard;
