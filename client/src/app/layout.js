import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "KingoGM",
  description: "Gym management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
