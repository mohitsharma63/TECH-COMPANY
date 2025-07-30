import { Button } from "@/components/ui/button";
import { Phone, Eye, Medal, Cog, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useState } from "react";

const floatingElements = [
  { size: "w-16 h-16", position: "top-20 left-10", delay: 0 },
  { size: "w-8 h-8", position: "top-40 right-20", delay: 2 },
  { size: "w-12 h-12", position: "bottom-20 left-1/4", delay: 4 },
];

export function HeroSection() {
  const [startCounters, setStartCounters] = useState(false);
  const projectsCount = useCounterAnimation(500, 2000, startCounters);
  const teamCount = useCounterAnimation(50, 2000, startCounters);

  useEffect(() => {
    const timer = setTimeout(() => setStartCounters(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-primary/20 to-slate-800 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern tech office"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} floating-element opacity-20`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: element.delay, duration: 1 }}
        >
          <div className={`${element.size} bg-gradient-primary rounded-full`} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Digital <span className="gradient-text">Transformation</span>{" "}
              Company
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-300 mb-6 leading-relaxed"
            >
              Your Partner to Grow Your Business Digitally with{" "}
              <span className="text-secondary font-semibold">
                App Development
              </span>
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 text-slate-300">
                <Medal className="w-5 h-5 text-amber-400" />
                <span>Quality Services</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Cog className="w-5 h-5 text-emerald-400" />
                <span>Customized Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Users className="w-5 h-5 text-blue-400" />
                <span>User-Centric Design</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Let's Discuss
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect text-white border-white/20 hover:bg-white hover:text-slate-800 transition-all duration-300 text-lg px-8 py-4"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Technology innovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 glass-effect rounded-xl p-4 text-white backdrop-blur-md"
            >
              <div className="text-2xl font-bold">{projectsCount}+</div>
              <div className="text-sm opacity-80">Projects Done</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -top-10 -right-10 glass-effect rounded-xl p-4 text-white backdrop-blur-md"
            >
              <div className="text-2xl font-bold">{teamCount}+</div>
              <div className="text-sm opacity-80">Team Members</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
