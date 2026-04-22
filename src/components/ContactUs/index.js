import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [isVisible, setIsVisible] = useState(true);

    // Optional: Use effect to hide overlay after a fixed timeout, in case react-loaders doesn't emit a specific event
    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000); // Adjust duration to match your loader animation length

        return () => clearTimeout(timeout); // Clean up on unmount
    }, []);



    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_ug7ga9h',
                'template_pbulkuc',
                refForm.current,
                'XAe3dJKzX7Qo805Ud'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                        Do you have questions, requests or suggestions? We look forward to your call and will be pleased to assist you. You can call us between 10:30 AM (IST) and 6:30 PM (IST) from Monday to Saturday.
                    </p>
                    <div className='phone'>
                        <a href='tel:+919725001256' target='_blank' rel='noreferrer'>
                        {"+91 97250 01256"}
                        </a>
                    </div>
                    <br />
                    <br />
                    <h1>Enquiry Form</h1>
                    <p>
                        Alternatively, you can also send us your message by filling out the form below. One of us will be happy to get in touch with you.
                    </p>
                    <div className='form-container'>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li>
                                        <input 
                                            className='placeText'
                                            type='text' 
                                            name='name' 
                                            id='name'
                                            placeholder='Full Name' 
                                            required 
                                        />
                                    </li>
                                    <li className='half'>
                                        <input 
                                            className='placeText'
                                            type='tel' 
                                            name='phone' 
                                            id='phone'
                                            pattern='[0-9]{10}'
                                            title='Please enter a valid 10-digit phone number'
                                            placeholder='Phone Number' 
                                            required 
                                        />
                                    </li>
                                    <li className='half email'>
                                        <input 
                                            className='placeText'
                                            type='email' 
                                            name='email' 
                                            id='email'
                                            placeholder='Email' 
                                            required 
                                        />
                                    </li>
                                    <li>
                                        <input 
                                            className='placeText'
                                            placeholder='Subject'
                                            type='text'
                                            name='subject'
                                            id='subject'
                                            required
                                        />
                                    </li>
                                    <li>
                                        <select
                                            className='placeText' 
                                            name='enquiry_type'  
                                            id='enquiry_type'
                                            required
                                            >
                                                <option value="" disabled selected className='placeholder'>Enquiry Type Select ...</option>
                                                <option value="Sales/Product Enquiry">Sales/Product Enquiry</option>
                                                <option value="Service Request">Service Request</option>
                                                <option value="Driver Requirement">Driver Requirement</option>
                                                <option value="Partner/Business Development">Partnership/Business Development</option>
                                                <option value="Other">Other</option>
                                        </select>
                                    </li>
                                    <li>
                                        <textarea 
                                            className='placeText'
                                            placeholder='Message'
                                            name='message'
                                            id='message'
                                            required
                                        ></textarea>
                                    </li>
                                    <li>
                                        <input
                                            type='submit'
                                            className='flat-button'
                                            value='SEND'
                                        />
                                    </li>
                                </ul>
                            </form>
                        </div>
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

export default Contact