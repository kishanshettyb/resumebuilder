'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

type Props = {};

function Logout({}: Props) {
  return (
    <div className="font-normal text-center">
      <Button className="w-full" variant="outline" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
}

export default Logout;
