"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    TrendingUp
} from "lucide-react"


export default function Correlation({ caseData }) {

    return (
        <TabsContent value="correlation_results" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Correlation Results
                    </CardTitle>
                    <CardDescription>Event correlation and attack timeline analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {caseData?.correlation_results?.correlated_events && (
                        <div>
                            <h3 className="font-semibold mb-4">Correlated Events</h3>
                            <div className="space-y-4">
                                {caseData?.correlation_results?.correlated_events?.map((correlation, idx) => (
                                    <Card key={idx}>
                                        <CardHeader>
                                            <CardTitle className="text-sm">{correlation.correlation_type}</CardTitle>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="default">Confidence: {correlation.confidence}%</Badge>
                                                <div className="flex gap-1">
                                                    {correlation.alert_ids?.map((alertId, alertIdx) => (
                                                        <Badge key={alertIdx} variant="outline" className="text-xs">
                                                            {alertId}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{correlation.narrative}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {caseData?.correlation_results?.attack_timeline && (
                        <div>
                            <h3 className="font-semibold mb-4">Attack Timeline</h3>
                            <div className="space-y-3">
                                {caseData?.correlation_results?.attack_timeline.map((event, idx) => (
                                    <Card key={idx}>
                                        <CardContent className="pt-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <div className="space-y-1">
                                                    <div className="font-medium text-sm">{event.timestamp}</div>
                                                    <div className="text-sm">{event.event}</div>
                                                    <div className="text-xs text-muted-foreground">{event.significance}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {caseData?.correlation_results?.threat_storyline && (
                        <div>
                            <h3 className="font-semibold mb-2">Threat Storyline</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {caseData?.correlation_results?.threat_storyline}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>

    )
}
