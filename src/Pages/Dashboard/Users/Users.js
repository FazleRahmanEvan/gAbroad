import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://gabroad-server.vercel.app/user',{
    method:'GET',
    headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));
if (isLoading) {
    return <Loading></Loading>
}
    return (
      <div className='mt-'>
            <h2 className="text-2xl mt-6 mb-8">All Users{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>email</th>
                            <th>Make Admin</th>
                            {/* <th>Remove</th> */}
                          
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index )=> <UserRow
                           key={user._id}
                           index={index}
                           refetch={refetch}
                           user={user}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;