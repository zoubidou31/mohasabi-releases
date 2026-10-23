export type Locale = 'ar' | 'fr' | 'en';

export type TranslationKey =
  | 'nav.home'
  | 'nav.features'
  | 'nav.screenshots'
  | 'nav.howItWorks'
  | 'nav.requirements'
  | 'nav.faq'
  | 'nav.download'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.downloadBtn'
  | 'hero.featuresBtn'
  | 'hero.version'
  | 'hero.size'
  | 'hero.date'
  | 'hero.os'
  | 'trust.title'
  | 'trust.offline'
  | 'trust.offlineDesc'
  | 'trust.localData'
  | 'trust.localDataDesc'
  | 'trust.license'
  | 'trust.licenseDesc'
  | 'trust.updates'
  | 'trust.updatesDesc'
  | 'features.title'
  | 'features.subtitle'
  | 'features.offline.title'
  | 'features.offline.desc'
  | 'features.invoices.title'
  | 'features.invoices.desc'
  | 'features.localData.title'
  | 'features.localData.desc'
  | 'features.license.title'
  | 'features.license.desc'
  | 'features.updates.title'
  | 'features.updates.desc'
  | 'features.ui.title'
  | 'features.ui.desc'
  | 'screenshots.title'
  | 'screenshots.subtitle'
  | 'screenshots.alt.main'
  | 'screenshots.alt.dashboard'
  | 'screenshots.alt.invoices'
  | 'screenshots.alt.clients'
  | 'screenshots.alt.products'
  | 'howItWorks.title'
  | 'howItWorks.step1.title'
  | 'howItWorks.step1.desc'
  | 'howItWorks.step2.title'
  | 'howItWorks.step2.desc'
  | 'howItWorks.step3.title'
  | 'howItWorks.step3.desc'
  | 'requirements.title'
  | 'requirements.os'
  | 'requirements.architecture'
  | 'requirements.processor'
  | 'requirements.ram'
  | 'requirements.diskSpace'
  | 'requirements.internet'
  | 'faq.title'
  | 'faq.offline.q'
  | 'faq.offline.a'
  | 'faq.os.q'
  | 'faq.os.a'
  | 'faq.latest.q'
  | 'faq.latest.a'
  | 'faq.updates.q'
  | 'faq.updates.a'
  | 'faq.data.q'
  | 'faq.data.a'
  | 'faq.support.q'
  | 'faq.support.a'
  | 'cta.title'
  | 'cta.subtitle'
  | 'cta.downloadBtn'
  | 'cta.note'
  | 'footer.description'
  | 'footer.links.home'
  | 'footer.links.features'
  | 'footer.links.screenshots'
  | 'footer.links.howItWorks'
  | 'footer.links.requirements'
  | 'footer.links.faq'
  | 'footer.links.releases'
  | 'footer.links.repository'
  | 'footer.links.privacy'
  | 'footer.copyright'
  | 'language.ar'
  | 'language.fr'
  | 'language.en';

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.screenshots': 'لقطات الشاشة',
    'nav.howItWorks': 'كيف يعمل',
    'nav.requirements': 'متطلبات التشغيل',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.download': 'تحميل البرنامج',
    'hero.title': 'محاسبتك اليومية، أكثر سهولة وتنظيمًا مع Mohasabi',
    'hero.subtitle': 'برنامج محاسبة مكتبي يساعدك على تنظيم عملياتك اليومية وإدارة العملاء والفواتير من خلال واجهة عملية، مع تخزين البيانات محليًا وإمكانية العمل دون اتصال بالإنترنت.',
    'hero.downloadBtn': 'تحميل Mohasabi',
    'hero.featuresBtn': 'اكتشف المميزات',
    'hero.version': 'الإصدار',
    'hero.size': 'الحجم',
    'hero.date': 'تاريخ الإصدار',
    'hero.os': 'نظام التشغيل',
    'trust.title': 'لماذا تثق بـ Mohasabi؟',
    'trust.offline': 'يعمل دون إنترنت',
    'trust.offlineDesc': 'إدارة أعمالك المحلية دون الاعتماد على اتصال مستمر بالإنترنت.',
    'trust.localData': 'بياناتك على جهازك',
    'trust.localDataDesc': 'تخزين محلي للبيانات يدعم العمل المكتبي دون خدمة سحابية مركزية.',
    'trust.license': 'ترخيص مرتبط بالجهاز',
    'trust.licenseDesc': 'نظام ترخيص يستخدم معرّف الجهاز للتحقق من صلاحية التفعيل.',
    'trust.updates': 'إصدارات جديدة',
    'trust.updatesDesc': 'الوصول إلى الإصدارات الجديدة من خلال القناة الرسمية للبرنامج.',
    'features.title': 'كل ما تحتاجه لتنظيم أعمالك اليومية',
    'features.subtitle': 'مميزات تجعل المحاسبة اليومية أكثر سهولة وكفاءة',
    'features.offline.title': 'يعمل دون اتصال بالإنترنت',
    'features.offline.desc': 'استخدم Mohasabi لإدارة أعمالك المحلية دون الاعتماد على اتصال مستمر بالإنترنت، وفقًا للإمكانات المدعومة في التطبيق.',
    'features.invoices.title': 'إدارة العملاء والفواتير',
    'features.invoices.desc': 'نظّم بيانات العملاء وأنشئ الفواتير وتابع عملياتك اليومية من خلال واجهة مكتبية واحدة.',
    'features.localData.title': 'بيانات محلية على جهازك',
    'features.localData.desc': 'يعتمد البرنامج على تخزين البيانات محليًا، بما يدعم العمل المكتبي دون الاعتماد على خدمة سحابية مركزية.',
    'features.license.title': 'نظام ترخيص مرتبط بالجهاز',
    'features.license.desc': 'يدعم البرنامج نظام ترخيص يستخدم معرّف الجهاز للتحقق من صلاحية التفعيل وفقًا لقواعد الترخيص المعتمدة.',
    'features.updates.title': 'الوصول إلى الإصدارات الجديدة',
    'features.updates.desc': 'يمكنك الحصول على الإصدارات الجديدة من خلال قناة الإصدارات الرسمية للبرنامج.',
    'features.ui.title': 'واجهة واضحة وسهلة الاستخدام',
    'features.ui.desc': 'واجهة مصممة لتسهيل الوصول إلى الوظائف اليومية وتقليل الخطوات غير الضرورية أثناء العمل.',
    'screenshots.title': 'اكتشف واجهة Mohasabi',
    'screenshots.subtitle': 'تعرّف على البرنامج من الداخل قبل تحميله',
    'screenshots.alt.main': 'الواجهة الرئيسية للبرنامج',
    'screenshots.alt.dashboard': 'لوحة التحكم الرئيسية',
    'screenshots.alt.invoices': 'إدارة الفواتير',
    'screenshots.alt.clients': 'إدارة العملاء',
    'screenshots.alt.products': 'إدارة المنتجات',
    'howItWorks.title': 'ابدأ مع Mohasabi في خطوات بسيطة',
    'howItWorks.step1.title': 'حمّل البرنامج',
    'howItWorks.step1.desc': 'احصل على ملف التثبيت من قناة الإصدارات الرسمية.',
    'howItWorks.step2.title': 'ثبّت البرنامج',
    'howItWorks.step2.desc': 'اتبع تعليمات التثبيت المتوافقة مع إصدار Windows لديك.',
    'howItWorks.step3.title': 'ابدأ الاستخدام',
    'howItWorks.step3.desc': 'شغّل البرنامج وأكمل متطلبات التفعيل أو الإعداد الأولي إذا كانت مطلوبة.',
    'requirements.title': 'متطلبات تشغيل Mohasabi',
    'requirements.os': 'نظام التشغيل',
    'requirements.architecture': 'نوع النظام',
    'requirements.processor': 'المعالج',
    'requirements.ram': 'الذاكرة (RAM)',
    'requirements.diskSpace': 'مساحة القرص',
    'requirements.internet': 'الاتصال بالإنترنت',
    'faq.title': 'الأسئلة الشائعة',
    'faq.offline.q': 'هل يعمل Mohasabi دون إنترنت؟',
    'faq.offline.a': 'نعم، يدعم البرنامج العمل المحلي دون اتصال مستمر بالإنترنت. قد تحتاج بعض العمليات، مثل تنزيل الإصدار أو الحصول على تحديثات، إلى اتصال بالإنترنت.',
    'faq.os.q': 'ما نظام التشغيل المطلوب؟',
    'faq.os.a': 'البرنامج مخصص لنظام Windows، مع عرض الإصدارات المتوافقة التي تم التحقق منها فعليًا.',
    'faq.latest.q': 'كيف أحصل على أحدث إصدار؟',
    'faq.latest.a': 'استخدم زر التحميل في الموقع للحصول على ملف التثبيت من قناة GitHub Releases الرسمية، أو افتح صفحة الإصدارات إذا تعذر تنزيل الملف مباشرة.',
    'faq.updates.q': 'هل يتم تحديث البرنامج تلقائيًا؟',
    'faq.updates.a': 'يعتمد ذلك على الإصدار المنشور. إذا كان التحديث التلقائي مدعومًا، سيتم إشعارك به داخل البرنامج. وإلا، يمكنك تنزيل الإصدار الجديد يدويًا من صفحة الإصدارات.',
    'faq.data.q': 'هل بياناتي مخزنة على خادم سحابي؟',
    'faq.data.a': 'يعتمد Mohasabi على التخزين المحلي للبيانات على جهازك. لا توجد مزامنة سحابية أو نسخ احتياطي خارجي تلقائي ما لم يكن ذلك جزءًا فعليًا من المنتج.',
    'faq.support.q': 'أين أجد المساعدة أو الإبلاغ عن مشكلة؟',
    'faq.support.a': 'يمكنك زيارة صفحة Issues في مستودع GitHub الرسمي للإبلاغ عن المشاكل أو طلب المساعدة.',
    'cta.title': 'اجعل إدارة أعمالك اليومية أكثر تنظيمًا مع Mohasabi',
    'cta.subtitle': 'اكتشف البرنامج وابدأ باستخدام أدوات المحاسبة اليومية على جهاز Windows الخاص بك.',
    'cta.downloadBtn': 'تحميل Mohasabi الآن',
    'cta.note': 'تحميل من GitHub Releases الرسمي',
    'footer.description': 'Mohasabi — برنامج محاسبة مكتبي يساعدك على تنظيم أعمالك اليومية.',
    'footer.links.home': 'الرئيسية',
    'footer.links.features': 'المميزات',
    'footer.links.screenshots': 'لقطات الشاشة',
    'footer.links.howItWorks': 'كيف يعمل',
    'footer.links.requirements': 'متطلبات التشغيل',
    'footer.links.faq': 'الأسئلة الشائعة',
    'footer.links.releases': 'الإصدارات الرسمية',
    'footer.links.repository': 'المستودع الرسمي',
    'footer.links.privacy': 'سياسة الخصوصية',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'language.ar': 'العربية',
    'language.fr': 'Français',
    'language.en': 'English',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.screenshots': 'Captures d\'écran',
    'nav.howItWorks': 'Comment ça marche',
    'nav.requirements': 'Configuration requise',
    'nav.faq': 'Questions fréquentes',
    'nav.download': 'Télécharger Mohasabi',
    'hero.title': 'Votre comptabilité quotidienne, plus simple et organisée avec Mohasabi',
    'hero.subtitle': 'Mohasabi est un logiciel de comptabilité de bureau qui vous aide à organiser vos opérations quotidiennes et à gérer clients et factures via une interface pratique, avec stockage local des données et possibilité de travailler hors ligne.',
    'hero.downloadBtn': 'Télécharger Mohasabi',
    'hero.featuresBtn': 'Découvrir les fonctionnalités',
    'hero.version': 'Version',
    'hero.size': 'Taille',
    'hero.date': 'Date de sortie',
    'hero.os': 'Système d\'exploitation',
    'trust.title': 'Pourquoi faire confiance à Mohasabi ?',
    'trust.offline': 'Fonctionne hors ligne',
    'trust.offlineDesc': 'Gérez votre activité locale sans dépendre d\'une connexion Internet permanente.',
    'trust.localData': 'Vos données sur votre appareil',
    'trust.localDataDesc': 'Stockage local des données pour un travail de bureau sans service cloud centralisé.',
    'trust.license': 'Licence liée à l\'appareil',
    'trust.licenseDesc': 'Système de licence utilisant l\'identifiant de l\'appareil pour vérifier la validité de l\'activation.',
    'trust.updates': 'Nouvelles versions',
    'trust.updatesDesc': 'Accédez aux nouvelles versions via le canal officiel du logiciel.',
    'features.title': 'Tout ce dont vous avez besoin pour organiser votre activité quotidienne',
    'features.subtitle': 'Des fonctionnalités qui rendent la comptabilité quotidienne plus simple et efficace',
    'features.offline.title': 'Fonctionnement hors ligne',
    'features.offline.desc': 'Utilisez Mohasabi pour gérer votre activité locale sans dépendre d\'une connexion Internet permanente, selon les capacités prises en charge par l\'application.',
    'features.invoices.title': 'Gestion des clients et factures',
    'features.invoices.desc': 'Organisez les données clients, créez des factures et suivez vos opérations quotidiennes depuis une interface de bureau unique.',
    'features.localData.title': 'Données locales sur votre appareil',
    'features.localData.desc': 'Le logiciel repose sur un stockage local des données, pour un travail de bureau sans service cloud centralisé.',
    'features.license.title': 'Système de licence lié à l\'appareil',
    'features.license.desc': 'Le programme prend en charge un système de licence utilisant l\'identifiant de l\'appareil pour vérifier la validité de l\'activation selon les règles de licence adoptées.',
    'features.updates.title': 'Accès aux nouvelles versions',
    'features.updates.desc': 'Vous pouvez obtenir les nouvelles versions via le canal officiel des versions du logiciel.',
    'features.ui.title': 'Interface claire et facile à utiliser',
    'features.ui.desc': 'Une interface conçue pour faciliter l\'accès aux fonctions quotidiennes et réduire les étapes inutiles pendant le travail.',
    'screenshots.title': 'Découvrez l\'interface de Mohasabi',
    'screenshots.subtitle': 'Apprenez à connaître le logiciel de l\'intérieur avant de le télécharger',
    'screenshots.alt.main': 'Interface principale du logiciel',
    'screenshots.alt.dashboard': 'Tableau de bord principal',
    'screenshots.alt.invoices': 'Gestion des factures',
    'screenshots.alt.clients': 'Gestion des clients',
    'screenshots.alt.products': 'Gestion des produits',
    'howItWorks.title': 'Commencez avec Mohasabi en quelques étapes simples',
    'howItWorks.step1.title': 'Téléchargez le logiciel',
    'howItWorks.step1.desc': 'Obtenez le fichier d\'installation depuis le canal officiel des versions.',
    'howItWorks.step2.title': 'Installez le logiciel',
    'howItWorks.step2.desc': 'Suivez les instructions d\'installation compatibles avec votre version de Windows.',
    'howItWorks.step3.title': 'Commencez à l\'utiliser',
    'howItWorks.step3.desc': 'Lancez le logiciel et complétez les exigences d\'activation ou de configuration initiale si nécessaire.',
    'requirements.title': 'Configuration requise pour Mohasabi',
    'requirements.os': 'Système d\'exploitation',
    'requirements.architecture': 'Architecture',
    'requirements.processor': 'Processeur',
    'requirements.ram': 'Mémoire (RAM)',
    'requirements.diskSpace': 'Espace disque',
    'requirements.internet': 'Connexion Internet',
    'faq.title': 'Questions fréquentes',
    'faq.offline.q': 'Mohasabi fonctionne-t-il sans Internet ?',
    'faq.offline.a': 'Oui, le logiciel prend en charge le travail local sans connexion Internet permanente. Certaines opérations, comme le téléchargement de la version ou l\'obtention de mises à jour, peuvent nécessiter une connexion Internet.',
    'faq.os.q': 'Quel système d\'exploitation est requis ?',
    'faq.os.a': 'Le logiciel est dédié à Windows, avec les versions compatibles qui ont été effectivement vérifiées.',
    'faq.latest.q': 'Comment obtenir la dernière version ?',
    'faq.latest.a': 'Utilisez le bouton de téléchargement sur le site pour obtenir le fichier d\'installation depuis le canal GitHub Releases officiel, ou ouvrez la page des versions si le téléchargement direct échoue.',
    'faq.updates.q': 'Le logiciel se met-il à jour automatiquement ?',
    'faq.updates.a': 'Cela dépend de la version publiée. Si la mise à jour automatique est prise en charge, vous en serez informé dans le logiciel. Sinon, vous pouvez télécharger la nouvelle version manuellement depuis la page des versions.',
    'faq.data.q': 'Mes données sont-elles stockées sur un serveur cloud ?',
    'faq.data.a': 'Mohasabi repose sur le stockage local des données sur votre appareil. Il n\'y a pas de synchronisation cloud ni de sauvegarde externe automatique, sauf si cela fait effectivement partie du produit.',
    'faq.support.q': 'Où trouver de l\'aide ou signaler un problème ?',
    'faq.support.a': 'Vous pouvez consulter la page Issues du dépôt GitHub officiel pour signaler des problèmes ou demander de l\'aide.',
    'cta.title': 'Rendez la gestion de votre activité quotidienne plus organisée avec Mohasabi',
    'cta.subtitle': 'Découvrez le logiciel et commencez à utiliser les outils de comptabilité quotidiens sur votre appareil Windows.',
    'cta.downloadBtn': 'Télécharger Mohasabi maintenant',
    'cta.note': 'Téléchargement depuis GitHub Releases officiel',
    'footer.description': 'Mohasabi — Logiciel de comptabilité de bureau qui vous aide à organiser votre activité quotidienne.',
    'footer.links.home': 'Accueil',
    'footer.links.features': 'Fonctionnalités',
    'footer.links.screenshots': 'Captures d\'écran',
    'footer.links.howItWorks': 'Comment ça marche',
    'footer.links.requirements': 'Configuration requise',
    'footer.links.faq': 'Questions fréquentes',
    'footer.links.releases': 'Versions officielles',
    'footer.links.repository': 'Dépôt officiel',
    'footer.links.privacy': 'Politique de confidentialité',
    'footer.copyright': 'Tous droits réservés.',
    'language.ar': 'العربية',
    'language.fr': 'Français',
    'language.en': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.howItWorks': 'How It Works',
    'nav.requirements': 'System Requirements',
    'nav.faq': 'FAQ',
    'nav.download': 'Download Mohasabi',
    'hero.title': 'Your Daily Accounting, Simpler and More Organized with Mohasabi',
    'hero.subtitle': 'Mohasabi is a desktop accounting software that helps you organize your daily operations and manage customers and invoices through a practical interface, with local data storage and the ability to work offline.',
    'hero.downloadBtn': 'Download Mohasabi',
    'hero.featuresBtn': 'Discover Features',
    'hero.version': 'Version',
    'hero.size': 'Size',
    'hero.date': 'Release Date',
    'hero.os': 'Operating System',
    'trust.title': 'Why Trust Mohasabi?',
    'trust.offline': 'Works Offline',
    'trust.offlineDesc': 'Manage your local business without relying on a constant internet connection.',
    'trust.localData': 'Your Data on Your Device',
    'trust.localDataDesc': 'Local data storage supporting desktop work without a centralized cloud service.',
    'trust.license': 'Device-Linked License',
    'trust.licenseDesc': 'License system using device identifier to verify activation validity.',
    'trust.updates': 'New Versions',
    'trust.updatesDesc': 'Access new versions through the software\'s official release channel.',
    'features.title': 'Everything You Need to Organize Your Daily Business',
    'features.subtitle': 'Features that make daily accounting simpler and more efficient',
    'features.offline.title': 'Works Offline',
    'features.offline.desc': 'Use Mohasabi to manage your local business without relying on a constant internet connection, according to the capabilities supported in the application.',
    'features.invoices.title': 'Customer & Invoice Management',
    'features.invoices.desc': 'Organize customer data, create invoices, and track your daily operations from a single desktop interface.',
    'features.localData.title': 'Local Data on Your Device',
    'features.localData.desc': 'The software relies on local data storage, supporting desktop work without depending on a centralized cloud service.',
    'features.license.title': 'Device-Linked License System',
    'features.license.desc': 'The program supports a license system using the device identifier to verify activation validity according to adopted licensing rules.',
    'features.updates.title': 'Access to New Versions',
    'features.updates.desc': 'You can obtain new versions through the software\'s official release channel.',
    'features.ui.title': 'Clear & Easy-to-Use Interface',
    'features.ui.desc': 'An interface designed to facilitate access to daily functions and reduce unnecessary steps during work.',
    'screenshots.title': 'Discover the Mohasabi Interface',
    'screenshots.subtitle': 'Get to know the software from the inside before downloading',
    'screenshots.alt.main': 'Main software interface',
    'screenshots.alt.dashboard': 'Main dashboard',
    'screenshots.alt.invoices': 'Invoice management',
    'screenshots.alt.clients': 'Client management',
    'screenshots.alt.products': 'Product management',
    'howItWorks.title': 'Get Started with Mohasabi in Simple Steps',
    'howItWorks.step1.title': 'Download the Software',
    'howItWorks.step1.desc': 'Get the installation file from the official release channel.',
    'howItWorks.step2.title': 'Install the Software',
    'howItWorks.step2.desc': 'Follow the installation instructions compatible with your Windows version.',
    'howItWorks.step3.title': 'Start Using It',
    'howItWorks.step3.desc': 'Launch the software and complete activation or initial setup requirements if needed.',
    'requirements.title': 'Mohasabi System Requirements',
    'requirements.os': 'Operating System',
    'requirements.architecture': 'Architecture',
    'requirements.processor': 'Processor',
    'requirements.ram': 'Memory (RAM)',
    'requirements.diskSpace': 'Disk Space',
    'requirements.internet': 'Internet Connection',
    'faq.title': 'Frequently Asked Questions',
    'faq.offline.q': 'Does Mohasabi work offline?',
    'faq.offline.a': 'Yes, the software supports local work without a constant internet connection. Some operations, like downloading the version or getting updates, may require an internet connection.',
    'faq.os.q': 'What operating system is required?',
    'faq.os.a': 'The software is designed for Windows, with compatible versions that have been actually verified.',
    'faq.latest.q': 'How do I get the latest version?',
    'faq.latest.a': 'Use the download button on the site to get the installation file from the official GitHub Releases channel, or open the releases page if direct download fails.',
    'faq.updates.q': 'Does the software update automatically?',
    'faq.updates.a': 'This depends on the released version. If automatic updates are supported, you will be notified within the software. Otherwise, you can manually download the new version from the releases page.',
    'faq.data.q': 'Is my data stored on a cloud server?',
    'faq.data.a': 'Mohasabi relies on local data storage on your device. There is no cloud sync or automatic external backup unless that is actually part of the product.',
    'faq.support.q': 'Where can I find help or report an issue?',
    'faq.support.a': 'You can visit the Issues page of the official GitHub repository to report issues or request help.',
    'cta.title': 'Make Your Daily Business Management More Organized with Mohasabi',
    'cta.subtitle': 'Discover the software and start using daily accounting tools on your Windows device.',
    'cta.downloadBtn': 'Download Mohasabi Now',
    'cta.note': 'Download from official GitHub Releases',
    'footer.description': 'Mohasabi — Desktop accounting software that helps you organize your daily business.',
    'footer.links.home': 'Home',
    'footer.links.features': 'Features',
    'footer.links.screenshots': 'Screenshots',
    'footer.links.howItWorks': 'How It Works',
    'footer.links.requirements': 'System Requirements',
    'footer.links.faq': 'FAQ',
    'footer.links.releases': 'Official Releases',
    'footer.links.repository': 'Official Repository',
    'footer.links.privacy': 'Privacy Policy',
    'footer.copyright': 'All rights reserved.',
    'language.ar': 'العربية',
    'language.fr': 'Français',
    'language.en': 'English',
  },
};

export const getTranslation = (locale: Locale, key: TranslationKey): string => {
  return translations[locale][key] || key;
};

export const locales: Locale[] = ['ar', 'fr', 'en'];

export const localeNames: Record<Locale, string> = {
  ar: 'العربية',
  fr: 'Français',
  en: 'English',
};

export const isRTL = (locale: Locale): boolean => {
  return locale === 'ar';
};