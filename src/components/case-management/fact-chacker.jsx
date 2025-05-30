"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    FileCheck
} from "lucide-react"


export default function FactChacker({ caseData }) {

    return (

        <TabsContent value="fact_checker_results" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5" />
                        Fact Checker Results
                    </CardTitle>
                    <CardDescription>Verification of analysis findings against raw data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Overall Assessment</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseData?.fact_checker_results?.overall_assessment}
                        </p>
                    </div>

                    {caseData?.fact_checker_results?.verified_findings && (
                        <div>
                            <h3 className="font-semibold mb-4">
                                Verified Findings ({caseData?.fact_checker_results.verified_findings.length})
                            </h3>
                            <div className="space-y-4">
                                {caseData?.fact_checker_results.verified_findings?.map((finding, idx) => (
                                    <Card key={idx}>
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <Badge variant={finding.verification_status === "confirmed" ? "default" : "destructive"}>
                                                    {finding.verification_status}
                                                </Badge>
                                                <Badge variant="outline">Confidence: {finding.confidence}%</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-sm mb-1">Finding:</h4>
                                                    <p className="text-sm text-muted-foreground">{finding.finding}</p>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium text-sm mb-1">Evidence:</h4>
                                                    <div className="bg-muted p-2 rounded text-xs font-mono">{finding.evidence}</div>
                                                </div>

                                                {finding.notes && (
                                                    <div>
                                                        <h4 className="font-medium text-sm mb-1">Notes:</h4>
                                                        <p className="text-sm text-muted-foreground">{finding.notes}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {caseData?.fact_checker_results?.hallucinations_detected && (
                        <div>
                            <h3 className="font-semibold mb-2">Hallucinations Detected</h3>
                            {caseData?.fact_checker_results.hallucinations_detected.length === 0 ? (
                                <Badge variant="default">No hallucinations detected</Badge>
                            ) : (
                                <div className="space-y-2">
                                    {caseData?.fact_checker_results.hallucinations_detected.map((hallucination, idx) => (
                                        <Card key={idx}>
                                            <CardContent className="pt-4">
                                                <p className="text-sm text-destructive">{hallucination}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>


    )
}
