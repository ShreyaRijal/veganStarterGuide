import Image from 'next/image';

import styles from '../styles/ImageCard.module.css';
import GeneralCard from './GeneralCard';
import ExpertTip from './ExpertTip';

export default function ImageCard({
  imageUrl,
  cardText,
  cardTitle,
  sourceUrl,
  readMoreText,
  expertTip,
  isClickable,
}) {
  return (
    <GeneralCard bgColour={'rgba(var(--white), 0.8)'} isClickable={isClickable}>
      <Image
        src={imageUrl}
        alt={'cardImageFor' + imageUrl}
        width="420px"
        height="250px"
        layout="intrinsic"
      />
      <div className={styles.cardTitle}>{cardTitle}</div>
      <div className={styles.cardText}>
        {cardText}
        {sourceUrl ? (
          <a className={styles.readMoreText} href={sourceUrl}>
            {readMoreText} here
          </a>
        ) : null}
      </div>
      {expertTip ? <ExpertTip tip={expertTip} /> : null}
    </GeneralCard>
  );
}
