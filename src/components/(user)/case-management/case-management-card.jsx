"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import Link from 'next/link';
import { useGetCasesQuery } from '@/service/casesApi';
import { useSelector } from 'react-redux';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const CaseManagementCard = () => {
    const { user } = useSelector((state) => state.auth);
    const [status, setStatus] = useState('');
    const queryParams = {
        clientId: user?.client_id,
        ...(status && status !== 'all' && { status }),
    };
    const { data, isLoading, error } = useGetCasesQuery(queryParams);

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Case Management
                    </h1>
                </div>

                <Select onValueChange={setStatus} value={status}>
                    <SelectTrigger className="w-[200px] text-sm">
                        <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="awaiting_approval">Awaiting Approval</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {isLoading && (
                    <p className="col-span-full text-gray-600 dark:text-gray-300">Loading cases...</p>
                )}

                {error && (
                    <p className="col-span-full text-red-500">Failed to load cases.</p>
                )}

                {!isLoading && data?.cases?.length === 0 && (
                    <p className="col-span-full text-gray-600 dark:text-gray-300">
                        Retrieved 0 cases for client {status ? ` with status '${status}'` : ''}
                    </p>
                )}

                {data?.cases?.map((caseItem) => (
                    <Link href={`/user/case-management/${caseItem?.case_id}`} key={caseItem?.case_id}>
                        <Card
                            className="cursor-pointer bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-2xl h-60 shadow-md
                            transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg 
                            hover:border-blue-500 dark:hover:border-blue-400"
                        >
                            <CardHeader className="flex flex-col items-start gap-2">
                                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {caseItem?.case_name}
                                </CardTitle>
                                <p className="text-sm text-gray-500 dark:text-gray-400">ID: {caseItem?.case_id}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm text-gray-700 dark:text-gray-200 line-clamp-4">
                                    {caseItem?.case_description?.slice(0, 100)}...
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CaseManagementCard;

