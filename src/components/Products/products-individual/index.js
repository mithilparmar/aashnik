import React from 'react';
import { useParams } from 'react-router-dom';
import individualProducts from '../../../constants/products-individual';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';

const ProductDetail = () => {

    const [isVisible, setIsVisible] = useState(true);

    // Optional: Use effect to hide overlay after a fixed timeout, in case react-loaders doesn't emit a specific event
    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000); // Adjust duration to match your loader animation length

        return () => clearTimeout(timeout); // Clean up on unmount
    }, []);

    const { categoryId, productId } = useParams();
    
    // Find the category and product based on the IDs in the URL
    const category = individualProducts.categories.find(cat => cat.id === categoryId);
    const product = category ? category.info.find(prod => prod.id === productId) : null;

    if (!category || !product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className="product-detail-page">
                <div className="header-image">
                    <img src={category.image} alt={product.title} />
                    <div className="overlay-text">{product.title}</div>
                </div>
            
                <div className="product-description">
                    <div className='container-product-info'>
                        <div className='product-image-container'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className='product-image'
                            />
                        </div>
                        <div className='product-description-info'>
                            <p>{product.description}</p>
                            {product.bullets?.[0]?.data && (
                                <div className="advantages">
                                    <h3>Advantages</h3>
                                    <ul>
                                        {product.bullets[0].data.map((adv, index) => (
                                        <li key={index}>{adv}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='text-zone'>
                    <div className="features-section">
                        <h1>Features</h1>
                        <div className="features">
                        {product.features.map((feature, index) => (
                            <div key={index} className="feature">
                                <img src={feature.image} alt={feature.name} />
                                <p>{feature.name}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                    {product.specifications && product.specifications.length > 0 && (
                        <div className="specifications">
                            <h1>Specifications</h1>
                            <table>
                            <tbody>
                                {product.specifications.map((spec, index) => (
                                <tr key={index}>
                                    {spec.value ? (
                                    <>
                                        <td><p>{spec.type}</p></td>
                                        <td><p>{spec.value}</p></td>
                                    </>
                                    ) : (
                                    <td colSpan="2" style={{ textAlign: 'left', border: 'none', padding: '10px', textTransform: 'uppercase', fontWeight: 'bold'}}>
                                        <p>{spec.type}</p>
                                    </td>
                                    )}
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    )}

                    {product.downloads && product.downloads.length > 0 && (
                        <div className="downloads">
                            <h1>Downloads</h1>
                            {product.downloads.map((download, index) => (
                                <p key={index}>
                                    <a href={download.path} target="_blank" rel="noopener noreferrer">
                                        {download.name.toUpperCase()}
                                    </a>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {isVisible && (
                <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
                    <Loader type='line-scale' />
                </div>
            )}
        </>
    );
};

export default ProductDetail;
