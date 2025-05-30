import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const LogTable = ({ logs }) => {
    return (
        <Card className="shadow-md my-4">
            <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg font-semibold">Logs Management</CardTitle>
            </CardHeader>

            <CardContent className="p-0 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Level</TableHead>
                            <TableHead>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs?.map((log) => (
                            <TableRow key={log?.id}>
                                <TableCell>{log?.id}</TableCell>
                                <TableCell>{new Date(log?.timestamp)?.toLocaleString()}</TableCell>
                                <TableCell>{log?.level}</TableCell>
                                <TableCell>{log?.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default LogTable;
