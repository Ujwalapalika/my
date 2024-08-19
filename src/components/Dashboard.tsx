import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import ThreeDBackground from './ThreeDBackground';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
      <ThreeDBackground />
    </div>
  );
};

export default Dashboard;

