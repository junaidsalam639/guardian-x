"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle,
    Clock,
    PauseCircle,
    Workflow,
} from "lucide-react";
import React from "react";

const ResponseCard = ({ response }) => {
    const {
        status,
        next_step,
        api_actions_count,
        interrupt_info,
    } = response || {};

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                    <Workflow className="h-5 w-5 text-blue-600" />
                    Response Orchestration
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5 text-sm">
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-muted-foreground">
                        <strong>Status:</strong> {status?.replace("_", " ")}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-muted-foreground">
                        <strong>Next Step:</strong> {next_step}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <PauseCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-muted-foreground">
                        <strong>Pending API Actions:</strong> {api_actions_count}
                    </span>
                </div>

                {interrupt_info && (
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-4 rounded-md space-y-2">
                        <div className="flex items-center gap-2 font-semibold text-yellow-800 dark:text-yellow-300">
                            <PauseCircle className="h-5 w-5" />
                            Human Approval Required
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {interrupt_info.message}
                        </p>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                            <span className="mr-4">
                                <strong>Case ID:</strong> {interrupt_info.case_id}
                            </span>
                            <span>
                                <strong>Thread ID:</strong> {interrupt_info.thread_id}
                            </span>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ResponseCard;
