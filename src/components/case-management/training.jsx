"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    ChevronDown,
    ChevronRight,
    Brain,
} from "lucide-react"
import ReactMarkdown from 'react-markdown'

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


export default function Training({ caseData }) {

    return (
        <TabsContent value="training_signals" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5" />
                        Training Signals
                    </CardTitle>
                    <CardDescription>Machine learning training data and improvement recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {caseData?.training_signals?.raw_data && (
                        <div>
                            <h3 className="font-semibold mb-4">Raw Training Data</h3>
                            <JsonViewer data={caseData?.training_signals.raw_data} title="View Raw Training Data" />
                        </div>
                    )}

                    {caseData?.training_signals?.improvement_recommendations && (
                        <div>
                            <h3 className="font-semibold mb-2">Improvement Recommendations</h3>
                            <div className="bg-muted p-4 rounded-md">
                                <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                                    <ReactMarkdown>
                                        {caseData?.training_signals.improvement_recommendations}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>
    )
}
