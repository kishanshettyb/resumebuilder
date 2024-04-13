import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

function layout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
