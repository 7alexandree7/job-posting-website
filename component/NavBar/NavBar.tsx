"use client"

import { logout } from "@/lib/auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  
  const { data: session } = useSession()
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex justify-between">
          
          <div className="flex">
            <Link className="flex items-center" href="/">
              <Image className="h-8 w-auto" src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-semibold text-gray-900/80">Job Board</span>
            </Link>
          </div>
          
          <div className="flex items-center text-gray-600" >
            <Link className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href={"/jobs"}>Browse Jobs</Link>
            {session ? (
              <>
                <Link className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href={"/jobs/post"}>Post a Job</Link>
                <Link className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href={"/dashboard"}>Dashboard</Link>
                <button className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => logout()}>Sign Out</button>
              </>
            ): (
                <Link className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" href={"/auth/signin"}>Sign In</Link>
            )}
            
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
