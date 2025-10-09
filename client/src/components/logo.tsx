
import { motion } from "framer-motion";
import logoImage from "@assets/logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { image: "h-36 mt-4", text: "text-lg" },
    md: { image: "h-36 mt-4", text: "text-2xl" },
    lg: { image: "h-36 mt-4", text: "text-3xl" }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Logo Image */}
        <img
          src={logoImage}
          alt="CodeRaft India Logo"
          className={`${sizes[size].image} w-auto object-contain`}
          onError={(e) => {
            console.error('Logo failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />
      </motion.div>
    </div>
  );
}
