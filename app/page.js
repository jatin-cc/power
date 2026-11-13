import HeroSection from '@/components/home/HeroSection';
import TrustedBy from '@/components/home/TrustedBy';
import VisionMissionSection from '@/components/home/VisionMissionSection';
import AboutUsSection from '@/components/home/AboutUsSection';
import GraphSection from '@/components/home/GraphSection';
import ProductsAndServicesSection from '@/components/home/ProductsAndServicesSection';
import HomeCTA from '@/components/home/HomeCTA';
import MeetOurTeam from '@/components/home/MeetOurTeam';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import IndustriesSelector from '@/components/home/IndustriesSelector';
import BlogSection from '@/components/home/BlogSection';
import EventsSection from '@/components/home/EventsSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata = {
  title: 'G Sons Power Transformers Pvt. Ltd. | Distribution Transformers & Compact Substations',
  description: 'Specializing in Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), VPI Dry Type Transformers, and Compact Substations up to 5 MVA in 11 kV & 33 kV voltage classes.',
};

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#0f172a]">
      {/* Section 2: Hero Banner */}
      <HeroSection />

      {/* Section 3: Infinite Loop (Trusted By - Left to Right) */}
      <TrustedBy />

      {/* Section 4: Our Vision & Mission */}
      <VisionMissionSection />

      {/* Section 5: About Us */}
      <AboutUsSection />

      {/* Section 6: Graph Section */}
      <GraphSection />

      {/* Section 7: Product Section & Service Section */}
      <ProductsAndServicesSection />

      {/* Section 8: CTA Banner (Merging Sustainability With High Voltage Expertise) */}
      <HomeCTA />

      {/* Section 9: Meet Our Team (Founder Focus & Corner Button) */}
      <MeetOurTeam />

      {/* Section 10: Reviews (Client Endorsements) */}
      <TestimonialSlider />

      {/* Section 11: Industries Empower (Pill Capsules) */}
      <IndustriesSelector />

      {/* Section 12: Blog (What's Trending - 3 in 1 line + View More) */}
      <BlogSection />

      {/* Section 13: Events & Industry Interactions */}
      <EventsSection />

      {/* Section 14: Frequently Asked Questions (In Last) */}
      <FAQSection />
    </main>
  );
}
