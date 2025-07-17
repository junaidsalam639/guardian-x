"use client"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
    Shield,
    CheckCircle,
    Search,
} from "lucide-react"
import Investigation from "./investigation/investigation"
import Remediation from "./remediation/remediation"
import { useGetCasesAgentOutputQuery } from "@/service/casesApi"

export default function CaseTabs({ id }) {
    const [activeTab, setActiveTab] = useState("investigation_results");
    const { data, isLoading, error } = useGetCasesAgentOutputQuery(id);
    const tabsConfig = [
        { id: "investigation_results", label: "Investigation", icon: <Search className="h-4 w-4" /> },
        { id: "remediation", label: "Remediation", icon: <CheckCircle className="h-4 w-4" /> },
    ]

    const investigation_workflow_launcher = data?.outputs?.find(
        output => output?.agent_name === "investigation_workflow_launcher"
    );

    const remediation_workflow_launcher = data?.outputs?.find(
        output => output?.agent_name === "remediation_workflow_launcher"
    );

    const response_workflow_launcher = data?.outputs?.find(
        output => output?.agent_name === "response_workflow_launcher"
    );

    if (isLoading) return <p className="p-6 text-gray-600 dark:text-gray-300">Loading cases...</p>;
    if (error) return <p className="p-6 text-red-500">Failed to load cases.</p>;

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                    <h1 className="text-3xl font-bold">Complete Security Case Management</h1>
                </div>
            </div>
            <Separator className="mb-4" />
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="mb-8">
                    <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 w-full">
                        {tabsConfig?.map((tab) => (
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
                <Investigation investigation={investigation_workflow_launcher?.output_text?.output_data} />
                <Remediation remediation_strategy={remediation_workflow_launcher?.output_text?.output_data} />
            </Tabs>
        </div>
    )
}
