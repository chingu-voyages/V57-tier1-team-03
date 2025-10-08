import React, { useState } from "react";
import styles from "./ClosedPrTop.module.css";
import PRStatusGraph from "../PrStatusGraph/PrStatusGraph";
import logo from "../../assets/logo.png";
import bgImage from "../../assets/Illustration7.png";
import SavedPRList from "../SavedPrList/SavedPrList";

const ClosedPrTop = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [prs, setPrs] = useState([]);
  const [selectedPR, setSelectedPR] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSave = Boolean(username && selectedRepo && selectedPR);

  // Save handler
  const handleSave = () => {
    if (!canSave) {
      alert("Please select a username, repository, and PR before saving.");
      return;
    }

    const prData = {
      opened: new Date(selectedPR.created_at).toDateString(),
      closed: selectedPR.closed_at
        ? new Date(selectedPR.closed_at).toDateString()
        : "N/A",
      merged: selectedPR.merged_at
        ? new Date(selectedPR.merged_at).toDateString()
        : "Not merged",
      title: selectedPR.title,
      author: selectedPR.user.login,
      url: selectedPR.html_url,
      number: selectedPR.number,
      repo: selectedRepo,
      username,
    };

    const existing = JSON.parse(localStorage.getItem("closedPRs") || "[]");
    const filtered = existing.filter(
      (item) =>
        !(
          item.username === username &&
          item.repo === selectedRepo &&
          item.number === selectedPR.number
        )
    );
    const updated = [...filtered, prData];
    localStorage.setItem("closedPRs", JSON.stringify(updated));

    alert(`Saved Closed PR #${selectedPR.number} for ${username}/${selectedRepo}`);
  };

  // Fetch Repositories
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

  // Fetch Closed PRs
  const fetchPRs = async (repoName) => {
    if (!repoName || !username) return;
    try {
      setLoading(true);
      setError("");
      setPrs([]);
      setSelectedPR(null);
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/pulls?state=closed`
      );
      if (!res.ok) throw new Error("Failed to fetch closed PRs");
      const data = await res.json();
      setPrs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* --- Top Section --- */}
      <div className={styles.topSection}>
        <div className={styles.repoPrBox}>
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

          <div className={styles.dropdownBox}>
            <label className={styles.label}>Select Closed PR</label>
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
        </div>

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
              Fetch Closed PR’s
            </button>
            <button
              onClick={handleSave}
              className={`${styles.saveBtn} ${!canSave ? styles.isDisabled : ""}`}
              disabled={!canSave}
            >
              Save
            </button>
          </div>
          <div className={styles.logoPlaceholder}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className={styles.bottomSection}>
        {/* PR Details Card */}
        <div className={styles.detailsCard}>
          <h3 className={styles.prTitle}>
            Closed PR: #{selectedPR ? selectedPR.number : "—"}
          </h3>
          <p className={styles.detail}>
            <strong>Title:</strong> {selectedPR ? selectedPR.title : "—"}
          </p>
          <p className={styles.detail}>
            <strong>Author:</strong>{" "}
            {selectedPR ? `@${selectedPR.user.login}` : "—"}
          </p>
          <p className={styles.detail}>
            <strong>Opened:</strong>{" "}
            {selectedPR
              ? new Date(selectedPR.created_at).toDateString()
              : "—"}
          </p>
          <p className={styles.detail}>
            <strong>Closed:</strong>{" "}
            {selectedPR && selectedPR.closed_at
              ? new Date(selectedPR.closed_at).toDateString()
              : "—"}
          </p>
          <p className={styles.detail}>
            <strong>Merged:</strong>{" "}
            {selectedPR && selectedPR.merged_at
              ? new Date(selectedPR.merged_at).toDateString()
              : "Not merged"}
          </p>

          <div className={styles.cardButtons}>
            <a
              href={selectedPR ? selectedPR.html_url : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openBtn}
            >
              Open in GitHub
            </a>
            <button className={styles.closeBtn}>Close</button>
          </div>
        </div>

        {/* Graph Section */}
        <div className={styles.statusGraph}>
          <div className={styles.graphTitle}>
            See how we track <span className={styles.pull}>pull</span>{" "}
            <span className={styles.request}>requests</span>
          </div>
          <PRStatusGraph />
        </div>
      </div>

      {/* --- Saved Closed PR List --- */}
      <SavedPRList />
    </div>
  );
};

export default ClosedPrTop;
