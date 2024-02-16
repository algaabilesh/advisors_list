import React, { ChangeEvent, FC } from "react";
import styles from "./select.module.css";

type SelectProps = {
  options: Option[];
  onOptionSelected: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, onOptionSelected }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onOptionSelected(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className={styles.selectArrow} />
    </div>
  );
};

export default Select;
