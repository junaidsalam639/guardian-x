import CyberSecruityAnalyze from '@/components/cyber-secruity/cyber-secruity-analyze';
import DashboardProvider from '../dashboard-provider';

export default function CyberSecurityPage() {
    return (
        <DashboardProvider>
            <div className="px-5">
                <CyberSecruityAnalyze />
            </div>
        </DashboardProvider>
    );
}
