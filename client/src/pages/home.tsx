
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import  AwardsSection  from "@/components/awards-section";
import { ServicesSection } from "@/components/services-section";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { StatsSection } from "@/components/stats-section";
import { IndustriesSection } from "@/components/industries-section";
import { TechnologiesSection } from "@/components/technologies-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import { Shield, Zap, Award, HeadphonesIcon, Globe, TrendingUp } from "lucide-react";
import Services from "./services";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "ISO Certified Quality",
      description: "International standards with Indian cost efficiency",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Agile teams working across Indian time zones for 24/7 progress",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Award-Winning Solutions",
      description: "Recognized excellence in software development from India",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Indian Support",
      description: "Dedicated support team always available for you",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Made in India, For the World",
      description: "Serving clients globally with Indian innovation",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "500+ Success Stories",
      description: "Proven track record with 98% client retention rate",
      color: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why <span className="gradient-text">Global Clients</span> Choose CodeRaft India
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            🇮🇳 India's Premier Development Partner - World-Class Quality at Competitive Pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AwardsSection />
      <WhyChooseUs />
      <Services />
      <MissionVisionSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
