# PR's Status Board

## Table of contents

* [Overview](#overview)
* [Features](#features)
* [How to run PRs Status Board](#how-to-run-prs-status-board)
* [Dependencies](#dependencies)
* [Our Team](#our-team)

## Overview

The PRs Status Board an app designed to help a development team to get their GitHub Pull Requests (PRs) reviewed in a timely manner.
This app helps teams track current PR's that are waiting review, as well as the history of PR's completed by the team.


## Features 📌

This project includes:

- [ ] An appealing user friendly and responsive UI.
- [ ] The homepage describes the app and its benefits.
- [ ] Navigation bar to route to the Open PRs and Closed PRs.
- [ ] The Open PRs page displays PRs of team members awaiting review or to be merged.
- [ ] The Closed PRs page displays completed reviews and merged PRs.
- [ ] The data to be displayed for each PR includes:<br/>
- The title of the PR.
- Unique number assigned by GitHub to the PR.
- Account name of the teammate who created it.
- Date it was created.
-  Account names of teammates assigned to review it.
-  Last action - created, commented, or change requested.
-  Date of the last action.
-  A closed PR sholud include the date it was closed.
- [ ] Validation and error handling<br/>
- Display an error message for invalid inputs.
- Error messages should be cleared when they are corrected.
- [ ] Integration with [GitHub](https://github.com) allows the app to pull PR data directly and provide a unified interface, It also simplifies the workflow and ensures the information is always up-to-date.
- [ ] Real time notifications to reviewers when a new PR is ready, when a comment is made, or when a change is requested.


## How to run PRs Status Board

how_to_run_pr_status_board:
  description: |
    Follow these steps to run the PR Status Board project locally on your machine.

  steps:
    - step: Clone the repository
      command: git clone https://github.com/chingu-voyages/V57-tier1-team-03.git

    - step: Navigate to the project folder
      command: cd V57-tier1-team-03

    - step: Install dependencies
      prerequisites: Node.js version 18 or newer
      command: npm install

    - step: Start the development server
      command: npm run dev
      note: The app will run locally on http://localhost:5173

    - step: Use the app
      details:
        - Enter your GitHub username into the input field.
        - Click “Fetch PR’s” to retrieve repositories and open/closed pull requests.
        - Choose a repository and select a PR from the dropdown menus.
        - Click “Save” to persist that PR’s data in browser localStorage.
        - Navigate between Open PRs and Closed PRs pages to view and analyze PR data.
        - The heatmap graph visualizes how many PRs were saved per day.

  tech_stack:
    - React + Vite: Frontend framework and development environment
    - CSS Modules: Scoped styling for modular and maintainable components
    - GitHub REST API: Fetching public repositories and pull request data
    - LocalStorage: Persisting user and PR data locally
    - react-calendar-heatmap: Visual representation of PR frequency and activity



## Dependencies

dependencies:
  description: |
    The following dependencies are required to run and build the PR Status Board application.

  core:
    - name: react
      version: ^18.0.0
      purpose: Frontend library for building user interfaces.

    - name: react-dom
      version: ^18.0.0
      purpose: DOM rendering and reconciliation for React components.

    - name: vite
      version: ^5.0.0
      purpose: Development environment and fast build tool.

  styling:
    - name: css-modules
      purpose: Scoped styling for React components.

  data_visualization:
    - name: react-calendar-heatmap
      version: ^1.9.0
      purpose: Displays PR activity as a heatmap graph.

  api_integration:
    - name: github-rest-api
      purpose: Fetching repositories and pull request data from GitHub.

  utilities:
    - name: localStorage (native browser API)
      purpose: Saving and loading user PR data locally for persistence.

## Our Team

- Nikola Kojević: [GitHub](https://github.com/n-kojevic) / [LinkedIn](https://www.linkedin.com/in/nikola-kojevic-30a98a121/)
- Eleazer Abbey: [GitHub](https://github.com/abbey-eleazer) / [LinkedIn](https://linkedin.com/in/eleazer-abbey-19b42b2a3/)
- Tiffany Ugwunebo: [GitHub](https://github.com/Ahny678) / [LinkedIn](https://www.linkedin.com/in/tiffany-ugwunebo-1a59372a6/)
