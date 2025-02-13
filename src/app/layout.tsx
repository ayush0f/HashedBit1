import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "CineBook - Book Movie Tickets Online",
  description: "Book movie tickets for your favorite films at the best prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans min-h-screen flex flex-col`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
              >
                CineBook
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Movies
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Cinemas
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Offers
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Food & Drinks
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <Link
                  href="#"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">CineBook</h3>
                <p className="text-gray-400">Your one-stop destination for movie tickets and entertainment.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Download Our App</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-white rounded-lg px-4 py-2 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-black">App Store</span>
                  </Link>
                  <Link href="#" className="bg-white rounded-lg px-4 py-2 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0l-8-8m8 8l8-8" />
                    </svg>
                    <span className="text-black">Play Store</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} CineBook. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
