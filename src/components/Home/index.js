import './index.scss';
import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        // Handler to set video as loaded
        const handleVideoLoaded = () => setVideoLoaded(true);

        if (videoElement) {
            videoElement.addEventListener('loadeddata', handleVideoLoaded);
        }

        // Clean up event listener
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadeddata', handleVideoLoaded);
            }
        };
    }, []);


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
            <div className='video-container'>
                {/* Placeholder image, shown until video is loaded */}
                {!videoLoaded && (
                    <div className="placeholder-image">
                        <img src={`${process.env.PUBLIC_URL}/videos/home-poster.png`} alt="Loading background" />
                    </div>
                )}

                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className='background-video'
                    playsInline
                >
                    <source
                        src={`${process.env.PUBLIC_URL}/videos/home.mp4`}
                        type='video/mp4'
                    />
                    Your browser does not support the video tag.
                </video>
                <div className='overlay'></div>
            </div>

            <div className='container home-page'>
                <div className='content'>
                    {/* Logo Section */}
                    <div className='logo-container'>
                        <img
                            src={`${process.env.PUBLIC_URL}/celebration_logo.png`}
                            alt='30 years Celebration Logo'
                            className='logo'
                        />
                    </div>

                    {/* Text Section */}
                    <div className='text-zone home-text'>
                        <p>
                            “The only constant in life is CHANGE” .... The world is evolving,
                            with new opportunities and fresh challenges branching off at every
                            turn. We look forward to each day, with an eagerness to stay
                            relevant and to deliver value. And, since 1993 we at AASH'NIK have
                            met each challenge with powerful ideas - from our early days to the
                            present where we offer a vast number of solutions to the IT &
                            Automation industry.
                        </p>
                        <p>
                            AASH'NIK as it stands today in the competitive IT Industry, is
                            because of the modern & creative management thinking, advanced
                            technologies adoption and a positive risk taking attitude, which
                            sets us apart as a leader in our chosen fields of activities.
                        </p>
                        <p className='exotic'>Versatile People Versatile Solutions.</p>
                    </div>
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

export default Home;
