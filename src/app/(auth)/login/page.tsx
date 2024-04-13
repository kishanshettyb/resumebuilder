import { GoogleSignInButton } from '@/components/googleSignInButton';
import React from 'react';
import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {};

export default async function Login({}: Props) {
  const session = await getServerSession(authConfig);
  console.log('Session: ', session);
  if (session) return redirect('/');
  return (
    <div className="container">
      <h1 className="my-40 text-6xl font-bold text-center text-slate-900">Login</h1>
      <GoogleSignInButton />
    </div>
  );
}
