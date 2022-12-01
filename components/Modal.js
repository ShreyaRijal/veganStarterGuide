import styles from "../styles/Modal.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Modal({
  title,
  image,
  ingredients,
  instructions,
  showModal,
  setShowModal,
  imageAltText,
}) {
  return (
    <>
      {showModal ? (
        <div className={styles.modal}>
          <h3 className={styles.itemHeader}>{title}</h3>
          <div
            className={styles.itemClose}
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </div>
          <div className={styles.itemIngredients}>
            <h4 className={styles.bold}>Ingredients</h4>
            {
              <ul>
                {ingredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
            }
          </div>
          <div className={styles.itemInstructions}>
            <h4 className={styles.bold}>Instructions</h4>
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
              alt={imageAltText}
              width="520px"
              height="520px"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
