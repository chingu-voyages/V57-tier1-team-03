import React, { useState, useEffect } from "react";
import styles from "./OpenTop.module.css";
import SavedPRList from "../SavedPrList/SavedPrList";
import PRStatusGraph from "../PrStatusGraph/PrStatusGraph";

const OpenPrTop = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [prs, setPrs] = useState([]);
  const [selectedPR, setSelectedPR] = useState(null);
  // const [savedPRs, setSavedPRs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Load saved PRs on mount
  useEffect(() => {
    const savedData = localStorage.getItem("openPRs");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (Array.isArray(parsed)) {
        // setSavedPRs(parsed);
      }
    }
  }, []);

  // 🔹 Save handler
  const handleSave = () => {
    console.log("handleSave called", { username, selectedRepo, selectedPR });
    if (!username || !selectedRepo || !selectedPR) {
      alert("Nothing to save yet!");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("openPRs") || "[]");
    const filtered = existing.filter(
      (item) =>
        !(
          item.username === username &&
          item.selectedRepo === selectedRepo &&
          item.selectedPR.number === selectedPR.number
        )
    );

    const updated = [...filtered, { username, selectedRepo, selectedPR }];
    localStorage.setItem("openPRs", JSON.stringify(updated));
    // setSavedPRs(updated);
    console.log("Saved:", updated);
    alert(`Saved PR #${selectedPR.number} for ${username}/${selectedRepo}`);
  };

  // 🔹 Fetch repos for user
  const fetchRepos = async () => {
    if (!username) return;
    try {
      setLoading(true);
      setError("");
      setRepos([]);
      setPrs([]);
      setSelectedPR(null);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) throw new Error("Failed to fetch repos");
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch PRs for selected repo
  const fetchPRs = async (repoName) => {
    if (!repoName || !username) return;
    try {
      setLoading(true);
      setError("");
      setPrs([]);
      setSelectedPR(null);

      const res = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/pulls?state=open`
      );
      if (!res.ok) throw new Error("Failed to fetch PRs");
      const data = await res.json();
      setPrs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Top bar: username + fetch button */}
      <div className={styles.topBar}>
        <input
          type="text"
          placeholder="GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <div className={styles.PRbuttons}>
          <button onClick={fetchRepos} className={styles.fetchBtn}>
            Fetch Repos
          </button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {/* Repo Dropdown */}
      {repos.length > 0 && (
        <div className={styles.dropdownBox}>
          <label>Select Repository</label>
          <select
            value={selectedRepo}
            onChange={(e) => {
              const repoName = e.target.value;
              setSelectedRepo(repoName);
              if (repoName) fetchPRs(repoName);
            }}
            className={styles.dropdown}
          >
            <option value="">-- Select Repo --</option>
            {repos.map((repo) => (
              <option key={repo.id} value={repo.name}>
                {repo.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* PRs Dropdown */}
      {prs.length > 0 && (
        <div className={styles.dropdownBox}>
          <label>Select PR</label>
          <select
            value={selectedPR ? selectedPR.number : ""}
            onChange={(e) => {
              const prNumber = parseInt(e.target.value);
              setSelectedPR(
                isNaN(prNumber)
                  ? null
                  : prs.find((pr) => pr.number === prNumber)
              );
            }}
            className={styles.dropdown}
          >
            <option value="">-- Select PR --</option>
            {prs.map((pr) => (
              <option key={pr.id} value={pr.number}>
                #{pr.number} {pr.title}
              </option>
            ))}
          </select>
        </div>
      )}
      {prs.length === 0 && selectedRepo && !loading && (
        <p>No open PRs found for this repository.</p>
      )}

      {/* Save Button */}
      {selectedPR && (
        <div className={styles.saveBox}>
          <button onClick={handleSave} className={styles.saveBtn}>
            Save This PR
          </button>
        </div>
      )}

      {/* PR Details Card */}
      {selectedPR && (
        <div className={styles.detailsCard}>
          <h3>PR number: #{selectedPR.number}</h3>
          <p>
            <strong>Title:</strong> {selectedPR.title}
          </p>
          <p>
            <strong>Author:</strong> @{selectedPR.user.login}
          </p>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(selectedPR.created_at).toDateString()}
          </p>
          <p>
            <strong>Reviewers:</strong>{" "}
            {selectedPR.requested_reviewers.length > 0
              ? selectedPR.requested_reviewers
                  .map((r) => `@${r.login}`)
                  .join(", ")
              : "None"}
          </p>
          <p>
            <strong>Last Action:</strong>{" "}
            {selectedPR.updated_at
              ? new Date(selectedPR.updated_at).toDateString()
              : "N/A"}
          </p>
          <div className={styles.buttons}>
            <a
              href={selectedPR.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openBtn}
            >
              Open in GitHub
            </a>
          </div>
        </div>
      )}
      {/* Status graph   */}
      <div className={styles.statusGraph}>
        <PRStatusGraph />
      </div>
      <SavedPRList />
    </div>
  );
};

export default OpenPrTop;
