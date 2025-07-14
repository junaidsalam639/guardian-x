import { Button } from '@/components/ui/button'
import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'

const ThreatResponsePage = () => {
  return (
    <DashboardProvider>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            🚧 Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            This page is under construction. We're working hard to bring you something awesome in the Cyber Security section. Stay tuned!
          </p>
        </div>
      </div>
    </DashboardProvider>
  )
}

export default ThreatResponsePage
