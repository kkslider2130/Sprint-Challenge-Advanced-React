import React from "react";
import { Link } from "react-router-dom";
import useDocTitle from "../Hooks/useDocTitle";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export default function NextPage() {
  const [count, setCount] = useLocalStorage("count", 1);
  useDocTitle(count);
  return (
    <div className="page-btn">
      <Link to={count < 4 ? `/page${count + 1}` : "/"}>
        <button
          style={count > 4 ? { display: "none" } : { display: "inline-block" }}
          onClick={count < 5 ? () => setCount(count + 1) : setCount(1)}
        >
          {count !== 4 ? `page ${count + 1}` : `back to first page`}
        </button>
      </Link>
    </div>
  );
}
