import { Icon } from '../../common/Icon/Icon';
import type { TeamMember } from '../../../types/content';
import styles from './TeamAvatar.module.css';

interface TeamAvatarProps {
  member: TeamMember;
  size?: 'sm' | 'lg';
}

/**
 * A headshot when the client has supplied one, otherwise a neutral figure. Initials are
 * not used for placeholders: "Partner" would render as a "P" and read as a real person.
 * Decorative in both places it appears, because the name is always printed beside it.
 */
export function TeamAvatar({ member, size = 'sm' }: TeamAvatarProps) {
  return (
    <span className={`${styles.avatar} ${styles[size]}`} aria-hidden="true">
      {member.photo ? (
        <img src={member.photo} alt="" loading="lazy" decoding="async" />
      ) : (
        <Icon name="user" size={size === 'lg' ? 40 : 20} />
      )}
    </span>
  );
}
