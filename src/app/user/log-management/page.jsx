import { basedUrl } from "@/lib/based-url";

async function LogManagement() {
    try {
        const response = await fetch(`${basedUrl}/logs`);
        const data = await response.json();

        const logs = Array.isArray(data) ? data : [];

        if (logs?.length === 0) return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    No logs available
                </h1>
            </div>
        )

        return (
            <DashboardProvider>
                <div className="px-5">
                    <LogBarCharts logs={logs} />
                    <LogTable logs={logs} />
                </div>
            </DashboardProvider>
        )
    } catch (error) {
        console.error("Error fetching logs:", error);
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Error loading logs
                </h1>
            </div>
        )
    }
}

export default LogManagement
