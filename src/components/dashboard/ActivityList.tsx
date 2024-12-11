import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: number;
  type: "completed" | "in-progress" | "warning";
  title: string;
  timestamp: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: "completed",
    title: "Network scan completed",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "in-progress",
    title: "Vulnerability assessment in progress",
    timestamp: "5 minutes ago",
  },
  {
    id: 3,
    type: "warning",
    title: "High-risk vulnerability detected",
    timestamp: "10 minutes ago",
  },
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "completed":
      return <CheckCircle2 className="text-green-500" size={20} />;
    case "in-progress":
      return <Clock className="text-blue-500" size={20} />;
    case "warning":
      return <AlertTriangle className="text-yellow-500" size={20} />;
  }
};

export const ActivityList = () => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {getActivityIcon(activity.type)}
            <div>
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};