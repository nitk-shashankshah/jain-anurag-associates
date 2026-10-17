import { Link } from 'react-router-dom';
import { Icon, type IconName } from '../../common/Icon/Icon';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
  /** Icon above the text rather than beside it, for narrow cards in a four-up row. */
  stacked?: boolean;
  /**
   * Everything centred on the card, with a round icon plate and a link row along the
   * bottom (krystal7's practice tiles). Needs `href` and `linkLabel` to show the link.
   */
  centered?: boolean;
  /**
   * Makes the whole card a link. The title is the link and its hit area is stretched over
   * the card, so a screen reader hears one link named by the title, not a card of text.
   * On a centred card with a `linkLabel`, the link row carries it instead.
   */
  href?: string;
  linkLabel?: string;
}

/** Used for trust indicators and differentiators: icon, heading, one line of substance. */
export function FeatureCard({ icon, title, description, tone = 'light', stacked = false, centered = false, href, linkLabel }: FeatureCardProps) {
  const linkRow = Boolean(href && centered && linkLabel);

  return (
    <li
      className={`${styles.card} ${tone === 'dark' ? styles.dark : ''} ${stacked ? styles.stacked : ''} ${centered ? styles.centered : ''} ${href ? styles.linked : ''}`}
    >
      <span className={styles.iconWrap}>
        <Icon name={icon} size={22} />
      </span>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {href && !linkRow ? (
            <Link to={href} className={styles.link}>
              {title}
              <Icon name="arrowRight" size={16} className={styles.arrow} />
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
      {linkRow && href && (
        <Link to={href} className={`${styles.link} ${styles.linkRow}`}>
          {linkLabel}
          <Icon name="arrowRight" size={14} className={styles.arrow} />
        </Link>
      )}
    </li>
  );
}
