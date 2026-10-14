import {
  primaryNumber,
  secondaryNumber,
  primaryEmail,
  officeAddress,
  mapUrl
} from '../constants/constants';
import {
  Award,
  CheckCircle2,
  FileText,
  Headphones,
  PhoneCall,
  Search,
  FileCheck,
  Laptop,
  Mail,
  MapPin,
  Target,
  Eye,
  Users,
  Lightbulb,
  ShieldCheck,
  Wrench,
  Cpu,
  Server
} from 'lucide-react';
import serviceHero from '../assets/service-hero.png';
import serviceRepair from '../assets/service-repair.jpg';
import serviceUpgrade from '../assets/service-upgrade.png';
import serviceSoftware from '../assets/service-software.jpg';
import serviceRecovery from '../assets/service-recovery.jpg';
import serviceSupport from '../assets/service-support.png';

export const siteConfigData = {
  storeName: "SkyTech",
  tagline: "Systems & Rentals",
  phone: `+91 ${primaryNumber}`,
  email: primaryEmail,
  whatsappPhone: `91${primaryNumber}`,
  address: officeAddress,
  workingHours: "Mon - Sat: 9:30 AM - 8:00 PM"
};

export const marqueeAnnouncementsData = [
  "⚡ Special Offer: Get Free Antivirus & Carry Bag with every Refurbished Laptop Purchase!",
  "💻 Systems on Rent: High-Speed Laptops & Desktops for Corporates & Students starting @ $19/mo",
  "🚚 Free Express Doorstep Shipping & Insured Pickup Across Nation",
  "🛡️ 100% Tested Quality: 50-Point Hardware Inspection + 1-Year Warranty",
  `📞 Hotline Support: +91 ${primaryNumber} | Bulk Inquiries Welcome`
];

export const slidesData = [
  {
    id: 1,
    title: "Budget-Friendly Refurbished Laptops & MacBooks",
    subtitle: "Save up to 50% on top brands like Apple MacBook, Dell XPS, HP EliteBook, and Lenovo ThinkPad with 1-Year Sky Tech Warranty.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    bullets: ["50-Point Hardware Inspection", "Free Antivirus & Bag Included", "30-Day Money Back Guarantee"]
  },
  {
    id: 2,
    title: "High-Performance Systems on Rent",
    subtitle: "Rent laptops, gaming desktops, and servers for your company, events, or education starting at just $19 / month with free maintenance.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    bullets: ["Short-Term & Long-Term Rentals", "Zero Maintenance Liabilities", "Instant Replacement Guarantee"]
  },
  {
    id: 3,
    title: "Computer Repair & Annual Maintenance (AMC)",
    subtitle: "On-site laptop repair, motherboard chip-level repair, SSD/RAM hardware upgrades, virus cleaning, and corporate AMC contracts.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    bullets: ["Certified Hardware Engineers", "Same-Day Doorstep Service", "Original Spare Parts Warranty"]
  }
];

export const productsData = [
  {
    id: 1,
    category: "laptops",
    brand: "Apple",
    series: "MacBook Pro 16\"",
    name: "Apple MacBook Pro 16\" (M3 Max, 36GB RAM, 1TB SSD)",
    price: 3299,
    processor: "Apple M3 Max 14-core",
    storage: "1TB NVMe SSD",
    ram: "36GB Unified Memory",
    screen: "16.2\" Liquid Retina XDR",
    specs: ["Apple M3 Max 14-core", "36GB Unified Memory", "1TB NVMe SSD", "16.2\" Liquid Retina XDR"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "laptops",
    brand: "ASUS",
    series: "ROG Zephyrus G16",
    name: "ASUS ROG Zephyrus G16 Gaming Laptop (RTX 4080)",
    price: 2499,
    processor: "Intel Core i9-14900HX",
    ram: "32GB DDR5 RAM",
    screen: "240Hz OLED Display",
    graphic: "NVIDIA RTX 4080 12GB",
    specs: ["Intel Core i9-14900HX", "NVIDIA RTX 4080 12GB", "32GB DDR5 RAM", "240Hz OLED Display"],
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "laptops",
    brand: "Dell",
    series: "XPS 15",
    name: "Dell XPS 15 Business Workstation (Intel i7, 16GB RAM)",
    condition: "Certified Refurbished",
    price: 1199,
    processor: "Intel Core i7-13700H",
    storage: "512GB NVMe SSD",
    ram: "16GB DDR5 RAM",
    screen: "4K UHD InfinityEdge",
    specs: ["Intel Core i7-13700H", "16GB DDR5 RAM", "512GB NVMe SSD", "4K UHD InfinityEdge"],
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "desktops",
    brand: "Custom PC",
    series: "SkyTech Titan Pro",
    name: "SkyTech Titan Pro Gaming PC (RTX 4090, Liquid Cooled)",
    price: 3699,
    processor: "Intel Core i9-14900K",
    ram: "64GB DDR5 RGB RAM",
    graphic: "NVIDIA RTX 4090 24GB",
    specs: ["Intel Core i9-14900K", "NVIDIA RTX 4090 24GB", "64GB DDR5 RGB RAM", "360mm AIO Liquid Cooling"],
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "desktops",
    brand: "Lenovo",
    series: "ThinkCentre M90q",
    name: "Lenovo ThinkCentre M90q Tiny Workstation",
    condition: "Certified Refurbished",
    price: 649,
    processor: "Intel Core i7-12700T",
    storage: "512GB SSD",
    ram: "16GB RAM",
    specs: ["Intel Core i7-12700T", "16GB RAM", "512GB SSD", "Ultra-Compact Form Factor"],
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "accessories",
    brand: "ASUS",
    series: "ROG Swift 34\"",
    name: "ASUS ROG Swift 34\" Curved OLED Gaming Monitor (240Hz)",
    price: 999,
    screen: "34\" UWQHD 3440x1440, 240Hz",
    specs: ["34\" UWQHD 3440x1440", "0.03ms Response Time", "HDR10 True Black", "USB-C Hub Hub"],
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    category: "accessories",
    brand: "Logitech",
    series: "G PRO X",
    name: "Logitech G PRO X Wireless Mechanical Gaming Keyboard",
    price: 149,
    specs: ["Hot-Swappable Switches", "Lightspeed Wireless", "RGB Backlit", "Aluminum Frame"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    category: "accessories",
    brand: "Samsung",
    series: "990 PRO 2TB",
    name: "Samsung 990 PRO 2TB NVMe PCIe 4.0 SSD (7450 MB/s)",
    price: 169,
    storage: "2TB NVMe PCIe 4.0 SSD",
    specs: ["7450 MB/s Read Speed", "Custom Heatsink", "PS5 & PC Compatible", "5-Year Warranty"],
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
  }
];

export const rentalOptionsData = [
  { id: 'laptop-biz', name: 'Refurbished Business Laptop (Intel i5, 16GB, SSD)', baseMonthly: 25, type: 'laptop' },
  { id: 'laptop-mac', name: 'Apple MacBook Pro M2/M3 (16GB RAM, 512GB)', baseMonthly: 45, type: 'laptop' },
  { id: 'desktop-i7', name: 'Core i7 Workstation PC + 24" IPS Monitor', baseMonthly: 35, type: 'desktop' },
  { id: 'gaming-pc', name: 'RTX 4070 Gaming PC + 165Hz Curved Monitor', baseMonthly: 65, type: 'desktop' },
  { id: 'server-node', name: 'Enterprise Rackmount Server (64GB RAM, 4TB SSD)', baseMonthly: 110, type: 'server' }
];

export const brandLogosData = [
  {
    name: 'MacBook Air',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    displayText: 'MacBook Air',
    isAppleCombo: true
  },
  {
    name: 'Sony',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg'
  },
  {
    name: 'ASUS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg'
  },
  {
    name: 'Samsung',
    logo: 'https://www.sunraysystems.in/wp-content/uploads/2025/04/samsung-icon.jpg.webp',
    style: { maxHeight: '60px', maxWidth: '90%', transform: 'scale(1.3)' }
  },
  {
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg'
  },
  {
    name: 'Intel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg'
  },
  {
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg'
  },
  {
    name: 'Lenovo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg'
  }
];

export const faqData = [
  {
    id: 1,
    question: "What Types Of Laptops And PCs Do You Sell?",
    answer: "We sell a wide range of certified refurbished and new Laptops, MacBooks, Gaming Desktop PCs, All-in-One Workstations, and Enterprise Servers from top global brands including Apple, Dell, HP, Lenovo, ASUS, and Sony—all thoroughly inspected with up to 1-Year SkyTech Warranty."
  },
  {
    id: 2,
    question: "How Can I Contact Customer Support?",
    answer: `You can reach our dedicated support team via call or WhatsApp at +91 ${primaryNumber}, email us at ${primaryEmail}, or visit our store at Sepal Olivia 101, Bopal Cross Road, Ahmedabad, Gujarat (Mon-Sat 11:00 AM – 7:00 PM).`
  },
  {
    id: 3,
    question: "Do You Provide Repair Services?",
    answer: "Yes! We offer comprehensive on-site and doorstep chip-level laptop & desktop repair services, motherboard repair, RAM/SSD hardware upgrades, data recovery, and Annual Maintenance Contracts (AMC) for corporates."
  },
  {
    id: 4,
    question: "Where Does SkyTech Operate And Who Are Its Customers?",
    answer: "SkyTech is based in Ahmedabad, Gujarat and serves over 1,200+ Corporate, SME, and retail customers across Gujarat and all over India with express doorstep delivery and insured pickup."
  }
];

export const industriesWeServeData = [
  { id: 1, name: "Education", iconKey: "GraduationCap" },
  { id: 2, name: "Power", iconKey: "Zap" },
  { id: 3, name: "Data Center", iconKey: "Server" },
  { id: 4, name: "IT & MNC's", iconKey: "Building2" },
  { id: 5, name: "Hotels", iconKey: "Hotel" },
  { id: 6, name: "Media", iconKey: "Video" },
  { id: 7, name: "Travel", iconKey: "Plane" },
  { id: 8, name: "Store", iconKey: "Store" },
  { id: 9, name: "Real Estate", iconKey: "Building" },
  { id: 10, name: "Hospital", iconKey: "HeartPulse" }
];

export const snapshotExcellenceData = {
  title: "SKYTECH",
  subtitle: "A Snapshot of Excellence.",
  description: "SkyTech, is based out of Ahmedabad and having customer base across India, We are serving more than 1200+ Corporate and SME customers in Gujarat.",
  counters: [
    { id: 1, target: 13, suffix: "+", label: "Years Experience", iconKey: "Award" },
    { id: 2, target: 1000, suffix: "+", label: "Dealers", iconKey: "Users" },
    { id: 3, target: 13, suffix: "+", label: "Brands", iconKey: "Medal" }
  ]
};

export const happyCustomersData = {
  overallRating: "Excellent",
  stars: 5,
  reviewCount: "Based on 1,196 reviews",
  reviews: [
    {
      id: 1,
      name: "Amit Sharma",
      initial: "AS",
      avatarBg: "var(--accent-color)",
      date: "8 months ago",
      rating: 5,
      comment: "This platform has made managing our school activities so much easier. The interface is clean, simple and very user-friendly. Highly recommended!"
    },
    {
      id: 2,
      name: "Priya Patel",
      initial: "PP",
      avatarBg: "var(--accent-color)",
      date: "8 months ago",
      rating: 5,
      comment: "I love how easy it is to track my child's progress and attendance. The app is reliable, fast and provides all the information we need in one place."
    },
    {
      id: 3,
      name: "Rohan Kumar",
      initial: "RK",
      avatarBg: "var(--accent-color)",
      date: "8 months ago",
      rating: 5,
      comment: "Excellent service and support! The team is very responsive and always ready to help. It's been a great experience using this platform."
    },
    {
      id: 4,
      name: "Kinjal Chaudhary",
      initial: "KC",
      avatarBg: "var(--accent-color)",
      date: "6 months ago",
      rating: 5,
      comment: "Bought a refurbished Dell laptop with Intel i7 and 512GB SSD. The seller was honest, patient, and answered all my hardware questions!"
    },
    {
      id: 5,
      name: "Divyaradha Satani",
      initial: "DS",
      avatarBg: "var(--accent-color)",
      date: "5 months ago",
      rating: 5,
      comment: "Perfect place to buy laptops and business workstations in Ahmedabad. Genuine service and prompt warranty support!!"
    },
    {
      id: 6,
      name: "Meniya Axar",
      initial: "MA",
      avatarBg: "var(--accent-color)",
      date: "4 months ago",
      rating: 5,
      comment: "Best showroom for laptop, desktop and server products. Visited the store, very neat setup and highly professional staff."
    }
  ]
};

// =============================================================================
// SERVICES PAGE MOCK DATA
// =============================================================================

export const servicesTrustHighlightsData = [
  'Chip-Level Diagnostics',
  '100% Genuine Parts',
  'Upfront Pricing'
];

export const servicesListData = [
  {
    id: 'repair',
    title: 'Laptop Repair & Maintenance',
    image: serviceRepair,
    badge: 'Hardware & Chip-Level',
    description: 'Expert diagnostics and chip-level motherboard repairing for Dell, HP, Lenovo, Asus, Acer, and Apple MacBooks.',
    features: [
      'Motherboard chip-level circuit repair',
      'Broken screen & hinge replacement',
      'Liquid damage & thermal fan cleaning'
    ],
    inquiryMsg: 'Hello Skytech, I need Laptop Repair & Maintenance service.'
  },
  {
    id: 'sales',
    title: 'Laptop Sales & Accessories',
    image: serviceHero,
    badge: 'Enterprise & Refurbished',
    description: 'Certified premium refurbished business laptops, workstations, and 100% original computer accessories at unbeatable prices.',
    features: [
      'Grade-A tested corporate laptops',
      'Original chargers, batteries & adaptors',
      'Docking stations, monitors & keyboards'
    ],
    inquiryMsg: 'Hello Skytech, I am inquiring about Laptop Sales and Accessories.'
  },
  {
    id: 'upgrades',
    title: 'Hardware Upgrades (RAM & SSD)',
    image: serviceUpgrade,
    badge: 'Speed & Performance',
    description: 'Supercharge your slow laptop. Instant speed boost with high-speed NVMe PCIe SSDs and high-capacity DDR4/DDR5 RAM upgrades.',
    features: [
      'Ultra-fast M.2 NVMe SSD installations',
      'RAM expansion up to 32GB / 64GB',
      'OS cloning with zero data loss'
    ],
    inquiryMsg: 'Hello Skytech, I want to upgrade my laptop RAM and SSD.'
  },
  {
    id: 'software',
    title: 'Software Installation & Troubleshooting',
    image: serviceSoftware,
    badge: 'OS & Licensing',
    description: 'Clean operating system setups, licensing, driver optimization, software troubleshooting, and deep virus/malware removal.',
    features: [
      'Genuine Windows & macOS installations',
      'Driver conflict resolution & BIOS updates',
      'Virus, spyware & malware cleanup'
    ],
    inquiryMsg: 'Hello Skytech, I need Software Installation & Troubleshooting support.'
  },
  {
    id: 'recovery',
    title: 'Data Recovery & Backup',
    image: serviceRecovery,
    badge: 'Secure & Confidential',
    description: 'Safe extraction of critical photos, files, and database records from dead drives, accidental format, or corrupted partitions.',
    features: [
      'Corrupted SSD & dead HDD recovery',
      'Accidentally deleted partition restore',
      'Automated local & cloud backup setups'
    ],
    inquiryMsg: 'Hello Skytech, I need emergency Data Recovery support.'
  },
  {
    id: 'business',
    title: 'Business IT Support',
    image: serviceSupport,
    badge: 'Corporate & AMC',
    description: 'Comprehensive IT infrastructure management, Annual Maintenance Contracts (AMC), and responsive on-demand technical support.',
    features: [
      'Annual Maintenance Contracts (AMC)',
      'Bulk office workstation deployments',
      'Dedicated remote & onsite tech support'
    ],
    inquiryMsg: 'Hello Skytech, I am looking for Business IT Support / AMC services.'
  }
];

export const whyChooseListData = [
  {
    icon: Award,
    title: 'Experienced Technical Team',
    text: 'Over 10+ years of dedicated chip-level hardware repair experience. Our certified engineers solve complex board faults others turn away.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Parts & Reliable Solutions',
    text: 'We strictly source OEM-grade and genuine parts with manufacturer warranties to ensure lasting, dependable laptop performance.'
  },
  {
    icon: FileText,
    title: 'Transparent Service Estimates',
    text: 'No unexpected bills or hidden charges. You receive a clear, honest diagnostic evaluation and estimate before any work starts.'
  },
  {
    icon: Headphones,
    title: 'Customer-Focused Support',
    text: 'Friendly communication, fast turnaround time, warranty on repaired components, and helpful post-service support.'
  }
];

export const processStepsData = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Submit your service request',
    description: 'Call, WhatsApp, or bring your device directly to our service center in Ahmedabad.',
    highlight: 'Instant Response'
  },
  {
    number: '02',
    icon: Search,
    title: 'Get an initial assessment',
    description: 'Our certified engineers conduct diagnostics to pinpoint the precise fault and required parts.',
    highlight: 'Comprehensive Diagnostics'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Approve the estimated cost',
    description: 'We provide an upfront quote and turnaround estimate. Repair begins only upon your approval.',
    highlight: 'Zero Hidden Costs'
  },
  {
    number: '04',
    icon: Laptop,
    title: 'Receive your repaired laptop',
    description: 'Your machine undergoes multi-level stress testing and is safely handed back with warranty.',
    highlight: 'Tested with Warranty'
  }
];

export const servicesContactDetailsData = [
  {
    id: 'phone',
    icon: PhoneCall,
    title: 'Direct Call & WhatsApp',
    subtitle: 'Mon - Sat: 11:00 AM – 7:00 PM',
    type: 'phone',
    phones: [
      { label: `+91 ${primaryNumber}`, tel: `+91${primaryNumber}`, isPrimary: true },
      { label: `+91 ${secondaryNumber}`, tel: `+91${secondaryNumber}`, isPrimary: false }
    ]
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Official Email',
    subtitle: 'For inquiries & corporate quotes',
    type: 'email',
    email: primaryEmail
  },
  {
    id: 'location',
    icon: MapPin,
    title: 'Service Center Location',
    type: 'location',
    address: officeAddress,
    mapUrl: mapUrl
  }
];

// =============================================================================
// ABOUT US PAGE MOCK DATA
// =============================================================================

export const aboutHeroData = {
  badge: "Who We Are",
  headline: "Empowering Your Digital World",
  description: "Discover technology solutions designed to help individuals and businesses work smarter with speed, security, and dependability.",
  storyButtonText: "Explore Our Story",
  contactButtonText: "Contact Us",
  floatingBadge: {
    title: "10+ Years of Excellence",
    subtitle: "1,200+ Corporate Clients Nationwide"
  }
};

export const aboutStoryData = {
  badge: "Technology With a Purpose",
  title: "Building Lasting Value Through Reliable Technology",
  lead: "Founded in 2013, SkyTech started with a clear purpose: to bridge the gap between expensive enterprise technology and growing organizations by delivering high-grade laptops, desktops, and IT solutions at honest prices.",
  paragraphs: [
    "Headquartered in Ahmedabad, Gujarat, we have grown to serve more than 1,200+ Corporate, SME, and institutional clients across India. Whether deploying bulk office workstations, providing certified refurbished MacBooks, or performing complex chip-level hardware diagnostics, our focus has always been on speed, precision, and lasting dependability.",
    "We do not just supply hardware — we build dependable partnerships. Every system we deliver is 50-point quality checked, backed by warranty, and supported by certified engineers who genuinely care about your uptime."
  ],
  stats: [
    { value: "10+", label: "Years in Business" },
    { value: "1,200+", label: "Corporate Clients" },
    { value: "10,000+", label: "Devices Serviced" },
    { value: "100%", label: "Tested & Certified" }
  ]
};

export const aboutMissionVisionData = [
  {
    id: "mission",
    title: "Our Mission",
    icon: Target,
    tag: "Purpose & Execution",
    description: "Deliver reliable, accessible technology solutions that meet customer needs with uncompromising quality, upfront transparency, and integrity.",
    points: [
      "OEM-grade genuine parts and certified diagnostics",
      "Cost-effective refurbished & brand-new hardware",
      "Honest upfront estimates with zero hidden costs"
    ]
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: Eye,
    tag: "Future & Growth",
    description: "Build lasting relationships through innovation, service, and trust — setting the gold standard in tech retail, hardware repair, and IT infrastructure.",
    points: [
      "Sustainable IT lifecycle extension for businesses",
      "Nationwide reach with express doorstep support",
      "Accessible high-performance technology for everyone"
    ]
  }
];

export const aboutWhyChooseData = [
  {
    icon: Users,
    title: "Customer-Focused Approach",
    description: "We listen to your specific needs first. Receive honest, transparent guidance without pushy sales tactics or unnecessary upsells."
  },
  {
    icon: Lightbulb,
    title: "Practical Technology Solutions",
    description: "Smart hardware upgrades, enterprise workstations, and tailored configurations engineered for real-world productivity and high ROI."
  },
  {
    icon: ShieldCheck,
    title: "Quality and Reliability",
    description: "Rigid 50-point multi-level diagnostic inspections, OEM-grade components, and warranty protection on every machine we deliver."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Friendly communication, fast turnaround time, certified chip-level technicians, and responsive after-sales service you can count on."
  }
];

export const aboutExpertiseData = [
  {
    id: "sales",
    title: "Laptop Sales & Accessories",
    icon: Laptop,
    badge: "Enterprise & Refurbished",
    description: "Certified premium refurbished corporate laptops, workstations, and 100% original computer accessories at unbeatable prices.",
    bullets: ["Tested Grade-A corporate laptops", "Original chargers, batteries & adaptors", "Keyboards, monitors & docking stations"]
  },
  {
    id: "repair",
    title: "Laptop Repair & Maintenance",
    icon: Wrench,
    badge: "Hardware & Chip-Level",
    description: "Expert diagnostics and chip-level motherboard repairing for Dell, HP, Lenovo, Asus, Acer, and Apple MacBooks.",
    bullets: ["Motherboard chip-level circuit repair", "Broken display & hinge replacements", "Liquid damage & thermal cleaning"]
  },
  {
    id: "upgrades",
    title: "Hardware Upgrades",
    icon: Cpu,
    badge: "Speed & Performance",
    description: "Supercharge slow machines. Instant speed boost with ultra-fast NVMe PCIe SSDs and DDR4/DDR5 RAM expansions.",
    bullets: ["High-speed NVMe PCIe SSD installation", "RAM expansion up to 32GB / 64GB", "OS cloning with zero data loss"]
  },
  {
    id: "support",
    title: "IT Solutions & Support",
    icon: Server,
    badge: "Corporate & AMC",
    description: "Comprehensive IT infrastructure management, Annual Maintenance Contracts (AMC), and responsive technical support.",
    bullets: ["Annual Maintenance Contracts (AMC)", "Bulk office workstation deployment", "Dedicated remote & onsite tech support"]
  }
];

