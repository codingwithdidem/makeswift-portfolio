import React from "react";
import classNames from "classnames";
import styles from "./glowCard.module.css";

type GlowCardProps = {
  pictureUrl?: string;
  className?: string;
  boxShadow?: {
    color?: string;
    offsetX?: string;
    offsetY?: string;
    blurRadius?: string;
    spreadRadius?: string;
  };
};
const GlowCard = ({
  pictureUrl,
  boxShadow = {
    color: "rgba(102, 94, 255, 0.9)",
    offsetX: "0px",
    offsetY: "0px",
    blurRadius: "118px",
    spreadRadius: "45px",
  },
  className,
}: GlowCardProps) => {
  return (
    <div className={classNames(styles.glowCard, className)}>
      <img
        src={pictureUrl}
        alt="picture"
        className={styles.image}
        style={{
          boxShadow: `${boxShadow.color} ${boxShadow.offsetX} ${boxShadow.offsetY} ${boxShadow.blurRadius} ${boxShadow.spreadRadius}`,
        }}
      />
    </div>
  );
};

export default GlowCard;
