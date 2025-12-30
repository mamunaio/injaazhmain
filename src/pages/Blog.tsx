import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  BookOpen,
  TrendingUp,
  Search,
  ArrowUpRight,
  Bookmark,
  Eye,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "web-design-trends-2024",
    title: "10 Web Design Trends to Watch in 2024",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape and how to implement them in your projects.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Design",
    author: "Sara Ali",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "Dec 15, 2024",
    readTime: "5 min",
    views: "2.5K",
    comments: 24,
    featured: true,
    gradient: "from-primary to-accent",
  },
  {
    id: 2,
    slug: "digital-transformation-guide",
    title: "The Ultimate Guide to Digital Transformation",
    excerpt: "Learn how to successfully navigate digital transformation and future-proof your business for the modern age.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    category: "Strategy",
    author: "Ahmed Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "Dec 12, 2024",
    readTime: "8 min",
    views: "3.1K",
    comments: 18,
    featured: true,
    gradient: "from-accent to-primary",
  },
  {
    id: 3,
    slug: "mobile-app-native-vs-cross-platform",
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "A comprehensive comparison of native and cross-platform development approaches to help you make the right choice.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Development",
    author: "Raj Patel",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "Dec 10, 2024",
    readTime: "6 min",
    views: "1.8K",
    comments: 12,
    featured: false,
    gradient: "from-primary via-accent to-primary",
  },
  {
    id: 4,
    slug: "seo-best-practices-2024",
    title: "SEO Best Practices for 2024",
    excerpt: "Stay ahead of the competition with these essential SEO strategies and techniques for better search rankings.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    category: "Marketing",
    author: "Fatima Hassan",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "Dec 8, 2024",
    readTime: "7 min",
    views: "2.2K",
    comments: 15,
    featured: false,
    gradient: "from-accent via-primary to-accent",
  },
  {
    id: 5,
    slug: "building-brand-identity-online",
    title: "Building a Strong Brand Identity Online",
    excerpt: "Essential tips and strategies for creating a memorable brand that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    category: "Branding",
    author: "Sara Ali",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "Dec 5, 2024",
    readTime: "5 min",
    views: "1.5K",
    comments: 9,
    featured: false,
    gradient: "from-primary to-accent",
  },
  {
    id: 6,
    slug: "data-driven-marketing",
    title: "The Power of Data-Driven Marketing",
    excerpt: "How to leverage analytics and data insights to create more effective marketing campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Marketing",
    author: "Fatima Hassan",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "Dec 2, 2024",
    readTime: "6 min",
    views: "1.9K",
    comments: 11,
    featured: false,
    gradient: "from-accent to-primary",
  },
];

const categories = [
  { name: "All", count: 24 },
  { name: "Design", count: 8 },
  { name: "Development", count: 6 },
  { name: "Marketing", count: 5 },
  { name: "Strategy", count: 3 },
  { name: "Branding", count: 2 },
];

const Blog = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | Injaazh Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore insights, tips, and trends in digital transformation, web development, design, and marketing from the Injaazh team."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section - Immersive */}
        <section ref={heroRef} className="min-h-[60vh] flex items-center relative overflow-hidden">
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
                  <BookOpen size={16} className="text-primary" />
                  <span className="text-sm font-semibold">Our Blog</span>
                </motion.div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Insights &
                  <br />
                  <span className="relative inline-block">
                    <span className="gradient-text">Inspiration</span>
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

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Stay updated with the latest trends, tips, and insights in digital transformation 
                  and creative design from our expert team.
                </p>

                {/* Search bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="max-w-xl mx-auto"
                >
                  <div className="relative">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-14 pl-12 pr-4 rounded-2xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <TrendingUp size={20} className="text-primary" />
              <h2 className="font-display text-2xl font-bold">Featured Articles</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative rounded-3xl overflow-hidden bg-card border border-border h-full">
                      {/* Image */}
                      <div className="aspect-[16/9] overflow-hidden relative">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                        
                        {/* Category badge */}
                        <motion.div
                          className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {post.category}
                        </motion.div>

                        {/* Featured badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border">
                          <Sparkles size={12} className="text-primary" />
                          <span className="text-xs font-semibold">Featured</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                            />
                            <div>
                              <div className="font-medium text-sm">{post.author}</div>
                              <div className="text-muted-foreground text-xs">{post.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye size={14} />
                              {post.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories - Sticky */}
        <section className="py-4 border-y border-border sticky top-20 bg-background/95 backdrop-blur-xl z-40">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category, index) => {
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
                    {category.name}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-primary-foreground/20" : "bg-muted"}`}>
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section ref={gridRef} className="py-16 relative overflow-hidden">
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
                {filteredPosts.map((post, index) => {
                  const isHovered = hoveredPost === post.id;

                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      onHoverStart={() => setHoveredPost(post.id)}
                      onHoverEnd={() => setHoveredPost(null)}
                      className="group"
                    >
                      <motion.div
                        className="h-full rounded-2xl bg-card border border-border relative overflow-hidden"
                        whileHover={{
                          y: -10,
                          boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)",
                        }}
                      >
                        {/* Gradient overlay */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 z-10 pointer-events-none`}
                          animate={{ opacity: isHovered ? 0.03 : 0 }}
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
                        <Link to={`/blog/${post.slug}`} className="block relative z-10">
                          <div className="aspect-[16/10] overflow-hidden relative">
                            <motion.img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                              animate={{ scale: isHovered ? 1.1 : 1 }}
                              transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                            
                            {/* Category badge */}
                            <motion.div
                              className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-xs font-semibold text-primary">{post.category}</span>
                            </motion.div>

                            {/* Bookmark button */}
                            <motion.button
                              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Bookmark size={16} className="text-foreground" />
                            </motion.button>

                            {/* Read time overlay */}
                            <motion.div
                              className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                            >
                              <Clock size={12} />
                              {post.readTime} read
                            </motion.div>
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="p-5 relative z-10">
                          <Link to={`/blog/${post.slug}`}>
                            <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Author & Stats */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img
                                src={post.authorImage}
                                alt={post.author}
                                className="w-8 h-8 rounded-full object-cover border border-border"
                              />
                              <div>
                                <div className="font-medium text-xs">{post.author}</div>
                                <div className="text-muted-foreground text-xs">{post.date}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground text-xs">
                              <span className="flex items-center gap-1">
                                <Eye size={12} />
                                {post.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle size={12} />
                                {post.comments}
                              </span>
                            </div>
                          </div>

                          {/* Read more link */}
                          <motion.div
                            className="flex items-center gap-2 text-primary font-medium text-sm mt-4 pt-4 border-t border-border"
                            animate={{ x: isHovered ? 5 : 0 }}
                          >
                            <span>Read Article</span>
                            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                          </motion.div>
                        </div>

                        {/* Corner glow */}
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-500 z-0" />
                      </motion.div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="group">
                  Load More Articles
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
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
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
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
                    <span className="text-sm font-semibold text-primary">Stay Updated</span>
                  </motion.div>

                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Subscribe to Our{" "}
                    <span className="gradient-text">Newsletter</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                    Get the latest insights, tips, and updates delivered straight to your inbox. 
                    No spam, just valuable content.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 h-14 px-5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="h-14 px-8">
                        Subscribe
                        <ArrowRight size={18} />
                      </Button>
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground text-xs mt-4">
                    Join 5,000+ subscribers. Unsubscribe anytime.
                  </p>
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

export default Blog;