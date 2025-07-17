import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Eye,
    CheckCircle,
} from "lucide-react"


const TrustScores = ({ remediation_strategy }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Trust Assessment
                    </CardTitle>
                    <CardDescription>AI system confidence and reliability metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {Object.entries(remediation_strategy?.trust_scores?.trust_assessment || {}).map(([key, value]) => (
                            <Card key={key}>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-xs capitalize">{key.replace("_", " ")}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xl font-bold">{value}%</div>
                                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${value}%` }} />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-l-green-500">
                            <CardHeader>
                                <CardTitle className="text-base text-green-600">Positive Factors</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    {remediation_strategy?.trust_scores?.trust_factors?.positive_factors?.map((factor, idx) => (
                                        <li key={idx} className="text-muted-foreground">
                                            {factor}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-orange-500">
                            <CardHeader>
                                <CardTitle className="text-base text-orange-600">Risk Factors</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    {remediation_strategy?.trust_scores?.trust_factors?.risk_factors?.map((factor, idx) => (
                                        <li key={idx} className="text-muted-foreground">
                                            {factor}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Autonomy Recommendations</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <span className="font-medium text-sm">Current Level:</span>
                                    <Badge variant="outline" className="ml-2">
                                        {remediation_strategy?.trust_scores?.autonomy_recommendations?.current_level}
                                    </Badge>
                                </div>
                                <div>
                                    <span className="font-medium text-sm">Recommended Level:</span>
                                    <Badge variant="default" className="ml-2">
                                        {remediation_strategy?.trust_scores?.autonomy_recommendations?.recommended_level}
                                    </Badge>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-2">Reasoning</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {remediation_strategy?.trust_scores?.autonomy_recommendations?.reasoning}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-2">Human Oversight Required</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {remediation_strategy?.trust_scores?.autonomy_recommendations?.human_oversight_required?.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Confidence Intervals</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(remediation_strategy?.trust_scores?.confidence_intervals || {}).map(([key, interval]) => (
                                    <div key={key} className="space-y-2">
                                        <h4 className="font-medium text-sm capitalize">{key.replace("_", " ")}</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Min: {interval.min}%</span>
                                            <div className="flex-1 bg-muted rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${interval.min}%` }} />
                                            </div>
                                            <span className="text-sm">Max: {interval.max}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    {remediation_strategy?.trust_scores?.calibration_notes && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Calibration Notes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">{remediation_strategy?.trust_scores.calibration_notes}</p>
                            </CardContent>
                        </Card>
                    )}
                    {remediation_strategy?.completed_at && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Analysis Completed</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">{new Date(remediation_strategy.completed_at).toLocaleString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default TrustScores

