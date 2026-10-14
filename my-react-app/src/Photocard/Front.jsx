import styles from "./Photocard.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Component } from "react";

function Front({ photo, frontDesc }) {
  return (
    <div>
      <div className={styles.front}>
        <img className={styles.frontPhoto} src={photo} alt="photo" />
        <p className={styles.frontDesc}>{frontDesc}</p>
      </div>
    </div>
  );
}

export default Front;
