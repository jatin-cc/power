import HeroSection from '@/components/home/HeroSection';
import CompanyIntro from '@/components/home/CompanyIntro';
import StatisticsSection from '@/components/home/StatisticsSection';
import GlobalPresence from '@/components/home/GlobalPresence';
import ProductScroller from '@/components/home/ProductScroller';
import ServicesInteractive from '@/components/home/ServicesInteractive';
import InfrastructureStory from '@/components/home/InfrastructureStory';
import ManufacturingProcess from '@/components/home/ManufacturingProcess';
import EngineeringVisual from '@/components/home/EngineeringVisual';
import IndustriesSelector from '@/components/home/IndustriesSelector';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import EventsSection from '@/components/home/EventsSection';
import FAQSection from '@/components/home/FAQSection';
import BlogSection from '@/components/home/BlogSection';

export const metadata = {
  title: 'Vortex Power Systems | Ultra-High-Voltage Power Transformers & Grid Solutions',
  description: 'Global leader in ultra-high-voltage power transformers up to 500 MVA 400 kV, custom arc furnace transformers, ester fluid eco-designs, and 24/7 predictive diagnostics.',
};

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#0f172a]">
      {/* 01 Hero */}
      <HeroSection />

      {/* 02 Company Introduction */}
      <CompanyIntro />

      {/* 03 Statistics Count-Up */}
      <StatisticsSection />

      {/* 04 Global Presence / Locations */}
      <GlobalPresence />

      {/* 05 Products Pinned Horizontal Scroller */}
      <ProductScroller />

      {/* 06 Interactive Services */}
      <ServicesInteractive />

      {/* 07 Infrastructure Story */}
      <InfrastructureStory />

      {/* 08 Scroll-Driven Manufacturing Process Story */}
      <ManufacturingProcess />

      {/* 09 Engineering R&D Blueprint Line Visual */}
      <EngineeringVisual />

      {/* 10 Industries Application Selector */}
      <IndustriesSelector />

      {/* 11 Why Choose Us Story */}
      <WhyChooseUs />

      {/* 12 Case Studies Showcase */}
      <CaseStudiesSection />

      {/* 13 Testimonials GSAP Slider */}
      <TestimonialSlider />

      {/* 14 Events & News */}
      <EventsSection />

      {/* 15 Technical FAQ Accordion */}
      <FAQSection />

      {/* 16 Blog Editorial Knowledge Hub */}
      <BlogSection />
    </main>
  );
}
