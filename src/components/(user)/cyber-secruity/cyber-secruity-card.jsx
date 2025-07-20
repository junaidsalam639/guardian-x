"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetCasesQuery } from '@/service/casesApi';
import { 
    ShieldAlertIcon, 
    Hourglass, 
    CheckCircle2, 
    XOctagon, 
    Clock, 
    CircleDot 
} from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

const statusIconMap = {
    open: <CircleDot className="h-5 w-5 text-blue-500" />,   
    in_progress: <Hourglass className="h-5 w-5 text-yellow-500" />,
    awaiting_approval: <Clock className="h-5 w-5 text-purple-500" />, 
    closed: <CheckCircle2 className="h-5 w-5 text-green-500" />, 
    failed: <XOctagon className="h-5 w-5 text-red-500" />,  
};

const statusLabelMap = {
    open: 'Open Cases',
    in_progress: 'In Progress',
    awaiting_approval: 'Awaiting Approval',
    closed: 'Closed Cases',
    failed: 'Failed Cases',
};

const CyberSecurityCard = () => {
    const { user } = useSelector((state) => state.auth);
    const { data, isLoading, error } = useGetCasesQuery({ clientId: user?.client_id });

    if (isLoading) return <p className="p-6 text-gray-600 dark:text-gray-300">Loading ...</p>;
    if (error) return <p className="p-6 text-red-500">Failed to load.</p>;

    const caseCounts = data?.case_counts_by_status || [];

    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <ShieldAlertIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Cyber Security
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {caseCounts?.map((item) => (
                    <Card key={item?.status} className="shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {statusLabelMap[item?.status] || item?.status}
                            </CardTitle>
                            {statusIconMap[item?.status]}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-gray-800 dark:text-white">
                                {item?.count}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CyberSecurityCard;
