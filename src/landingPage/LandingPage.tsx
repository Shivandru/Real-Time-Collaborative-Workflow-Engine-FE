import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}

      <Header />
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
