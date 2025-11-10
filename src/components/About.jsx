// needs use client

"use client";
import ThemeButton from "./ThemeButton";

import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <ThemeButton />
      <h2>About content</h2>
      <p>{theme}</p>
      <p>I have nothing to offer but blood, toil, tears and sweat.</p>

      <p>
        We shall fight on the beaches, we shall fight on the landing grounds, we
        shall fight in the fields and in the streets, we shall fight in the
        hills; we shall never surrender.
      </p>
      <p>
        Never in the field of human conflict was so much owed by so many to so
        few.
      </p>
      <p>
        An appeaser is one who feeds a crocodile, hoping it will eat him last.
      </p>
    </div>
  );
}
