"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Search
} from "lucide-react"

const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
        case "critical":
        case "high":
            return "destructive"
        case "medium":
            return "default"
        case "low":
            return "secondary"
        default:
            return "outline"
    }
}

export default function Investigation({ caseData }) {

    return (
        <TabsContent value="investigation_results" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Search className="h-5 w-5" />
                        Investigation Results
                    </CardTitle>
                    <CardDescription>Detailed analysis and threat assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Conclusion</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseData?.investigation_results?.conclusion}
                        </p>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Threat Level</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Badge variant={getSeverityColor(caseData?.investigation_results?.threat_level)} className="text-lg">
                                    {caseData?.investigation_results?.threat_level?.toUpperCase()}
                                </Badge>
                            </CardContent>
                        </Card>
                    </div>

                    {caseData?.investigation_results?.details && (
                        <div>
                            <h3 className="font-semibold mb-4">Alert Details</h3>
                            <div className="space-y-4">
                                {Object.entries(caseData?.investigation_results.details).map(([alertId, details]) => (
                                    <Card key={alertId}>
                                        <CardHeader>
                                            <CardTitle className="text-sm">{alertId}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="font-medium">Is Threat: </span>
                                                    <Badge variant={details?.is_threat ? "destructive" : "secondary"}>
                                                        {details?.is_threat ? "Yes" : "No"}
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <span className="font-medium">Confidence: </span>
                                                    <span>{details?.confidence}%</span>
                                                </div>
                                                <div className="col-span-full">
                                                    <span className="font-medium">Context: </span>
                                                    <p className="text-muted-foreground mt-1">{details?.context}</p>
                                                </div>
                                                {details?.entities_involved && (
                                                    <div className="col-span-full">
                                                        <span className="font-medium">Entities Involved: </span>
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {details?.entities_involved.map((entity, idx) => (
                                                                <Badge key={idx} variant="outline" className="text-xs">
                                                                    {entity}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>

    )
}
