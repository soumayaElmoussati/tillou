
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
