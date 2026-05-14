import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Reset typing state whenever the source words array changes (e.g. TR <-> EN switch).
  // Without this, charIdx may exceed the new word's length and freeze the effect.
  useEffect(() => {
    setWordIdx(0);
    setCharIdx(0);
    setDeleting(false);
    setDisplay("");
  }, [words]);

  useEffect(() => {
    const current = words[wordIdx];
    if (!current) return;

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx >= current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx <= 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return undefined;
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => {
    const current = words[wordIdx];
    if (!current) return;
    setDisplay(current.slice(0, Math.min(charIdx, current.length)));
  }, [charIdx, wordIdx, words]);

  return display;
}
