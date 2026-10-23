# Mohasabi Landing Page

صفحة هبوط رسمية لبرنامج Mohasabi المحاسبي المكتبي - مبنية بـ React + TypeScript + Vite + Tailwind CSS.

## المميزات

- **دعم متعدد اللغات**: العربية (RTL)، الفرنسية، الإنجليزية
- **تصميم متجاوب**: يعمل على الهواتف، الأجهزة اللوحية، وأجهزة سطح المكتب
- **أداء عالي**: محسّن للسرعة مع Tailwind CSS و Vite
- **سهولة الوصول (Accessibility)**: متوافق مع معايير WCAG
- **SEO محسّن**: Meta tags، Open Graph، بيانات منظمة
- **جاهز للنشر**: مُعد للنشر على GitHub Pages

## متطلبات التشغيل

- Node.js 18+
- npm 9+

## التثبيت والتشغيل المحلي

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء المحلي
npm run preview
```

## النشر على GitHub Pages

### 1. تحديث إعدادات المشروع

قبل النشر، يجب تحديث الملف `src/config/siteConfig.ts` بالبيانات الحقيقية:

```typescript
github: {
  owner: 'YOUR_GITHUB_USERNAME',     // استبدل باسم مستخدم GitHub الخاص بك
  repo: 'YOUR_REPO_NAME',            // استبدل باسم المستودع
  releasesUrl: 'https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/releases',
  setupAssetName: 'Mohasabi-Setup.exe', // اسم ملف التثبيت الفعلي في GitHub Releases
},
download: {
  directUrl: 'https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/releases/latest/download/Mohasabi-Setup.exe',
  fallbackUrl: 'https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/releases',
},
```

### 2. تحديث index.html

استبدل `GITHUB_OWNER` و `GITHUB_REPO` في `index.html` بالقيم الحقيقية:

```html
<link rel="canonical" href="https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/" />
<meta property="og:url" content="https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/" />
```

### 3. إعداد GitHub Pages

1. اذهب إلى Settings > Pages في مستودع GitHub
2. اختر Source: "GitHub Actions"
3. سيتم النشر تلقائياً عند كل push للفرع الرئيسي

### 4. GitHub Actions Workflow

تم تضمين ملف workflow في `.github/workflows/deploy.yml` للنشر التلقائي.

## هيكل المشروع

```
src/
├── components/          # مكونات الواجهة
│   ├── Header.tsx       # شريط التنقل
│   ├── Hero.tsx         # القسم الرئيسي
│   ├── TrustHighlights.tsx  # مميزات الثقة
│   ├── Features.tsx     # المميزات التفصيلية
│   ├── ScreenshotGallery.tsx  # معرض لقطات الشاشة
│   ├── HowItWorks.tsx   # خطوات الاستخدام
│   ├── SystemRequirements.tsx  # متطلبات النظام
│   ├── FAQ.tsx          # الأسئلة الشائعة
│   ├── DownloadCTA.tsx  # زر التحميل النهائي
│   └── Footer.tsx       # التذييل
├── config/
│   └── siteConfig.ts    # إعدادات الموقع المركزية
├── i18n/
│   ├── translations.ts  # الترجمات (ar, fr, en)
│   └── LanguageContext.tsx  # سياق اللغة و RTL
├── App.tsx              # المكون الرئيسي
├── main.tsx             # نقطة الدخول
└── index.css            # أنماط Tailwind والأنماط المخصصة
```

## استبدال الأصول (Assets)

ضع الصور الحقيقية في مجلد `public/assets/images/` مع الأسماء التالية:

- `logo.svg` - شعار البرنامج
- `hero-screenshot.svg` - لقطة الشاشة الرئيسية في قسم Hero
- `screenshot-1.svg` إلى `screenshot-4.svg` - لقطات المعرض
- `og-image.svg` - صورة المشاركة الاجتماعية (1200x630)

## القيم المطلوب استبدالها قبل النشر

| القيمة | الوصف | الملف |
|----------|---------|-------|
| `GITHUB_OWNER` | اسم مستخدم/منظمة GitHub | `siteConfig.ts`, `index.html` |
| `GITHUB_REPO` | اسم المستودع | `siteConfig.ts`, `index.html` |
| `Mohasabi-Setup.exe` | اسم ملف التثبيت الفعلي | `siteConfig.ts` |
| متطلبات النظام | القيم الحقيقية المختبرة | `siteConfig.ts` |
| معلومات التواصل | روابط الدعم الفعلية | `siteConfig.ts` |
| الصور | لقطات شاشة حقيقية للبرنامج | `public/assets/images/` |

## السكريبتات المتاحة

| الأمر | الوصف |
|-------|---------|
| `npm run dev` | تشغيل خادم التطوير |
| `npm run build` | بناء للإنتاج |
| `npm run preview` | معاينة البناء |
| `npm run lint` | فحص الكود (إذا مُعد) |

## التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - الكتابة الثابتة
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS
- **GitHub Actions** - النشر التلقائي

## الترخيص

هذا المشروع مخصص لبرنامج Mohasabi. جميع الحقوق محفوظة.

## المساهمة

للمساهمة في تطوير صفحة الهبوط:

1. Fork المستودع
2. أنشئ فرع للميزة (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## الدعم

للإبلاغ عن مشاكل أو طلب ميزات، يرجى فتح Issue في مستودع GitHub الرسمي.