export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tools', href: '#tools' },
  { name: 'Projects', href: '#projects', highlight: true },
  { name: 'Journey', href: '#journey' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const MARQUEE_1_ITEMS = [
  'App Design',
  'Website Design',
  'Dashboard',
  'UI/UX Engineering',
  'Prototyping',
  'Design Systems',
];

export const MARQUEE_2_ITEMS = [
  'App Design',
  'Website Design',
  'Dashboard',
  'Wireframe',
];

export const SERVICES = [
  {
    id: 'app-design',
    icon: 'stay_current_portrait',
    title: 'App Design',
    description: 'Creating intuitive mobile experiences that combine beautiful interfaces with seamless functionality.',
    link: '#contact',
  },
  {
    id: 'web-design',
    icon: 'web',
    title: 'Website Design',
    description: 'Designing modern websites that communicate your brand clearly and guide visitors toward action.',
    link: '#contact',
  },
  {
    id: 'dashboard-design',
    icon: 'dashboard',
    title: 'Dashboard Design',
    description: 'Building clean, user-friendly dashboards that turn complex information into clear insights.',
    link: '#contact',
  },
];

export const ABOUT_STATS = [
  { value: '06+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '12+', label: 'Design Awards' },
];

export const ABOUT_TAGS = [
  { text: 'UI/UX Design', color: 'white', position: '-top-3 left-4' },
  { text: 'Mobile App Design', color: 'amber', position: 'top-1/4 -left-6' },
  { text: 'Website Design', color: 'white', position: 'bottom-12 -left-4' },
  { text: 'Design System', color: 'amber', position: '-bottom-3 left-1/3' },
  { text: 'Prototype', color: 'white', position: 'bottom-16 -right-6' },
  { text: 'Dashboard', color: 'amber', position: 'top-10 -right-4' },
];

export const TOOLS = [
  { name: 'Figma', percentage: '98%', icon: 'design_services', bgSoft: false },
  { name: 'Sketch', percentage: '92%', icon: 'diamond', bgSoft: true },
  { name: 'Photoshop', percentage: '90%', icon: 'photo_library', bgSoft: false },
  { name: 'After Effects', percentage: '85%', icon: 'animation', bgSoft: false },
  { name: 'Framer', percentage: '90%', icon: 'layers', bgSoft: true },
  { name: 'Webflow', percentage: '95%', icon: 'code', bgSoft: false },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Mobile E-commerce App Solution',
    categoryBadge: 'App Design',
    secondaryTags: ['UI/UX', 'E-commerce'],
    meta: 'UI/UX • Mobile App',
    description: 'A seamless shopping experience designed for mobile users with streamlined checkout and product discovery.',
    image: '/assets/images/project-ecommerce.png',
    client: 'Luxe Retail Global',
    timeline: '8 Weeks',
    role: 'Lead UI/UX Designer & Prototyper',
    fullOverview: 'Developed an end-to-end mobile retail interface focusing on high conversion, lightning-fast discovery, and single-tap checkout. Includes personalized recommendation carousels, tactile swipe gestures, and robust cart synchronization.',
    deliverables: ['Design System', 'Interactive Figma Prototype', 'Micro-interactions', 'Developer Handoff Tokens']
  },
  {
    id: 2,
    title: 'Travel Website & Booking Portal Redesign',
    categoryBadge: 'Web Design',
    secondaryTags: ['UI/UX', 'Responsive Design'],
    meta: 'Web Design • Responsive',
    description: 'A modern travel experience that makes discovering destination packages and booking itineraries effortless.',
    image: '/assets/images/project-travel.png',
    client: 'Horizon Expeditions',
    timeline: '6 Weeks',
    role: 'Product Designer & Frontend Architect',
    fullOverview: 'Revamped the primary portal for an international expedition operator. Reduced booking friction by 40% with a modular step-by-step customizer, dynamic currency conversion, and rich visual previews for remote itineraries.',
    deliverables: ['Information Architecture', 'Responsive UI Kit', 'Custom Vector Maps', 'Tailwind Component Library']
  },
  {
    id: 3,
    title: 'Fitness Coaching & Health Tracker App',
    categoryBadge: 'Mobile App',
    secondaryTags: ['Product Design', 'Prototyping'],
    meta: 'iOS & Android • Product',
    description: 'A simple and engaging digital experience for tracking fitness goals, calories, and personalized workout routines.',
    image: '/assets/images/project-fitness.png',
    client: 'PulseFit Technologies',
    timeline: '10 Weeks',
    role: 'Senior Product Designer',
    fullOverview: 'Engineered a telemetry-driven fitness mobile experience integrating biometric feeds, real-time rep cadence audio cues, caloric intake loggers, and a celebratory streak mechanic that increased 30-day retention by 28%.',
    deliverables: ['Design System', 'Haptic Micro-interactions', 'Dark & Light Mode Variants', 'User Journey Validation']
  },
  {
    id: 4,
    title: 'Artisan Coffee Shop & Ordering Experience',
    categoryBadge: 'Web Design',
    secondaryTags: ['Branding', 'Landing Page'],
    meta: 'E-Commerce • Branding',
    description: 'A distinctive digital storefront built around a premium coffee brand with real-time pickup ordering.',
    image: '/assets/images/project-coffeeshop.png',
    client: 'Roast & Revel Craft Roasters',
    timeline: '4 Weeks',
    role: 'Brand & Digital Product Designer',
    fullOverview: 'Crafted an atmospheric online presence celebrating heritage bean roasting. Features bespoke editorial typography, localized cafe menu ordering with live fulfillment status, and frictionless customer accounts.',
    deliverables: ['Art Direction & Brand Identity', 'Digital Ordering Flow', 'CMS Architecture', 'Production Ready Prototype']
  }
];

export const EDUCATION = [
  {
    period: '2020 – 2024',
    title: "Bachelor's Degree in Computer Science",
    institution: 'University of Design and Technology',
    description: 'Focus on Digital design and user-centered systems.',
  },
  {
    period: '2023',
    title: 'UI/UX Design Certification',
    institution: 'Professional Design Academy',
    description: 'Advanced interaction design, prototyping, and usability.',
  },
];

export const EXPERIENCE = [
  {
    period: '2024 – Present',
    title: 'Product Designer & Developer',
    company: 'Creative Digital Studio',
    description: 'Lead interface design, high-fidelity wireframing, and code prototyping.',
  },
  {
    period: '2022 – 2024',
    title: 'UI/UX Designer',
    company: 'Digital Solutions Agency',
    description: 'Delivered 20+ responsive web platforms and mobile applications.',
  },
];

export const PRICING_TIERS = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$80',
    frequency: '/ Starting at',
    description: 'Perfect for simple design needs and small projects.',
    popular: false,
    buttonText: 'Choose Basic',
    features: [
      'One landing page or small task',
      'Basic wireframes',
      'Clean modern interface design',
      'Source files included',
      'Standard delivery',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$960',
    frequency: '/ Starting at',
    description: 'A complete design solution for growing businesses.',
    popular: true,
    badge: 'Most Popular',
    buttonText: 'Choose Professional',
    features: [
      'Multi-page website or app design',
      'User flow and wireframes',
      'High-fidelity interactive prototype',
      'Three revision rounds included',
      'Priority delivery & support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$2,280',
    frequency: '/ Starting at',
    description: 'A comprehensive design experience for ambitious digital products.',
    popular: false,
    buttonText: 'Choose Premium',
    features: [
      'Full product design & UX research',
      'Complete UI design system tokens',
      'High-fidelity responsive layouts',
      'Developer handoff documentation',
      'Priority 24/7 dedicated support',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: '5.0',
    quote: '"Emmanuel understood our product vision and translated it into a clean, intuitive interface. The entire design process felt organized and collaborative."',
    author: 'Sarah Johnson',
    role: 'Startup Founder',
    avatar: '/assets/images/avatar-sarah.png',
  },
  {
    id: 2,
    rating: '5.0',
    quote: '"Working with Emmanuel was an excellent experience. He brought clarity to our ideas, paid attention to the smallest details, and delivered a design our team was excited to build."',
    author: 'Michael Anderson',
    role: 'Product Manager',
    avatar: '/assets/images/avatar-michael.png',
  },
  {
    id: 3,
    rating: '5.0',
    quote: '"The redesign gave our brand a more polished digital presence. Emmanuel balanced visual creativity with practical usability throughout the project."',
    author: 'Emily Carter',
    role: 'Marketing Director',
    avatar: '/assets/images/avatar-emily.png',
  },
];

export const BLOGS = [
  {
    id: 1,
    tag: 'UX Design',
    readTime: '5 min read',
    title: 'How to Create a Better User Experience',
    excerpt: 'Discover the principles that make digital products more intuitive, accessible, and enjoyable to use.',
    image: '/assets/images/blog-1.png',
    date: 'Oct 2, 2026',
    author: 'Emmanuel Ohanusi',
    content: 'User experience is more than just clean colors and typography. It begins with active listening to user pain points, mapping intentional cognitive flows, minimizing extraneous friction, and ensuring responsive feedback across every interaction.'
  },
  {
    id: 2,
    tag: 'Web Design',
    readTime: '4 min read',
    title: 'The Power of Minimalist Web Design',
    excerpt: 'Learn how thoughtful layouts, typography, and whitespace can make a website significantly more effective.',
    image: '/assets/images/blog-2.png',
    date: 'Sep 24, 2026',
    author: 'Emmanuel Ohanusi',
    content: 'Minimalism in UI design is not about removing features; it is about clarifying value. By deploying deliberate spatial margins, clear typographic hierarchy, and intentional color accents, users absorb information with significantly less cognitive load.'
  },
  {
    id: 3,
    tag: 'Design Tools',
    readTime: '6 min read',
    title: 'My Favorite Tools for Product Designers',
    excerpt: 'A practical look at the tools I use to plan, design, prototype, and communicate digital experiences.',
    image: '/assets/images/blog-3.png',
    date: 'Sep 15, 2026',
    author: 'Emmanuel Ohanusi',
    content: 'A deep dive into our daily design arsenal: Figma for component architectures and token management, Framer for ultra-high-fidelity micro-interactions, and code-based prototyping using React and Tailwind CSS for seamless handoffs.'
  },
];

export const FAQS = [
  {
    id: 1,
    question: 'What services do you offer as a product designer?',
    answer: 'I offer UI/UX design, mobile app design, website design, dashboard design, prototyping, wireframing, and design system development.',
  },
  {
    id: 2,
    question: 'Can I download your resume/CV for information?',
    answer: 'Certainly! You can download my resume/CV directly from my website or contact me. It provides a comprehensive overview of my education, work experience, and design achievements.',
    defaultOpen: true,
  },
  {
    id: 3,
    question: 'Are you available for freelance design work?',
    answer: 'Yes, I am currently available for select freelance contracts, MVP builds, and fractional product design advisory.',
  },
  {
    id: 4,
    question: 'What tools do you use for your design work?',
    answer: 'I primarily use Figma for interface design and systems, complemented by Sketch, Photoshop, Framer, and Webflow for rapid deployment.',
  },
  {
    id: 5,
    question: 'How do I navigate through your portfolio projects?',
    answer: 'Browse our Latest Projects section above and click on the arrow icon on any card to explore the full case study and live prototypes.',
  },
];

export const CONTACT_INFO = {
  email: 'hello@emmanuelohanusi.design',
  phone: '+1 (406) 555-0120',
  address: '2464 Royal Ln. Mesa, New Jersey 45463',
  location: 'United States • Remote Worldwide',
  availability: 'Available for Selected Projects',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
  }
};
