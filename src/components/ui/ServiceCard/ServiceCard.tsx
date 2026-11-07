import { Link } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  href: string;
  /** Optional cover illustration across the top of the card. */
  image?: string;
}

/**
 * The whole card is one link, so the hit area matches what looks clickable. The arrow and
 * "Learn more" are decorative repeats of that link rather than a second tab stop.
 */
export function ServiceCard({ index, title, description, href, image }: ServiceCardProps) {
  return (
    <li className={styles.item}>
      <Link to={href} className={styles.card}>
        {image && (
          <div className={styles.media}>
            {/* Decorative: the title says what the illustration shows. Below the fold, so lazy. */}
            <img src={image} alt="" width={1200} height={670} loading="lazy" decoding="async" className={styles.image} />
          </div>
        )}
        <div className={styles.body}>
          <span className={styles.index} aria-hidden="true">{String(index).padStart(2, '0')}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <span className={styles.more}>
            Learn more
            <Icon name="arrowRight" size={16} className={styles.arrow} />
          </span>
        </div>
      </Link>
    </li>
  );
}
