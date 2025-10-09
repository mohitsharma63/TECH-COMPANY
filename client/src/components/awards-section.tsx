
import { motion } from "framer-motion";
import { 
  Heart, Trophy, Building, UtensilsCrossed, GraduationCap, Users,
  Car, Home, ShoppingCart, Shirt, Truck, Hotel
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { icon: Heart, name: "Healthcare & Fitness", color: "from-rose-500 to-pink-500" },
    { icon: Trophy, name: "Sports", color: "from-emerald-500 to-teal-500" },
    { icon: Building, name: "Banking & Finance", color: "from-blue-500 to-cyan-500" },
    { icon: UtensilsCrossed, name: "Food & Restaurant", color: "from-orange-500 to-amber-500" },
    { icon: GraduationCap, name: "Education", color: "from-purple-500 to-violet-500" },
    { icon: Users, name: "Social Networking", color: "from-pink-500 to-rose-500" },
    { icon: Car, name: "Automobile", color: "from-slate-600 to-slate-700" },
    { icon: Home, name: "Real Estate", color: "from-cyan-500 to-blue-500" },
    { icon: ShoppingCart, name: "Retail", color: "from-green-500 to-emerald-500" },
    { icon: Shirt, name: "Fashion & Ecommerce", color: "from-fuchsia-500 to-purple-500" },
    { icon: Truck, name: "Transport", color: "from-indigo-500 to-blue-500" },
    { icon: Hotel, name: "Hotel", color: "from-amber-500 to-orange-500" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-cyan-50/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <Building className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Industries We Serve</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industries We{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building the Future - Development & Coding Talent Redefining Industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-200/50 hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
