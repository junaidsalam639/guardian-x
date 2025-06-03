"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Globe,
    Database,
} from "lucide-react"

export default function ParsedLogs({ caseData }) {

    return (
        <TabsContent value="parsed_logs" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        Parsed Security Logs ({caseData?.parsed_logs?.length || 0} entries)
                    </CardTitle>
                    <CardDescription>Processed and structured log entries</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px]">
                        <div className="space-y-4">
                            {caseData?.parsed_logs?.map((log, index) => (
                                <Card key={index} className="border-l-4 border-l-green-500">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">Rule {log?.rule_id}</Badge>
                                                <span className="text-sm text-muted-foreground">
                                                    {new Date(log?.timestamp).toLocaleString()}
                                                </span>
                                            </div>
                                            {log?.raw?.GeoLocation?.country_name && (
                                                <div className="flex items-center gap-1">
                                                    <Globe className="h-4 w-4" />
                                                    <span className="text-sm">{log?.raw.GeoLocation.country_name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <CardTitle className="text-base">{log?.description}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="space-y-3">
                                            <div className="bg-muted p-3 rounded-md">
                                                <code className="text-sm break-all">{log?.full_log}</code>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                <div className="space-y-2">
                                                    <h4 className="font-medium">Basic Info</h4>
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between">
                                                            <span>Username:</span>
                                                            <span className="font-mono">{log?.username}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Location:</span>
                                                            <span className="font-mono">{log?.location}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Event Type:</span>
                                                            <span className="font-mono">{log?.event_type || "N/A"}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {log?.raw?.data && (
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium">Source Data</h4>
                                                        <div className="space-y-1">
                                                            {Object.entries(log?.raw.data)
                                                                .slice(0, 5)
                                                                .map(([key, value]) => (
                                                                    <div key={key} className="flex justify-between">
                                                                        <span>{key}:</span>
                                                                        <span className="font-mono text-xs">{String(value)}</span>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {log?.raw?.GeoLocation && (
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium">Geolocation</h4>
                                                        <div className="space-y-1">
                                                            <div className="flex justify-between">
                                                                <span>Country:</span>
                                                                <span>{log?.raw.GeoLocation.country_name}</span>
                                                            </div>
                                                            {log?.raw.GeoLocation.location && (
                                                                <>
                                                                    <div className="flex justify-between">
                                                                        <span>Latitude:</span>
                                                                        <span className="font-mono">{log?.raw.GeoLocation.location.lat}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span>Longitude:</span>
                                                                        <span className="font-mono">{log?.raw.GeoLocation.location.lon}</span>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </TabsContent>


    )
}
