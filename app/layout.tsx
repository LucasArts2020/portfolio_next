import SmoothScrolling from "./Animation/SmoothScroolling";
import "./globals.css";
import "lenis/dist/lenis.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
