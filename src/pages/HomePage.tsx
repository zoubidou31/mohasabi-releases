import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { FAQ } from '../components/FAQ';
import { DownloadCTA } from '../components/DownloadCTA';
import { usePageTitle } from '../i18n/usePageTitle';

export const HomePage: React.FC = () => {
  usePageTitle('seo.page.home');

  return (
    <>
      <Hero />
      <Features />
      <ScreenshotGallery />
      <FAQ />
      <DownloadCTA />
    </>
  );
};
