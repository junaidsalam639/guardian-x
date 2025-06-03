"use client"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
    Shield,
    AlertTriangle,
    FileText,
    TrendingUp,
    Database,
    Network,
} from "lucide-react"
import Alerts from "./alerts"
import ContextData from "./context-data"
import Correlation from "./correlation"
import Logs from "./logs"
import ParsedLogs from "./parsed-logs"


export default function DetailedAnalysisTabs({ caseData }) {
    const [activeTab, setActiveTab] = useState("logs")

    const tabsConfig = [
        { id: "logs", label: "Logs", icon: <FileText className="h-4 w-4" /> },
        { id: "parsed_logs", label: "Parsed Logs", icon: <Database className="h-4 w-4" /> },
        { id: "alerts", label: "Alerts", icon: <AlertTriangle className="h-4 w-4" /> },
        { id: "context_data", label: "Context Data", icon: <Network className="h-4 w-4" /> },
        { id: "correlation_results", label: "Correlation", icon: <TrendingUp className="h-4 w-4" /> },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                    <h1 className="text-3xl font-bold">Complete Detailed Analysis Of Alerts</h1>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="mb-10">
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
                <Alerts caseData={caseData?.result_data} />
                <ContextData caseData={caseData?.result_data} />
                <Correlation caseData={caseData?.result_data} />
                <Logs caseData={caseData?.result_data} />
                <ParsedLogs caseData={caseData?.result_data} />
            </Tabs>
        </div>
    )
}
