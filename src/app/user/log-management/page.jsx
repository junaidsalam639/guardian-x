import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'
import { basedUrl } from '@/lib/based-url'
import LogTable from '@/components/(user)/log-management/log-table';
import LogBarCharts from '@/components/(user)/log-management/log-bar-chart';

async function LogManagement() {
    const response = await fetch(`${basedUrl}/logs`);
    const data = await response.json();

    if (!data || data?.length === 0) return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                No logs available
            </h1>
        </div>
    )

    return (
        <>
            <DashboardProvider>
                <div className="px-5">
                    <LogBarCharts logs={data} />
                    <LogTable logs={data} />
                </div>
            </DashboardProvider>
        </>
    )
}

export default LogManagement


