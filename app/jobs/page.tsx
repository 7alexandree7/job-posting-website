import { prisma } from "@/lib/prisma";
import Link from "next/link";
type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q, type, location } = await searchParams;

  const query = q as string | undefined;
  const searchType = type as string | undefined;
  const searchLocation = location as string | undefined;

   const jobs = await prisma.job.findMany({
    where: {
      AND: [
        query
          ? {
              OR: [
                { title: { contains: query, mode: "insensitive" } },
                { company: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
              ],
            }
          : {},
        searchType ? { type: searchType } : {},
        searchLocation
          ? {
              location: {
                contains: searchLocation,
                mode: "insensitive",
              },
            }
          : {},
      ],
    },
    orderBy: { postedAt: "desc" },
    include: { postedBy: true },
  });
   


  return (
    <div className="space-y-8">
      <div className="bh-white p-6 ronded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Jobs</h1>

        <form className="grid gap-4 md:grid-cols-3">
          <input
            type="text"
            name="q"
            placeholder="Search for jobs..."
            className="block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
          <select
            name="type"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 outline-none text-gray-600 text-sm"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="w-full bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-full flex justify-between items-start">
              <div className="w-1/3">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 mb-2 ">{job.company}</p>
              </div>

              <div className="w-1/3 flex items-center justify-center text-sm text-gray-500 mb-4">
                <span className="mr-4">{job.location}</span>
                <span>{job.type}</span>
              </div>
              <div className="w-1/3">
                <p className="text-center w-full text-gray-600 mb-4 line-clamp-2">
                  {job.description}
                </p>
              </div>

              {job.salary && (
                <span className="text-center text-gray-500">{job.salary}</span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                PostedBy {job.postedBy.name}
              </span>
              <Link
                href={`/jobs/${job.id}`}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
