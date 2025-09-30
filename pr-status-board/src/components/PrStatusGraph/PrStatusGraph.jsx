import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./PrStatusGraph.css";
const PRStatusGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("openPRs") || "[]");
    const counts = {};

    savedData.forEach((entry) => {
      const date = new Date(entry.selectedPR.created_at)
        .toISOString()
        .split("T")[0];
      counts[date] = (counts[date] || 0) + 1;
    });

    // Convert to heatmap data format
    const heatmapData = Object.entries(counts).map(([date, count]) => ({
      date,
      count,
    }));

    setData(heatmapData);
  }, []);

  return (
    <div>
      <h3>See how we track pull requests</h3>
      <CalendarHeatmap
        startDate={new Date("2025-01-01")}
        endDate={new Date("2025-12-31")}
        values={data}
        classForValue={(value) => {
          if (!value) return "color-empty";
          if (value.count >= 3) return "color-scale-3";
          if (value.count === 2) return "color-scale-2";
          return "color-scale-1";
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": value.date
            ? `${value.date}: ${value.count} PRs`
            : "No PRs",
        })}
        showWeekdayLabels
      />
    </div>
  );
};

export default PRStatusGraph;
