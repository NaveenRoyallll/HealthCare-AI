import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealthLayer | Preventive health, made clearer",
  description: "A calm, privacy-first health workspace for understanding your next step.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
