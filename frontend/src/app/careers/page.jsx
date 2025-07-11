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
    title: 'Senior Petroleum Engineer',
    department: 'Engineering',
    location: 'Houston, TX',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $150,000',
    description:
      'Lead reservoir engineering projects and optimize production strategies for offshore drilling operations.',
    requirements: [
      "Bachelor's degree in Petroleum Engineering",
      'Experience with reservoir simulation software',
      'Strong analytical skills'
    ],
    postedDate: '2024-01-15'
  },
  {
    _id: '2',
    title: 'HSE Manager',
    department: 'Health & Safety',
    location: 'Calgary, AB',
    type: 'Full-time',
    experience: '7+ years',
    salary: '$95,000 - $120,000',
    description:
      'Develop and implement comprehensive health, safety, and environmental programs across all operations.',
    requirements: [
      'Certified Safety Professional (CSP)',
      'Oil & gas industry experience',
      'Leadership experience'
    ],
    postedDate: '2024-01-20'
  },
  {
    _id: '3',
    title: 'Geophysicist',
    department: 'Exploration',
    location: 'Denver, CO',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$85,000 - $110,000',
    description:
      'Analyze seismic data and conduct geological surveys to identify potential drilling locations.',
    requirements: [
      'M.S. in Geophysics or related field',
      'Experience with seismic interpretation software',
      'Field work experience'
    ],
    postedDate: '2024-01-18'
  },
  {
    _id: '4',
    title: 'Operations Technician',
    department: 'Operations',
    location: 'Midland, TX',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$65,000 - $80,000',
    description:
      'Monitor and maintain drilling equipment, ensure operational efficiency and safety compliance.',
    requirements: [
      'High school diploma or equivalent',
      'Mechanical aptitude',
      'Safety certification preferred'
    ],
    postedDate: '2024-01-22'
  },
  {
    _id: '5',
    title: 'Environmental Compliance Specialist',
    department: 'Environmental',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$75,000 - $95,000',
    description:
      'Ensure compliance with environmental regulations and develop sustainability initiatives.',
    requirements: [
      "Bachelor's degree in Environmental Science",
      'Knowledge of EPA regulations',
      'Audit experience'
    ],
    postedDate: '2024-01-25'
  },
  {
    _id: '6',
    title: 'Senior Drilling Engineer',
    department: 'Engineering',
    location: 'Aberdeen, UK',
    type: 'Full-time',
    experience: '8+ years',
    salary: '£80,000 - £100,000',
    description:
      'Design and optimize drilling programs for offshore platforms in the North Sea.',
    requirements: [
      'Chartered Engineer status preferred',
      'Offshore drilling experience',
      'Advanced drilling software proficiency'
    ],
    postedDate: '2024-01-12'
  }
];

export default async function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-gray-900 selection:bg-white-200 mt-3 lg:mt-11">

      {/* <Hero section removed for brevity while refactoring */}

      <section id="positions" className="bg-black py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <header className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl text-white">Current Openings</h2>
            <p className="text-lg text-gray-100">Explore roles across our worldwide operations.</p>
          </header>

          {/* FilterBar removed */}

          <div className="mt-10">
            {dummyJobs.length ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dummyJobs.map(job => <JobCard key={job._id} job={job} />)}
              </div>
            ) : (
              <div className="mx-auto max-w-md rounded-lg bg-black p-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black shadow-inner">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">No roles available</h3>
                <p className="mb-6 text-gray-600">We’re growing fast—check back soon or reach out!</p>
                <Link href="#" className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition">Submit Résumé</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Ready to Join Our Team?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-95">
            Don’t see your perfect role? We’re always keen to meet passionate
            people shaping the future of energy.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300/50 transition"
            >
              Submit Your Résumé
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-white/40 transition"
            >
              Talk to Recruiting
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
