import { Glasses, Brain, Box, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";

const technologies = [
  {
    icon: Glasses,
    title: "Virtual Reality",
    description: "Immersive experiences for training, demonstrations, and customer engagement",
    color: "text-blue-400",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Automation and intelligent decision-making to revolutionize business operations",
    color: "text-purple-400",
  },
  {
    icon: Box,
    title: "Augmented Reality",
    description: "Bridging digital and physical worlds for enhanced customer interaction",
    color: "text-emerald-400",
  },
  {
    icon: Bot,
    title: "ChatBot",
    description: "24/7 customer service automation with personalized interactions",
    color: "text-pink-400",
  },
];

export function TechnologiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 to-primary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Empowering Businesses with{" "}
            <span className="gradient-text">Future-Ready Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass-effect rounded-2xl p-8 text-center hover-lift backdrop-blur-md border border-white/10"
              >
                <Icon className={`text-4xl ${tech.color} mb-4 mx-auto`} />
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
