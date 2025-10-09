import { Button } from "@/components/ui/button";
import { Phone, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });
  
  const projectsCount = useCounterAnimation(500, 2000, isVisible);
  const clientsCount = useCounterAnimation(215, 2000, isVisible);
  const teamCount = useCounterAnimation(50, 2000, isVisible);

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Years of Experience
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Choose <span className="gradient-text">CodeRaft IndiaIT Solutions?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              🏆 <strong>Award-Winning Excellence:</strong> ISO 9001:2015 Certified with 50+ Industry Awards
              <br />
              💼 <strong>Proven Track Record:</strong> 500+ Successful Projects Delivered Globally
              <br />
              ⚡ <strong>Expert Team:</strong> 50+ Senior Developers & Designers at Your Service
              <br />
              🌍 <strong>Global Reach:</strong> Serving Clients in 10+ Countries Since 2017
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                <div className="text-2xl font-bold text-primary">{projectsCount}+</div>
                <div className="text-sm text-slate-600">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600">{clientsCount}+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-slate-600">Global Locations</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{teamCount}+</div>
                <div className="text-sm text-slate-600">Team Members</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get FREE Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-4"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Success Stories
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating contact card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 glass-effect rounded-xl p-6 text-slate-800 max-w-xs backdrop-blur-md"
            >
              <h3 className="font-bold mb-2">Ready to Start?</h3>
              <p className="text-sm mb-4">
                Turn your innovative ideas into reality with our expert development team.
              </p>
              <Button className="bg-gradient-primary text-sm">
                Partner with Experts Now!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
