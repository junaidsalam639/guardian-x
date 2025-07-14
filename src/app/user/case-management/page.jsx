import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'
import { basedUrl } from '@/lib/based-url';
import CaseManagementCard from '@/components/(user)/case-management/case-management-card';

async function CaseManagementPage() {
    const responseUsername = await fetch(`${basedUrl}/usernames`);
    const dataUsername = await responseUsername.json();
    return (
        <>
            <DashboardProvider>
                <CaseManagementCard dataUsername={dataUsername} />
            </DashboardProvider>
        </>
    )
}

export default CaseManagementPage

