import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    FileText,
    TrendingUp,
    DollarSign,
} from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'
import { CaseActionCard } from './case-action-card'


const RecommendedStrategy = ({ remediation_strategy }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Remediation Actions ({remediation_strategy?.recommended_strategy?.actions?.length || 0})
                    </CardTitle>
                    <CardDescription>Automated security response actions with detailed implementation guidance</CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px]">
                        <div className="space-y-4">
                            {remediation_strategy?.recommended_strategy?.actions?.map((action, index) => (
                                <CaseActionCard key={index} action={action} index={index} />
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5" />
                            Execution Strategy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-sm mb-2">Primary Actions</h4>
                            <div className="flex flex-wrap gap-1">
                                {remediation_strategy?.recommended_strategy?.remediation_strategy?.recommended_strategy?.primary_actions?.map((action, idx) => (
                                    <Badge key={idx} variant="default">
                                        {action}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm mb-2">Execution Sequence</h4>
                            <div className="space-y-2">
                                {remediation_strategy?.recommended_strategy?.remediation_strategy?.recommended_strategy?.execution_sequence?.map((step, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 bg-muted/50 rounded">
                                        <Badge variant="outline">Step {step.step}</Badge>
                                        <div className="flex gap-1">
                                            {step.actions.map((action, actionIdx) => (
                                                <Badge key={actionIdx} variant="secondary" className="text-xs">
                                                    {action}
                                                </Badge>
                                            ))}
                                        </div>
                                        {step.dependency && (
                                            <span className="text-xs text-muted-foreground">Depends on: {step.dependency}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm mb-2">Success Criteria</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {remediation_strategy?.recommended_strategy?.success_criteria?.map((criteria, idx) => (
                                    <li key={idx}>{criteria}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5" />
                            Cost-Risk Analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-muted/50 rounded">
                                <div className="text-lg font-bold">
                                    {remediation_strategy?.recommended_strategy?.cost_risk_analysis?.risk_mitigation_percentage}%
                                </div>
                                <div className="text-xs text-muted-foreground">Risk Reduction</div>
                            </div>
                            <div className="text-center p-3 bg-muted/50 rounded">
                                <div className="text-lg font-bold">{remediation_strategy?.recommended_strategy?.cost_risk_analysis?.total_cost_estimate}</div>
                                <div className="text-xs text-muted-foreground">Total Cost</div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm mb-2">Business Justification</h4>
                            <div className="space-y-2 text-sm">
                                {Object.entries(remediation_strategy?.recommended_strategy?.business_justification || {}).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                        <span className="font-medium capitalize">{key.replace("_", " ")}:</span>
                                        <span className="text-muted-foreground">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm mb-2">Fallback Strategies</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {remediation_strategy?.recommended_strategy?.fallback_strategies?.map((strategy, idx) => (
                                    <li key={idx}>{strategy}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default RecommendedStrategy

