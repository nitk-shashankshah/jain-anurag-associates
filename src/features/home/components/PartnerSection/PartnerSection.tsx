import { Container } from '../../../../components/common/Container/Container';
import { Section } from '../../../../components/common/Section/Section';
import { SectionTitle } from '../../../../components/common/SectionTitle/SectionTitle';
import { FeatureCard } from '../../../../components/ui/FeatureCard/FeatureCard';
import { useInViewOnce } from '../../../../hooks/useInViewOnce';
import { PARTNER, PARTNER_PILLARS, PARTNER_TAGS } from '../../../../constants/home-content';
import styles from './PartnerSection.module.css';

/**
 * The opening argument: why India needs an adviser, then the four things the firm brings
 * to it. Laid out after krystal7's practice band — ruled eyebrow, centred heading, a row
 * of centred tiles, and a closing line underneath — in the brand's navy and gold. The
 * second paragraph and the tags, which used to sit beside the elephant artwork, close the
 * section as that line.
 */
export function PartnerSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <Section ref={ref} data-inview={inView} tone="warm" className={styles.section} aria-labelledby="partner-title">
      <Container>
        <SectionTitle
          id="partner-title"
          eyebrow={PARTNER.eyebrow}
          eyebrowStyle="rule"
          title={`${PARTNER.title[0]} ${PARTNER.title[1]}`}
          description={PARTNER.body[0]}
        />

        <ul className={`grid ${styles.grid} reveal-group`}>
          {PARTNER_PILLARS.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              href={item.href}
              linkLabel={item.linkLabel}
              centered
            />
          ))}
        </ul>

        <div className={`${styles.close} reveal`}>
          <p className={styles.body}>{PARTNER.body[1]}</p>
          <ul className={styles.tags}>
            {PARTNER_TAGS.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
