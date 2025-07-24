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
    Loader,
    ArrowLeft,
    Proportions,
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import Investigation from "./investigation/investigation"
import Remediation from "./remediation/remediation"
import { useGetCasesAgentOutputQuery, useUpdateCaseStatusMutation } from "@/service/casesApi"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import OrchestrationCard from "./orchestration/orchestration-card"
import { useSelector } from "react-redux"
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Link from "next/link";
import FinalReport from "./final-report/final-report";


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
                            We're unable to retrieve details at the moment.
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
    const [status, setStatus] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [activeTab, setActiveTab] = useState("investigation_results");
    const { data, isLoading, error } = useGetCasesAgentOutputQuery(id);
    const [caseStatus, { isLoading: caseLoadingBtn }] = useUpdateCaseStatusMutation();
    const { case: caseItem } = useSelector((state) => state.singleCaseManagement);
    const { user } = useSelector((state) => state.auth);

    const investigation_workflow_launcher = data?.outputs?.find(
        output => output?.agent_name === "investigation_workflow_launcher"
    );
    const remediation_workflow_launcher = data?.outputs?.find(
        output => output?.agent_name === "remediation_workflow_launcher"
    );
    const response_workflow_launcher = data?.outputs?.find(
        output => output?.agent_name === "response_workflow_launcher"
    );
    const response_final_report = data?.outputs?.find(
        output => output?.agent_name === "final_report"
    );
    const response_human_approval_handler = data?.outputs?.find(
        output => output?.agent_name === "human_approval_handler"
    );

    const investigationData = investigation_workflow_launcher?.output_text?.output_data;
    const remediationData = remediation_workflow_launcher?.output_text?.output_data;
    const orchestrationData = response_workflow_launcher?.output_text?.output_data;
    const finalReportData = response_final_report?.output_text;
    const humanApprovalData = response_human_approval_handler?.output_text?.output_data?.approval_decision;

    const filteredTabsConfig = [
        investigationData && {
            id: "investigation_results",
            label: "Investigation",
            icon: <Search className="h-4 w-4" />,
            content: <Investigation investigation={investigationData} />,
        },
        remediationData && {
            id: "remediation",
            label: "Remediation",
            icon: <ShieldCheck className="h-4 w-4" />,
            content: <Remediation remediation_strategy={remediationData} />,
        },
        orchestrationData && {
            id: "orchestration",
            label: "Orchestration",
            icon: <Workflow className="h-4 w-4" />,
            content: <OrchestrationCard id={id} humanApprovalData={humanApprovalData} />,
        },
        finalReportData && {
            id: "finalReport",
            label: "Final Report",
            icon: <Proportions className="h-4 w-4" />,
            content: <FinalReport finalReport={finalReportData} />,
        },
    ].filter(Boolean);

    const handleStatusChange = (value) => {
        setStatus(value);
        setShowDialog(true);
    };

    const confirmClose = async () => {
        try {
            const response = await caseStatus({ caseId: caseItem?.case_id, status }).unwrap();
            toast.success(response?.message || "Status update successfully");
            setShowDialog(false);
            setStatus("");
        } catch (err) {
            toast.error(err?.data?.detail || "Something went wrong");
        }
    };

    if (isLoading) return <p className="p-6 text-gray-600 dark:text-gray-300">Loading cases...</p>;
    if (error) return <p className="p-6 text-red-500">Failed to load cases.</p>;

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
            <Link href="/user/case-management">
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-fit text-sm px-2 mb-4">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back
                </Button>
            </Link>
            <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-3">
                    <Shield className="h-8 w-8 text-blue-600 mt-1" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                            Case ID: {caseItem?.case_id}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                            {caseItem?.case_description}
                        </p>
                    </div>
                </div>
                {(caseItem?.status === "open" || caseItem?.status === "closed") && user?.role === "client" && (
                    <div>
                        <Select onValueChange={handleStatusChange} value={status}>
                            <SelectTrigger className="w-[200px] text-sm">
                                <SelectValue placeholder="Update Case" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem
                                    className="capitalize"
                                    value={caseItem?.status === "open" ? "closed" : "open"}
                                >
                                    {caseItem?.status === "open" ? "Closed" : "Open"}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>

            <Separator className="mb-4" />
            {filteredTabsConfig?.length === 0 ? (
                <CaseNotFoundError />
            ) : (
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="mb-8">
                        <TabsList className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 w-full">
                            {filteredTabsConfig.map((tab) => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="flex items-center justify-center gap-2 px-3 py-2 h-12 rounded-md text-xs font-medium text-gray-700 bg-white border border-black dark:border-white hover:bg-gray-100 dark:bg-[#1f1f1f] dark:text-gray-200 dark:hover:bg-[#2a2a2a] data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black transition-all cursor-pointer"
                                >
                                    {tab.icon}
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    <Separator className="mb-4" />
                    {filteredTabsConfig.map((tab) => (
                        <TabsContent key={tab.id} className="space-y-4" value={tab.id}>
                            {tab.content}
                        </TabsContent>
                    ))}
                </Tabs>
            )}

            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        You're about to close this case. This action may be final.
                    </div>
                    <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={() => setShowDialog(false)}>
                            Cancel
                        </Button>
                        <Button className="w-24" onClick={confirmClose} disabled={caseLoadingBtn}>
                            {caseLoadingBtn ? (
                                <div className="animate-spin">
                                    <Loader />
                                </div>
                            ) : (
                                "Confirm"
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

