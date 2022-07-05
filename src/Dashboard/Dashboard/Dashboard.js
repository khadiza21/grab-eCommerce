import React from 'react';
import DashboardBanner from '../DashboardBanner/DashboardBanner';
import Sites from '../Sites/Sites/Sites';

const Dashboard = () => {
    return (
        <div className="bg-slate-800  pb-40">
          <DashboardBanner></DashboardBanner> 
          <Sites></Sites>
        </div>
    );
};

export default Dashboard;