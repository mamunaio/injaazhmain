import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FileText,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Scale,
    ShieldAlert,
    Copyright,
    CreditCard,
    Ban,
    Gavel,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const lastUpdated = "December 29, 2025";

const sections = [
    {
        icon: CheckCircle,
        title: "1. Acceptance of Terms",
        content: (
            <p>
                By accessing or using the website and services of Injaazh Pvt. Ltd. ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services. These terms apply to all visitors, users, and others who access or use the Service.
            </p>
        ),
    },
    {
        icon: FileText,
        title: "2. Services Provided",
        content: (
            <div className="space-y-4">
                <p>
                    Injaazh Pvt. Ltd. provides digital solutions including but not limited to:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Web & Mobile Development",
                        "UI/UX Design Services",
                        "Digital Marketing & SEO",
                        "Branding & Strategy",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/20 p-3 rounded-lg border border-border/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                </p>
            </div>
        ),
    },
    {
        icon: Copyright,
        title: "3. Intellectual Property",
        content: (
            <p>
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Injaazh Pvt. Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Injaazh.
            </p>
        ),
    },
    {
        icon: CreditCard,
        title: "4. Payment Terms",
        content: (
            <p>
                For paid services, you agree to provide current, complete, and accurate purchase and account information. All fees are non-refundable unless otherwise stated in a specific service agreement. We reserve the right to change our prices at any time, but price changes will not affect active contracts without prior notice.
            </p>
        ),
    },
    {
        icon: Ban,
        title: "5. Prohibited Uses",
        content: (
            <div className="space-y-3">
                <p>You agree not to use the Service:</p>
                {[
                    "In any way that violates any applicable national or international law.",
                    "To transmit any advertising or promotional material (spam).",
                    "To impersonate the Company, a Company employee, or any other person.",
                    "To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.",
                ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                        <ShieldAlert className="w-4 h-4 text-destructive mt-1 shrink-0" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: ShieldAlert,
        title: "6. Limitation of Liability",
        content: (
            <p>
                In no event shall Injaazh Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
        ),
    },
];

const TermsOfService = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Injaazh Pvt. Ltd.</title>
                <meta
                    name="description"
                    content="Read the Terms of Service for Injaazh Pvt. Ltd. to understand the rules and regulations for using our digital services."
                />
            </Helmet>

            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
                        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
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
                                <Gavel className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Legal Agreement</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Terms of <span className="gradient-text">Service</span>
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Please read these terms carefully before using our services. They outline the rules and regulations for the use of Injaazh's Website.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <Scale className="w-4 h-4" />
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
                            <h2 className="text-2xl font-bold mb-4">Welcome to Injaazh</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Injaazh Pvt. Ltd. if you do not agree to take all of the terms and conditions stated on this page.
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

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 text-center"
                        >
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button size="lg" className="group" asChild>
                                    <Link to="/contact">
                                        Contact Legal Team
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

export default TermsOfService;