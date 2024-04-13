import React from 'react';
import Login from '../(auth)/login/page';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';

type Props = {};

export default async function Dashboard({}: Props) {
  const session = await getServerSession(authConfig);

  if (session === null) {
    return <Login />; // Component for admin users
  } else {
    return <div>Dashboard</div>;
  }
}
