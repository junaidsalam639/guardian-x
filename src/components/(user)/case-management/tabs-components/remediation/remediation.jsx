"use client"
import { TabsContent } from "@/components/ui/tabs"
import Documents from "./documents";
import RecommendedStrategy from "./recommended_strategy";
// import TrustScores from "./trust_scores";

export default function Remediation({ remediation_strategy }) {
    return (
        <TabsContent value="remediation" className="space-y-4">
           <Documents remediation_strategy={remediation_strategy} />
           <RecommendedStrategy remediation_strategy={remediation_strategy} />
           {/* <TrustScores remediation_strategy={remediation_strategy} /> */}
        </TabsContent>
    )
}
