"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    Network,
} from "lucide-react"
import { Separator } from "../ui/separator"



export default function ContextData({ caseData }) {

    return (


        <TabsContent value="context_data" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Network className="h-5 w-5" />
                        Context Data
                    </CardTitle>
                    <CardDescription>Historical and semantic context analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {caseData?.context_data?.historical_context && (
                        <div>
                            <h3 className="font-semibold mb-4">Historical Context</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-sm mb-2">Similar Past Incidents:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                        {caseData?.context_data?.historical_context.similar_past_incidents?.map(
                                            (incident, idx) => (
                                                <li key={idx}>{incident}</li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-sm mb-2">Normal Behavior Pattern:</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {caseData?.context_data?.historical_context.normal_behavior_pattern}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-sm mb-2">Organizational Context:</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {caseData?.context_data?.historical_context.organizational_context}
                                    </p>
                                </div>

                                <div>
                                    <span className="font-medium text-sm">Is Anomalous: </span>
                                    <Badge variant={caseData?.context_data?.historical_context.is_anomalous ? "destructive" : "secondary"}>
                                        {caseData?.context_data?.historical_context.is_anomalous ? "Yes" : "No"}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    )}

                    <Separator />

                    {caseData?.context_data?.semantic_context && (
                        <div>
                            <h3 className="font-semibold mb-2">Semantic Context</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{caseData?.context_data?.semantic_context}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>


    )
}
