"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    Settings,
} from "lucide-react"


export default function Decision({ caseData }) {

    return (
        <TabsContent value="decision" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Decision Analysis
                    </CardTitle>
                    <CardDescription>Automated decision making and reasoning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {caseData?.decision && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Recommended Action</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Badge variant="default" className="text-sm">
                                            {caseData?.decision?.action}
                                        </Badge>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Target Host</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <span className="font-mono text-sm">{caseData?.decision?.parameters?.target_host}</span>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Description</h3>
                                <p className="text-sm text-muted-foreground">{caseData?.decision?.parameters?.description}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Justification</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{caseData?.decision?.justification}</p>
                            </div>

                            {caseData?.decision?.reasoning_path && (
                                <div>
                                    <h3 className="font-semibold mb-4">Reasoning Path</h3>
                                    <div className="space-y-3">
                                        {caseData?.decision?.reasoning_path.map((step, idx) => (
                                            <Card key={idx}>
                                                <CardHeader>
                                                    <CardTitle className="text-sm">{step.thought}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                            <h4 className="font-medium text-green-600 mb-1">Pros:</h4>
                                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                                {step.pros?.map((pro, proIdx) => (
                                                                    <li key={proIdx}>{pro}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-red-600 mb-1">Cons:</h4>
                                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                                {step.cons?.map((con, conIdx) => (
                                                                    <li key={conIdx}>{con}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <h4 className="font-medium mb-1">Evaluation:</h4>
                                                        <p className="text-sm text-muted-foreground">{step.evaluation}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>

    )
}
