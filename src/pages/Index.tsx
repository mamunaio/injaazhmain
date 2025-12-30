import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Injaazh Pvt. Ltd. | Digital Transformation Agency</title>
        <meta
          name="description"
          content="Injaazh is a performance-driven creative agency specializing in digital transformation, web development, mobile apps, branding, and digital marketing for startups and SMEs."
        />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesPreview />
        <PortfolioPreview />
        <TestimonialsSection />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
