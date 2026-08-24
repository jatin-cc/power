export const services = [
  {
    id: "repair-refurbishment",
    slug: "repair-refurbishment",
    name: "Repair & Refurbishment",
    icon: "Wrench",
    shortDesc: "Complete factory overhaul, winding replacement, core restacking, and modernization extending asset lifecycle by up to 25 years.",
    fullDesc: "Rather than costly asset replacement, Vortex offers OEM-grade transformer refurbishment. Our factory refurbishing process re-engineers insulation, replaces aged windings, remanufactures tank enclosures, and restores your transformer to like-new operational efficiency with comprehensive warranty coverage.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Comprehensive De-commissioning & Inspection", desc: "Detailed teardown, core isolation, and structural degradation assessment." },
      { step: "02", title: "Thermodynamic Winding Re-Engineering", desc: "Design upgrade using thermal-grade copper and state-of-the-art cellulose insulation." },
      { step: "03", title: "Vapor Phase Drying (VPD)", desc: "Deep vacuum moisture extraction restoring cellulose moisture level below 0.5%." },
      { step: "04", title: "Tank Shot-Blasting & C5-M Coating", desc: "Corrosion treatment and high-durability epoxy coating applied." },
      { step: "05", title: "Full Dielectric & High Voltage Testing", desc: "Full routine, type, and short-circuit verification matching factory baseline standards." }
    ],
    benefits: [
      "Extends operational lifespan by 20 to 25 years",
      "Saves up to 60% compared to purchasing new replacement units",
      "Upgrades electrical loss parameters to modern efficiency standards",
      "Includes complete OEM warranty and service SLA"
    ]
  },
  {
    id: "diagnostics-testing",
    slug: "diagnostics-testing",
    name: "Advanced Diagnostics & Testing",
    icon: "Activity",
    shortDesc: "Non-destructive condition assessment, Sweep Frequency Response Analysis (SFRA), Partial Discharge (PD) locating, and DGA testing.",
    fullDesc: "Predictive maintenance prevents catastrophic field failure. Vortex specialized diagnostic engineers deploy field-portable high-precision test beds to measure winding deformation, insulation aging, partial discharge activity, and moisture ingress before faults disrupt grid operations.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Sweep Frequency Response Analysis (SFRA)", desc: "Detects winding movement, mechanical displacement, and core clamping loss." },
      { step: "02", title: "UHF Acoustic Partial Discharge Locating", desc: "Pinpoints insulation voids and internal arcing sources in real time." },
      { step: "03", title: "Tan Delta & Capacitance Measurement", desc: "Evaluates bushing insulation integrity and winding power factor." },
      { step: "04", title: "Frequency Domain Spectroscopy (FDS)", desc: "Determines absolute moisture percentage inside cellulose insulation structures." }
    ],
    benefits: [
      "Eliminates unplanned sub-station outages",
      "Pinpoints exact sub-component degradation non-destructively",
      "Provides actionable remnant life assessment reports",
      "Meets IEEE C57.152 and IEC 60076-18 compliance standards"
    ]
  },
  {
    id: "oil-analysis-reconditioning",
    slug: "oil-analysis-reconditioning",
    name: "Oil Analysis & Fluid Reconditioning",
    icon: "Droplets",
    shortDesc: "Dissolved Gas Analysis (DGA), online high-vacuum oil degasification, moisture removal, and natural ester fluid retrofilling.",
    fullDesc: "Transformer insulating oil is the liquid blood of the transformer. Our state-of-the-art NABL-accredited chemistry laboratory performs full ASTM / IEC transformer oil testing, while our mobile oil processing rigs deliver 12,000 LPH online degasification and moisture removal in the field.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Dissolved Gas Analysis (DGA) via GC", desc: "Identifies thermal faults, partial discharges, and key gas breakdown ratios." },
      { step: "02", title: "Mobile Online Degasification & Dehydration", desc: "Vacuum processing rigs remove dissolved water, air, and particulate sludge." },
      { step: "03", title: "Full Oil Re-refining & Fuller Earth Reclamation", desc: "Restores neutralisation value, interfacial tension, and breakdown voltage (BDV > 70 kV)." },
      { step: "04", title: "Ester Fluid Retrofilling", desc: "Replaces mineral oil with high-flashpoint biodegradable ester fluid for fire safety." }
    ],
    benefits: [
      "Restores oil breakdown voltage (BDV) to > 75 kV",
      "Substantially improves internal heat dissipation rate",
      "Ester fluid retrofilling raises fire point to > 300°C",
      "Environmentally safe fluid reclamation process"
    ]
  },
  {
    id: "online-monitoring-iot",
    slug: "online-monitoring-iot",
    name: "Online Monitoring & IoT Systems",
    icon: "Cpu",
    shortDesc: "Continuous 24/7 online multi-gas DGA monitors, Bushing Monitoring Systems (BMS), and cloud SCADA predictive maintenance suites.",
    fullDesc: "Transform static infrastructure into intelligent digital assets. Vortex IoT Monitoring Suite integrates fiber-optic winding sensors, online DGA monitors, bushing sensors, and environmental telemetry into a centralized cloud predictive analytics platform.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Multi-Gas DGA Sensor Integration", desc: "Continuous photo-acoustic spectroscope tracking Hydrogen, Methane, Acetylene, and CO." },
      { step: "02", title: "Bushing Power Factor & Leakage Current Sensor Array", desc: "Real-time tracking of C1/C2 bushing insulation health." },
      { step: "03", title: "Fiber Optic Direct Hotspot Temperature System", desc: "Measures internal conductor temperature directly at high-stress winding points." },
      { step: "04", title: "Vortex Intelligence Cloud Dashboard", desc: "AI-driven predictive algorithms calculate real-time asset Health Index (HI)." }
    ],
    benefits: [
      "Real-time early warning notifications via SMS, Email, and SCADA",
      "Eliminates manual periodic sub-station sampling trips",
      "AI-driven Remaining Useful Life (RUL) forecasting",
      "Seamless integration with IEC 61850 substation automation"
    ]
  },
  {
    id: "field-services-commissioning",
    slug: "field-services-commissioning",
    name: "Field Services & Commissioning",
    icon: "ShieldCheck",
    shortDesc: "Turnkey sub-station installation, heavy-lift positioning, site assembly, oil filling, testing, and energization management.",
    fullDesc: "From factory shipping dock to live sub-station energization, our mobile field engineering teams manage site logistics, specialized crane positioning, heavy tank vacuum filling, site pre-commissioning testing, and grid synchronization.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Superload Logistics & Heavy Transport", desc: "Specialized hydraulic multi-axle trailers move up to 300-ton tanks safely." },
      { step: "02", title: "On-Site Mechanical Assembly", desc: "Mounting bushings, radiators, conservator tanks, and OLTC mechanisms." },
      { step: "03", title: "High-Vacuum Tank Evacuation & Oil Filling", desc: "Deep vacuum holding under 1 Torr followed by treated oil injection." },
      { step: "04", title: "Pre-Energization Final Verification", desc: "Ratio, polarity, vector group, insulation resistance, and protection trip tests." }
    ],
    benefits: [
      "Rapid response mobile field crews available 24/7",
      "Experienced certified high-voltage commissioning engineers",
      "Full compliance with international safety and grid connection codes",
      "Turnkey warranty coverage from transport to energization"
    ]
  }
];
