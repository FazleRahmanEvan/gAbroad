import React from 'react';

const ApplicantsRow = ({index, item, refetch}) => {
  
    return (
        <tr>
        <th>{index+ 1}</th>
        <td>{item.email}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.address}</td>
        <td>{item.CountryResidence}</td>
        <td>{item.institution}</td>
        <td>{item.nationality}</td>
        <td>{item.course}</td>
        <td>{item.intakeYear}</td>
        
    </tr>
    );
};

export default ApplicantsRow;