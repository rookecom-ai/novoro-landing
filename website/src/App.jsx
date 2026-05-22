import React, { useEffect, useState, useRef } from 'react';
import './index.css';

const N8N_WEBHOOK_URL = 'https://rooksystems.app.n8n.cloud/webhook/novoro-lead';
const CAL_LINK = 'novoro-info-b0ejbj/free-audit-by-novoro';

const scrollToAudit = () => {
  const el = document.getElementById('audit');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`main-nav mobile-nav-wrapper ${scrolled ? 'nav-solid' : ''}`}>
      <div
        className="nav-logo-container"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}
      >
        <span className="brand-logo-text">NOVORO</span>
      </div>
      <div className="nav-links-container">
        <a href="#audit" className="nav-link">The Audit</a>
        <a href="#process" className="nav-link">Process</a>
        <a href="#proof" className="nav-link">Proof</a>
      </div>
      <div className="nav-action-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn-outline-pill" onClick={scrollToAudit}>Book Audit</button>
      </div>
    </nav>
  );
}

function Hero() {
  const revealRef = useScrollReveal();
  return (
    <section ref={revealRef} className="scroll-section container hero-split" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
      <div className="hero-brand-col" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="hero-brand-mark">
          <span className="hero-brand-novoro">NOVORO</span>
          <div className="hero-brand-rule" />
          <span className="hero-brand-systems">SYSTEMS</span>
        </div>
      </div>
      <div className="hero-content-col" style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 className="h1-squidred hero-headline-massive" style={{ marginBottom: '24px' }}>
          <span style={{ whiteSpace: 'nowrap' }}>Your Business Is</span><br /><span style={{ whiteSpace: 'nowrap' }}>Leaking Revenue.</span><br /><span style={{ whiteSpace: 'nowrap' }}>Let's Fix That.</span>
        </h1>
        <p className="hero-subtext" style={{ marginBottom: '48px' }}>
          Book a free 30-minute call. We map exactly where manual operations, broken integrations, and data gaps are costing you, design the custom automation software to fix them, and hand you the implementation plan before we ever send a proposal.
        </p>
        <div className="hero-actions">
          <button
            className="btn-primary btn-shimmer"
            onClick={scrollToAudit}
            style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
          >
            Book Your Free Audit &rarr;
          </button>
          <div className="hero-cta-subtext" style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.02em' }}>
            30 min &middot; No commitment &middot; Fix plan delivered same week
          </div>
        </div>
      </div>

      <div className="logo-marquee-wrapper" style={{ gridColumn: '1 / -1', marginTop: '40px' }}>
        <div className="logo-marquee-label">EXECUTIVES FROM THESE TEAMS TRUST OUR ARCHITECTURE</div>
        <div className="logo-marquee-track-container">
          <div className="logo-marquee-track">
            {['Stripe', 'Figma', 'Linear', 'Notion', 'Vercel', 'Rippling', 'Brex', 'Loom',
              'Stripe', 'Figma', 'Linear', 'Notion', 'Vercel', 'Rippling', 'Brex', 'Loom'].map((name, i) => (
              <span key={i} className="logo-marquee-item">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDivider() {
  return <div className="section-divider" />;
}

function Process() {
  const revealRef = useScrollReveal();
  const steps = [
    { num: '01', title: 'The 30-Min Audit', desc: 'We map your exact bottlenecks, fragmented data points, and manual workflows live on the call.' },
    { num: '02', title: 'The Blueprint', desc: 'Within 3 days, you receive a full technical architecture plan detailing how we will automate the pipeline.' },
    { num: '03', title: 'The Build', desc: 'We execute in agile 2-week sprints. You see working software instantly, not 6 months from now.' },
    { num: '04', title: 'The Handover', desc: 'Full deployment, CI/CD integration, monitoring dashboards, and a 90-day SLA for zero downtime.' },
  ];
  return (
    <section id="process" ref={revealRef} className="scroll-section section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 className="h2-section" style={{ color: '#fff' }}>What Happens Next</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginTop: '16px' }}>From discovery to deployed infrastructure in weeks.</p>
      </div>
      <div className="how-we-work-grid">
        <div className="how-we-work-line" />
        {steps.map((step, i) => (
          <div key={i} className="process-step-card" style={{ position: 'relative', zIndex: 1 }}>
            <div className="process-step-circle" style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid var(--color-holo-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-holo-cyan)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', background: '#050505', zIndex: 2 }}>{step.num}</div>
            <div className="process-step-content">
              <h3 style={{ fontSize: '18px', marginBottom: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#fff' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  const revealRef = useScrollReveal();

  const reviews = [
    {
      logo: '/hsc-logo.jpg',
      company: 'HSC CONSTRUCTION',
      title: 'Director of Operations',
      quote: 'Novoro architected a custom software system that completely eliminated our manual bottlenecks. We scaled our operations faster in 6 months than we did in the last 3 years, and our top-line revenue reflects that directly.',
    },
    {
      logo: '/pricemaster-logo.png',
      company: 'PRICEMASTER CORPORATION',
      title: 'Chief Executive Officer',
      quote: 'Before Novoro, our team was stretched across 20+ disconnected subscriptions, with critical workflows patched together by hand. They rebuilt our entire stack into one unified system, eliminating the operational friction that used to cost us hours and revenue every week.',
    },
    {
      logo: '/juka-logo.png',
      company: 'JUKA INNOVATIONS',
      title: 'Chief Executive Officer',
      quote: 'Novoro audited our infrastructure and delivered an implementation plan that transformed how we operate. Their automated pipeline replaced hundreds of hours of manual work, allowing us to scale profitably without increasing headcount.',
    },
  ];

  return (
    <section id="proof" ref={revealRef} className="scroll-section section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="h2-section" style={{ color: '#fff' }}>Clarity before commitment.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginTop: '16px' }}>Enterprise leaders who transformed their operations.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <div key={i} className="card-dark review-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px', flexGrow: 1 }}>
              &ldquo;{review.quote}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src={review.logo} alt={review.company} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'contain', padding: '4px', backgroundColor: '#ffffff', border: '1px solid rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-body)', fontSize: '14px' }}>{review.title}</div>
                <div style={{ color: 'var(--color-holo-cyan)', fontSize: '12px', letterSpacing: '0.05em', marginTop: '4px' }}>{review.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-grid" style={{ marginTop: '60px' }}>
        {[
          { num: '$10M+', label: 'In client revenue processed' },
          { num: '12', label: 'Enterprise systems integrated' },
          { num: '99.9%', label: 'Average uptime SLA' },
          { num: '<6wks', label: 'Avg time to production' },
        ].map((stat, i) => (
          <div key={i} className={`card-dark ${i === 0 ? 'card-featured' : ''}`} style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1 }}>{stat.num}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '12px', lineHeight: 1.5 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const EMPTY_FORM = {
  first_name: '', last_name: '', email: '',
  sector: '', sector_other: '',
  business_description: '',
  monthly_revenue: '',
  team_size: '',
  biggest_bottleneck: '', bottleneck_other: '',
};

const TOTAL_STEPS = 6;

function ProgressBar({ step }) {
  return (
    <div className="onboarding-progress">
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
        <div
          key={i}
          className={`onboarding-progress-step ${i < step - 1 ? 'done' : i === step - 1 ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

function CalEmbed({ formData }) {
  const calRef = useRef(null);
  const initRef = useRef(false);

  useEffect(() => {
    const el = document.getElementById('audit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (initRef.current) return;
    if (!window.Cal || !window.Cal.ns || !window.Cal.ns["novoro-audit"]) return;
    if (!document.getElementById('novoro-cal-inline')) return;
    initRef.current = true;

    window.Cal.ns["novoro-audit"]("inline", {
      elementOrSelector: "#novoro-cal-inline",
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
        theme: "dark",
        name: `${formData.first_name} ${formData.last_name}`.trim(),
        email: formData.email,
        notes: `Sector: ${formData.sector} | Revenue: ${formData.monthly_revenue} | Team: ${formData.team_size} | Bottleneck: ${formData.biggest_bottleneck}`,
      },
    });

    window.Cal.ns["novoro-audit"]("ui", {
      theme: "dark",
      hideEventTypeDetails: true,
      layout: "month_view",
      cssVarsPerTheme: {
        dark: { "cal-brand": "#00D9FF" },
      },
    });
  }, [formData]);

  return (
    <section id="audit" className="onboarding-cal-section scroll-section is-visible">
      <div className="onboarding-cal-badge">&#10003; Audit Request Confirmed</div>
      <h2 className="onboarding-cal-title">
        We&rsquo;ve secured your roadmap.<br />
        <span style={{ color: 'var(--color-holo-cyan)' }}>Pick a time below.</span>
      </h2>
      <p className="onboarding-cal-sub">
        Final step &mdash; choose your free 30-minute diagnosis slot. A written fix plan is delivered within 24 hours of the call.
      </p>
      <div
        id="novoro-cal-inline"
        ref={calRef}
        style={{ width: '100%', minHeight: '650px', overflow: 'auto' }}
      />
    </section>
  );
}



function OnboardingForm() {
  const revealRef = useScrollReveal();
  const animatingRef = useRef(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState('forward');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState(() => {
    try {
      const saved = sessionStorage.getItem('novoro_form');
      return saved ? JSON.parse(saved) : EMPTY_FORM;
    } catch {
      return EMPTY_FORM;
    }
  });

  // Persist to sessionStorage on every change
  useEffect(() => {
    if (!formSubmitted) {
      sessionStorage.setItem('novoro_form', JSON.stringify(formData));
    }
  }, [formData, formSubmitted]);

  // Warn before leaving mid-flow
  useEffect(() => {
    if (step > 1 && !formSubmitted) {
      const handler = (e) => { e.preventDefault(); e.returnValue = ''; };
      window.addEventListener('beforeunload', handler);
      return () => window.removeEventListener('beforeunload', handler);
    }
  }, [step, formSubmitted]);

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const goNext = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDirection('forward');
    setStep(s => s + 1);
    setTimeout(() => { animatingRef.current = false; }, 350);
  };

  const goBack = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setDirection('back');
    setStep(s => s - 1);
    setError(null);
    setTimeout(() => { animatingRef.current = false; }, 350);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.first_name.trim() !== '' && formData.last_name.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 2: return formData.sector !== '';
      case 3: return true;
      case 4: return formData.monthly_revenue !== '';
      case 5: return formData.team_size !== '';
      case 6: return formData.biggest_bottleneck !== '';
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...formData,
      submitted_at: new Date().toISOString(),
      source_url: window.location.href,
      referrer: document.referrer,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    };
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(res.status);
      sessionStorage.removeItem('novoro_form');
      setFormSubmitted(true);
    } catch {
      setError('Something went wrong — please try again or email us at info@novorosystems.com');
      setSubmitting(false);
    }
  };



  if (formSubmitted) {
    return (
      <CalEmbed formData={formData} />
    );
  }

  const animClass = direction === 'forward' ? 'onboarding-step-enter-forward' : 'onboarding-step-enter-back';

  const SECTORS = [
    'SaaS / Technology', 'Construction / Trades', 'E-Commerce / Retail',
    'Professional Services / Consulting', 'Healthcare', 'Finance / Insurance',
    'Manufacturing / Logistics', 'Other',
  ];

  const REVENUES = ['Under $10k', '$10k – $50k', '$50k – $100k', '$100k – $500k', '$500k+'];

  const TEAM_SIZES = ['Just me', '2–5', '6–20', '21–50', '50+'];

  const BOTTLENECKS = [
    'Manual data entry / spreadsheet chaos',
    'Disconnected tools & integrations',
    'No visibility into operations / reporting gaps',
    'Scaling without adding headcount',
    'Slow or broken internal processes',
    'Other',
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div key="step-1" className={`onboarding-card ${animClass}`}>
            <p className="onboarding-progress-label">Step 1 of {TOTAL_STEPS} &mdash; Your Details</p>
            <ProgressBar step={step} />
            <h2 className="onboarding-question">Let&rsquo;s start with your details.</h2>
            <div className="onboarding-input-row">
              <div>
                <label className="onboarding-input-label">First Name</label>
                <input
                  className="onboarding-input"
                  type="text"
                  value={formData.first_name}
                  onChange={e => update('first_name', e.target.value)}
                  placeholder="John"
                  autoFocus
                />
              </div>
              <div>
                <label className="onboarding-input-label">Last Name</label>
                <input
                  className="onboarding-input"
                  type="text"
                  value={formData.last_name}
                  onChange={e => update('last_name', e.target.value)}
                  placeholder="Smith"
                />
              </div>
            </div>
            <label className="onboarding-input-label">Work Email</label>
            <input
              className="onboarding-input"
              type="email"
              value={formData.email}
              onChange={e => update('email', e.target.value)}
              placeholder="john@company.com"
              onKeyDown={e => { if (e.key === 'Enter' && canProceed()) goNext(); }}
            />
            <div className="onboarding-nav">
              <span />
              <button className="btn-primary btn-shimmer" onClick={goNext} disabled={!canProceed()}>
                Continue &rarr;
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div key="step-2" className={`onboarding-card ${animClass}`}>
            <p className="onboarding-progress-label">Step 2 of {TOTAL_STEPS} &mdash; Your Sector</p>
            <ProgressBar step={step} />
            <h2 className="onboarding-question">What sector are you in?</h2>
            <div className="onboarding-chips">
              {SECTORS.map(s => (
                <button
                  key={s}
                  className={`onboarding-chip ${formData.sector === s ? 'selected' : ''}`}
                  onClick={() => update('sector', s)}
                >
                  {s}
                </button>
              ))}
            </div>
            {formData.sector === 'Other' && (
              <div style={{ marginTop: '16px' }}>
                <label className="onboarding-input-label">Please describe</label>
                <input
                  className="onboarding-input"
                  type="text"
                  value={formData.sector_other}
                  onChange={e => update('sector_other', e.target.value)}
                  placeholder="Your sector"
                />
              </div>
            )}
            <div className="onboarding-nav">
              <button className="onboarding-back" onClick={goBack}>&larr; Back</button>
              <button className="btn-primary btn-shimmer" onClick={goNext} disabled={!canProceed()}>
                Continue &rarr;
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div key="step-3" className={`onboarding-card ${animClass}`}>
            <p className="onboarding-progress-label">Step 3 of {TOTAL_STEPS} &mdash; Your Business</p>
            <ProgressBar step={step} />
            <h2 className="onboarding-question">Tell us what you do.</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', fontFamily: 'var(--font-body)', marginBottom: '20px', marginTop: '-20px', lineHeight: 1.6 }}>
              Describe your business &mdash; the more context, the sharper our audit.
            </p>
            <textarea
              className="onboarding-textarea"
              rows={5}
              value={formData.business_description}
              onChange={e => update('business_description', e.target.value)}
              placeholder="e.g. We run a B2B SaaS platform with 50 clients. Our operations team manually processes onboarding, invoicing, and reporting across Notion, Airtable, and QuickBooks..."
            />
            <div className="onboarding-nav">
              <button className="onboarding-back" onClick={goBack}>&larr; Back</button>
              <button className="btn-primary btn-shimmer" onClick={goNext}>
                Continue &rarr;
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div key="step-4" className={`onboarding-card ${animClass}`}>
            <p className="onboarding-progress-label">Step 4 of {TOTAL_STEPS} &mdash; Revenue</p>
            <ProgressBar step={step} />
            <h2 className="onboarding-question">What&rsquo;s your current monthly revenue range?</h2>
            <div className="onboarding-cards">
              {REVENUES.map(r => (
                <button
                  key={r}
                  className={`onboarding-card-option ${formData.monthly_revenue === r ? 'selected' : ''}`}
                  onClick={() => update('monthly_revenue', r)}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="onboarding-nav">
              <button className="onboarding-back" onClick={goBack}>&larr; Back</button>
              <button className="btn-primary btn-shimmer" onClick={goNext} disabled={!canProceed()}>
                Continue &rarr;
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div key="step-5" className={`onboarding-card ${animClass}`}>
            <p className="onboarding-progress-label">Step 5 of {TOTAL_STEPS} &mdash; Team Size</p>
            <ProgressBar step={step} />
            <h2 className="onboarding-question">How big is your team?</h2>
            <div className="onboarding-cards">
              {TEAM_SIZES.map(s => (
                <button
                  key={s}
                  className={`onboarding-card-option ${formData.team_size === s ? 'selected' : ''}`}
                  onClick={() => update('team_size', s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="onboarding-nav">
              <button className="onboarding-back" onClick={goBack}>&larr; Back</button>
              <button className="btn-primary btn-shimmer" onClick={goNext} disabled={!canProceed()}>
                Continue &rarr;
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div key="step-6" className={`onboarding-card ${animClass}`}>
            <p className="onboarding-progress-label">Step 6 of {TOTAL_STEPS} &mdash; Final Step</p>
            <ProgressBar step={step} />
            <h2 className="onboarding-question">What&rsquo;s your biggest operational bottleneck?</h2>
            <div className="onboarding-cards">
              {BOTTLENECKS.map(b => (
                <button
                  key={b}
                  className={`onboarding-card-option ${formData.biggest_bottleneck === b ? 'selected' : ''}`}
                  onClick={() => update('biggest_bottleneck', b)}
                >
                  {b}
                </button>
              ))}
            </div>
            {formData.biggest_bottleneck === 'Other' && (
              <div style={{ marginTop: '16px' }}>
                <label className="onboarding-input-label">Please describe</label>
                <textarea
                  className="onboarding-textarea"
                  rows={2}
                  value={formData.bottleneck_other}
                  onChange={e => update('bottleneck_other', e.target.value)}
                  placeholder="Describe your bottleneck..."
                />
              </div>
            )}
            {error && <div className="onboarding-error">{error}</div>}
            <div className="onboarding-nav">
              <button className="onboarding-back" onClick={goBack}>&larr; Back</button>
              <button
                className="btn-primary btn-shimmer"
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
              >
                {submitting ? 'Analyzing your operations…' : 'See Available Times →'}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="audit" ref={revealRef} className="scroll-section">
      <div className="onboarding-section">
        {renderStep()}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      <div className="bg-grain-overlay" />
      <div className="deep-orange-glow breathing-bg" />
      <span className="hero-bg-logo">NOVORO</span>

      <Hero />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <OnboardingForm />

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 24px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
          &copy; 2026 Novoro Systems. High-Performance Software Infrastructure.
        </p>
      </footer>
    </div>
  );
}
