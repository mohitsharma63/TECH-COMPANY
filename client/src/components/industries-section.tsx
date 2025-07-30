import { 
  Heart, 
  Trophy, 
  Building2, 
  UtensilsCrossed, 
  GraduationCap, 
  Users, 
  Car, 
  Home, 
  ShoppingCart, 
  Shirt, 
  Truck, 
  Hotel 
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";

const industries = [
  { icon: Heart, name: "Healthcare & Fitness", color: "text-red-500" },
  { icon: Trophy, name: "Sports", color: "text-green-500" },
  { icon: Building2, name: "Banking & Finance", color: "text-blue-500" },
  { icon: UtensilsCrossed, name: "Food & Restaurant", color: "text-orange-500" },
  { icon: GraduationCap, name: "Education", color: "text-purple-500" },
  { icon: Users, name: "Social Networking", color: "text-pink-500" },
  { icon: Car, name: "Automobile", color: "text-indigo-500" },
  { icon: Home, name: "Real Estate", color: "text-yellow-500" },
  { icon: ShoppingCart, name: "Retail", color: "text-emerald-500" },
  { icon: Shirt, name: "Fashion & Ecommerce", color: "text-rose-500" },
  { icon: Truck, name: "Transport", color: "text-cyan-500" },
  { icon: Hotel, name: "Hotel", color: "text-amber-500" },
];

export function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building the Future - Development & Coding Talent Redefining Industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer group hover-lift"
              >
                <Icon className={`text-3xl ${industry.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
                <h3 className="font-semibold text-sm text-slate-700">
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
