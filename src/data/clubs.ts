import { CampusClub } from '../types';

export const CAMPUS_CLUBS: CampusClub[] = [
  {
    id: 'club-coding',
    name: 'Coding Club',
    iconName: 'Code2',
    category: 'Engineering & Software',
    shortDescription: 'Competitive programming rounds, open-source sprints, code reviews, and regional ICPC challenge prep.',
    fullDescription: 'The premier student engineering community on campus. We organize weekly algorithmic challenges, build production open-source tools for campus use, and host mock interview marathons with alumni in top tech companies.',
    memberCount: 380,
    meetingTime: 'Every Wednesday · 5:00 PM',
    location: 'Computer Lab 3, CS Department',
    lead: 'Arjun Mehta & Sarah Lin',
    tags: ['Algorithms', 'Open Source', 'Hackathons', 'Systems'],
    upcomingActivity: 'Autumn Competitive Algorithmic League – Round 3'
  },
  {
    id: 'club-ai-robotics',
    name: 'AI & Robotics Club',
    iconName: 'Bot',
    category: 'Intelligence & Hardware',
    shortDescription: 'Autonomous drones, edge computer vision rovers, LLM agent experiments, and robotic arm kinematics.',
    fullDescription: 'Where modern artificial intelligence meets real-world mechanical and embedded engineering. Our members design custom PCB boards, train localized vision models, and compete in international collegiate robotics tournaments.',
    memberCount: 290,
    meetingTime: 'Every Thursday · 5:30 PM',
    location: 'Robotics Workshop & FabLab',
    lead: 'Maya Patel & Devansh Rao',
    tags: ['Agentic AI', 'Computer Vision', 'ROS2', 'Autonomous Systems'],
    upcomingActivity: 'Autonomous Campus Quad-Copter Test Flights'
  },
  {
    id: 'club-eco',
    name: 'Eco Club',
    iconName: 'Leaf',
    category: 'Sustainability & Action',
    shortDescription: 'Campus green initiatives, native flora afforestation, zero-waste audits, and clean energy advocacy.',
    fullDescription: 'Dedicated to transforming our university into a net-zero, ecologically resilient campus. We run rooftop hydroponic gardens, conduct energy audits across dormitories, and host environmental awareness summits.',
    memberCount: 210,
    meetingTime: 'Every Tuesday · 4:30 PM',
    location: 'Greenhouse & Environmental Center',
    lead: 'Chloe Henderson',
    tags: ['Net-Zero', 'Recycling', 'Biodiversity', 'Renewable Energy'],
    upcomingActivity: 'Campus Tree Canopy Mapping & Sensor Installation'
  },
  {
    id: 'club-cultural',
    name: 'Cultural Club',
    iconName: 'Palette',
    category: 'Arts & Performance',
    shortDescription: 'Stage theater, acoustic music jam sessions, regional festival showcases, and vibrant choreography.',
    fullDescription: 'The vibrant creative heartbeat of student campus life. We spearhead the annual inter-college cultural festival "Aura", weekly open mic nights, theatrical drama productions, and fine arts exhibits.',
    memberCount: 340,
    meetingTime: 'Every Friday · 6:00 PM',
    location: 'Open-Air Amphitheatre & Rehearsal Studio',
    lead: 'Rohan Kapoor & Zoe Vance',
    tags: ['Theater', 'Music', 'Festivals', 'Performing Arts'],
    upcomingActivity: 'Inter-College Autumn Acoustic Showcase'
  },
  {
    id: 'club-entrepreneurship',
    name: 'Entrepreneurship Club',
    iconName: 'Rocket',
    category: 'Venture & Startups',
    shortDescription: 'Startup incubator access, investor fireside chats, pitch battles, and product validation cohorts.',
    fullDescription: 'Empowering ambitious student founders to build defensible commercial startups. We provide micro-grant seed capital, legal formation guidance, UI/UX critique panels, and direct introductions to venture partners.',
    memberCount: 260,
    meetingTime: 'Every Monday · 5:00 PM',
    location: 'Startup Incubator, Suite 201',
    lead: 'Vikram Joshi & Aliyah Khan',
    tags: ['Seed Funding', 'Startups', 'Venture Capital', 'Product Pitch'],
    upcomingActivity: 'Campus Angel Pitch Night & Founder Demo Day'
  },
  {
    id: 'club-photography',
    name: 'Photography Club',
    iconName: 'Camera',
    category: 'Media & Visual Arts',
    shortDescription: 'Campus photojournalism, darkroom chemical processing, drone cinematography, and annual gallery prints.',
    fullDescription: 'Capturing moments, milestones, and perspectives across campus. We cover major athletic tournaments, college fests, and conduct masterclasses on manual camera exposure, lighting ratios, and Lightroom color grading.',
    memberCount: 185,
    meetingTime: 'Every Saturday · 11:00 AM',
    location: 'Media Studio B, Arts Center',
    lead: 'Lucas Kim',
    tags: ['Documentary', 'Drone Video', 'Portraiture', 'Exhibition'],
    upcomingActivity: 'Campus Monsoons & Architecture Photo Exhibition'
  }
];
