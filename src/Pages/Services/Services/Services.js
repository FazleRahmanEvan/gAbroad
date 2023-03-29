import React from 'react';
import ContactUs from '../../Shared/ContactUs/ContactUs';
import AdmissionServices from '../AdmissionServices/AdmissionServices';
import CourseSelection from '../CourseSelection/CourseSelection';
import InteractiveSessions from '../InteractiveSessions/InteractiveSessions';
import PreparingPapers from '../PreparingPapers/PreparingPapers';
import ServicesBanner from '../ServicesBanner/ServicesBanner';
import StudentVisa from '../StudentVisa/StudentVisa';
import WorkPermit from '../WorkPermit/WorkPermit';

const Services = () => {
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <AdmissionServices></AdmissionServices>
            <CourseSelection></CourseSelection>
            <PreparingPapers></PreparingPapers>
            <InteractiveSessions></InteractiveSessions>
            <StudentVisa></StudentVisa>
            <WorkPermit></WorkPermit>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Services;