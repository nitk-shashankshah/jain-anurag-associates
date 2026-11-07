import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { Icon } from '../../../../components/common/Icon/Icon';
import { TeamAvatar } from '../../../../components/ui/TeamAvatar/TeamAvatar';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { TEAM, TEAM_INTRO } from '../../../../constants/team';
import styles from './TeamSection.module.css';

/**
 * The partners, one profile card each. The hero's "Meet the team" link lands here
 * (`#team`). Every detail line is optional and appears only once the client supplies it,
 * so a placeholder card is short and says so rather than carrying invented credentials.
 */
export function TeamSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} id="team" tone="warm" className={styles.section} aria-labelledby="team-title">
      <Container>
        <SectionTitle
          id="team-title"
          eyebrow={TEAM_INTRO.eyebrow}
          eyebrowStyle="rule"
          title={TEAM_INTRO.title}
          description={TEAM_INTRO.description}
        />

        <ul className={`${styles.grid} reveal-group`}>
          {TEAM.map((member) => (
            <li key={member.id} className={styles.card}>
              <TeamAvatar member={member} size="lg" />

              <div className={styles.head}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                {member.qualifications && member.qualifications.length > 0 && (
                  <p className={styles.quals}>{member.qualifications.join(' · ')}</p>
                )}
                {member.placeholder && <p className={styles.pending}>Profile to follow</p>}
              </div>

              {member.bio && <p className={styles.bio}>{member.bio}</p>}

              {(member.experience || member.background?.length || member.memberships?.length) && (
                <dl className={styles.facts}>
                  {member.experience && (
                    <div>
                      <dt>Experience</dt>
                      <dd>{member.experience}</dd>
                    </div>
                  )}
                  {member.background && member.background.length > 0 && (
                    <div>
                      <dt>Background</dt>
                      <dd>{member.background.join('; ')}</dd>
                    </div>
                  )}
                  {member.memberships && member.memberships.length > 0 && (
                    <div>
                      <dt>Memberships</dt>
                      <dd>{member.memberships.join(', ')}</dd>
                    </div>
                  )}
                </dl>
              )}

              {member.focusAreas && member.focusAreas.length > 0 && (
                <ul className={styles.focus} aria-label={`${member.name}'s areas of practice`}>
                  {member.focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              )}

              {(member.linkedin || member.email) && (
                <div className={styles.links}>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <Icon name="linkedin" size={16} /> LinkedIn
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className={styles.link}>
                      <Icon name="mail" size={16} /> Email
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
