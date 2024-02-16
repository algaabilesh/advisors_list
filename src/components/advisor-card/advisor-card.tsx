import React, { FC } from "react";
import styles from "./advisor-card.module.css";
import cn from "classnames";
import { FilterOptionsByStatus } from "@/enums/enums";

type AdvisorCardProps = {
  advisor: Advisor;
};

const AdvisorCard: FC<AdvisorCardProps> = ({ advisor }) => {
  const {
    firstName,
    lastName,
    city,
    languages,
    reviewsNumber,
    isOnline,
    avatar,
  } = advisor;
  const statusClassNames = cn(styles.advisorStatus, {
    [styles.online]: isOnline,
    [styles.offline]: !isOnline,
  });

  return (
    <div className={styles.cardContainer}>
      <span className={statusClassNames}>
        {isOnline
          ? FilterOptionsByStatus.ONLINE
          : FilterOptionsByStatus.OFFLINE}
      </span>
      <img className={styles.advisorAvatar} src={avatar} alt="avatar" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h6>{city}</h6>
      <p>
        Number of reviews: {reviewsNumber} <br />
      </p>
      <div className={styles.advisorLanguages}>
        <h6>Languages</h6>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvisorCard;
