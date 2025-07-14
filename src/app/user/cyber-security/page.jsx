import CyberSecruityAnalyze from '@/components/(user)/cyber-secruity/cyber-secruity-analyze';
import DashboardProvider from '../../../providers/dashboard-provider';

export default function CyberSecurityPage() {
    return (
        <DashboardProvider>
            <div className="px-5">
                <CyberSecruityAnalyze />
            </div>
        </DashboardProvider>
    );
}
