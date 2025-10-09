
import { Button } from "@/components/ui/button";
import { Phone, Eye, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export function HeroSection() {
  const [startCounters, setStartCounters] = useState(false);
  const projectsCount = useCounterAnimation(500, 2000, startCounters);
  const teamCount = useCounterAnimation(50, 2000, startCounters);
  const clientsCount = useCounterAnimation(215, 2000, startCounters);

  useEffect(() => {
    const timer = setTimeout(() => setStartCounters(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Mobile app Development",
      items: [
        { icon: "📱", name: "iPhone" },
        { icon: "🤖", name: "Android" },
        { icon: "📲", name: "iPad" },
        { icon: "⚡", name: "React Native" },
        { icon: "🔷", name: "Ionic" },
        { icon: "🦋", name: "Flutter" },
        { icon: "🔄", name: "Hybrid" },
        { icon: "🎨", name: "Mobile UI/UX" }
      ]
    },
    {
      title: "Web Development",
      items: [
        { icon: "🐘", name: "PHP" },
        { icon: "☕", name: "Java" },
        { icon: "💛", name: "JavaScript" },
        { icon: "🟢", name: "Node" },
        { icon: "📚", name: "Full Stack" },
        { icon: "📝", name: "Wordpress" },
        { icon: "🍃", name: "Spring Boot" },
        { icon: "⚛️", name: "Reactjs" }
      ]
    },
    {
      title: "Software Consulting",
      items: [
        { icon: "👥", name: "CRM" },
        { icon: "📊", name: "BI" },
        { icon: "🏢", name: "ERP" },
        { icon: "☁️", name: "Cloud" },
        { icon: "🔧", name: "Middleware" }
      ]
    },
    {
      title: "Microsoft Solutions",
      items: [
        { icon: "🌐", name: "ASP.Net" },
        { icon: "📋", name: "Sharepoint" },
        { icon: "☁️", name: "Azure" },
        { icon: "🔶", name: "AWS" },
        { icon: "💼", name: "Dynamics CRM" },
        { icon: "🏪", name: "Sitecore CMS" },
        { icon: "📱", name: "Site CRM" }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-violet-400" />
              <span className="text-sm font-bold text-violet-300">
                🇮🇳 India's Premier Development Partner
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-slate-800">Building Digital</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Excellence Together
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
              Transform your vision into reality with world-class software solutions. ISO certified quality, innovative technology, and exceptional support.
            </p>
          </motion.div>

          {/* Services Grid - Asian Style Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-x sm:divide-y-0 lg:divide-y-0 divide-slate-200">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="p-4 sm:p-6 hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-600">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
                      >
                        <span className="text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                          {item.icon}
                        </span>
                        <span className="text-xs sm:text-sm font-medium truncate">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats and CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{projectsCount}+</div>
                <div className="text-xs text-slate-600 mt-1">Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">{clientsCount}+</div>
                <div className="text-xs text-slate-600 mt-1">Clients</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl sm:rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600">{teamCount}+</div>
                <div className="text-xs text-slate-600 mt-1">Experts</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-xs text-slate-600 mt-1">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-end px-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-slate-700 border-2 border-slate-300 hover:bg-slate-50 hover:border-blue-600 transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 px-4"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">5+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
