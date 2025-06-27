// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white font-sans">
      <Head>
        <title>Thaw Zin Oo | Information Security Specialist</title>
      </Head>

      <header className="relative isolate overflow-hidden bg-slate-900 py-10 shadow-lg border-b border-slate-700">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight">Thaw Zin Oo</h1>
          <p className="text-xl mt-3 text-slate-300">Cyber Security Analyst</p>
          <div className="mt-5 flex justify-center gap-6 text-cyan-300">
            <Link href="mailto:thawzinoo0080@gmail.com" className="flex items-center space-x-2 hover:text-white">
              <FaEnvelope /><span>Email</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-white">
              <FaLinkedin /><span>LinkedIn</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 hover:text-white">
              <FaGithub /><span>GitHub</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <section className="grid md:grid-cols-5 gap-10 items-start">
          <h2 className="text-3xl font-semibold text-cyan-300 col-span-full md:col-span-1">Profile</h2>
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg md:col-span-4">
            <p className="leading-relaxed text-slate-300">
              I am a Cyber Security Analyst with over 5 years of experience in IT security, skilled in vulnerability management,
              SIEM, endpoint protection, and PCI DSS compliance. I'm passionate about safeguarding digital infrastructures
              and contributing to organizational growth with dedication and continuous learning.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ayeyarwady Bank',
                date: '(Feb 2025 – Present)',
                details: 'Vulnerability Management, SIEM Deployment, SOC Engineering, PCI DSS Compliance, Trend Micro XDR, Cloud One Workload Security, Security Metrics & Reporting.'
              },
              {
                title: 'A Bank',
                date: '(Oct 2023 – Feb 2025)',
                details: 'Firewall Management, WAAP Security, SIEM Tools, Patch Management, Endpoint Protection, Daily Security Operations.'
              },
              {
                title: 'FDB Bank',
                date: '(Sep 2020 – Oct 2023)',
                details: 'Firewall Administration, Endpoint & Email Security, O365 & AD, System Server Management, Backup Solutions, ATM Security & Network Support.'
              }
            ].map((job, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-cyan-200">{job.title}</h3>
                <p className="text-sm text-slate-400">{job.date}</p>
                <p className="mt-3 text-slate-300">{job.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">Certificates</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {[
              "CompTIA CySA+",
              "CCDA (Certified Cyber Defense Analyst)",
              "PCNSE",
              "Google Cybersecurity Certificate",
              "OPSWAT OESA",
              "OPSWAT ONSA",
              "Junior Cybersecurity Analyst (Cisco)",
              "Fortinet Certified Associate",
              "Multi-Cloud Network Associate (Aviatrix)"
            ].map((cert, index) => (
              <div key={index} className="bg-slate-800 p-5 rounded-xl shadow text-slate-300 text-center">
                {cert}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Vulnerability Management",
              "SIEM & SOC",
              "Endpoint Protection",
              "Firewall Administration",
              "O365 & Active Directory",
              "System Server Management",
              "Cloud Security",
              "LAN/WAN Security",
              "Wireless Security"
            ].map((skill, index) => (
              <span key={index} className="bg-cyan-700/20 text-cyan-200 px-4 py-2 rounded-full text-sm shadow">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "B.Sc. (Botany), YUDE Yangon",
              "Diploma in Network Engineering, SQA (UK)"
            ].map((edu, idx) => (
              <div key={idx} className="bg-slate-800 p-5 rounded-xl shadow text-slate-300">
                {edu}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
