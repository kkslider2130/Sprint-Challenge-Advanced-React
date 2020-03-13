import React from "react";
import Players from "./Players";

export default function PageOne(props) {
  return props.player
    .slice(0, props.showItems)
    .map(a => (
      <Players
        data-testid="test-fetch"
        name={a.name}
        country={a.country}
        searches={a.searches}
        id={a.id}
      />
    ));
}
