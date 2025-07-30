import { Smile, DollarSign, Download, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const stats = [
  {
    icon: Smile,
    value: 97,
    suffix: "%",
    label: "Client Satisfaction",
    color: "text-yellow-300",
  },
  {
    icon: DollarSign,
    value: 10,
    suffix: "M+",
    label: "Revenue Generated",
    color: "text-green-300",
  },
  {
    icon: Download,
    value: 1,
    suffix: "M+",
    label: "App Downloads",
    color: "text-purple-300",
  },
  {
    icon: Trophy,
    value: 500,
    suffix: "+",
    label: "Projects Done",
    color: "text-amber-300",
  },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Exceeding Expectations
          </h2>
          <p className="text-xl text-blue-100 mb-16 max-w-3xl mx-auto">
            Our App Development Success Story in Numbers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const animatedValue = useCounterAnimation(stat.value, 2000, isVisible);
            
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
                className="text-center"
              >
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                  <Icon className={`text-4xl ${stat.color} mb-4 mx-auto`} />
                  <div className="text-4xl font-bold text-white">
                    {animatedValue}{stat.suffix}
                  </div>
                  <div className="text-sm text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
