import React from "react";

import styles from "./CardWarp.module.css";

const CardWarp = props => {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
}

export default CardWarp;