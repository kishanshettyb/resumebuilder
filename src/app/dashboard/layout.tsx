import NavbarDashboard from '@/components/navbarDashboard';
import React from 'react';

function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarDashboard />
      <div className="bg-green-50 h-full"> {children}</div>
    </div>
  );
}

export default DashboardLayout;
