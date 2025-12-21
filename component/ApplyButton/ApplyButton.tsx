"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ApplyButton({jobId}: {jobId: string}) {
  
  const [applicationStatus, setApplicationStatus] = useState<"idle" | "success" | "error">("idle")
  
  const { data: session, status} = useSession()
  const router = useRouter()
  
  const handleApply = async () => {
    if (!session) return router.push("/auth/signin")
    setApplicationStatus("idle")
    
    try {
      await fetch(`/api/jobs/${jobId}/apply`, {
        method: "POST"
      })
      setApplicationStatus("success")
    } catch (error) {
      setApplicationStatus("error")
      console.error(error)
    }
  }
  
  if (status === "loading") {
    return <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md opacity-50 cursor-not-allowed" disabled>Loading...</button>
  }
  
  if (applicationStatus === "success") {
    return (
      <div className="text-center">
        <p className="text-green-600 font-medium mb-4">Application submitted successfully!</p>
        <Link className="text-indigo-600 hover:text-indigo-700 font-medium" href="/dashboard">View your applications</Link>
      </div>
    )
  }
  
  return (
    <>
      <button
        onClick={handleApply}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 font-medium cursor-pointer transitiontransition-colors"
      >
        Apply for this position
      </button>
      
      {applicationStatus === "error" && <p className="text-red-600 font-medium mt-2">Error applying for job</p>}
    </>
  )
}