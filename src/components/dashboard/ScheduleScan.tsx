import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const ScheduleScan = () => {
  const [target, setTarget] = useState("");
  const [scanType, setScanType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target || !scanType) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Scan scheduled successfully");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 p-8 ml-20 lg:ml-64">
        <Card className="p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Schedule New Scan</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="target" className="text-sm font-medium">
                Target IP or URL
              </label>
              <Input
                id="target"
                placeholder="Enter IP address or website URL"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="scanType" className="text-sm font-medium">
                Scan Type
              </label>
              <Select value={scanType} onValueChange={setScanType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select scan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quick">Quick Scan</SelectItem>
                  <SelectItem value="full">Full Scan</SelectItem>
                  <SelectItem value="custom">Custom Scan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Schedule Scan
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};