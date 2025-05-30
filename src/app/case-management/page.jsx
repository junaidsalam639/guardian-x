import React from 'react'
import DashboardProvider from '../dashboard-provider'
import { basedUrl } from '@/lib/based-url';
import CaseTabs from '@/components/case-management/case-tabs';

async function CaseManagement() {
    const response = await fetch(`${basedUrl}/cases`);
    const data = await response.json();
    console.log("Case Management Data:", data);
    return (
        <>
            <DashboardProvider>
                <CaseTabs caseData={data[0]} />
            </DashboardProvider>
        </>
    )
}

export default CaseManagement

