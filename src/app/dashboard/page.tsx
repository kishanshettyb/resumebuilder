import React from 'react';
import Login from '../(auth)/login/page';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type Props = {};

export default async function Dashboard({}: Props) {
  const session = await getServerSession(authConfig);
  if (session === null) {
    return <Login />; // Component for admin users
  } else {
    return (
      <div className="container mx-auto">
        <div className="flex justify-between pt-20 mb-5">
          <div>
            <h1 className="text-3xl font-semibold dark:text-white">Documents</h1>
          </div>
          <div>
            <Button>
              <Plus className="mr-2 text-white dark:text-slate-950 h-4 w-4" />
              Create New
            </Button>
          </div>
        </div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex justify-start bg-green-50 dark:bg-slate-800 border rounded-none border-t-0 border-l-0 border-r-0 border-b-green-600">
            <TabsTrigger value="account">Resume</TabsTrigger>
            <TabsTrigger value="password">Cover Letter</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="py-3">
            <div className="grid grid-cols-3 gap-4">
              <div class=""></div>
              <div class=""></div>
              <div class=""></div>
            </div>
          </TabsContent>
          <TabsContent value="password" className="py-3">
            Cover Letter
          </TabsContent>
        </Tabs>
      </div>
    );
  }
}
