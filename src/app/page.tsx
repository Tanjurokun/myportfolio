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
          <p className="text-xl mt-3 text-slate-300">Information Security Specialist</p>
          <div className="mt-5 flex justify-center gap-6 text-cyan-300">
            <Link href="mailto:thawzinoo0080@gmail.com" className="flex items-center space-x-2 hover:text-white">
              <FaEnvelope /><span>Email</span>
            </Link>
            <Link href="https://www.linkedin.com/in/thaw-zin-oo/" className="flex items-center space-x-2 hover:text-white">
              <FaLinkedin /><span>LinkedIn</span>
            </Link>
            <Link href="https://github.com/Tanjurokun/" className="flex items-center space-x-2 hover:text-white">
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
              I am a Information Security Specialist with over 5 years of experience in IT security, skilled in vulnerability management,
              SIEM, endpoint protection, and PCI DSS compliance. I&apos;m passionate about safeguarding digital infrastructures
              and contributing to organizational growth with dedication and continuous learning.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">Experience</h2>
          <div className="space-y-10">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-200">Ayeyarwady Bank</h3>
              <p className="text-sm text-slate-400">(Feb 2025 – Present)</p>
              <ul className="list-disc list-inside mt-3 text-slate-300 space-y-1">
                <li>Vulnerability Management and security patching</li>
                <li>SIEM Deployment and log integration</li>
                <li>SOC Engineering and threat detection rules</li>
                <li>PCI DSS Compliance implementation</li>
                <li>Trend Micro XDR and Cloud One Workload Security</li>
                <li>Security Metrics Monitoring and Reporting</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-200">A Bank</h3>
              <p className="text-sm text-slate-400">(Oct 2023 – Feb 2025)</p>
              <ul className="list-disc list-inside mt-3 text-slate-300 space-y-1">
                <li>Advanced Firewall & WAAP Security configuration</li>
                <li>SIEM deployment and data source integration</li>
                <li>Patch Management and Vulnerability Assessments</li>
                <li>Daily Security Operations and Endpoint Protection</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-200">FDB Bank</h3>
              <p className="text-sm text-slate-400">(Sep 2020 – Oct 2023)</p>
              <ul className="list-disc list-inside mt-3 text-slate-300 space-y-1">
                <li>Firewall Administration across DC, DR, and branches</li>
                <li>Endpoint and Email Security (Trend Micro, O365)</li>
                <li>Active Directory and Hybrid Cloud Infrastructure</li>
                <li>System Server Management and VMware vCenter</li>
                <li>Backup solutions (Data Domain, Networker)</li>
                <li>ATM Network Setup, IPsec VPN Configuration</li>
              </ul>
            </div>
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

        <section
