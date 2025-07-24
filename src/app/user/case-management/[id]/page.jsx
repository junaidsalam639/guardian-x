import React from 'react'
import CaseTabs from '@/components/(user)/case-management/tabs-components/case-tabs';
import DashboardProvider from '@/providers/dashboard-provider';

async function CaseManagemenPage({ params }) {
    const { id } = await params;
    return (
        <>
            <DashboardProvider>
                <CaseTabs id={id} />
            </DashboardProvider>
        </>
    )
}

export default CaseManagemenPage


