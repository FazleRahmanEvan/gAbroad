import React from 'react';
import StudyBanner from './StudyBanner/StudyBanner';
import StudyBannerTwo from './StudyBannerTwo/StudyBannerTwo';
import StudyCanadaCard from './StudyCanadaCard/StudyCanadaCard';
import StudyDetailsCanada from './StudyDetailsCanada/StudyDetailsCanada';

const Canada = () => {
    return (
       <div>
        <StudyBanner></StudyBanner>
        <StudyDetailsCanada></StudyDetailsCanada>
        <StudyBannerTwo></StudyBannerTwo>
        <StudyCanadaCard></StudyCanadaCard>
       </div>
    );
};

export default Canada;