'use client';

import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaShieldAlt, FaPhone, FaNetworkWired, FaCode, FaServer, FaLock, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white font-sans relative overflow-hidden">
      {/* Cyber Security Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMEwxMDAgMjVMMTAwIDc1TDUgMTAwTDAgNzVMMCAyNUw1MCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZGRjZGIiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
        
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
        {/* Header */}
        <header className="relative overflow-hidden bg-slate-900/80 py-10 shadow-lg border-b border-cyan-400/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-cyan-400/50 flex items-center justify-center">
                <FaShieldAlt className="text-5xl text-cyan-400" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl font-extrabold text-cyan-400 tracking-tight">Thaw Zin Oo</h1>
                <p className="text-xl mt-1 text-slate-300 font-mono">&lt;Information Security Specialist/&gt;</p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center text-slate-300">
                    <FaEnvelope className="mr-2 text-cyan-400" />
                    <Link href="mailto:thawzinoo0080@gmail.com" className="hover:text-white transition-colors font-mono text-sm">
                      thawzinoo0080@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <FaPhone className="mr-2 text-cyan-400" />
                    <span className="font-mono text-sm">09-797690078</span>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-4">
                  <Link href="https://www.linkedin.com/in/thaw-zin-oo/" className="text-cyan-300 hover:text-white transition-colors">
                    <FaLinkedin className="text-xl" />
                  </Link>
                  <Link href="https://github.com/Tanjurokun/" className="text-cyan-300 hover:text-white transition-colors">
                    <FaGithub className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
          {/* Profile */}
          <section className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-3" /> Professional Profile
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Information Security Specialist with 5+ years of experience in cybersecurity, specializing in vulnerability management,
              SIEM solutions, endpoint protection, and PCI DSS compliance. Passionate about securing digital infrastructures and
              implementing robust security measures to protect organizational assets.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaLock className="mr-3" /> Core Competencies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Vulnerability Assessment & Management",
                "SIEM Implementation & Monitoring",
                "Endpoint Protection Solutions",
                "Network Security & Firewalls",
                "PCI DSS Compliance",
                "Cloud Security (AWS, Azure)",
                "Incident Response & Handling",
                "Security Policy Development",
                "Threat Intelligence Analysis",
                "Security Awareness Training",
                "Risk Assessment & Mitigation",
                "Penetration Testing Basics"
              ].map((skill, index) => (
                <div key={index} className="bg-slate-800/80 p-3 rounded-lg border border-cyan-400/20">
                  <p className="text-slate-300 font-mono text-sm flex items-center">
                    <span className="text-cyan-400 mr-2">▹</span>
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaServer className="mr-3" /> Professional Experience
            </h2>
            
            <div className="space-y-6">
              {/* Current Position */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Ayeyarwady Bank</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Feb 2025 - Present
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">Information Security Specialist</p>
                
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Vulnerability Management</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Implemented vulnerability management system and conducted regular assessments
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Coordinated security patching across all enterprise systems
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Operations</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed SIEM solutions and developed detection rules
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Monitored security metrics and generated compliance reports
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Previous Position 1 */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Ayeyarwady Farmers Development Bank</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Oct 2023 - Feb 2025
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">Senior Cyber Security Engineer</p>
                
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Infrastructure</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Deployed advanced firewall and WAF solutions
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Implemented enterprise-wide security patch management
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Monitoring</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Configured SIEM tools with comprehensive data sources
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Provided tier-2 support for security incidents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Previous Position 2 */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Farmers Development Bank Mandalay</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Sep 2020 - Oct 2023
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">IT Security Engineer</p>
                
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Endpoint Security</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed EDR solutions across 500+ endpoints
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Conducted regular security configuration audits
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">System Security</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Secured Active Directory and Office 365 environments
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Hardened virtualization infrastructure (vCenter/ESXi)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaShieldAlt className="mr-3" /> Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "CompTIA CySA+",
                "Certified Cyber Defense Analyst (CCDA)",
                "PCNSE (Palo Alto Networks)",
                "Google Cybersecurity Certificate",
                "OPSWAT Email Security Associate (OESA)",
                "OPSWAT Network Security Associate (ONSA)",
                "Junior Cybersecurity Analyst (Cisco)",
                "Fortinet Certified Associate",
                "Multi-Cloud Network Associate (Aviatrix)"
              ].map((cert, index) => (
                <div key={index} className="bg-slate-800/80 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all group">
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-2 rounded-lg mr-4 group-hover:bg-cyan-400/20 transition-all">
                      <FaShieldAlt className="text-cyan-400" />
                    </div>
                    <span className="font-mono text-cyan-300 text-sm">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaNetworkWired className="mr-3" /> Education
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-400 font-medium mb-2">B.Sc. (Botany)</h3>
                <p className="text-slate-300 font-mono text-sm">Yangon University of Distance Education</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-400 font-medium mb-2">Diploma in Network Engineering</h3>
                <p className="text-slate-300 font-mono text-sm">Scottish Qualifications Authority (SQA) UK</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaCode className="mr-3" /> Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-300 font-medium mb-3">Security Tools</h3>
                <ul className="space-y-2">
                  {["Trend Micro", "Palo Alto", "SIEM Solutions", "Nessus", "Metasploit", "Wireshark"].map((skill, i) => (
                    <li key={i} className="text-slate-300 text-sm">• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/80 p-4 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-300 font-medium mb-3">Networking</h3>
                <ul className="space-y-2">
                  {["Firewalls", "VPN", "IDS/IPS", "F5 WAAP", "Routing/Switching", "SD-WAN"].map((skill, i) => (
                    <li key={i} className="text-slate-300 text-sm">• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/80 p-4 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-300 font-medium mb-3">Systems</h3>
                <ul className="space-y-2">
                  {["Windows Server", "Linux", "Active Directory", "Office 365", "VMware", "Azure AD"].map((skill, i) => (
                    <li key={i} className="text-slate-300 text-sm">• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/80 p-4 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-300 font-medium mb-3">Cloud Security</h3>
                <ul className="space-y-2">
                  {["AWS Security", "Azure Security", "Cloud One", "CASB", "IAM", "Multi-Cloud"].map((skill, i) => (
                    <li key={i} className="text-slate-300 text-sm">• {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/80 py-6 border-t border-cyan-400/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-mono text-sm">
              © {new Date().getFullYear()} Thaw Zin Oo. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/thaw-zin-oo/" className="text-cyan-300 hover:text-white transition-colors">
                <FaLinkedin className="text-lg" />
              </Link>
              <Link href="https://github.com/Tanjurokun/" className="text-cyan-300 hover:text-white transition-colors">
                <FaGithub className="text-lg" />
              </Link>
              <Link href="mailto:thawzinoo0080@gmail.com" className="text-cyan-300 hover:text-white transition-colors">
                <FaEnvelope className="text-lg" />
              </Link>
            </div>
          </div>
        </footer>
      </div>

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
