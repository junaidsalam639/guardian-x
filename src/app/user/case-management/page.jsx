import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'
import CaseManagementCard from '@/components/(user)/case-management/case-management-card';

async function CaseManagementPage() {
    return (
        <DashboardProvider>
            <CaseManagementCard />
        </DashboardProvider>
    )
}

export default CaseManagementPage;

