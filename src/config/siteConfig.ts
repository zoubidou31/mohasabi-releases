export interface SiteConfig {
  app: {
    name: string;
    tagline: string;
    description: string;
    version: string;
    versionDate: string;
    versionSize: string;
  };
  github: {
    owner: string;
    repo: string;
    releasesUrl: string;
    setupAssetName: string;
  };
  download: {
    directUrl: string;
    fallbackUrl: string;
  };
  systemRequirements: {
    os: string;
    architecture: string;
    processor: string;
    ram: string;
    diskSpace: string;
    internet: string;
  };
  contact: {
    supportUrl: string;
    issuesUrl: string;
  };
  assets: {
    logo: string;
    heroScreenshot: string;
    screenshots: Array<{ src: string; alt: string; title: string }>;
  };
}

export const siteConfig: SiteConfig = {
  app: {
    name: 'Mohasabi',
    tagline: 'برنامج محاسبة مكتبي يساعدك على تنظيم أعمالك اليومية',
    description: 'Mohasabi برنامج محاسبة مكتبي يساعدك على تنظيم عملياتك اليومية وإدارة العملاء والفواتير من خلال واجهة عملية، مع تخزين البيانات محليًا وإمكانية العمل دون اتصال بالإنترنت.',
    version: 'v1.0.3',
    versionDate: '2025-01-15',
    versionSize: '45.2 MB',
  },
  github: {
    owner: 'zoubidou31',
    repo: 'mohasabi-releases',
    releasesUrl: 'https://github.com/zoubidou31/mohasabi-releases/releases',
    setupAssetName: 'Mohasabi_Setup_v1.0.3.exe',
  },
  download: {
    directUrl: 'https://github.com/zoubidou31/mohasabi-releases/releases/latest/download/Mohasabi_Setup_v1.0.3.exe',
    fallbackUrl: 'https://github.com/zoubidou31/mohasabi-releases/releases',
  },
  systemRequirements: {
    os: 'Windows 10 / Windows 11 (64-bit)',
    architecture: 'x64',
    processor: 'Intel Core i3 / AMD Ryzen 3 or higher',
    ram: '4 GB minimum (8 GB recommended)',
    diskSpace: '500 MB available space',
    internet: 'Required for download, activation, and updates. Application works offline for daily operations.',
  },
  contact: {
    supportUrl: 'https://github.com/zoubidou31/mohasabi-releases/issues',
    issuesUrl: 'https://github.com/zoubidou31/mohasabi-releases/issues',
  },
  assets: {
    logo: '/assets/logo.png',
    heroScreenshot: '/assets/screenshots/hero.svg',
    screenshots: [
      { src: '/assets/screenshots/dashboard.svg', alt: 'screenshots.alt.dashboard', title: 'screenshots.alt.dashboard' },
      { src: '/assets/screenshots/factures.svg', alt: 'screenshots.alt.invoices', title: 'screenshots.alt.invoices' },
      { src: '/assets/screenshots/clients.svg', alt: 'screenshots.alt.clients', title: 'screenshots.alt.clients' },
      { src: '/assets/screenshots/produits.svg', alt: 'screenshots.alt.products', title: 'screenshots.alt.products' },
    ],
  },
};

export const getDownloadUrl = (): string => {
  return siteConfig.download.directUrl;
};

export const getFallbackDownloadUrl = (): string => {
  return siteConfig.download.fallbackUrl;
};

export const getReleasesUrl = (): string => {
  return siteConfig.github.releasesUrl;
};