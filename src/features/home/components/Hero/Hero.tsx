import { useState } from 'react';
import { Button } from '../../../../components/common/Button/Button';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { Container } from '../../../../components/common/Container/Container';
// Restore with the highlights list below (unused imports fail the build).
// import { Icon, type IconName } from '../../../../components/common/Icon/Icon';
import { ImageSlider, type Slide } from '../../../../components/ui/ImageSlider/ImageSlider';
// import heroImage from '../../../../assets/images/hero-mumbai-advisory.jpg';
// import networkImage from '../../../../assets/images/global-india-network.jpg';
// import raceImage from '../../../../assets/images/hero-race-ahead.jpg';
/* Desktop uses the client's source artwork directly, at the client's request. It is a
   2.1 MB PNG and the LCP element; a JPEG export (india-connectors.jpg) was 169 KB. */
import indiaMap from '../../../../assets/images/india_connectors.png';
/* The same artwork for phones, whole: india_connectors.png resized to 900px wide, JPEG,
   88 KB (not cropped, which cut off the right of the map). Regenerate it if the PNG changes. */
import indiaMapMobile from '../../../../assets/images/india-connectors-mobile.jpg';
import { HERO, HERO_TEAM } from '../../../../constants/home-content';
import { TEAM } from '../../../../constants/team';
import { TeamAvatar } from '../../../../components/ui/TeamAvatar/TeamAvatar';
import styles from './Hero.module.css';

/* Hidden for now along with its markup in the closing row; uncomment all three together
   (this list, the Icon import above and the <ul> in the JSX) to bring the highlights back. */
// const HIGHLIGHTS: { label: string; icon: IconName }[] = [
//   { label: 'Business setup', icon: 'building' },
//   { label: 'GST & taxation', icon: 'percent' },
//   { label: 'Accounting', icon: 'ledger' },
//   { label: 'Ongoing compliance', icon: 'shield' },
// ];

/* Matches the layout breakpoint in Hero.module.css; below it the hero is copy only. */
const BANNER_MIN_WIDTH = 861;

/* Headlines a banner can carry. `main` is also the only one shown on phones. */
const HEADLINES = {
  main: (
    <>
      Navigating Cross-Border Business with{' '}
      <span className={styles.accent}>Confidence</span>
    </>
  ),
  race: (
    <>
      Always stay ahead with our expert <span className={styles.accent}>tax consultation</span>
    </>
  ),
};

type HeadlineKey = keyof typeof HEADLINES;
const HEADLINE_KEYS = Object.keys(HEADLINES) as HeadlineKey[];

/*
 * All banners are illustrative, so their alt text is empty: everything they depict is
 * already stated in the headline and lead.
 *
 * All three are the same 1600x695 frame, which is the shape the hero takes (see
 * Hero.module.css), so each one shows whole. A new banner must match that size, or it
 * will be cropped. Anchored right so that, where the copy makes the hero taller than the
 * frame, it is the navy on the left that is trimmed rather than the subject.
 */
const SLIDES: (Slide & { headline: HeadlineKey })[] = [
  { src: indiaMap, alt: '', width: 1451, height: 736, headline: 'main' },
  /*{ src: networkImage, alt: '', width: 1600, height: 695, objectPosition: 'right top', headline: 'main' },
  { src: raceImage, alt: '', width: 1600, height: 695, objectPosition: 'right top', headline: 'race' },*/
];

/**
 * The hero answers three questions above the fold: what the firm does, who it is for, and
 * what to do next.
 *
 * The artwork runs full bleed across the whole hero, shown whole rather than cropped. It
 * carries its own navy weighting on the left, which is where the copy sits, so there is
 * no gradient overlay on top of it.
 *
 * Below the layout breakpoint there is no room for a photograph beside the copy, and
 * stacking one underneath only pushed it past the fold where it did no work, so the
 * banner is dropped entirely on phones. It is skipped in the render rather than hidden in
 * CSS: `display: none` would still have cost a phone both downloads.
 */
export function Hero() {
  const showBanner = useMediaQuery(`(min-width: ${BANNER_MIN_WIDTH}px)`);
  const [slideIndex, setSlideIndex] = useState(0);
  /* No banner, no banner headline: a phone always reads the main one. */
  const headline: HeadlineKey = showBanner ? SLIDES[slideIndex].headline : 'main';

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {showBanner && (
        <ImageSlider
          slides={SLIDES}
          className={styles.banner}
          label="Jainanurag & Associates banner"
          onIndexChange={setSlideIndex}
        />
      )}

      <Container width="edge" className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} rise`}>
            {/* Decorative: the label already says cross-border. */}
            <span className={styles.flags} aria-hidden="true">
              {HERO.flags.map((country) => (
                <img key={country.name} src={country.flag} alt="" width={24} height={16} className={styles.flag} />
              ))}
            </span>
            {HERO.eyebrow}
          </p>
          {/* Phones get a small copy of the map in the flow instead of the banner. Rendered
              only without the banner, so neither width downloads the other's image. */}
          {!showBanner && (
            <img src={indiaMapMobile} alt="" width={900} height={457} className={`${styles.mobileMap} rise rise-1`} />
          )}
          <p className={`${styles.kicker} rise rise-1`}>{HERO.kicker}</p>

          {/*
            Every headline is rendered, stacked in one grid cell, so the h1 is always as tall
            as the longest and the lead below never jumps when a shorter one fades in. Only
            the visible one is exposed, so the h1 reads as a single headline.
          */}
          <h1 id="hero-title" className={`${styles.title} rise rise-1`}>
            {HEADLINE_KEYS.map((key) => (
              <span
                key={key}
                className={`${styles.headline} ${key === headline ? styles.headlineActive : ''}`}
                aria-hidden={key === headline ? undefined : true}
              >
                {HEADLINES[key]}
              </span>
            ))}
          </h1>

          <p className={`${styles.lead} rise rise-2`}>{HERO.lead}</p>

          <div className={`${styles.actions} rise rise-3`}>
            <Button to="/contact" variant="primary" withArrow className={styles.ctaPrimary}>
              Talk to an Expert
            </Button>
            <Button to="/services" variant="secondary">Explore Our Services</Button>
          </div>

          {/* The closing row: who the visitor deals with on the left, the four service
              highlights on the right, under the map. Stacks on narrow screens. */}
          <div className={`${styles.foot} rise rise-3`}>
            {/* Who the visitor will deal with, linking down to the profiles in TeamSection. */}
            <div className={styles.team}>
              <span className={styles.teamAvatars}>
                {TEAM.slice(0, 3).map((member) => (
                  <TeamAvatar key={member.id} member={member} />
                ))}
              </span>
              <div className={styles.teamCopy}>
                <p className={styles.teamTitle}>{HERO_TEAM.title}</p>
                <p className={styles.teamText}>{HERO_TEAM.text}</p>
                {/* A plain anchor: same page, so the browser scrolls to it natively. */}
                <a href="#team" className={styles.teamLink}>
                  {HERO_TEAM.link} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/*<ul className={styles.highlights}>
              {HIGHLIGHTS.map((item) => (
                <li key={item.label}>
                  <span className={styles.highlightIcon}>
                    <Icon name={item.icon} size={16} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>*/}
          </div>
        </div>
      </Container>
    </section>
  );
}
