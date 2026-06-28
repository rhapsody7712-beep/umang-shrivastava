"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only read the real theme after mount.
  // This is the standard next-themes pattern; intentionally synchronous.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle dark and light mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="font-mono text-[11px] tracking-wide uppercase border border-line rounded-[3px] px-3 py-2 text-muted hover:text-accent hover:border-accent transition-colors"
    >
      {mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "Theme"}
    </button>
  );
}
