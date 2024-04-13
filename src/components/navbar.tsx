'use client';
import React from 'react';
import { Button } from './ui/button';
import { PrimaryMenu } from './menu';

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm py-4">
      <div className=" container mx-auto flex items-center justify-between">
        <div className="flex items-cente justify-center">Resume</div>
        <div className="flex items-cente justify-center">
          <PrimaryMenu />
        </div>
        <div className="flex items-cente justify-center">
          <Button variant="outline" className="mr-2">
            Login
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
