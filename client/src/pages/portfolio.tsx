
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { PortfolioSection } from "@/components/portfolio-section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";

const portfolioItems = {
  "mobile": [
    {
      title: "HealthTracker Pro",
      description: "A comprehensive health monitoring app with AI-powered insights",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
      category: "Healthcare",
      year: "2023",
      client: "MedTech Solutions",
      results: "500K+ downloads, 4.8★ rating"
    },
    {
      title: "EcoCommerce",
      description: "Sustainable shopping platform with carbon footprint tracking",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Flutter", "Firebase", "Stripe", "Maps API"],
      category: "E-commerce",
      year: "2023",
      client: "GreenTech Inc",
      results: "200% increase in user engagement"
    }
  ],
  "web": [
    {
      title: "FinanceFlow Dashboard",
      description: "Advanced financial analytics platform for enterprises",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      category: "Finance",
      year: "2023",
      client: "Capital Ventures",
      results: "40% faster decision making"
    },
    {
      title: "EduLearn Platform",
      description: "Interactive online learning management system",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      category: "Education",
      year: "2022",
      client: "EduTech Academy",
      results: "10,000+ active students"
    }
  ],
  "games": [
    {
      title: "Space Odyssey VR",
      description: "Immersive space exploration game with realistic physics",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Unity", "C#", "Oculus SDK", "Photon"],
      category: "VR Gaming",
      year: "2023",
      client: "Cosmos Entertainment",
      results: "1M+ downloads, Top 10 VR games"
    },
    {
      title: "Puzzle Quest Adventures",
      description: "Engaging puzzle game with multiplayer features",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Unity", "C#", "Firebase", "Unity Analytics"],
      category: "Mobile Gaming",
      year: "2022",
      client: "GameStudio Pro",
      results: "2M+ players worldwide"
    }
  ]
};

const achievements = [
  { icon: Award, number: "50+", label: "Projects Completed" },
  { icon: Users, number: "200+", label: "Happy Clients" },
  { icon: Calendar, number: "5+", label: "Years Experience" },
  { icon: Award, number: "25+", label: "Awards Won" }
];

export default function Portfolio() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Showcasing our finest work and successful partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                <p className="text-muted-foreground">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest work across different industries and technologies
            </p>
          </motion.div>

          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="web">Web Applications</TabsTrigger>
              <TabsTrigger value="games">Games</TabsTrigger>
            </TabsList>

            {Object.entries(portfolioItems).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-8">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex gap-2">
                                <Button size="sm" variant="secondary">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Button>
                                <Button size="sm" variant="secondary">
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline">{item.category}</Badge>
                            <span className="text-sm text-muted-foreground">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-2">Technologies:</p>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="pt-3 border-t">
                              <p className="text-sm"><span className="font-medium">Client:</span> {item.client}</p>
                              <p className="text-sm text-green-600 font-medium">{item.results}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Portfolio Section Component */}
      <PortfolioSection />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
