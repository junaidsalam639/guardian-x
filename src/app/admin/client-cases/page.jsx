import ClientCaseCard from '@/components/(admin)/client-cases/client-cases-card'
import DashboardProvider from '@/providers/dashboard-provider'
import React from 'react'

const ClientCases = () => {
    return (
        <>
            <DashboardProvider>
              <ClientCaseCard />
            </DashboardProvider>
        </>
    )
}

export default ClientCases

