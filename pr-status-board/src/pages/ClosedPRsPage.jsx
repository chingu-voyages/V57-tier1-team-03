import React from "react";
import SavedPRList from "../components/SavedPrList/SavedPrList";
import ClosedPrTop from "../components/ClosedPrTop/ClosedPrTop";

const ClosedPRs = () => {
  return (
    <>
      <ClosedPrTop />
      <SavedPRList />
    </>
  );
};

export default ClosedPRs;
