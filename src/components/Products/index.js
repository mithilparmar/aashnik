//import { Link } from 'react-router-dom'
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import ProductSummaryPageContent from "../../constants/products-summary";
import ProductSummary from './products-summary';


const Products = () => {

    const [isVisible, setIsVisible] = useState(true);

    // Optional: Use effect to hide overlay after a fixed timeout, in case react-loaders doesn't emit a specific event
    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000); // Adjust duration to match your loader animation length

        return () => clearTimeout(timeout); // Clean up on unmount
    }, []);

    return (
        <>
            <div className='container products-page'>
                <div className='text-zone'>
                    <h1>
                        Products
                    </h1>
                    {ProductSummaryPageContent.contents.map((content) => (
                        <>
                        <p>{content}</p>
                        </>
                    ))}
                    <br />
                </div>
                {ProductSummaryPageContent.products.map((product) => (
                    <ProductSummary
                        key={product.title}
                        title={product.title}
                        contents={product.contents}
                        productPath={product.productPath}
                        backgroundImage={product.backgroundImage}
                        isLightMode={product.isLightMode}
                    />
                ))}
            </div>
            {isVisible && (
                <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
                    <Loader type='line-scale' />
                </div>
            )}
        </>
    );
}

export default Products