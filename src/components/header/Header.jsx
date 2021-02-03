import React from "react";
import Button from "../button/Button";
import styles from "./header.module.css";

const Header = ({ toggleForm, formStatus }) => {
  return (
    <div className={styles.Header}>
      <h3>Task Manager</h3>
      <Button
        clicked={toggleForm}
        text={formStatus ? "Close" : "Open"}
        style={
          formStatus
            ? {
                backgroundColor: "#E84A5F",
                padding: "4px 16px",
              }
            : {
                backgroundColor: "#99B898",
                padding: "4px 16px",
              }
        }
      />
    </div>
  );
};

export default Header;
