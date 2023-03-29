import React from 'react';
import EduBanner from '../EduBanner/EduBanner';
import EduBannerTwo from '../EduBannerTwo/EduBannerTwo';
import EduCanadaDetails from '../EduCanadaDetails/EduCanadaDetails';

const EduCanada = () => {
    return (
        <div>
            <EduBanner></EduBanner>
            <EduCanadaDetails></EduCanadaDetails>
            <EduBannerTwo></EduBannerTwo>
        </div>
    );
};

export default EduCanada;