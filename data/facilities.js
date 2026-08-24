export const facilities = [
  {
    id: "plant-01",
    name: "Ultra-High Voltage Plant 01",
    location: "Vortex Mega Industrial Complex - Campus Alpha",
    area: "85,000 m²",
    focus: "EHV Power Transformers (100 MVA - 500 MVA, 400 kV)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    features: [
      "250-Ton Overhead Crane Clearance with air-caster positioning floor",
      "Vapor Phase Drying (VPD) Chambers (120-ton charge capacity)",
      "Automated CRGO Core Lamination Slitting & Cut-to-Length Lines",
      "Dust-Controlled ISO Class 7 Cleanroom Winding Enclosures"
    ],
    metrics: { annualCapacity: "15,000 MVA", craneCapacity: "250 Tons", cleanroom: "ISO 7" }
  },
  {
    id: "plant-02",
    name: "Special & Distribution Plant 02",
    location: "Vortex Engineering Hub - Campus Beta",
    area: "52,000 m²",
    focus: "Distribution, Furnace, Rectifier & Special Transformers",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automated Corrugated Tank Fabrication & Robot Welding Cells",
      "Vacuum Cast Resin (CRT) Resin Impregnation Systems",
      "High-Current Furnace Transformer Copper Bus-Bar Assembly Line",
      "Environment-friendly electrostatic powder coating facility"
    ],
    metrics: { annualCapacity: "8,500 Units", robotWelding: "100% Automated", resinDrying: "10-Bar Vacuum" }
  },
  {
    id: "uhv-lab",
    name: "UHV Testing Laboratory & Impulse Center",
    location: "Vortex High Voltage Test Station",
    area: "18,000 m² (Fully Shielded Faraday Cage)",
    focus: "Full Impulse Voltage, Partial Discharge & Temperature Rise Tests",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    features: [
      "2,400 kV / 240 kJ Lightning & Switching Impulse Generator",
      "High-power short-circuit test generator bank",
      "Precision Faraday Shielded enclosure (Sub-2 pC PD background noise)",
      "Automated temperature rise thermal imaging systems"
    ],
    metrics: { impulseVoltage: "2,400 kV", pdNoise: "< 2 pC", accreditation: "ISO/IEC 17025" }
  },
  {
    id: "rd-center",
    name: "Electromagnetic & Thermal R&D Center",
    location: "Vortex Global Innovation Building",
    area: "12,000 m²",
    focus: "Finite Element Modeling (FEM), Thermal Simulation & Ester Chemistry",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    features: [
      "High-Performance Computing Cluster for 3D ANSYS Electromagnetic Simulation",
      "Advanced Dielectric Fluid & Gas Chromatography Testing Lab",
      "Acoustic Noise Reduction Anechoic Testing Chamber",
      "IoT Sensor & Smart Monitoring System Prototyping Workshop"
    ],
    metrics: { patents: "42+ Granted", computationalNodes: "64 High-Perf Nodes", noiseChamber: "Sub-40 dB" }
  }
];
