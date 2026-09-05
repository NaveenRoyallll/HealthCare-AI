"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  FileText,
  HeartPulse,
  Home as HomeIcon,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const onboardingSteps = ["Basics", "Lifestyle", "History", "Goals"];

const overview = [
  { label: "Cardiovascular", status: "Good", detail: "No new signals", tone: "green" },
  { label: "Metabolic", status: "Building", detail: "Complete your baseline", tone: "amber" },
  { label: "Respiratory", status: "Good", detail: "No new signals", tone: "blue" },
  { label: "Prevention", status: "1 action", detail: "Due this week", tone: "coral" },
];

function Brand() {
  return (
    <div className="brand" aria-label="HealthLayer home">
      <span className="brand-mark"><span /></span>
      <span>HEALTHLAYER</span>
    </div>
  );
}

function Onboarding({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");

  const next = () => {
    if (step < onboardingSteps.length - 1) setStep((current) => current + 1);
    else onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
      <div className="onboarding-panel">
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close onboarding">
          <X size={19} />
        </button>
        <div className="eyebrow">YOUR PRIVATE STARTING POINT</div>
        <h2 id="onboarding-title">Let&apos;s make your health easier to follow.</h2>
        <p className="muted">A few details help shape a useful baseline. You can skip anything optional.</p>
        <div className="stepper" aria-label={`Onboarding step ${step + 1} of ${onboardingSteps.length}`}>
          {onboardingSteps.map((item, index) => (
            <div className={`step ${index <= step ? "active" : ""}`} key={item}>
              <span>{index < step ? <Check size={13} /> : index + 1}</span>{item}
            </div>
          ))}
        </div>
        <div className="onboarding-content">
          {step === 0 && <>
            <label htmlFor="name">What should we call you?</label>
            <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your first name" autoFocus />
            <label htmlFor="birth-year">Year of birth <span>Optional</span></label>
            <input id="birth-year" inputMode="numeric" placeholder="e.g. 1998" />
          </>}
          {step === 1 && <>
            <label>Which areas matter most right now?</label>
            <div className="choice-grid">
              {["Energy", "Sleep", "Movement", "Stress", "Nutrition", "Prevention"].map((choice, index) => (
                <button className={`choice ${index === 0 || index === 5 ? "selected" : ""}`} key={choice}>{choice}<span>{index === 0 || index === 5 ? <Check size={15} /> : "+"}</span></button>
              ))}
            </div>
          </>}
          {step === 2 && <>
            <label>Do you have any existing health conditions?</label>
            <div className="choice-grid single">
              {["No known conditions", "I&apos;d like to add some", "I&apos;d rather do this later"].map((choice, index) => <button className={`choice ${index === 0 ? "selected" : ""}`} key={choice}>{choice}<span>{index === 0 ? <Check size={15} /> : "+"}</span></button>)}
            </div>
            <p className="field-note"><ShieldCheck size={15} /> Your health information stays under your control.</p>
          </>}
          {step === 3 && <>
            <label>What would a good first month look like?</label>
            <div className="goal-card"><Sparkles size={18} /><div><strong>A clearer picture</strong><p>Understand your baseline and build one steady habit.</p></div><Check size={17} /></div>
            <div className="goal-card"><HeartPulse size={18} /><div><strong>Stay ahead</strong><p>Keep important measurements and follow-ups in one place.</p></div></div>
          </>}
        </div>
        <div className="modal-footer"><span>Step {step + 1} of {onboardingSteps.length}</span><button className="primary-button" onClick={next}>{step === onboardingSteps.length - 1 ? "Finish setup" : "Continue"}<ArrowRight size={17} /></button></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileNav ? "open" : ""}`}>
        <div className="sidebar-top"><Brand /><button className="icon-button mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={19} /></button></div>
        <div className="workspace-label">MY HEALTH</div>
        <nav aria-label="Primary navigation">
          <a className="nav-item active" href="#overview"><HomeIcon size={18} />Overview</a>
          <a className="nav-item" href="#check-in"><Activity size={18} />Daily check-in</a>
          <a className="nav-item" href="#timeline"><BookOpen size={18} />Health timeline</a>
          <a className="nav-item" href="#records"><FileText size={18} />Records <span className="nav-soon">Soon</span></a>
        </nav>
        <div className="sidebar-bottom">
          <div className="privacy-note"><ShieldCheck size={17} /><div><strong>Private by design</strong><p>Your information is yours.</p></div></div>
          <a className="nav-item" href="#help"><CircleHelp size={18} />Help & safety</a>
          <div className="profile-mini"><span className="avatar">N</span><div><strong>Naveen</strong><small>Personal account</small></div><ChevronRight size={16} /></div>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar"><button className="icon-button menu-button" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={21} /></button><div className="mobile-brand"><Brand /></div><div className="topbar-actions"><button className="icon-button" aria-label="Notifications"><Bell size={19} /><span className="notification-dot" /></button><button className="avatar top-avatar" aria-label="Open profile">N</button></div></header>
        <div className="content-wrap">
          <section className="welcome-row" id="overview"><div><div className="eyebrow">SATURDAY, SEPTEMBER 5, 2026</div><h1>Good morning, Naveen<span>.</span></h1><p className="intro">Small, informed steps add up. Here&apos;s your health picture today.</p></div><button className="text-button" onClick={() => setShowOnboarding(true)}>Edit baseline <ChevronRight size={16} /></button></section>

          <section className="hero-check" id="check-in"><div className="hero-copy"><div className="hero-icon"><HeartPulse size={23} /></div><div><div className="eyebrow light">TODAY&apos;S HEALTH CHECK</div><h2>How are you feeling today?</h2><p>A two-minute check-in helps you notice changes over time. It is not a diagnosis.</p><button className="light-button" onClick={() => setShowOnboarding(true)}>Start check-in <ArrowRight size={17} /></button></div></div><div className="hero-orbit" aria-hidden="true"><span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" /><span className="orbit-core"><Activity size={26} /></span></div></section>

          <div className="section-heading"><div><div className="eyebrow">YOUR OVERVIEW</div><h2>Signals worth noticing</h2></div><button className="text-button">View details <ChevronRight size={16} /></button></div>
          <section className="overview-grid">{overview.map((item) => <article className="signal-card" key={item.label}><div className={`signal-icon ${item.tone}`}><HeartPulse size={17} /></div><div className="signal-info"><h3>{item.label}</h3><strong>{item.status}</strong><p>{item.detail}</p></div><ChevronRight className="card-arrow" size={17} /></article>)}</section>

          <section className="lower-grid"><article className="timeline-card" id="timeline"><div className="card-heading"><div><div className="eyebrow">YOUR HEALTH JOURNEY</div><h2>Recent activity</h2></div><button className="icon-button" aria-label="Open timeline"><ChevronRight size={18} /></button></div><div className="timeline-list"><div className="timeline-item"><span className="timeline-dot coral" /><div><strong>Baseline started</strong><p>Today · Health profile created</p></div><span className="timeline-tag">New</span></div><div className="timeline-item"><span className="timeline-dot blue" /><div><strong>Profile ready to complete</strong><p>Add a few details for a clearer picture</p></div><ChevronRight size={16} /></div></div><button className="outline-button full-width">Open health timeline <ArrowRight size={16} /></button></article><article className="plan-card"><div className="card-heading"><div><div className="eyebrow">YOUR NEXT STEP</div><h2>Build your baseline</h2></div><div className="plan-badge"><Sparkles size={16} /></div></div><p>Complete your profile so HealthLayer can keep your future check-ins relevant and grounded in your information.</p><div className="progress-label"><span>Profile progress</span><strong>25%</strong></div><div className="progress-track"><span /></div><button className="primary-button full-width" onClick={() => setShowOnboarding(true)}>Continue setup <ArrowRight size={17} /></button><div className="safe-caption"><ShieldCheck size={15} /> You choose what to share</div></article></section>
          <footer className="page-footer"><span>HealthLayer is a preventive health companion, not a replacement for professional care.</span><a href="#safety">Safety & privacy</a></footer>
        </div>
      </section>
      {showOnboarding && <Onboarding onClose={() => setShowOnboarding(false)} />}
    </main>
  );
}
