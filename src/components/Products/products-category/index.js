// CategoryPage.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductCategoriesSummary from '../../../constants/products-category-summary';
import FeatureList from './FeatureList';
import ProductGrid from './ProductGrid';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';

const CategoryPage = () => {

    const [isVisible, setIsVisible] = useState(true);

    // Optional: Use effect to hide overlay after a fixed timeout, in case react-loaders doesn't emit a specific event
    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000); // Adjust duration to match your loader animation length

        return () => clearTimeout(timeout); // Clean up on unmount
    }, []);


    const { categoryId } = useParams();
    const category = ProductCategoriesSummary.categories.find(cat => cat.id === categoryId);

    if (!category) return <div>Category not found</div>;

    if (category.products.length === 1) {
        const singleProduct = category.products[0];
        return <Navigate to={`/products/${categoryId}/${singleProduct.id}`} replace />;
    }

    return (
        <>
            <div className="category-page">
                <div className='category-header-image'>
                    <img src={category.image} alt={category.title}/>
                    <div className="overlay-text">{category.description}</div>
                </div>
                {category.features && category.features.length > 0 && (
                    <div className="category-header">
                        <h1 className="category-title">{category.title}</h1>
                        
                            <FeatureList features={category.features} />
                    </div>
                )}
                <h2 className="category-subtitle">Explore Our Range of {category.title}</h2>
                <ProductGrid products={category.products} categoryId={categoryId} />
            </div>
            {isVisible && (
                <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
                    <Loader type='line-scale' />
                </div>
            )}
        </>
    );
};

export default CategoryPage;
