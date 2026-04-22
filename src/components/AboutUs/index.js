import './index.scss';
import Loader from 'react-loaders';
import JourneySummary from './Journey';
import JourneyContent from '../../constants/journey';
import { useEffect, useState } from 'react';


const About = () => {

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
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        About Us
                    </h1>
                    <p>
                        AASH'NIK always try to live up to the expectations of its valued customers and the result of this, today the ever-growing marketing & sales network of AASH'NIK comprises of more than 250 experienced Resellers. And also have a large Customer base in the Government Undertakings, Corporate, Private Sectors and SOHO Segments.
                    </p>
                    <p>
                        Quality is our Forte! Customer satisfaction is at our top priority. We at AASH'NIK with our more than 25 years old legacy of quality, trust and expertise, Professional assistance and consultancy in technology products and services - we are poised to deliver need-of-the-hour solutions that span across geographies and categories. Which enables us to build lifetime relationship with our clientele.
                    </p>
                    <br />
                    <br />
                    <h1>
                        Our Journey
                    </h1>
                    <div className='timeline_content'>
                        <ul className='timeline'>
                            {JourneyContent.journey.map((item) => (
                                <JourneySummary
                                key={item.title}
                                year={item.year}
                                title={item.title}
                                contents={item.contents}
                                italic={item.italic}
                                />
                            ))}
                        </ul>
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
}

export default About