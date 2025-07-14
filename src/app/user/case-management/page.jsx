import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'
import { basedUrl } from '@/lib/based-url';
import CaseManagementCard from '@/components/(user)/case-management/case-management-card';

async function CaseManagementPage() {
    const responseUsername = await fetch(`${basedUrl}/usernames`);
    const dataUsername = await responseUsername.json();

    if (!dataUsername || dataUsername?.length === 0) return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                No case available
            </h1>
        </div>
    )

    return (
        <>
            <DashboardProvider>
                <CaseManagementCard dataUsername={dataUsername} />
            </DashboardProvider>
        </>
    )
}

export default CaseManagementPage

