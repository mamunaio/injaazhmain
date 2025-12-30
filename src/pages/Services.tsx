import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Palette,
  Megaphone,
  Smartphone,
  Globe,
  Search,
  PenTool,
  LineChart,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Star,
  Sparkles,
  Play,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Service3DCard from "@/components/Service3DCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Code,
    title: "Web Development",
    tagline: "Modern, Fast & Scalable",
    description: "We build custom websites and web applications using cutting-edge technologies. From simple landing pages to complex enterprise solutions.",
    features: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "API Integration", "Performance Optimization", "Progressive Web Apps"],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    stats: { projects: "150+", satisfaction: "98%", avgDelivery: "4-8 weeks" },
    gradient: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "iOS & Android Excellence",
    description: "Create powerful mobile experiences that users love. We develop native and cross-platform applications with intuitive interfaces.",
    features: ["iOS & Android Apps", "Cross-platform Development", "App Store Optimization", "Push Notifications", "Offline Functionality", "In-app Payments"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
    stats: { projects: "80+", satisfaction: "97%", avgDelivery: "8-12 weeks" },
    gradient: "from-accent to-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Human-Centered Design",
    description: "Transform ideas into intuitive digital experiences. Our design process combines user research, visual design, and usability testing.",
    features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing", "Interaction Design", "Design System Creation"],
    technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "Zeplin"],
    stats: { projects: "200+", satisfaction: "99%", avgDelivery: "2-4 weeks" },
    gradient: "from-primary via-accent to-primary",
  },
  {
    icon: Globe,
    title: "Branding & Identity",
    tagline: "Tell Your Story",
    description: "Build a memorable brand that resonates with your audience. We develop comprehensive brand identities that communicate your values.",
    features: ["Logo Design", "Brand Strategy", "Visual Identity Systems", "Brand Guidelines", "Rebranding Services", "Brand Collateral Design"],
    technologies: ["Adobe Illustrator", "Photoshop", "After Effects", "InDesign"],
    stats: { projects: "120+", satisfaction: "98%", avgDelivery: "3-6 weeks" },
    gradient: "from-accent via-primary to-accent",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Data-Driven Growth",
    description: "Amplify your digital presence with strategic marketing campaigns. We leverage data analytics and creative strategies.",
    features: ["Social Media Marketing", "Content Marketing", "Paid Advertising (PPC)", "Email Marketing", "Analytics & Reporting", "Marketing Automation"],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "Google Analytics", "Semrush"],
    stats: { projects: "300+", satisfaction: "96%", avgDelivery: "Ongoing" },
    gradient: "from-primary to-accent",
  },
  {
    icon: Search,
    title: "SEO Services",
    tagline: "Rank Higher, Convert More",
    description: "Boost your organic visibility and drive qualified traffic. Our SEO experts implement proven strategies to improve rankings.",
    features: ["Technical SEO Audit", "On-page Optimization", "Link Building Strategy", "Local SEO", "Content Optimization", "Competitor Analysis"],
    technologies: ["Ahrefs", "Moz", "Screaming Frog", "Google Search Console", "SEMrush"],
    stats: { projects: "180+", satisfaction: "95%", avgDelivery: "3-6 months" },
    gradient: "from-accent to-primary",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    tagline: "Engage & Convert",
    description: "Craft compelling content that tells your story and drives action. From blog posts and social media to video scripts.",
    features: ["Blog & Article Writing", "Social Media Content", "Video Production", "Copywriting", "Infographic Design", "Podcast Production"],
    technologies: ["Adobe Premiere", "After Effects", "Canva", "WordPress", "Medium"],
    stats: { projects: "500+", satisfaction: "97%", avgDelivery: "1-2 weeks" },
    gradient: "from-primary via-accent to-primary",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    tagline: "Data-Driven Decisions",
    description: "Turn data into actionable insights. We implement comprehensive analytics solutions that track user behavior and measure performance.",
    features: ["Analytics Setup", "Custom Dashboard Creation", "Conversion Tracking", "A/B Testing", "User Behavior Analysis", "ROI Measurement"],
    technologies: ["Google Analytics 4", "Mixpanel", "Hotjar", "Tableau", "Looker Studio"],
    stats: { projects: "100+", satisfaction: "98%", avgDelivery: "2-4 weeks" },
    gradient: "from-accent via-primary to-accent",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We understand your business, goals, and challenges through in-depth consultations.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We develop a comprehensive strategy and roadmap tailored to your needs.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Design & Build",
    desc: "Our team brings the strategy to life through iterative design and development.",
    icon: Code,
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "We ensure a smooth launch and provide ongoing optimization support.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex applications could take 3-6 months. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing: fixed-price projects, hourly rates, and retainers. The best option depends on your needs. Contact us for a custom quote.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer comprehensive maintenance packages including updates, security patches, performance monitoring, and technical support.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Next.js, Node.js, TypeScript for web, and React Native, Flutter for mobile. Plus AWS, Google Cloud, and Azure for infrastructure.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We often collaborate with in-house teams, augmenting capacity or providing specialized expertise.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow best practices: code reviews, automated testing, CI/CD pipelines, and regular quality audits with agile methodology.",
  },
];

const whyChooseUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology for quick turnarounds", stat: "2x Faster" },
  { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security", stat: "99.9% Uptime" },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance", stat: "< 1hr Response" },
  { icon: Users, title: "Expert Team", desc: "Skilled professionals", stat: "50+ Experts" },
  { icon: TrendingUp, title: "Proven Results", desc: "Track record of success", stat: "500+ Projects" },
  { icon: Star, title: "5-Star Rated", desc: "High client satisfaction", stat: "98% Rating" },
];

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

  return (
      <>
        <Helmet>
          <title>Services | Injaazh Pvt. Ltd.</title>
          <meta
              name="description"
              content="Explore our comprehensive digital services including web development, mobile apps, UI/UX design, branding, and digital marketing."
          />
        </Helmet>

        <Navbar />

        <main className="pt-20">
          {/* Hero Section - CHANGED: Removed min-h-90vh, using padding instead for tighter fit */}
          <section ref={heroRef} className="pt-16 pb-12 md:pt-24 md:pb-16 flex items-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Floating orbs */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
                animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-accent/10 blur-3xl"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 mb-6"
                      whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles size={16} className="text-primary" />
                    <span className="text-sm font-semibold">Full-Service Digital Agency</span>
                  </motion.div>

                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Digital Solutions That
                    <br />
                    <span className="relative inline-block">
                    <span className="gradient-text">Drive Results</span>
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

                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    From concept to launch, we provide end-to-end digital solutions tailored to your business needs.
                    Partner with us to transform your ideas into reality.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" asChild className="group">
                        <Link to="/contact">
                          Get a Free Quote
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg" asChild className="group">
                        <Link to="/portfolio">
                          <Play size={18} className="mr-2" />
                          View Our Work
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why Choose Us - CHANGED: Reduced padding */}
          <section className="py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {whyChooseUs.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group"
                    >
                      <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-center h-full">
                        <motion.div
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                        >
                          <item.icon size={20} className="text-primary-foreground" />
                        </motion.div>
                        <div className="font-display text-lg font-bold text-primary mb-1">{item.stat}</div>
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-xs">{item.desc}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid - CHANGED: py-24 -> py-16, mb-16 -> mb-10 */}
          <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center max-w-3xl mx-auto mb-10"
              >
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                  <Layers size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">What We Offer</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Our <span className="gradient-text">Services</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive digital solutions to help your business thrive in the modern world.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <Service3DCard
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        tagline={service.tagline}
                        description={service.description}
                        features={service.features}
                        gradient={service.gradient}
                        index={index}
                        isLarge={index === 0 || index === 3}
                    />
                ))}
              </div>
            </div>
          </section>

          {/* Process Section - CHANGED: py-24 -> py-16, mb-16 -> mb-12 */}
          <section className="py-16 bg-card relative overflow-hidden">
            <div className="absolute inset-0 geometric-bg opacity-50" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center max-w-2xl mx-auto mb-12"
              >
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Our Process</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  How We <span className="gradient-text">Work</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our proven methodology ensures successful project delivery every time.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-6 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0" />

                {processSteps.map((item, index) => {
                  const Icon = item.icon;
                  const isHovered = hoveredProcess === index;

                  return (
                      <motion.div
                          key={item.step}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          onHoverStart={() => setHoveredProcess(index)}
                          onHoverEnd={() => setHoveredProcess(null)}
                          className="relative z-10"
                      >
                        <motion.div
                            className="p-6 rounded-2xl bg-background border border-border h-full text-center relative overflow-hidden"
                            whileHover={{
                              y: -10,
                              boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.2)",
                            }}
                        >
                          {/* Gradient bg on hover */}
                          <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                              animate={{ opacity: isHovered ? 1 : 0 }}
                          />

                          <div className="relative z-10">
                            {/* Step number with icon */}
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            >
                              <Icon size={28} className="text-primary-foreground" />
                            </motion.div>

                            <div className="text-xs font-bold text-primary mb-2">{item.step}</div>
                            <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                          </div>
                        </motion.div>

                        {/* Arrow connector */}
                        {index < 3 && (
                            <motion.div
                                className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-primary items-center justify-center transform -translate-y-1/2 z-20"
                                animate={{ scale: isHovered ? 1.2 : 1 }}
                            >
                              <ArrowRight size={14} className="text-primary-foreground" />
                            </motion.div>
                        )}
                      </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ Section - CHANGED: py-24 -> py-16, gap-16 -> gap-12 */}
          <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                    <Sparkles size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">FAQ</span>
                  </motion.div>

                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    Frequently Asked{" "}
                    <span className="gradient-text">Questions</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Got questions? We've got answers. If you don't find what you're looking for,
                    feel free to reach out.
                  </p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" asChild className="group">
                      <Link to="/contact">
                        Ask a Question
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Decorative illustration */}
                  <div className="mt-12 relative hidden lg:block">
                    <motion.div
                        className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    >
                      <Sparkles size={80} className="text-primary/30" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                          <AccordionItem
                              value={`item-${index}`}
                              className="border border-border rounded-xl px-6 data-[state=open]:bg-card data-[state=open]:border-primary/30 transition-all"
                          >
                            <AccordionTrigger className="text-left hover:no-underline py-5 font-semibold">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-5">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section - CHANGED: py-24 -> py-16 */}
          <section className="py-16 relative overflow-hidden">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Let's Work Together</span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Ready to Start Your{" "}
                  <span className="gradient-text">Project?</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
                  Let's discuss how we can help you achieve your digital goals.
                  Get in touch for a free consultation and quote.
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
                      <Link to="/portfolio">See Case Studies</Link>
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

export default Services;