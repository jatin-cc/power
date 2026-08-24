import EventsSection from '@/components/home/EventsSection';

export const metadata = {
  title: 'Global Trade Shows & Events | Vortex Power Systems',
  description: 'Meet Vortex high-voltage transformer engineers at international IEEE PES, CIGRE, and Hannover Messe symposiums.',
};

export default function EventsPage() {
  return (
    <main className="pt-20 bg-white">
      <EventsSection />
    </main>
  );
}
