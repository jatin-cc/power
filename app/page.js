import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import AboutUsSection from '@/components/home/AboutUsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HomeCTA from '@/components/home/HomeCTA';
import MeetOurTeam from '@/components/home/MeetOurTeam';
import ProductsSection from '@/components/home/ProductsSection';
import IndustriesSelector from '@/components/home/IndustriesSelector';
import EventsSection from '@/components/home/EventsSection';
import FAQSection from '@/components/home/FAQSection';
import BlogSection from '@/components/home/BlogSection';

export const metadata = {
  title: 'G Sons Power Transformers Pvt. Ltd. | Distribution Transformers & Compact Substations',
  description: 'Specializing in Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), VPI Dry Type Transformers, and Compact Substations up to 5 MVA in 11 kV & 33 kV voltage classes.',
};

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#0f172a]">
      {/* 01. Hero Banner */}
      <HeroSection />

      {/* 02. Trusted By (Infinite Logo Loop) */}
      <TrustedBy />

      {/* 03. About Us */}
      <AboutUsSection />

      {/* 04. Why Choose Us */}
      <WhyChooseUs />

      {/* 05. CTA – Call to Action */}
      <HomeCTA />

      {/* 06. Meet Our Team */}
      <MeetOurTeam />

      {/* 07. Our Products */}
      <ProductsSection />

      {/* 08. Industries We Empower With Expertise */}
      <IndustriesSelector />

      {/* 09. Events & Industry Interactions */}
      <EventsSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Blogs / Insights */}
      <BlogSection />
    </main>
  );
}
