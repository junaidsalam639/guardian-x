import ReactMarkdown from 'react-markdown'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'

const Documents = ({ remediation_strategy }) => {
    return (
        <Card className="py-2">
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="document">
                        <AccordionTrigger className="text-base font-semibold">
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Remediation Actions
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ScrollArea className="h-[600px] px-1">
                                <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                                    <ReactMarkdown>
                                        {remediation_strategy?.decision_document || "No documentation found."}
                                    </ReactMarkdown>
                                </div>
                            </ScrollArea>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default Documents
