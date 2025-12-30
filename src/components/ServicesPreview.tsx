import { Link } from "react-router-dom";
import { ArrowUpRight, Code, Smartphone, Palette, Megaphone, Search, ShoppingCart, Cloud, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies.",
    icon: Code,
    stats: "150+ Projects",
    gradient: "from-primary to-accent",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    stats: "80+ Apps",
    gradient: "from-accent to-primary",
  },
  {
    title: "UI/UX Design",
    description: "User-first designs to boost conversion and delight users.",
    icon: Palette,
    stats: "200+ Designs",
    gradient: "from-primary via-accent to-primary",
  },
  {
    title: "Branding",
    description: "Strategic brand identity that tells your story and connects.",
    icon: Layers,
    stats: "100+ Brands",
    gradient: "from-accent via-primary to-accent",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that amplify reach and conversions.",
    icon: Megaphone,
    stats: "500% ROI Avg",
    gradient: "from-primary to-accent",
  },
  {
    title: "SEO Services",
    description: "Boost visibility and organic traffic with expert optimization.",
    icon: Search,
    stats: "#1 Rankings",
    gradient: "from-accent to-primary",
  },
  {
    title: "E-commerce",
    description: "Complete online store setups with payment and inventory management.",
    icon: ShoppingCart,
    stats: "$10M+ Sales",
    gradient: "from-primary via-accent to-primary",
  },
  {
    title: "Cloud & DevOps",
    description: "From code to cloud — we ensure smooth delivery and scaling.",
    icon: Cloud,
    stats: "99.9% Uptime",
    gradient: "from-accent via-primary to-accent",
  },
];

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - Creative Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 md:mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
                What We Offer
              </span>
            </motion.div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Our Most Valuable
              <br />
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="gradient-text">Services</span>
                <motion.svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.path
                    d="M0 6 Q50 0 100 6 T200 6"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
              From concept to launch, we craft digital experiences that drive growth. 
              Our expert team delivers solutions that transform businesses and exceed expectations.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mx-auto lg:mx-0">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/services">
                  Explore All Services
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Services - Bento Grid Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="group relative"
              >
                <Link to="/services" className="block h-full">
                  <motion.div
                    className="relative h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500`}
                      animate={{ opacity: isActive ? 0.1 : 0 }}
                    />

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                        padding: "2px",
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.3s",
                      }}
                    >
                      <div className="w-full h-full bg-card rounded-[10px] sm:rounded-[14px]" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <div className="relative mb-3 sm:mb-5">
                        <motion.div
                          className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={20} className="text-primary-foreground sm:hidden" />
                          <Icon size={26} className="text-primary-foreground hidden sm:block" />
                        </motion.div>
                        
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} blur-xl`}
                          animate={{ opacity: isActive ? 0.5 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Stats badge */}
                      <motion.div
                        className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-2 sm:mb-4"
                        animate={{ scale: isActive ? 1.05 : 1 }}
                      >
                        {service.stats}
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-display text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description - hidden on very small screens */}
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 hidden sm:block line-clamp-2">
                        {service.description}
                      </p>

                      {/* Arrow indicator */}
                      <motion.div
                        className="flex items-center gap-1 sm:gap-2 text-primary font-medium text-xs sm:text-sm"
                        animate={{ x: isActive ? 5 : 0 }}
                      >
                        <span className="hidden sm:inline">Learn More</span>
                        <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300 sm:w-4 sm:h-4" />
                      </motion.div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute -bottom-8 -right-8 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-16 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/5 via-card to-accent/5 border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Expert Team" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
