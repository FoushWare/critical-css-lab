const { useState, useEffect } = React;

// Language Switcher Hook
function useLanguage() {
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const getText = (enText, arText) => {
    return currentLang === 'ar' && arText ? arText : enText;
  };

  return { currentLang, toggleLanguage, getText };
}

// Header Component
function Header({ currentLang, toggleLanguage, getText }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-mark">C</span>
          <span>{getText('Critical CSS Lab', 'مختبر CSS')}</span>
        </div>

        <nav className="main-navigation" aria-label="Main navigation">
          <span>EPS04</span>
          <span>{getText('React CSR', 'React CSR')}</span>
          <button 
            className="lang-switcher" 
            onClick={toggleLanguage} 
            aria-label="Switch language"
          >
            <span>{currentLang === 'en' ? 'AR' : 'EN'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

// Hero Component
function Hero({ getText }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">
            {getText('WEB PERFORMANCE LAB', 'مختبر أداء الويب')}
          </p>

          <h1>
            {getText('Does CSS Block Rendering in React?', 'هل CSS يعيق rendering في React؟')}
          </h1>

          <p className="hero-description">
            {getText(
              'Does CSS stop page display in React? See for yourself how CSS delays content appearance with client-side rendering.',
              'هل CSS يوقف عرض الصفحة في React؟ شاهد بنفسك كيف يؤخر CSS ظهور المحتوى مع rendering من جانب العميل.'
            )}
          </p>

          <div className="hero-actions">
            <button 
              className="button button-primary clickable" 
              onClick={() => window.location.reload()}
            >
              {getText('Refresh Page', 'تحديث الصفحة')}
            </button>

            <div className="button button-secondary">
              {getText('CSS Delay: 10s', 'تأخير CSS: 10 ثواني')}
            </div>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <strong>EPS04</strong>
              <span>{getText('React CSR', 'React CSR')}</span>
            </div>

            <div className="meta-divider"></div>

            <div className="meta-item">
              <strong>React</strong>
              <span>{getText('Normal CSS', 'CSS عادي')}</span>
            </div>

            <div className="meta-divider"></div>

            <div className="meta-item">
              <strong>{getText('Before', 'قبل')}</strong>
              <span>{getText('Baseline', 'الحالة الأولية')}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="browser-window">
            <div className="browser-toolbar">
              <div className="browser-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-address">
                css-react-rendering.dev
              </div>
            </div>

            <div className="browser-content">
              <div className="browser-line browser-line-large"></div>
              <div className="browser-line browser-line-medium"></div>
              <div className="browser-line browser-line-small"></div>
              <div className="browser-card-grid">
                <div className="browser-card"></div>
                <div className="browser-card"></div>
                <div className="browser-card"></div>
              </div>
            </div>
          </div>

          <div className="floating-badge badge-render">
            <span className="badge-dot"></span>
            <span>{getText('Display', 'عرض')}</span>
          </div>

          <div className="floating-badge badge-css">
            <span>CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Metrics Component
function Metrics({ getText }) {
  return (
    <section className="metrics-section">
      <div className="container">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">
            {getText('CSS Performance Impact', 'تأثير CSS على الأداء')}
          </p>

          <h2>
            {getText('What\'s the Impact of CSS Delay?', 'ما تأثير تأخير CSS؟')}
          </h2>

          <p>
            {getText(
              'Does CSS really affect page speed in React? See the numbers.',
              'هل CSS يؤثر فعلاً على سرعة الصفحة في React؟ شاهد الأرقام.'
            )}
          </p>
        </div>

        <div className="metrics-grid">
          <article className="metric-card">
            <div className="metric-label">
              {getText('CSS Delay', 'تأخير CSS')}
            </div>
            <div className="metric-value highlight">
              10.0s
            </div>
            <div className="metric-status warning">
              {getText('CSS delayed 10s', 'CSS متأخر 10 ثواني')}
            </div>
          </article>

          <article className="metric-card">
            <div className="metric-label">
              {getText('First Paint', 'FCP أول ظهور')}
            </div>
            <div className="metric-value highlight">
              ~10.0s
            </div>
            <div className="metric-status warning">
              {getText('First content visible', 'أول ظهور للمحتوى')}
            </div>
          </article>

          <article className="metric-card">
            <div className="metric-label">
              {getText('Largest Paint', 'LCP أكبر ظهور')}
            </div>
            <div className="metric-value highlight">
              ~10.1s
            </div>
            <div className="metric-status warning">
              {getText('Largest content visible', 'أكبر محتوى ظاهر')}
            </div>
          </article>

          <article className="metric-card">
            <div className="metric-label">
              {getText('Blocking', 'RB معيق للعرض')}
            </div>
            <div className="metric-value highlight">
              {getText('Yes', 'نعم')}
            </div>
            <div className="metric-status warning">
              {getText('CSS blocks rendering', 'CSS يعيق rendering')}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// Pipeline Component
function Pipeline({ getText }) {
  const steps = [
    {
      number: '01',
      icon: 'HTML',
      title: 'HTML',
      description: getText(
        'Does HTML stop rendering? No, HTML is fast.',
        'هل HTML يوقف rendering؟ لا، HTML سريع.'
      )
    },
    {
      number: '02',
      icon: 'CSS',
      title: 'CSS',
      description: getText(
        'Does CSS stop rendering? Yes, browser waits for CSS.',
        'هل CSS يوقف rendering؟ نعم، المتصفح ينتظر CSS.'
      )
    },
    {
      number: '03',
      icon: 'DOM + CSSOM',
      title: 'Combine',
      description: getText(
        'Can we display without CSS? No, must combine HTML and CSS.',
        'هل يمكن عرض بدون CSS؟ لا، يجب دمج HTML و CSS.'
      )
    },
    {
      number: '04',
      icon: 'Layout',
      title: 'Layout',
      description: getText(
        'Can we determine positions without CSS? No, CSS defines locations.',
        'هل يمكن تحديد المواقع بدون CSS؟ لا، CSS يحدد الأماكن.'
      )
    },
    {
      number: '05',
      icon: 'Paint',
      title: 'Paint',
      description: getText(
        'Can we paint without CSS? No, CSS defines colors and shapes.',
        'هل يمكن الرسم بدون CSS؟ لا، CSS يحدد الألوان والأشكال.'
      )
    },
    {
      number: '06',
      icon: 'Composite',
      title: 'Display',
      description: getText(
        'When does content appear? After CSS loads completely.',
        'متى يظهر المحتوى؟ بعد تحميل CSS بالكامل.'
      )
    }
  ];

  return (
    <section id="how-it-works" className="pipeline-section">
      <div className="container">
        <div className="section-intro section-intro-centered">
          <p className="eyebrow">
            {getText('Why CSS Blocks Rendering', 'لماذا CSS يعيق rendering')}
          </p>

          <h2>
            {getText('How Does CSS Prevent Page Display?', 'كيف يمنع CSS عرض الصفحة؟')}
          </h2>

          <p>
            {getText(
              'Does the browser need CSS? What happens if CSS is delayed?',
              'هل المتصفح يحتاج CSS؟ ماذا يحدث إذا تأخر CSS؟'
            )}
          </p>
        </div>

        <div className="pipeline">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <article className="pipeline-step">
                <span className="step-number">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
              {index < steps.length - 1 && <span className="pipeline-arrow">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  const { currentLang, toggleLanguage, getText } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    console.log('Critical CSS Lab - EPS04 React CSR');
    console.log('Language:', currentLang);
  }, [currentLang]);

  return (
    <>
      <Header 
        currentLang={currentLang} 
        toggleLanguage={toggleLanguage} 
        getText={getText} 
      />
      <main>
        <Hero getText={getText} />
        <Metrics getText={getText} />
        <Pipeline getText={getText} />
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
