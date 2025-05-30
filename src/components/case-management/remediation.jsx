"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    CheckCircle,
    XCircle,
    ChevronDown,
    ChevronRight
} from "lucide-react"


const JsonViewer = ({ data, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                    {title}
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
                <div className="bg-muted p-4 rounded-md">
                    <pre className="text-xs overflow-auto max-h-96">{JSON.stringify(data, null, 2)}</pre>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default function Remediation({ caseData }) {

    return (

        <TabsContent value="remediation" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Remediation Actions
                    </CardTitle>
                    <CardDescription>Executed and planned response actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {caseData?.remediation_plan && (
                        <div>
                            <h3 className="font-semibold mb-4">Remediation Plan</h3>
                            <div className="space-y-4">
                                {caseData?.remediation_plan.map((action, idx) => (
                                    <Card key={idx} className="border-l-4 border-l-blue-500">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">{action.method}</Badge>
                                                    <span className="font-mono text-sm">{action.api_endpoint}</span>
                                                </div>
                                            </div>
                                            <CardTitle className="text-base">Planned Endpoint: {action.api_endpoint}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-sm mb-1">Parameters:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                                        {Object.entries(action.parameters || {}).map(([key, value]) => (
                                                            <div key={key} className="flex justify-between p-2 bg-muted/50 rounded">
                                                                <span className="font-medium">{key}:</span>
                                                                <span className="text-muted-foreground">{String(value)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {action.expected_outcome && (
                                                    <div>
                                                        <h4 className="font-medium text-sm mb-1">Expected Outcome:</h4>
                                                        <p className="text-sm text-muted-foreground">{action.expected_outcome}</p>
                                                    </div>
                                                )}

                                                {action.rollback_procedure && (
                                                    <div>
                                                        <h4 className="font-medium text-sm mb-1">Rollback Procedure:</h4>
                                                        <p className="text-sm text-muted-foreground">{action.rollback_procedure}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}


                    {caseData?.remediation_actions && (
                        <div>
                            <h3 className="font-semibold mb-4">Executed Actions</h3>
                            <div className="space-y-4">
                                {caseData?.remediation_actions.map((action, idx) => (
                                    <Card key={idx} className="border-l-4 border-l-green-500">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant={action.execution_status === "success" ? "default" : "destructive"}>
                                                        {action.execution_status === "success" ? (
                                                            <CheckCircle className="h-3 w-3 mr-1" />
                                                        ) : (
                                                            <XCircle className="h-3 w-3 mr-1" />
                                                        )}
                                                        {action.execution_status?.toUpperCase()}
                                                    </Badge>
                                                    <span className="font-mono text-sm">{action.method}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {new Date(action.execution_time).toLocaleString()}
                                                </span>
                                            </div>
                                            <CardTitle className="text-base">{action.api_endpoint}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-sm mb-1">Parameters:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                                        {Object.entries(action.parameters || {}).map(([key, value]) => (
                                                            <div key={key} className="flex justify-between p-2 bg-muted/50 rounded">
                                                                <span className="font-medium">{key}:</span>
                                                                <span className="text-muted-foreground">{String(value)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {action.response && (
                                                    <div>
                                                        <h4 className="font-medium text-sm mb-1">Response:</h4>
                                                        <div className="bg-muted p-2 rounded text-xs">
                                                            <JsonViewer data={action.response} title="View Response" />
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

                    {caseData?.human_feedback && (
                        <div>
                            <h3 className="font-semibold mb-2">Human Feedback</h3>
                            <Badge variant={caseData?.human_feedback === "approved" ? "default" : "destructive"}>
                                {caseData?.human_feedback}
                            </Badge>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>
    )
}


