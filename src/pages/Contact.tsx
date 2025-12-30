import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  MessageSquare,
  Globe,
  Calendar,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Sparkles,
  ArrowUpRight,
  Zap,
  Users,
  Heart,
  Building,
  Headphones,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  company: z.string().max(100, "Company name is too long").optional(),
  phone: z.string().max(20, "Phone number is too long").optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@injaazh.com",
    description: "We'll respond within 24 hours",
    action: "mailto:hello@injaazh.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+8801715-974542",
    description: "Mon-Fri, 9AM-6PM EST",
    action: "tel:+8801715-974542",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Start a conversation",
    description: "Available during business hours",
    action: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Book a Call",
    value: "Schedule a meeting",
    description: "Free 30-min consultation",
    action: "#",
    gradient: "from-orange-500 to-red-500",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/injaazh", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  { icon: Twitter, href: "https://x.com/injaazh", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
  { icon: Facebook, href: "https://www.facebook.com/injaazh", label: "Facebook", color: "hover:bg-[#1877F2]" },
  { icon: Instagram, href: "https://www.instagram.com/injaazh/", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
];

const stats = [
  { icon: Users, value: "700+", label: "Clients Served" },
  { icon: Zap, value: "24h", label: "Response Time" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
  { icon: Globe, value: "15+", label: "Countries" },
];

const faqs = [
  {
    question: "What's your typical response time?",
    answer: "We respond to all inquiries within 24 hours during business days. Urgent requests are prioritized.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free 30-minute consultation to discuss your project needs and explore possibilities.",
  },
  {
    question: "What information should I include?",
    answer: "Tell us about your project goals, timeline, budget range, and any specific requirements you have.",
  },
  {
    question: "Can you work with international clients?",
    answer: "Absolutely! We work with clients worldwide and accommodate different time zones.",
  },
];

const services = [
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "design", label: "UI/UX Design" },
  { value: "branding", label: "Branding & Identity" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "seo", label: "SEO Services" },
  { value: "other", label: "Other" },
];

const budgets = [
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" },
];

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [activeService, setActiveService] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully! 🎉",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
    setActiveService("");
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceClick = (value: string) => {
    setActiveService(value);
    setFormData({ ...formData, service: value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Injaazh Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Injaazh Pvt. Ltd. Let's discuss your digital transformation project and how we can help your business grow."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Let's Create Something Amazing</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  Start Your
                  <span className="block gradient-text">Digital Journey</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground mb-8 max-w-lg"
                >
                  Ready to transform your ideas into reality? Let's discuss your project and discover how we can help you achieve extraordinary results.
                </motion.p>

                {/* Stats Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm"
                    >
                      <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right - Contact Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{method.title}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>

                    {/* Arrow */}
                    <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Main Contact Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Headphones className="w-4 h-4" />
                    We're Here to Help
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    We'd Love to Hear
                    <span className="gradient-text"> From You</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Have a project in mind? Want to learn more about our services? Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                {/* Office Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                        <Building className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold">Our Headquarters</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground text-sm">
                            123 Business District, Suite 456<br />
                            Tech City, TC 12345
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-muted-foreground text-sm">
                            Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                            Weekend: By appointment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* FAQs */}
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                    Frequently Asked
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        <p className="font-medium text-sm mb-1">{faq.question}</p>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-bold mb-4">Connect With Us</h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-white ${social.color} transition-all duration-300`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="relative">
                  {/* Animated border glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-sm" />
                  
                  <div className="relative p-8 md:p-10 rounded-3xl bg-background border border-border/50">
                    {/* Form Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Send Us a Message</h2>
                        <p className="text-muted-foreground text-sm">Fill out the form and we'll be in touch soon</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`h-12 bg-secondary/30 border-border/50 focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                          />
                          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`h-12 bg-secondary/30 border-border/50 focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                          />
                          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Company & Phone */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="h-12 bg-secondary/30 border-border/50 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="h-12 bg-secondary/30 border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>

                      {/* Service Selection - Interactive Pills */}
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Service Interested In
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {services.map((service) => (
                            <button
                              key={service.value}
                              type="button"
                              onClick={() => handleServiceClick(service.value)}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeService === service.value
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                              }`}
                            >
                              {service.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget) => (
                            <option key={budget.value} value={budget.value}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Project Details <span className="text-primary">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          className={`bg-secondary/30 border-border/50 focus:border-primary resize-none ${errors.message ? "border-destructive" : ""}`}
                        />
                        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                        <p className="text-xs text-muted-foreground mt-2">{formData.message.length}/1000 characters</p>
                      </div>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-4 py-4 px-4 rounded-xl bg-primary/5 border border-primary/10">
                        {[
                          { icon: Sparkles, text: "Free consultation" },
                          { icon: Clock, text: "24h response time" },
                          { icon: CheckCircle, text: "No commitment" },
                        ].map((benefit) => (
                          <div key={benefit.text} className="flex items-center gap-2 text-sm">
                            <benefit.icon className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{benefit.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg group relative overflow-hidden"
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                              />
                              Sending Your Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Our <span className="gradient-text">Office</span>
              </h2>
              <p className="text-muted-foreground">
                We're always happy to meet in person. Drop by our office for a coffee and a chat about your project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-sm" />
              <div className="relative rounded-3xl overflow-hidden bg-background border border-border/50">
                <div className="aspect-[21/9] bg-secondary/30 flex items-center justify-center relative">
                  {/* Stylized Map Placeholder */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                  
                  <div className="relative text-center p-8">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center"
                    >
                      <MapPin className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">Injaazh Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Business District, Suite 456<br />
                      Tech City, TC 12345
                    </p>
                    <Button className="mt-6 group" variant="outline">
                      Get Directions
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Ready to Start?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Build Something
                <span className="gradient-text"> Extraordinary</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Your next big idea deserves the best execution. Partner with us and let's create digital experiences that inspire, engage, and convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group text-lg h-14 px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg h-14 px-8" asChild>
                  <a href="#services">
                    Explore Our Services
                  </a>
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

export default Contact;
