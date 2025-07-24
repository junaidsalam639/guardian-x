"use client"
import { Card, CardContent } from "@/components/ui/card"
import Documents from "../documents"
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText } from "lucide-react"


export default function FinalReport({ finalReport }) {
    return (
        <>
            <Card className="py-2">
                <CardContent>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="document">
                            <AccordionTrigger className="text-base font-semibold">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    Final Report
                                </div>
                            </AccordionTrigger>
                            <Documents documents={finalReport?.final_incident_report} />
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </>
    )
}
