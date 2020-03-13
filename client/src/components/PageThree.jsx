import React from "react";
import Players from "./Players";

export default function PageThree(props) {
  return props.player
    .slice(50, props.showItems)
    .map(a => (
      <Players
        name={a.name}
        country={a.country}
        searches={a.searches}
        id={a.id}
      />
    ));
}
