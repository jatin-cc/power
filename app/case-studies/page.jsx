import CaseStudiesSection from '@/components/home/CaseStudiesSection';

export const metadata = {
  title: 'Engineering Case Studies | Vortex Power Systems',
  description: 'In-depth turnkey substation deployment success stories for National Power Grids, Offshore Wind Energy, and Heavy Steel Melting Shops.',
};

export default function CaseStudiesIndexPage() {
  return (
    <main className="pt-20 bg-white">
      <CaseStudiesSection />
    </main>
  );
}
