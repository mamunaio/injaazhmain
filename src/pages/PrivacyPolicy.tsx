import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Shield,
    Lock,
    Eye,
    FileText,
    ArrowLeft,
    CheckCircle,
    Mail,
    Server,
    Cookie,
    Globe,
    ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const lastUpdated = "December 29, 2025";

const sections = [
    {
        icon: Eye,
        title: "1. Information We Collect",
        content: (
            <div className="space-y-4">
                <p>
                    We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, request a quote, or communicate with us directly. This may include:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Name and contact information",
                        "Company details and job title",
                        "Project requirements and budget",
                        "Billing and payment information",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/20 p-3 rounded-lg border border-border/50">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                    We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and operating system.
                </p>
            </div>
        ),
    },
    {
        icon: Server,
        title: "2. How We Use Your Information",
        content: (
            <div className="space-y-4">
                <p>
                    We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <div className="space-y-3">
                    {[
                        "Processing your transactions and managing your orders",
                        "Sending you technical notices, updates, and support messages",
                        "Responding to your comments, questions, and requests",
                        "Developing new products, services, features, and functionality",
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <p className="text-muted-foreground">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        icon: Cookie,
        title: "3. Cookies & Tracking Technologies",
        content: (
            <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
        ),
    },
    {
        icon: Lock,
        title: "4. Data Security",
        content: (
            <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We implement industry-standard encryption and security protocols to safeguard your information.
            </p>
        ),
    },
    {
        icon: Globe,
        title: "5. Third-Party Services",
        content: (
            <p>
                We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
        ),
    },
];

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Injaazh Pvt. Ltd.</title>
                <meta
                    name="description"
                    content="Read our Privacy Policy to understand how Injaazh Pvt. Ltd. collects, uses, and protects your personal information."
                />
            </Helmet>

            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    {/* Animated Background - Matching Contact Page */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }} />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                                <Shield className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Trust & Transparency</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Privacy <span className="gradient-text">Policy</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                We are committed to protecting your privacy and ensuring your data is handled with care and transparency.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <FileText className="w-4 h-4" />
                                <span>Last Updated: {lastUpdated}</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-6 max-w-4xl">
                        {/* Introduction Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-secondary/30 border border-border/50 backdrop-blur-sm mb-12"
                        >
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At Injaazh Pvt. Ltd. ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </motion.div>

                        {/* Policy Sections */}
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative p-6 md:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                                <section.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                                                <div className="text-muted-foreground leading-relaxed">
                                                    {section.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact for Privacy Concerns */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 border border-primary/10 text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Have Privacy Questions?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact our Data Protection Officer.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button size="lg" className="group" asChild>
                                    <Link to="/contact">
                                        Contact Support
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/">
                                        <ArrowLeft className="mr-2 w-4 h-4" />
                                        Back to Home
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

export default PrivacyPolicy;