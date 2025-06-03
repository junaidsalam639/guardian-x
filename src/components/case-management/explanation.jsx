"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import {
    MessageSquare,
} from "lucide-react"
import ReactMarkdown from 'react-markdown'

export default function Explanation({ caseData }) {
    return (
        <TabsContent value="explanation" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Plain Language Explanation
                    </CardTitle>
                    <CardDescription>Human-readable summary of the security analysis</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                        <ReactMarkdown>
                            {caseData?.explanation}
                        </ReactMarkdown>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}
