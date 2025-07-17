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

