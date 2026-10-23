export type Locale = 'ar' | 'fr' | 'en';

export type TranslationKey =
  | 'nav.home'
  | 'nav.download'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.downloadBtn'
  | 'hero.downloadPendingBtn'
  | 'hero.version'
  | 'hero.windowsOnly'
  | 'hero.pendingNote'
  | 'hero.releasesLink'
  | 'hero.illustrationAlt'
  | 'hero.illustrationCaption'
  | 'features.badge'
  | 'features.title'
  | 'features.subtitle'
  | 'features.localData.title'
  | 'features.localData.desc'
  | 'features.documents.title'
  | 'features.documents.desc'
  | 'features.partners.title'
  | 'features.partners.desc'
  | 'features.debts.title'
  | 'features.debts.desc'
  | 'features.stock.title'
  | 'features.stock.desc'
  | 'features.reports.title'
  | 'features.reports.desc'
  | 'features.languages.title'
  | 'features.languages.desc'
  | 'screenshots.badge'
  | 'screenshots.title'
  | 'screenshots.subtitle'
  | 'screenshots.zoomHint'
  | 'screenshots.closeAria'
  | 'screenshots.prevAria'
  | 'screenshots.nextAria'
  | 'screenshots.alt.main'
  | 'screenshots.alt.dashboard'
  | 'screenshots.alt.invoices'
  | 'screenshots.alt.clients'
  | 'screenshots.alt.products'
  | 'requirements.badge'
  | 'requirements.title'
  | 'requirements.colComponent'
  | 'requirements.colSpec'
  | 'requirements.colStatus'
  | 'requirements.statusSupported'
  | 'requirements.statusRecommended'
  | 'requirements.statusMinimum'
  | 'requirements.statusConditional'
  | 'requirements.notesTitle'
  | 'requirements.note1'
  | 'requirements.note2'
  | 'requirements.note3'
  | 'requirements.note4'
  | 'requirements.viewReleases'
  | 'requirements.os'
  | 'requirements.architecture'
  | 'requirements.processor'
  | 'requirements.ram'
  | 'requirements.diskSpace'
  | 'requirements.internet'
  | 'requirements.internet.desc'
  | 'faq.badge'
  | 'faq.title'
  | 'faq.intro'
  | 'faq.offline.q'
  | 'faq.offline.a'
  | 'faq.latest.q'
  | 'faq.latest.a'
  | 'faq.data.q'
  | 'faq.data.a'
  | 'faq.support.q'
  | 'faq.support.a'
  | 'faq.moreHelp'
  | 'faq.requirements.q'
  | 'faq.requirements.a'
  | 'faq.backup.q'
  | 'faq.backup.a'
  | 'faq.free.q'
  | 'faq.free.a'
  | 'faq.openTicket'
  | 'cta.title'
  | 'cta.subtitle'
  | 'cta.downloadBtn'
  | 'cta.note'
  | 'footer.description'
  | 'footer.pagesTitle'
  | 'footer.sectionsTitle'
  | 'footer.resourcesTitle'
  | 'footer.links.home'
  | 'footer.links.features'
  | 'footer.links.requirements'
  | 'footer.links.faq'
  | 'footer.links.releases'
  | 'footer.links.repository'
  | 'footer.copyright'
  | 'footer.versionLabel'
  | 'language.label'
  | 'contact.whatsapp'
  | 'contact.email'
  | 'seo.title'
  | 'seo.description'
  | 'a11y.mainNav'
  | 'a11y.mobileNav'
  | 'a11y.toggleMenu'
  | 'a11y.skipToContent'
  | 'nav.guide'
  | 'nav.pricing'
  | 'nav.support'
  | 'nav.features'
  | 'nav.screenshots'
  | 'nav.how'
  | 'a11y.logoAlt'
  | 'seo.page.home'
  | 'seo.page.guide'
  | 'seo.page.pricing'
  | 'seo.page.support'
  | 'footer.links.guide'
  | 'footer.links.pricing'
  | 'footer.links.support'
  | 'plan.standard.name'
  | 'plan.pro.name'
  | 'plan.enterprise.name'
  | 'duration.month'
  | 'duration.quarter'
  | 'duration.halfYear'
  | 'duration.year'
  | 'pricing.badge'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'pricing.recommended'
  | 'pricing.durationLabel'
  | 'pricing.priceLabel'
  | 'pricing.planCol'
  | 'pricing.selectPlan'
  | 'pricing.askPlan'
  | 'pricing.whatsappIntro'
  | 'pricing.inquiryIntro'
  | 'pricing.orEmail'
  | 'pricing.contactTitle'
  | 'pricing.contactBody'
  | 'pricing.indicativeTitle'
  | 'pricing.indicativeBody'
  | 'pricing.paymentTitle'
  | 'pricing.paymentBody'
  | 'pricing.termsTitle'
  | 'pricing.termsBody'
  | 'guide.badge'
  | 'guide.title'
  | 'guide.subtitle'
  | 'guide.videoTitle'
  | 'guide.videoPendingTitle'
  | 'guide.videoPendingBody'
  | 'guide.videoAria'
  | 'guide.stepsTitle'
  | 'guide.step1.title'
  | 'guide.step1.desc'
  | 'guide.step2.title'
  | 'guide.step2.desc'
  | 'guide.step3.title'
  | 'guide.step3.desc'
  | 'guide.step4.title'
  | 'guide.step4.desc'
  | 'guide.stepNote'
  | 'guide.functionsTitle'
  | 'guide.functionsIntro'
  | 'guide.helpTitle'
  | 'guide.helpBody'
  | 'guide.supportCta'
  | 'guide.pricingCta'
  | 'support.badge'
  | 'support.title'
  | 'support.subtitle'
  | 'support.whatsappTitle'
  | 'support.whatsappBody'
  | 'support.emailTitle'
  | 'support.emailBody'
  | 'support.issuesTitle'
  | 'support.issuesBody'
  | 'support.requestTitle'
  | 'support.requestBody'
  | 'support.reqIntro'
  | 'support.req.install'
  | 'support.req.activation'
  | 'support.req.duration'
  | 'support.req.renewal'
  | 'support.req.purchase'
  | 'support.req.other'
  | 'support.infoTitle'
  | 'support.info1'
  | 'support.info2'
  | 'support.info3'
  | 'support.info4'
  | 'support.info5'
  | 'support.avoidTitle'
  | 'support.avoid1'
  | 'support.avoid2'
  | 'support.avoid3'
  | 'support.faq1.q'
  | 'support.faq1.a'
  | 'support.faq2.q'
  | 'support.faq2.a'
  | 'hero.tagline'
  | 'hero.specLine'
  | 'hero.footnote'
  | 'hero.featuresBtn'
  | 'challenges.title'
  | 'challenges.body1'
  | 'challenges.body2'
  | 'challenges.b1.title'
  | 'challenges.b1.desc'
  | 'challenges.b2.title'
  | 'challenges.b2.desc'
  | 'challenges.b3.title'
  | 'challenges.b3.desc'
  | 'screenshots.closing'
  | 'screenshots.pending'
  | 'how.title'
  | 'how.step1.title'
  | 'how.step1.desc'
  | 'how.step1.cta'
  | 'how.step2.title'
  | 'how.step2.desc'
  | 'how.step2.cta'
  | 'how.step3.title'
  | 'how.step3.desc'
  | 'how.step3.cta'
  | 'offline.title'
  | 'offline.body1'
  | 'offline.body2'
  | 'offline.note'
  | 'security.title'
  | 'security.body'
  | 'security.s1.title'
  | 'security.s1.desc'
  | 'security.s2.title'
  | 'security.s2.desc'
  | 'security.s3.title'
  | 'security.s3.desc'
  | 'security.disclaimer'
  | 'audience.title'
  | 'audience.merchants.title'
  | 'audience.merchants.desc'
  | 'audience.craft.title'
  | 'audience.craft.desc'
  | 'audience.small.title'
  | 'audience.small.desc'
  | 'audience.teams.title'
  | 'audience.teams.desc'
  | 'preview.title'
  | 'preview.subtitle'
  | 'preview.from'
  | 'preview.ask'
  | 'preview.compare'
  | 'preview.note'
  | 'preview.tag.standard'
  | 'preview.tag.pro'
  | 'preview.tag.enterprise'
  | 'cta.pricingBtn'
  | 'cta.supportLink'
  | 'footer.links.privacy'
  | 'footer.trademark'
  | 'privacy.title'
  | 'privacy.subtitle'
  | 'privacy.local.title'
  | 'privacy.local.body'
  | 'privacy.site.title'
  | 'privacy.site.body'
  | 'privacy.contact.title'
  | 'privacy.contact.body'
  | 'privacy.backup.title'
  | 'privacy.backup.body'
  | 'seo.ogTitle'
  | 'seo.ogDescription'
  | 'seo.page.privacy';

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.download': 'تحميل Mohasabi',
    'hero.title': 'أعمالك أوضح. حساباتك أسهل.',
    'hero.subtitle':
      'أنشئ فواتيرك وعروض أسعارك ومستنداتك التجارية، وتابع زبائنك ومخزونك ومستحقاتك من مكان واحد. مع Mohasabi تنظّم أعمالك اليومية على حاسوبك وتواصل العمل حتى عند غياب اتصال دائم بالإنترنت.',
    'hero.downloadBtn': 'تنزيل البرنامج',
    'hero.downloadPendingBtn': 'التحميل قيد التجهيز',
    'hero.version': 'الإصدار',
    'hero.windowsOnly': 'لنظام Windows',
    'hero.pendingNote': 'ملف التثبيت لهذا الإصدار قيد الرفع على قناة الإصدارات الرسمية.',
    'hero.releasesLink': 'صفحة الإصدارات',
    'hero.illustrationAlt': 'رسم توضيحي لواجهة البرنامج، وليس لقطة شاشة حقيقية',
    'hero.illustrationCaption': 'واجهة واحدة لمتابعة الفواتير والزبائن والمخزون.',
    'features.badge': 'المميزات',
    'features.title': 'كل ما تحتاجه لإدارة يوم عملك',
    'features.subtitle': 'القدرات الأساسية المتوفرة فعليًا في الإصدار الحالي.',
    'features.localData.title': 'بيانات محلية ونسخ احتياطي',
    'features.localData.desc':
      'تُحفظ بيانات عملك على جهازك، مع نسخ احتياطي ZIP مؤرَّخة وتحقق SHA-256 واستعادة تنسخ بياناتك الحالية أولًا.',
    'features.documents.title': 'الفواتير وعروض الأسعار',
    'features.documents.desc':
      'أنشئ الفواتير وعروض الأسعار وطلبات الشراء ومستندات التسليم وأوامر المهمة، ونظّم معاملاتك التجارية في مكان واحد.',
    'features.partners.title': 'إدارة الزبائن والموردين',
    'features.partners.desc':
      'احتفظ بملفات زبائنك مع أرصدتهم وطلباتهم الجارية، وتابع طلبات الشراء من الموردين وعمليات الاستلام.',
    'features.debts.title': 'متابعة الديون والمستحقات',
    'features.debts.desc':
      'راجع رصيد كل زبون والمبالغ المسجلة له أو عليه، مع تقرير المبالغ غير المحصّلة لتمييز ما حُصّل عمّا لا يزال مستحقًا.',
    'features.stock.title': 'إدارة المخزون والمنتجات',
    'features.stock.desc':
      'نظّم كتالوج المنتجات والخدمات وكميات المخزون، مع حدّ إعادة الطلب ولوحة تعرض المنتجات التي انخفض مخزونها.',
    'features.reports.title': 'التقارير والتصدير',
    'features.reports.desc':
      'لوحة قيادة وتقارير شهرية وبيان الضريبة على القيمة المضافة حسب النسبة وأفضل الزبائن، مع تصدير إلى PDF وExcel وWord وCSV.',
    'features.languages.title': 'واجهة عربية وفرنسية وإنجليزية',
    'features.languages.desc':
      'انتقل بين اللغات الثلاث مع دعم اتجاه العرض من اليمين أو اليسار، واختيار المظهر الفاتح أو الداكن أو التابع للنظام.',
    'screenshots.badge': 'لقطات الشاشة',
    'screenshots.title': 'شاهد Mohasabi كما هو',
    'screenshots.subtitle': 'استكشف واجهة البرنامج الفعلية وتعرّف على طريقة عرض المعلومات وإدارة أعمالك اليومية.',
    'screenshots.zoomHint': 'اضغط على أي لقطة لتكبيرها • التنقل بلوحة المفاتيح متاح',
    'screenshots.closeAria': 'إغلاق العارض',
    'screenshots.prevAria': 'اللقطة السابقة',
    'screenshots.nextAria': 'اللقطة التالية',
    'screenshots.alt.main': 'واجهة برنامج Mohasabi لإدارة الفواتير والأعمال',
    'screenshots.alt.dashboard': 'لوحة التحكم',
    'screenshots.alt.invoices': 'الفواتير وعروض الأسعار',
    'screenshots.alt.clients': 'الزبائن والموردون',
    'screenshots.alt.products': 'المنتجات والمخزون',
    'requirements.badge': 'المتطلبات',
    'requirements.title': 'متطلبات تشغيل Mohasabi',
    'requirements.colComponent': 'المكوّن',
    'requirements.colSpec': 'المواصفة',
    'requirements.colStatus': 'الحالة',
    'requirements.statusSupported': 'مدعوم',
    'requirements.statusRecommended': 'موصى به',
    'requirements.statusMinimum': 'الحد الأدنى',
    'requirements.statusConditional': 'حسب الحالة',
    'requirements.notesTitle': 'ملاحظات مهمة',
    'requirements.note1': 'القيم المذكورة أعلاه تخص إصدار البرنامج المعروض في هذه الصفحة.',
    'requirements.note2': 'يعمل البرنامج محليًا بعد إكمال التفعيل الأولي.',
    'requirements.note3': 'يلزم اتصال بالإنترنت للتنزيل والتفعيل وتحديث البرنامج.',
    'requirements.note4': 'راجع صفحة الإصدارات للتأكد من ملاحظات كل إصدار.',
    'requirements.viewReleases': 'عرض تفاصيل الإصدارات على GitHub',
    'requirements.os': 'نظام التشغيل',
    'requirements.architecture': 'نوع النظام',
    'requirements.processor': 'المعالج',
    'requirements.ram': 'الذاكرة (RAM)',
    'requirements.diskSpace': 'مساحة القرص',
    'requirements.internet': 'الاتصال بالإنترنت',
    'requirements.internet.desc': 'مطلوب للتنزيل والتفعيل والتحديث؛ العمل اليومي دون اتصال',
    'faq.badge': 'أسئلة شائعة',
    'faq.title': 'أسئلة قبل التحميل',
    'faq.intro': 'إجابات عن العمل دون إنترنت، والأمان، والمتطلبات، والنسخ الاحتياطي، والترخيص، والدعم.',
    'faq.offline.q': 'هل يعمل Mohasabi دون إنترنت؟',
    'faq.offline.a': 'نعم في الاستخدام اليومي. الاتصال يلزم للتنزيل والتفعيل والتحديث فقط.',
    'faq.latest.q': 'كيف أحصل على أحدث إصدار؟',
    'faq.latest.a':
      'استخدم زر التحميل في الموقع للحصول على ملف التثبيت من قناة GitHub Releases الرسمية، أو افتح صفحة الإصدارات إذا تعذر تنزيل الملف مباشرة.',
    'faq.data.q': 'هل بياناتي مخزنة على خادم سحابي؟',
    'faq.data.a':
      'يعتمد Mohasabi على التخزين المحلي للبيانات على جهازك. لا توجد مزامنة سحابية أو نسخ احتياطي خارجي تلقائي.',
    'faq.support.q': 'كيف أحصل على المساعدة؟',
    'faq.support.a':
      'تواصل معنا عبر WhatsApp أو البريد الإلكتروني عن التثبيت أو الخطط أو الاستخدام، مع ذكر الإصدار ووصف المشكلة دون إرسال بيانات محاسبية حساسة.',
    'faq.moreHelp': 'هل تحتاج إلى مزيد من المساعدة؟',
    'faq.openTicket': 'افتح تذكرة على GitHub',
    'cta.title': 'ابدأ بتنظيم أعمالك مع Mohasabi',
    'cta.subtitle': 'نزّل البرنامج، تعرّف على طريقة عمله، واختر الترخيص المناسب لاحتياجاتك.',
    'cta.downloadBtn': 'تحميل Mohasabi الآن',
    'cta.note': 'راجع متطلبات التشغيل الكاملة في دليل الاستخدام.',
    'footer.description': 'برنامج مكتبي لإدارة الفواتير والزبائن والموردين والمخزون على Windows.',
    'footer.links.home': 'الرئيسية',
    'footer.links.features': 'المميزات',
    'footer.links.requirements': 'متطلبات التشغيل',
    'footer.links.faq': 'الأسئلة الشائعة',
    'footer.links.releases': 'الإصدارات الرسمية',
    'footer.links.repository': 'المستودع الرسمي',
    'footer.pagesTitle': 'الأقسام',
    'footer.sectionsTitle': 'أقسام الصفحة الرئيسية',
    'footer.resourcesTitle': 'روابط رسمية',
    'hero.tagline': 'برنامج محاسبة وإدارة أعمال لنظام Windows',
    'hero.specLine': 'Windows 10 وWindows 11 · إصدار 64-bit',
    'hero.footnote': 'برنامج مكتبي ببيانات محلية، مع خيارات الترخيص حسب احتياجاتك.',
    'hero.featuresBtn': 'اكتشف المميزات',
    'challenges.title': 'رتّب التفاصيل، وركّز على عملك',
    'challenges.body1':
      'بين الفواتير المتعددة والديون المستحقة وحركة المخزون، تصبح متابعة التفاصيل مرهقة عندما تتوزّع المعلومات بين دفاتر وملفات مختلفة.',
    'challenges.body2':
      'يجمع Mohasabi أدوات إدارة أعمالك اليومية في برنامج واحد، لتجد معلوماتك بصورة أوضح وتتابع عملياتك بسهولة أكبر.',
    'challenges.b1.title': 'تنظيم أفضل',
    'challenges.b1.desc': 'اجمع الفواتير والزبائن والمنتجات في مكان واحد.',
    'challenges.b2.title': 'متابعة أوضح',
    'challenges.b2.desc': 'راجع المستحقات وحركة المنتجات بدل الاعتماد على التذكّر.',
    'challenges.b3.title': 'عمل دون اتصال دائم',
    'challenges.b3.desc': 'استخدم البرنامج محليًا حتى عند انقطاع الإنترنت.',
    'screenshots.closing': 'صور من البرنامج الحقيقي، حتى تتعرّف على الواجهة قبل تنزيله.',
    'screenshots.pending':
      'نجهّز لقطات شاشة حقيقية من الإصدار المنشور، مع إخفاء أسماء الزبائن وبياناتهم. إلى ذلك الحين، يشرح دليل الاستخدام طريقة العمل خطوة بخطوة.',
    'how.title': 'ابدأ في ثلاث خطوات',
    'how.step1.title': 'نزّل البرنامج',
    'how.step1.desc': 'نزّل ملف تثبيت Mohasabi المتوافق مع Windows 10 أو Windows 11 بنسخة 64-bit.',
    'how.step1.cta': 'تنزيل Mohasabi',
    'how.step2.title': 'ثبّته على حاسوبك',
    'how.step2.desc': 'شغّل ملف التثبيت واتبع التعليمات الظاهرة على الشاشة، واستعن بدليل التثبيت عند الحاجة.',
    'how.step2.cta': 'اقرأ دليل التثبيت',
    'how.step3.title': 'ابدأ بتنظيم أعمالك',
    'how.step3.desc': 'بعد إتمام التثبيت والإعداد المطلوب، أضف المنتجات والزبائن ثم أنشئ أول فاتورة وسجّل معاملاتك.',
    'how.step3.cta': 'تعرّف على طريقة الاستخدام',
    'offline.title': 'أعمالك لا تتوقف بسبب انقطاع الإنترنت',
    'offline.body1':
      'Mohasabi تطبيق مكتبي صُمّم للعمل محليًا على حاسوب Windows، لذلك الاستخدام المحلي المعتاد لا يحتاج إلى اتصال دائم بالإنترنت.',
    'offline.body2':
      'نظّم بياناتك وأدر عملياتك من جهازك، مع مراعاة أن تنزيل البرنامج وملفات التحديث والتواصل مع الدعم تحتاج إلى اتصال.',
    'offline.note': 'احتفظ بنسخة احتياطية حديثة من بياناتك، حتى إذا كنت تستخدم البرنامج دون اتصال.',
    'security.title': 'بيانات أعمالك تستحق العناية',
    'security.body':
      'بياناتك المحاسبية جزء مهم من عملك. لذلك يعتمد Mohasabi على التخزين المحلي ويوفّر نسخًا احتياطية واستعادة وفق الوظائف المتاحة في الإصدار.',
    'security.s1.title': 'تخزين محلي',
    'security.s1.desc': 'تُحفظ بيانات العمل على الحاسوب الذي تستخدمه، وفق إعداد البرنامج.',
    'security.s2.title': 'نسخ احتياطي تلقائي',
    'security.s2.desc':
      'نسخ احتياطية ZIP مؤرَّخة مع تحقق SHA-256 ومدة احتفاظ قابلة للضبط، وزر «نسخ الآن» وفتح مجلد النسخ.',
    'security.s3.title': 'استعادة مضبوطة',
    'security.s3.desc':
      'قائمة نسخ مع التاريخ والحجم والحالة، وتحقق كامل قبل الاستعادة، ونسخة طوارئ لبياناتك الحالية وإمكانية التراجع.',
    'security.disclaimer':
      'لا يوجد نظام يمكن وصفه بأنه آمن بنسبة 100%. احمِ حاسوبك وكلمات مرورك، واحتفظ بنسخة احتياطية منفصلة عن الجهاز عند الإمكان، وتحقّق دوريًا من إمكانية استعادتها.',
    'audience.title': 'مصمَّم لاحتياجات الأعمال اليومية',
    'audience.merchants.title': 'التجار وأصحاب المحلات',
    'audience.merchants.desc': 'تابع المنتجات والمبيعات والفواتير وحسابات الزبائن.',
    'audience.craft.title': 'الحرفيون ومقدمو الخدمات',
    'audience.craft.desc': 'نظّم عروض الأسعار والفواتير وسجلات معاملات العملاء.',
    'audience.small.title': 'المؤسسات الصغيرة والناشئة',
    'audience.small.desc': 'اجمع معلومات الزبائن والمنتجات والطلبات في أداة مكتبية واحدة.',
    'audience.teams.title': 'فرق العمل والإدارات الصغيرة',
    'audience.teams.desc': 'استخدم البرنامج ضمن بيئة العمل المحلية المناسبة لطبيعة مؤسستك وإعداداتك.',
    'preview.title': 'اختر الترخيص المناسب لعملك',
    'preview.subtitle': 'اختر الخطة والمدة التي تناسب احتياجاتك، وراجع تفاصيل كل خطة قبل الطلب.',
    'preview.from': 'من',
    'preview.ask': 'استفسر عن',
    'preview.compare': 'مقارنة الخطط والأسعار',
    'preview.note':
      'الأسعار بالدينار الجزائري وإرشادية. تواصل معنا لتأكيد السعر الحالي وتفاصيل الخطة وطريقة الحصول على الترخيص قبل إتمام الطلب.',
    'preview.tag.standard': 'للأعمال اليومية والاحتياجات الأساسية.',
    'preview.tag.pro': 'للأعمال التي تحتاج إلى إمكانات أوسع وفق المميزات المضمنة في الخطة.',
    'preview.tag.enterprise': 'للأنشطة التي تحتاج إلى الخطة الأعلى ضمن عروض Mohasabi.',
    'faq.requirements.q': 'ما متطلبات تشغيل البرنامج؟',
    'faq.requirements.a':
      'يستهدف الإصدار الحالي Windows 10 وWindows 11 بنسخة 64-bit. راجع دليل الاستخدام لمعرفة متطلبات المعالجة والذاكرة والتخزين المؤكدة قبل التثبيت.',
    'faq.backup.q': 'كيف أسترجع بياناتي أو أستخدم النسخ الاحتياطي؟',
    'faq.backup.a':
      'احتفظ بنسخة احتياطية حديثة في مكان آمن، واتبع خطوات النسخ والاستعادة الواردة في دليل الإصدار الذي تستخدمه. قبل استعادة نسخة قديمة، تحقّق من أنها تخص البيانات الصحيحة وأنها متوافقة مع إصدار البرنامج.',
    'faq.free.q': 'هل تنزيل البرنامج يعني أن جميع المميزات مجانية؟',
    'faq.free.a':
      'تنزيل ملف التثبيت لا يعني أن استخدام البرنامج أو كل الخطط مجاني. تختلف شروط الاستخدام وفق الترخيص الذي تختاره؛ تواصل معنا لتأكيد التفاصيل قبل الشراء.',
    'cta.pricingBtn': 'عرض الأسعار',
    'cta.supportLink': 'تحتاج إلى مساعدة؟ تواصل مع الدعم',
    'footer.links.privacy': 'سياسة الخصوصية',
    'footer.trademark': 'Windows علامة تجارية لشركة Microsoft. Mohasabi برنامج مستقل.',
    'privacy.title': 'سياسة الخصوصية',
    'privacy.subtitle': 'ما يجمعه هذا الموقع، وأين تعيش بيانات عملك فعليًا.',
    'privacy.local.title': 'بيانات عملك تبقى على جهازك',
    'privacy.local.body':
      'يخزّن Mohasabi بيانات الفواتير والزبائن والمنتجات محليًا على الحاسوب الذي تستخدمه، ضمن ملفات البرنامج ومجلد البيانات الذي تحدده. لا تُرفع إلى خادم ولا تُرسل إلى جهة خارجية.',
    'privacy.site.title': 'هذا الموقع لا يتتبعك',
    'privacy.site.body':
      'صفحات التعريف والأسعار والدليل ثابتة تمامًا: لا تحليلات، ولا ملفات تعريف إعلانية، ولا نوافذ تتبع، ولا خادم يطّلع على ما تكتبه. لا نطلب بريدك ولا رقمك للاطلاع على المحتوى.',
    'privacy.contact.title': 'عندما تتواصل معنا',
    'privacy.contact.body':
      'تفتح أزرار WhatsApp والبريد رسالة على جهازك بما اخترته من خطة أو مدة أو نوع طلب. نطّلع فقط على ما ترسله بنفسك، ونستخدمه للرد على استفسارك أو طلب الترخيص.',
    'privacy.backup.title': 'النسخ الاحتياطي مسؤوليتك',
    'privacy.backup.body':
      'البرنامج ينشئ نسخًا احتياطية على جهازك، لكن فقدان البيانات يتبع تلف القرص أو حذف المجلد أو تسرّب الحاسوب. احتفظ بنسخة منفصلة خارج الجهاز وتحقّق من استعادتها.',
    'seo.ogTitle': 'Mohasabi — نظّم أعمالك من مكان واحد',
    'seo.ogDescription':
      'تعرّف على Mohasabi، ونظّم الفواتير والزبائن والموردين والمخزون من خلال برنامج مكتبي لنظام Windows.',
    'seo.page.privacy': 'سياسة الخصوصية — Mohasabi',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'footer.versionLabel': 'الإصدار',
    'language.label': 'لغة الواجهة',
    'contact.whatsapp': 'واتساب',
    'contact.email': 'البريد الإلكتروني',
    'seo.title': 'Mohasabi | برنامج محاسبة وفواتير لنظام Windows',
    'seo.description':
      'نظّم فواتيرك وعروض الأسعار وحسابات الزبائن والموردين والمخزون باستخدام Mohasabi، برنامج مكتبي لنظام Windows يدعم العربية والفرنسية والعمل المحلي دون اتصال دائم بالإنترنت.',
    'a11y.mainNav': 'التنقل الرئيسي',
    'a11y.mobileNav': 'تنقل الهاتف',
    'a11y.toggleMenu': 'فتح القائمة أو إغلاقها',
    'a11y.skipToContent': 'الانتقال إلى المحتوى الرئيسي',
    'nav.guide': 'طريقة التشغيل',
    'nav.pricing': 'العروض والترخيص',
    'nav.support': 'الدعم والتواصل',
    'nav.features': 'المميزات',
    'nav.screenshots': 'لقطات الشاشة',
    'nav.how': 'كيفية العمل',
    'a11y.logoAlt': 'شعار Mohasabi',
    'seo.page.home': 'Mohasabi | برنامج محاسبة وفواتير لنظام Windows',
    'seo.page.guide': 'طريقة التشغيل — Mohasabi',
    'seo.page.pricing': 'العروض والترخيص — Mohasabi',
    'seo.page.support': 'الدعم والتواصل — Mohasabi',
    'footer.links.guide': 'طريقة التشغيل',
    'footer.links.pricing': 'العروض والترخيص',
    'footer.links.support': 'الدعم والتواصل',
    'plan.standard.name': 'Standard',
    'plan.pro.name': 'Pro',
    'plan.enterprise.name': 'Enterprise',
    'duration.month': 'شهر واحد',
    'duration.quarter': '3 أشهر',
    'duration.halfYear': '6 أشهر',
    'duration.year': '12 شهرًا',
    'pricing.badge': 'التراخيص',
    'pricing.title': 'اختر الترخيص المناسب لعملك',
    'pricing.subtitle': 'الأسعار المعروضة إرشادية وقابلة للتغيير وفق الشروط التجارية المتفق عليها عند الطلب.',
    'pricing.recommended': 'الأكثر اختيارًا',
    'pricing.durationLabel': 'المدة',
    'pricing.priceLabel': 'السعر',
    'pricing.planCol': 'الخطة',
    'pricing.selectPlan': 'طلب هذا الترخيص',
    'pricing.askPlan': 'استفسار عن الخطة',
    'pricing.whatsappIntro': 'مرحبًا، أرغب في طلب ترخيص Mohasabi:',
    'pricing.inquiryIntro': 'مرحبًا، لدي استفسار حول تراخيص Mohasabi:',
    'pricing.orEmail': 'أو راسلنا بالبريد',
    'pricing.contactTitle': 'لا يوجد دفع داخل الموقع',
    'pricing.contactBody': 'اختيارك للخطة والمدة يفتح رسالة مختصرة إلى WhatsApp أو البريد، ثم تُستكمل التفاصيل والشروط مباشرة.',
    'pricing.indicativeTitle': 'الأسعار إرشادية',
    'pricing.indicativeBody': 'هذه الأرقام مرجعية وقد تتغير وفق العرض التجاري عند الطلب، ولا تُعد عقدًا أو التزامًا بسعر ثابت.',
    'pricing.paymentTitle': 'لا دفع إلكتروني',
    'pricing.paymentBody': 'لا يعرض الموقع بوابة دفع ولا يجمع بيانات بطاقات، ولا يتم تفعيل أي ترخيص تلقائيًا من المتصفح.',
    'pricing.termsTitle': 'الشروط عند الطلب',
    'pricing.termsBody': 'مدة الترخيص وعدد الأجهزة وشروط الدعم تُحدد في الاتفاق المباشر، ولا يعرض الموقع شروطًا غير مؤكدة.',
    'guide.badge': 'دليل البدء',
    'guide.title': 'ابدأ مع Mohasabi',
    'guide.subtitle': 'من تنزيل ملف التثبيت إلى أول عملية يومية، بترتيب مختصر يعتمد على ما هو متاح فعلًا في البرنامج.',
    'guide.videoTitle': 'شرح مصوّر',
    'guide.videoPendingTitle': 'الفيديو التعليمي قيد الإعداد',
    'guide.videoPendingBody': 'لم يُنشر فيديو حقيقي بعد. هذه المساحة مخصّصة له بنسبة 16:9، ولن يُعرض أي رابط فيديو مؤقت أو زر تشغيل لا يعمل.',
    'guide.videoAria': 'مساحة مخصصة للفيديو التعليمي، لم يُوفر المحتوى بعد',
    'guide.stepsTitle': 'خطوات البدء',
    'guide.step1.title': 'حمّل ملف التثبيت',
    'guide.step1.desc': 'احصل على Mohasabi_Setup_v1.0.3.exe من قناة الإصدارات الرسمية على GitHub.',
    'guide.step2.title': 'ثبّت البرنامج على Windows',
    'guide.step2.desc': 'شغّل ملف الإعداد واتبع خطوات التثبيت على جهاز يعمل بنظام Windows 10 أو Windows 11 بعمارة 64-bit.',
    'guide.step3.title': 'شغّل Mohasabi',
    'guide.step3.desc': 'افتح البرنامج من اختصار سطح المكتب أو قائمة البرامج بعد اكتمال التثبيت.',
    'guide.step4.title': 'ابدأ بإدخال بياناتك',
    'guide.step4.desc': 'أضف عملاءك وأنشئ فواتيرك وتابع عملياتك اليومية من نفس الواجهة، مع بقاء البيانات على جهازك.',
    'guide.stepNote': 'تحقّق من رقم الإصدار واسم الملف الظاهرين أدناه قبل المتابعة.',
    'guide.functionsTitle': 'الوظائف الأساسية المتوفرة',
    'guide.functionsIntro': 'الشاشات الأساسية التي يفتحها المستخدم بعد اكتمال التثبيت.',
    'guide.helpTitle': 'تعثّر التثبيت أو الترخيص؟',
    'guide.helpBody': 'انتقل إلى صفحة الدعم لاختيار نوع الطلب وفتح رسالة مختصرة بالواتساب أو البريد.',
    'guide.supportCta': 'الدعم والتواصل',
    'guide.pricingCta': 'العروض والترخيص',
    'support.badge': 'الدعم',
    'support.title': 'نحن هنا لمساعدتك',
    'support.subtitle': 'اختر قناة التواصل المناسبة، وحدّد نوع طلبك حتى تصل الرسالة واضحة من البداية.',
    'support.whatsappTitle': 'واتساب',
    'support.whatsappBody': 'أسرع طريقة للاستفسار عن التثبيت أو الترخيص أو الاستخدام اليومي.',
    'support.emailTitle': 'البريد الإلكتروني',
    'support.emailBody': 'مناسب للطلبات التي تحتاج تفاصيل أو ملفات وصف مشكلة مكتوب.',
    'support.issuesTitle': 'الإبلاغ عن خلل في البرنامج',
    'support.issuesBody': 'إذا كان المشكلة قابلة للتكرار، يمكن فتح Issue في المستودع الرسمي مع ذكر الخطوات والإصدار.',
    'support.requestTitle': 'حدّد نوع طلبك',
    'support.requestBody': 'تفتح كل بطاقة رسالة واتساب مختصرة تحتوي على نوع الطلب فقط، دون أي بيانات شخصية أو مالية.',
    'support.reqIntro': 'مرحبًا، أرغب في الدعم بخصوص:',
    'support.req.install': 'مشكلة في التثبيت أو التشغيل',
    'support.req.activation': 'طلب تفعيل ترخيص',
    'support.req.duration': 'استفسار عن مدة الترخيص',
    'support.req.renewal': 'استفسار عن تجديد الترخيص',
    'support.req.purchase': 'طلب شراء ترخيص',
    'support.req.other': 'استفسار عام',
    'support.infoTitle': 'معلومات تساعد على فهم مشكلتك',
    'support.info1': 'إصدار البرنامج: Mohasabi v1.0.3 أو الإصدار الظاهر داخل البرنامج.',
    'support.info2': 'نظام التشغيل: Windows 10 أو 11 ونوع العمارة.',
    'support.info3': 'الخطوات التي أدّت إلى المشكلة بالتفصيل.',
    'support.info4': 'نص رسالة الخطأ كما تظهر، أو لقطة شاشة لها.',
    'support.info5': 'متى بدأت المشكلة وهل سبقتها تحديثات أو تغييرات في الجهاز.',
    'support.avoidTitle': 'لا ترسل هذه البيانات عبر المحادثة',
    'support.avoid1': 'كلمات المرور أو مفاتيح التفعيل أو ملفات الترخيص.',
    'support.avoid2': 'قواعد بيانات العملاء أو الفواتير الحقيقية أو أي ملفات تحتوي بيانات أشخاص.',
    'support.avoid3': 'معلومات مالية حساسة أو بيانات بطاقات دفع.',
    'support.faq1.q': 'كيف أبلغ عن خلل يمكن إعادة حدوثه؟',
    'support.faq1.a': 'اذكر إصدار البرنامج وخطوات إعادة الحدوث ونص الرسالة الظاهرة، ويمكن فتح Issue في المستودع الرسمي بدل ذلك.',
    'support.faq2.q': 'هل تتوفر نسخة تجريبية قبل الشراء؟',
    'support.faq2.a': 'لا يعرض الموقع نسخة تجريبية تلقائية. تُناقش إمكانية التجربة أو العرض التوضيحي عند التواصل المباشر حسب ما يُتفق عليه.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.download': 'Télécharger Mohasabi',
    'hero.title': 'Votre activité, plus claire. Vos comptes, plus simples.',
    'hero.subtitle':
      'Créez vos factures, devis et documents commerciaux, et suivez clients, stock et créances depuis un seul endroit. Avec Mohasabi, organisez votre quotidien sur votre ordinateur et travaillez même sans connexion permanente à Internet.',
    'hero.downloadBtn': 'Télécharger le programme',
    'hero.downloadPendingBtn': 'Téléchargement en préparation',
    'hero.version': 'Version',
    'hero.windowsOnly': 'pour Windows',
    'hero.pendingNote':
      'Le fichier d\'installation de cette version est en cours de publication sur le canal officiel.',
    'hero.releasesLink': 'Page des versions',
    'hero.illustrationAlt': 'Illustration de l\'interface du logiciel, et non une capture réelle',
    'hero.illustrationCaption': 'Une seule interface pour suivre factures, clients et stock.',
    'features.badge': 'Fonctionnalités',
    'features.title': 'Tout pour gérer votre journée de travail',
    'features.subtitle': 'Les capacités réellement disponibles dans la version actuelle.',
    'features.localData.title': 'Données locales et sauvegarde',
    'features.localData.desc':
      'Vos données professionnelles restent sur votre machine, avec des archives ZIP horodatées, une vérification SHA-256 et une restauration qui copie d\'abord vos données actuelles.',
    'features.documents.title': 'Factures et devis',
    'features.documents.desc':
      'Créez factures, devis, commandes, bons de livraison et ordres de mission, et centralisez vos documents commerciaux.',
    'features.partners.title': 'Clients et fournisseurs',
    'features.partners.desc':
      'Conservez les fiches clients avec soldes et commandes en cours, et suivez les commandes fournisseurs et les réceptions.',
    'features.debts.title': 'Créances et soldes',
    'features.debts.desc':
      'Consultez le solde de chaque client et le report des impayés pour distinguer ce qui est encaissé de ce qui reste dû.',
    'features.stock.title': 'Stock et produits',
    'features.stock.desc':
      'Gérez le catalogue produits et services et les quantités, avec point de réapprovisionnement et vue des stocks bas.',
    'features.reports.title': 'Rapports et exports',
    'features.reports.desc':
      'Tableau de bord, rapports mensuels, déclaration TVA par taux et meilleurs clients, avec export PDF, Excel, Word et CSV.',
    'features.languages.title': 'Interface arabe, française et anglaise',
    'features.languages.desc':
      'Basculez entre les trois langues avec support RTL ou LTR, et choisissez le thème clair, sombre ou système.',
    'screenshots.badge': 'Captures d\'écran',
    'screenshots.title': 'Découvrez Mohasabi tel qu\'il est',
    'screenshots.subtitle': 'Explorez l\'interface réelle et voyez comment les informations sont présentées.',
    'screenshots.zoomHint': 'Cliquez sur une capture pour l\'agrandir • Navigation au clavier disponible',
    'screenshots.closeAria': 'Fermer la visionneuse',
    'screenshots.prevAria': 'Capture précédente',
    'screenshots.nextAria': 'Capture suivante',
    'screenshots.alt.main': 'Interface de Mohasabi pour gérer factures et activité',
    'screenshots.alt.dashboard': 'Tableau de bord',
    'screenshots.alt.invoices': 'Factures et devis',
    'screenshots.alt.clients': 'Clients et fournisseurs',
    'screenshots.alt.products': 'Produits et stock',
    'requirements.badge': 'Configuration',
    'requirements.title': 'Configuration requise pour Mohasabi',
    'requirements.colComponent': 'Composant',
    'requirements.colSpec': 'Spécification',
    'requirements.colStatus': 'Statut',
    'requirements.statusSupported': 'Pris en charge',
    'requirements.statusRecommended': 'Recommandé',
    'requirements.statusMinimum': 'Minimum',
    'requirements.statusConditional': 'Conditionnel',
    'requirements.notesTitle': 'Notes importantes',
    'requirements.note1': 'Les valeurs ci-dessus correspondent à la version affichée sur cette page.',
    'requirements.note2': 'L\'application fonctionne hors ligne après l\'activation initiale.',
    'requirements.note3':
      'Une connexion Internet est requise pour le téléchargement, l\'activation et les mises à jour.',
    'requirements.note4': 'Consultez la page des versions pour les notes de détail.',
    'requirements.viewReleases': 'Voir les détails sur GitHub Releases',
    'requirements.os': 'Système d\'exploitation',
    'requirements.architecture': 'Architecture',
    'requirements.processor': 'Processeur',
    'requirements.ram': 'Mémoire (RAM)',
    'requirements.diskSpace': 'Espace disque',
    'requirements.internet': 'Connexion Internet',
    'requirements.internet.desc':
      'Requise pour le téléchargement, l\'activation et les mises à jour ; travail quotidien hors ligne',
    'faq.badge': 'Questions fréquentes',
    'faq.title': 'Questions avant le téléchargement',
    'faq.intro':
      'Réponses sur le travail hors ligne, la sécurité, les prérequis, la sauvegarde, la licence et le support.',
    'faq.offline.q': 'Mohasabi fonctionne-t-il sans Internet ?',
    'faq.offline.a': "Oui pour l'usage quotidien. Une connexion est nécessaire uniquement pour le téléchargement, l'activation et les mises à jour.",
    'faq.latest.q': 'Comment obtenir la dernière version ?',
    'faq.latest.a':
      'Utilisez le bouton de téléchargement pour obtenir le fichier depuis le canal GitHub Releases officiel, ou ouvrez la page des versions si le téléchargement direct échoue.',
    'faq.data.q': 'Mes données sont-elles stockées sur un serveur cloud ?',
    'faq.data.a':
      'Mohasabi stocke les données localement sur votre appareil. Il n\'y a pas de synchronisation cloud ni de sauvegarde externe automatique.',
    'faq.support.q': 'Comment obtenir de l\'aide ?',
    'faq.support.a':
      "Écrivez-nous via WhatsApp ou l'adresse e-mail indiquée sur la page d'assistance pour l'installation, les plans ou l'usage, en précisant la version et le problème, sans envoyer de données comptables sensibles.",
    'faq.moreHelp': 'Besoin de plus d\'aide ?',
    'faq.openTicket': 'Ouvrir un ticket sur GitHub',
    'cta.title': 'Organisez votre activité avec Mohasabi',
    'cta.subtitle': 'Téléchargez le logiciel, découvrez son fonctionnement et choisissez la licence adaptée.',
    'cta.downloadBtn': 'Télécharger Mohasabi maintenant',
    'cta.note': "Consultez la configuration requise dans le mode d'emploi.",
    'footer.description': 'Une application de bureau pour gérer factures, clients, fournisseurs et stock sur Windows.',
    'footer.links.home': 'Accueil',
    'footer.links.features': 'Fonctionnalités',
    'footer.links.requirements': 'Configuration requise',
    'footer.links.faq': 'Questions fréquentes',
    'footer.links.releases': 'Versions officielles',
    'footer.links.repository': 'Dépôt officiel',
    'footer.pagesTitle': 'Pages',
    'footer.sectionsTitle': 'Sections',
    'footer.resourcesTitle': 'Liens officiels',
    'hero.tagline': 'Logiciel de comptabilité et de gestion pour Windows',
    'hero.specLine': 'Windows 10 et Windows 11 · 64 bits',
    'hero.footnote': 'Une application de bureau avec données locales et des licences selon vos besoins.',
    'hero.featuresBtn': 'Découvrir les fonctionnalités',
    'challenges.title': 'Rangez les détails, concentrez-vous sur votre activité',
    'challenges.body1':
      'Entre les factures multiples, les créances en cours et les mouvements de stock, suivre les détails devient épuisant quand l\'information est dispersée entre carnets et fichiers.',
    'challenges.body2':
      'Mohasabi réunit les outils de gestion quotidienne dans un seul logiciel : vous retrouvez vos informations plus clairement et suivez vos opérations plus facilement.',
    'challenges.b1.title': 'Mieux organisé',
    'challenges.b1.desc': 'Réunissez factures, clients et produits au même endroit.',
    'challenges.b2.title': 'Suivi plus clair',
    'challenges.b2.desc': 'Consultez les créances et les mouvements de stock au lieu de compter sur la mémoire.',
    'challenges.b3.title': 'Sans connexion permanente',
    'challenges.b3.desc': 'Utilisez le logiciel en local même quand Internet est coupé.',
    'screenshots.closing': 'Des images du logiciel réel, pour découvrir l\'interface avant de le télécharger.',
    'screenshots.pending':
      "Nous préparons de vraies captures d'écran de la version publiée, avec les noms et données des clients masqués. En attendant, le mode d'emploi explique chaque étape.",
    'how.title': 'Débutez en trois étapes',
    'how.step1.title': 'Téléchargez le programme',
    'how.step1.desc': 'Téléchargez le fichier d\'installation Mohasabi pour Windows 10 ou 11 en 64 bits.',
    'how.step1.cta': 'Télécharger Mohasabi',
    'how.step2.title': 'Installez-le sur votre ordinateur',
    'how.step2.desc':
      'Lancez le fichier d\'installation et suivez les instructions à l\'écran. Consultez le guide d\'installation si besoin.',
    'how.step2.cta': 'Lire le guide d\'installation',
    'how.step3.title': 'Organisez votre activité',
    'how.step3.desc':
      'Après l\'installation et la configuration, ajoutez produits et clients, créez votre première facture et enregistrez vos opérations.',
    'how.step3.cta': 'Voir comment l\'utiliser',
    'offline.title': 'Votre activité ne s\'arrête pas avec Internet',
    'offline.body1':
      'Mohasabi est une application de bureau pensée pour un usage local sur Windows : l\'usage courant ne demande pas de connexion permanente.',
    'offline.body2':
      'Organisez vos données et gérez vos opérations depuis votre machine, en gardant à l\'esprit que le téléchargement, les mises à jour et le support demandent une connexion.',
    'offline.note': 'Gardez une sauvegarde récente de vos données, même si vous utilisez le logiciel hors connexion.',
    'security.title': 'Vos données professionnelles méritent des soins',
    'security.body':
      'Vos données comptables font partie de votre activité. Mohasabi les stocke localement et fournit sauvegarde et restauration selon les fonctions de la version.',
    'security.s1.title': 'Stockage local',
    'security.s1.desc': 'Les données de travail restent sur l\'ordinateur que vous utilisez, selon la configuration.',
    'security.s2.title': 'Sauvegarde automatique',
    'security.s2.desc':
      'Archives ZIP horodatées avec vérification SHA-256, rétention réglable, bouton « Sauvegarder maintenant » et ouverture du dossier.',
    'security.s3.title': 'Restauration contrôlée',
    'security.s3.desc':
      'Liste des sauvegardes (date, taille, statut), validation complète préalable, sauvegarde d\'urgence automatique et retour arrière.',
    'security.disclaimer':
      'Aucun système n\'est sûr à 100 %. Protégez votre ordinateur et vos mots de passe, gardez une sauvegarde séparée quand c\'est possible et vérifiez régulièrement la restauration.',
    'audience.title': 'Pensé pour les besoins du quotidien',
    'audience.merchants.title': 'Commerçants et gérants de magasin',
    'audience.merchants.desc': 'Suivez produits, ventes, factures et comptes clients.',
    'audience.craft.title': 'Artisans et prestataires',
    'audience.craft.desc': 'Organisez devis, factures et historique des clients.',
    'audience.small.title': 'Petites structures et startups',
    'audience.small.desc': 'Réunissez clients, produits et commandes dans un seul outil de bureau.',
    'audience.teams.title': 'Équipes et petits services',
    'audience.teams.desc': 'Utilisez le logiciel dans votre environnement local, selon votre organisation.',
    'preview.title': 'Choisissez la licence adaptée',
    'preview.subtitle': 'Sélectionnez le plan et la durée qui conviennent, et vérifiez le détail de chaque plan avant toute demande.',
    'preview.from': 'à partir de',
    'preview.ask': 'Demander',
    'preview.compare': 'Comparer les plans et les prix',
    'preview.note':
      'Prix en dinars algériens, donnés à titre indicatif. Contactez-nous pour confirmer le prix actuel, les détails du plan et la remise de la licence avant toute demande.',
    'preview.tag.standard': 'Pour l\'activité quotidienne et les besoins essentiels.',
    'preview.tag.pro': 'Pour une activité qui demande plus de capacités, selon les fonctions incluses dans le plan.',
    'preview.tag.enterprise': 'Pour les activités qui ont besoin du niveau le plus élevé des offres Mohasabi.',
    'faq.requirements.q': 'Quelles sont les conditions d\'exécution ?',
    'faq.requirements.a':
      'La version actuelle cible Windows 10 et Windows 11 en 64 bits. Consultez le guide pour connaître les exigences vérifiées en processeur, mémoire et disque avant l\'installation.',
    'faq.backup.q': 'Comment restaurer mes données ou utiliser une sauvegarde ?',
    'faq.backup.a':
      'Gardez une sauvegarde récente dans un endroit sûr et suivez les étapes du guide pour la version utilisée. Avant de restaurer une archive ancienne, vérifiez qu\'elle correspond aux bonnes données et à la version du logiciel.',
    'faq.free.q': 'Télécharger le programme signifie-t-il que tout est gratuit ?',
    'faq.free.a':
      'Télécharger le fichier d\'installation ne rend pas l\'usage ni tous les plans gratuits. Les conditions dépendent de la licence choisie ; contactez-nous pour confirmer les détails avant l\'achat.',
    'cta.pricingBtn': 'Voir les tarifs',
    'cta.supportLink': 'Besoin d\'aide ? Contactez le support',
    'footer.links.privacy': 'Politique de confidentialité',
    'footer.trademark': 'Windows est une marque de Microsoft. Mohasabi est un logiciel indépendant.',
    'privacy.title': 'Politique de confidentialité',
    'privacy.subtitle': 'Ce que ce site collecte, et où vivent réellement vos données professionnelles.',
    'privacy.local.title': 'Vos données restent sur votre machine',
    'privacy.local.body':
      'Mohasabi enregistre factures, clients et produits en local sur l\'ordinateur que vous utilisez, dans les fichiers du programme et le dossier de données choisi. Rien n\'est envoyé à un serveur ni à un tiers.',
    'privacy.site.title': 'Ce site ne vous suit pas',
    'privacy.site.body':
      'Les pages de présentation, tarifs, guide et support sont entièrement statiques : aucune analyse d\'audience, aucun cookie publicitaire, aucun traqueur, et aucun serveur qui lit ce que vous écrivez. Nous ne demandons ni e-mail ni téléphone pour consulter le contenu.',
    'privacy.contact.title': 'Quand vous nous contactez',
    'privacy.contact.body':
      'Les boutons WhatsApp et e-mail ouvrent un message sur votre appareil, prérempli avec le plan, la durée ou le type de demande choisi. Nous ne prenons connaissance que de ce que vous envoyez vous-même, pour répondre à votre question ou à votre demande de licence.',
    'privacy.backup.title': 'La sauvegarde vous revient',
    'privacy.backup.body':
      'Le logiciel crée des sauvegardes sur votre machine, mais la perte de données suit un disque HS, un dossier supprimé ou un ordinateur compromis. Gardez une copie hors de l\'appareil et testez sa restauration.',
    'seo.ogTitle': 'Mohasabi — organisez votre activité depuis un seul endroit',
    'seo.ogDescription':
      'Découvrez Mohasabi et gérez factures, clients, fournisseurs et stock avec une application de bureau pour Windows.',
    'seo.page.privacy': 'Politique de confidentialité — Mohasabi',
    'footer.copyright': 'Tous droits réservés.',
    'footer.versionLabel': 'Version',
    'language.label': 'Langue de l\'interface',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'E-mail',
    'seo.title': 'Mohasabi | Comptabilité et facturation pour Windows',
    'seo.description':
      'Organisez factures, devis, comptes clients, fournisseurs et stock avec Mohasabi, une application de bureau Windows en arabe, français et anglais, fonctionnant en local sans connexion permanente.',
    'a11y.mainNav': 'Navigation principale',
    'a11y.mobileNav': 'Navigation mobile',
    'a11y.toggleMenu': 'Ouvrir ou fermer le menu',
    'a11y.skipToContent': 'Aller au contenu principal',
    'nav.guide': "Mode d'emploi",
    'nav.pricing': 'Offres et licence',
    'nav.support': 'Assistance',
    'nav.features': 'Fonctionnalités',
    'nav.screenshots': "Captures d'écran",
    'nav.how': 'Comment ça marche',
    'a11y.logoAlt': 'Logo Mohasabi',
    'seo.page.home': 'Mohasabi | Comptabilité et facturation pour Windows',
    'seo.page.guide': "Mode d'emploi — Mohasabi",
    'seo.page.pricing': 'Offres et licence — Mohasabi',
    'seo.page.support': 'Assistance — Mohasabi',
    'footer.links.guide': "Mode d'emploi",
    'footer.links.pricing': 'Offres et licence',
    'footer.links.support': 'Assistance',
    'plan.standard.name': 'Standard',
    'plan.pro.name': 'Pro',
    'plan.enterprise.name': 'Enterprise',
    'duration.month': '1 mois',
    'duration.quarter': '3 mois',
    'duration.halfYear': '6 mois',
    'duration.year': '12 mois',
    'pricing.badge': 'Licences',
    'pricing.title': 'Choisissez la licence adaptée à votre activité',
    'pricing.subtitle': "Les tarifs affichés sont indicatifs et peuvent évoluer selon les conditions commerciales convenues à la commande.",
    'pricing.recommended': 'Le plus choisi',
    'pricing.durationLabel': 'Durée',
    'pricing.priceLabel': 'Tarif',
    'pricing.planCol': 'Offre',
    'pricing.selectPlan': 'Demander cette licence',
    'pricing.askPlan': "Poser une question sur l'offre",
    'pricing.whatsappIntro': 'Bonjour, je souhaite demander une licence Mohasabi :',
    'pricing.inquiryIntro': 'Bonjour, j\'ai une question sur les licences Mohasabi :',
    'pricing.orEmail': 'ou écrivez-nous par e-mail',
    'pricing.contactTitle': 'Aucun paiement sur le site',
    'pricing.contactBody': "Le choix de l'offre et de la durée ouvre un message court vers WhatsApp ou l'e-mail, puis les détails se traitent directement.",
    'pricing.indicativeTitle': 'Tarifs indicatifs',
    'pricing.indicativeBody': "Ces montants sont donnés à titre de référence et peuvent changer selon l'offre commerciale au moment de la commande ; ils ne constituent pas un contrat.",
    'pricing.paymentTitle': 'Pas de paiement en ligne',
    'pricing.paymentBody': "Le site n'affiche aucune passerelle de paiement, ne collecte aucune donnée de carte et n'active aucune licence automatiquement depuis le navigateur.",
    'pricing.termsTitle': 'Conditions à la commande',
    'pricing.termsBody': "La durée de la licence, le nombre de postes et les conditions d'assistance sont définis lors de l'échange direct ; le site n'invente aucune condition.",
    'guide.badge': "Guide de démarrage",
    'guide.title': 'Commencer avec Mohasabi',
    'guide.subtitle': "Du téléchargement du fichier d'installation à votre première opération quotidienne, avec un déroulé fondé sur ce que le logiciel propose réellement.",
    'guide.videoTitle': 'Explication vidéo',
    'guide.videoPendingTitle': 'La vidéo est en préparation',
    'guide.videoPendingBody': "Aucune vidéo réelle n'a encore été publiée. Cet emplacement est réservé au format 16:9 ; aucun lien vidéo provisoire ni bouton de lecture inactif n'est affiché.",
    'guide.videoAria': "Emplacement réservé à la vidéo d'assistance, contenu non disponible",
    'guide.stepsTitle': 'Étapes de démarrage',
    'guide.step1.title': "Téléchargez le fichier d'installation",
    'guide.step1.desc': 'Récupérez Mohasabi_Setup_v1.0.3.exe depuis le canal officiel des versions sur GitHub.',
    'guide.step2.title': 'Installez sous Windows',
    'guide.step2.desc': "Lancez le programme d'installation et suivez les étapes sur un PC sous Windows 10 ou Windows 11 64 bits.",
    'guide.step3.title': 'Lancez Mohasabi',
    'guide.step3.desc': "Ouvrez le logiciel depuis le raccourci du bureau ou le menu des programmes une fois l'installation terminée.",
    'guide.step4.title': 'Commencez à saisir vos données',
    'guide.step4.desc': 'Ajoutez vos clients, créez vos factures et suivez vos opérations quotidiennes dans la même interface, avec des données restées sur votre machine.',
    'guide.stepNote': "Vérifiez le numéro de version et le nom du fichier affichés ci-dessous avant de continuer.",
    'guide.functionsTitle': 'Fonctions principales disponibles',
    'guide.functionsIntro': "Les écrans principaux accessibles après l'installation.",
    'guide.helpTitle': 'Blocage à l\'installation ou à la licence ?',
    'guide.helpBody': "Ouvrez la page d'assistance pour choisir le type de demande et rédiger un message court via WhatsApp ou e-mail.",
    'guide.supportCta': "Assistance",
    'guide.pricingCta': 'Offres et licence',
    'support.badge': 'Assistance',
    'support.title': 'Nous sommes là pour vous aider',
    'support.subtitle': "Choisissez le canal adapté et précisez le type de demande pour que le message soit clair dès le départ.",
    'support.whatsappTitle': 'WhatsApp',
    'support.whatsappBody': "Le plus rapide pour l'installation, la licence ou l'utilisation quotidienne.",
    'support.emailTitle': 'E-mail',
    'support.emailBody': "Adapté aux demandes détaillées ou contenant une description écrite du problème.",
    'support.issuesTitle': "Signaler un dysfonctionnement",
    'support.issuesBody': "Si le problème est reproductible, une Issue peut être ouverte sur le dépôt officiel avec les étapes et la version concernées.",
    'support.requestTitle': "Précisez votre demande",
    'support.requestBody': "Chaque carte ouvre un message WhatsApp court indiquant seulement le type de demande, sans donnée personnelle ni financière.",
    'support.reqIntro': "Bonjour, je vous contacte pour :",
    'support.req.install': "Installation ou lancement du logiciel",
    'support.req.activation': "Demande d'activation de licence",
    'support.req.duration': "Question sur la durée de licence",
    'support.req.renewal': "Question sur le renouvellement",
    'support.req.purchase': "Achat d'une licence",
    'support.req.other': "Demande générale",
    'support.infoTitle': "Informations utiles pour comprendre le problème",
    'support.info1': "Version utilisée : Mohasabi v1.0.3 ou celle affichée dans le logiciel.",
    'support.info2': "Système : Windows 10 ou 11 et l'architecture du poste.",
    'support.info3': 'Les étapes précises qui reproduisent le problème.',
    'support.info4': "Le texte exact du message d'erreur, ou une capture de celui-ci.",
    'support.info5': "Le moment où le problème est apparu (mise à jour, changement matériel, etc.).",
    'support.avoidTitle': 'Ne transmettez pas ces éléments',
    'support.avoid1': "Mots de passe, clés d'activation ou fichiers de licence.",
    'support.avoid2': "Base de données clients, factures réelles ou tout fichier contenant des données personnelles.",
    'support.avoid3': "Informations financières sensibles ou données de carte bancaire.",
    'support.faq1.q': 'Comment signaler un problème reproductible ?',
    'support.faq1.a': "Indiquez la version du logiciel, les étapes de reproduction et le message affiché ; une Issue sur le dépôt officiel est possible.",
    'support.faq2.q': "Existe-t-il une version d'essai avant l'achat ?",
    'support.faq2.a': "Le site ne propose aucune version d'essai automatique. Cette possibilité se discute directement lors du contact, selon l'accord.",
  },
  en: {
    'nav.home': 'Home',
    'nav.download': 'Download Mohasabi',
    'hero.title': 'Clearer business. Simpler books.',
    'hero.subtitle':
      'Create invoices, quotes and commercial documents, and keep customers, stock and receivables in one place. Mohasabi organises your daily work on your own computer and keeps running without a permanent internet connection.',
    'hero.downloadBtn': 'Download the app',
    'hero.downloadPendingBtn': 'Download being prepared',
    'hero.version': 'Version',
    'hero.windowsOnly': 'for Windows',
    'hero.pendingNote':
      'The setup file for this release is being uploaded to the official release channel.',
    'hero.releasesLink': 'Releases page',
    'hero.illustrationAlt': 'Illustration of the software interface, not an actual screenshot',
    'hero.illustrationCaption': 'One screen for invoices, customers and stock.',
    'features.badge': 'Features',
    'features.title': 'Everything a working day needs',
    'features.subtitle': 'The capabilities actually available in the current release.',
    'features.localData.title': 'Local data and backup',
    'features.localData.desc':
      'Your business data stays on your machine, with timestamped ZIP archives, SHA-256 verification and a restore that copies your current data first.',
    'features.documents.title': 'Invoices and quotes',
    'features.documents.desc':
      'Create invoices, quotations, purchase orders, delivery notes and mission orders, and keep every commercial document together.',
    'features.partners.title': 'Customers and suppliers',
    'features.partners.desc':
      'Keep customer records with balances and open orders, and follow supplier purchase orders and receptions.',
    'features.debts.title': 'Debts and receivables',
    'features.debts.desc':
      'Check each customer balance and the unpaid report to separate what has been collected from what is still due.',
    'features.stock.title': 'Inventory and products',
    'features.stock.desc':
      'Organise the product and service catalogue with quantities, reorder points and a dashboard view of low-stock items.',
    'features.reports.title': 'Reports and exports',
    'features.reports.desc':
      'Dashboard, monthly reports, VAT declaration by rate and best customers, with PDF, Excel, Word and CSV export.',
    'features.languages.title': 'Arabic, French and English interface',
    'features.languages.desc':
      'Switch between the three languages with RTL or LTR layout and a light, dark or system theme.',
    'screenshots.badge': 'Screenshots',
    'screenshots.title': 'See Mohasabi as it is',
    'screenshots.subtitle': 'Explore the real interface and how your daily information is presented.',
    'screenshots.zoomHint': 'Click any screenshot to enlarge it • Keyboard navigation available',
    'screenshots.closeAria': 'Close viewer',
    'screenshots.prevAria': 'Previous screenshot',
    'screenshots.nextAria': 'Next screenshot',
    'screenshots.alt.main': 'Mohasabi interface for managing invoices and business',
    'screenshots.alt.dashboard': 'Dashboard',
    'screenshots.alt.invoices': 'Invoices and quotes',
    'screenshots.alt.clients': 'Customers and suppliers',
    'screenshots.alt.products': 'Products and stock',
    'requirements.badge': 'Requirements',
    'requirements.title': 'Mohasabi system requirements',
    'requirements.colComponent': 'Component',
    'requirements.colSpec': 'Specification',
    'requirements.colStatus': 'Status',
    'requirements.statusSupported': 'Supported',
    'requirements.statusRecommended': 'Recommended',
    'requirements.statusMinimum': 'Minimum',
    'requirements.statusConditional': 'Conditional',
    'requirements.notesTitle': 'Important notes',
    'requirements.note1': 'The values above apply to the release shown on this page.',
    'requirements.note2': 'The application works offline after the initial activation.',
    'requirements.note3': 'Internet is required for download, activation and updates.',
    'requirements.note4': 'Check the releases page for detailed release notes.',
    'requirements.viewReleases': 'View release details on GitHub',
    'requirements.os': 'Operating system',
    'requirements.architecture': 'Architecture',
    'requirements.processor': 'Processor',
    'requirements.ram': 'Memory (RAM)',
    'requirements.diskSpace': 'Disk space',
    'requirements.internet': 'Internet connection',
    'requirements.internet.desc':
      'Required for download, activation and updates; daily work runs offline',
    'faq.badge': 'FAQ',
    'faq.title': 'Questions before you download',
    'faq.intro':
      'Answers about offline use, security, requirements, backups, licensing and support.',
    'faq.offline.q': 'Does Mohasabi work without internet?',
    'faq.offline.a': 'Yes for daily use. A connection is only needed to download, activate and update.',
    'faq.latest.q': 'How do I get the latest release?',
    'faq.latest.a':
      'Use the download button to get the setup file from the official GitHub Releases channel, or open the releases page if the direct download fails.',
    'faq.data.q': 'Is my data stored on a cloud server?',
    'faq.data.a':
      'Mohasabi stores data locally on your device. There is no cloud sync and no automatic external backup.',
    'faq.support.q': 'How do I get help?',
    'faq.support.a':
      'Reach us on WhatsApp or the e-mail address listed on the support page for installation, plans or everyday use, giving the version and a description of the problem without sending sensitive accounting data.',
    'faq.moreHelp': 'Need more help?',
    'faq.openTicket': 'Open a ticket on GitHub',
    'cta.title': 'Start organising your work with Mohasabi',
    'cta.subtitle': 'Download the app, see how it works, then pick the licence that fits your needs.',
    'cta.downloadBtn': 'Download Mohasabi now',
    'cta.note': 'See the full system requirements in the how-to-start guide.',
    'footer.description': 'A desktop app for Windows that handles invoices, customers, suppliers and stock locally.',
    'footer.links.home': 'Home',
    'footer.links.features': 'Features',
    'footer.links.requirements': 'System Requirements',
    'footer.links.faq': 'FAQ',
    'footer.links.releases': 'Official Releases',
    'footer.links.repository': 'Official Repository',
    'footer.pagesTitle': 'Pages',
    'footer.sectionsTitle': 'Sections',
    'footer.resourcesTitle': 'Official links',
    'hero.tagline': 'Accounting and business management software for Windows',
    'hero.specLine': 'Windows 10 and Windows 11 · 64-bit',
    'hero.footnote': 'A desktop app with local data and licence options that match your needs.',
    'hero.featuresBtn': 'Explore the features',
    'challenges.title': 'Put the details in order and focus on your business',
    'challenges.body1':
      'Between multiple invoices, outstanding debts and stock movements, keeping track gets exhausting when information is spread across notebooks and separate files.',
    'challenges.body2':
      'Mohasabi brings your daily business tools into one program, so you find information more clearly and follow operations with less effort.',
    'challenges.b1.title': 'Better organised',
    'challenges.b1.desc': 'Keep invoices, customers and products in one place.',
    'challenges.b2.title': 'Clearer tracking',
    'challenges.b2.desc': 'Review what is owed and how stock moves instead of relying on memory.',
    'challenges.b3.title': 'Work without staying online',
    'challenges.b3.desc': 'Use the app locally even when the connection drops.',
    'screenshots.closing': 'Images from the real program, so you know the interface before downloading it.',
    'screenshots.pending':
      'We are preparing real screenshots from the published release, with customer names and data hidden. Meanwhile, the how-to guide walks through each step.',
    'how.title': 'Start in three steps',
    'how.step1.title': 'Download the app',
    'how.step1.desc': 'Download the Mohasabi setup file for 64-bit Windows 10 or Windows 11.',
    'how.step1.cta': 'Download Mohasabi',
    'how.step2.title': 'Install it on your computer',
    'how.step2.desc': 'Run the setup file and follow the on-screen instructions. Use the install guide if you need help.',
    'how.step3.title': 'Start organising your work',
    'how.step3.desc':
      'After installation and setup, add products and customers, create your first invoice and record your transactions.',
    'how.step3.cta': 'See how to use it',
    'how.step2.cta': 'Read the install guide',
    'offline.title': 'Your business does not stop when the internet does',
    'offline.body1':
      'Mohasabi is a desktop app designed to work locally on a Windows machine, so normal local use does not require a permanent connection.',
    'offline.body2':
      'Organise your data and run your operations from your own device, keeping in mind that downloading the app, update files and contacting support need a connection.',
    'offline.note': 'Keep a recent backup of your data even if you use the app offline.',
    'security.title': 'Your business data deserves care',
    'security.body':
      'Your accounting data is part of your business. Mohasabi stores it locally and provides backup and restore, within the features of the release.',
    'security.s1.title': 'Local storage',
    'security.s1.desc': 'Business data stays on the computer you use, according to the app settings.',
    'security.s2.title': 'Automatic backup',
    'security.s2.desc':
      'Timestamped ZIP archives with SHA-256 verification, configurable retention, a back-up-now button and quick access to the folder.',
    'security.s3.title': 'Controlled restore',
    'security.s3.desc':
      'Backup list with date, size and status, full validation first, an automatic emergency copy of current data and a way back.',
    'security.disclaimer':
      'No system can be called 100 % secure. Protect your computer and passwords, keep a backup separate from the device when possible, and test that it restores.',
    'audience.title': 'Built for everyday business needs',
    'audience.merchants.title': 'Traders and shop owners',
    'audience.merchants.desc': 'Track products, sales, invoices and customer accounts.',
    'audience.craft.title': 'Craftspeople and service providers',
    'audience.craft.desc': 'Organise quotations, invoices and client transaction history.',
    'audience.small.title': 'Small and growing businesses',
    'audience.small.desc': 'Bring customers, products and orders together in one desktop tool.',
    'audience.teams.title': 'Small teams and departments',
    'audience.teams.desc': 'Run the app in the local environment that fits your organisation and settings.',
    'preview.title': 'Choose the licence that fits your business',
    'preview.subtitle': 'Pick the plan and duration you need, and check what each plan includes before requesting it.',
    'preview.from': 'from',
    'preview.ask': 'Ask about',
    'preview.compare': 'Compare plans and prices',
    'preview.note':
      'Prices are in Algerian dinars and indicative. Contact us to confirm the current price, plan details and how the licence is delivered before ordering.',
    'preview.tag.standard': 'For daily work and the essentials.',
    'preview.tag.pro': 'For businesses needing wider capability, as included in the plan.',
    'preview.tag.enterprise': 'For activities that need the highest Mohasabi plan.',
    'faq.requirements.q': 'What does the app require to run?',
    'faq.requirements.a':
      'The current release targets 64-bit Windows 10 and Windows 11. Read the guide for the verified processor, memory and disk requirements before installing.',
    'faq.backup.q': 'How do I restore data or use a backup?',
    'faq.backup.a':
      'Keep a recent backup somewhere safe and follow the backup and restore steps in the guide for your version. Before restoring an older archive, confirm it belongs to the right data and matches the app version.',
    'faq.free.q': 'Does downloading mean every feature is free?',
    'faq.free.a':
      'Downloading the setup file does not mean the app or every plan is free. Terms depend on the licence you choose; contact us to confirm the details before buying.',
    'cta.pricingBtn': 'See the plans',
    'cta.supportLink': 'Need help? Contact support',
    'footer.links.privacy': 'Privacy policy',
    'footer.trademark': 'Windows is a trademark of Microsoft. Mohasabi is an independent program.',
    'privacy.title': 'Privacy policy',
    'privacy.subtitle': 'What this website collects, and where your business data actually lives.',
    'privacy.local.title': 'Your business data stays on your machine',
    'privacy.local.body':
      'Mohasabi writes invoices, customers and products locally on the computer you use, inside the program files and the data folder you choose. Nothing is uploaded to a server or shared with a third party.',
    'privacy.site.title': 'This site does not track you',
    'privacy.site.body':
      'The marketing, pricing, guide and support pages are fully static: no analytics, no advertising cookies, no trackers, and no server reading what you type. We never ask for your e-mail or phone number to show the content.',
    'privacy.contact.title': 'When you contact us',
    'privacy.contact.body':
      'The WhatsApp and e-mail buttons open a message on your device, pre-filled with the plan, duration or request type you picked. We only see what you choose to send, and use it to answer your question or licence request.',
    'privacy.backup.title': 'Backups remain your responsibility',
    'privacy.backup.body':
      'The program creates backups on your machine, but data loss follows a failed disk, a deleted folder or a compromised computer. Keep a copy outside the device and check that it restores.',
    'seo.ogTitle': 'Mohasabi — run your business from one place',
    'seo.ogDescription':
      'Meet Mohasabi and manage invoices, customers, suppliers and stock with a desktop app for Windows.',
    'seo.page.privacy': 'Privacy policy — Mohasabi',
    'footer.copyright': 'All rights reserved.',
    'footer.versionLabel': 'Version',
    'language.label': 'Interface language',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'seo.title': 'Mohasabi | Accounting and invoicing software for Windows',
    'seo.description':
      'Manage invoices, quotes, customer and supplier accounts and stock with Mohasabi, a Windows desktop app in Arabic, French and English that works locally without a permanent internet connection.',
    'a11y.mainNav': 'Main navigation',
    'a11y.mobileNav': 'Mobile navigation',
    'a11y.toggleMenu': 'Open or close the menu',
    'a11y.skipToContent': 'Skip to main content',
    'nav.guide': 'How to start',
    'nav.pricing': 'Plans & licence',
    'nav.support': 'Support',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.how': 'How it works',
    'a11y.logoAlt': 'Mohasabi logo',
    'seo.page.home': 'Mohasabi | Accounting and invoicing software for Windows',
    'seo.page.guide': 'How to start — Mohasabi',
    'seo.page.pricing': 'Plans & licence — Mohasabi',
    'seo.page.support': 'Support — Mohasabi',
    'footer.links.guide': 'How to start',
    'footer.links.pricing': 'Plans & licence',
    'footer.links.support': 'Support',
    'plan.standard.name': 'Standard',
    'plan.pro.name': 'Pro',
    'plan.enterprise.name': 'Enterprise',
    'duration.month': '1 month',
    'duration.quarter': '3 months',
    'duration.halfYear': '6 months',
    'duration.year': '12 months',
    'pricing.badge': 'Licensing',
    'pricing.title': 'Choose the licence that fits your business',
    'pricing.subtitle': 'The prices shown are indicative and may change according to the commercial terms agreed when you order.',
    'pricing.recommended': 'Most chosen',
    'pricing.durationLabel': 'Duration',
    'pricing.priceLabel': 'Price',
    'pricing.planCol': 'Plan',
    'pricing.selectPlan': 'Request this licence',
    'pricing.askPlan': 'Ask about this plan',
    'pricing.whatsappIntro': 'Hello, I would like to request a Mohasabi licence:',
    'pricing.inquiryIntro': 'Hello, I have a question about Mohasabi licences:',
    'pricing.orEmail': 'or contact us by email',
    'pricing.contactTitle': 'No payment on this website',
    'pricing.contactBody': 'Choosing a plan and a duration opens a short message to WhatsApp or email, then the details are handled directly.',
    'pricing.indicativeTitle': 'Indicative pricing',
    'pricing.indicativeBody': 'These amounts are a reference only and may change with the offer in force at the time of your request; they are not a contract.',
    'pricing.paymentTitle': 'No online checkout',
    'pricing.paymentBody': 'The site shows no payment gateway, collects no card data, and does not activate any licence automatically from the browser.',
    'pricing.termsTitle': 'Terms agreed on request',
    'pricing.termsBody': 'Licence length, number of workstations and support conditions are set in the direct agreement; the site does not publish unconfirmed terms.',
    'guide.badge': 'Getting started',
    'guide.title': 'Get started with Mohasabi',
    'guide.subtitle': 'From downloading the installer to your first daily entry, in short steps based only on what the software actually offers.',
    'guide.videoTitle': 'Video walkthrough',
    'guide.videoPendingTitle': 'Tutorial video in preparation',
    'guide.videoPendingBody': 'No real video has been published yet. This area is reserved for it in 16:9; no placeholder link or dead play button is shown.',
    'guide.videoAria': 'Reserved area for the tutorial video, content not available yet',
    'guide.stepsTitle': 'Start steps',
    'guide.step1.title': 'Download the installer',
    'guide.step1.desc': 'Get Mohasabi_Setup_v1.0.3.exe from the official GitHub releases channel.',
    'guide.step2.title': 'Install on Windows',
    'guide.step2.desc': 'Run the setup file and follow the steps on a Windows 10 or Windows 11 64-bit machine.',
    'guide.step3.title': 'Launch Mohasabi',
    'guide.step3.desc': 'Open the application from the desktop shortcut or the programs menu once installation finishes.',
    'guide.step4.title': 'Start entering your data',
    'guide.step4.desc': 'Add your customers, create invoices and follow daily operations in the same interface, with data staying on your device.',
    'guide.stepNote': 'Check the version number and file name shown below before you continue.',
    'guide.functionsTitle': 'Core functions available',
    'guide.functionsIntro': 'The main screens available once setup is complete.',
    'guide.helpTitle': 'Stuck on installation or licensing?',
    'guide.helpBody': 'Open the support page to pick the kind of request and send a short WhatsApp or email message.',
    'guide.supportCta': 'Support & contact',
    'guide.pricingCta': 'Plans & licence',
    'support.badge': 'Support',
    'support.title': 'We are here to help',
    'support.subtitle': 'Pick the right channel and state your request type so the message is clear from the start.',
    'support.whatsappTitle': 'WhatsApp',
    'support.whatsappBody': 'The fastest way to ask about installation, licensing or daily use.',
    'support.emailTitle': 'Email',
    'support.emailBody': 'Better for requests that need detail or a written description of the problem.',
    'support.issuesTitle': 'Report a software defect',
    'support.issuesBody': 'If the problem is reproducible, an Issue can be opened on the official repository with the steps and version.',
    'support.requestTitle': 'Choose your request type',
    'support.requestBody': 'Each card opens a short WhatsApp message containing only the request type, with no personal or financial data.',
    'support.reqIntro': 'Hello, I need help with:',
    'support.req.install': 'Installation or launch issue',
    'support.req.activation': 'Licence activation request',
    'support.req.duration': 'Question about licence duration',
    'support.req.renewal': 'Question about renewal',
    'support.req.purchase': 'Buying a licence',
    'support.req.other': 'General enquiry',
    'support.infoTitle': 'Information that helps diagnose your issue',
    'support.info1': 'Application version: Mohasabi v1.0.3 or the one shown inside the program.',
    'support.info2': 'Operating system: Windows 10 or 11 and the machine architecture.',
    'support.info3': 'The exact steps that lead to the problem.',
    'support.info4': 'The error text as displayed, or a screenshot of it.',
    'support.info5': 'When it started and whether an update or hardware change came first.',
    'support.avoidTitle': 'Do not send these over chat',
    'support.avoid1': 'Passwords, activation keys or licence files.',
    'support.avoid2': 'Customer databases, real invoices or any file holding personal data.',
    'support.avoid3': 'Sensitive financial details or payment card data.',
    'support.faq1.q': 'How do I report a reproducible bug?',
    'support.faq1.a': 'Give the application version, the steps to reproduce it and the message shown; opening an Issue on the official repository also works.',
    'support.faq2.q': 'Is there a trial before buying?',
    'support.faq2.a': 'The website offers no automatic trial. Whether a trial or a demonstration is possible is discussed directly when you contact us.',
  },
};

export const getTranslation = (locale: Locale, key: TranslationKey): string => {
  const table = translations[locale];
  return table[key] ?? key;
};

export const locales: Locale[] = ['ar', 'fr', 'en'];

export const localeNames: Record<Locale, string> = {
  ar: 'العربية',
  fr: 'Français',
  en: 'English',
};

export const isRTL = (locale: Locale): boolean => locale === 'ar';
