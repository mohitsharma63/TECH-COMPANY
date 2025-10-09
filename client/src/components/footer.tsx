import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";

const services = [
  "Mobile App Development",
  "Web Development", 
  "Game Development",
  "UI/UX Design"
];

const contactEmail = "coderaftindia@gmail.com";

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
  { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 border-t border-white/5" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Logo size="md" showText={true} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-slate-300 mb-6 leading-relaxed"
            >
              Leading Indian software development company crafting innovative digital solutions 
              for businesses worldwide since 2025. Your trusted technology partner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-primary rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-slate-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                +91-7300353111
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                coderaftindia@gmail.com
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary mt-1" />
                <span>India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-slate-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 CodeRaft India. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
