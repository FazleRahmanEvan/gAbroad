import React from 'react';
import ContactUs from '../../../Shared/ContactUs/ContactUs';
import VisaBanner from '../VisaBanner/VisaBanner';
import VisaBannerTwo from '../VisaBannerTwo/VisaBannerTwo';
import VisaCanadaDetails from '../VisaCanadaDetails/VisaCanadaDetails';

const VisaCanada = () => {
    return (
        <div>
            <VisaBanner></VisaBanner>
            <VisaCanadaDetails></VisaCanadaDetails>
            <VisaBannerTwo></VisaBannerTwo>
            <ContactUs></ContactUs>
        </div>
    );
};

export default VisaCanada;