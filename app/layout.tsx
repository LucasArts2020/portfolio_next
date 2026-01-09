import SmoothScrolling from "./Animation/SmoothScroolling";
import "./globals.css";
import "lenis/dist/lenis.css"; // Importe o CSS do Lenis

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
