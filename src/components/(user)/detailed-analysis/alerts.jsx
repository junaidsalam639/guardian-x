"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
} from "lucide-react"
import { getSeverityColor, getSeverityIcon } from "@/lib/get-color-icon-etc"

export default function Alerts({ caseData }) {
  const alerts = caseData?.alerts || []
  return (
    <TabsContent value="alerts" className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Security Alerts ({alerts.length})
          </CardTitle>
          <CardDescription>
            Alerts displayed in a responsive ShadCN table
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alert ID</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Source IP</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Related Logs</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts?.map((alert, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono">{alert?.alert_id}</TableCell>
                    <TableCell>
                      <Badge variant={getSeverityColor(alert?.severity)} className="flex items-center gap-1 w-fit">
                        {getSeverityIcon(alert?.severity)}
                        {alert?.severity?.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>{alert?.description}</TableCell>
                    <TableCell>{alert?.source_ip || "-"}</TableCell>
                    <TableCell>{alert?.username || "-"}</TableCell>
                    <TableCell>{alert?.related_log_entries?.length || 0}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(alert?.timestamp).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}
