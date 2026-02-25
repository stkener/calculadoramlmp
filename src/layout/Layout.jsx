import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
