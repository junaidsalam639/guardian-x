import React from 'react'
import DashboardProvider from '../dashboard-provider'
import { basedUrl } from '@/lib/based-url'
import LogTable from '@/components/log-management/log-table';

async function LogManagement() {
    const response = await fetch(`${basedUrl}/logs`);
    const data = await response.json();

    return (
        <>
            <DashboardProvider>
                <div className="px-5">
                    <LogTable logs={data} />
                </div>
            </DashboardProvider>
        </>
    )
}

export default LogManagement


