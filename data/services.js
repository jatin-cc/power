export const services = [
  {
    id: "project-specific-custom-engineering",
    slug: "project-specific-custom-engineering",
    name: "Project-Specific Custom Engineering",
    icon: "Wrench",
    shortDesc: "Bespoke electromagnetic design, custom voltage ratios, dual secondary windings, and special IP enclosures up to 5 MVA.",
    fullDesc: "At G Sons Power, every transformer and substation is tailored to exact site conditions. Our engineering team designs custom 11 kV & 33 kV voltage classes, specialized vector groups (Dyn11, Dyn5, etc.), custom impedance levels, and project-specific physical footprints.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Site Specification Analysis", desc: "Evaluating voltage rating, load profile, ambient conditions, and enclosure constraints." },
      { step: "02", title: "CRGO & Copper Optimization", desc: "Calculating core loss and winding copper geometry for maximum ECBC efficiency." },
      { step: "03", title: "GA & SLD Drawing Approval", desc: "Generating General Arrangement (GA) drawings and Single Line Diagrams (SLD) for client signoff." },
      { step: "04", title: "Custom Manufacturing Execution", desc: "Precision winding, vacuum casting, and robust tank fabrication." }
    ],
    benefits: [
      "100% project-specific tailored dimensions",
      "Compliant with IS 2026, IS 1180 & ECBC energy norms",
      "Choice of Oil-Filled or Cast Resin Dry-Type insulation",
      "Full technical support from design to site commissioning"
    ]
  },
  {
    id: "factory-routine-type-testing",
    slug: "factory-routine-type-testing",
    name: "Factory Routine & Type Testing",
    icon: "ShieldCheck",
    shortDesc: "100% factory routine testing before dispatch including ratio, vector group, loss measurements, dielectric withstand, and temperature rise.",
    fullDesc: "Quality assurance is central to G Sons Power manufacturing. Every transformer undergoes comprehensive factory routine testing prior to dispatch. We provide full Routine Test Reports, Type Test Certificates, and Guaranteed Technical Particulars (GTP) matching Indian and international standards.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Winding Resistance & Ratio Testing", desc: "Verifying exact turns ratio, phase balance, and copper resistance baseline." },
      { step: "02", title: "No-Load & Load Loss Verification", desc: "Measuring core excitation losses and load copper losses under rated voltage." },
      { step: "03", title: "Dielectric Applied & Induced Voltage", desc: "High voltage insulation stress verification ensuring dielectric integrity." },
      { step: "04", title: "Type Test Accommodations", desc: "Temperature rise, impulse voltage, partial discharge, and short-circuit testing options." }
    ],
    benefits: [
      "100% factory routine tested before customer dispatch",
      "Official Routine Test Reports & GTP documentation included",
      "BIS licensed and ZED Gold Certified quality assurance",
      "Third-party inspection agency (TPIA) witness support"
    ]
  },
  {
    id: "site-commissioning-technical-support",
    slug: "site-commissioning-technical-support",
    name: "Site Commissioning & Technical Support",
    icon: "Activity",
    shortDesc: "On-site installation guidance, pre-commissioning testing, OLTC setup, and O&M technical support for industrial & utility substations.",
    fullDesc: "G Sons Power engineering support extends from factory dispatch to energization. Our field engineers assist with sub-station positioning, oil filling verification, protection relay setting, pre-commissioning checks, and smooth grid synchronization.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1200&q=80",
    process: [
      { step: "01", title: "Pre-Installation Unloading Inspection", desc: "Verifying tank seal, nitrogen pressure, silica gel breather, and bushings." },
      { step: "02", title: "On-Site Assembly & Fitting", desc: "Positioning conservator tank, radiator banks, OCTC/OLTC controls, and cable boxes." },
      { step: "03", title: "Pre-Energization Checkup", desc: "Insulation resistance (Megger), oil Breakdown Voltage (BDV) test, and vector check." },
      { step: "04", title: "Grid Energization & Handover", desc: "Supervised energization under no-load followed by full load handover." }
    ],
    benefits: [
      "Expert technical guidance from factory engineers",
      "Rapid on-site response and field technical support",
      "Complete Installation and O&M manuals provided",
      "Long-term OEM warranty and spare parts availability"
    ]
  }
];
