import { useState } from "react";
import { Download, Search, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for demonstration
const mockReports = [
  {
    id: "SCAN-001",
    date: "2024-03-10",
    target: "example.com",
    severity: "critical",
    technicalReport: "#",
    nonTechnicalReport: "#",
  },
  {
    id: "SCAN-002",
    date: "2024-03-09",
    target: "192.168.1.1",
    severity: "high",
    technicalReport: "#",
    nonTechnicalReport: "#",
  },
  {
    id: "SCAN-003",
    date: "2024-03-08",
    target: "test-site.com",
    severity: "medium",
    technicalReport: "#",
    nonTechnicalReport: "#",
  },
  {
    id: "SCAN-004",
    date: "2024-03-07",
    target: "10.0.0.1",
    severity: "low",
    technicalReport: "#",
    nonTechnicalReport: "#",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "critical":
      return "bg-red-100 text-red-800";
    case "high":
      return "bg-orange-100 text-orange-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Reports = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleDownload = (reportType: string, scanId: string) => {
    console.log(`Downloading ${reportType} report for scan ${scanId}`);
    // Implement actual download functionality here
  };

  return (
    <div className="p-8 space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Scan Reports</CardTitle>
          <CardDescription>
            Access and download reports for all completed scans
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search by Scan ID, domain, or IP..."
                className="pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              Severity
            </Button>
          </div>

          {/* Table Section */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Scan ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Domain/IP Address</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Reports</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReports.map((report) => (
                  <TableRow key={report.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{report.id}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.target}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(
                          report.severity
                        )}`}
                      >
                        {report.severity.charAt(0).toUpperCase() + report.severity.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleDownload("technical", report.id)}
                          className="flex items-center gap-1"
                        >
                          <Download className="h-4 w-4" />
                          Technical
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleDownload("non-technical", report.id)}
                          className="flex items-center gap-1"
                        >
                          <Download className="h-4 w-4" />
                          Non-Technical
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;