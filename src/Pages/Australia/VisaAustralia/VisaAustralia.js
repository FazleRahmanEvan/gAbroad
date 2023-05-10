import React from 'react';
import VisaBanner from './VisaBanner';
import VisaAustraliaDetails from './VisaAustraliaDetails';
import VisaBannerTwo from './VisaBannerTwo';
import ContactUs from '../../Shared/ContactUs/ContactUs';

const VisaAustralia = () => {
    return (
        <div>
            <VisaBanner/>
            <VisaAustraliaDetails/>
            <VisaBannerTwo/>
            <ContactUs/>
        </div>
    );
};

export default VisaAustralia;