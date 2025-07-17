import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    FileText,
} from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'

const Documents = ({ remediation_strategy }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Remediation Actions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px]">
                        <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                            <ReactMarkdown>
                                {remediation_strategy?.decision_document}
                            </ReactMarkdown>
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </>
    )
}

export default Documents

