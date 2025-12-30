import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Injaazh transformed our digital presence completely. Their team understood our vision and delivered beyond expectations. The attention to detail and professionalism was outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    company: "TechStart",
  },
  {
    quote: "The mobile app they built for us increased our customer engagement by 200%. Professional, creative, and results-driven. We couldn't be happier with the outcome.",
    author: "Michael Chen",
    role: "Founder, FoodieGo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    company: "FoodieGo",
  },
  {
    quote: "Working with Injaazh was a game-changer. Their branding strategy helped us stand out in a crowded market. They truly understand what makes a brand memorable.",
    author: "Emily Parker",
    role: "Marketing Director, Eleva",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    company: "Eleva",
  },
  {
    quote: "Their technical expertise and project management skills are top-notch. They delivered our e-commerce platform on time and within budget. Highly recommended!",
    author: "David Kim",
    role: "CTO, CloudNine",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    company: "CloudNine",
  },
  {
    quote: "The SEO and marketing strategies they implemented doubled our organic traffic in just 3 months. Their data-driven approach really sets them apart.",
    author: "Lisa Thompson",
    role: "CEO, GreenLeaf",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    rating: 5,
    company: "GreenLeaf",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary font-medium text-sm">Client Success Stories</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Trusted by{" "}
            <span className="relative">
              <span className="gradient-text">Industry Leaders</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their transformative journey with us.
          </p>
        </motion.div>

        {/* Featured Testimonial Card */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              <Quote size={120} className="absolute -top-6 -right-6 text-primary/5 rotate-12" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-8">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star size={24} className="fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                    <span className="ml-3 text-muted-foreground text-sm font-medium">5.0 Rating</span>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-10 text-foreground/90">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-sm" />
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].author}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-background"
                      />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xl text-foreground">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-border/50">
                {/* Progress Dots */}
                <div className="flex items-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className="group relative"
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? "bg-primary scale-125" 
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                      {index === activeIndex && (
                        <motion.div
                          className="absolute -inset-1 border-2 border-primary rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          layoutId="active-dot"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <ArrowLeft size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Avatars Preview Strip */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex -space-x-3">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.author}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === activeIndex ? "z-10 scale-125" : "hover:scale-110 hover:z-10"
                }`}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute -inset-0.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary" : "bg-transparent"
                }`} />
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="relative w-12 h-12 rounded-full object-cover border-2 border-background"
                />
              </motion.button>
            ))}
          </div>
          <div className="text-muted-foreground text-sm ml-4">
            <span className="font-semibold text-foreground">50+</span> Happy Clients
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
