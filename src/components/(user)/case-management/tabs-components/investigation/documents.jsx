import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getSeverityColor, getSeverityIcon } from "@/lib/get-color-icon-etc"
import {
    FileText,
} from "lucide-react"
import ReactMarkdown from 'react-markdown'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Documents = ({ investigation }) => {
    return (
        <>
            <Card className="py-2">
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="document">
                            <AccordionTrigger className="text-base font-semibold">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    Investigation Results
                                    <Badge variant={getSeverityColor(investigation?.threat_level)} className="flex items-center gap-1 w-fit">
                                        {getSeverityIcon(investigation?.threat_level)}
                                        {investigation?.threat_level?.toUpperCase()}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ScrollArea className="h-[600px] px-1">
                                    <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                                        <ReactMarkdown>
                                            {investigation?.investigation_report || "No documentation found."}
                                        </ReactMarkdown>
                                    </div>
                                </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </>
    )
}

export default Documents

