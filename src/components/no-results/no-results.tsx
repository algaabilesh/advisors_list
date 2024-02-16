import React, { FC } from "react";
import styles from "./no-results.module.css";

const NoResults: FC = () => {
  return (
    <section className={styles.noResultsContainer}>
      <article>
        <h1>No results Found</h1>
        <p>
          Sorry, but nothing matched your filters Please try again with some
          another filters.
        </p>
      </article>
    </section>
  );
};

export default NoResults;
