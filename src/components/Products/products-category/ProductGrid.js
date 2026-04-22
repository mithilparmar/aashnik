// ProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.scss';

const ProductGrid = ({ products, categoryId }) => (
    <div className="product-grid">
        {products.map(product => (
            <ProductCard key={product.id} product={product} categoryId={categoryId} />
        ))}
    </div>
);

export default ProductGrid;
