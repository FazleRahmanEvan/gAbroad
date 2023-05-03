import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <h2 className='text-4xl font-bold text-indigo-800 mb-7'>Dashboard</h2>
         <Outlet></Outlet>
         
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48  bg-blue-900 text-base-content ">
          
            <li className='text-white text-xl font-medium mt-20'><Link to="/adminDashboard/users">Users</Link></li>
            <li className='text-white text-xl font-medium mt-20'><Link to="/adminDashboard/applicants">Applicants</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;