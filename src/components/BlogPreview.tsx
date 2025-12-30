import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, ArrowUpRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 Web Design Trends Dominating 2024",
    excerpt: "Explore the latest design trends shaping the digital landscape this year.",
    category: "Design",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    slug: "web-design-trends-2024",
    icon: Sparkles,
    gradient: "from-primary via-accent to-primary",
  },
  {
    title: "The Complete Guide to SEO in 2024",
    excerpt: "Master search engine optimization with our comprehensive guide.",
    category: "Marketing",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    slug: "complete-seo-guide-2024",
    icon: TrendingUp,
    gradient: "from-accent via-primary to-accent",
  },
  {
    title: "Building Scalable React Applications",
    excerpt: "Best practices for building maintainable and scalable React apps.",
    category: "Development",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    slug: "scalable-react-applications",
    icon: Zap,
    gradient: "from-primary to-accent",
  },
];

const BlogPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-bg opacity-50" />
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-32 sm:w-64 h-32 sm:h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-32 sm:w-64 h-32 sm:h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Fresh Content Weekly</span>
          </motion.div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4">
            Latest{" "}
            <span className="relative">
              <span className="gradient-text">Insights</span>
              <motion.div
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Stay updated with the latest trends, tips, and insights from our experts.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Card */}
                  <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 h-full">
                    {/* Animated gradient border on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{ padding: "2px", borderRadius: "1rem" }}
                    >
                      <div className="absolute inset-[2px] bg-card rounded-[14px]" />
                    </motion.div>

                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon size={14} className="text-primary" />
                        <span className="text-xs font-semibold">{post.category}</span>
                      </motion.div>

                      {/* Floating Action Button */}
                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <ArrowUpRight size={18} className="text-primary-foreground" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      {/* Meta info */}
                      <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read more link */}
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <span>Read Article</span>
                        <motion.div
                          animate={{
                            x: hoveredIndex === index ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom gradient line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="group">
              <Link to="/blog">
                Explore All Articles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;