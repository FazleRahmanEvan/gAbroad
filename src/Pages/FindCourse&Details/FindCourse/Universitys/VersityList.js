import React, { useEffect, useState } from 'react';
import Universitys from './Universitys';
import CountryFilter from './CountryFilter';
import VersityFilter from './VersityFilter';

const VersityList = () => {
    const [universities, setUniversities] = useState([]);
    const [defaultList, setDefaultList] = useState([]);

    function country(checkedCountries){
        // console.log(checkedCountries);  
        if (checkedCountries.length === 0) {
            setUniversities(defaultList);
            return;
        }           

        const list = [...defaultList];
        const filteredCountries = list.filter((country) => {
        if (checkedCountries.includes(country.countryName.toLowerCase())) return true;
            return false;
        });
    
        // console.log('cc', checkedCountries);
        setUniversities(filteredCountries);
    }

    useEffect(()=>{
        fetch('university.json')
        .then(res => res.json())
        .then(data => {
            setUniversities(data);
            setDefaultList(data);
        });
        // console.log(universities)
       
    }, [])
    // console.log('u', universities)
    return (
        <div>
            <div className='lg:ml-72 lg:flex mt-16 mb-28 '>
             <CountryFilter getCountries={country}></CountryFilter>
            <VersityFilter/>
            </div>
            <Universitys versity= {universities} />
        </div>
    );
};

export default VersityList;