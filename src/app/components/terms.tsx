import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans pb-24 relative z-20">
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
            Terms & <span className="font-normal italic">Conditions</span>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">
            ZE23 TECHNOLOGY LTD – Project Participation & Token Acquisition
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
            <p className="mb-8">
              <span className="text-white font-medium">Company:</span> ZE23 TECHNOLOGY LTD, incorporated under the laws of the British Virgin Islands with company number 2176927 and its registered address at Intershore Chambers, Road Town, Tortola, VG1110, British Virgin Islands (hereinafter referred to as the "Company").
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">1. Introduction</h2>
                <p>
                  These Terms & Conditions ("Terms") set forth the legally binding framework under which participants ("Participants") may engage in the acquisition of tokens and broader participation in the ZE23 project during the initial launch phase ("Phase"). By engaging with the Project, Participants affirmatively represent that they have reviewed, comprehended, and unconditionally accepted these Terms, including all disclaimers, risk disclosures, and waivers contained herein. The Participant's engagement in the Phase constitutes an irrevocable commitment to adhere to the conditions described herein.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">2. Nature of Tokens</h2>
                <p>
                  The tokens are expressly and solely designed as utility tokens to be employed within the ZE23 ecosystem, conferring functional access rights to specific features and functionalities offered through the ZE23 platform, including, but not limited to, advertising mechanisms, staking pools, creator-fan interactions, and revenue-sharing models powered by the proprietary ZAI algorithm. For the avoidance of doubt, tokens shall not in any manner be interpreted or construed as constituting equity, debt, or any other form of security, share, or ownership interest in the Company or its affiliates. No voting rights, dividend entitlements, or governance privileges are attached to the tokens. The Company makes no representations or warranties regarding the classification or treatment of tokens under any applicable securities, commodities, or financial regulatory regimes, and Participants expressly acknowledge that tokens are not offered or intended as investments or financial instruments.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">3. Purchase Mechanisms & Payment Terms</h2>
                <p>
                  All acquisitions of tokens shall be denominated and transacted in USDC (operating on the Solana blockchain) or SOL cryptocurrency. Participants acknowledge that all payments are final, irrevocable, and not subject to rescission, refund, or chargeback under any circumstances. Token allocations are contingent upon the phase-specific valuation model established by the Company, which may be subject to amendment at the sole discretion of the Company in response to evolving market, technical, or regulatory considerations.
                </p>
                <p>
                  The Participant acknowledges and warrants that they are solely responsible for ensuring the accuracy of any wallet address or blockchain credentials provided to the Company for the receipt of tokens and that the Company shall not be liable for any losses, delays, or misdirected tokens resulting from errors or omissions in such details. Participants further affirm that their participation in the Phase complies with the applicable laws and regulations of the jurisdiction in which they reside or are domiciled.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">4. Vesting & Unlocking Schedules</h2>
                <p>
                  To promote orderly market behavior and minimize adverse impacts on token value, all tokens allocated during the Phase are subject to the following unlock and vesting schedules:
                </p>
                <div className="space-y-6 pl-4 border-l border-purple-500/30">
                  <p>
                    <span className="text-purple-400 font-medium block mb-1">Private Participants:</span>
                    Ten percent (10%) of allocated tokens shall become transferable and accessible five (5) days following the TGE (Token Generation Event), with the remaining ninety percent (90%) vesting in equal, linear installments over a period of eight (8) months.
                  </p>
                  <p>
                    <span className="text-cyan-400 font-medium block mb-1">Public Phase Participants:</span>
                    Five percent (5%) of allocated tokens shall become accessible ten (10) days subsequent to the TGE, with the balance of ninety percent (90%) vesting in equal, linear tranches over a period of ten (10) months.
                  </p>
                </div>
                <p>
                  The Company retains the unilateral discretion to amend, extend, or modify these schedules where necessary to ensure compliance with legal obligations, mitigate systemic risks, or preserve the long-term sustainability of the ecosystem.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">5. Purpose & Functionality of Tokens</h2>
                <p>
                  The fundamental objective of the token is to establish a decentralized medium of exchange and unit of account within the ZE23 ecosystem, facilitating a dynamic economy wherein Participants can engage with content creators, purchase advertising inventory, stake tokens to participate in revenue-sharing opportunities, and access premium features curated by the platform. The token's architecture and functionality are explicitly designed to stimulate utility-driven demand and foster an ecosystem wherein value accrues from active participation and adoption rather than speculative trading alone. The Company anticipates that continued engagement and token usage will contribute to sustainable tokenomics and long-term viability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">6. Acknowledgment of Risks & Disclaimers</h2>
                <p>Participants explicitly acknowledge and accept that:</p>
                <ul className="space-y-4 list-none">
                  <li><span className="text-white font-medium">Nature of Tokens:</span> Tokens do not constitute securities, investment contracts, or financial instruments of any kind.</li>
                  <li><span className="text-white font-medium">Technological Risks:</span> Blockchain networks and smart contracts are inherently susceptible to vulnerabilities, technical failures, bugs, and third-party attacks that may result in the partial or total loss of tokens or functionality.</li>
                  <li><span className="text-white font-medium">Regulatory Uncertainty:</span> Legislative or regulatory changes in any jurisdiction may materially affect the ability to utilize, trade, or otherwise interact with tokens or related services.</li>
                  <li><span className="text-white font-medium">Market Volatility:</span> The digital asset markets are volatile by nature and Participants may experience substantial fluctuations in the perceived or actual value of tokens without any recourse to the Company.</li>
                  <li><span className="text-white font-medium">No Guarantees:</span> The Company provides no assurances, representations, or warranties with respect to the timing or success of the TGE, the listing or liquidity of tokens on any exchange, or the potential for financial returns. Participants engage in this Phase entirely at their own risk and based on their own independent assessment.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">7. Representations & Warranties by Participants</h2>
                <p>By participating in the Phase and engaging with the Project, the Participant represents, warrants, and covenants that:</p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li>They possess the requisite legal capacity and authority to enter into these Terms and participate in the Project.</li>
                  <li>They are not a citizen, resident, or entity of the United States or any other jurisdiction where participation in crypto token projects is prohibited or restricted.</li>
                  <li>Funds used for token acquisition are not derived from illicit sources and are free of encumbrances.</li>
                  <li>They have carefully reviewed the ZE23 whitepaper, project documentation, and these Terms, and have conducted their own due diligence.</li>
                  <li>They are participating in the Project based on their own analysis and not in reliance on any representation or warranty of future performance or guaranteed returns by the Company.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">8. Token Generation Event (TGE) & Token Delivery</h2>
                <p>
                  The Company shall inform Participants of the scheduled date for the TGE. Upon completion of the TGE, tokens will be delivered to the wallet address provided by each Participant. Delivery shall be deemed complete upon transmission to the designated blockchain address, and the Company shall bear no liability for subsequent loss, misplacement, or technical difficulties related to wallet configurations or blockchain network disruptions. The Company will endeavor to maintain transparent and timely communications throughout the vesting and delivery process.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">9. Failure or Delay of TGE</h2>
                <p>
                  In the event that the TGE is delayed, suspended, or rendered infeasible due to unforeseen legal, technical, or market-related factors, the Company shall have the sole and exclusive discretion to:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li>Adjust the TGE timeline to reflect prevailing circumstances</li>
                  <li>Offer alternative forms of compensation, including but not limited to conversion to subsequent project phases or allocation of platform credits</li>
                  <li>Regulatory compliance efforts</li>
                </ul>
                <p>
                  These measures are implemented in good faith to preserve the integrity and long-term viability of the ZE23 ecosystem and shall not be construed as an admission of liability or an undertaking of financial obligation to Participants beyond the scope of these Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">11. Non-Participation in Collective Actions</h2>
                <p>
                  Participants expressly acknowledge and agree that they will not participate in, support, or initiate any collective legal proceeding, including class-action lawsuits or group arbitration, against the Company, its directors, officers, or affiliates. All disputes shall be resolved exclusively on an individual basis through confidential and binding arbitration conducted in the British Virgin Islands. Both parties commit to first pursuing a mutually constructive dialogue to resolve disputes amicably prior to engaging in any formal arbitration processes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">12. Confidentiality</h2>
                <p>
                  Participants agree to maintain in strict confidence all proprietary information, business practices, and communications received from the Company in connection with the Project. Disclosure of such information to any third party is prohibited without the prior express written consent of the Company.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">13. Governing Law & Entire Agreement</h2>
                <p>
                  These Terms constitute the entire and exclusive agreement between the Participant and the Company with respect to the Project and supersede all prior or contemporaneous understandings, agreements, representations, and warranties. These Terms shall be governed by and construed in accordance with the laws of the British Virgin Islands, without regard to conflicts of law principles. Any provision of these Terms found invalid or unenforceable shall not affect the validity of the remaining provisions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">14. Disclaimer</h2>
                <p>
                  These Terms do not constitute investment advice or an offer of securities in any jurisdiction. Participation in crypto-related activities entails significant risk, including the potential for the complete loss of funds. Participants are strongly encouraged to consult independent legal, financial, and tax advisors before participating.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">15. HITT Token Ecosystem Integration</h2>
                <p>
                  The ZE23 ecosystem acknowledges and integrates with the HITT Token ecosystem. HITT is a specialized utility token operating on the Polygon network, specifically engineered to unlock advanced functionality in Identity Security through blockchain-verified protocols. Within the ZE23 project, HITT Token serves as a critical infrastructure layer to enhance user privacy, secure digital identities, and provide a decentralized framework for cross-platform security. Participants acknowledge that HITT and tokens are distinct assets with unique technological foundations and regulatory considerations, yet they work in synergy to provide a more secure environment for SocialFi interactions.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 text-center">
              <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                By participating in the ZE23 Project and Token Acquisition, you confirm that you have read, understood, and voluntarily accepted these Terms in full.
              </p>
            </div>
          </section>

          {/* MiCA Section */}
          <section className="bg-purple-500/5 border border-purple-500/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
            <h2 className="text-white text-xl font-medium tracking-tight mb-8">MiCA Risk Disclosure Statement</h2>
            <div className="space-y-6 text-[14px] text-gray-400">
              <p>
                <span className="text-white font-medium">Important Notice:</span> The information provided on this website, including any information relating to the ZE23 Project and associated services, is intended solely for general informational purposes. This content is not a prospectus or a financial promotion, nor does it constitute an offer to sell or a solicitation of an offer to buy any financial instruments within the meaning of the Markets in Crypto-Assets Regulation (MiCA) of the European Union.
              </p>
              <p>
                The ZE23 Token is designed as a utility token within the ZE23 ecosystem. It does not represent equity, debt, or any form of financial security, and is not intended for speculative investment. Participation in the ZE23 Project involves significant risks, including but not limited to:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>High volatility and rapid price fluctuations inherent in digital assets.</li>
                <li>Regulatory uncertainty in various jurisdictions, which may impact the availability or legality of tokens.</li>
                <li>Technological risks associated with blockchain networks, including potential smart contract vulnerabilities.</li>
                <li>The complete loss of any funds contributed during the Phase.</li>
              </ul>
              <p>
                Prospective participants must conduct their own due diligence, assess their risk tolerance, and consult with professional legal, financial, or tax advisors before engaging in the ZE23 Project. By participating, you acknowledge that you have read and understood this disclosure and the associated risks, and that you are doing so on your own initiative and responsibility.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
