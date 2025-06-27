// app/page.tsx
'use client';

import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaShieldAlt, FaPhone, FaBirthdayCake, FaGlobe, FaNetworkWired } from 'react-icons/fa';

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
                <p className="text-xl mt-1 text-slate-300 font-mono">&lt;Cyber Security Specialist/&gt;</p>
                
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
                  <div className="flex items-center text-slate-300">
                    <FaBirthdayCake className="mr-2 text-cyan-400" />
                    <span className="font-mono text-sm">29-Dec-1995</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <FaGlobe className="mr-2 text-cyan-400" />
                    <span className="font-mono text-sm">Myanmar, Buddhist</span>
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
          {/* Career Objective */}
          <section className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-3" /> Career Objective
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Seeking a Cyber Security Engineer position with 5+ years of IT security experience. 
              Committed to contributing creativity and hard work toward organizational success 
              in the fast-developing cybersecurity field. Prepared to dedicate best efforts with 
              loyalty and participate in company growth.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaShieldAlt className="mr-3" /> Professional Experience
            </h2>
            
            <div className="space-y-6">
              {/* AYA Bank */}
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
                        Implemented vulnerability scanning tools and assessments
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Coordinated security patching across all systems
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">SOC Engineering</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Deployed and managed SIEM solutions
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Developed threat detection rules and use cases
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">PCI DSS Compliance</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Implemented and maintained PCI DSS controls
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Developed security policies and SOPs
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Operations</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed Trend Micro XDR and Cloud One solutions
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Monitored security metrics and provided reports
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Previous experiences would follow the same pattern */}
              {/* A Bank */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Ayeyarwady Farmers Development Bank</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Oct 2023 - Feb 2025
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">Senior Cyber Security Engineer</p>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Infrastructure</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Implemented advanced firewall and F5 WAAP solutions
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed security patch cycles and vulnerability assessments
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Operations</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Deployed SIEM tools with comprehensive data integration
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Provided technical support for security incidents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FDB Bank */}
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
                    <h4 className="text-cyan-300 font-medium mb-2">IT Security</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Security patching for firewalls and systems
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed Trend Micro EDR and Cloud One solutions
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">System Management</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed AD, Office 365, and hybrid environment
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Administered vCenter, ESXi, and virtual machines
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Network Infrastructure</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Configured and maintained branch networks and ATMs
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Managed storage and backup systems (Networker, Data Domain)
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
                    <span className="font-mono text-cyan-300">{cert}</span>
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

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaShieldAlt className="mr-3" /> Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Vulnerability Assessment",
                "SIEM & SOC Operations",
                "Endpoint Protection",
                "Firewall Administration",
                "PCI DSS Compliance",
                "Cloud Security",
                "Network Security",
                "Active Directory & O365",
                "Virtualization Security",
                "Web Application Firewall",
                "Incident Response",
                "Security Policies"
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

          {/* Personal Strengths */}
          <section className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-3" /> Personal Strengths
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Strong analytical and critical thinking skills",
                "Ability to work independently with minimal supervision",
                "Performs well under pressure",
                "Effective multitasking capabilities",
                "Quick learner with adaptability",
                "Excellent communication skills",
                "Strong organizational abilities",
                "Detail-oriented with thorough approach"
              ].map((strength, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <p className="text-slate-300">{strength}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
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
