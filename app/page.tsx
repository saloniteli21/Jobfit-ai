import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/footer";
import "./styles/globals.scss";

export default function Page() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
