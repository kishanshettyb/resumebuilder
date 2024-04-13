import React from 'react';
import { Button } from './ui/button';
import { PrimaryMenu } from './menu/index';
import { ModeToggle } from './modeToggle';
import { authConfig } from '@/lib/auth';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Logout from './logout';

export default async function Navbar() {
  const session = await getServerSession(authConfig);
  const profile = session === null ? 'RS' : session.user.image;

  return (
    <div className="py-4 bg-white shadow-sm dark:bg-slate-950">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="flex justify-center items-cente">Resume</div>
        <div className="flex justify-center items-cente">
          <PrimaryMenu />
        </div>
        {session === null ? (
          <div className="flex justify-center items-cente">
            <ModeToggle />
            <Link href="../login">
              <Button variant="outline" className="mx-2">
                Login
              </Button>
            </Link>
            <Link href="../signup">
              <Button variant="default">Sign Up</Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <ModeToggle />
            <Link href="../dashboard">
              <Button className="mx-2">My Account</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={profile} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Logout />
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
