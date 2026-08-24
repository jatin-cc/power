export const metadata = {
  title: 'Privacy Policy & Terms | Vortex Power Systems',
  description: 'Legal privacy notice, corporate data security, and cookies policy for Vortex Power Systems Corp.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <article className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Privacy Policy & Legal Terms
        </h1>

        <p className="text-xs text-slate-500 font-mono">
          LAST UPDATED: AUGUST 2026 | VORTEX POWER SYSTEMS CORP
        </p>

        <div className="prose prose-slate text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0f172a]">1. Data Collection & Engineering Quotes</h2>
            <p>
              Vortex Power Systems Corp collects personal and corporate information (including full name, corporate email address, utility organization, phone number, and technical specifications) solely for the purpose of generating technical proposals, transformer specifications, and field diagnostic estimates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0f172a]">2. Data Protection & Security</h2>
            <p>
              We maintain strict administrative, physical, and technical safeguards complying with ISO 27001 data security guidelines. Substation telemetry and client specifications are stored in encrypted cloud environments and are never sold or shared with third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0f172a]">3. Contact & Compliance Officer</h2>
            <p>
              For inquiries regarding data privacy or to request data removal under GDPR/CCPA regulations, please email our legal compliance office at <strong>legal@vortexpowersystems.com</strong>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
