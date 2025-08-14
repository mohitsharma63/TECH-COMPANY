
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ServicesSection } from "@/components/services-section";
import { TechnologiesSection } from "@/components/technologies-section";
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
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const serviceDetails = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: ["iOS Development", "Android Development", "React Native", "Flutter", "App Store Optimization"],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin"],
    pricing: "Starting from $5,000"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications and websites",
    features: ["Frontend Development", "Backend Development", "Full-Stack Solutions", "E-commerce", "CMS Development"],
    technologies: ["React", "Vue.js", "Node.js", "Python", "PHP"],
    pricing: "Starting from $3,000"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Engaging games for multiple platforms",
    features: ["2D/3D Games", "Mobile Games", "Web Games", "VR/AR Games", "Game Design"],
    technologies: ["Unity", "Unreal Engine", "C#", "JavaScript", "Blender"],
    pricing: "Starting from $8,000"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design for digital products",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    pricing: "Starting from $2,000"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services",
    features: ["Cloud Migration", "DevOps", "Infrastructure as Code", "Monitoring", "Security"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    pricing: "Starting from $4,000"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    features: ["Data Visualization", "Business Intelligence", "Machine Learning", "Predictive Analytics", "Reporting"],
    technologies: ["Python", "R", "Tableau", "Power BI", "TensorFlow"],
    pricing: "Starting from $6,000"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business needs and goals"
  },
  {
    step: "02",
    title: "Planning",
    description: "Strategic planning and project roadmap creation"
  },
  {
    step: "03",
    title: "Design",
    description: "User-centered design and prototyping"
  },
  {
    step: "04",
    title: "Development",
    description: "Agile development with regular updates"
  },
  {
    step: "05",
    title: "Testing",
    description: "Comprehensive testing and quality assurance"
  },
  {
    step: "06",
    title: "Launch",
    description: "Deployment and ongoing support"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to accelerate your business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Service Details</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive breakdown of our service offerings
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="font-semibold text-primary">{service.pricing}</span>
                        <Button variant="outline" size="sm">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for successful project delivery
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechnologiesSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
