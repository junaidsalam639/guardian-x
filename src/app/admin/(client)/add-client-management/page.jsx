import React from 'react'
import { AddClientForm } from '@/components/(admin)/client-management/add-client-form'
import DashboardProvider from '@/providers/dashboard-provider'

const ClientManagementPage = () => {
  return (
    <DashboardProvider>
      <AddClientForm />
    </DashboardProvider>
  )
}

export default ClientManagementPage

