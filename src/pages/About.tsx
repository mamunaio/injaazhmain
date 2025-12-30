import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Target,
  Eye,
  Zap,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Heart,
  Shield,
  CheckCircle,
  Rocket,
  Trophy,
  Calendar,
  Sparkles,
  Play,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their goals as our own.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for mediocrity. Every project gets our best effort.",
    gradient: "from-primary via-accent to-primary",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "We measure success by the impact we create for our clients' businesses.",
    gradient: "from-accent via-primary to-accent",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every pixel and line of code.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical practices.",
    gradient: "from-accent to-primary",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket, suffix: "" },
  { value: "30+", label: "Happy Clients", icon: Users, suffix: "" },
  { value: "3+", label: "Years Experience", icon: Calendar, suffix: "" },
  { value: "98", label: "Client Satisfaction", icon: Trophy, suffix: "%" },
];

const timeline = [
  {
    year: "2022",
    title: "Foundation",
    description: "Injaazh Pvt. Ltd. was founded with a vision to democratize digital excellence.",
    milestone: "Company Established",
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description: "Expanded team and added mobile development, SEO, and digital marketing services.",
    milestone: "Team of 10+",
  },
  {
    year: "2024",
    title: "Recognition",
    description: "Recognized for excellence in digital transformation and client success stories.",
    milestone: "30+ Happy Clients",
  },
  {
    year: "2025",
    title: "Global Vision",
    description: "Continuing to innovate and expand our reach while maintaining quality.",
    milestone: "Global Expansion",
  },
];

const expertise = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Brand Identity",
  "Digital Marketing",
  "SEO Optimization",
  "E-commerce",
  "Cloud Solutions",
];

const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>About Us | Injaazh Pvt. Ltd.</title>
        <meta
          name="description"
          content="Learn about Injaazh Pvt. Ltd., a digital transformation agency established in 2022, helping startups and SMEs build exceptional digital experiences."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section - Immersive */}
        <section ref={heroRef} className="min-h-[90vh] flex items-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-accent/10 blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-semibold">Established 2022</span>
                </motion.div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  We're a Team of
                  <br />
                  <span className="relative inline-block">
                    <span className="gradient-text">Digital Innovators</span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 12"
                      initial={{ pathLength: 0 }}
                      animate={isHeroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    >
                      <motion.path
                        d="M0 6 Q75 0 150 6 T300 6"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Founded in 2022, Injaazh is a performance-driven creative agency passionate about 
                  digital transformation and helping businesses thrive in the digital age.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" asChild className="group">
                      <Link to="/contact">
                        Work With Us
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" asChild className="group">
                      <Link to="/team">
                        <Play size={18} className="mr-2" />
                        Meet Our Team
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  {/* Main image */}
                  <motion.div
                    className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                      alt="Injaazh team collaboration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </motion.div>

                  {/* Floating cards */}
                  <motion.div
                    className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-card border border-border shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Rocket size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold">50+</div>
                        <div className="text-muted-foreground text-sm">Projects</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -top-6 -right-6 p-5 rounded-2xl bg-card border border-border shadow-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    whileHover={{ y: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                        <Trophy size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold">98%</div>
                        <div className="text-muted-foreground text-sm">Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Animated counters */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon size={26} className="text-primary-foreground" />
                    </motion.div>
                    <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - Split layout */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-semibold text-primary">Our Story</span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  From Vision to{" "}
                  <span className="gradient-text">Reality</span>
                </h2>

                <div className="space-y-5 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Injaazh was born from a simple belief: every business deserves access to world-class 
                    digital solutions. Founded in 2022, we set out to bridge the gap between innovative 
                    technology and growing businesses.
                  </p>
                  <p className="leading-relaxed">
                    Our name "Injaazh" means "achievement" in Arabic, reflecting our commitment to 
                    helping our clients achieve their digital goals. We specialize in building digital 
                    products and branding strategies for startups and small-to-medium enterprises.
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-foreground">Our Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                        className="px-4 py-2 text-sm rounded-full bg-secondary border border-border cursor-default transition-colors"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Creative image layout */}
                <div className="relative">
                  <motion.div
                    className="aspect-[4/3] rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                      alt="Team working"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Year badge */}
                  <motion.div
                    className="absolute -bottom-8 left-8 p-6 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: -3 }}
                  >
                    <div className="text-5xl font-display font-bold">2022</div>
                    <div className="text-primary-foreground/80 text-sm">Founded</div>
                  </motion.div>

                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Creative cards */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
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
                <Target size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Our Purpose</span>
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Driven by <span className="gradient-text">Purpose</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-8 md:p-10 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    >
                      <Target size={32} className="text-primary-foreground" />
                    </motion.div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      To empower startups and SMEs with innovative digital solutions that drive growth, 
                      enhance brand presence, and create lasting impact.
                    </p>

                    <ul className="space-y-4">
                      {[
                        "Deliver exceptional digital experiences",
                        "Foster long-term client partnerships",
                        "Stay at the forefront of technology",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle size={14} className="text-primary" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-8 md:p-10 rounded-3xl bg-background border border-border hover:border-accent/50 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    >
                      <Eye size={32} className="text-primary-foreground" />
                    </motion.div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      To become the leading digital transformation partner for emerging businesses, 
                      known for delivering exceptional results and client success.
                    </p>

                    <ul className="space-y-4">
                      {[
                        "Global recognition for excellence",
                        "Industry-leading innovation",
                        "Sustainable business growth",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                            <CheckCircle size={14} className="text-accent" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section - Horizontal scroll on mobile */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
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
                <Calendar size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Our Journey</span>
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Milestones & <span className="gradient-text">Achievements</span>
              </h2>
            </motion.div>

            {/* Timeline Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full">
                    {/* Year badge */}
                    <motion.div
                      className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.year}
                    </motion.div>

                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary text-xs font-semibold">
                      <Trophy size={14} />
                      {item.milestone}
                    </div>

                    {/* Connecting line */}
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Interactive cards */}
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
                <Heart size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Our Values</span>
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                What <span className="gradient-text">Drives Us</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                const isActive = activeValue === index;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setActiveValue(index)}
                    onHoverEnd={() => setActiveValue(null)}
                    className="group"
                  >
                    <motion.div
                      className="h-full p-8 rounded-2xl bg-background border border-border relative overflow-hidden transition-all"
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.2)"
                      }}
                    >
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity`}
                        animate={{ opacity: isActive ? 0.05 : 0 }}
                      />

                      {/* Animated border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                          padding: "2px",
                          opacity: isActive ? 1 : 0,
                          transition: "opacity 0.3s",
                        }}
                      >
                        <div className="w-full h-full bg-background rounded-[14px]" />
                      </motion.div>

                      <div className="relative z-10">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={28} className="text-primary-foreground" />
                        </motion.div>

                        <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Corner glow */}
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Our Team</span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Meet the <span className="gradient-text">Experts</span>
                </h2>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our diverse team brings together expertise in design, development, marketing, and strategy. 
                  United by a shared passion for excellence, we collaborate to deliver outstanding results.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Experienced designers and developers",
                    "Strategic marketing specialists",
                    "Dedicated project managers",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle size={14} className="text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="group">
                    <Link to="/team">
                      Meet the Team
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <motion.div
                    className="aspect-[4/5] rounded-2xl overflow-hidden border border-border"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="aspect-square rounded-2xl overflow-hidden border border-border"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div
                    className="aspect-square rounded-2xl overflow-hidden border border-border"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="aspect-[4/5] rounded-2xl overflow-hidden border border-border"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
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
                <span className="text-sm font-semibold text-primary">Let's Work Together</span>
              </motion.div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Start Your{" "}
                <span className="gradient-text">Journey?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
                Let's discuss how we can help your business achieve its digital goals. 
                Your success story starts here.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild className="group">
                    <Link to="/contact">
                      Get in Touch
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio">View Our Work</Link>
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

export default About;