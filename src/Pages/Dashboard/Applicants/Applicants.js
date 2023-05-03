import React, { useEffect, useState } from 'react';
import ApplicantsRow from './ApplicantsRow';

const Applicants = () => {
    const [data, setData]= useState([])
    const [refetch, setFetch] = useState(false);

    
  const handleFetch = () => {
    setFetch((prev)=>!prev)
  }

useEffect(()=> {
    fetch('https://gabroad-server.vercel.app/applicant')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  },[refetch])
    return (
        <div>
        <div class="overflow-x-auto mt-16">
<table class="table w-full">

<thead>
<tr>
  <th>No.</th>
  <th>Email</th>
  <th>First Name</th>
  <th>Last Name</th>  
  <th>Address </th>
  <th>Country of residence</th>
  <th>Institution Name</th>
  <th>Nationality</th>
  <th>Course Name</th>
  <th>Interested intake year</th>
  <th>Documents</th>
</tr>
</thead>
<tbody>

     
{
  data?.map((item, index)=> (
   
      <ApplicantsRow
      key={index}
      item={item}
      index={index}
      refetch={handleFetch}
      />
      
  ))
}

</tbody>
</table>
</div>
  </div>
    );
};

export default Applicants;