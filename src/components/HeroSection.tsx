import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target, Rocket, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
      <section className="relative w-full overflow-hidden bg-background pt-24 pb-12 lg:pt-32 lg:pb-24">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
              className="absolute top-0 -left-16 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/20 blur-[80px] sm:blur-[120px]"
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
              className="absolute bottom-0 -right-16 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/20 blur-[80px] sm:blur-[120px]"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Creative Agency</span>
                  </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5"
                >
                  We craft digital{" "}
                  <span className="gradient-text text-primary">experiences</span> that inspire
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                >
                  A performance-driven agency transforming bold ideas into powerful digital solutions that drive growth and engagement.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-10"
                >
                  <Button
                      size="lg"
                      className="h-12 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all w-full sm:w-auto"
                      asChild
                  >
                    <Link to="/contact">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                      variant="outline"
                      size="lg"
                      className="h-12 px-8 text-base font-semibold rounded-full border-2 hover:bg-secondary transition-all w-full sm:w-auto"
                      asChild
                  >
                    <Link to="/portfolio">View Work</Link>
                  </Button>
                </motion.div>

                {/* Compact Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center lg:justify-start gap-8 w-full lg:w-auto border-t border-border/40 pt-6"
                >
                  {[
                    { value: "700+", label: "Projects" },
                    { value: "200+", label: "Clients" },
                    { value: "98%", label: "Satisfaction" },
                  ].map((stat) => (
                      <div key={stat.label} className="flex flex-col items-center lg:items-start">
                        <span className="text-xl font-bold text-foreground">{stat.value}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide font-medium">{stat.label}</span>
                      </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Floating Cards (Defined Height Container) */}
              <div className="relative hidden lg:block h-[400px] xl:h-[500px] w-full">
                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />

                {/* Decorative Orbit Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-dashed border-primary/20 animate-[spin_40s_linear_infinite]" />

                {/* Main Center Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-card/90 backdrop-blur-xl rounded-2xl border border-border/60 p-5 shadow-2xl w-64"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex gap-0.5 bg-background/50 rounded-full px-2 py-1">
                        {[1,2,3,4,5].map(i => (
                            <Star key={i} className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-foreground mb-1">Launch Ready</div>
                    <div className="text-xs text-muted-foreground leading-snug">Your vision, perfectly executed.</div>
                  </motion.div>
                </motion.div>

                {/* Floating Card 1 - Top Right */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-10 right-4 z-10"
                >
                  <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-card/80 backdrop-blur-md rounded-xl border border-border/50 px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">+340% ROI</div>
                        <div className="text-[10px] text-muted-foreground">This quarter</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Card 2 - Bottom Left */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute bottom-12 left-4 z-10"
                >
                  <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="bg-card/80 backdrop-blur-md rounded-xl border border-border/50 px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">Goal Hit</div>
                        <div className="text-[10px] text-muted-foreground">2.3M reached</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;