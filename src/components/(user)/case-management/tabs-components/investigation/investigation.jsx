"use client"
import { TabsContent } from "@/components/ui/tabs"
import Documents from "./documents"
import Alerts from "./alerts"


export default function Investigation({ investigation }) {
    return (
        <TabsContent value="investigation_results" className="space-y-4">
            <Documents investigation={investigation} />
            <Alerts investigation={investigation} />
        </TabsContent>
    )
}
