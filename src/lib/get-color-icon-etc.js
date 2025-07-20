import { AlertCircle, AlertTriangle, Info, XCircle } from "lucide-react"

export const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
        case "critical":
            return "destructive"
        case "high":
            return "destructive"
        case "medium":
            return "default"
        case "low":
            return "secondary"
        default:
            return "outline"
    }
}

export const getSeverityIcon = (severity) => {
    switch (severity?.toLowerCase()) {
        case "critical":
            return <XCircle className="h-4 w-4" />
        case "high":
            return <AlertTriangle className="h-4 w-4" />
        case "medium":
            return <AlertCircle className="h-4 w-4" />
        case "low":
            return <Info className="h-4 w-4" />
        default:
            return <Info className="h-4 w-4" />
    }
}

export const getMethodColor = (method) => {
    switch (method) {
        case "POST":
            return "default"
        case "GET":
            return "secondary"
        case "PUT":
            return "outline"
        case "DELETE":
            return "destructive"
        default:
            return "outline"
    }
}

export function getStatusBadgeClasses(status) {
    switch (status) {
        case "open":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
        case "in_progress":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
        case "awaiting_approval":
            return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
        case "closed":
            return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
        case "failed":
            return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
        default:
            return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
}


