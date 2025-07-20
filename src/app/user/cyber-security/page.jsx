import DashboardProvider from '../../../providers/dashboard-provider';
import CyberSecruityCard from '@/components/(user)/cyber-secruity/cyber-secruity-card';

export default function CyberSecurityPage() {
    return (
        <DashboardProvider>
            <CyberSecruityCard />
        </DashboardProvider>
    );
}
