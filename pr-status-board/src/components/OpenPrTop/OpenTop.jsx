import React, { useState } from "react";
import styles from "./OpenTop.module.css";
import PRStatusGraph from "../PrStatusGraph/PrStatusGraph";
import logo from "../../assets/logo.png";
const OpenPrTop = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [prs, setPrs] = useState([]);
  const [selectedPR, setSelectedPR] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Save handler
  const handleSave = () => {
    console.log("handleSave called", { username, selectedRepo, selectedPR });
    if (!username || !selectedRepo || !selectedPR) {
      alert("Nothing to save yet!");
      return;
    }

    const prData = {
      date: new Date(selectedPR.created_at).toDateString(),
      title: selectedPR.title,
      author: selectedPR.user.login,
      action: selectedPR.updated_at
        ? new Date(selectedPR.updated_at).toDateString()
        : "N/A",
      progress: "Not started",
      rating: null,
      url: selectedPR.html_url,
      number: selectedPR.number,
      repo: selectedRepo,
      username,
    };

    const existing = JSON.parse(localStorage.getItem("openPRs") || "[]");
    const filtered = existing.filter(
      (item) =>
        !(
          item.username === username &&
          item.repo === selectedRepo &&
          item.number === selectedPR.number
        )
    );
    const updated = [...filtered, prData];
    localStorage.setItem("openPRs", JSON.stringify(updated));
    console.log("Saved:", updated);
    alert(`Saved PR #${selectedPR.number} for ${username}/${selectedRepo}`);
  };

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
      {/* 🔹 Top Section */}
      <div className={styles.topSection}>
        {/* Left: Repo + PR Selection */}
        <div className={styles.repoPrBox}>
          {repos.length > 0 && (
            <div className={styles.dropdownBox}>
              <label className={styles.label}>Select Repository</label>
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

          {prs.length > 0 && (
            <div className={styles.dropdownBox}>
              <label className={styles.label}>Select PR</label>
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
        </div>

        {/* Right: Username + Fetch + Save + Logo */}
        <div className={styles.userBox}>
          <input
            type="text"
            placeholder="GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <div className={styles.actions}>
            <button onClick={fetchRepos} className={styles.fetchBtn}>
              Fetch PR’s
            </button>
            {selectedPR && (
              <button onClick={handleSave} className={styles.saveBtn}>
                Save
              </button>
            )}
          </div>
          <div className={styles.logoPlaceholder}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className={styles.bottomSection}>
        {/* Left: PR Details */}
        {selectedPR && (
          <div className={styles.detailsCard}>
            <h3 className={styles.prTitle}>PR number: #{selectedPR.number}</h3>
            <p className={styles.detail}>
              <strong>Title:</strong> {selectedPR.title}
            </p>
            <p className={styles.detail}>
              <strong>Author:</strong> @{selectedPR.user.login}
            </p>
            <p className={styles.detail}>
              <strong>Created:</strong>{" "}
              {new Date(selectedPR.created_at).toDateString()}
            </p>
            <p className={styles.detail}>
              <strong>Reviewers:</strong>
              {selectedPR.requested_reviewers.length > 0
                ? selectedPR.requested_reviewers
                    .map((r) => `@${r.login}`)
                    .join(", ")
                : "None"}
            </p>
            <p className={styles.detail}>
              <strong>Last Action:</strong>
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

        {/* Right: PR Status Graph */}
        <div className={styles.statusGraph}>
          <PRStatusGraph />
        </div>
      </div>
    </div>
  );
};

export default OpenPrTop;
