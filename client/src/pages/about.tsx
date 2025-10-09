import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import { Users, Award, Globe, Clock, Rocket, Target, Heart, Shield, Zap, TrendingUp, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Visionary leader with 15+ years driving digital transformation",
    specialties: ["Strategy", "Innovation", "Leadership"]
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Tech architect specializing in scalable enterprise solutions",
    specialties: ["Architecture", "Cloud", "AI/ML"]
  },
  {
    name: "Michael Thompson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Award-winning designer creating exceptional user experiences",
    specialties: ["UI/UX", "Branding", "Product Design"]
  },
  {
    name: "Emily Watson",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Operations expert ensuring seamless project delivery",
    specialties: ["Agile", "Quality", "Process"]
  }
];

const milestones = [
  { year: "2025", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
  { year: "2025", title: "Rapid Growth", description: "Building innovative solutions for clients worldwide" },
  { year: "2025", title: "Quality Excellence", description: "Committed to ISO 9001:2015 quality standards" },
  { year: "2025", title: "Innovation Focus", description: "Delivering cutting-edge technology solutions" }
];

const values = [
  {
    icon: Target,
    title: "Client-Centric",
    description: "Your success is our priority. We build solutions that drive real business results.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies to stay ahead of the curve.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Quality Obsessed",
    description: "Excellence in every line of code, every pixel, every interaction.",
    gradient: "from-rose-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Building lasting relationships through transparency and reliability.",
    gradient: "from-emerald-500 to-teal-500"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Projects Delivered", color: "text-blue-500" },
  { icon: Globe, value: "10+", label: "Countries Served", color: "text-purple-500" },
  { icon: Award, value: "50+", label: "Industry Awards", color: "text-amber-500" },
  { icon: Star, value: "98%", label: "Client Satisfaction", color: "text-emerald-500" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main id="main-content">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-pink-500/10" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-1 mb-6">
              <Zap className="w-3 h-3 mr-1" />
              About Us
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Proudly Crafting from
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">🇮🇳 India to the World</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                CodeRaft India is your trusted technology partner, combining Indian talent,
                innovation, and cost-effectiveness to deliver world-class digital solutions globally.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-slate-300">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
     
      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-violet-500/10 text-violet-600 mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Drives Us <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Forward</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision and guide our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className={`bg-gradient-to-r ${value.gradient} p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-violet-500/10 text-violet-600 mb-4">Our Milestones</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Journey of <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-violet-200 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-600" />
                <div className="bg-white p-6 rounded-xl shadow-lg ml-6">
                  <Badge className="bg-violet-500/10 text-violet-600 mb-2">{milestone.year}</Badge>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      

      {/* CTA Section */}
      <section className="py-20" aria-label="Call to Action">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into reality with cutting-edge technology and exceptional design
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-shadow"
                  aria-label="Start your project"
                >
                  Start Your Project
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/portfolio'}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
                  aria-label="View our portfolio"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}