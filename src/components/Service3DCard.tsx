import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Service3DCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  index: number;
  isLarge?: boolean;
}

const Service3DCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  features,
  gradient,
  index,
  isLarge = false,
}: Service3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation (max 15 degrees)
    const rotateXValue = (mouseY / (rect.height / 2)) * -8;
    const rotateYValue = (mouseX / (rect.width / 2)) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={isLarge ? "lg:row-span-2" : ""}
      style={{ perspective: "1000px" }}
    >
      <Link to="/contact" className="block h-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-full rounded-2xl bg-card border border-border relative overflow-hidden group"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity pointer-events-none`}
            animate={{ opacity: isHovered ? 0.08 : 0 }}
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            style={{
              background: `linear-gradient(
                105deg,
                transparent 20%,
                rgba(255, 255, 255, 0.03) 40%,
                rgba(255, 255, 255, 0.08) 50%,
                rgba(255, 255, 255, 0.03) 60%,
                transparent 80%
              )`,
              transform: `translateX(${rotateY * 5}px)`,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 p-6 h-full flex flex-col"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg`}
              animate={{
                rotateX: -rotateX * 0.5,
                rotateY: -rotateY * 0.5,
                y: isHovered ? -4 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Icon size={24} className="text-primary-foreground" />
            </motion.div>

            {/* Title & Tagline */}
            <div className="mb-3">
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-xs text-primary font-medium">{tagline}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
              {description}
            </p>

            {/* Features - show more on large cards */}
            {isLarge && (
              <div className="space-y-2 mb-4">
                {features.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle size={12} className="text-primary" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA */}
            <motion.div
              className="flex items-center gap-1 text-sm font-semibold text-primary mt-auto"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Learn More
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.div>
          </div>

          {/* Border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? "0 0 30px hsl(var(--primary) / 0.2), inset 0 0 0 1px hsl(var(--primary) / 0.3)"
                : "0 0 0 transparent, inset 0 0 0 1px transparent",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Service3DCard;
