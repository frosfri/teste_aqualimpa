
import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardIconProps {
  icon: React.ReactNode;
  title: string;
  to: string;
}

const DashboardIcon = ({ icon, title, to }: DashboardIconProps) => {
  return (
    <Link 
      to={to}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-primary mb-2">
        {icon}
      </div>
      <span className="text-sm text-center">{title}</span>
    </Link>
  );
};

export default DashboardIcon;
