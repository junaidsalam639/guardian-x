import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingUp, DollarSign } from "lucide-react";
import { ScrollArea } from '@/components/ui/scroll-area';
import { CaseActionCard } from './case-action-card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const RecommendedStrategy = ({ remediation_strategy }) => {
    const recommended = remediation_strategy?.recommended_strategy;
    const nested = recommended?.remediation_strategy?.recommended_strategy;

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Remediation Actions ({recommended?.actions?.length || 0})
                    </CardTitle>
                    <CardDescription>
                        Automated security response actions with detailed implementation guidance
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recommended?.actions?.length > 0 ? (
                            recommended.actions.map((action, index) => (
                                <CaseActionCard key={index} action={action} index={index} />
                            ))
                        ) : (
                            <div className="text-sm text-muted-foreground text-center py-6">
                                No remediation actions found.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="execution-strategy">
                                <AccordionTrigger className="text-base font-semibold">
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5" />
                                        Execution Strategy
                                    </CardTitle>
                                </AccordionTrigger>
                                <AccordionContent>
                                    {/* Primary Actions */}
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2">Primary Actions</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {nested?.primary_actions?.length > 0 ? (
                                                nested.primary_actions.map((action, idx) => (
                                                    <Badge key={idx} variant="default">
                                                        {action}
                                                    </Badge>
                                                ))
                                            ) : (
                                                <p className="text-sm text-muted-foreground">No primary actions available.</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Execution Sequence */}
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-sm mb-2">Execution Sequence</h4>
                                        <div className="space-y-2">
                                            {nested?.execution_sequence?.length > 0 ? (
                                                nested.execution_sequence.map((step, idx) => (
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
                                                            <span className="text-xs text-muted-foreground">
                                                                Depends on: {step.dependency}
                                                            </span>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-sm text-muted-foreground">No execution sequence defined.</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Success Criteria */}
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-sm mb-2">Success Criteria</h4>
                                        {recommended?.success_criteria?.length > 0 ? (
                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                {recommended.success_criteria.map((criteria, idx) => (
                                                    <li key={idx}>{criteria}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">No success criteria provided.</p>
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="cost-risk-analysis">
                                <AccordionTrigger className="text-base font-semibold">
                                    <CardTitle className="flex items-center gap-2">
                                        <DollarSign className="h-5 w-5" />
                                        Cost-Risk Analysis
                                    </CardTitle>
                                </AccordionTrigger>
                                <AccordionContent>
                                    {/* Risk & Cost Overview */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="text-center p-3 bg-muted/50 rounded">
                                            <div className="text-lg font-bold">
                                                {recommended?.cost_risk_analysis?.risk_mitigation_percentage ?? "N/A"}%
                                            </div>
                                            <div className="text-xs text-muted-foreground">Risk Reduction</div>
                                        </div>
                                        <div className="text-center p-3 bg-muted/50 rounded">
                                            <div className="text-lg font-bold">
                                                {recommended?.cost_risk_analysis?.total_cost_estimate ?? "N/A"}
                                            </div>
                                            <div className="text-xs text-muted-foreground">Total Cost</div>
                                        </div>
                                    </div>

                                    {/* Business Justification */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Business Justification</h4>
                                        {Object.keys(recommended?.business_justification || {}).length > 0 ? (
                                            Object.entries(recommended.business_justification).map(([key, value]) => (
                                                <div key={key} className="flex justify-between text-sm">
                                                    <span className="font-medium capitalize">{key.replace("_", " ")}:</span>
                                                    <span className="text-muted-foreground">{value}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-sm text-muted-foreground">No business justification available.</p>
                                        )}
                                    </div>

                                    {/* Fallback Strategies */}
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2">Fallback Strategies</h4>
                                        {recommended?.fallback_strategies?.length > 0 ? (
                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                {recommended.fallback_strategies.map((strategy, idx) => (
                                                    <li key={idx}>{strategy}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">No fallback strategies defined.</p>
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default RecommendedStrategy;
