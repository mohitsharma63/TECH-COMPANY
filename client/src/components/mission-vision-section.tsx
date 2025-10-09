import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-scroll-animations";

export function MissionVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Driving Innovation Through <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At CodeRaft IndiaIT Solutions, our mission is to harness the power of technology to drive innovation and empower businesses worldwide. Established in 2017, we boast a dedicated team of over 50 talented professionals, committed to delivering results-driven digital solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a track record of 500+ successful projects and counting, we prioritize client satisfaction above all else. Our relentless pursuit of excellence ensures that we consistently provide quality services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Digital innovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Our Vision
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Global Leadership in <span className="gradient-text">Digital Transformation</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our vision at CodeRaft IndiaIT Solutions is to be a globally recognized leader in digital transformation, renowned for our unwavering commitment to innovation, excellence, and client satisfaction.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We strive to continuously push boundaries, leveraging cutting-edge technologies and strategic insights to drive sustainable growth and success for our clients worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
