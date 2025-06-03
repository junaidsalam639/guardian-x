"use client"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
    Shield,
    FileText,
    Target,
    CheckCircle,
    Eye,
    Search,
    Settings,
    BarChart3,
    Brain,
    FileCheck,
    MessageSquare,
    Archive,
} from "lucide-react"
import Memory from "./memory"
import CaseSummary from "./case-summary"
import Decision from "./decision"
import Explanation from "./explanation"
import FactChacker from "./fact-chacker"
import Investigation from "./investigation"
import Remediation from "./remediation"
import ThreatIntel from "./threat-intel"
import Training from "./training"
import TrustScores from "./trust-scores"
import Overview from "./overview"


export default function CaseTabs({ caseData }) {
    const [activeTab, setActiveTab] = useState("overview");
    const caseDataJSON = caseData?.result_json ? JSON.parse(caseData?.result_json) : null;
    const createObject = { result_data: caseDataJSON || {} };

    const tabsConfig = [
        { id: "overview", label: "Overview", icon: <Eye className="h-4 w-4" /> },
        { id: "investigation_results", label: "Investigation", icon: <Search className="h-4 w-4" /> },
        { id: "threat_intel_data", label: "Threat Intel", icon: <Target className="h-4 w-4" /> },
        { id: "fact_checker_results", label: "Fact Checker", icon: <FileCheck className="h-4 w-4" /> },
        { id: "explanation", label: "Explanation", icon: <MessageSquare className="h-4 w-4" /> },
        { id: "decision", label: "Decision", icon: <Settings className="h-4 w-4" /> },
        { id: "remediation", label: "Remediation", icon: <CheckCircle className="h-4 w-4" /> },
        { id: "trust_scores", label: "Trust Scores", icon: <BarChart3 className="h-4 w-4" /> },
        { id: "training_signals", label: "Training", icon: <Brain className="h-4 w-4" /> },
        { id: "behavioral_memory", label: "Memory", icon: <Archive className="h-4 w-4" /> },
        { id: "case_summary", label: "Case Summary", icon: <FileText className="h-4 w-4" /> },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                    <h1 className="text-3xl font-bold">Complete Security Case Management</h1>
                    <p className="text-muted-foreground">
                        Comprehensive Security Incident Analysis for {caseData?.username} -{" "}
                        {new Date(caseData?.timestamp).toLocaleString()}
                    </p>
                </div>
            </div>
            <Separator className="mb-4" />
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="mb-20">
                    <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 w-full">
                        {tabsConfig.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="flex items-center justify-center gap-2 px-3 py-2 h-12 rounded-md text-xs font-medium text-gray-700 bg-white hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white transition-all cursor-pointer"
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                <Separator className="mb-4" />
                <Overview caseData={createObject?.result_data} />
                <Memory caseData={createObject?.result_data} />
                <CaseSummary caseData={createObject?.result_data} />
                <Decision caseData={createObject?.result_data} />
                <Explanation caseData={createObject?.result_data} />
                <FactChacker caseData={createObject?.result_data} />
                <Investigation caseData={createObject?.result_data} />
                <Remediation caseData={createObject?.result_data} />
                <ThreatIntel caseData={createObject?.result_data} />
                <Training caseData={createObject?.result_data} />
                <TrustScores caseData={createObject?.result_data} />
            </Tabs>
        </div>
    )
}
