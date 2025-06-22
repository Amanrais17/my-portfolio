import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/globals.css";
export const metadata = {
  title: "My Portfolio",
  description: "Built with the next.JS and typescript",
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen 
            flex 
            flex-col
             bg-white
              text-black 
                transition-colors 
                duration-300
              dark:bg-dark-mode
              dark:text-modeText
                "
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow px-4 py-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
