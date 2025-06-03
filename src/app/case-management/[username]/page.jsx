import React from 'react'
import { basedUrl } from '@/lib/based-url';
import CaseTabs from '@/components/case-management/case-tabs';
import DashboardProvider from '@/app/dashboard-provider';

async function CaseManagementUsernamePage({ params }) {
    const { username } = await params;
    const response = await fetch(`${basedUrl}/cases/${username}`);
    const data = await response.json();

    return (
        <>
            <DashboardProvider>
                <CaseTabs caseData={data[0]} />
            </DashboardProvider>
        </>
    )
}

export default CaseManagementUsernamePage


