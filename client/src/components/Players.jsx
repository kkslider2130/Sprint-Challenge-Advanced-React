import React from "react";

export default function Players(props) {
  return (
    <div className="player-card">
      <h2>{props.name}</h2>
      <h3>{props.country}</h3>
      <p>Searches: {props.searches}</p>
    </div>
  );
}
