// app/page.tsx
'use client'; // Add this at the top for animations

import Head from 'next/head';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaShieldAlt, FaLock, FaCode, FaServer } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white font-sans relative overflow-hidden">
      {/* Cyber Security Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMEwxMDAgMjVMMTAwIDc1TDUgMTAwTDAgNzVMMCAyNUw1MCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZGRjZGIiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
        
        {/* Animated Binary Code */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-400/10 text-xs font-mono whitespace-nowrap"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `scroll ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Array(50).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header with Glassmorphism Effect */}
        <header className="relative overflow-hidden bg-slate-900/80 py-10 shadow-lg border-b border-cyan-400/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center px-6">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-4xl text-cyan-400 animate-pulse" />
            </div>
            <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight bg-clip-text">
              Thaw Zin Oo
            </h1>
            <p className="text-xl mt-3 text-slate-300 font-mono">
              &lt;Information Security Specialist/&gt;
            </p>
            <div className="mt-5 flex justify-center gap-6 text-cyan-300">
              <Link href="mailto:thawzinoo0080@gmail.com" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaEnvelope className="text-lg" />
                <span className="font-mono text-sm">thawzinoo0080@gmail.com</span>
              </Link>
              <Link href="https://www.linkedin.com/in/thaw-zin-oo/" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaLinkedin className="text-lg" />
                <span className="font-mono text-sm">LinkedIn</span>
              </Link>
              <Link href="https://github.com/Tanjurokun/" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaGithub className="text-lg" />
                <span className="font-mono text-sm">GitHub</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
          {/* Profile Section */}
          <section className="relative">
            <div className="absolute -left-6 top-0 h-full w-1 bg-cyan-400/50 rounded-full"></div>
            <h2 className="text-3xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaLock className="mr-3" /> Profile
            </h2>
            <div className="bg-slate-800/80 p-8 rounded-xl shadow-lg border border-cyan-400/20 backdrop-blur-sm">
              <p className="leading-relaxed text-slate-300 font-mono">
                {`>_ I am a certified Information Security Specialist with 5+ years of experience in cybersecurity operations.`}
                <br/><br/>
                {`>_ Specialized in vulnerability assessment, SIEM deployment, and PCI DSS compliance.`}
                <br/><br/>
                {`>_ Passionate about building secure infrastructures and defending against cyber threats.`}
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="relative">
            <div className="absolute -left-6 top-0 h-full w-1 bg-cyan-400/50 rounded-full"></div>
            <h2 className="text-3xl font-semibold text-cyan-300 mb-8 flex items-center">
              <FaCode className="mr-3" /> Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  company: "Ayeyarwady Bank",
                  period: "Feb 2025 – Present",
                  role: "Senior Security Engineer",
                  icon: <FaServer className="text-cyan-400 mr-2" />,
                  tasks: [
                    "Led vulnerability management program",
                    "Deployed SIEM solution across 50+ branches",
                    "Implemented PCI DSS compliance framework",
                    "Managed Trend Micro XDR deployment"
                  ]
                },
                {
                  company: "A Bank",
                  period: "Oct 2023 – Feb 2025",
                  role: "Network Security Engineer",
                  icon: <FaLock className="text-cyan-400 mr-2" />,
                  tasks: [
                    "Configured next-gen firewall policies",
                    "Integrated 30+ data sources to SIEM",
                    "Conducted monthly vulnerability scans",
                    "Managed endpoint protection for 500+ devices"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-slate-800/80 p-6 rounded-xl shadow-lg border border-cyan-400/20 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-200 flex items-center">
                        {job.icon} {job.company}
                      </h3>
                      <p className="text-slate-400 font-mono text-sm mt-1">{job.period}</p>
                    </div>
                    <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono">
                      {job.role}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 pl-5">
                    {job.tasks.map((task, i) => (
                      <li key={i} className="text-slate-300 font-mono text-sm before:content-['>_'] before:mr-2 before:text-cyan-400">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="relative">
            <div className="absolute -left-6 top-0 h-full w-1 bg-cyan-400/50 rounded-full"></div>
            <h2 className="text-3xl font-semibold text-cyan-300 mb-8 flex items-center">
              <FaShieldAlt className="mr-3" /> Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "CompTIA CySA+",
                "Certified Cyber Defense Analyst (CCDA)",
                "Palo Alto PCNSE",
                "Google Cybersecurity Professional",
                "Fortinet NSE 4",
                "Cisco CyberOps Associate"
              ].map((cert, index) => (
                <div key={index} className="bg-slate-800/80 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all group">
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-2 rounded-lg mr-4 group-hover:bg-cyan-400/20 transition-all">
                      <FaShieldAlt className="text-cyan-400" />
                    </div>
                    <span className="font-mono text-cyan-300">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="relative">
            <div className="absolute -left-6 top-0 h-full w-1 bg-cyan-400/50 rounded-full"></div>
            <h2 className="text-3xl font-semibold text-cyan-300 mb-8 flex items-center">
              <FaCode className="mr-3" /> Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  category: "Security Tools",
                  skills: ["SIEM (QRadar, Splunk)", "EDR/XDR Solutions", "Nessus", "Burp Suite", "Metasploit"]
                },
                {
                  category: "Networking",
                  skills: ["Firewall Administration", "VPN Configuration", "Network Segmentation", "IDS/IPS"]
                },
                {
                  category: "Compliance",
                  skills: ["PCI DSS", "ISO 27001", "Risk Assessment", "Security Policies"]
                }
              ].map((group, index) => (
                <div key={index} className="bg-slate-800/80 p-5 rounded-xl border border-cyan-400/20">
                  <h3 className="text-cyan-400 font-mono mb-3">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="text-slate-300 text-sm font-mono before:content-['•'] before:text-cyan-400 before:mr-2">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .font-mono {
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
}
