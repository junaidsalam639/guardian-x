import React from 'react'
import { ClientDataTable } from '@/components/(admin)/client-management/client-data-table'
import DashboardProvider from '@/providers/dashboard-provider'

const ClientManagementPage = () => {
  return (
    <DashboardProvider>
      <ClientDataTable />
    </DashboardProvider>
  )
}

export default ClientManagementPage

