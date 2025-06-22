"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/styles/components/ui/button";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        color="#FFC107"
        strokeWidth={3}
        className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Moon
        color="gray"
        strokeWidth={3}
        className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
    </Button>
  );
}
