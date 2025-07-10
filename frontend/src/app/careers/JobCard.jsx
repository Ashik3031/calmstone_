// src/app/careers/JobCard.jsx — Client Component
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JobCard({ job }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open  = () => setIsOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your apply‑API or webhook
    alert('Application submitted!');
    close();
  };

  return (
    <>
      {/* ───────────────────────── Card ───────────────────────── */}
      <li className="list-none group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white hover:bg-gray-50/50">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1 space-y-3">
            {/* title & chips */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                {job.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {job.department}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {job.location}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {job.type}
                </span>
              </div>
            </div>

            {/* description */}
            {job.description && (
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {job.description}
              </p>
            )}

            {/* requirements preview */}
            {job.requirements && (
              <div className="flex flex-wrap gap-1">
                {job.requirements.slice(0, 3).map((req, index) => (
                  <span
                    key={index}
                    className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                  >
                    {req}
                  </span>
                ))}
                {job.requirements.length > 3 && (
                  <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
                    +{job.requirements.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* salary */}
            {job.salary && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {job.salary}
                </span>
                {job.remote && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Remote
                  </span>
                )}
              </div>
            )}
          </div>

          {/* actions */}
          <div className="flex flex-col sm:items-end gap-3">
            <button
              onClick={open}
              className="inline-flex items-center justify-center px-4 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 min-w-[100px]"
            >
              Apply Now
              <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* optional link to detail page */}
            {/* <Link href={`/careers/${job.slug ?? job._id}`} className="text-xs text-blue-600 underline-offset-2 hover:underline">View details</Link> */}
            <Link href="#" className="text-xs text-blue-600 underline-offset-2 hover:underline">View details</Link>
            {job.postedDate && (
              <span className="text-xs text-gray-500">Posted {job.postedDate}</span>
            )}
          </div>
        </div>
      </li>

      {/* ───────────────────────── Modal ───────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-xl p-8 shadow-xl animate-fadeIn">
            <h3 className="text-lg font-semibold mb-6">Apply for {job.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full rounded-md border-gray-300 px-3 py-2 focus:border-brand focus:ring-brand" />
              <input type="email" name="email" placeholder="Email" required className="w-full rounded-md border-gray-300 px-3 py-2 focus:border-brand focus:ring-brand" />
              <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full rounded-md border-gray-300 px-3 py-2 focus:border-brand focus:ring-brand" />
              <textarea name="message" rows={4} placeholder="Cover letter / message" className="w-full rounded-md border-gray-300 px-3 py-2 focus:border-brand focus:ring-brand" />
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={close} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand/90">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
