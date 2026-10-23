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
  | 'features.offline.title'
  | 'features.offline.desc'
  | 'features.invoices.title'
  | 'features.invoices.desc'
  | 'features.localData.title'
  | 'features.localData.desc'
  | 'features.ui.title'
  | 'features.ui.desc'
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
  | 'hero.guideBtn'
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
  | 'support.faq2.a';

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.download': 'تحميل Mohasabi',
    'hero.title': 'محاسبتك اليومية، أكثر تنظيمًا مع Mohasabi',
    'hero.subtitle': 'برنامج محاسبة مكتبي لنظام Windows: إدارة العملاء والفواتير ومتابعة العمليات اليومية على جهازك.',
    'hero.downloadBtn': 'تحميل Mohasabi',
    'hero.downloadPendingBtn': 'التحميل قيد التجهيز',
    'hero.version': 'الإصدار',
    'hero.windowsOnly': 'لنظام Windows',
    'hero.pendingNote': 'ملف التثبيت لهذا الإصدار قيد الرفع على قناة الإصدارات الرسمية.',
    'hero.releasesLink': 'صفحة الإصدارات',
    'hero.illustrationAlt': 'رسم توضيحي لواجهة البرنامج، وليس لقطة شاشة حقيقية',
    'hero.illustrationCaption': 'رسم توضيحي مؤقت — تُستبدل به لقطات حقيقية عند توفرها.',
    'features.badge': 'المميزات',
    'features.title': 'مصمَّم للعمل المكتبي اليومي',
    'features.subtitle': 'القدرات الأساسية المتوفرة فعليًا داخل البرنامج.',
    'features.offline.title': 'يعمل دون اتصال بالإنترنت',
    'features.offline.desc': 'أنجز الإدخال والمتابعة اليومي دون اتصال مستمر، وفق الوظائف المدعومة في التطبيق.',
    'features.invoices.title': 'إدارة العملاء والفواتير',
    'features.invoices.desc': 'سجّل بيانات العملاء وأنشئ الفواتير وتابع العمليات من شاشة واحدة.',
    'features.localData.title': 'بيانات محلية على جهازك',
    'features.localData.desc': 'تُحفظ بياناتك على جهازك داخل ملفات البرنامج، دون خادم مركزي.',
    'features.ui.title': 'واجهة واضحة وسهلة الاستخدام',
    'features.ui.desc': 'شاشات مباشرة تقلّل الخطوات أثناء العمل اليومي.',
    'screenshots.badge': 'لقطات الشاشة',
    'screenshots.title': 'اكتشف واجهة Mohasabi',
    'screenshots.subtitle': 'تعرّف على البرنامج من الداخل قبل تحميله',
    'screenshots.zoomHint': 'اضغط على أي لقطة لتكبيرها • التنقل بلوحة المفاتيح متاح',
    'screenshots.closeAria': 'إغلاق العارض',
    'screenshots.prevAria': 'اللقة السابقة',
    'screenshots.nextAria': 'اللقطة التالية',
    'screenshots.alt.main': 'الواجهة الرئيسية للبرنامج',
    'screenshots.alt.dashboard': 'لوحة التحكم الرئيسية',
    'screenshots.alt.invoices': 'إدارة الفواتير',
    'screenshots.alt.clients': 'إدارة العملاء',
    'screenshots.alt.products': 'إدارة المنتجات',
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
    'faq.intro': 'إجابات مختصرة عن العمل دون إنترنت، وأحدث إصدار، ومكان حفظ البيانات.',
    'faq.offline.q': 'هل يعمل Mohasabi دون إنترنت؟',
    'faq.offline.a': 'نعم في الاستخدام اليومي. الاتصال يلزم للتنزيل والتفعيل والتحديث فقط.',
    'faq.latest.q': 'كيف أحصل على أحدث إصدار؟',
    'faq.latest.a':
      'استخدم زر التحميل في الموقع للحصول على ملف التثبيت من قناة GitHub Releases الرسمية، أو افتح صفحة الإصدارات إذا تعذر تنزيل الملف مباشرة.',
    'faq.data.q': 'هل بياناتي مخزنة على خادم سحابي؟',
    'faq.data.a':
      'يعتمد Mohasabi على التخزين المحلي للبيانات على جهازك. لا توجد مزامنة سحابية أو نسخ احتياطي خارجي تلقائي.',
    'faq.support.q': 'أين أجد المساعدة أو الإبلاغ عن مشكلة؟',
    'faq.support.a': 'تواصل معنا عبر WhatsApp أو البريد الإلكتروني في صفحة الدعم، أو افتح Issue في مستودع GitHub الرسمي.',
    'faq.moreHelp': 'هل تحتاج إلى مزيد من المساعدة؟',
    'faq.openTicket': 'افتح تذكرة على GitHub',
    'cta.title': 'نزّل ملف التثبيت',
    'cta.subtitle': 'ملف التثبيت متاح لنظام Windows بـ 64-بت عبر قناة الإصدارات الرسمية.',
    'cta.downloadBtn': 'تحميل Mohasabi الآن',
    'cta.note': 'راجع متطلبات التشغيل الكاملة في دليل الاستخدام.',
    'footer.description': 'برنامج محاسبة مكتبي لنظام Windows يدير العملاء والفواتير محليًا على جهازك.',
    'footer.links.home': 'الرئيسية',
    'footer.links.features': 'المميزات',
    'footer.links.requirements': 'متطلبات التشغيل',
    'footer.links.faq': 'الأسئلة الشائعة',
    'footer.links.releases': 'الإصدارات الرسمية',
    'footer.links.repository': 'المستودع الرسمي',
    'footer.pagesTitle': 'الأقسام',
    'footer.sectionsTitle': 'أقسام الصفحة الرئيسية',
    'footer.resourcesTitle': 'روابط رسمية',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'footer.versionLabel': 'الإصدار',
    'language.label': 'لغة الواجهة',
    'contact.whatsapp': 'واتساب',
    'contact.email': 'البريد الإلكتروني',
    'seo.title': 'Mohasabi',
    'seo.description': 'Mohasabi برنامج محاسبة مكتبي يساعدك على تنظيم عملياتك اليومية وإدارة العملاء والفواتير، مع تخزين البيانات محليًا وإمكانية العمل دون اتصال بالإنترنت.',
    'a11y.mainNav': 'التنقل الرئيسي',
    'a11y.mobileNav': 'تنقل الهاتف',
    'a11y.toggleMenu': 'فتح القائمة أو إغلاقها',
    'a11y.skipToContent': 'الانتقال إلى المحتوى الرئيسي',
    'nav.guide': 'طريقة التشغيل',
    'nav.pricing': 'العروض والترخيص',
    'nav.support': 'الدعم والتواصل',
    'hero.guideBtn': 'شرح طريقة الاستخدام',
    'seo.page.home': 'Mohasabi',
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
    'hero.title': 'Votre comptabilité quotidienne, mieux organisée avec Mohasabi',
    'hero.subtitle': 'Un logiciel de comptabilité de bureau pour Windows : clients, factures et opérations quotidiennes, sur votre machine.',
    'hero.downloadBtn': 'Télécharger Mohasabi',
    'hero.downloadPendingBtn': 'Téléchargement en préparation',
    'hero.version': 'Version',
    'hero.windowsOnly': 'pour Windows',
    'hero.pendingNote':
      'Le fichier d\'installation de cette version est en cours de publication sur le canal officiel.',
    'hero.releasesLink': 'Page des versions',
    'hero.illustrationAlt': 'Illustration de l\'interface du logiciel, et non une capture réelle',
    'hero.illustrationCaption':
      'Illustration provisoire — remplacée par de vraies captures dès qu\'elles sont disponibles.',
    'features.badge': 'Fonctionnalités',
    'features.title': 'Conçu pour le travail quotidien',
    'features.subtitle': 'Les capacités de base disponibles dans le logiciel.',
    'features.offline.title': 'Fonctionnement hors ligne',
    'features.offline.desc': 'Saisissez et suivez vos opérations sans connexion permanente, selon les fonctions réellement prises en charge.',
    'features.invoices.title': 'Gestion des clients et factures',
    'features.invoices.desc': 'Enregistrez vos clients, créez les factures et suivez les opérations depuis un seul écran.',
    'features.localData.title': 'Données locales sur votre appareil',
    'features.localData.desc': 'Vos données restent sur votre machine, dans les fichiers du logiciel, sans serveur central.',
    'features.ui.title': 'Interface claire et simple',
    'features.ui.desc': 'Des écrans directs qui réduisent les manipulations pendant le travail quotidien.',
    'screenshots.badge': 'Captures d\'écran',
    'screenshots.title': 'Découvrez l\'interface de Mohasabi',
    'screenshots.subtitle': 'Explorez le logiciel de l\'intérieur avant de le télécharger',
    'screenshots.zoomHint': 'Cliquez sur une capture pour l\'agrandir • Navigation au clavier disponible',
    'screenshots.closeAria': 'Fermer la visionneuse',
    'screenshots.prevAria': 'Capture précédente',
    'screenshots.nextAria': 'Capture suivante',
    'screenshots.alt.main': 'Interface principale du logiciel',
    'screenshots.alt.dashboard': 'Tableau de bord principal',
    'screenshots.alt.invoices': 'Gestion des factures',
    'screenshots.alt.clients': 'Gestion des clients',
    'screenshots.alt.products': 'Gestion des produits',
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
    'faq.intro': 'Réponses courtes sur le travail hors ligne, la version la plus récente et le stockage des données.',
    'faq.offline.q': 'Mohasabi fonctionne-t-il sans Internet ?',
    'faq.offline.a': "Oui pour l'usage quotidien. Une connexion est nécessaire uniquement pour le téléchargement, l'activation et les mises à jour.",
    'faq.latest.q': 'Comment obtenir la dernière version ?',
    'faq.latest.a':
      'Utilisez le bouton de téléchargement pour obtenir le fichier depuis le canal GitHub Releases officiel, ou ouvrez la page des versions si le téléchargement direct échoue.',
    'faq.data.q': 'Mes données sont-elles stockées sur un serveur cloud ?',
    'faq.data.a':
      'Mohasabi stocke les données localement sur votre appareil. Il n\'y a pas de synchronisation cloud ni de sauvegarde externe automatique.',
    'faq.support.q': 'Où trouver de l\'aide ou signaler un problème ?',
    'faq.support.a': "Écrivez-nous via WhatsApp ou l'adresse e-mail indiquée sur la page d'assistance, ou ouvrez une issue dans le dépôt GitHub officiel.",
    'faq.moreHelp': 'Besoin de plus d\'aide ?',
    'faq.openTicket': 'Ouvrir un ticket sur GitHub',
    'cta.title': "Téléchargez le fichier d'installation",
    'cta.subtitle': 'Installation disponible pour Windows 64 bits via le canal officiel de versions.',
    'cta.downloadBtn': 'Télécharger Mohasabi maintenant',
    'cta.note': "Consultez la configuration requise dans le mode d'emploi.",
    'footer.description': 'Logiciel de comptabilité de bureau pour Windows : clients et factures gérés localement sur votre machine.',
    'footer.links.home': 'Accueil',
    'footer.links.features': 'Fonctionnalités',
    'footer.links.requirements': 'Configuration requise',
    'footer.links.faq': 'Questions fréquentes',
    'footer.links.releases': 'Versions officielles',
    'footer.links.repository': 'Dépôt officiel',
    'footer.pagesTitle': 'Pages',
    'footer.sectionsTitle': 'Sections',
    'footer.resourcesTitle': 'Liens officiels',
    'footer.copyright': 'Tous droits réservés.',
    'footer.versionLabel': 'Version',
    'language.label': 'Langue de l\'interface',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'E-mail',
    'seo.title': 'Mohasabi',
    'seo.description': 'Mohasabi est un logiciel de comptabilité de bureau qui aide à organiser les opérations quotidiennes et à gérer clients et factures, avec stockage local des données et travail hors ligne.',
    'a11y.mainNav': 'Navigation principale',
    'a11y.mobileNav': 'Navigation mobile',
    'a11y.toggleMenu': 'Ouvrir ou fermer le menu',
    'a11y.skipToContent': 'Aller au contenu principal',
    'nav.guide': "Mode d'emploi",
    'nav.pricing': 'Offres et licence',
    'nav.support': 'Assistance',
    'hero.guideBtn': "Découvrir le mode d'emploi",
    'seo.page.home': 'Mohasabi',
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
    'hero.title': 'Your daily accounting, better organized with Mohasabi',
    'hero.subtitle': 'A desktop accounting app for Windows: customers, invoices and daily operations, running on your own machine.',
    'hero.downloadBtn': 'Download Mohasabi',
    'hero.downloadPendingBtn': 'Download being prepared',
    'hero.version': 'Version',
    'hero.windowsOnly': 'for Windows',
    'hero.pendingNote':
      'The setup file for this release is being uploaded to the official release channel.',
    'hero.releasesLink': 'Releases page',
    'hero.illustrationAlt': 'Illustration of the software interface, not an actual screenshot',
    'hero.illustrationCaption': 'Temporary illustration — replaced with real screenshots when available.',
    'features.badge': 'Features',
    'features.title': 'Built for daily desk work',
    'features.subtitle': 'The core capabilities available in the app.',
    'features.offline.title': 'Works offline',
    'features.offline.desc': 'Enter and track daily operations without a permanent connection, within the features the app actually supports.',
    'features.invoices.title': 'Customers and invoices',
    'features.invoices.desc': 'Keep customer records, create invoices and follow operations from a single screen.',
    'features.localData.title': 'Local data on your device',
    'features.localData.desc': 'Your data stays on your machine in the application files, with no central server.',
    'features.ui.title': 'Clear, easy-to-use interface',
    'features.ui.desc': 'Straightforward screens that cut steps out of everyday work.',
    'screenshots.badge': 'Screenshots',
    'screenshots.title': 'See the Mohasabi interface',
    'screenshots.subtitle': 'Look inside the software before downloading it',
    'screenshots.zoomHint': 'Click any screenshot to enlarge it • Keyboard navigation available',
    'screenshots.closeAria': 'Close viewer',
    'screenshots.prevAria': 'Previous screenshot',
    'screenshots.nextAria': 'Next screenshot',
    'screenshots.alt.main': 'Main software interface',
    'screenshots.alt.dashboard': 'Main dashboard',
    'screenshots.alt.invoices': 'Invoice management',
    'screenshots.alt.clients': 'Client management',
    'screenshots.alt.products': 'Product management',
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
    'faq.intro': 'Short answers about offline use, the latest version and where your data lives.',
    'faq.offline.q': 'Does Mohasabi work without internet?',
    'faq.offline.a': 'Yes for daily use. A connection is only needed to download, activate and update.',
    'faq.latest.q': 'How do I get the latest release?',
    'faq.latest.a':
      'Use the download button to get the setup file from the official GitHub Releases channel, or open the releases page if the direct download fails.',
    'faq.data.q': 'Is my data stored on a cloud server?',
    'faq.data.a':
      'Mohasabi stores data locally on your device. There is no cloud sync and no automatic external backup.',
    'faq.support.q': 'Where can I get help or report an issue?',
    'faq.support.a': 'Reach us on WhatsApp or the e-mail address listed on the support page, or open an issue in the official GitHub repository.',
    'faq.moreHelp': 'Need more help?',
    'faq.openTicket': 'Open a ticket on GitHub',
    'cta.title': 'Download the setup file',
    'cta.subtitle': 'Setup is available for 64-bit Windows from the official release channel.',
    'cta.downloadBtn': 'Download Mohasabi now',
    'cta.note': 'See the full system requirements in the how-to-start guide.',
    'footer.description': 'A desktop accounting app for Windows - customers and invoices handled locally on your machine.',
    'footer.links.home': 'Home',
    'footer.links.features': 'Features',
    'footer.links.requirements': 'System Requirements',
    'footer.links.faq': 'FAQ',
    'footer.links.releases': 'Official Releases',
    'footer.links.repository': 'Official Repository',
    'footer.pagesTitle': 'Pages',
    'footer.sectionsTitle': 'Sections',
    'footer.resourcesTitle': 'Official links',
    'footer.copyright': 'All rights reserved.',
    'footer.versionLabel': 'Version',
    'language.label': 'Interface language',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'seo.title': 'Mohasabi',
    'seo.description': 'Mohasabi is a desktop accounting application that helps you organize daily operations and manage customers and invoices, with local data storage and offline work.',
    'a11y.mainNav': 'Main navigation',
    'a11y.mobileNav': 'Mobile navigation',
    'a11y.toggleMenu': 'Open or close the menu',
    'a11y.skipToContent': 'Skip to main content',
    'nav.guide': 'How to start',
    'nav.pricing': 'Plans & licence',
    'nav.support': 'Support',
    'hero.guideBtn': 'See how it works',
    'seo.page.home': 'Mohasabi',
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
