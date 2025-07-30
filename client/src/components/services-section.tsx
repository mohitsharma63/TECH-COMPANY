import { Smartphone, Laptop, Gamepad, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "ISO 9001:2015 Certified Mobile Application Development Company with 50+ developers",
    gradient: "from-blue-500 to-purple-600",
    technologies: [
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" },
      { name: "Flutter", icon: "💙" },
      { name: "Blockchain", icon: "🔗" },
    ],
  },
  {
    icon: Laptop,
    title: "Web Development",
    description: "Creating intuitive and engaging websites for seamless user experience",
    gradient: "from-emerald-500 to-teal-600",
    technologies: [
      { name: "Angular", icon: "🅰️" },
      { name: "Laravel", icon: "🎯" },
      { name: "PHP", icon: "🐘" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    icon: Gamepad,
    title: "Game Development",
    description: "Lead the gaming industry with innovative concepts and captivating experiences",
    gradient: "from-purple-500 to-pink-600",
    technologies: [
      { name: "Board Games", icon: "♟️" },
      { name: "Sports", icon: "⚽" },
      { name: "Action", icon: "⚡" },
      { name: "AR/VR", icon: "🥽" },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting user-friendly, visually appealing digital experiences",
    gradient: "from-pink-500 to-rose-600",
    technologies: [
      { name: "Figma", icon: "🎨" },
      { name: "Photoshop", icon: "📷" },
      { name: "XD", icon: "✨" },
      { name: "Illustrator", icon: "🖌️" },
    ],
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Business <span className="gradient-text">Digitally</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive App & Web Development Services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                className="service-card glass-effect rounded-2xl p-8 bg-white/60 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl`}>
                    <Icon className="text-2xl text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {service.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <span className="text-sm font-medium text-slate-700">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
