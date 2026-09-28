import { CampusFacility, ImportantInfoItem } from '../types';

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'fac-main',
    title: 'Campus Facilities',
    iconName: 'Building2',
    category: 'Infrastructure',
    description: 'Sprawling smart campus featuring modern amphitheaters, sports complexes, student activity zones, and green walkways.',
    hours: '06:00 AM – 10:30 PM',
    location: 'Central Campus Quadrangle',
    features: ['Olympic Swimming Complex', 'Open-Air Amphitheater', 'Multi-Sport Indoor Arena', 'Student Recreation Lounge']
  },
  {
    id: 'fac-library',
    title: 'Library & Knowledge Hub',
    iconName: 'BookMarked',
    category: 'Academic Commons',
    description: 'Four-level smart library housing over 150,000 cataloged books, private research cubicles, and 24/7 collaborative learning rooms.',
    hours: '08:00 AM – 12:00 Midnight (24/7 during Finals)',
    location: 'West Knowledge Wing, Block B',
    features: ['24/7 Silent Study Floors', 'High-Speed Wireless Charging Pods', 'Automated RFID Self-Checkout', 'Microfilm & Rare Archives']
  },
  {
    id: 'fac-computer-labs',
    title: 'Computer Labs',
    iconName: 'Cpu',
    category: 'Computing Infrastructure',
    description: 'Twelve dedicated computing suites equipped with NVIDIA RTX A6000 workstations, high-speed fiber backbones, and dual monitors.',
    hours: '07:30 AM – 10:00 PM',
    location: 'Turing Computing Center, 3rd Floor',
    features: ['Dedicated AI & Deep Learning Cluster', 'Ubuntu Linux & macOS Workstations', 'Dual 4K HDR Displays', 'Gigabit Fiber Ports']
  },
  {
    id: 'fac-laboratories',
    title: 'Specialized Laboratories',
    iconName: 'FlaskConical',
    category: 'Experimental Research',
    description: 'Cutting-edge instrumentation suites for Embedded Systems, IoT sensor arrays, Nanotechnology, and rapid 3D prototyping.',
    hours: '08:30 AM – 08:00 PM',
    location: 'Edison Science & Research Complex',
    features: ['Makerspace 3D Printing & CNC Lab', 'RF & Microwave Anechoic Chamber', 'Cleanroom Nano-Fab Facility', 'Automated Chemical Analyzers']
  },
  {
    id: 'fac-cafeteria',
    title: 'Campus Dining & Cafeterias',
    iconName: 'UtensilsCrossed',
    category: 'Dining & Refreshments',
    description: 'Multiple dining halls, artisan coffee roasters, and organic juice bars offering diverse, healthy nutrition at subsidized student rates.',
    hours: '07:30 AM – 10:30 PM',
    location: 'Student Union Pavilion & East Commons',
    features: ['Multi-Cuisine Daily Hot Buffet', 'Specialty Espresso & Artisan Bakery', 'Vegan, Halal & Allergen-Safe Zones', 'Pre-Order Mobile Pickup Counter']
  },
  {
    id: 'fac-support',
    title: 'Student Support Services',
    iconName: 'HeartHandshake',
    category: 'Wellness & Guidance',
    description: 'Comprehensive psychological counseling, academic accommodation advocates, international student help, and peer mentoring.',
    hours: '09:00 AM – 06:00 PM (Emergency 24/7)',
    location: 'Student Wellness Pavilion, Suite 104',
    features: ['Confidential 1-on-1 Counseling', 'Disability & Accessibility Advocates', 'International Scholar Advisory', 'Peer Mental Health Ambassadors']
  }
];

export const IMPORTANT_CAMPUS_INFO: ImportantInfoItem[] = [
  {
    id: 'info-campus-timings',
    title: 'Campus Timings',
    value: '07:00 AM – 10:30 PM',
    subtext: 'Campus gates open daily. Residential dorm entry curfew is strictly 11:00 PM with student ID verification.',
    category: 'timings',
    iconName: 'Clock',
    actionText: 'View Gate Policies'
  },
  {
    id: 'info-library-timings',
    title: 'Library Timings',
    value: '08:00 AM – 12:00 Midnight',
    subtext: 'Silent study zone accessible 24/7 during exam weeks (Oct 20 – Nov 15). RFID card access after 10 PM.',
    category: 'timings',
    iconName: 'BookOpen',
    actionText: 'Study Room Booking'
  },
  {
    id: 'info-help-desk',
    title: 'Campus Help Desk',
    value: 'Admin Block, Ground Floor',
    subtext: 'Central inquiries, lost & found, campus ID card reissuance, parking permits, and verification seals.',
    category: 'support',
    iconName: 'Compass',
    actionText: 'Ext. 4401 · helpdesk@campus.edu'
  },
  {
    id: 'info-emergency',
    title: 'Emergency Contact',
    value: '+1 (800) 555-0199 / 911',
    subtext: '24/7 Campus Security Rapid Response, Medical First Aid Unit, and Campus Emergency Ambulance Dispatch.',
    category: 'contact',
    iconName: 'ShieldAlert',
    actionText: 'Direct Security Hotline'
  },
  {
    id: 'info-student-support',
    title: 'Student Support & Wellness',
    value: 'Student Affairs Suite 102',
    subtext: 'Confidential psychological support, academic stress counseling, and student welfare assistance desk.',
    category: 'support',
    iconName: 'LifeBuoy',
    actionText: 'Book Confidential Session'
  }
];
