import React, { useEffect, useState } from "react";
import styles from "./SavedPrList.module.css";

const SavedPRList = () => {
  const [savedPRs, setSavedPRs] = useState([]);

  // Load saved PRs on mount
  useEffect(() => {
    const savedData = localStorage.getItem("openPRs");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (Array.isArray(parsed)) {
        setSavedPRs(parsed);
      }
    }
  }, []);

  if (savedPRs.length === 0) {
    return <p className={styles.empty}>No saved PRs yet.</p>;
  }

  return (
    <div className={styles.savedList}>
      <h3>Saved Pull Requests</h3>
      <div className={styles.listContainer}>
        {savedPRs.map((entry) => (
          <div
            key={`${entry.username}-${entry.selectedRepo}-${entry.selectedPR.number}`}
            className={styles.prItem}
          >
            <p>
              <strong>@{entry.username}</strong> / {entry.selectedRepo}
            </p>
            <p>
              #{entry.selectedPR.number} {entry.selectedPR.title}
            </p>
            <a
              href={entry.selectedPR.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openLink}
            >
              Open on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPRList;
