"use client";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Loader, ThumbsDown, ThumbsUp, Workflow } from "lucide-react";
import { useApprovalCaseOrchestrationMutation } from "@/service/casesApi";

const OrchestrationCard = ({ id, humanApprovalData }) => {
    const [decision, setDecision] = useState(humanApprovalData || "");
    const [approvalCase, { isLoading }] = useApprovalCaseOrchestrationMutation();

    const handleConfirm = async () => {
        try {
            const response = await approvalCase({ caseId: id, decision }).unwrap();
            toast.success(response?.message || "Status update successfully");
        } catch (err) {
            toast.error(err?.data?.detail || "Something went wrong");
        }
    };

    return (
        <>
            <Card className={`shadow-md border border-gray-200 dark:border-gray-700 ${humanApprovalData ? 'pointer-events-none opacity-80' : ''}`}>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg font-bold">
                        <Workflow className="h-5 w-5 text-blue-600" />
                        Decision
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 text-sm">
                    <RadioGroup value={decision} onValueChange={setDecision} className="space-y-3">
                        <div
                            onClick={() => setDecision("approve")}
                            className={`flex items-center space-x-3 p-3 rounded-md border cursor-pointer transition
                            ${decision === "approve" ? "border-green-600 bg-green-50 dark:bg-green-900/20" : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
                            <RadioGroupItem value="approve" id="approve" />
                            <label htmlFor="approve" className="flex items-center gap-2 cursor-pointer">
                                <ThumbsUp className="h-4 w-4 text-green-600" />
                                <span className="font-medium text-green-700 dark:text-green-400">Approve</span>
                            </label>
                        </div>

                        <div
                            onClick={() => setDecision("reject")}
                            className={`flex items-center space-x-3 p-3 rounded-md border cursor-pointer transition
                            ${decision === "reject" ? "border-red-600 bg-red-50 dark:bg-red-900/20" : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
                            <RadioGroupItem value="reject" id="reject" />
                            <label htmlFor="reject" className="flex items-center gap-2 cursor-pointer">
                                <ThumbsDown className="h-4 w-4 text-red-600" />
                                <span className="font-medium text-red-700 dark:text-red-400">Reject</span>
                            </label>
                        </div>
                    </RadioGroup>

                    <Button
                        onClick={handleConfirm}
                        disabled={!decision || isLoading}
                        className="mt-2 w-40 float-end">
                        {isLoading ? (
                            <div className="animate-spin">
                                <Loader />
                            </div>
                        ) : (
                            "Confirm"
                        )}
                    </Button>
                </CardContent>
            </Card>
        </>
    );
};

export default OrchestrationCard;
