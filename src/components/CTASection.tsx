import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@injaazh.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "Global • Remote First" },
];

const CTASection = () => {
  const ref = useRef(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden geometric-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow Effects */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Let's Work Together</span>
            </motion.div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              Ready to Start Your{" "}
              <span className="gradient-text">Digital Journey?</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Let's collaborate to create something extraordinary. Get in touch with us today and let's transform your ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 md:mb-10 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-xs sm:text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10 glow-primary">
              {/* Icon */}
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Rocket size={36} className="text-primary-foreground" />
              </motion.div>

              <h3 className="font-display text-2xl font-bold mb-4">
                Get a Free Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free 30-minute call with our experts to discuss your project requirements and how we can help.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="font-display text-2xl font-bold text-primary">24h</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="font-display text-2xl font-bold text-primary">Free</div>
                  <div className="text-xs text-muted-foreground">Consultation</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="font-display text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Commitment</div>
                </div>
              </div>

              <Button className="w-full" size="lg" asChild>
                <Link to="/contact">
                  Book a Call
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
