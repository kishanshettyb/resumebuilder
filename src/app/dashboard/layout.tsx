'use client';
import NavbarDashboard from '@/components/navbarDashboard';
import React from 'react';
import { usePathname } from 'next/navigation';

function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname == '/dashboard/resumes/builder') {
    return (
      <div>
        <div className="bg-green-50 h-full"> {children}</div>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarDashboard />
        <div className="bg-green-50 h-full"> {children}</div>
      </div>
    );
  }
}

export default DashboardLayout;
