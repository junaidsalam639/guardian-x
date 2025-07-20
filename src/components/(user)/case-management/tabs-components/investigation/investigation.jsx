"use client"
import Documents from "./documents"
// import Alerts from "./alerts"


export default function Investigation({ investigation }) {
    return (
        <>
            <Documents investigation={investigation} />
            {/* <Alerts investigation={investigation} /> */}
        </>
    )
}
