import styles from "./Photocard.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Back({ date, backDesc, recording }) {
  return (
    <div className={styles.back}>
      <p className={styles.backDate}>{date}</p>
      <p className={styles.backDesc}>{backDesc}</p>
      <audio controls className={styles.backRecording}>
        <source src={recording} />
      </audio>
    </div>
  );
}

export default Back;
