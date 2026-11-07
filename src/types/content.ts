import type { IconName } from '../components/common/Icon/Icon';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Cover illustration shown across the top of the card. */
  image?: string;
}

/** Icon, heading and a line or paragraph of substance. Rendered by FeatureCard. */
export interface FeatureItem {
  title: string;
  description: string;
  icon: IconName;
  /** Makes the whole card a link to this route. */
  href?: string;
  /** Text for the link row on centred cards; names the destination page. */
  linkLabel?: string;
}

export interface IndustryItem {
  name: string;
  description?: string;
  icon: IconName;
}

export interface CountryItem {
  name: string;
  flag: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

/** One person in constants/team.ts. Optional fields render only when supplied. */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Post-nominal qualifications, e.g. ['FCA', 'DISA']. */
  qualifications?: string[];
  /** As it should be published, e.g. '15+ years'. Only on the client's word. */
  experience?: string;
  focusAreas?: string[];
  /** Prior firms, industries or roles, one line each. */
  background?: string[];
  memberships?: string[];
  bio?: string;
  photo?: string;
  linkedin?: string;
  email?: string;
  /** Still awaiting the client's details: the card says the profile is to follow. */
  placeholder?: boolean;
}
