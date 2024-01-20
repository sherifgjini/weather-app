import React, { useState, ReactNode } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  children: ReactNode;
  iniciator: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children, iniciator }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isOpenClass = isOpen ? styles.open : "";

  return (
    <div className={`${styles.dropdown} ${isOpenClass}`}>
      <div className={styles.toggleButton} onClick={handleToggle}>
        {iniciator}
      </div>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  );
};

export default Dropdown;
