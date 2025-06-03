"use client"
import React from 'react'
import { Button } from '../ui/button'
import { basedUrl } from '@/lib/based-url'

const CyberSecruityAnalyze = () => {

    const handlerAnalyzeLogs = async () => {
        const response = await fetch(`${basedUrl}/analyze_logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Logs analyzed successfully:", data);
            alert("Logs analyzed successfully. Check the console for details.");
        } else {
            console.error("Error analyzing logs:", data);
            alert("Failed to analyze logs. Please try again later.");
        }
    }

    return (
        <>
            <Button className="cursor-pointer w-40" onClick={handlerAnalyzeLogs}>
                Analyze Logs
            </Button>
        </>
    )
}

export default CyberSecruityAnalyze


