"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
    Shield,
    Search,
    AlertCircle,
    ShieldCheck,
    Workflow,
    FileText,
} from "lucide-react"
import Investigation from "./investigation/investigation"
import Remediation from "./remediation/remediation"
import { useGetCasesAgentOutputQuery } from "@/service/casesApi"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ResponseCard from "./response/response-card"


function CaseNotFoundError() {
    return (
        <>
            <Card className="bg-background border border-muted shadow-md rounded-2xl mt-6">
                <CardHeader className="flex flex-row items-center space-x-4">
                    <div className="p-2 bg-yellow-100 text-yellow-700 rounded-full">
                        <AlertCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-semibold">No Workflow Data Available</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                            We're unable to retrieve investigation or remediation details at the moment.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="pt-0 pl-16">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        This usually means the workflows are still processing or haven’t been triggered yet.
                        Please check back later — the data will appear here automatically once available.
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default function CaseTabs({ id }) {
    const [activeTab, setActiveTab] = useState("investigation_results");
    const { data, isLoading, error } = useGetCasesAgentOutputQuery(id);
    const tabsConfig = [
        { id: "investigation_results", label: "Investigation", icon: <Search className="h-4 w-4" /> },
        { id: "remediation", label: "Remediation", icon: <ShieldCheck className="h-4 w-4" /> },
        { id: "reponse_orchestration", label: "Response Orchestration", icon: <Workflow className="h-4 w-4" /> },
        { id: "final_summary", label: "Final Summary", icon: <FileText className="h-4 w-4" /> },
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

    const investigationData = investigation_workflow_launcher?.output_text?.output_data;
    const remediationData = remediation_workflow_launcher?.output_text?.output_data;
    const responseData = response_workflow_launcher?.output_text?.output_data;

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
                    <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 w-full">
                        {tabsConfig?.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="flex items-center justify-center gap-2 px-3 py-2 h-12 rounded-md text-xs font-medium
                                text-gray-700 bg-white hover:bg-gray-100 dark:bg-[#1f1f1f] dark:text-gray-200 dark:hover:bg-[#2a2a2a] data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black transition-all cursor-pointer">
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                <Separator className="mb-4" />
                <TabsContent className="space-y-4" value="investigation_results">
                    {!investigationData ? (
                        <CaseNotFoundError />
                    ) : (
                        <>
                            <Investigation investigation={investigationData} />
                        </>
                    )}
                </TabsContent>
                <TabsContent className="space-y-4" value="remediation">
                    {!remediationData ? (
                        <CaseNotFoundError />
                    ) : (
                        <>
                            <Remediation remediation_strategy={remediationData} />
                        </>
                    )}
                </TabsContent>
                <TabsContent className="space-y-4" value="reponse_orchestration">
                    {!responseData ? (
                        <CaseNotFoundError />
                    ) : (
                        <>
                            <ResponseCard response={responseData} />
                        </>
                    )}
                </TabsContent>
                <TabsContent className="space-y-4" value="final_summary">
                    <CaseNotFoundError />
                </TabsContent>
            </Tabs>
        </div>
    )
}
