import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Shield } from 'lucide-react';
import Link from 'next/link';

const CaseManagementCard = ({ dataUsername }) => {
    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Case Management
                </h1>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {dataUsername?.map((username, index) => (
                    <Link href={`/case-management/${username}`} key={index}>
                        <Card className="cursor-pointer bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-2xl">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                                    <Server className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Server Identifier
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md font-mono text-base text-center text-gray-800 dark:text-gray-100 tracking-wide">
                                    {username}
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
