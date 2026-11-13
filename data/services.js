// G Sons Power Transformers - Centralized Services Data Store
// Backed directly by Prototype Of Gson .pdf (Pages 9 & 10)
// Total: 7 Service Categories

export const services = [
  {
    id: "turnkey-electrical-projects",
    slug: "turnkey-electrical-projects",
    name: "Turnkey Electrical Projects",
    title: "Turnkey Electrical Projects",
    shortDesc: "Design, Supply, installation, Testing and commissioning of electrical power distribution systems.",
    fullDesc: "Complete end-to-end turnkey engineering solutions encompassing project design, equipment procurement, supply, site installation, exhaustive pre-commissioning testing, and final energization of industrial and commercial electrical power distribution systems.",
    icon: "Boxes",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Conceptual system design & load calculations",
      "Supply of high & low voltage equipment",
      "On-site installation and cabling infrastructure",
      "Testing, relay coordination, and commissioning"
    ],
    process: [
      { step: "01", title: "Site Specification & SLD Design", desc: "Evaluating load profiles, short-circuit levels, statutory clearances, and single-line diagrams." },
      { step: "02", title: "Direct OEM Equipment Supply", desc: "Direct delivery of G Sons transformers, compact substations (CSS), and HT/LT switchboards." },
      { step: "03", title: "Site Erection & Cable Laying", desc: "Equipment placement, foundation anchoring, high-voltage bus ducts, and trench cabling." },
      { step: "04", title: "Pre-Commissioning & Energization", desc: "Comprehensive dielectric testing, protection relay secondary injection, and grid synchronization." }
    ],
    benefits: [
      "Single-point turnkey accountability from factory to site",
      "Elimination of contractor coordination delays and mismatches",
      "Strict compliance with IS 1180, IS 2026, and Central Electricity Authority norms",
      "Complete statutory CEIG approval assistance and handover documentation"
    ]
  },
  {
    id: "ht-lt-substation-installation",
    slug: "ht-lt-substation-installation",
    name: "HT/LT Substation Installation and Integration",
    title: "HT/LT Substation Installation and Integration",
    shortDesc: "Integration of transformers, Compact substations, HT Panels and LT Distribution Systems.",
    fullDesc: "Full-spectrum integration and installation services for high-tension and low-tension substations. We seamlessly unite power & distribution transformers, compact substations (CSS), indoor/outdoor HT switchgear panels, and main LT distribution networks.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Transformer foundation positioning and alignment",
      "Compact substation (CSS) plug-and-play assembly",
      "HT/LT breaker integration and synchronization",
      "Statutory electrical inspectorate compliance support"
    ],
    process: [
      { step: "01", title: "Foundation & Plinth Survey", desc: "Verifying civil foundations, oil soak pits, earthing grid connections, and cable trench levels." },
      { step: "02", title: "Substation Equipment Positioning", desc: "Controlled rigging and vibration-damped placement of transformers and switchgear kiosks." },
      { step: "03", title: "High-Current Interconnections", desc: "Rigid and flexible bus connections, HT terminations, and secondary control wiring." },
      { step: "04", title: "Integration Testing & Energization", desc: "Interlock checks, vacuum breaker timing tests, and coordinated feeder energization." }
    ],
    benefits: [
      "Seamless mechanical and electrical interfacing between HT, X'mer, and LT sections",
      "Dramatically reduced turnaround time compared to traditional brick-and-mortar yards",
      "Engineered earthing with verified step and touch potential safety",
      "Direct OEM warranty protection covering the entire integrated substation assembly"
    ]
  },
  {
    id: "electrical-panel-installation-commissioning",
    slug: "electrical-panel-installation-commissioning",
    name: "Electrical Panel Installation & Commissioning",
    title: "Electrical Panel Installation & Commissioning",
    shortDesc: "Site Installation, Interconnection, Testing and Commissioning of power Distribution and Control Panels.",
    fullDesc: "Precision field deployment for PCC, MCC, APFC, and automation control panels. We ensure verified busbar torqueing, wire termination, control circuit checking, breaker timing tests, and live commissioning with minimum plant downtime.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Panel base frame installation and leveling",
      "Internal interconnections and control wiring check",
      "Insulation resistance and high-potential dielectric testing",
      "Protection relay setting and live load test"
    ],
    process: [
      { step: "01", title: "Base Frame Alignment & Bolting", desc: "Positioning multi-tier panel suites, leveling base channels, and bolting shipping splits." },
      { step: "02", title: "Busbar Torque & Insulation Verification", desc: "Checking busbar joint torque with calibrated tools and installing heat-shrink insulation boots." },
      { step: "03", title: "Secondary Injection & Scheme Check", desc: "Injecting test currents into CTs/PTs, testing numerical relays, and verifying interlock logic." },
      { step: "04", title: "Breaker Timing & Load Commissioning", desc: "Motorized ACB open/close timing checks, phase sequence verification, and live load ramp." }
    ],
    benefits: [
      "Form 4B internal compartmentalization protects operating personnel",
      "Accurate relay coordination prevents nuisance upstream utility tripping",
      "Verified busbar joints prevent dangerous localized overheating under full load",
      "Detailed As-Built schematics and commissioning test reports provided"
    ]
  },
  {
    id: "ht-lt-cabling-cable-management",
    slug: "ht-lt-cabling-cable-management",
    name: "HT/LT Cabling & Cable Management",
    title: "HT/LT Cabling & Cable Management",
    shortDesc: "Cable laying, Termination, Jointing, and Installation of cable trays and supporting structures.",
    fullDesc: "Professional industrial cable engineering including ladder and perforated cable tray fabrication, trench routing, high-voltage heat shrink terminations, straight-through joints, and rigorous insulation resistance verification.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Perforated and ladder cable tray erection",
      "HT/LT power and instrumentation cable laying",
      "Cold shrink and heat shrink kit terminations",
      "Hi-Pot dielectric testing and route identification"
    ],
    process: [
      { step: "01", title: "Cable Route & Tray Sizing", desc: "Engineering ladder tray routes, calculation of cable spacing to prevent thermal derating." },
      { step: "02", title: "Mechanized Cable Pulling", desc: "Tension-monitored pulling using calibrated rollers to preserve dielectric cable sheath." },
      { step: "03", title: "Certified End Termination", desc: "Heat-shrink and cold-shrink termination kits applied by certified high-voltage jointers." },
      { step: "04", title: "VLF & Insulation Resistance Test", desc: "Very Low Frequency (VLF) AC withstand and Megger testing to guarantee zero leaks." }
    ],
    benefits: [
      "Engineered tray structures ensure optimal heat dissipation and neat aesthetic runs",
      "Zero sheath damage during pulling guarantees long cable dielectric lifespan",
      "Moisture-proof stress-controlled terminations eliminate flashover risks",
      "Durable stainless steel / engraved ferrules and tags for hassle-free tracing"
    ]
  },
  {
    id: "industrial-automation-control-systems",
    slug: "industrial-automation-control-systems",
    name: "Industrial Automation & Control Systems",
    title: "Industrial Automation & Control Systems",
    shortDesc: "PLC and SCADA system integration for industrial processes, water treatment, ventilation and utility applications.",
    fullDesc: "Smart factory automation engineering integrating modern PLCs, HMIs, and SCADA monitoring architectures. Designed for continuous industrial processes, municipal water treatment facilities, tunnel ventilation, and electrical sub-station supervisory networks.",
    icon: "Sliders",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "PLC logic programming and HMI graphical mimic design",
      "SCADA central supervisory room integration",
      "Energy management system (EMS) instrumentation",
      "Industrial Ethernet, Modbus, and Profinet networks"
    ],
    process: [
      { step: "01", title: "Process Architecture & I/O Mapping", desc: "Defining process control philosophies, instrumentation signals, and safety interlocks." },
      { step: "02", title: "PLC Programming & SCADA Mimic", desc: "Developing fail-safe logic, graphical HMI operator screens, and trend logging." },
      { step: "03", title: "Factory Simulation & FAT", desc: "Simulating plant I/O loops and emergency shutdown sequences in controlled factory bay." },
      { step: "04", title: "Site Commissioning & Operator Training", desc: "Live tuning of PID loops, network diagnostics, and plant personnel operation training." }
    ],
    benefits: [
      "Real-time monitoring of transformer loading, temperature rise, and power quality",
      "Automated alarm notifications prevent equipment breakdown and reduce downtime",
      "Industry 4.0 connectivity via Modbus, Profinet, IEC 61850, and Cloud gateways",
      "Optimized energy consumption curves lowering overall utility bills"
    ]
  },
  {
    id: "bus-duct-installation",
    slug: "bus-duct-installation",
    name: "Bus Duct Installation",
    title: "Bus Duct Installation",
    shortDesc: "Installation and Interconnection of bus Ducts between Transformers, panels and Distribution Equipment.",
    fullDesc: "High-current Sandwich and Air-Insulated Bus Duct routing, structural hanging, flexible link connection, and thermal imaging verification between transformers, generator sets, and low-voltage switchboards.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "3D route planning and hanger installation",
      "Bus trunking alignment and torque-shear bolt assembly",
      "Transformer and switchgear flexible copper terminations",
      "Millivolt drop testing and thermal imaging audit"
    ],
    process: [
      { step: "01", title: "3D Pathway Alignment Survey", desc: "Coordinating hanger locations with civil ceiling beams and HVAC ducts to optimize trunking path." },
      { step: "02", title: "Section Hoisting & Bolt Jointing", desc: "Lifting bus trunking sections and tightening torque-indicating double-headed bolts." },
      { step: "03", title: "Flexible Transformer Termination", desc: "Installing high-conductivity flexible braided copper jumpers to isolate transformer vibration." },
      { step: "04", title: "Dielectric Hi-Pot & Drop Test", desc: "High voltage AC withstand test and micro-ohm contact resistance verification." }
    ],
    benefits: [
      "High power carrying capability up to 6300A with minimal footprint",
      "Far lower voltage drop and heat generation than congested multiple parallel cables",
      "Sandwich epoxy insulation with high short-circuit electromagnetic withstand",
      "Certified IP55/IP68 weather resistance for outdoor transformer-to-panel runs"
    ]
  },
  {
    id: "transformer-repair-overhauling-oil-filtration",
    slug: "transformer-repair-overhauling-oil-filtration",
    name: "Transformer Repair, Overhauling & Oil Filtration",
    title: "Transformer Repair, Overhauling & Oil Filtration",
    shortDesc: "Transformer Inspection, Fault Diagnosis, Repairs and Overhauling, along with transformer oil filtration, Dehydration and Testing.",
    fullDesc: "Life extension and turnaround services for power and distribution transformers. Includes thorough fault diagnosis, active part inspection, gasket and valve replacements, high-vacuum two-stage oil filtration, dehydration, and laboratory BDV/DGA testing.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "On-site transformer condition assessment and DGA diagnostics",
      "High-vacuum two-stage dehydration and oil filtration",
      "Core-coil assembly inspection and re-tightening",
      "Bushing replacement, leak rectification, and paint overhaul"
    ],
    process: [
      { step: "01", title: "Diagnostic DGA & Oil Sampling", desc: "Evaluating Breakdown Voltage (BDV), moisture (PPM), acidity, and dissolved fault gas ratios." },
      { step: "02", title: "Active Part Inspection & Tightening", desc: "Untanking (if needed), inspecting winding insulation paper, and re-torquing core clamping." },
      { step: "03", title: "High-Vacuum Two-Stage Filtration", desc: "Circulating insulating oil through heated high-vacuum chambers to remove water and gas." },
      { step: "04", title: "Final Proof Testing & NABL Report", desc: "Post-filtration dielectric BDV testing (>60 kV), turns ratio check, and official test certificate." }
    ],
    benefits: [
      "Restores oil dielectric strength and extends transformer operational lifespan by 10-15 years",
      "Prevents internal winding flashovers and catastrophic substation explosions",
      "Mobile filtration plants allow rapid on-site servicing without costly transport",
      "Official NABL-accredited test reports provided for insurance and safety compliance"
    ]
  }
];
