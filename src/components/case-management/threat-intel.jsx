"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    Target
} from "lucide-react"


export default function ThreatIntel({ caseData }) {

    return (
        <TabsContent value="threat_intel_data" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Threat Intelligence Data
                    </CardTitle>
                    <CardDescription>Intelligence analysis and IOC matching</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Overall Assessment</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseData?.threat_intel_data?.overall_assessment}
                        </p>
                    </div>

                    {caseData?.threat_intel_data?.intel_results && (
                        <div>
                            <h3 className="font-semibold mb-4">Intelligence Results</h3>
                            <div className="space-y-4">
                                {Object.entries(caseData?.threat_intel_data.intel_results).map(([alertId, intel]) => (
                                    <Card key={alertId}>
                                        <CardHeader>
                                            <CardTitle className="text-sm">{alertId}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {intel.matched_iocs && (
                                                    <div>
                                                        <span className="font-medium text-sm">Matched IOCs: </span>
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {intel.matched_iocs.map((ioc, idx) => (
                                                                <Badge key={idx} variant="destructive" className="text-xs font-mono">
                                                                    {ioc}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {intel.mitre_techniques && (
                                                    <div>
                                                        <span className="font-medium text-sm">MITRE Techniques: </span>
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {intel.mitre_techniques.map((technique, idx) => (
                                                                <Badge key={idx} variant="outline" className="text-xs">
                                                                    {technique}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {intel.threat_actors && (
                                                    <div>
                                                        <span className="font-medium text-sm">Threat Actors: </span>
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {intel.threat_actors.map((actor, idx) => (
                                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                                    {actor}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div>
                                                    <span className="font-medium text-sm">Confidence: </span>
                                                    <Badge variant="default">{intel.confidence}%</Badge>
                                                </div>

                                                {intel.recommendations && (
                                                    <div>
                                                        <span className="font-medium text-sm">Recommendations:</span>
                                                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                                                            {intel.recommendations.map((rec, idx) => (
                                                                <li key={idx}>{rec}</li>
                                                            ))}
                                                        </ul>
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
