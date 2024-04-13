'use client';
import React from 'react';
import { Button } from './ui/button';
import { PrimaryMenu } from './menu/index';
import { ModeToggle } from './modeToggle';

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-slate-950 shadow-sm py-4">
      <div className=" container mx-auto flex items-center justify-between">
        <div className="flex items-cente justify-center">Resume</div>
        <div className="flex items-cente justify-center">
          <PrimaryMenu />
        </div>
        <div className="flex items-cente justify-center">
          <ModeToggle />
          <Button variant="outline" className="mx-2">
            Login
          </Button>
          <Button variant="default">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
