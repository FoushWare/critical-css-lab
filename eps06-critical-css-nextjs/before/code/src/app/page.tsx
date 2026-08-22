'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [currentLang]);

  const t = {
    en: {
      webPerformanceLab: 'WEB PERFORMANCE LAB',
      title: 'Does CSS Block Rendering in Next.js?',
      description: 'Does Server-Side Rendering change CSS blocking? See how SSR affects CSS loading compared to client-side React.',
      refreshPage: 'Refresh Page',
      cssDelayLabel: 'CSS Delay: 10s',
      eps06: 'EPS06',
      cssBlocksRenderingLabel: 'CSS Blocks Rendering',
      htmlLabel: 'HTML',
      nextjsSSR: 'Next.js SSR',
      before: 'Before',
      baseline: 'Baseline',
      cssPerformanceImpact: 'CSS Performance Impact',
      impactTitle: "What's the Impact of CSS Delay?",
      impactDesc: 'Does CSS really affect page speed in SSR? See the numbers.',
      cssDelayMetric: 'CSS Delay',
      cssDelayed10s: 'CSS delayed 10s',
      firstPaint: 'First Paint',
      firstContentVisible: 'First content visible',
      largestPaint: 'Largest Paint',
      largestContentVisible: 'Largest content visible',
      blocking: 'Blocking',
      cssBlocksRenderingMetric: 'CSS blocks rendering',
      whyCssBlocks: 'Why CSS Blocks Rendering',
      howPrevents: 'How Does CSS Prevent Page Display?',
      doesBrowserNeed: 'Does the browser need CSS? What happens if CSS is delayed?',
      htmlPipeline: 'HTML',
      htmlDesc: 'Does HTML stop rendering? No, HTML is fast.',
      cssPipeline: 'CSS',
      cssDesc: 'Does CSS stop rendering? Yes, browser waits for CSS.',
      combine: 'Combine',
      combineDesc: 'Can we display without CSS? No, must combine HTML and CSS.',
      layout: 'Layout',
      layoutDesc: 'Can we determine positions without CSS? No, CSS defines locations.',
      paint: 'Paint',
      paintDesc: 'Can we paint without CSS? No, CSS defines colors and shapes.',
      display: 'Display',
      displayDesc: 'When does content appear? After CSS loads completely.',
    },
    ar: {
      webPerformanceLab: 'مختبر أداء الويب',
      title: 'هل CSS يعيق rendering في Next.js؟',
      description: 'هل Server-Side Rendering يغير CSS blocking؟ شاهد كيف يؤثر SSR على تحميل CSS مقارنة بـ React client-side.',
      refreshPage: 'تحديث الصفحة',
      cssDelayLabel: 'تأخير CSS: 10 ثواني',
      eps06: 'حلقة 06',
      cssBlocksRenderingLabel: 'CSS يعيق rendering',
      htmlLabel: 'HTML',
      nextjsSSR: 'Next.js SSR',
      before: 'قبل',
      baseline: 'الحالة الأولية',
      cssPerformanceImpact: 'تأثير CSS على الأداء',
      impactTitle: 'ما تأثير تأخير CSS؟',
      impactDesc: 'هل CSS يؤثر فعلاً على سرعة الصفحة في SSR؟ شاهد الأرقام.',
      cssDelayMetric: 'تأخير CSS',
      cssDelayed10s: 'CSS متأخر 10 ثواني',
      firstPaint: 'أول ظهور',
      firstContentVisible: 'أول ظهور للمحتوى',
      largestPaint: 'أكبر ظهور',
      largestContentVisible: 'أكبر محتوى ظاهر',
      blocking: 'معيق للعرض',
      cssBlocksRenderingMetric: 'CSS يعيق rendering',
      whyCssBlocks: 'لماذا CSS يعيق rendering',
      howPrevents: 'كيف يمنع CSS عرض الصفحة؟',
      doesBrowserNeed: 'هل المتصفح يحتاج CSS؟ ماذا يحدث إذا تأخر CSS؟',
      htmlPipeline: 'HTML',
      htmlDesc: 'هل HTML يوقف rendering؟ لا، HTML سريع.',
      cssPipeline: 'CSS',
      cssDesc: 'هل CSS يوقف rendering؟ نعم، المتصفح ينتظر CSS.',
      combine: 'دمج',
      combineDesc: 'هل يمكن عرض بدون CSS؟ لا، يجب دمج HTML و CSS.',
      layout: 'Layout',
      layoutDesc: 'هل يمكن تحديد المواقع بدون CSS؟ لا، CSS يحدد الأماكن.',
      paint: 'Paint',
      paintDesc: 'هل يمكن الرسم بدون CSS؟ لا، CSS يحدد الألوان والأشكال.',
      display: 'عرض',
      displayDesc: 'متى يظهر المحتوى؟ بعد تحميل CSS بالكامل.',
    }
  };

  const text = t[currentLang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">C</span>
            <span className="font-semibold text-gray-800">Critical CSS Lab</span>
          </div>
          <nav className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">EPS06</span>
            <span className="text-sm text-gray-500">Next.js SSR</span>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              {currentLang === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-blue-600 mb-4">{text.webPerformanceLab}</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{text.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{text.description}</p>
              
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {text.refreshPage}
                </button>
                <div className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg">
                  {text.cssDelayLabel}
                </div>
              </div>

              <div className="flex gap-6 text-sm">
                <div>
                  <strong className="text-gray-900">{text.eps06}</strong>
                  <span className="text-gray-600 ml-1">{text.cssBlocksRenderingLabel}</span>
                </div>
                <div className="text-gray-300">|</div>
                <div>
                  <strong className="text-gray-900">{text.htmlLabel}</strong>
                  <span className="text-gray-600 ml-1">{text.nextjsSSR}</span>
                </div>
                <div className="text-gray-300">|</div>
                <div>
                  <strong className="text-gray-900">{text.before}</strong>
                  <span className="text-gray-600 ml-1">{text.baseline}</span>
                </div>
              </div>
            </div>

            {/* Browser Visual */}
            <div className="relative bg-white rounded-lg shadow-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-sm text-gray-600">
                  localhost:8088
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-16 bg-gray-200 rounded"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-blue-600 mb-2">{text.cssPerformanceImpact}</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.impactTitle}</h2>
              <p className="text-gray-600">{text.impactDesc}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">{text.cssDelayMetric}</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">10.0s</div>
                <div className="text-sm text-orange-600">{text.cssDelayed10s}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">{text.firstPaint}</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">~10.0s</div>
                <div className="text-sm text-orange-600">{text.firstContentVisible}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">{text.largestPaint}</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">~10.1s</div>
                <div className="text-sm text-orange-600">{text.largestContentVisible}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">{text.blocking}</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Yes</div>
                <div className="text-sm text-orange-600">{text.cssBlocksRenderingMetric}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-blue-600 mb-2">{text.whyCssBlocks}</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.howPrevents}</h2>
              <p className="text-gray-600">{text.doesBrowserNeed}</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { num: '01', icon: 'HTML', title: text.htmlPipeline, desc: text.htmlDesc },
                { num: '02', icon: 'CSS', title: text.cssPipeline, desc: text.cssDesc },
                { num: '03', icon: 'DOM+CSS', title: text.combine, desc: text.combineDesc },
                { num: '04', icon: 'Layout', title: text.layout, desc: text.layoutDesc },
                { num: '05', icon: 'Paint', title: text.paint, desc: text.paintDesc },
                { num: '06', icon: 'Display', title: text.display, desc: text.displayDesc },
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm w-32">
                    <div className="text-xs text-blue-600 mb-2">{step.num}</div>
                    <div className="text-lg font-bold text-gray-900 mb-2">{step.icon}</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.desc}</div>
                  </div>
                  {index < 5 && <span className="text-2xl text-gray-300 mx-2">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
