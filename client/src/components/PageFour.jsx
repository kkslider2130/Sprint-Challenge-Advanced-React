import React from "react";
import Players from "./Players";

export default function PageFour(props) {
  return props.player
    .slice(75, props.showItems)
    .map(a => (
      <Players
        name={a.name}
        country={a.country}
        searches={a.searches}
        id={a.id}
      />
    ));
}
