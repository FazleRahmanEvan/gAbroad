import React from 'react';
import AboutAbroad from '../AboutAbroad/AboutAbroad';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutBannerTwo from '../AboutBannerTwo/AboutBannerTwo';
import MissionVison from '../MissionVison/MissionVison';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import ContactUs from '../../Shared/ContactUs/ContactUs';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutAbroad></AboutAbroad>
            <MissionVison></MissionVison>
            <WhatWeDo></WhatWeDo>
            <AboutBannerTwo></AboutBannerTwo>
            <ContactUs></ContactUs>
        </div>
    );
};

export default AboutUs;