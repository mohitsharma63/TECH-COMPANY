
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Eye, Award, Users, TrendingUp, Sparkles, Code2, Layers, ShoppingCart, GraduationCap, BarChart3 } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    title: "AI-Powered CRM Dashboard",
    description: "Next-generation CRM with AI insights, sales automation, customer analytics, and predictive forecasting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "TypeScript", "Node.js", "AI/ML", "Chart.js"],
    category: "Business Intelligence",
    year: "2025",
    client: "TechCorp Solutions",
    results: "65% productivity boost",
    rating: "5.0★",
    gradient: "from-blue-600 to-cyan-600",
    icon: BarChart3,
    livePreview: "https://preview.codecanyon.net/item/crm-customer-relationship-management/full_screen_preview/23855970",
    features: ["AI Analytics", "Sales Pipeline", "Customer Insights", "Revenue Forecasting"]
  },
  {
    title: "Modern E-Commerce Platform",
    description: "Full-featured online store with real-time inventory, advanced search, wishlist, and multi-payment gateway",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind", "Redux"],
    category: "E-Commerce",
    year: "2025",
    client: "ShopHub International",
    results: "300% revenue growth",
    rating: "5.0★",
    gradient: "from-emerald-600 to-teal-600",
    icon: ShoppingCart,
    livePreview: "https://preview.themeforest.net/item/evara-multipurpose-ecommerce-html-template/full_screen_preview/26278546",
    features: ["Product Catalog", "Smart Cart", "Payment Gateway", "Order Management"]
  },
  {
    title: "Smart School Management",
    description: "Complete education ERP with student portal, online classes, exam system, fee management and reports",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Zoom API"],
    category: "Education Tech",
    year: "2025",
    client: "EduSmart Academy",
    results: "95% efficiency increase",
    rating: "5.0★",
    gradient: "from-violet-600 to-purple-600",
    icon: GraduationCap,
    livePreview: "https://preview.codecanyon.net/item/escola-school-management-system/full_screen_preview/19542988",
    features: ["Student Portal", "Online Classes", "Exam Module", "Fee Management"]
  },
  {
    title: "Healthcare Management System",
    description: "Hospital management with patient records, appointment booking, inventory, billing and telemedicine",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "PDF"],
    category: "Healthcare",
    year: "2025",
    client: "MediCare Hospital",
    results: "80% faster workflow",
    rating: "5.0★",
    gradient: "from-rose-600 to-pink-600",
    icon: Code2,
    livePreview: "https://preview.codecanyon.net/item/hospital-management-system/full_screen_preview/10913242",
    features: ["Patient Records", "Appointments", "Billing System", "Telemedicine"]
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with virtual tours, advanced filters, agent dashboard and inquiry management",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Firebase", "Maps API", "3D Tours", "Payment"],
    category: "Real Estate",
    year: "2025",
    client: "PropTech Ventures",
    results: "150% lead increase",
    rating: "5.0★",
    gradient: "from-amber-600 to-orange-600",
    icon: Layers,
    livePreview: "https://preview.themeforest.net/item/houzing-real-estate-html-template/full_screen_preview/29518277",
    features: ["Property Listings", "Virtual Tours", "Agent Portal", "Lead Management"]
  },
  {
    title: "Restaurant POS System",
    description: "Complete restaurant management with online ordering, kitchen display, inventory and table management",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Angular", "Node.js", "MySQL", "Printer API", "QR"],
    category: "Food & Beverage",
    year: "2025",
    client: "Foodie Restaurant Chain",
    results: "70% order accuracy",
    rating: "5.0★",
    gradient: "from-red-600 to-orange-600",
    icon: Code2,
    livePreview: "https://preview.codecanyon.net/item/restaurant-pos-pointofsale/full_screen_preview/7749129",
    features: ["POS System", "Online Orders", "Kitchen Display", "Inventory Control"]
  }
];

const achievements = [
  { icon: Award, number: "200+", label: "Projects Delivered", gradient: "from-violet-500 to-purple-500" },
  { icon: Users, number: "500+", label: "Happy Clients", gradient: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, number: "98%", label: "Success Rate", gradient: "from-emerald-500 to-teal-500" },
  { icon: Sparkles, number: "75+", label: "Awards Won", gradient: "from-orange-500 to-pink-500" }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-1">
                <Layers className="w-3 h-3 mr-1" />
                Our Portfolio
              </Badge>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Enterprise Business
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our flagship business applications with live previews and interactive demos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <Card className="border-0 bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.number}
                    </h3>
                    <p className="text-muted-foreground font-medium">{achievement.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Business <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click on any project to explore live interactive demos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.title} project details`}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <item.icon className="w-20 h-20 text-white" />
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-0`}>
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-muted-foreground">{item.year}</span>
                      <span className="text-sm font-bold text-yellow-500">{item.rating}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Key Features</p>
                        <div className="grid grid-cols-2 gap-2">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} mr-2`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-violet-200 text-violet-700 hover:bg-violet-50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Client</p>
                          <p className="font-semibold text-sm">{item.client}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold text-sm bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                            {item.results}
                          </p>
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

      {/* Live Preview Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl h-[90vh] p-0">
          <DialogHeader className="px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-1">
                  {selectedProject?.description}
                </DialogDescription>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={selectedProject?.livePreview} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in New Tab
                  </a>
                </Button>
              </div>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-hidden">
            {selectedProject && (
              <iframe
                src={selectedProject.livePreview}
                className="w-full h-full border-0"
                title={selectedProject.title}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's build a custom solution tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-violet-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Eye className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
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
