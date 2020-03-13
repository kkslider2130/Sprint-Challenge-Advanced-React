import { useEffect } from "react";

export default function useDocTitle(count) {
  useEffect(() => {
    document.title = `Page ${count}`;
  }, [count]);
}
