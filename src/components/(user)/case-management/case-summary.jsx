"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { FileText } from "lucide-react"
import ReactMarkdown from 'react-markdown'

export default function CaseSummary({ caseData }) {
    return (
        <TabsContent value="case_summary" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Case Summary
                    </CardTitle>
                    <CardDescription>Complete incident report and summary</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                        <ReactMarkdown>
                            {caseData?.case_summary}
                        </ReactMarkdown>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Summary
                    </CardTitle>
                    <CardDescription>Complete incident report and summary</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                        <ReactMarkdown>
                            {caseData?.summary}
                        </ReactMarkdown>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}
