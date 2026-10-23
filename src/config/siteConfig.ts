import type { TranslationKey } from '../i18n/translations';

export type PlanId = 'standard' | 'pro' | 'enterprise';

export interface ReleaseTarget {
  version: string;
  publishedAt: string;
  setupAssetName: string | null;
  setupUrl: string | null;
  releasesUrl: string;
}

export interface SiteConfig {
  app: {
    name: string;
    tagline: string;
    description: string;
  };
  site: {
    url: string;
  };
  github: {
    owner: string;
    repo: string;
    releasesUrl: string;
  };
  release: ReleaseTarget;
  video: {
    url: string | null;
  };
  pricing: {
    currency: string;
    currencySymbol: string;
    plans: readonly PricingPlan[];
    durations: readonly LicenseDuration[];
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
    whatsappNumber: string;
    whatsappUrl: string;
    email: string;
    supportUrl: string;
    issuesUrl: string;
  };
  assets: {
    logo: string;
    heroScreenshot: string;
    screenshots: Array<{ src: string; alt: string; title: string }>;
  };
}

export type DurationId = 'month' | 'quarter' | 'halfYear' | 'year';

export interface LicenseDuration {
  id: DurationId;
  months: number;
  labelKey: TranslationKey;
}

export interface PricingPlan {
  id: PlanId;
  name: string;
  accent: string;
  nameKey: TranslationKey;
  recommended: boolean;
  prices: Record<DurationId, number>;
}

// Owner-approved indicative price table (DZD). Do not add discounts, limits or
// feature claims that were not approved.
const pricingPlans: readonly PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    accent: '#1b5e20',
    nameKey: 'plan.standard.name',
    recommended: false,
    prices: { month: 1500, quarter: 3500, halfYear: 6500, year: 12000 },
  },
  {
    id: 'pro',
    name: 'Pro',
    accent: '#1976d2',
    nameKey: 'plan.pro.name',
    recommended: true,
    prices: { month: 3000, quarter: 7500, halfYear: 13500, year: 25000 },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    accent: '#512da8',
    nameKey: 'plan.enterprise.name',
    recommended: false,
    prices: { month: 5500, quarter: 13000, halfYear: 24000, year: 45000 },
  },
];

const licenseDurations: readonly LicenseDuration[] = [
  { id: 'month', months: 1, labelKey: 'duration.month' },
  { id: 'quarter', months: 3, labelKey: 'duration.quarter' },
  { id: 'halfYear', months: 6, labelKey: 'duration.halfYear' },
  { id: 'year', months: 12, labelKey: 'duration.year' },
];

const RELEASE_VERSION = 'v1.0.3';
const SETUP_ASSET_NAME = 'Mohasabi_Setup_v1.0.3.exe';

const githubOwner = 'zoubidou31';
const githubRepo = 'mohasabi-releases';
const releasesUrl = `https://github.com/${githubOwner}/${githubRepo}/releases`;
const siteUrl = 'https://mohasabi.pages.dev';

export const siteConfig: SiteConfig = {
  app: {
    name: 'Mohasabi',
    tagline: 'برنامج محاسبة مكتبي يساعدك على تنظيم أعمالك اليومية',
    description:
      'Mohasabi برنامج محاسبة مكتبي يساعدك على تنظيم عملياتك اليومية وإدارة العملاء والفواتير من خلال واجهة عملية، مع تخزين البيانات محليًا وإمكانية العمل دون اتصال بالإنترنت.',
  },
  site: {
    url: siteUrl,
  },
  github: {
    owner: githubOwner,
    repo: githubRepo,
    releasesUrl,
  },
  // Verified against the GitHub Releases API on 2026-10-23: release v1.0.3 is
  // published (draft=false, prerelease=false) and carries
  // Mohasabi_Setup_v1.0.3.exe (application/x-msdownload, 314,248,129 bytes).
  // The asset name below must match the release asset list exactly.
  release: {
    version: RELEASE_VERSION,
    publishedAt: '2026-10-19',
    setupAssetName: SETUP_ASSET_NAME,
    setupUrl: `${releasesUrl}/download/${RELEASE_VERSION}/${SETUP_ASSET_NAME}`,
    releasesUrl,
  },
  video: {
    url: null,
  },
  pricing: {
    currency: 'DZD',
    currencySymbol: 'دج',
    // Indicative prices, subject to change per commercial terms (owner-approved table).
    plans: pricingPlans,
    durations: licenseDurations,
  },
  systemRequirements: {
    os: 'Windows 10 / Windows 11 (64-bit)',
    architecture: 'x64',
    processor: 'Intel Core i3 / AMD Ryzen 3 or higher',
    ram: '4 GB minimum (8 GB recommended)',
    diskSpace: '500 MB available space',
    internet:
      'Required for download, activation, and updates. Application works offline for daily operations.',
  },
  contact: {
    whatsappNumber: '+213674947157',
    whatsappUrl: 'https://wa.me/213674947157',
    email: 'mohzoubid@gmail.com',
    supportUrl: `${releasesUrl.replace('/releases', '')}/issues`,
    issuesUrl: `${releasesUrl.replace('/releases', '')}/issues`,
  },
  assets: {
    // Owner-supplied official brand mark. The favicon, apple-touch-icon and
    // Open Graph PNGs are generated from this same file and are referenced
    // statically from index.html.
    logo: '/assets/logo.png',
    heroScreenshot: '/assets/brand/preview-illustration.svg',
    screenshots: [
      { src: '/assets/screenshots/dashboard.svg', alt: 'screenshots.alt.dashboard', title: 'screenshots.alt.dashboard' },
      { src: '/assets/screenshots/factures.svg', alt: 'screenshots.alt.invoices', title: 'screenshots.alt.invoices' },
      { src: '/assets/screenshots/clients.svg', alt: 'screenshots.alt.clients', title: 'screenshots.alt.clients' },
      { src: '/assets/screenshots/produits.svg', alt: 'screenshots.alt.products', title: 'screenshots.alt.products' },
    ],
  },
};

export type DownloadStatus = 'ready' | 'pending';

export interface DownloadState {
  status: DownloadStatus;
  url: string;
  version: string;
}

export const getDownloadState = (): DownloadState => {
  const { release } = siteConfig;
  if (release.setupUrl) {
    return { status: 'ready', url: release.setupUrl, version: release.version };
  }
  return { status: 'pending', url: release.releasesUrl, version: release.version };
};

export const formatAmount = (value: number): string =>
  value.toLocaleString('en-US').replace(/,/g, '\u202f');

export const buildWhatsAppUrl = (message: string): string => {
  const digits = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

export const buildPlanWhatsAppUrl = (
  planName: string,
  durationLabel: string,
  amountLabel: string,
  intro: string,
): string =>
  buildWhatsAppUrl(`${intro}\n${planName} — ${durationLabel} — ${amountLabel}`);

export const buildMailtoPlanUrl = (
  planName: string,
  durationLabel: string,
  amountLabel: string,
  subject: string,
  bodyIntro: string,
): string => {
  const body = `${bodyIntro}\n\n${planName} — ${durationLabel} — ${amountLabel}`;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
