import type { TeamMember } from '../types/content';

/**
 * The firm's people. The shape follows what CA practices conventionally publish for each
 * partner: name, designation, professional qualifications, experience, areas of practice,
 * prior experience, memberships, a short bio and a LinkedIn profile. Every field except
 * name and role is optional and renders only when filled, so nothing is shown that the
 * client has not supplied.
 *
 * TODO(client): replace both entries with the real partners. For each one we need:
 *   - full name and designation (e.g. Founding Partner, Partner)
 *   - qualifications as they should appear (e.g. FCA, ACS, DISA, LLB)
 *   - years of post-qualification experience, if it is to be published
 *   - areas of practice, prior firms or industries, professional memberships
 *   - a 60-100 word bio and a LinkedIn URL
 *   - a square headshot, at least 600x600, on a plain background
 * Then delete `placeholder: true`. Until then the cards say plainly that the profile is
 * to follow, rather than inventing credentials (see "Content Rules" in CLAUDE.md).
 */
export const TEAM: TeamMember[] = [
  {
    id: 'partner-1',
    name: 'Partner',
    role: 'Chartered Accountant',
    bio: 'A full profile, covering qualifications, experience and areas of practice, will be published here shortly.',
    placeholder: true,
  },
  {
    id: 'partner-2',
    name: 'Partner',
    role: 'Chartered Accountant',
    bio: 'A full profile, covering qualifications, experience and areas of practice, will be published here shortly.',
    placeholder: true,
  },
];

export const TEAM_INTRO = {
  eyebrow: 'Our team',
  title: 'The People Behind Your Engagement',
  /* Restates the client's own "direct partner involvement" (ABOUT_HIGHLIGHTS); no new claim. */
  description: 'Direct partner involvement on every engagement, from the first conversation onwards.',
};
