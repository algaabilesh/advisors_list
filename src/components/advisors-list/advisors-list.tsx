import React, { FC } from "react";
import styles from "./advisors-list.module.css";
import AdvisorCard from "../advisor-card";

type AdvisorsListProps = {
  advisors: Advisor[];
};

const AdvisorsList: FC<AdvisorsListProps> = ({ advisors }) => {
  return (
    <div className={styles.advisorsContainer}>
      {advisors.map((advisor) => (
        <AdvisorCard key={advisor.id} advisor={advisor} />
      ))}
    </div>
  );
};

export default AdvisorsList;
