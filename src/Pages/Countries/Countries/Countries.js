import React from 'react';
import ContactUs from '../../Shared/ContactUs/ContactUs';
import Destination from '../Destination/Destination';
import Institutes from '../Institutes/Institutes';

const Countries = () => {
    return (
        <div>
            <Destination></Destination>
            <Institutes></Institutes>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Countries;