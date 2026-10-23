import { Hero } from '../components/Hero';
import { Challenges } from '../components/Challenges';
import { Features } from '../components/Features';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { HowItWorks } from '../components/HowItWorks';
import { OfflineWork } from '../components/OfflineWork';
import { DataSecurity } from '../components/DataSecurity';
import { Audience } from '../components/Audience';
import { PricingPreview } from '../components/PricingPreview';
import { FAQ } from '../components/FAQ';
import { DownloadCTA } from '../components/DownloadCTA';
import { usePageTitle } from '../i18n/usePageTitle';

export const HomePage: React.FC = () => {
  usePageTitle('seo.page.home');

  return (
    <>
      <Hero />
      <Challenges />
      <Features />
      <ScreenshotGallery />
      <HowItWorks />
      <OfflineWork />
      <DataSecurity />
      <Audience />
      <PricingPreview />
      <FAQ />
      <DownloadCTA />
    </>
  );
};
