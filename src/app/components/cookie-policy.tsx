import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const browserLinks = [
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" },
    { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" },
    { name: "Internet Explorer", url: "https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" },
    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" },
    { name: "Brave", url: "https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing-" }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans pb-24">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
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
            Cookie <span className="font-normal italic">Policy</span>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">
            ZE23 TECHNOLOGY LTD – User Experience Framework
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
              
              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">1. What are cookies?</h2>
                <p>
                  Cookies are small text files containing a string of characters that can be placed on your computer or mobile device that uniquely identifies your browser or device. We may use technologies like cookies, pixels, and local storage to deliver, secure, and understand products and services.
                </p>
                <p>Depending on their purpose, cookies can be classified into several categories, such as:</p>
                <ul className="space-y-4 list-none pl-2">
                  <li className="flex gap-4">
                    <span className="text-cyan-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Technical cookies</span> which are used to run and protect our website or app while others are used to make it more efficiently.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-cyan-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Analytic and advertising cookies</span> which enable us to analyze your activity on our website or app so that we can serve you better in the future.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-cyan-400 font-bold">•</span>
                    <p><span className="text-white font-medium">Non-tracking cookies</span> which are used to store your decisions in terms of your opt-out choices.</p>
                  </li>
                </ul>
                <p>
                  Most cookies contain a unique identifier called a cookie ID (a string of characters that websites and servers associate with the browser on which the cookie is stored). It allows our websites and servers to distinguish the browser from other browsers that store different cookies, and to recognize each browser by its unique cookie ID.
                </p>
                <p>
                  If we do collect personal data through our website or app, we'll be upfront about this. We'll make it clear when we collect personal information, and we'll explain what we intend to do with it.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">2. What are cookies used for?</h2>
                <p>
                  Cookies and other technologies allow a site or services to know if your computer or device has visited it before. These technologies can then be used to deliver products, services, and ads, help us understand how the site or service is being used, help you navigate between pages efficiently, help us remember your preferences, and generally improve your experience in using our services. Cookies can also help ensure marketing you see online is more relevant to you and your interests.
                </p>
                <p>
                  We, ZE23, use cookies and similar technologies to offer you the best experience during your journey on our website or app, improving your experience and helping to protect us and our users.
                </p>
                <p>
                  We may use these technologies to deliver the service, provide you with a service that is easy to use, enable you to move around the Service and use its features, such as accessing secure areas, and store information so that the app and website respond faster. We may use these technologies to collect information about how you use the Service, for example which pages you go to most often and whether you get error messages from certain pages.
                </p>
                <p>
                  We may use these technologies to allow us to remember choices you make (such as your user name, language or the region you're in) and tailor the Service to provide enhanced features and content for you. These cookies can also be used to remember changes you've made to text size, font, and other parts of pages that you can customize.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">3. How long will cookies stay on my device?</h2>
                <p>
                  The length of time a cookie will stay on your computer or mobile device depends on whether it is a 'persistent' or 'session' cookie. <span className="text-white">Session cookies</span> will only stay on your device until you close your browser. <span className="text-white">Persistent cookies</span> stay on your computer or mobile device until they expire or are deleted.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-white text-lg font-medium tracking-tight">4. How do I change my cookie settings?</h2>
                <p>Most browsers will allow you to choose the level of privacy settings you want. This lets you control your cookie and local storage settings so that you can:</p>
                <ul className="space-y-2 list-disc pl-5 text-gray-400">
                  <li>See what cookies or other locally stored data you've got and delete them on an individual basis;</li>
                  <li>Block third-party cookies or similar technology;</li>
                  <li>Block cookies or similar technology from particular sites;</li>
                  <li>Block all cookies or similar technologies from being set; or</li>
                  <li>Delete all cookies/site data.</li>
                </ul>
                <p className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl text-sm italic">
                  Blocking and/or deleting cookies or similar technologies may mean that any website or app preferences will be lost. Blocking all cookies or similar technologies may also mean certain functionality on the website or app will not operate properly. Please therefore note that if you choose to refuse or delete cookies you may not be able to use the full functionality of the website or app.
                </p>
                <p>
                  To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.allaboutcookies.org</a>.
                </p>
                <div className="pt-6">
                  <p className="text-white font-medium mb-4">Manage popular browsers:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {browserLinks.map((browser) => (
                      <a 
                        key={browser.name}
                        href={browser.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-white bg-white/[0.03] border border-white/[0.05] p-3 rounded-lg text-center transition-all hover:bg-white/[0.08]"
                      >
                        {browser.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-16 pt-12 border-t border-white/5 text-center">
              <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                ZE23 SocialFi – Secure & Transparent Browsing
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
