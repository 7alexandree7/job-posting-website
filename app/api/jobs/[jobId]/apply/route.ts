import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(request: Request, { params }: {params: Promise<{jobId: string}>}) {
  
  const session = await auth()
  if(!session?.user || !session.user.id) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
  
  try {
    const {jobId} = await params
    const job = await prisma.job.findUnique({where: {id: jobId}})
    
    if(!job) {
      return NextResponse.json({error: 'Job not found'}, {status: 404})
    }
    
    const existingApplication = await prisma.application.findFirst({where: {jobId, userId: session.user.id}})
    
    if(existingApplication) {
      return NextResponse.json({error: 'Application not found'}, {status: 404})
    }
    
    const application = await prisma.application.create({
      data: {
        jobId: jobId,
        userId: session.user.id,
        status: 'PENDING'
      }
    })
    
    return NextResponse.json(application)
 
  }
  
  catch(error) {
    return NextResponse.json({error: `${error} something went wrong`}, {status: 500})
  }
}