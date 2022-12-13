import React from "react";

const Loading = () => {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
