import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { Features } from './components/Features';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { HowItWorks } from './components/HowItWorks';
import { SystemRequirements } from './components/SystemRequirements';
import { FAQ } from './components/FAQ';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content" className="pt-16">
          <Hero />
          <TrustHighlights />
          <Features />
          <ScreenshotGallery />
          <HowItWorks />
          <SystemRequirements />
          <FAQ />
          <DownloadCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;