"use client"
import Documents from "./documents";
import RecommendedStrategy from "./recommended_strategy";
// import TrustScores from "./trust_scores";

export default function Remediation({ remediation_strategy }) {
    return (
        <>
           <Documents remediation_strategy={remediation_strategy} />
           <RecommendedStrategy remediation_strategy={remediation_strategy} />
           {/* <TrustScores remediation_strategy={remediation_strategy} /> */}
        </>
    )
}
