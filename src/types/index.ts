export type EventCategory = 'All' | 'Technology' | 'Coding' | 'Seminar' | 'Club';

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  category: 'Technology' | 'Coding' | 'Seminar' | 'Club';
  shortDescription: string;
  fullDescription: string;
  image: string;
  organizer: string;
  speaker?: string;
  seatsTotal: number;
  seatsBooked: number;
  highlights: string[];
}

export interface StudentResource {
  id: string;
  title: string;
  iconName: string;
  category: string;
  description: string;
  quickLinks: { label: string; url: string; external?: boolean }[];
  tags: string[];
}

export interface CampusFacility {
  id: string;
  title: string;
  iconName: string;
  category: string;
  description: string;
  hours: string;
  location: string;
  features: string[];
}

export interface ImportantInfoItem {
  id: string;
  title: string;
  value: string;
  subtext: string;
  category: 'timings' | 'contact' | 'support';
  iconName: string;
  actionText?: string;
  actionHref?: string;
}

export interface CampusClub {
  id: string;
  name: string;
  iconName: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  memberCount: number;
  meetingTime: string;
  location: string;
  lead: string;
  tags: string[];
  upcomingActivity: string;
}

export interface WhyFeature {
  title: string;
  description: string;
  iconName: string;
  metric: string;
  metricLabel: string;
}
