import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  ArrowUpRight, 
  Eye, 
  Code, 
  Smartphone, 
  Palette, 
  Megaphone,
  Filter,
  Grid3X3,
  LayoutGrid
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "All", icon: Grid3X3 },
  { name: "Web", icon: Code },
  { name: "Mobile", icon: Smartphone },
  { name: "Branding", icon: Palette },
  { name: "Marketing", icon: Megaphone },
];

const projects = [
  {
    id: 1,
    slug: "techflow-dashboard",
    title: "TechFlow Dashboard",
    category: "Web",
    description: "A comprehensive analytics dashboard for a SaaS startup with real-time data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "D3.js"],
    stats: { views: "50K+", conversion: "+45%" },
    featured: true,
    gradient: "from-primary to-accent",
  },
  {
    id: 2,
    slug: "eleva-brand-identity",
    title: "Eleva Brand Identity",
    category: "Branding",
    description: "Complete brand overhaul for a wellness company including logo, colors, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    tags: ["Branding", "Logo Design", "Guidelines"],
    stats: { views: "Brand Refresh", conversion: "+200%" },
    featured: false,
    gradient: "from-accent to-primary",
  },
  {
    id: 3,
    slug: "foodiego-mobile-app",
    title: "FoodieGo Mobile App",
    category: "Mobile",
    description: "Food delivery app with seamless UX, real-time tracking, and payment integration.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "Firebase", "Stripe"],
    stats: { views: "100K+ Downloads", conversion: "4.8★" },
    featured: true,
    gradient: "from-primary via-accent to-primary",
  },
  {
    id: 4,
    slug: "greenleaf-ecommerce",
    title: "GreenLeaf E-commerce",
    category: "Web",
    description: "Sustainable products marketplace with custom CMS and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Next.js", "Shopify", "Tailwind"],
    stats: { views: "$2M+ Sales", conversion: "+180%" },
    featured: false,
    gradient: "from-accent via-primary to-accent",
  },
  {
    id: 5,
    slug: "fintrack-app",
    title: "FinTrack App",
    category: "Mobile",
    description: "Personal finance tracking app with budgeting tools and expense analytics.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    tags: ["Flutter", "Firebase", "Charts"],
    stats: { views: "75K+ Users", conversion: "4.9★" },
    featured: false,
    gradient: "from-primary to-accent",
  },
  {
    id: 6,
    slug: "startupx-campaign",
    title: "StartupX Campaign",
    category: "Marketing",
    description: "Multi-channel digital marketing campaign that increased leads by 300%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["SEO", "PPC", "Social Media"],
    stats: { views: "5M+ Reach", conversion: "+300%" },
    featured: true,
    gradient: "from-accent to-primary",
  },
  {
    id: 7,
    slug: "cloudnine-platform",
    title: "CloudNine Platform",
    category: "Web",
    description: "Enterprise cloud management platform with multi-tenant architecture and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "React", "PostgreSQL"],
    stats: { views: "Enterprise", conversion: "99.9% Uptime" },
    featured: false,
    gradient: "from-primary via-accent to-primary",
  },
  {
    id: 8,
    slug: "luxe-fashion-app",
    title: "Luxe Fashion App",
    category: "Mobile",
    description: "Premium fashion e-commerce app with AR try-on feature and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Swift", "AR Kit", "ML"],
    stats: { views: "200K+ Downloads", conversion: "4.7★" },
    featured: false,
    gradient: "from-accent via-primary to-accent",
  },
  {
    id: 9,
    slug: "artisan-rebrand",
    title: "Artisan Rebrand",
    category: "Branding",
    description: "Complete visual identity redesign for artisan coffee chain with 50+ locations.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
    tags: ["Identity", "Packaging", "Signage"],
    stats: { views: "50+ Stores", conversion: "+120% Sales" },
    featured: false,
    gradient: "from-primary to-accent",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Happy Clients" },
  { value: "12", label: "Industry Awards" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Injaazh Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore our portfolio of successful projects including web applications, mobile apps, branding, and digital marketing campaigns."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section - Immersive */}
        <section ref={heroRef} className="min-h-[70vh] flex items-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
            animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-accent/10 blur-3xl"
            animate={{ y: [0, 40, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-semibold">Our Creative Work</span>
                </motion.div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Work That
                  <br />
                  <span className="relative inline-block">
                    <span className="gradient-text">Speaks</span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      initial={{ pathLength: 0 }}
                      animate={isHeroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.5 }}
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
                </h1>

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  A showcase of our best projects and the results we've delivered for our clients. 
                  Every project tells a story of innovation and success.
                </p>

                {/* Stats bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-8 md:gap-12"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter Tabs - Sticky & Animated */}
        <section className="py-6 border-b border-border sticky top-20 bg-background/90 backdrop-blur-xl z-40">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.name;

                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Icon size={16} />
                    {category.name}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid - Masonry Style */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => {
                  const isHovered = hoveredProject === project.id;

                    return (
                      <Link
                        key={project.id}
                        to={`/case-study/${project.slug}`}
                        className={`group block ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.08 }}
                          onHoverStart={() => setHoveredProject(project.id)}
                          onHoverEnd={() => setHoveredProject(null)}
                          className="h-full rounded-2xl bg-card border border-border relative overflow-hidden"
                          whileHover={{
                            y: -10,
                            boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.2)",
                          }}
                        >
                          {/* Gradient overlay on hover */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 z-10 pointer-events-none`}
                            animate={{ opacity: isHovered ? 0.05 : 0 }}
                          />

                          {/* Animated border */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl z-0"
                            style={{
                              background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                              padding: "2px",
                              opacity: isHovered ? 1 : 0,
                              transition: "opacity 0.3s",
                            }}
                          >
                            <div className="w-full h-full bg-card rounded-[14px]" />
                          </motion.div>

                          {/* Image */}
                          <div className="aspect-[16/10] overflow-hidden relative z-10">
                            <motion.img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              animate={{ scale: isHovered ? 1.1 : 1 }}
                              transition={{ duration: 0.6 }}
                            />
                            
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                            {/* Category badge */}
                            <motion.div
                              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-xs font-semibold text-primary">{project.category}</span>
                            </motion.div>

                            {/* View button on hover */}
                            <motion.div
                              className="absolute top-4 right-4"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                <ArrowUpRight size={18} className="text-primary-foreground" />
                              </div>
                            </motion.div>

                            {/* Stats overlay */}
                            <motion.div
                              className="absolute bottom-4 left-4 right-4 flex gap-3"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                              transition={{ duration: 0.3 }}
                            >
                              <span className="px-3 py-1 text-xs rounded-full bg-primary/90 text-primary-foreground font-medium">
                                {project.stats.views}
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-accent/90 text-accent-foreground font-medium">
                                {project.stats.conversion}
                              </span>
                            </motion.div>
                          </div>

                          {/* Content */}
                          <div className="p-6 relative z-10">
                            <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {project.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* View project link */}
                            <motion.div
                              className="flex items-center gap-2 text-primary font-medium text-sm"
                              animate={{ x: isHovered ? 5 : 0 }}
                            >
                              <Eye size={16} />
                              <span>View Case Study</span>
                              <ArrowRight size={14} />
                            </motion.div>
                          </div>

                          {/* Corner glow */}
                          <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-500 z-0" />
                        </motion.div>
                      </Link>
                    );
                  })}
              </motion.div>
            </AnimatePresence>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Filter size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try selecting a different category</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 geometric-bg opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <LayoutGrid size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Our Approach</span>
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                How We Build{" "}
                <span className="gradient-text">Success</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Every project follows our proven methodology to ensure exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Research", desc: "Deep dive into your business and audience" },
                { step: "02", title: "Strategy", desc: "Craft a tailored approach for success" },
                { step: "03", title: "Execute", desc: "Bring ideas to life with precision" },
                { step: "04", title: "Launch", desc: "Deploy and optimize for growth" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all text-center h-full">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    >
                      <span className="font-display text-xl font-bold text-primary-foreground">{item.step}</span>
                    </motion.div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Start Your Project</span>
              </motion.div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Have a Project in{" "}
                <span className="gradient-text">Mind?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
                Let's create something amazing together. Get in touch and let's discuss your vision 
                and how we can bring it to life.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild className="group">
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;