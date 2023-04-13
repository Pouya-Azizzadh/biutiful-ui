import React from "react";
import styles from "../../style";

const Paragraph = ({ children, className }) => {
  return (
    <p className={`${styles.paragraph}  mt-5 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
