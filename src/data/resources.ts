import { StudentResource } from '../types';

export const STUDENT_RESOURCES: StudentResource[] = [
  {
    id: 'res-academic',
    title: 'Academic Resources',
    iconName: 'BookOpen',
    category: 'Curriculum & Records',
    description: 'Instant access to current course syllabi, semester academic calendars, official grade guidelines, and exam schedules.',
    quickLinks: [
      { label: 'Fall 2026 Academic Calendar', url: '#calendar' },
      { label: 'Course Syllabi & Prerequisites', url: '#syllabi' },
      { label: 'Midterm & Final Exam Schedule', url: '#exam-schedule' },
      { label: 'Academic Regulations & Grading Handbook', url: '#handbook' }
    ],
    tags: ['Curriculum', 'Exams', 'Syllabus', 'Policies'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'res-career',
    title: 'Placement & Career',
    iconName: 'Briefcase',
    category: 'Professional Growth',
    description: 'Empowering students with verified internship portals, campus hiring schedules, resume clinics, and mock interviews.',
    quickLinks: [
      { label: 'Campus Placement Portal 2026', url: '#placement-portal' },
      { label: 'Summer Internship Opportunity Board', url: '#internships' },
      { label: 'AI Resume Review & Template Toolkit', url: '#resume-tools' },
      { label: 'Alumni Mentorship Network Sign-up', url: '#alumni' }
    ],
    tags: ['Careers', 'Internships', 'Interviews', 'Networking'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'res-coding',
    title: 'Coding Resources',
    iconName: 'Terminal',
    category: 'Developer Tools',
    description: 'Developer packs, GPU cluster credentials, algorithm repositories, and standard campus environment configurations.',
    quickLinks: [
      { label: 'Campus GitHub Student Developer Hub', url: '#github-hub' },
      { label: 'High-Performance Cluster SSH Setup', url: '#cluster-ssh' },
      { label: 'Curated Competitive Coding Roadmap', url: '#dsa-roadmap' },
      { label: 'Campus Open Source Repositories', url: '#open-source' }
    ],
    tags: ['Development', 'GPU Cluster', 'GitHub', 'DSA'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'res-library',
    title: 'Digital Library',
    iconName: 'Library',
    category: 'Research & Literature',
    description: 'Direct institutional access to IEEE Xplore, ACM Digital Library, SpringerLink, e-journals, and master theses.',
    quickLinks: [
      { label: 'IEEE Xplore Institutional Gateway', url: '#ieee-portal' },
      { label: 'ACM Digital Library Full-Text Search', url: '#acm-search' },
      { label: 'Off-Campus EZProxy Login Guide', url: '#proxy-guide' },
      { label: 'Research Paper Citation Style Guides', url: '#citation-guide' }
    ],
    tags: ['IEEE', 'ACM', 'Research Papers', 'Proxy Access'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'res-forms',
    title: 'Student Forms',
    iconName: 'FileText',
    category: 'Administrative Services',
    description: 'Downloadable and digital administrative petitions, elective change slips, fee receipts, and official bonafide requests.',
    quickLinks: [
      { label: 'Course Add/Drop & Elective Change Form', url: '#elective-form' },
      { label: 'Bonafide Certificate & Transcript Request', url: '#bonafide' },
      { label: 'Campus Hostel & Leave Permission Slip', url: '#hostel-leave' },
      { label: 'Merit Scholarship Renewal Application', url: '#scholarship' }
    ],
    tags: ['Forms', 'Transcripts', 'Petitions', 'Bonafide'],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'res-learning',
    title: 'Learning Resources',
    iconName: 'GraduationCap',
    category: 'Self-Paced Education',
    description: 'Lecture video archives, open-access textbook repositories, faculty curated problem sets, and peer tutoring booking.',
    quickLinks: [
      { label: 'Recorded Course Lectures Archive', url: '#video-lectures' },
      { label: 'Open Educational Courseware & Notes', url: '#open-notes' },
      { label: 'Book 1-on-1 Peer Tutoring Session', url: '#peer-tutoring' },
      { label: 'Department Honors Seminar Reading List', url: '#reading-list' }
    ],
    tags: ['Lecture Videos', 'Tutoring', 'Notes', 'Courseware'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80'
  }
];
