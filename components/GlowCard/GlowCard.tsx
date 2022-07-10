import React from "react";
import classNames from "classnames";
import styles from "./GlowCard.module.css";

type GlowCardProps = {
  pictureUrl: string;
  className?: string;
};
const GlowCard = ({ pictureUrl, className }: GlowCardProps) => {
  return (
    <div className={classNames(styles.glowCard, className)}>
      <img src={pictureUrl} alt="picture" className={styles.image} />
    </div>
  );
};

export default GlowCard;
