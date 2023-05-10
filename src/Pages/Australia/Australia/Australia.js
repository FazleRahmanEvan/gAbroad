import React from 'react';
import StudyBanner from './StudyBanner/StudyBanner';
import StudyDetailsAustralia from './StudyDetailsAustralia/StudyDetailsAustralia';
import StudyBannerTwo from './StudyBannerTwo/StudyBannerTwo' ;
import StudyAustraliaCard from './StudyAustraliaCard/StudyAustraliaCard' ;
const Australia = () => {
    return (
        <div>
            <StudyBanner/>
            <StudyDetailsAustralia/>
            <StudyBannerTwo/>
            <StudyAustraliaCard/>
        </div>
    );
};

export default Australia;