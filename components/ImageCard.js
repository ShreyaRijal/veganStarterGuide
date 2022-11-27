import Image from 'next/image';

import styles from '../styles/ImageCard.module.css';
import GeneralCard from './GeneralCard';
import ExpertTip from './ExpertTip';

export default function ImageCard({
  imageUrl,
  cardText,
  cardTitle,
  sourceUrl,
  expertTip,
  shadow,
  isClickable,
}) {
  return (
    <GeneralCard bgColour={'rgba(var(--white), 0.8)'} isClickable={isClickable}>
      <Image
        src={imageUrl}
        alt={'cardImageFor' + imageUrl}
        width="420px"
        height="250px"
      />
      <div className={styles.cardTitle}>{cardTitle}</div>
      <div className={styles.cardText}>
        {cardText}
        {sourceUrl ? (
          <span className={styles.readMoreText}>
            Read more <a href={sourceUrl}>here</a>
          </span>
        ) : null}
      </div>
      {expertTip ? <ExpertTip tip={expertTip} /> : null}
    </GeneralCard>
  );
}
