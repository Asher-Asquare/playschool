import React from 'react';
import './LocationMap.css'; // Import CSS for styling

const LocationMap = () => {
    return (
        <div className="location-map" id='location-map'>
            <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.908878467318!2d78.3752300736913!3d17.464074900594373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300254bfa1b%3A0xd085d235d41e6fe7!2sTrue%20Sunshine%20Preschool%20%26%20Daycare!5e0!3m2!1sen!2sin!4v1720548705199!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default LocationMap;
