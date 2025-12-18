
import GitHubSvg from "@/app/svgFunctions/gitHubSvg";
import { login } from "@/lib/auth";

const Page = () => {
  
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg mx-4 p-8">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to the JobBoard</h2>
          <p className="text-gray-600">Sign in to post jobs or apply for opportunities</p>
        </div>
        
        <div className="mt-8">
          <button
            onClick={login}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white">
            <GitHubSvg />
            <span>Continue with GitHub</span>
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          By signing in, you agree to our <a href="#">Terms of Service</a> and <br/> <a className="text-gray-500/90" href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}

export default Page;