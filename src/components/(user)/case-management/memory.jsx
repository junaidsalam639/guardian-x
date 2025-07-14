"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import {
    Archive,
} from "lucide-react"


export default function Memory({ caseData }) {

    return (

        <TabsContent value="behavioral_memory" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Archive className="h-5 w-5" />
                        Behavioral Memory
                    </CardTitle>
                    <CardDescription>System behavioral patterns and memory storage</CardDescription>
                </CardHeader>
                <CardContent>
                    {caseData?.behavioral_memory && Object.keys(caseData?.behavioral_memory)?.length > 0 ? (
                        <div className="space-y-4">
                            {Object.entries(caseData?.behavioral_memory).map(([entity, memory]) => (
                                <Card key={entity}>
                                    <CardHeader>
                                        <CardTitle className="text-sm font-mono">{entity}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <h4 className="font-medium mb-1">Normal IPs:</h4>
                                                <div className="text-muted-foreground">{memory?.normal_ips?.length || 0} entries</div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-1">Common Actions:</h4>
                                                <div className="text-muted-foreground">
                                                    {Object.keys(memory?.common_actions || {})?.length} entries
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-1">Alert History:</h4>
                                                <div className="text-muted-foreground">{memory?.alert_history?.length || 0} entries</div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <span className="text-sm font-medium">Last Update: </span>
                                            <span className="text-sm text-muted-foreground">
                                                {memory?.last_update ? new Date(memory?.last_update).toLocaleString() : "N/A"}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <Archive className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">No behavioral memory data available</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>


    )
}
