import React from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Dashboard;
