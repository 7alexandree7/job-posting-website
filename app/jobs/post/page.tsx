export default function PostJobPage() {
  
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Post a Job</h1>
      <form className="space-y-6">
        
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
          <input 
            type="text"
            id="title"
            name="title"
            placeholder="Enter job title"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <input 
            type="text"
            id="company"
            name="company"
            placeholder="Enter company name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input 
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <select
            id="company"
            name="company"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          >
            <option value="">Select company</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary (optional)</label>
          <input 
            type="text"
            id="salary"
            name="salary"
            placeholder="$3.000.00"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
        </div>
        
        <button
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
          type="submit"
        >
          Post Job
        </button>
        
      </form>
    </div>
  )
} 