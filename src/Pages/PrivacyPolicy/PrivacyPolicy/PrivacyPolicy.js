import React from 'react';
import PrivacyBanner from '../PrivacyBanner/PrivacyBanner';
import PrivacyCondition from '../PrivacyCondition/PrivacyCondition';

const PrivacyPolicy = () => {
    return (
        <div>
            <PrivacyBanner></PrivacyBanner>
            <PrivacyCondition></PrivacyCondition>
        </div>
    );
};

export default PrivacyPolicy;