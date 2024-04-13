import React from 'react';

function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export default DashboardLayout;
