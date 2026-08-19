import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Menu,
  X,
  Download,
  Zap,
  Lock,
  Sliders,
  Users,
  ChevronRight,
  Star
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloadCount, setDownloadCount] = useState(104850);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
    const apkUrl = 'https://example.com/path-to-your/GoxteAI.apk';
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'GoxteAI.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    'Enterprise',
    'Privacy',
    'Modes',
    'Productivity',
    'Dashboard',
    'About Us',
    'Contact'
  ];

  const features = [
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: "Ultra Privacy Guard",
      description: "Zero data tracking, built-in ad blocker, and high-grade encryption to protect your digital footprint."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Lightning Speed",
      description: "Powered by AI-driven resource allocation ensuring ultra-fast page load times with minimal RAM consumption."
    },
    {
      icon: <Sliders className="w-8 h-8 text-indigo-400" />,
      title: "Custom AI Modes",
      description: "Switch seamlessly between Work, Personal, Developer, and Incognito modes tailored for your needs."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Malware & Phishing Protection",
      description: "Real-time threat engine blocks dangerous websites and untrusted app extensions instantly."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GoxteAI",
    "operatingSystem": "ANDROID",
    "applicationCategory": "BrowserApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "33000"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white font-sans antialiased selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-cyan-600/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <header className={`sticky top-0 z-40 backdrop-blur-md bg-[#07090e]/80 border-b transition-all duration-300 ${scrolled ? 'border-white/10 py-3' : 'border-white/5 py-4'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 group-hover">
              <Zap className="w-6 h-6 text-white fill-current" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              GoxteAI
            </span>
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-Screen Dark Overlay Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#07090e]/95 backdrop-blur-2xl flex flex-col justify-between p-8 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-white">GoxteAI Menu</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="max-w-xl mx-auto w-full my-auto flex flex-col gap-5 text-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl md:text-3xl font-semibold text-slate-300 hover:text-blue-400 hover:tracking-wider transition-all duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="max-w-6xl w-full mx-auto text-center text-sm text-slate-500 border-t border-white/5 pt-6">
          © {new Date().getFullYear()} GoxteAI Inc. All rights reserved.
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="relative mb-8 animate-[fadeInUp_0.8s_ease-out]">
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full scale-125 animate-pulse" />
          <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900/90 border border-white/15 shadow-2xl shadow-blue-500/20 flex items-center justify-center">
            <ShieldCheck className="w-12 h-12 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-white leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
          Private. Secure. <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Superfast.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          We believe privacy and performance belong together. Download <span className="text-white font-semibold">GoxteAI</span> to upgrade the way you browse and work online.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 border border-blue-400/20"
          >
            <Download className="w-5 h-5" />
            Download for Android
          </button>
        </div>
        <a
          href="#other-platforms"
          className="mt-6 text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group animate-[fadeInUp_0.8s_ease-out_0.4s_both]"
        >
          Need GoxteAI for other platforms?
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* Features & Stats Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Live Download Counter Card */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-slate-900/40 to-indigo-900/20 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">
                {downloadCount.toLocaleString()}+
              </div>
              <p className="text-sm text-slate-400">Total Active Downloads Worldwide</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20 text-sm font-semibold">
            <Star className="w-4 h-4 fill-current" />
            4.9 Rating (33K+ Reviews)
          </div>
        </div>

        {/* Glassmorphic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-blue-500/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-5 p-3.5 rounded-xl bg-white/5 w-fit border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GoxteAI. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
