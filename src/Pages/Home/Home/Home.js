import React from 'react';
import ContactUs from '../../Shared/ContactUs/ContactUs';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import Institutes from '../Institutes/Institutes';

import StartBySorting from '../StartBySorting/StartBySorting';
import StudyDestination from '../StudyDestination/StudyDestination';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <StartBySorting></StartBySorting>
            <BannerTwo></BannerTwo>
            <StudyDestination></StudyDestination>
            <Institutes></Institutes>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;