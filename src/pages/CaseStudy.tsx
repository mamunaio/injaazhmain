import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  ExternalLink,
  Users,
  Target,
  Zap,
  CheckCircle,
  Quote,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  Code,
  Smartphone,
  Palette,
  Megaphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    slug: "techflow-dashboard",
    title: "TechFlow Dashboard",
    subtitle: "Transforming Data into Actionable Insights",
    category: "Web",
    categoryIcon: Code,
    client: "TechFlow Inc.",
    industry: "SaaS / Analytics",
    duration: "4 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["React", "Node.js", "D3.js", "PostgreSQL", "AWS"],
    stats: [
      { label: "User Engagement", value: "+45%", icon: TrendingUp },
      { label: "Data Processing", value: "10x Faster", icon: Zap },
      { label: "Active Users", value: "50K+", icon: Users },
      { label: "Client Satisfaction", value: "98%", icon: Award },
    ],
    overview: "TechFlow needed a comprehensive analytics dashboard that could handle real-time data visualization for their growing SaaS platform. Their existing solution was slow, outdated, and couldn't scale with their rapid user growth.",
    challenge: "The main challenges included processing millions of data points in real-time, creating intuitive visualizations that non-technical users could understand, and building a system that could scale seamlessly as the user base grew from 10K to 100K+ users.",
    solution: "We built a custom React-based dashboard with D3.js for advanced data visualizations. The backend was architected with Node.js microservices, allowing horizontal scaling. We implemented WebSocket connections for real-time updates and Redis caching for frequently accessed data.",
    process: [
      { phase: "Discovery", description: "Deep dive into user needs, technical requirements, and business goals through stakeholder interviews and data analysis." },
      { phase: "Design", description: "Created wireframes and high-fidelity prototypes, focusing on data hierarchy and user-friendly interfaces." },
      { phase: "Development", description: "Agile development with 2-week sprints, continuous integration, and regular client demos." },
      { phase: "Launch", description: "Phased rollout with A/B testing, user training, and 24/7 monitoring during the initial weeks." },
    ],
    results: [
      "45% increase in user engagement within the first month",
      "10x improvement in data processing speed",
      "Reduced page load time from 8 seconds to under 1 second",
      "Zero downtime during the migration of 50,000 active users",
      "98% client satisfaction score in post-launch survey",
    ],
    testimonial: {
      quote: "Injaazh transformed our data infrastructure completely. The new dashboard is not just faster—it's become the central nervous system of our business operations.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    ],
    technologies: ["React", "Node.js", "D3.js", "PostgreSQL", "Redis", "AWS", "Docker", "WebSocket"],
    services: ["UI/UX Design", "Frontend Development", "Backend Development", "Cloud Architecture", "Performance Optimization"],
  },
  {
    id: 2,
    slug: "eleva-brand-identity",
    title: "Eleva Brand Identity",
    subtitle: "Crafting a Wellness Brand That Inspires",
    category: "Branding",
    categoryIcon: Palette,
    client: "Eleva Wellness",
    industry: "Health & Wellness",
    duration: "2 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    gradient: "from-purple-500 to-pink-500",
    tags: ["Branding", "Logo Design", "Guidelines", "Packaging"],
    stats: [
      { label: "Brand Recognition", value: "+200%", icon: TrendingUp },
      { label: "Social Engagement", value: "5x More", icon: Users },
      { label: "Customer Trust", value: "92%", icon: Award },
      { label: "Market Position", value: "Top 10", icon: Target },
    ],
    overview: "Eleva Wellness was launching a new line of premium wellness products but lacked a cohesive brand identity that could compete in the luxury health market. They needed a complete brand overhaul that would resonate with health-conscious millennials.",
    challenge: "The wellness industry is crowded with competitors. Eleva needed to stand out while maintaining authenticity. The brand had to communicate premium quality, natural ingredients, and a modern approach to wellness without feeling clinical or cold.",
    solution: "We developed a warm, organic visual identity centered around growth and transformation. The logo features an abstract leaf that also suggests upward movement. The color palette combines earthy greens with soft golds, creating a luxurious yet approachable feel.",
    process: [
      { phase: "Research", description: "Competitive analysis, target audience research, and brand positioning workshops with the founding team." },
      { phase: "Concept", description: "Developed three distinct creative directions, refined based on stakeholder feedback." },
      { phase: "Design", description: "Created the full visual identity system including logo, typography, colors, and imagery guidelines." },
      { phase: "Delivery", description: "Comprehensive brand guidelines document, asset library, and training for internal teams." },
    ],
    results: [
      "200% increase in brand recognition within target demographic",
      "Successfully launched in 50+ retail locations",
      "5x increase in social media engagement",
      "Featured in major wellness publications",
      "92% of customers described the brand as 'trustworthy' and 'premium'",
    ],
    testimonial: {
      quote: "Our new brand identity perfectly captures who we are. Since the rebrand, we've seen incredible growth and our customers constantly compliment our packaging and visual presence.",
      author: "Maya Johnson",
      role: "Founder, Eleva Wellness",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    technologies: ["Adobe Illustrator", "Figma", "After Effects"],
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines", "Packaging Design"],
  },
  {
    id: 3,
    slug: "foodiego-mobile-app",
    title: "FoodieGo Mobile App",
    subtitle: "Revolutionizing Food Delivery Experience",
    category: "Mobile",
    categoryIcon: Smartphone,
    client: "FoodieGo",
    industry: "Food & Delivery",
    duration: "6 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    gradient: "from-orange-500 to-red-500",
    tags: ["React Native", "Firebase", "Stripe", "Google Maps"],
    stats: [
      { label: "App Downloads", value: "100K+", icon: TrendingUp },
      { label: "App Store Rating", value: "4.8★", icon: Award },
      { label: "Order Success", value: "99.5%", icon: CheckCircle },
      { label: "Delivery Time", value: "-25%", icon: Zap },
    ],
    overview: "FoodieGo wanted to disrupt the local food delivery market with an app that prioritized user experience, fast delivery, and restaurant partnerships. They needed a cross-platform solution that could compete with major players.",
    challenge: "Building a reliable real-time tracking system, integrating multiple payment gateways, ensuring smooth restaurant onboarding, and creating an intuitive interface that works for both customers and delivery partners.",
    solution: "We built a React Native app with real-time GPS tracking, intelligent route optimization, and a seamless checkout flow. The admin dashboard allows restaurants to manage orders efficiently, while the delivery partner app ensures optimal routing.",
    process: [
      { phase: "Planning", description: "User journey mapping, feature prioritization, and technical architecture planning." },
      { phase: "Design", description: "User-centric design with extensive prototyping and usability testing." },
      { phase: "Development", description: "Cross-platform development with separate builds for customers, restaurants, and delivery partners." },
      { phase: "Testing", description: "Comprehensive QA including real-world delivery tests in pilot markets." },
    ],
    results: [
      "100,000+ downloads in the first 3 months",
      "4.8-star rating on both App Store and Play Store",
      "25% faster average delivery time than competitors",
      "99.5% order success rate",
      "Partnered with 500+ restaurants in launch cities",
    ],
    testimonial: {
      quote: "The app exceeded all our expectations. Users love the intuitive interface, and our restaurant partners appreciate how easy it is to manage orders. The real-time tracking alone has transformed customer satisfaction.",
      author: "Alex Rivera",
      role: "CEO, FoodieGo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Stripe", "Google Maps API", "Redis", "MongoDB"],
    services: ["Mobile App Development", "UI/UX Design", "Backend Development", "Payment Integration", "DevOps"],
  },
  {
    id: 4,
    slug: "greenleaf-ecommerce",
    title: "GreenLeaf E-commerce",
    subtitle: "Sustainable Shopping Made Beautiful",
    category: "Web",
    categoryIcon: Code,
    client: "GreenLeaf Co.",
    industry: "E-commerce / Sustainability",
    duration: "5 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    gradient: "from-green-500 to-emerald-500",
    tags: ["Next.js", "Shopify", "Tailwind", "Headless CMS"],
    stats: [
      { label: "Revenue Growth", value: "+180%", icon: TrendingUp },
      { label: "Conversion Rate", value: "4.2%", icon: Target },
      { label: "Page Speed", value: "98/100", icon: Zap },
      { label: "Total Sales", value: "$2M+", icon: Award },
    ],
    overview: "GreenLeaf Co. needed an e-commerce platform that reflected their commitment to sustainability while providing a seamless shopping experience. Their existing Shopify theme was limiting their brand expression and conversion potential.",
    challenge: "Creating a custom headless commerce solution that maintained Shopify's powerful backend while delivering lightning-fast frontend performance. The site needed to handle high traffic during seasonal promotions without compromising speed.",
    solution: "We built a headless e-commerce solution using Next.js and Shopify's Storefront API. This allowed for complete design freedom, blazing-fast page loads, and seamless integration with their existing inventory and fulfillment systems.",
    process: [
      { phase: "Audit", description: "Performance analysis, conversion optimization review, and user behavior analysis of the existing site." },
      { phase: "Architecture", description: "Designed headless commerce architecture with focus on performance and scalability." },
      { phase: "Build", description: "Custom Next.js frontend with optimized images, lazy loading, and edge caching." },
      { phase: "Optimize", description: "Continuous performance monitoring and conversion rate optimization post-launch." },
    ],
    results: [
      "180% increase in online revenue year-over-year",
      "Page speed improved from 45 to 98 on Google PageSpeed Insights",
      "4.2% conversion rate (up from 1.5%)",
      "50% reduction in bounce rate",
      "$2M+ in sales in the first year on the new platform",
    ],
    testimonial: {
      quote: "The new website is a game-changer. Our customers constantly tell us how much they love the shopping experience, and our conversion rates speak for themselves. Injaazh understood our vision perfectly.",
      author: "Emma Green",
      role: "Marketing Director, GreenLeaf Co.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Vercel", "Contentful", "Algolia"],
    services: ["E-commerce Development", "UI/UX Design", "Performance Optimization", "SEO", "Analytics Setup"],
  },
  {
    id: 5,
    slug: "fintrack-app",
    title: "FinTrack App",
    subtitle: "Personal Finance Made Simple",
    category: "Mobile",
    categoryIcon: Smartphone,
    client: "FinTrack",
    industry: "FinTech",
    duration: "5 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    gradient: "from-violet-500 to-purple-500",
    tags: ["Flutter", "Firebase", "Charts", "Plaid API"],
    stats: [
      { label: "Active Users", value: "75K+", icon: Users },
      { label: "App Rating", value: "4.9★", icon: Award },
      { label: "Money Saved", value: "$5M+", icon: TrendingUp },
      { label: "Daily Active", value: "60%", icon: Target },
    ],
    overview: "FinTrack aimed to make personal finance management accessible to everyone. They needed a mobile app that could connect to bank accounts, track spending, provide insights, and help users build better financial habits.",
    challenge: "Building secure bank integrations, creating meaningful financial insights from raw transaction data, and designing an interface that makes complex financial data approachable for everyday users.",
    solution: "We developed a Flutter app with Plaid integration for secure bank connections. The app uses machine learning to categorize transactions and provide personalized spending insights. Gamification elements encourage users to reach their savings goals.",
    process: [
      { phase: "Research", description: "User interviews with target demographic, competitive analysis, and fintech regulatory review." },
      { phase: "Security", description: "Implemented bank-level security measures, encryption, and compliance frameworks." },
      { phase: "Development", description: "Built with Flutter for consistent cross-platform experience and native performance." },
      { phase: "Growth", description: "Implemented referral system and engagement features to drive organic growth." },
    ],
    results: [
      "75,000+ active users within 6 months of launch",
      "4.9-star rating with over 10,000 reviews",
      "Users have collectively saved over $5 million",
      "60% daily active user rate (industry average is 25%)",
      "Featured in App Store's 'Apps We Love' collection",
    ],
    testimonial: {
      quote: "FinTrack has completely changed how I manage my money. The insights are incredibly helpful, and I've saved more in 6 months than I did in the previous 2 years. The Injaazh team built something truly special.",
      author: "Michael Chen",
      role: "CEO, FinTrack",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
    technologies: ["Flutter", "Firebase", "Plaid API", "TensorFlow Lite", "Node.js", "PostgreSQL"],
    services: ["Mobile App Development", "UI/UX Design", "Backend Development", "ML Integration", "Security Audit"],
  },
  {
    id: 6,
    slug: "startupx-campaign",
    title: "StartupX Campaign",
    subtitle: "From Zero to Viral in 90 Days",
    category: "Marketing",
    categoryIcon: Megaphone,
    client: "StartupX",
    industry: "B2B SaaS",
    duration: "3 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-amber-500 to-orange-500",
    tags: ["SEO", "PPC", "Social Media", "Content Marketing"],
    stats: [
      { label: "Lead Generation", value: "+300%", icon: TrendingUp },
      { label: "Social Reach", value: "5M+", icon: Users },
      { label: "Cost Per Lead", value: "-45%", icon: Target },
      { label: "ROI", value: "850%", icon: Award },
    ],
    overview: "StartupX had a great product but struggled with market awareness. They needed a comprehensive digital marketing campaign to generate qualified leads and establish thought leadership in their niche.",
    challenge: "Limited budget, crowded B2B SaaS market, and the need to educate potential customers about a new category of software. The campaign had to deliver measurable results within a tight 90-day timeline.",
    solution: "We created a multi-channel campaign combining SEO, targeted PPC, LinkedIn thought leadership, and viral content marketing. The strategy focused on educating the market while capturing high-intent leads through strategic content.",
    process: [
      { phase: "Strategy", description: "Market research, competitor analysis, and channel strategy development with clear KPIs." },
      { phase: "Content", description: "Created cornerstone content, case studies, and a viral video series." },
      { phase: "Execution", description: "Launched coordinated campaigns across SEO, PPC, LinkedIn, and email." },
      { phase: "Optimization", description: "Weekly performance reviews and rapid iteration based on data." },
    ],
    results: [
      "300% increase in qualified leads within 90 days",
      "5M+ social media reach across all platforms",
      "45% reduction in cost per lead compared to previous efforts",
      "850% ROI on marketing spend",
      "#1 ranking for 15 high-intent keywords",
    ],
    testimonial: {
      quote: "The results speak for themselves. Injaazh didn't just run campaigns—they transformed our entire go-to-market strategy. Our sales pipeline has never been healthier.",
      author: "David Park",
      role: "VP Marketing, StartupX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    technologies: ["Google Ads", "LinkedIn Ads", "HubSpot", "SEMrush", "Ahrefs", "Mailchimp"],
    services: ["Digital Strategy", "SEO", "PPC Management", "Content Marketing", "Social Media Marketing", "Email Marketing"],
  },
];

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!caseStudy) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
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
            <h1 className="text-5xl font-bold mb-4 gradient-text">Case Study Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8">The case study you're looking for doesn't exist or has been moved.</p>
            <Button asChild size="lg" className="group">
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Link>
            </Button>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  const relatedStudies = caseStudies.filter((cs) => cs.category === caseStudy.category && cs.slug !== slug).slice(0, 2);

  const CategoryIcon = caseStudy.categoryIcon;

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} | Case Study | Injaazh</title>
        <meta name="description" content={caseStudy.overview} />
      </Helmet>

      <Navbar />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main ref={contentRef} className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

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
                <ArrowRight className="w-4 h-4" />
                <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
                <ArrowRight className="w-4 h-4" />
                <span className="text-foreground">Case Study</span>
              </div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${caseStudy.gradient} text-white text-sm font-semibold`}>
                  <CategoryIcon className="w-4 h-4" />
                  {caseStudy.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                {caseStudy.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                {caseStudy.subtitle}
              </motion.p>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Client:</span>
                  <span className="font-medium">{caseStudy.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Industry:</span>
                  <span className="font-medium">{caseStudy.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{caseStudy.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Year:</span>
                  <span className="font-medium">{caseStudy.year}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-secondary/30 border border-border/50"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    Overview
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </motion.div>

                {/* Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    The Challenge
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    Our Solution
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    Our Process
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.process.map((step, index) => (
                      <motion.div
                        key={step.phase}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-6 rounded-2xl bg-secondary/30 border border-border/50"
                      >
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-bold text-lg mb-2 mt-2">{step.phase}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-video rounded-xl overflow-hidden cursor-pointer"
                      >
                        <img src={image} alt={`${caseStudy.title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    Key Results
                  </h2>
                  <div className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-foreground">{result}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.gradient} opacity-10 rounded-3xl blur-xl`} />
                  <div className="relative p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border/50">
                    <Quote className="w-12 h-12 text-primary/30 mb-6" />
                    <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={caseStudy.testimonial.avatar}
                        alt={caseStudy.testimonial.author}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <div className="font-bold">{caseStudy.testimonial.author}</div>
                        <div className="text-muted-foreground text-sm">{caseStudy.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Project Info Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-2xl bg-secondary/30 border border-border/50"
                  >
                    <h3 className="font-bold mb-6 flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                      Project Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Client</p>
                        <p className="font-medium">{caseStudy.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Industry</p>
                        <p className="font-medium">{caseStudy.industry}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="font-medium">{caseStudy.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Year</p>
                        <p className="font-medium">{caseStudy.year}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 rounded-2xl bg-secondary/30 border border-border/50"
                  >
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Services */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="p-6 rounded-2xl bg-secondary/30 border border-border/50"
                  >
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                      Services Provided
                    </h3>
                    <div className="space-y-2">
                      {caseStudy.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative p-6 rounded-2xl overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-10`} />
                    <div className="relative">
                      <Sparkles className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold mb-2">Start Your Project</h3>
                      <p className="text-sm text-muted-foreground mb-4">Ready to create something amazing together?</p>
                      <Button asChild className="w-full">
                        <Link to="/contact">
                          Get in Touch
                          <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              {prevStudy ? (
                <Link
                  to={`/case-study/${prevStudy.slug}`}
                  className="group flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">Previous</p>
                    <p className="font-medium">{prevStudy.title}</p>
                  </div>
                </Link>
              ) : <div />}
              
              {nextStudy && (
                <Link
                  to={`/case-study/${nextStudy.slug}`}
                  className="group flex items-center gap-4 hover:text-primary transition-colors text-right"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">Next</p>
                    <p className="font-medium">{nextStudy.title}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
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
                  More Projects
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">Related Case Studies</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/case-study/${study.slug}`}
                      className="group block h-full"
                    >
                      <div className="relative h-full rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/50 transition-all duration-500">
                        <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={study.thumbnail}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-xs font-semibold`}>
                              {study.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {study.subtitle}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                            View Case Study
                            <ArrowUpRight className="w-4 h-4" />
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
                  <Link to="/portfolio">
                    View All Projects
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Let's Create Together
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Start Your
                <span className="gradient-text"> Success Story</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how we can help transform your business with innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">
                    View More Work
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

export default CaseStudy;
