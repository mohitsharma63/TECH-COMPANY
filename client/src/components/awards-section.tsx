import { Trophy, Smartphone, Code, Gamepad } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";

const awards = [
  {
    icon: Trophy,
    title: "Highly Recommended Software Company 2025",
    gradient: "from-blue-50 to-indigo-100",
    iconColor: "text-amber-500",
  },
  {
    icon: Smartphone,
    title: "Top Mobile App Development Company 2024",
    gradient: "from-purple-50 to-pink-100",
    iconColor: "text-purple-500",
  },
  {
    icon: Code,
    title: "Top Web Development Company 2024",
    gradient: "from-emerald-50 to-teal-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: Gamepad,
    title: "Top Game Development Company 2025",
    gradient: "from-orange-50 to-red-100",
    iconColor: "text-orange-500",
  },
];

export function AwardsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="gradient-text">Awards</span> & Recognition
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Celebrating Excellence: A Legacy of Awards and Recognitions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center hover-lift cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${award.gradient} p-6 rounded-2xl mb-4 hover:shadow-lg transition-shadow duration-300`}
                >
                  <Icon className={`text-4xl ${award.iconColor} mb-4 mx-auto`} />
                  <h3 className="font-semibold text-sm text-slate-700">
                    {award.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-slate-700">
            Our Payment Partners
          </h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-purple-600">PhonePe</div>
            <div className="text-2xl font-bold text-blue-600">Cashfree</div>
            <div className="text-lg font-semibold text-slate-600">
              FIFS Member
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
