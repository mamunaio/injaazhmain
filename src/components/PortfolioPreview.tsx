import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TechFlow Dashboard",
    category: "Web Application",
    description: "A comprehensive analytics dashboard for a SaaS startup with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    color: "primary",
  },
  {
    title: "Eleva Brand Identity",
    category: "Branding",
    description: "Complete brand overhaul for a wellness company including logo, guidelines, and collateral.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    tags: ["Brand Strategy", "Visual Design", "Guidelines"],
    color: "accent",
  },
  {
    title: "FoodieGo Mobile App",
    category: "Mobile App",
    description: "Food delivery app with seamless UX, real-time tracking, and payment integration.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "Firebase", "Stripe"],
    color: "primary",
  },
  {
    title: "CloudNine Platform",
    category: "SaaS Platform",
    description: "Enterprise cloud management platform with multi-tenant architecture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "AWS", "PostgreSQL"],
    color: "accent",
  },
];

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="aspect-[4/3] overflow-hidden relative">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover absolute top-0 left-0"
        style={{ y }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-end gap-4 md:gap-6 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Our Work
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-3 md:mt-4 max-w-md text-sm sm:text-base mx-auto md:mx-0">
              Explore our latest work and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/portfolio"
                className="group relative overflow-hidden rounded-2xl block bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Arrow icon on hover */}
                  <motion.div
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      project.color === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${project.color === "primary" ? "text-primary" : "text-accent"}`}>
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
