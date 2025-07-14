"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    FileText,
    Globe,
} from "lucide-react"


export default function Logs({ caseData }) {

    return (
        <TabsContent value="logs" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Raw Security Logs ({caseData?.logs?.length || 0} entries)
                    </CardTitle>
                    <CardDescription>Original security event logs with complete metadata</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px]">
                        <div className="space-y-4">
                            {caseData?.logs?.map((log, index) => (
                                <Card key={index} className="border-l-4 border-l-blue-500">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">Rule {log.rule_id}</Badge>
                                                <span className="text-sm text-muted-foreground">
                                                    {new Date(log.timestamp).toLocaleString()}
                                                </span>
                                            </div>
                                            {log.raw?.GeoLocation?.country_name && (
                                                <div className="flex items-center gap-1">
                                                    <Globe className="h-4 w-4" />
                                                    <span className="text-sm">{log.raw.GeoLocation.country_name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <CardTitle className="text-base">{log.description}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="space-y-3">
                                            <div className="bg-muted p-3 rounded-md">
                                                <code className="text-sm break-all">{log.full_log}</code>
                                            </div>

                                            {log.raw?.data && (
                                                <div className="space-y-2">
                                                    <h4 className="font-medium text-sm">Extracted Data:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                                        {Object.entries(log.raw.data).map(([key, value]) => (
                                                            <div key={key} className="flex justify-between p-2 bg-muted/50 rounded">
                                                                <span className="font-medium">{key}:</span>
                                                                <span className="text-muted-foreground font-mono">{String(value)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {log.raw?.rule && (
                                                <div className="space-y-2">
                                                    <h4 className="font-medium text-sm">Rule Information:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                                        <div className="flex justify-between p-2 bg-muted/50 rounded">
                                                            <span className="font-medium">Level:</span>
                                                            <span className="text-muted-foreground">{log.raw.rule.level}</span>
                                                        </div>
                                                        <div className="flex justify-between p-2 bg-muted/50 rounded">
                                                            <span className="font-medium">Fired Times:</span>
                                                            <span className="text-muted-foreground">{log.raw.rule.firedtimes}</span>
                                                        </div>
                                                        {log.raw.rule.groups && (
                                                            <div className="col-span-full p-2 bg-muted/50 rounded">
                                                                <span className="font-medium">Groups: </span>
                                                                <div className="flex flex-wrap gap-1 mt-1">
                                                                    {log.raw.rule.groups.map((group, idx) => (
                                                                        <Badge key={idx} variant="secondary" className="text-xs">
                                                                            {group}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {log.raw.rule.mitre && (
                                                            <div className="col-span-full p-2 bg-muted/50 rounded">
                                                                <span className="font-medium">MITRE ATT&CK: </span>
                                                                <div className="space-y-1 mt-1">
                                                                    {log.raw.rule.mitre.technique?.map((tech, idx) => (
                                                                        <Badge key={idx} variant="outline" className="text-xs mr-1">
                                                                            {tech} ({log.raw.rule.mitre.id?.[idx]})
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
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
