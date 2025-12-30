import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, Bookmark, MessageCircle, Heart, Eye, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const blogPosts = [
  {
    id: "1",
    slug: "web-design-trends-2024",
    title: "10 Web Design Trends to Watch in 2024",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape and how to implement them in your projects.",
    content: `
      <p>The web design landscape is constantly evolving, and 2024 brings exciting new trends that are reshaping how we create digital experiences. From immersive 3D elements to AI-powered personalization, here are the top trends you need to know.</p>
      
      <h2>1. Immersive 3D Elements</h2>
      <p>Three-dimensional design elements are becoming more prevalent as browsers become more capable of rendering complex graphics. From subtle 3D icons to fully immersive environments, this trend adds depth and interactivity to websites.</p>
      
      <h2>2. AI-Powered Personalization</h2>
      <p>Artificial intelligence is revolutionizing how websites adapt to individual users. Dynamic content that changes based on user behavior, preferences, and context creates more engaging and relevant experiences.</p>
      
      <h2>3. Micro-Interactions</h2>
      <p>Small, subtle animations that respond to user actions are becoming essential for modern web design. These micro-interactions provide feedback, guide users, and add personality to interfaces.</p>
      
      <h2>4. Dark Mode by Default</h2>
      <p>With increasing awareness of screen time and eye strain, many designers are opting for dark mode as the default theme, offering light mode as an alternative.</p>
      
      <h2>5. Glassmorphism 2.0</h2>
      <p>The frosted glass effect continues to evolve with more sophisticated blur effects, gradient overlays, and creative applications that add depth without sacrificing usability.</p>
      
      <h2>6. Bold Typography</h2>
      <p>Large, expressive typography is taking center stage, with designers using oversized fonts, variable fonts, and creative text treatments to make bold statements.</p>
      
      <h2>7. Sustainable Web Design</h2>
      <p>Environmental consciousness is influencing web design, with a focus on optimized assets, efficient code, and reduced carbon footprint through sustainable hosting solutions.</p>
      
      <h2>8. Voice User Interfaces</h2>
      <p>As voice assistants become more prevalent, websites are incorporating voice navigation and search capabilities to provide hands-free browsing experiences.</p>
      
      <h2>9. Augmented Reality Integration</h2>
      <p>WebAR is making augmented reality experiences accessible through browsers, enabling virtual try-ons, 3D product visualization, and interactive storytelling.</p>
      
      <h2>10. Inclusive Design</h2>
      <p>Accessibility is no longer an afterthought. Designers are prioritizing inclusive design from the start, ensuring websites are usable by everyone regardless of ability.</p>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of these trends will help you create websites that not only look modern but also provide exceptional user experiences. Remember, the best designs balance innovation with usability.</p>
    `,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    category: "Design",
    gradient: "from-purple-500 to-pink-500",
    views: 3420,
    likes: 256,
    comments: 42,
    author: {
      name: "Sara Ali",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      bio: "Sara is an award-winning designer with over 8 years of experience in creating user-centric digital experiences. She leads our creative team and is passionate about pushing the boundaries of digital design.",
      articles: 24,
      followers: "12.5K",
    },
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Web Design", "UI/UX", "Trends", "2024"],
  },
  {
    id: "2",
    slug: "digital-transformation-guide",
    title: "The Ultimate Guide to Digital Transformation",
    excerpt: "Learn how to successfully navigate digital transformation and future-proof your business for the modern age.",
    content: `
      <p>Digital transformation is no longer optional—it's essential for survival in today's competitive landscape. This comprehensive guide will walk you through the key steps to successfully transform your business.</p>
      
      <h2>Understanding Digital Transformation</h2>
      <p>Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo.</p>
      
      <h2>Key Pillars of Digital Transformation</h2>
      <p>Successful digital transformation rests on four pillars: customer experience, operational processes, business models, and organizational culture. Each pillar must be addressed for a holistic transformation.</p>
      
      <h2>Creating a Transformation Roadmap</h2>
      <p>Start by assessing your current digital maturity, defining clear objectives, identifying key stakeholders, and creating a phased implementation plan with measurable milestones.</p>
      
      <h2>Technology Selection</h2>
      <p>Choose technologies that align with your business goals. Cloud computing, AI, IoT, and automation tools are common enablers, but the right mix depends on your specific needs.</p>
      
      <h2>Change Management</h2>
      <p>Technology is only part of the equation. Success requires effective change management, employee training, and a culture that embraces innovation and continuous learning.</p>
      
      <h2>Measuring Success</h2>
      <p>Define KPIs that matter: customer satisfaction, operational efficiency, revenue growth, and employee productivity. Regular measurement ensures you stay on track.</p>
      
      <h2>Conclusion</h2>
      <p>Digital transformation is a journey, not a destination. With the right strategy, technology, and mindset, your organization can thrive in the digital age.</p>
    `,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    category: "Strategy",
    gradient: "from-blue-500 to-cyan-500",
    views: 2890,
    likes: 198,
    comments: 35,
    author: {
      name: "Ahmed Khan",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      bio: "Ahmed is a visionary leader with 10+ years of experience in digital transformation and business strategy. He founded Injaazh with the mission to help businesses thrive in the digital age.",
      articles: 42,
      followers: "28.3K",
    },
    date: "Dec 12, 2024",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Business", "Strategy", "Technology"],
  },
  {
    id: "3",
    slug: "mobile-app-native-vs-cross-platform",
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "A comprehensive comparison of native and cross-platform development approaches to help you make the right choice.",
    content: `
      <p>Choosing between native and cross-platform development is one of the most important decisions in mobile app development. Let's explore the pros and cons of each approach.</p>
      
      <h2>Native Development</h2>
      <p>Native apps are built specifically for one platform using platform-specific languages (Swift for iOS, Kotlin for Android). They offer the best performance and full access to device features.</p>
      
      <h2>Cross-Platform Development</h2>
      <p>Cross-platform frameworks like React Native and Flutter allow you to write code once and deploy to multiple platforms. This can significantly reduce development time and costs.</p>
      
      <h2>Performance Comparison</h2>
      <p>Native apps generally offer better performance, but modern cross-platform frameworks have closed the gap significantly. For most applications, the difference is negligible.</p>
      
      <h2>Development Cost and Time</h2>
      <p>Cross-platform development typically costs 30-40% less and takes less time since you maintain a single codebase instead of two separate ones.</p>
      
      <h2>When to Choose Native</h2>
      <p>Choose native when you need maximum performance, complex animations, heavy use of device features, or when targeting a single platform.</p>
      
      <h2>When to Choose Cross-Platform</h2>
      <p>Choose cross-platform when you need to launch on both platforms quickly, have budget constraints, or when your app doesn't require heavy native integrations.</p>
      
      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all answer. The best choice depends on your specific requirements, budget, timeline, and target audience.</p>
    `,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    category: "Development",
    gradient: "from-green-500 to-emerald-500",
    views: 2340,
    likes: 167,
    comments: 28,
    author: {
      name: "Raj Patel",
      role: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      bio: "Raj is a full-stack architect with expertise in building scalable mobile and web applications. He leads our development team and mentors junior developers.",
      articles: 31,
      followers: "15.8K",
    },
    date: "Dec 10, 2024",
    readTime: "6 min read",
    tags: ["Mobile Development", "React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "4",
    slug: "seo-best-practices-2024",
    title: "SEO Best Practices for 2024",
    excerpt: "Stay ahead of the competition with these essential SEO strategies and techniques for better search rankings.",
    content: `
      <p>Search engine optimization continues to evolve rapidly. Here are the most important SEO strategies for 2024 that will help you rank higher and drive more organic traffic.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google's page experience signals are more important than ever. Focus on Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
      
      <h2>AI and Search</h2>
      <p>With AI-powered search becoming mainstream, optimize for conversational queries and featured snippets. Create content that directly answers user questions.</p>
      
      <h2>E-E-A-T</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness are crucial ranking factors. Demonstrate your credentials and build trust with your audience.</p>
      
      <h2>Mobile-First Indexing</h2>
      <p>Ensure your mobile experience is flawless. Google primarily uses the mobile version of content for indexing and ranking.</p>
      
      <h2>Content Quality</h2>
      <p>Create comprehensive, well-researched content that provides real value. Thin, low-quality content will not rank in 2024.</p>
      
      <h2>Local SEO</h2>
      <p>For businesses with physical locations, optimize Google Business Profile, gather reviews, and ensure NAP consistency across the web.</p>
      
      <h2>Conclusion</h2>
      <p>SEO success in 2024 requires a holistic approach combining technical excellence, quality content, and user experience optimization.</p>
    `,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
    category: "Marketing",
    gradient: "from-orange-500 to-red-500",
    views: 4120,
    likes: 312,
    comments: 56,
    author: {
      name: "Fatima Hassan",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      bio: "Fatima is a data-driven marketer with expertise in growth strategies and digital marketing. She has helped hundreds of businesses achieve their marketing goals.",
      articles: 38,
      followers: "22.1K",
    },
    date: "Dec 8, 2024",
    readTime: "7 min read",
    tags: ["SEO", "Digital Marketing", "Google", "Content Strategy"],
  },
  {
    id: "5",
    slug: "building-brand-identity-online",
    title: "Building a Strong Brand Identity Online",
    excerpt: "Essential tips and strategies for creating a memorable brand that resonates with your target audience.",
    content: `
      <p>A strong brand identity sets you apart from competitors and creates lasting connections with your audience. Here's how to build a memorable brand online.</p>
      
      <h2>Define Your Brand Values</h2>
      <p>Start with your core values and mission. What does your brand stand for? What problems do you solve? Your values should guide every brand decision.</p>
      
      <h2>Know Your Audience</h2>
      <p>Deep understanding of your target audience is essential. Create detailed buyer personas and tailor your brand voice and visuals to resonate with them.</p>
      
      <h2>Visual Identity</h2>
      <p>Develop a cohesive visual system including logo, color palette, typography, and imagery style. Consistency across all touchpoints builds recognition.</p>
      
      <h2>Brand Voice</h2>
      <p>Your brand voice should be consistent across all communications. Whether formal or casual, ensure it reflects your brand personality.</p>
      
      <h2>Digital Presence</h2>
      <p>Your website and social media are often the first touchpoints. Ensure they accurately represent your brand and provide great user experiences.</p>
      
      <h2>Conclusion</h2>
      <p>Building a strong brand takes time and consistency. Stay true to your values while adapting to changing market conditions.</p>
    `,
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80",
    category: "Branding",
    gradient: "from-violet-500 to-purple-500",
    views: 1890,
    likes: 145,
    comments: 23,
    author: {
      name: "Sara Ali",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      bio: "Sara is an award-winning designer with over 8 years of experience in creating user-centric digital experiences. She leads our creative team and is passionate about pushing the boundaries of digital design.",
      articles: 24,
      followers: "12.5K",
    },
    date: "Dec 5, 2024",
    readTime: "5 min read",
    tags: ["Branding", "Design", "Marketing", "Identity"],
  },
  {
    id: "6",
    slug: "data-driven-marketing",
    title: "The Power of Data-Driven Marketing",
    excerpt: "How to leverage analytics and data insights to create more effective marketing campaigns.",
    content: `
      <p>Data-driven marketing uses customer data to optimize campaign performance and deliver personalized experiences. Here's how to harness its power.</p>
      
      <h2>Collecting the Right Data</h2>
      <p>Focus on collecting actionable data: customer behavior, preferences, demographics, and engagement metrics. Quality matters more than quantity.</p>
      
      <h2>Analytics Tools</h2>
      <p>Invest in robust analytics platforms that provide insights across all channels. Google Analytics 4, heat mapping tools, and CRM analytics are essential.</p>
      
      <h2>Customer Segmentation</h2>
      <p>Use data to segment your audience into meaningful groups. Targeted messaging to specific segments dramatically improves conversion rates.</p>
      
      <h2>Personalization</h2>
      <p>Leverage data to personalize content, recommendations, and offers. Personalized experiences can increase revenue by 10-30%.</p>
      
      <h2>Testing and Optimization</h2>
      <p>Use A/B testing to validate hypotheses and continuously optimize. Data should drive decisions, not assumptions.</p>
      
      <h2>Conclusion</h2>
      <p>Data-driven marketing isn't just about collecting data—it's about turning insights into action that improves customer experiences and business results.</p>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    category: "Marketing",
    gradient: "from-cyan-500 to-blue-500",
    views: 2670,
    likes: 189,
    comments: 31,
    author: {
      name: "Fatima Hassan",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      bio: "Fatima is a data-driven marketer with expertise in growth strategies and digital marketing. She has helped hundreds of businesses achieve their marketing goals.",
      articles: 38,
      followers: "22.1K",
    },
    date: "Dec 2, 2024",
    readTime: "6 min read",
    tags: ["Data Analytics", "Marketing", "Personalization", "Growth"],
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Article link has been copied to clipboard.",
    });
  };

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center relative z-10"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4 gradient-text">Post Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Button asChild size="lg" className="group">
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Injaazh Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Navbar />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main ref={contentRef} className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          {/* Content */}
          <div className="container mx-auto px-6 pb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{post.category}</span>
              </div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold`}>
                  <Sparkles className="w-4 h-4" />
                  {post.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl"
              >
                {post.excerpt}
              </motion.p>

              {/* Author & Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-6"
              >
                <Link to="#author" className="flex items-center gap-3 group">
                  <div className="relative">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/50 group-hover:ring-primary transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </Link>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {post.views?.toLocaleString()} views
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Sidebar - Left */}
              <aside className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="sticky top-24 flex flex-col items-center gap-4"
                >
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isLiked 
                        ? "bg-red-500 text-white" 
                        : "bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                  </button>
                  <span className="text-sm font-medium">{(post.likes || 0) + (isLiked ? 1 : 0)}</span>

                  <div className="w-px h-8 bg-border" />

                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isBookmarked 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
                  </button>

                  <div className="w-px h-8 bg-border" />

                  <button
                    onClick={handleCopyLink}
                    className="p-3 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
                  >
                    <Copy className="w-5 h-5" />
                  </button>

                  <div className="w-px h-8 bg-border" />

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 hover:bg-[#1DA1F2] text-muted-foreground hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>

                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 hover:bg-[#0A66C2] text-muted-foreground hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 hover:bg-[#1877F2] text-muted-foreground hover:text-white transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </motion.div>
              </aside>

              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="lg:col-span-8"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                    prose-blockquote:border-l-primary prose-blockquote:bg-secondary/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-img:rounded-xl prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-border">
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        {post.views?.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        {(post.likes || 0) + (isLiked ? 1 : 0)} likes
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        {post.comments} comments
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground mr-2">Share:</span>
                      <button
                        onClick={handleCopyLink}
                        className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/50 hover:bg-[#1DA1F2] text-muted-foreground hover:text-white transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/50 hover:bg-[#0A66C2] text-muted-foreground hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Author Card */}
                  <motion.div
                    id="author"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative flex-shrink-0">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-24 h-24 rounded-2xl object-cover ring-4 ring-primary/20"
                          />
                          <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            Author
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{post.author.name}</h3>
                              <p className="text-primary text-sm font-medium">{post.author.role}</p>
                            </div>
                            <Button variant="outline" size="sm" className="group/btn">
                              Follow
                              <ArrowUpRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </Button>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{post.author.bio}</p>
                          <div className="flex items-center gap-6 text-sm">
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">{post.author.articles}</strong> Articles
                            </span>
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">{post.author.followers}</strong> Followers
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>

              {/* Sidebar - Right */}
              <aside className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="sticky top-24 space-y-8"
                >
                  {/* Table of Contents */}
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                      In This Article
                    </h3>
                    <nav className="space-y-2">
                      {post.content.match(/<h2>(.*?)<\/h2>/g)?.map((heading, index) => {
                        const text = heading.replace(/<\/?h2>/g, '');
                        return (
                          <a
                            key={index}
                            href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                          >
                            {text}
                          </a>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="relative p-6 rounded-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-10`} />
                    <div className="relative">
                      <Sparkles className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold mb-2">Get More Insights</h3>
                      <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for weekly updates.</p>
                      <Button className="w-full" size="sm">
                        Subscribe
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Keep Reading
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">Related Articles</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="group block h-full"
                    >
                      <div className="relative h-full rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/50 transition-all duration-500">
                        {/* Animated border */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${relatedPost.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                        
                        {/* Image */}
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${relatedPost.gradient} text-white text-xs font-semibold`}>
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {relatedPost.readTime}
                            </span>
                            <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                              Read More
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/blog">
                    View All Articles
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Let's Work Together
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Start Your
                <span className="gradient-text"> Digital Journey</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how we can help transform your business with innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
