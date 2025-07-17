import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    FileText,
} from "lucide-react"
import ReactMarkdown from 'react-markdown'

const Documents = ({ investigation }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Investigation Results
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px]">
                        <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                            <ReactMarkdown>
                                {investigation?.investigation_report}
                            </ReactMarkdown>
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </>
    )
}

export default Documents

