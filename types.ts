
export interface Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface SpecItem {
  label: string;
  value: string;
  detail: string;
}

export interface TierInfo {
  id: string;
  label: string;
  price: string;
  duration: string;
  description: string;
  perks: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Added VISUALIZER to SectionId to fix the reference error in ViewVisualizer.tsx
export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SCIENCE = 'science',
  MARKET = 'market',
  CONTACT = 'contact',
  VISUALIZER = 'visualizer',
}
