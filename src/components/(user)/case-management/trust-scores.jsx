"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    BarChart3
} from "lucide-react"


export default function TrustScores({ caseData }) {

    return (
        <TabsContent value="trust_scores" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Trust Scores & Metrics
                    </CardTitle>
                    <CardDescription>System confidence and performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm">Detection Trust</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{caseData?.trust_scores?.detection_trust?.toFixed(1)}%</div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: `${caseData?.trust_scores?.detection_trust}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm">Investigation Trust</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{caseData?.trust_scores?.investigation_trust?.toFixed(1)}%</div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                    <div
                                        className="bg-green-600 h-2 rounded-full"
                                        style={{ width: `${caseData?.trust_scores?.investigation_trust}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm">Remediation Trust</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{caseData?.trust_scores?.remediation_trust?.toFixed(1)}%</div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                    <div
                                        className="bg-orange-600 h-2 rounded-full"
                                        style={{ width: `${caseData?.trust_scores?.remediation_trust}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm">Overall Trust</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{caseData?.trust_scores?.overall_trust?.toFixed(1)}%</div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                    <div
                                        className="bg-purple-600 h-2 rounded-full"
                                        style={{ width: `${caseData?.trust_scores?.overall_trust}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Autonomy Level</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Badge variant="outline" className="text-lg">
                                    {caseData?.trust_scores?.autonomy_level?.toUpperCase()}
                                </Badge>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Last updated:{" "}
                                    {caseData?.trust_scores?.last_updated
                                        ? new Date(caseData?.trust_scores.last_updated).toLocaleString()
                                        : "N/A"}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}
