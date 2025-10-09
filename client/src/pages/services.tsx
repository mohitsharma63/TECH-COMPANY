
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Gamepad2, 
  Palette, 
  Code, 
  Database,
  Cloud,
  Shield,
  Zap,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Rocket,
  LineChart,
  Lock
} from "lucide-react";

const serviceCategories = [
  {
    category: "Development Services",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    services: [
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that engage users",
        features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps", "App Maintenance"],
        technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Ionic"],
        pricing: "Starting from $5,000",
        popular: true
      },
      {
        icon: Globe,
        title: "Web Development",
        description: "Cutting-edge web applications with stunning user experiences",
        features: ["Full-Stack Development", "E-commerce Solutions", "CMS Integration", "API Development", "Performance Optimization"],
        technologies: ["React", "Vue.js", "Node.js", "Next.js", "TypeScript"],
        pricing: "Starting from $3,000",
        popular: true
      },
      {
        icon: Gamepad2,
        title: "Game Development",
        description: "Immersive gaming experiences across multiple platforms",
        features: ["2D/3D Games", "Mobile Gaming", "VR/AR Experiences", "Multiplayer Systems", "Game Monetization"],
        technologies: ["Unity", "Unreal Engine", "C#", "WebGL", "Blender"],
        pricing: "Starting from $8,000",
        popular: false
      }
    ]
  },
  {
    category: "Design & Strategy",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    services: [
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centered design that converts and delights",
        features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Design Systems"],
        technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"],
        pricing: "Starting from $2,500",
        popular: true
      },
      {
        icon: Sparkles,
        title: "Brand Identity",
        description: "Create memorable brands that stand out from the competition",
        features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy", "Social Media Assets"],
        technologies: ["Illustrator", "Photoshop", "InDesign", "After Effects"],
        pricing: "Starting from $3,500",
        popular: false
      }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
    services: [
      {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable and secure cloud infrastructure for modern businesses",
        features: ["Cloud Migration", "DevOps Automation", "Microservices", "Container Orchestration", "CI/CD Pipelines"],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
        pricing: "Starting from $4,500",
        popular: false
      },
      {
        icon: Lock,
        title: "Cybersecurity",
        description: "Protect your digital assets with enterprise-grade security",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring", "Incident Response"],
        technologies: ["OWASP", "Nessus", "Burp Suite", "Wireshark", "Splunk"],
        pricing: "Starting from $6,000",
        popular: false
      }
    ]
  },
  {
    category: "Data & AI",
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    services: [
      {
        icon: Database,
        title: "Data Analytics",
        description: "Transform raw data into actionable business insights",
        features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
        technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark"],
        pricing: "Starting from $5,500",
        popular: false
      },
      {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Intelligent solutions powered by cutting-edge AI technology",
        features: ["Natural Language Processing", "Computer Vision", "Recommendation Systems", "Chatbots", "Predictive Analytics"],
        technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
        pricing: "Starting from $7,500",
        popular: true
      }
    ]
  }
];

const processSteps = [
  {
    step: "01",
    icon: Rocket,
    title: "Discovery & Planning",
    description: "We dive deep into understanding your business goals, target audience, and project requirements"
  },
  {
    step: "02",
    icon: Palette,
    title: "Design & Prototype",
    description: "Creating intuitive wireframes and stunning visual designs that align with your brand"
  },
  {
    step: "03",
    icon: Code,
    title: "Development",
    description: "Building robust, scalable solutions using cutting-edge technologies and best practices"
  },
  {
    step: "04",
    icon: Shield,
    title: "Testing & QA",
    description: "Rigorous testing to ensure flawless performance, security, and user experience"
  },
  {
    step: "05",
    icon: Zap,
    title: "Launch & Deploy",
    description: "Seamless deployment with comprehensive support and monitoring"
  },
  {
    step: "06",
    icon: LineChart,
    title: "Growth & Support",
    description: "Ongoing optimization, maintenance, and feature enhancements"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Vision Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{category.category}</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden group">
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-violet-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies We Use</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-violet-100 text-violet-700 hover:bg-violet-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A proven methodology for delivering exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full border-0 bg-white hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="pt-8 text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-violet-600">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-violet-100">
              Let's discuss how we can help transform your ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-violet-600 hover:bg-violet-50">
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
