import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
    const phoneNumber = '7460033731';
    const message = encodeURIComponent('Hello Rajan, I would like to connect with you regarding your services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 group"
                aria-label="Contact via WhatsApp"
            >
                <FaWhatsapp className="text-white text-xl" />

            </a>
        </div>
    );
}

export default Whatsapp;