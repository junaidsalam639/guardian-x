import React from 'react'
import { ClientForm } from '@/components/(admin)/client-management/client-form'
import DashboardProvider from '@/providers/dashboard-provider'

const AddClientManagementPage = () => {
  return (
    <DashboardProvider>
      <ClientForm />
    </DashboardProvider>
  )
}

export default AddClientManagementPage

