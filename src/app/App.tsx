import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe, 
  Cpu, 
  ChevronRight, 
  ArrowRight,
  Plus,
  Minus,
  Instagram,
  Send,
  Github,
  MessageSquare,
  Lock,
  Eye,
  Activity,
  DollarSign,
  PieChart as PieIcon,
  Layers,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Box,
  Hourglass,
  Share2
} from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Terms } from "@/app/components/terms";
import { Privacy } from "@/app/components/privacy";
import { CookiePolicy } from "@/app/components/cookie-policy";
import { StarField, GlowBlob, GlassCard, SectionHeading } from '@/app/components/universe-components';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { FAQ } from '@/app/components/faq';

import launchTexture from "figma:asset/ddf02415a17def7d561ee4228b7cb0b6932b3583.png";
import ecosystemGlow from "figma:asset/90b2dde31070f1cfdb577bb7f01701b556b9d163.png";
import coinImage from "figma:asset/d7e6ba1bdacfee6617542cb7390ca2dd060a7d94.png";

import zaiAppMockup from "figma:asset/8489580f091250fe939b8e46287c6940fda635cc.png";
import marketMockup from "figma:asset/c86ed21c894df81179d303c3db317edc6377d776.png";
import glowBlob from "figma:asset/63eefb0e7bd6885b114e7cc9e4a2add4cd51fdd7.png";
import ctaBg from "figma:asset/3dcedcae2c65107d56519b6e63da92e622406118.png";

import impactCoins from "figma:asset/9010532f58c36f80cd31df95bd4441a26e0cda9e.png";
import telegramIcon from "figma:asset/0a354fe30b98fef25ceff8e41093f6de54a78e9b.png";
import instagramIcon from "figma:asset/06d9b33715ebaa822bad91791975dbb5eca07022.png";

// --- Sub-components ---

const LogoTicker = () => {
  const partners = [
    { name: "HACKERNOON", link: "https://hackernoon.com/defi-had-its-hype-socialfi-is-the-new-vibe" },
    { name: "ANALYTICS INSIGHT", link: "https://www.analyticsinsight.net/cryptocurrency-analytics-insight/this-solana-app-pays-you-to-watch-content-meet-ze23-the-web3-game-changer" },
    { name: "BINANCE", link: "#" },
    { name: "COINMARKETCAP", link: "https://coinmarketcap.com/community/articles/685a8feec620a445d2251739/" },
    { name: "FINANCEFEEDS", link: "https://financefeeds.com/web3s-most-thrilling-social-app-is-here-ze23-redefines-what-tiktok-got-wrong/" },
    { name: "COINRISE", link: "https://thecoinrise.com/what-is-ze23-understanding-the-web3-socialfi-platform-that-pays-you-for-engagement/" },
    { name: "COINMOONER", link: "https://coinmooner.com/coins/ze23-z3" },
    { name: "COINSNIPER", link: "https://coinsniper.net/coin/82991" },
    { name: "ALTCOINDAILY", link: "https://altcoindaily.co/what-is-ze23-understanding-the-web3-socialfi-platform-that-pays-you-for-engagement/" },
    { name: "ZYCRYPTO", link: "https://zycrypto.com/solanas-next-breakout-star-ze23-leads-3-crypto-presales-drawing-massive-whale-attention-in-2025/" },
    { name: "CHAINPLAY", link: "https://chainplay.gg/blog/social-media-2-starts-now-5-must-watch-crypto-projects/" },
    { name: "PLAYTOEARN", link: "https://playtoearn.com/news/could-ze23-be-the-first-web3-app-to-challenge-traditional-social-media-giants" },
    { name: "TOPICOLIST", link: "https://topicolist.com/ze23" }
  ];
  
  return (
    <div className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div 
        className="flex gap-24 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {[...partners, ...partners].map((partner, i) => (
          <a 
            key={i} 
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-bold opacity-30 hover:opacity-100 transition-all duration-300 tracking-[0.5em] text-white hover:scale-110"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            {partner.name}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

const BeautifulCountdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-01-30T18:00:00Z').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 mb-32 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative rounded-[24px] overflow-hidden border border-white/5 bg-[#0a0a0a]">
        <div className="relative z-10 pt-10 pb-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-8 bg-purple-900/30" />
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.4em]">Initial Token Event</span>
            <div className="h-[1px] w-8 bg-purple-900/30" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[180px] border-y border-white/5">
            {timeUnits.map((unit, i) => (
              <div key={unit.label} className={`relative flex flex-col items-center justify-center p-4 ${i < 3 ? 'md:border-r border-white/5' : ''} ${i % 2 === 0 ? 'border-r md:border-r' : ''}`}>
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                  <img src={launchTexture} alt="" className="w-full h-full object-cover mix-blend-screen opacity-40 grayscale" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none text-white mb-3 tabular-nums">{String(unit.value).padStart(2, '0')}</span>
                  <span className="text-[7px] font-bold text-gray-600 uppercase tracking-[0.4em]">{unit.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-purple-600 shadow-[0_0_6px_rgba(147,51,234,0.6)]" />
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Launching Friday 20:00 EET</span>
            </div>
            <a 
              href="https://t.me/ZE23_Official" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-3 rounded-full border border-white/10 bg-white text-black hover:bg-white/90 text-[10px] font-bold uppercase tracking-[0.2em] transition-all inline-block"
            >
              JOIN COMMUNITY
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ code: 'EN', flag: '🇬🇧' });
  const languages = [
    { code: 'EN', flag: '🇬🇧' }, { code: 'RU', flag: '🇷🇺' }, { code: 'ZH', flag: '🇨🇳' }, { code: 'DE', flag: '🇩🇪' },
    { code: 'KO', flag: '🇰🇷' }, { code: 'ES', flag: '🇪🇸' }, { code: 'FR', flag: '🇫🇷' }, { code: 'JA', flag: '🇯🇵' },
  ];
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-4 py-1.5 h-[26px] min-w-[75px] justify-between rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black text-[9px] font-bold uppercase tracking-widest transition-all">
        <div className="flex items-center gap-2"><span className="text-xs leading-none">{selected.flag}</span><span className="leading-none">{selected.code}</span></div>
        {isOpen ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute top-full mt-2 right-0 left-0 rounded-2xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur-xl z-50 shadow-2xl">
            <div className="flex flex-col py-1">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => { setSelected(lang); setIsOpen(false); }} className={`flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors group ${selected.code === lang.code ? 'bg-purple-600/20' : ''}`}>
                  <span className="text-xs group-hover:scale-110 transition-transform">{lang.flag}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${selected.code === lang.code ? 'text-white' : 'text-gray-500'}`}>{lang.code}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-md bg-black/10">
      <Link to="/" className="flex items-center gap-1.5 z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Zap size={14} className="text-white fill-white" />
          </div>
          <span className="text-lg font-bold tracking-tighter uppercase">ZE23</span>
        </motion.div>
      </Link>
      
      {/* Centered Links */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[9px] font-bold text-gray-500 uppercase tracking-[0.25em]">
        <a href={isHome ? "#problems" : "/#problems"} className="hover:text-white transition-colors">Problems</a>
        <a href={isHome ? "#algorithm" : "/#algorithm"} className="hover:text-white transition-colors">Algorithm</a>
        <a href={isHome ? "#tokenomics" : "/#tokenomics"} className="hover:text-white transition-colors">Tokenomics</a>
        <a href={isHome ? "#faq" : "/#faq"} className="hover:text-white transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-4 z-10">
        <LanguageSelector />
        <motion.a 
          href="https://ze23.gitbook.io/ze23" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="px-5 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/5 text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all inline-block"
        >
          WHITEPAPER
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-48 px-6 overflow-hidden">
    <GlowBlob color="rgba(168, 85, 247, 0.2)" className="-top-20 -left-20" />
    <GlowBlob color="rgba(6, 182, 212, 0.15)" className="bottom-0 -right-20" delay={2} />
    <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-6 text-[8px] font-bold tracking-[0.4em] text-purple-400 uppercase">Social Finance Evolution</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-7xl md:text-[140px] font-light tracking-tighter mb-10 leading-[0.9]">The next Phase <br /><span className="font-normal italic bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">of SocialFi.</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base md:text-lg text-gray-400 max-w-xl mb-10 font-extralight leading-relaxed">The first decentralized social protocol that rewards users and creators equally. Powered by the ZAI algorithm on Solana.</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap gap-3 justify-center">
          <a 
            href="https://t.me/ZE23_Official" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all inline-block"
          >
            JOIN COMMUNITY
          </a>
          <a 
            href="https://ze23.gitbook.io/ze23" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3.5 rounded-full bg-[#0a0a0a] border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all inline-block"
          >
            WHITEPAPER
          </a>
        </div>
        <div className="flex -space-x-1.5 items-center">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden"><ImageWithFallback src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" /></div>
          ))}
          <span className="ml-3 text-[8px] font-bold text-gray-500 uppercase tracking-widest">3k+ Early Adopters</span>
        </div>
      </motion.div>
      <BeautifulCountdown />
    </div>
  </section>
);

const ProblemsSection = () => {
  const problems = [
    { title: "CREATOR\nMONETIZATION\nDELAYS", desc: "Platforms often take weeks to pay creators — ZE23 offers instant monetization." },
    { title: "EXTREME\nFAN\nPASSIVITY", desc: "Viewers get no financial return from the content they boost — ZE23 rewards them." },
    { title: "WEB2\nPLATFORM\nGREED", desc: "Most platforms retain all ad revenue — ZE23 distributes it easily." },
    { title: "WEB3\nADOPTION\nCOMPLEXITY", desc: "Crypto-native platforms often lack user-friendliness — ZE23 is built to onboard Web2 users." }
  ];
  return (
    <section id="problems" className="pt-32 pb-16 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8"><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-6xl md:text-[100px] font-light tracking-tighter leading-[0.9]">Problems We <br /><span className="font-normal italic">Solve</span></motion.h2></div>
          <div className="lg:col-span-4 lg:flex lg:justify-end"><motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:text-right text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed max-w-[320px]">How ZE23 empowers a new generation of creators and users by transforming outdated social platforms into transparent, rewarding ecosystems.</motion.p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/5">
          {problems.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3 }} className="p-10 border-r border-b border-white/5 group hover:bg-white/[0.02] transition-all duration-500">
              <div className="flex flex-col h-full">
                <h3 className="text-[12px] font-bold text-white uppercase tracking-[0.2em] mb-8 min-h-[60px] leading-[1.2] group-hover:text-purple-400 transition-colors whitespace-pre-line">{p.title}</h3>
                <p className="text-[13px] text-gray-500 font-extralight leading-relaxed group-hover:text-gray-300 transition-colors">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvestmentOpportunity = () => (
  <section className="py-2 px-6 border-t border-b border-white/5 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
    <div className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4 h-8">
      {[{ icon: <Box size={14} />, text: "Real Product" }, { icon: <Hourglass size={14} />, text: "Long-Term Mechanics" }, { icon: <Share2 size={14} />, text: "Viral Growth" }, { icon: <TrendingUp size={14} />, text: "Demand-Driven Price" }].map((item, i) => (
        <div key={i} className="flex items-center gap-2 group cursor-default">
          <div className="text-gray-600 group-hover:text-cyan-500/80 transition-colors">{item.icon}</div>
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-gray-500 group-hover:text-gray-300 transition-colors">{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

const EcosystemSection = () => {
  const items = [
    { num: "01", title: "Withdrawals", desc: "Users need tokens to claim their earnings and rewards." },
    { num: "02", title: "In-App Boosting", desc: "Use tokens to increase content visibility and reach." },
    { num: "03", title: "Fan Participation", desc: "Fans need tokens to earn a share of creator revenue." },
    { num: "04", title: "Creator Launches", desc: "Tokens power creator token deployments and launches." },
    { num: "05", title: "Ad Access", desc: "Brands must use tokens for advertising and promotion." },
    { num: "06", title: "Burn Model", desc: "A portion of all spending is burned to sustain price growth." }
  ];
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-black">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-60"><img src={ecosystemGlow} alt="" className="w-full h-full object-contain object-right mix-blend-screen" /></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-6xl md:text-[90px] font-light tracking-tighter leading-[0.9] mb-20">ZE23 Token <br /> Drives the Entire <br /><span className="font-normal italic">Ecosystem</span></motion.h2>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">HERE'S HOW IT WORKS:</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-10 border-white/5 group transition-all duration-500 ${i % 3 !== 2 ? 'md:border-r' : ''} ${i < 3 ? 'border-b' : ''}`}>
              <div className="text-[10px] text-gray-700 font-bold mb-8 group-hover:text-purple-500 transition-colors">{item.num}</div>
              <h3 className="text-xl font-normal mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h3>
              <p className="text-[13px] text-gray-500 font-extralight leading-relaxed group-hover:text-gray-300 transition-colors max-w-[240px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AlgorithmImpactSection = () => {
  const cards = [
    { 
      title: "Mining\nMechanism", 
      desc: "Watch time becomes a currency. The longer you engage, the more you earn in tokens.",
      icon: <Zap size={18} className="text-white/80" />
    },
    { 
      title: "AI Reward\nDistribution", 
      desc: "Fair and smart, based on content impact and user engagement.",
      icon: <Cpu size={18} className="text-white/80" />
    },
    { 
      title: "Memecoin\nCraze", 
      desc: "Launch and Trade Creators Branded Tokens similar with MEMECOINS",
      icon: <TrendingUp size={18} className="text-white/80" />
    },
    { 
      title: "Support-Driven\nCreativity", 
      desc: "Fans can financially support and benefit from high-performing content.",
      icon: <Users size={18} className="text-white/80" />
    }
  ];
  return (
    <section className="py-24 px-6 relative overflow-hidden border-t border-white/5 bg-black">
      {/* Background Image - Fixed to extreme right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none opacity-40 z-0 flex items-center justify-end">
        <img 
          src={coinImage} 
          alt="" 
          className="w-full h-full object-contain translate-x-1/3"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-3">
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">THE IMPACT:</span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-xl md:text-[32px] text-gray-400 font-extralight leading-[1.3] max-w-3xl">
              The ZAI AI Algorithm redefines social platforms from passive media hubs into self-sustaining digital economies. 
              For the first time, creators and consumers are part of the same financial ecosystem — 
              powered by intelligence, ownership, and collaboration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0c0c0c]/70 backdrop-blur-md border border-white/[0.03] rounded-[48px] p-10 group hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[250px]"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-3xl md:text-4xl font-normal text-white whitespace-pre-line leading-[1.1] tracking-tight">
                  {card.title}
                </h3>
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
              </div>
              
              <p className="text-[13px] text-gray-600 font-extralight leading-relaxed max-w-[260px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AlgorithmSection = () => {
  const innovations = [
    { 
      title: "Smart Automation", 
      desc: "Powered by AI, the algorithm continuously learns and adapts based on evolving content and viewer behavior, ensuring accurate, performance-driven payouts." 
    },
    { 
      title: "Decentralized Fairness", 
      desc: "With transparent rules and blockchain-backed validation, there's no central authority controlling who earns — it's meritocratic and trustless." 
    },
    { 
      title: "User Empowerment", 
      desc: "Every viewer becomes a potential earner. Every interaction, view, share and comment contributes to the economic engine." 
    },
    { 
      title: "Gamified Participation", 
      desc: "The AI introduces strategic reward timing, interactive events, and contests to keep engagement high and the economy active." 
    }
  ];

  return (
    <section id="algorithm" className="pt-12 pb-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Left: Mobile App Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-[550px] mx-auto">
              <ImageWithFallback 
                src={zaiAppMockup} 
                alt="ZAI App Mockups" 
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(147,51,234,0.3)]"
              />
            </div>
            {/* Floating particle effect behind phones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Right: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-5xl md:text-[80px] font-extralight tracking-tighter leading-[0.95] text-white mb-12">
              ZAI Algorithm – <br />
              <span className="opacity-80">Our Core <br /> Innovation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-extralight leading-relaxed max-w-lg">
              The ZAI Algorithm is the backbone of the platform's revenue-sharing model. 
              Creators and entertainers upload content, while fans actively support it by contributing tokens. 
              Instead of relying on passive views or abstract 'likes', every token contributed becomes part of an intelligent distribution engine.
            </p>
          </motion.div>
        </div>

        {/* Bottom: Why it's Innovative Grid */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Why it's innovative:</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-white/10 pt-12">
            {innovations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex gap-8">
                  {/* Decorative Side Line (matches screenshot style) */}
                  <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-30 group-hover:from-cyan-400 transition-colors" />
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-normal text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-gray-500 font-extralight leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TokenomicsSection = () => {
  const allocations = [
    { label: "Staking & Rewards", value: "40%", tokens: "920M", color: "text-purple-400" },
    { label: "Liquidity (DEX/CEX)", value: "30%", tokens: "690M", color: "text-cyan-400" },
    { label: "Project Participation", value: "15%", tokens: "345M", color: "text-blue-400" },
    { label: "Ecosystem & Marketing", value: "10%", tokens: "230M", color: "text-pink-400" },
    { label: "Private Sale", value: "5%", tokens: "115M", color: "text-indigo-400" },
  ];
  return (
    <section id="tokenomics" className="pt-16 pb-16 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1000px] bg-[radial-gradient(circle,rgba(88,28,135,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center justify-center px-3 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/5 mb-8 h-6"><span className="text-[9px] text-purple-400 uppercase tracking-[0.4em] font-bold leading-none">Protocol Economics</span></motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-7xl md:text-[120px] font-light tracking-tighter leading-none mb-6">Tokenomics</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-500 text-xs uppercase tracking-[0.3em] max-w-xl mx-auto leading-relaxed">A sustainable model built for the next phase of decentralized social networking.</motion.p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center h-[470px] w-full mb-8">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i} 
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }} 
                  transition={{ duration: 50 + i * 10, repeat: Infinity, ease: "linear" }} 
                  className="absolute border border-white/[0.02] rounded-full" 
                  style={{ width: `${280 + i * 45}px`, height: `${280 + i * 45}px` }} 
                />
              ))}
              {/* Add some "orbital dust" or stars on the rings */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{ width: `${325 + i * 90}px`, height: `${325 + i * 90}px` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500/40 rounded-full blur-[1px]" />
                </motion.div>
              ))}
            </div>
            <div className="relative z-20 group">
              <motion.div animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(168,85,247,0.1)", "0 0 80px rgba(168,85,247,0.2)", "0 0 40px rgba(168,85,247,0.1)"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black border border-white/10 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-cyan-900/20" /><div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity"><Zap size={80} className="text-white fill-white blur-[20px]" /></div>
                <div className="relative z-10 text-center"><span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold block mb-4">Total Supply</span><span className="text-5xl md:text-6xl font-light tracking-tighter text-white">2.3B</span><span className="text-[9px] text-purple-500 uppercase tracking-[0.4em] font-bold mt-4 block">Tokens</span></div>
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
              </motion.div>
            </div>
          </div>

          <div className="w-full max-w-5xl space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              {allocations.slice(0, 3).map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                  <div className="relative bg-black/60 backdrop-blur-xl border border-white/5 p-4 rounded-[20px] w-[220px] group-hover:border-purple-500/40 transition-all duration-300 group-hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-2"><span className={`text-[9px] font-bold uppercase tracking-widest ${item.color}`}>{item.label}</span><div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-purple-500 animate-pulse" /></div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl font-light text-white tracking-tighter">{item.value}</div>
                      <div className="text-[10px] text-gray-500 font-medium">{item.tokens}</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity"><span className="text-[7px] uppercase tracking-widest font-bold">Allocation 0{i + 1}</span><ArrowRight size={8} className="text-purple-400" /></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {allocations.slice(3, 5).map((item, i) => (
                <motion.div key={i + 3} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 3) * 0.1 }} className="group">
                  <div className="relative bg-black/60 backdrop-blur-xl border border-white/5 p-4 rounded-[20px] w-[220px] group-hover:border-purple-500/40 transition-all duration-300 group-hover:translate-y-[-5px]">
                    <div className="flex justify-between items-start mb-2"><span className={`text-[9px] font-bold uppercase tracking-widest ${item.color}`}>{item.label}</span><div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-purple-500 animate-pulse" /></div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl font-light text-white tracking-tighter">{item.value}</div>
                      <div className="text-[10px] text-gray-500 font-medium">{item.tokens}</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity"><span className="text-[7px] uppercase tracking-widest font-bold">Allocation 0{i + 4}</span><ArrowRight size={8} className="text-purple-400" /></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarketOpportunity = () => (
  <section className="pt-16 pb-24 px-6 relative overflow-hidden bg-black">
    {/* Background Glow behind the phone */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
      {/* Left side: Phone Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="relative z-10 flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[480px]">
          <ImageWithFallback 
            src={marketMockup} 
            alt="ZE23 App Interface" 
            className="w-full h-auto drop-shadow-[0_0_80px_rgba(168,85,247,0.2)]" 
          />
        </div>
      </motion.div>

      {/* Right side: Content */}
      <div className="relative z-10 lg:pr-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-[80px] font-extralight tracking-tighter leading-tight mb-8">
            Market <br /> Opportunity
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 font-extralight leading-relaxed mb-10 max-w-md">
            User activity powers token value. With just 30% of our target user base holding $50 in tokens, the token reaches $15M in circulating value — fueled by real utility inside the ZE23 App.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            { 
              val: "5B+", 
              label: "5+ Billion Users", 
              sub: "consume content online daily" 
            },
            { 
              val: "400M+", 
              label: "400M+ Web3 Users", 
              sub: "globally as of 2024" 
            },
            { 
              val: "$480B+", 
              label: "Creator Economy", 
              sub: "forecasted by 2027" 
            }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-6xl md:text-8xl font-light text-white/10 tracking-tighter leading-none -mb-2">
                {stat.val}
              </div>
              <div className="pl-1">
                <div className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-500 font-extralight uppercase tracking-widest">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-4 pb-12 px-8 md:px-16 bg-black">
    <div className="max-w-5xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-10">
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-light leading-snug tracking-tight text-white/80">
            The First Entertainment Network that Helps <span className="font-medium text-white">BOTH CREATORS & VIEWERS</span> <br className="hidden md:block" /> to Make Money Powered by AI & Blockchain
          </h2>
        </div>
      </div>

      {/* Middle Section: Socials & Links */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
        <div className="flex items-center gap-10">
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/ze23_app?igsh=NnZtdTVvaHU4ZmF3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/40 hover:text-white transition-colors"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="https://t.me/ZE23_Official" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Send size={20} strokeWidth={1.5} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <Link 
            to="/terms" 
            className="text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link 
            to="/privacy" 
            className="text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors"
          >
            Privacy & Policy
          </Link>
          <Link 
            to="/cookie-policy" 
            className="text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>

      {/* Bottom Section: Copyright & Disclaimer */}
      <div className="pt-8 border-t border-white/5 mt-12">
        <div className="flex flex-col gap-6">
          <p className="text-[9px] font-medium text-gray-700 uppercase tracking-[0.3em]">
            ZE23 @ 2026 All Right Reserved
          </p>
          <p className="text-[10px] leading-relaxed text-gray-600 max-w-4xl font-light">
            <span className="text-gray-500 font-medium">Disclaimer:</span> Tokens are the utility tokens of the ZE23 ecosystem, designed to power experiences and rewards within the platform. The information provided on this site does not constitute financial advice. This is not an investment offer, and the token does not represent shares or company ownership. Please read our Terms & Conditions before participating in the project.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <main>
    <Hero />
    <LogoTicker />
    <ProblemsSection />
    <AlgorithmSection />
    <AlgorithmImpactSection />
    <InvestmentOpportunity />
    <EcosystemSection />
    <TokenomicsSection />
    <MarketOpportunity />
    <section className="pt-24 pb-4 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[48px] overflow-hidden min-h-[450px] flex flex-col items-center justify-center text-center px-8 py-20"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={ctaBg} alt="" className="w-full h-full object-cover" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
              Be a Part <br /> of the Social Finance Revolution
            </h2>
            <p className="text-sm md:text-base text-white/90 font-light mb-10 max-w-lg mx-auto leading-relaxed">
              Claim your spot in the Web3 economy. Join the Revolution.
            </p>
            <a 
              href="https://t.me/ZE23_Official" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-4 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-all hover:scale-105"
            >
              JOIN COMMUNITY
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    <FAQ />
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 dark overflow-x-hidden">
        <StarField />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
