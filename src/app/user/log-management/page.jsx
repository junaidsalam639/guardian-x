import DashboardProvider from "@/providers/dashboard-provider";

async function LogManagement() {
    // try {
    //     const response = await fetch(`${basedUrl}/logs`);
    //     const data = await response.json();

    //     const logs = Array.isArray(data) ? data : [];

    //     if (logs?.length === 0) return (
    //         <div className="flex items-center justify-center h-screen">
    //             <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
    //                 No logs available
    //             </h1>
    //         </div>
    //     )

    //     return (
    //         <DashboardProvider>
    //             <div className="px-5">
    //                 <LogBarCharts logs={logs} />
    //                 <LogTable logs={logs} />
    //             </div>
    //         </DashboardProvider>
    //     )
    // } catch (error) {
    //     console.error("Error fetching logs:", error);
    //     return (
    //         <div className="flex items-center justify-center h-screen">
    //             <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
    //                 Error loading logs
    //             </h1>
    //         </div>
    //     )
    // }

    return (
        <>
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
        </>
    )
}

export default LogManagement
