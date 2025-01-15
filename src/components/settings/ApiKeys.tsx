import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { AlertCircle, Copy, Key, Plus, Trash2 } from "lucide-react";

type ApiKey = {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
};

const mockApiKeys: ApiKey[] = [
  {
    id: "1",
    name: "Production API Key",
    key: "vg_prod_key_123456789",
    createdAt: "2024-02-15",
    lastUsed: "2024-02-20",
  },
  {
    id: "2",
    name: "Development API Key",
    key: "vg_dev_key_987654321",
    createdAt: "2024-02-10",
    lastUsed: "2024-02-19",
  },
];

export const ApiKeys = () => {
  const [apiKeys] = useState<ApiKey[]>(mockApiKeys);

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "API Key copied",
      description: "The API key has been copied to your clipboard.",
    });
  };

  const revokeKey = (id: string) => {
    toast({
      title: "API Key revoked",
      description: "The API key has been revoked successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">API Keys</h3>
          <p className="text-sm text-muted-foreground">
            Manage your API keys for integration with VulnGuard
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate New Key
        </Button>
      </div>

      <div className="rounded-md border bg-amber-50 p-4">
        <div className="flex items-center gap-3 text-amber-800">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm font-medium">
            Keep your API keys secure. They provide full access to your VulnGuard
            account.
          </p>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>API Key</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Used</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((apiKey) => (
              <TableRow key={apiKey.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-muted-foreground" />
                    {apiKey.name}
                  </div>
                </TableCell>
                <TableCell className="font-mono">{apiKey.key}</TableCell>
                <TableCell>{apiKey.createdAt}</TableCell>
                <TableCell>{apiKey.lastUsed}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(apiKey.key)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => revokeKey(apiKey.id)}
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};