import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getMethodColor } from "@/lib/get-color-icon-etc"
import { AlertTriangle, ChevronDown, ChevronRight, Code, FileText, Settings, Target } from "lucide-react"
import { useState } from "react"

const CodeBlock = ({ code }) => {
    return (
        <div className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
                <code>{code}</code>
            </pre>
        </div>
    )
}

export const CaseActionCard = ({ action, index }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline">Action {index + 1}</Badge>
                        <Badge variant={getMethodColor(action.method)}>{action.method}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </Button>
                </div>
                <CardTitle className="text-base font-mono">{action.api_endpoint}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Parameters
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {Object.entries(action.parameters).map(([key, value]) => (
                                <div key={key} className="flex justify-between p-2 bg-muted/50 rounded">
                                    <span className="font-medium text-sm">{key}:</span>
                                    <span className="text-sm text-muted-foreground font-mono">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Instructions
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {action.instructions.map((instruction, idx) => (
                                <li key={idx}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Expected Outcome
                        </h4>
                        <p className="text-sm text-muted-foreground bg-green-50 p-3 rounded border-l-4 border-l-green-500">
                            {action.expected_outcome}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Rollback Procedure
                        </h4>
                        <p className="text-sm text-muted-foreground bg-orange-50 p-3 rounded border-l-4 border-l-orange-500">
                            {action.rollback_procedure}
                        </p>
                    </div>
                    {isExpanded && (
                        <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                <Code className="h-4 w-4" />
                                Code Sample
                            </h4>
                            <CodeBlock code={action.code_sample} />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
