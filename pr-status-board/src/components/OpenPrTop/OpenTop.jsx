import React, { useState, useEffect } from "react";
import styles from "./OpenTop.module.css";

const OpenPrTop = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [prs, setPrs] = useState([]);
  const [selectedPR, setSelectedPR] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch repos for user
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

  // Fetch PRs for selected repo
  useEffect(() => {
    if (!selectedRepo) return;
    const fetchPRs = async () => {
      try {
        setLoading(true);
        setError("");
        setPrs([]);
        setSelectedPR(null);

        const res = await fetch(
          `https://api.github.com/repos/${username}/${selectedRepo}/pulls?state=open`
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
    fetchPRs();
  }, [selectedRepo, username]);

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
            Fetch PRs
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
            onChange={(e) => setSelectedRepo(e.target.value)}
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
            onChange={(e) =>
              setSelectedPR(
                prs.find((pr) => pr.number === parseInt(e.target.value))
              )
            }
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

      {/* Status graph placeholder */}
      <div className={styles.statusGraph}>
        <h3>See how we track pull requests</h3>
        <p>[Status graph goes here]</p>
      </div>
    </div>
  );
};

export default OpenPrTop;
