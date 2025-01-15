import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountSettings } from "@/components/settings/AccountSettings";
import { ScanPreferences } from "@/components/settings/ScanPreferences";
import { ApiKeys } from "@/components/settings/ApiKeys";
import { Sidebar } from "@/components/dashboard/Sidebar";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 space-y-6 p-8 pt-6 ml-20 lg:ml-64">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account, scan preferences, and API integrations.
          </p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList>
            <TabsTrigger value="account">Account Settings</TabsTrigger>
            <TabsTrigger value="preferences">Scan Preferences</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <AccountSettings />
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <ScanPreferences />
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <ApiKeys />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;