import { motion } from 'framer-motion';
import { VideoOff } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';

const EMBED_HOSTS = ['youtube.com', 'youtu.be', 'vimeo.com'];

const isEmbedUrl = (url: string): boolean => EMBED_HOSTS.some((host) => url.includes(host));

export const TutorialVideo: React.FC = () => {
  const { t } = useLanguage();
  const videoUrl = siteConfig.video.url;

  return (
    <section
      className="py-14 md:py-20 bg-white border-b border-neutral-200"
      aria-labelledby="guide-video-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 id="guide-video-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
          {t('guide.videoTitle')}
        </h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-sm"
            role="group"
            aria-label={t('guide.videoAria')}
          >
            {videoUrl && isEmbedUrl(videoUrl) ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title={t('guide.videoTitle')}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : videoUrl ? (
              <video
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                controls
                preload="none"
                aria-label={t('guide.videoTitle')}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center bg-[radial-gradient(ellipse_at_center,var(--color-primary-light)_0%,transparent_70%)]">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-primary/20 text-primary">
                  <VideoOff className="w-7 h-7" aria-hidden="true" />
                </span>
                <p className="font-semibold text-neutral-900 text-lg">{t('guide.videoPendingTitle')}</p>
                <p className="text-neutral-600 max-w-xl leading-relaxed">{t('guide.videoPendingBody')}</p>
                <p className="text-xs font-medium text-neutral-500 border border-neutral-200 rounded-full px-3 py-1 bg-white">
                  16:9
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
