// src/app/careers/page.jsx — Server Component

import Image from 'next/image';
import Link   from 'next/link';
import JobCard   from './JobCard';

export const metadata = { title: 'Careers – Join Our Energy Team' };

/* -------------------------------------------------------------------------- */
/*                               Dummy job data                               */
/* -------------------------------------------------------------------------- */
const dummyJobs = [
  {
    _id: '1',
    title: 'Project Engineer ',
    department: 'Engineering',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '8–10 years',
    salary: 'AED 8000–AED 12000 ',
    description:
      'Coordinate engineering deliverables, support construction, and liaise with project teams for design interface and execution.',
    requirements: [
      "Bachelor’s in Mechanical, Civil, or relevant Engineering discipline",
      '8–10 years of project engineering experience',
      'Experience in detailed design and site interface',
      'Strong understanding of AutoCAD and MS Office'
    ],
    postedDate: '2024-01-15'
  },
  {
    _id: '2',
    title: 'Project Planning Control Engineer',
    department: 'Project Controls',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '8–10 years',
    salary: 'AED 8000-AED 12000 ',
    description:
      'Plan and control schedules, monitor cost and resources, and prepare project progress reports and dashboards.',
    requirements: [
      "Bachelor’s degree in Engineering or related field",
      '8–10 years of planning & project controls experience',
      'EPC or Oil & Gas project background preferred',
      'Strong understanding of Primavera P6'
    ],
    postedDate: '2024-01-15'
  },
  {
    _id: '3',
    title: 'Construction Manager ',
    department: 'Construction',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '15+ years',
    salary: 'AED 15000–AED 25000 ',
    description:
      'Manage site execution and contractor coordination to ensure timely and compliant project delivery in the oil & gas sector.',
    requirements: [
      "Bachelor’s in Mechanical or Civil Engineering",
      '15+ years in construction and site management',
      'Oil & Gas or Industrial EPC background',
      'UAE project experience preferred'
    ],
    postedDate: '2024-01-15'
  },
  {
    _id: '4',
    title: 'Accountant ',
    department: 'Engineering',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '8–10 years',
    salary: 'AED 8000–AED 12000',
    description:
      'Coordinate engineering deliverables, support construction, and liaise with project teams for design interface and execution.',
    requirements: [
      "Bachelor’s in Mechanical, Civil, or relevant Engineering discipline",
      '8–10 years of project engineering experience',
      'Experience in detailed design and site interface',
      'Strong understanding of AutoCAD and MS Office'
    ],
    postedDate: '2024-01-15'
  },
  {
    _id: '5',
    title: 'HSE Officer',
    department: 'Project Controls',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '8–10 years',
    salary: 'AED 8000–AED 12000 ',
    description:
      'Plan and control schedules, monitor cost and resources, and prepare project progress reports and dashboards.',
    requirements: [
      "Bachelor’s degree in Engineering or related field",
      '8–10 years of planning & project controls experience',
      'EPC or Oil & Gas project background preferred',
      'Strong understanding of Primavera P6'
    ],
    postedDate: '2024-01-15'
  },
  {
    _id: '6',
    title: 'Civil Job   Performer',
    department: 'Construction',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '15+ years',
    salary: 'AED 15000–AED 25000',
    description:
      'Manage site execution and contractor coordination to ensure timely and compliant project delivery in the oil & gas sector.',
    requirements: [
      "Bachelor’s in Mechanical or Civil Engineering",
      '15+ years in construction and site management',
      'Oil & Gas or Industrial EPC background',
      'UAE project experience preferred'
    ],
    postedDate: '2024-01-15'
  }
];

export default async function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-200">

      <section id="positions" className="bg-black py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <header className="mb-12 text-center">
 <div className="relative inline-block text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-white pb-5 ">
                  Current <span className='text-yellow-400'>Opening</span>
                </h2>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              </div>            <p className="text-lg text-white">Explore roles across our worldwide operations.</p>
          </header>

          <div className="mt-10">
            {dummyJobs.length ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dummyJobs.map(job => <JobCard key={job._id} job={job} />)}
              </div>
            ) : (
              <div className="mx-auto max-w-md rounded-lg bg-gray-800 p-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 shadow-inner">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">No roles available</h3>
                <p className="mb-6 text-gray-400">We’re growing fast—check back soon or reach out!</p>
                <Link href="#" className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition">Submit Résumé</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      
    </main>
  );
}
