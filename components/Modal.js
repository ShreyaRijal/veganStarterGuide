import styles from '../styles/Modal.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Modal({
  title,
  image,
  ingredients,
  instructions,
  showModal,
  setShowModal,
}) {
  return (
    <>
      {showModal ? (
        <div className={styles.modal}>
          <h2 className={styles.itemHeader}>{title}</h2>
          <div
            className={styles.itemClose}
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </div>
          <div className={styles.itemIngredients}>
            <div className={styles.bold}>Ingredients</div>
            {
              <ul>
                {ingredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
            }
          </div>
          <div className={styles.itemInstructions}>
            <div className={styles.bold}>Instructions</div>
            {
              <ul>
                {instructions.map((instruction, index) => {
                  return <li key={index}>{instruction}</li>;
                })}
              </ul>
            }
          </div>
          <div className={styles.itemImage}>
            <Image
              src={image}
              alt={'ImageFor' + image}
              width="520px"
              height="520px"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
