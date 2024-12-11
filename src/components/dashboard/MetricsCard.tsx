import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const MetricsCard = ({
  title,
  value,
  icon,
  trend,
  className,
}: MetricsCardProps) => {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <div className="text-gray-600">{icon}</div>
        {trend && (
          <div
            className={cn(
              "text-sm font-medium",
              trend.isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {trend.value}%
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">{value}</h3>
        <p className="text-gray-600 text-sm mt-1">{title}</p>
      </div>
    </Card>
  );
};