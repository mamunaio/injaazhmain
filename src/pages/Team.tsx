import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Heart,
  Zap,
  Target,
  Globe,
  ArrowUpRight,
  Quote
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Md Mamun Hossain",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in digital transformation. Passionate about helping businesses thrive in the digital age.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    gradient: "from-primary to-accent",
    social: { linkedin: "#", twitter: "#", email: "mamun@injaazh.com" },
  },
  {
    name: "Sakib Hasan Ruhin",
    role: "Creative Director",
    bio: "Award-winning designer passionate about user-centric design. Transforming ideas into beautiful experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    gradient: "from-accent to-primary",
    social: { linkedin: "#", twitter: "#", email: "ruhin@injaazh.com" },
  },
  {
    name: "Imtiaz Ahmed",
    role: "MERN-Stack Developer",
    bio: "Full-stack architect building scalable digital solutions. Expert in modern technologies and best practices.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    gradient: "from-primary via-accent to-primary",
    social: { linkedin: "#", twitter: "#", email: "imtiaz@injaazh.com" },
  },
  {
    name: "Md Ismail Hossain",
    role: "PHP & Laravel Developer",
    bio: "Data-driven marketer with expertise in growth strategies. Turning insights into impactful campaigns.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    gradient: "from-accent via-primary to-accent",
    social: { linkedin: "#", twitter: "#", email: "ismail@injaazh.com" },
  },
  {
    name: "Md Ashraful Islam",
    role: "SEO & Digital Markter",
    bio: "Code craftsman specializing in modern web technologies. Building robust and elegant solutions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    gradient: "from-primary to-accent",
    social: { linkedin: "#", twitter: "#", email: "ashraful@injaazh.com" },
  },
];

const values = [
  { icon: Heart, title: "Passion", desc: "We love what we do" },
  { icon: Zap, title: "Innovation", desc: "Always pushing boundaries" },
  { icon: Target, title: "Excellence", desc: "Striving for the best" },
  { icon: Globe, title: "Collaboration", desc: "Working together" },
];

const stats = [
  { value: "8+", label: "Team Members" },
  { value: "15+", label: "Countries" },
  { value: "10+", label: "Years Combined" },
  { value: "100%", label: "Remote-Friendly" },
];

const Team = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Team | Injaazh Pvt. Ltd.</title>
        <meta
          name="description"
          content="Meet the talented team behind Injaazh - passionate digital experts dedicated to helping your business succeed."
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
            className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-accent/10 blur-3xl"
            animate={{ y: [0, 40, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
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
                  <Users size={16} className="text-primary" />
                  <span className="text-sm font-semibold">Meet Our Team</span>
                </motion.div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  The
                  <br />
                  <span className="relative inline-block">
                    <span className="gradient-text">Innovators</span>
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 250 12"
                      initial={{ pathLength: 0 }}
                      animate={isHeroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    >
                      <motion.path
                        d="M0 6 Q62 0 125 6 T250 6"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A diverse team of passionate experts dedicated to delivering exceptional 
                  digital experiences. Together, we turn your vision into reality.
                </p>

                {/* Values bar */}
                <div className="flex flex-wrap gap-4">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                      >
                        <Icon size={16} className="text-primary" />
                        <span className="text-sm font-medium">{value.title}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Team preview collage */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <motion.div
                      className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/20"
                      whileHover={{ scale: 1.03 }}
                    >
                      <img
                        src={team[0].image}
                        alt={team[0].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="aspect-square rounded-2xl overflow-hidden border-2 border-accent/20"
                      whileHover={{ scale: 1.03 }}
                    >
                      <img
                        src={team[1].image}
                        alt={team[1].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <motion.div
                      className="aspect-square rounded-2xl overflow-hidden border-2 border-accent/20"
                      whileHover={{ scale: 1.03 }}
                    >
                      <img
                        src={team[2].image}
                        alt={team[2].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/20"
                      whileHover={{ scale: 1.03 }}
                    >
                      <img
                        src={team[3].image}
                        alt={team[3].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Floating stat card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-card border border-border shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Users size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold">8+</div>
                      <div className="text-muted-foreground text-sm">Experts</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid - Interactive cards */}
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
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Our People</span>
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Talented individuals united by a shared passion for creating exceptional digital experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => {
                const isHovered = hoveredMember === member.name;

                return (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredMember(member.name)}
                    onHoverEnd={() => setHoveredMember(null)}
                    className="group"
                  >
                    <motion.div
                      className="h-full rounded-2xl bg-card border border-border relative overflow-hidden"
                      whileHover={{
                        y: -10,
                        boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.2)",
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 z-10 pointer-events-none`}
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
                      <div className="aspect-square overflow-hidden relative z-10">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          animate={{ scale: isHovered ? 1.1 : 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                        {/* Social Links - Appear on hover */}
                        <motion.div
                          className="absolute bottom-4 left-0 right-0 flex justify-center gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.a
                            href={member.social.linkedin}
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Linkedin size={18} />
                          </motion.a>
                          <motion.a
                            href={member.social.twitter}
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Twitter size={18} />
                          </motion.a>
                          <motion.a
                            href={`mailto:${member.social.email}`}
                            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Mail size={18} />
                          </motion.a>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6 text-center relative z-10">
                        <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                      </div>

                      {/* Corner glow */}
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-500 z-0" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 geometric-bg opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
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
                  <Heart size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Our Culture</span>
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  A Place Where{" "}
                  <span className="gradient-text">Ideas Thrive</span>
                </h2>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We believe in fostering an environment where creativity flourishes, collaboration 
                  is celebrated, and every team member has the opportunity to grow and make an impact.
                </p>

                {/* Culture values */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Remote-First", desc: "Work from anywhere" },
                    { title: "Flexible Hours", desc: "Life-work balance" },
                    { title: "Learning Budget", desc: "Continuous growth" },
                    { title: "Team Retreats", desc: "Connect & celebrate" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl bg-background border border-border"
                    >
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <Quote size={48} className="text-primary/30 mb-6" />
                  <blockquote className="font-display text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                    "The best teams are built on trust, respect, and a shared passion for excellence."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={team[0].image}
                      alt={team[0].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <div className="font-semibold">{team[0].name}</div>
                      <div className="text-muted-foreground text-sm">{team[0].role}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
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

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-10 md:p-16 rounded-3xl bg-card border border-border text-center relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">We're Hiring!</span>
                  </motion.div>

                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    Want to Join Our{" "}
                    <span className="gradient-text">Team?</span>
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    We're always looking for talented individuals who are passionate about digital 
                    innovation. Check out our open positions and become part of our journey.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" asChild className="group">
                        <Link to="/contact">
                          View Open Positions
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg" asChild className="group">
                        <Link to="/about">
                          Learn About Us
                          <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;