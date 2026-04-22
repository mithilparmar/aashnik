import './index.scss';
import Loader from 'react-loaders';
import ReactFullscreenSlideshow from 'react-fullscreen-slideshow';
import { awards, inaugration, media } from '../../constants/gallery';
import slideshowClass from "./GalleryPage.css";
import { useEffect, useState } from 'react';

const Gallery = () => {

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
            <div className='container gallery-page'>
                <div className='text-zone'>
                    <h1>
                        Gallery
                    </h1>
                </div>
            </div>
            <div className='container-gallery'> 
                <ReactFullscreenSlideshow className={slideshowClass}
                    images={awards} 
                    title={"Awards"}
                />
            </div>
            <div className='container_next'>
                <ReactFullscreenSlideshow className={slideshowClass}
                    images={inaugration} 
                    title={"Inaugration 1993"}
                    BannerImgIndex={1}
                />
            </div>
            <div className='container_next'>
                <ReactFullscreenSlideshow className={slideshowClass}
                    images={media} 
                    title={"Media"}
                    BannerImgIndex={4}
                />
            </div>
            {isVisible && (
                <div className={`loader-overlay ${!isVisible ? 'hidden' : ''}`}>
                    <Loader type='line-scale' />
                </div>
            )}
        </>
    );
}

export default Gallery