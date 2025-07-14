import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'
import { basedUrl } from '@/lib/based-url';
import CaseManagementCard from '@/components/(user)/case-management/case-management-card';

async function CaseManagementPage() {
    try {
        const responseUsername = await fetch(`${basedUrl}/usernames`);
        
        if (!responseUsername.ok) {
            throw new Error(`HTTP error! status: ${responseUsername.status}`);
        }
        
        const dataUsername = await responseUsername.json();
        
        const usernames = Array.isArray(dataUsername) ? dataUsername : [];

        if (usernames.length === 0) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        No cases available
                    </h1>
                </div>
            )
        }

        return (
            <DashboardProvider>
                <CaseManagementCard dataUsername={usernames} />
            </DashboardProvider>
        )
    } catch (error) {
        console.error("Error in CaseManagementPage:", error);
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Error loading case data
                </h1>
                <p className="text-red-500 mt-2">{error.message}</p>
            </div>
        )
    }
}

export default CaseManagementPage;

