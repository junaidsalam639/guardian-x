"use client"
import { FileText } from "lucide-react";
import RecommendedStrategy from "./recommended_strategy";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Documents from "../documents";

export default function Remediation({ remediation_strategy }) {
    return (
        <>
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
                            <Documents documents={remediation_strategy?.decision_document} />
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
            <RecommendedStrategy remediation_strategy={remediation_strategy} />
        </>
    )
}
