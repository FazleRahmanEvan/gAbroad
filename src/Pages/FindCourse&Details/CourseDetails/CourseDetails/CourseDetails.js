import React from 'react';
import CourseTitle from '../CourseTitle/CourseTitle';
import Details from '../Details/Details';
import DetailsBanner from './DetailsBanner/DetailsBanner';

const CourseDetails = () => {
    return (
        <div>
            <CourseTitle></CourseTitle>
            <Details></Details>
            <DetailsBanner></DetailsBanner>
        </div>
    );
};

export default CourseDetails;