import { useLanguage } from '../i18n/LanguageContext';
import { siteConfig } from '../config/siteConfig';

const requirements = [
  { labelKey: 'requirements.os' as const, value: siteConfig.systemRequirements.os },
  { labelKey: 'requirements.architecture' as const, value: siteConfig.systemRequirements.architecture },
  { labelKey: 'requirements.processor' as const, value: siteConfig.systemRequirements.processor },
  { labelKey: 'requirements.ram' as const, value: siteConfig.systemRequirements.ram },
  { labelKey: 'requirements.diskSpace' as const, value: siteConfig.systemRequirements.diskSpace },
  { labelKey: 'requirements.internet' as const, value: siteConfig.systemRequirements.internet },
] as const;

export const SystemRequirements: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="requirements"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="requirements-title"
    >
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h2 id="requirements-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('requirements.title')}
          </h2>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" role="table">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-900" scope="col">
                      {t('requirements.os').split(' ')[0]}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-900" scope="col">
                      Minimum / Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {requirements.map((req, index) => (
                    <tr key={index} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-neutral-900">
                        {t(req.labelKey)}
                      </td>
                      <td className="px-6 py-4 text-neutral-600">
                        {req.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary-light rounded-xl border border-primary/20">
            <h3 className="text-lg font-semibold text-primary-dark mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ملاحظة مهمة</span>
            </h3>
            <p className="text-primary-dark text-sm leading-relaxed">
              المتطلبات أعلاه توضح الحد الأدنى للتشغيل. يرجى مراجعة صفحة الإصدارات الرسمية للحصول على تفاصيل التوافق الدقيقة للإصدار الحالي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};