"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="data-theme"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange={false}
      themes={["light", "dark"]}
      attribute="data-theme"
    >
      {children}
    </ThemeProvider>
  );
}
