
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";
import {
  Heart,
  Trophy,
  Building2,
  Utensils,
  GraduationCap,
  Users,
  Car,
  Home,
  ShoppingCart,
  Shirt,
  Truck,
  Hotel,
  Sparkles,
  TrendingUp
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "Healthcare & Fitness",
    description: "Digital health solutions",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600"
  },
  {
    icon: Trophy,
    name: "Sports",
    description: "Sports tech platforms",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    iconColor: "text-emerald-600"
  },
  {
    icon: Building2,
    name: "Banking & Finance",
    description: "Fintech innovations",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600"
  },
  {
    icon: Utensils,
    name: "Food & Restaurant",
    description: "F&B management systems",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    iconColor: "text-orange-600"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "E-learning platforms",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    iconColor: "text-purple-600"
  },
  {
    icon: Users,
    name: "Social Networking",
    description: "Community platforms",
    color: "from-pink-500 to-fuchsia-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600"
  },
  {
    icon: Car,
    name: "Automobile",
    description: "Automotive solutions",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50 dark:bg-slate-950/20",
    iconColor: "text-slate-700"
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property tech apps",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    iconColor: "text-cyan-600"
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    description: "E-commerce solutions",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600"
  },
  {
    icon: Shirt,
    name: "Fashion & Ecommerce",
    description: "Fashion tech platforms",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
    iconColor: "text-violet-600"
  },
  {
    icon: Truck,
    name: "Transport",
    description: "Logistics & delivery",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-700"
  },
  {
    icon: Hotel,
    name: "Hotel",
    description: "Hospitality management",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
    iconColor: "text-amber-600"
  }
];

export function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      id="industries"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-white/[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Industry Expertise
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Industries We{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Building the Future - Development & Coding Talent Redefining Industries
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`relative ${industry.bgColor} rounded-2xl p-4 sm:p-6 transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-${industry.iconColor}/10 cursor-pointer`}>
                  {/* Icon Container */}
                  <div className={`bg-gradient-to-br ${industry.color} w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white mb-1 sm:mb-2 line-clamp-2">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                    {industry.description}
                  </p>

                  {/* Hover Effect Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </div>

                {/* Floating Badge on Hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-2 -right-2 bg-white dark:bg-slate-800 rounded-full p-1.5 shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">
                Don't see your industry?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                We've worked with 50+ industries. Let's discuss your specific needs!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Let's Talk →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
