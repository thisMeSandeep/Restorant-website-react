import React from 'react';
import ContactForm from '../ContactForm';

const Contact = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 '>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.633954159155!2d80.97357189999998!3d26.85159250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd3a99fba681%3A0xe82b751c187af53b!2sTaj%20Mahal%20Lucknow!5e0!3m2!1sen!2sin!4v1722147941393!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='flex-grow h-80 md:h-auto'
            ></iframe>

            <ContactForm />

        </div>
    );
};

export default Contact;
