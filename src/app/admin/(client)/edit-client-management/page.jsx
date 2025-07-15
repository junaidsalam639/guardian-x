import React from 'react'
import { ClientForm } from '@/components/(admin)/client-management/client-form'
import DashboardProvider from '@/providers/dashboard-provider'

const EditClientManagementPage = () => {
  return (
    <DashboardProvider>
      <ClientForm />
    </DashboardProvider>
  )
}

export default EditClientManagementPage

