import React from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './modeToggle';
import { authConfig } from '@/lib/auth';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Logout from './logout';
import { Settings, User } from 'lucide-react';

export default async function NavbarDashboard() {
  const session = await getServerSession(authConfig);
  const profile = session === null ? 'RS' : session.user.image;
  const name = session === null ? 'RS' : session.user.name;
  const email = session === null ? 'RS' : session.user.email;

  return (
    <div className="py-4 bg-white shadow-sm dark:bg-slate-950">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="flex justify-center items-cente">Resume</div>
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
          <div className="flex items-center justify-center gap-2">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={profile} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuLabel>
                  <div className="flex items-center justify-start gap-2">
                    <div>
                      <Avatar>
                        <AvatarImage src={profile} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p>{name}</p>
                      <p className="text-sm font-light text-slate-500">{email}</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

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
