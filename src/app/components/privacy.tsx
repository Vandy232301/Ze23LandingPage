import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans pb-24">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Back to Ecosystem</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight mb-4">
            Privacy <span className="font-normal italic">Policy</span>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">
            ZE23 TECHNOLOGY LTD – Data Protection Framework
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 text-gray-300 leading-relaxed font-light text-[15px]"
        >
          <section className="bg-white/[0.02] border border-white/[0.05] rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
            <div className="space-y-10">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <p className="text-sm">
                  <span className="text-white font-medium block mb-1 uppercase tracking-wider text-[10px]">Company:</span>
                  ZE23 TECHNOLOGY LTD ("Company," "we," "our," or "us")
                </p>
                <p className="text-sm mt-4">
                  <span className="text-white font-medium block mb-1 uppercase tracking-wider text-[10px]">Address:</span>
                  Intershore Chambers, Road Town, Tortola, VG1110, British Virgin Islands
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">1. Purpose and Scope</h2>
                <p>
                  This Privacy Policy ("Policy") explains how we collect, use, disclose, and protect your personal information in connection with your participation in the ZE23 Project Participation and Token Acquisition and your use of our website, products, and services (collectively, the "Services"). By accessing or participating in our Services, you acknowledge and agree to this Policy.
                </p>
                <p>
                  For additional terms governing your participation in the Token Acquisition Phase, please refer to our Terms & Conditions. This Policy and our Terms & Conditions are intended to be read together as a single, cohesive framework.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">2. Information We Collect</h2>
                <p>We may collect and process the following types of information:</p>
                <ul className="space-y-4 list-none pl-2">
                  <li className="flex gap-4">
                    <span className="text-purple-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Contact Information:</span> Name, email address, phone number, or other information you provide voluntarily.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Wallet Information:</span> Cryptocurrency wallet addresses provided for token delivery and related blockchain activity.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Transaction Data:</span> Details of your acquisitions and transactions during the Project Phase.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-400 font-bold">•</span>
                    <p><span className="text-white font-medium">KYC/AML Information:</span> If applicable, identity verification documents and other information to comply with anti-money laundering (AML) and know-your-customer (KYC) requirements.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Technical Data:</span> IP addresses, device identifiers, browser types, operating systems, and usage data automatically collected through cookies and tracking technologies.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Communication Data:</span> Records of your interactions with us, including emails and support inquiries.</p>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">3. How We Use Your Information</h2>
                <p>We use your personal information to:</p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li>Facilitate your participation in the ZE23 Project and related transactions.</li>
                  <li>Verify your identity and eligibility for the Project Phase, including KYC/AML compliance where applicable.</li>
                  <li>Deliver acquired tokens to your designated wallet address.</li>
                  <li>Communicate updates, changes, and important information about the Project and ZE23 ecosystem.</li>
                  <li>Comply with legal, regulatory, and contractual obligations.</li>
                  <li>Enhance the security, stability, and effectiveness of our Services.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">4. Legal Basis for Processing</h2>
                <p>We process your personal information based on the following legal grounds:</p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li><span className="text-white">Contractual Necessity:</span> To fulfill obligations under the Terms & Conditions and to deliver tokens and services</li>
                  <li><span className="text-white">Legal Compliance:</span> To comply with legal and regulatory obligations, including KYC/AML laws.</li>
                  <li><span className="text-white">Legitimate Interests:</span> To protect the integrity of our Services and communicate relevant updates.</li>
                  <li><span className="text-white">Consent:</span> In limited cases, where you have expressly consented.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">5. Disclosure of Your Information</h2>
                <p>We may share your personal data with:</p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li><span className="text-white">Service Providers:</span> Third parties providing technical, payment, verification, or customer support services.</li>
                  <li><span className="text-white">Regulatory Authorities:</span> If required for compliance with applicable laws or legal proceedings.</li>
                  <li><span className="text-white">Corporate Transactions:</span> In the event of a merger, acquisition, or similar event.</li>
                </ul>
                <p className="italic text-purple-400/80">We will never sell or rent your personal data for marketing purposes.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">6. KYC/AML Compliance</h2>
                <p>
                  In connection with our obligations to comply with applicable anti-money laundering (AML) and know-your-customer (KYC) regulations, we may require you to submit additional identity verification documentation (such as government-issued ID, proof of address, or similar documents). This information will be used solely for regulatory compliance and will not be used for any unrelated purpose.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">7. Data Retention</h2>
                <p>
                  We retain your personal data only as long as reasonably necessary to fulfill the purposes described in this Policy, comply with legal obligations, and resolve disputes. When no longer needed, your data will be securely deleted or anonymized.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">8. International Data Transfers</h2>
                <p>
                  We may transfer your personal data to locations outside of your jurisdiction, including the British Virgin Islands, for processing and storage by our trusted providers. We implement reasonable safeguards to protect your data in accordance with applicable data protection laws.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">9. Security</h2>
                <p>
                  We employ appropriate technical and organizational measures to secure your personal data against unauthorized access, loss, misuse, or disclosure. However, no system can be guaranteed to be completely secure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">10. Your Rights and Choices</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li>Access, correct, or update your personal data.</li>
                  <li>Request deletion of personal data (where legally permitted).</li>
                  <li>Object to or restrict certain processing of your data.</li>
                  <li>Withdraw consent (where processing is based on your consent).</li>
                  <li>Lodge a complaint with your local data protection authority.</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact <a href="mailto:legal@ze23.app" className="text-cyan-400 hover:underline">legal@ze23.app</a>.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">11. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance user experience and monitor usage patterns. You can adjust your browser settings to manage or disable cookies.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on our website or shared via other appropriate channels.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">13. Dispute Resolution and Governing Law</h2>
                <p>
                  Any dispute or claim arising out of or relating to this Policy or your data shall be governed by the laws of the British Virgin Islands, consistent with our Terms & Conditions. We encourage you to contact us first to attempt an amicable resolution.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 text-center">
              <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                By participating in the ZE23 Project or using our Services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
