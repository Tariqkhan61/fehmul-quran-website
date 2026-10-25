export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Course {
  title: string;
  tagline: string;
  description: string;
  iconName: 'BookOpen' | 'AudioLines' | 'BookMarked' | 'Scroll';
}

export const TEAM: TeamMember[] = [
  {
    name: 'Syed Hussain Ahmad Madani',
    role: 'Director, Markaz Quran O Sunna',
    bio: 'A respected scholar with decades of experience in Quranic instruction, Syed Hussain Ahmad Madani guides Markaz Quran O Sunna with wisdom and devotion.',
    image: '/assets/images/WhatsApp_Image_2026-10-24_at_3.55.40_PM.jpeg',
  },
  {
    name: 'Maqsood Khan',
    role: 'Secretary, Islamic Cultural Centre Trust',
    bio: 'Maqsood Khan helps guide the Islamic Cultural Centre Trust with dedicated service and strategic leadership, ensuring students receive an exceptional, well-rounded educational experience.',
    image: '/assets/images/WhatsApp_Image_2026-10-24_at_4.20.52_PM.jpeg',
  },
  {
    name: 'Zafar Siddiqi',
    role: 'Organizer',
    bio: 'Coordinating programs, facilities, and community engagement, Zafar Siddiqi brings order and heart to the day-to-day life of the institution.',
    image: '/assets/images/WhatsApp_Image_2026-10-24_at_4.11.57_PM.jpeg',
  },
];

export const ULAMA = [
  {
    name: 'Mufti Ata ul Rahman',
    title: 'Islamic Scholar',
    affiliation: 'Prominent scholar and teacher of Islamic knowledge',
  },
  {
    name: 'Molana Farooq Ahmad',
    title: 'Khatib',
    affiliation: 'Jama Masjid Abu Huzaifa',
  },
];

export const COURSES: Course[] = [
  {
    title: 'Arabic Grammar',
    tagline: 'Learn the language of the Quran',
    description:
      'Master the foundations of Arabic morphology and syntax so every word of the Quran becomes clear, precise, and deeply understood.',
    iconName: 'BookOpen',
  },
  {
    title: 'Tajweed',
    tagline: 'Perfect your recitation',
    description:
      'Learn the rules of proper pronunciation and articulation, reciting the Quran with the beauty and accuracy it was revealed with.',
    iconName: 'AudioLines',
  },
  {
    title: 'Quran',
    tagline: 'Memorization and Tafseer',
    description:
      'Journey through memorization and in-depth Tafseer, uncovering the meanings and wisdom behind every verse of the Holy Book.',
    iconName: 'BookMarked',
  },
  {
    title: 'Hadees',
    tagline: 'Study the Prophetic traditions',
    description:
      'Explore the sayings and actions of the Prophet ﷺ, building a life rooted in his guidance, character, and timeless teachings.',
    iconName: 'Scroll',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Our Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export const GALLERY_IMAGES = [
  '/assets/images/WhatsApp_Image_2026-10-24_at_4.04.03_PM.jpeg',
  'https://images.pexels.com/photos/40053969/pexels-photo-40053969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/31293058/pexels-photo-31293058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8332107/pexels-photo-8332107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/36519373/pexels-photo-36519373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/40310859/pexels-photo-40310859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/31679271/pexels-photo-31679271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/40053905/pexels-photo-40053905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/27907317/pexels-photo-27907317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
