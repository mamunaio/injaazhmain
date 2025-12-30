import { Target, Eye, Heart, Rocket, ArrowRight, CheckCircle, Zap, Shield, Clock, Users, Sparkles, Award, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { 
    icon: Zap, 
    title: "Lightning Fast", 
    desc: "Quick turnaround without compromising quality",
    gradient: "from-yellow-500 to-orange-500",
    stat: "2x Faster"
  },
  { 
    icon: Shield, 
    title: "Secure & Reliable", 
    desc: "Enterprise-grade security standards",
    gradient: "from-green-500 to-emerald-500",
    stat: "99.9% Uptime"
  },
  { 
    icon: Clock, 
    title: "24/7 Support", 
    desc: "Always available when you need us",
    gradient: "from-blue-500 to-cyan-500",
    stat: "< 2hr Response"
  },
  { 
    icon: Users, 
    title: "Expert Team", 
    desc: "Skilled professionals with proven track record",
    gradient: "from-purple-500 to-pink-500",
    stat: "10+ Years Exp"
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Award },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "5+", label: "Years Experience", icon: Clock },
];

const highlights = [
  { text: "Custom web & mobile solutions", delay: 0 },
  { text: "Award-winning design team", delay: 0.1 },
  { text: "Agile development process", delay: 0.2 },
  { text: "Data-driven strategies", delay: 0.3 },
  { text: "Ongoing maintenance & support", delay: 0.4 },
  { text: "Transparent communication", delay: 0.5 },
];

const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower startups and SMEs with innovative digital solutions that drive growth and success.",
    gradient: "from-primary to-purple-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Become the leading digital transformation partner for ambitious businesses worldwide.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Innovation, collaboration, excellence, and unwavering integrity in everything we do.",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Our Goal",
    description: "Help 1000+ businesses achieve digital excellence and unlock their full potential.",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute top-1/4 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6"
          >
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Why Choose Us</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            We Transform Ideas Into
            <span className="block gradient-text">Digital Reality</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            At Injaazh, we combine creativity, technology, and strategy to deliver exceptional digital experiences that help businesses thrive.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm text-center">
                <stat.icon className="w-5 sm:w-6 h-5 sm:h-6 mx-auto mb-2 sm:mb-3 text-primary" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 md:mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Everything You Need to
              <span className="gradient-text"> Succeed Online</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              We provide comprehensive digital solutions tailored to your unique business needs. From stunning designs to powerful development, we've got you covered.
            </p>

            {/* Highlights with animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + item.delay }}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="group w-full sm:w-auto">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Mission Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {missionCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative group ${index === 1 ? 'mt-4 sm:mt-8' : ''} ${index === 2 ? '-mt-2 sm:-mt-4' : ''}`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm overflow-hidden h-full"
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0`}
                    animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className={`relative w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>

                  {/* Corner decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
              We deliver excellence at every step of your digital journey
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm text-center h-full overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredFeature === index ? 0.05 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <div className={`relative w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>

                  {/* Stat badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: hoveredFeature === index ? 1 : 0, scale: hoveredFeature === index ? 1 : 0.8 }}
                    className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-[10px] sm:text-xs font-bold`}
                  >
                    {feature.stat}
                  </motion.div>

                  <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 relative">{feature.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm relative hidden sm:block">{feature.desc}</p>

                  {/* Arrow on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredFeature === index ? 1 : 0, y: hoveredFeature === index ? 0 : 10 }}
                    className="mt-2 sm:mt-4"
                  >
                    <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-primary mx-auto" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
