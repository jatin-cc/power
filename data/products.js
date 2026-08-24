export const products = [
  {
    id: "power-transformers",
    slug: "power-transformers",
    name: "Power Transformers",
    category: "Transmission & Substation",
    capacity: "Up to 500 MVA, 400 kV Class",
    shortDesc: "Engineered for high-voltage transmission networks, utility grids, and bulk power transfer with ultra-low loss and maximum thermal resilience.",
    fullDesc: "Vortex Power Systems Power Transformers are built for supreme grid stability and heavy-duty step-up/step-down transmission applications. Manufactured using high-permeability grain-oriented silicon steel (CRGO) and high-purity electrolytic copper, each transformer is subjected to strict impulse voltage withstand testing and thermal modeling.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Low loss CRGO core assembly with stepping lap joints",
      "Thermally upgraded kraft paper insulation with high dielectric strength",
      "ONAN, ONAF, OFAF, or ODAF cooling configurations",
      "Dynamic short-circuit strength compliant with IEC 60076",
      "Seated online fiber-optic hot-spot temperature sensors"
    ],
    specs: [
      { label: "Rated Capacity", value: "10 MVA to 500 MVA" },
      { label: "Voltage Class", value: "Up to 400 kV (Custom high-voltage variants available)" },
      { label: "Frequency", value: "50 Hz / 60 Hz" },
      { label: "Cooling Type", value: "ONAN / ONAF / OFAF / ODAF" },
      { label: "Winding Material", value: "High-grade Electrolytic Copper (ETP)" },
      { label: "Impedance Range", value: "7% to 18% (Tailored per system short-circuit rating)" },
      { label: "Insulation Level", value: "LI 1425 kV / AC 630 kV" },
      { label: "Tap Changer", value: "On-Load Tap Changer (OLTC) / Off-Circuit Tap Changer (OCTC)" }
    ],
    applications: [
      "National Power Transmission Networks",
      "Thermal & Hydroelectric Power Generating Stations",
      "Inter-regional Substation Hubs",
      "Heavy Industrial Power Receiving Stations"
    ]
  },
  {
    id: "distribution-transformers",
    slug: "distribution-transformers",
    name: "Distribution Transformers",
    category: "Primary & Secondary Distribution",
    capacity: "100 kVA to 10,000 kVA, 33 kV Class",
    shortDesc: "High-efficiency liquid-immersed and dry-type distribution transformers designed for continuous city grid and industrial power delivery.",
    fullDesc: "Designed to meet stringently low total cost of ownership (TCO) and high energy efficiency norms (Energy Star / Eco-Design Tier 2), our Distribution Transformers serve municipal, commercial, and industrial distribution lines with zero downtime reliability.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hermetically sealed or conservator tank construction",
      "Biodegradable synthetic or natural ester fluid options",
      "Cast Resin Dry Type (CRT) variant for indoor high-fire-safety zones",
      "Corrosion-resistant C5-M marine grade protective coating",
      "Low sound emission design with sound damping dampers"
    ],
    specs: [
      { label: "Rated Capacity", value: "100 kVA to 10 MVA" },
      { label: "Primary Voltage", value: "11 kV, 22 kV, 33 kV" },
      { label: "Secondary Voltage", value: "415 V, 690 V, 3.3 kV, 6.6 kV, 11 kV" },
      { label: "Insulation Class", value: "Class A (Liquid) / Class F or H (Dry Type)" },
      { label: "Standards", value: "IEC 60076, IEEE C57.12, IS 1180" },
      { label: "Short Circuit Test", value: "Fully short-circuit type tested at CPRI/KEMA" }
    ],
    applications: [
      "Commercial Complexes & High-Rise Buildings",
      "Urban Power Distribution Grids",
      "Industrial Parks & Manufacturing Plants",
      "Microgrids & Solar Distribution Plants"
    ]
  },
  {
    id: "furnace-transformers",
    slug: "furnace-transformers",
    name: "Furnace Transformers",
    category: "Heavy Industry & Metallurgy",
    capacity: "Up to 120 MVA, High Current Duty",
    shortDesc: "Custom-engineered for Electric Arc Furnaces (EAF) and Submerged Arc Furnaces (SAF) enduring extreme thermal and mechanical stresses.",
    fullDesc: "Furnace operation demands transformers that withstand frequent short circuits, extreme secondary currents (up to 100 kA), and intense harmonic distortion. Vortex Furnace Transformers incorporate heavy copper bus-bars and specialized winding arrangements designed to resist high electromagnetic forces.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Reinforced winding structure to withstand thousands of arcing short-circuits",
      "Direct water-cooled internal heat exchangers (OFWF cooling)",
      "High current secondary bushings with internal delta closure",
      "Motorized On-Load Tap Changer capable of 100+ steps daily",
      "Vibration-isolated core framework"
    ],
    specs: [
      { label: "Rated Capacity", value: "5 MVA to 120 MVA" },
      { label: "Secondary Current", value: "Up to 100 kA continuous" },
      { label: "Cooling Method", value: "OFAF / OFWF (Oil Forced Water Forced)" },
      { label: "Duty Cycle", value: "Heavy Industrial Arc Duty" },
      { label: "Regulating Method", value: "Direct regulation or separate auto-transformer setup" }
    ],
    applications: [
      "Steel Melting Shop (Electric Arc Furnaces)",
      "Ferroalloy & Submerged Arc Smelters",
      "Ladle Furnace (LF) Refining Units",
      "Silicon Metal Reduction Plants"
    ]
  },
  {
    id: "rectifier-transformers",
    slug: "rectifier-transformers",
    name: "Rectifier Transformers",
    category: "Electrolysis & Traction",
    capacity: "Up to 80 MVA, Multi-Pulse Systems",
    shortDesc: "Heavy-duty step-down units coupled with multi-phase rectifier bridge configurations for aluminum smelting, chemical electrolysis, and DC traction.",
    fullDesc: "Designed for combined operation with semiconductor rectifiers, these units supply smooth direct current (DC) for energy-intensive electrochemical processes. Features multi-pulse phase shifting (6, 12, 18, 24, or 48-pulse) to cancel system harmonics effectively.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Integrated inter-phase transformers (IPT) within single tank",
      "Multi-pulse phase shifting (15°, 7.5°, 3.75° angle offsets)",
      "Heavy harmonic copper shielding on primary and secondary windings",
      "Advanced oil diagnostic sensors with integrated gas relay system"
    ],
    specs: [
      { label: "Capacity Range", value: "Up to 80 MVA" },
      { label: "Pulse Configuration", value: "6, 12, 18, 24, 36, 48 Pulse" },
      { label: "DC Voltage Output", value: "100 V to 1,500 V DC" },
      { label: "Insulation Medium", value: "High flashpoint mineral oil or synthetic ester" }
    ],
    applications: [
      "Aluminum & Copper Smelting Smelters",
      "Chlor-Alkali Electrochemical Plants",
      "DC Railway Traction Substations",
      "Electroplating & Surface Treatment Lines"
    ]
  },
  {
    id: "special-transformers",
    slug: "special-transformers",
    name: "Special Transformers",
    category: "Custom Engineering",
    capacity: "Tailored to Extreme Duty Standards",
    shortDesc: "Custom-built magnetic solutions including phase-shifting transformers, grounding transformers, and marine offshore power units.",
    fullDesc: "When standard off-the-shelf transformers cannot handle complex phase shifts, high environmental salinity, hazardous zone classifications, or peculiar voltage waveforms, Vortex custom designs mission-critical special transformers.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Zig-zag connected Grounding Transformers (Neutral Grounding)",
      "Quad-booster Phase Shift Transformers for power flow control",
      "Explosion-proof marine offshore substation transformers",
      "High frequency pulse and converter duty transformers"
    ],
    specs: [
      { label: "Engineering Scope", value: "100% Bespoke Electromagnetic & Mechanical Design" },
      { label: "Certification", value: "ATEX, DNV-GL, ABS Marine Class Certified" },
      { label: "Enclosure", value: "IP56 / IP66 Stainless Steel options" }
    ],
    applications: [
      "Offshore Wind Turbines & Oil Platforms",
      "Grid Power Flow Management",
      "Neutral Grounding Substation Circuits",
      "Mining Flameproof Underground Operations"
    ]
  },
  {
    id: "reactors",
    slug: "reactors",
    name: "Shunt & Series Reactors",
    category: "Grid Stability & Reactive Power",
    capacity: "Up to 100 MVAR, 400 kV Class",
    shortDesc: "High-inductance inductive reactors for reactive power compensation, line charging current suppression, and short-circuit current limiting.",
    fullDesc: "Grid stability requires precise reactive power management. Vortex Shunt Reactors compensate for capacitive reactive power generated by long high-voltage transmission cables, maintaining voltage limits under light load conditions.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Gapped core design with high-rigidity ceramic spacers",
      "Low mechanical vibration and sub-60 dB acoustic emissions",
      "Oil-immersed gapped core construction for long dielectric lifespan",
      "Integrated vibration and acoustic monitoring ports"
    ],
    specs: [
      { label: "Rated MVAR", value: "5 MVAR to 100 MVAR" },
      { label: "Voltage Class", value: "Up to 400 kV" },
      { label: "Linearity", value: "Linear V-I characteristics up to 1.5 pu voltage" }
    ],
    applications: [
      "High Voltage EHV Transmission Lines",
      "Long Subsea & Underground Cable Link Interconnectors",
      "Substation Fault Current Suppression",
      "Wind Farm Collector Networks"
    ]
  }
];
