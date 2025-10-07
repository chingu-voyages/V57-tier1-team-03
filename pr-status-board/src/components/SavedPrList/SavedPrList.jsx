import React, { useEffect, useState } from "react";
import styles from "./SavedPrList.module.css";

const SavedPRList = () => {
  const [savedPRs, setSavedPRs] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("openPRs");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (Array.isArray(parsed)) {
        setSavedPRs(parsed);
      }
    }
  }, []);

  // Hardcoded placeholder
  const dataToRender =
    savedPRs.length > 0
      ? savedPRs
      : [
          {
            username: "—",
            repo: "—",
            number: "—",
            title: "—",
            author: "—",
            date: "—",
            action: "—",
            url: "#",
          },
        ];

  return (
    <div className={styles.tableWrapper}>
      <h3 className={styles.heading}>Saved Pull Requests</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>PR #</th>
            <th>Title</th>
            <th>Author</th>
            <th>Created</th>
            <th>Last Action</th>
            <th>Repository</th>
            <th>Open in GitHub</th>
          </tr>
        </thead>
        <tbody>
          {dataToRender.map((entry, index) => (
            <tr key={`${entry.username}-${entry.repo}-${entry.number}-${index}`}>
              <td>{entry.number}</td>
              <td>{entry.title}</td>
              <td>@{entry.author}</td>
              <td>{entry.date}</td>
              <td>{entry.action}</td>
              <td>
                {entry.username !== "—"
                  ? `@${entry.username} / ${entry.repo}`
                  : "—"}
              </td>
              <td>
                {entry.url !== "#" ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.openLink}
                  >
                    Open
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedPRList;
