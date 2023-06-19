"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const toggleTheme = () => {
    console.error("toggle-theme not implemented");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={className}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
