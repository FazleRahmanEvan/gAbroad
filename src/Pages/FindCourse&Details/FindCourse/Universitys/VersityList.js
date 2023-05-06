import React, { useEffect, useState } from 'react';
import Universitys from './Universitys';
import CountryFilter from './CountryFilter';

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
        console.log(universities)
       
    }, [])
    console.log('u', universities)
    return (
        <div>
            <CountryFilter getCountries={country}></CountryFilter>
            <Universitys versity= {universities} />
        </div>
    );
};

export default VersityList;