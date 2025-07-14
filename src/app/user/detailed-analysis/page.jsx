import React from 'react'
import DashboardProvider from '../../../providers/dashboard-provider'
import { basedUrl } from '@/lib/based-url';
import DetailedAnalysisTabs from '@/components/(user)/detailed-analysis/detailed-analysis-tabs';

async function DetailedAnalysisPage() {
  const response = await fetch(`${basedUrl}/cases`);
  const data = await response.json();

  return (
    <DashboardProvider>
      <DetailedAnalysisTabs caseData={data[0]} />
    </DashboardProvider>
  )
}

export default DetailedAnalysisPage
