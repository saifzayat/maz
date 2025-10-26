import React from "react";

export const SCard = ({ Icon, Title }) => {
  return (
    <div className="s-card">
      <div className="icon">{Icon && <Icon />}</div>
      <p className="title">{Title}</p>
    </div>
  );
};
