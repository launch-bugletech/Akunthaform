import { Fragment, useState as useSt } from 'react';
import AssessmentForm from './AssessmentForm.jsx';
import { IconArrowRight, IconCheck, IconBolt, IconTools, IconChart, IconShield, IconPlus } from './Icons.jsx';
import heroRooftop from '../assests/img/hero-rooftop.jpg';
import industryColdStorage from '../assests/img/industry-coldstorage.jpg';
import industryHospital from '../assests/img/industry-hospital.jpg';
import industryManufacturing from '../assests/img/industry-manufacturing.jpg';
import industryWarehouse from '../assests/img/industry-warehouse.jpg';

// All content sections (except hero and form) — Nav, Problem, RESCO, Benefits,
// Eligibility, Process, Why Akuntha, Industries, Mid CTA, FAQ, Final CTA, Footer

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#">
          <span className="brand-mark" aria-hidden="true"></span>
          <span>Akuntha</span>
        </a>
        <div className="nav-links">
          <a href="#how-it-works">How RESCO works</a>
          <a href="#benefits">Benefits</a>
          <a href="#eligibility">Eligibility</a>
          <a href="#industries">Industries</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-actions">
          <a className="btn btn-ghost" href="#assessment" style={{ padding: '10px 18px', fontSize: 13 }}>
            Free Assessment
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero({ h1 }) {
  const parts = h1.split(/\*(.+?)\*/g); // *italic* -> em
  return (
    <header className="hero">
      <div className="hero-media">
        <img src={heroRooftop} alt="Solar panels installed on a commercial rooftop" />
      </div>
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow-row">
            <span className="dot" aria-hidden="true"></span>
            <span className="eyebrow">Commercial solar without capital investment</span>
          </div>
          <h1 className="h-display hero-h1">
            {parts.map((p, i) => i % 2 === 1
              ? <em key={i}>{p}</em>
              : <Fragment key={i}>{p}</Fragment>
            )}
          </h1>
          <p className="lede hero-sub">
            Switch to commercial solar through the RESCO model. Akuntha Projects develops,
            installs, operates and maintains the solar system, while eligible businesses
            purchase solar electricity under a long-term commercial agreement.
          </p>

          <div className="hero-clarify">
            <strong>No solar plant purchase is required.</strong> Commercial terms are structured
            according to the project, site, electricity consumption and agreement period.
          </div>

          <div className="hero-cta-row">
            <a href="#assessment" className="btn btn-primary btn-lg">
              Check My Project Eligibility
              <IconArrowRight size={16} className="arr" />
            </a>
            <a href="#how-it-works" className="link-arrow">
              See how RESCO works <IconArrowRight size={14} />
            </a>
          </div>

          <ul className="trust-list">
            <li><IconCheck className="check" size={16} stroke={2} /> Zero upfront solar investment</li>
            <li><IconCheck className="check" size={16} stroke={2} /> Designed for C&amp;I facilities</li>
            <li><IconCheck className="check" size={16} stroke={2} /> Engineering, EPC and O&amp;M in-house</li>
            <li><IconCheck className="check" size={16} stroke={2} /> Rooftop and ground-mount capable</li>
          </ul>
        </div>

        <aside className="hero-right">
          <AssessmentForm />
        </aside>
      </div>
    </header>
  );
}

export function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">The cost of grid dependence</div>
            <h2 className="h1">Rising electricity costs can quietly limit business growth.</h2>
          </div>
          <p className="lede">
            Tariffs escalate, operational expenses climb, and margins compress against uncertain
            future power costs. Meanwhile, most industrial facilities sit on unused rooftops and
            open land that could produce electricity onsite.
          </p>
        </div>

        <div className="problem-grid">
          <div className="data-card">
            <div>
              <div className="label">Daytime demand</div>
              <div className="big">High <span className="accent">/</span> peak</div>
            </div>
            <p className="desc">
              Most C&amp;I operations run heaviest loads exactly when solar generates the most —
              creating a natural fit for onsite generation.
            </p>
          </div>
          <div className="data-card">
            <div>
              <div className="label">Monthly outlay</div>
              <div className="big">Significant</div>
            </div>
            <p className="desc">
              Electricity is often a top-three operational expense for manufacturing, cold
              storage and continuous-process facilities.
            </p>
          </div>
          <div className="data-card">
            <div>
              <div className="label">Unused capacity</div>
              <div className="big">Rooftop <span className="accent">+</span> land</div>
            </div>
            <p className="desc">
              Underutilised roof area or open plots often represent measurable, untapped
              generation potential for the site.
            </p>
          </div>
        </div>

        <div className="problem-note">
          A <strong>RESCO project</strong> may convert unused space into a source of lower-cost
          onsite electricity — without requiring the business to purchase the solar plant upfront.
        </div>
      </div>
    </section>
  );
}

export function RescoExplainer() {
  const steps = [
    { n: '01', t: 'RESCO partner invests' },
    { n: '02', t: 'Solar plant is installed at your facility' },
    { n: '03', t: 'Your business uses the solar electricity' },
    { n: '04', t: 'The plant is operated and maintained' },
  ];
  return (
    <section className="section" id="how-it-works" style={{ background: 'var(--bg-elev)' }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">How the model works</div>
            <h2 className="h1">The RESCO solar model, explained in four moves.</h2>
          </div>
          <p className="lede">
            RESCO stands for <em className="serif-italic">Renewable Energy Service Company</em>.
            It re-frames the commercial arrangement so the developer carries the capital
            burden, and your business simply purchases the electricity produced onsite.
          </p>
        </div>

        <div className="resco-flow">
          {steps.map((s, i) => (
            <div className="flow-step" key={s.n}>
              <span className="num">— {s.n}</span>
              <div className="title">{s.t}</div>
              {i < steps.length - 1 && <IconArrowRight className="arr" size={16} />}
            </div>
          ))}
        </div>

        <div className="compare-grid">
          <div className="compare-card">
            <div className="label">Traditional solar purchase</div>
            <h3>You buy the plant.</h3>
            <ul>
              <li><span className="marker">A.</span> Business funds the system with its own capital</li>
              <li><span className="marker">B.</span> Business owns the asset outright</li>
              <li><span className="marker">C.</span> Meaningful upfront capital investment required</li>
              <li><span className="marker">D.</span> Maintenance responsibility depends on contract</li>
              <li><span className="marker">E.</span> Long payback period before net savings appear</li>
            </ul>
          </div>
          <div className="compare-card highlight">
            <div className="label">The RESCO model</div>
            <h3>You buy the electricity.</h3>
            <ul>
              <li><span className="marker">A.</span> Project investment arranged by the RESCO developer</li>
              <li><span className="marker">B.</span> Solar system developed under a commercial agreement</li>
              <li><span className="marker">C.</span> Business purchases the generated solar electricity</li>
              <li><span className="marker">D.</span> Operations &amp; maintenance handled per the agreement</li>
              <li><span className="marker">E.</span> Savings potential begins from day one of operation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    n: '01', t: 'Zero Upfront Solar Investment',
    d: 'Preserve capital for production, expansion, staffing, equipment or other business priorities. No solar plant purchase required.',
  },
  {
    n: '02', t: 'Potentially Lower Electricity Costs',
    d: 'Use onsite solar to reduce the portion of electricity purchased from the grid. Actual savings depend on site and commercial terms.',
  },
  {
    n: '03', t: 'Professional O&M',
    d: 'Monitoring, preventive maintenance and performance support are managed throughout the agreed project term by Akuntha.',
  },
  {
    n: '04', t: 'Engineering-Led Execution',
    d: 'Site assessment, system design, electrical integration, commissioning and technical coordination are handled by one project team.',
  },
  {
    n: '05', t: 'Long-Term Energy Planning',
    d: 'Adopt a more structured approach to electricity cost management and progress on renewable energy commitments.',
  },
  {
    n: '06', t: 'Predictable, Contractual Terms',
    d: 'Commercial arrangements are documented up front so the business understands its energy costs across the project term.',
  },
];

export function BenefitsSection() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Why businesses choose RESCO</div>
            <h2 className="h1">Six ways a RESCO project can support your operation.</h2>
          </div>
          <p className="lede">
            The RESCO structure separates the ownership of the asset from the consumption of the
            energy — giving businesses a way to access solar power without redirecting capital
            from operations.
          </p>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map(b => (
            <article className="benefit" key={b.n}>
              <span className="num">— {b.n}</span>
              <div>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ELIGIBILITY_ITEMS = [
  'Your monthly electricity bill is substantial',
  'Most electricity is consumed during daytime hours',
  'Suitable rooftop or open land may be available',
  'You expect to operate from the facility long term',
  'You prefer to preserve capital instead of purchasing the solar system',
  'Your facility can support a long-term commercial energy agreement',
];

export function EligibilitySection() {
  return (
    <section className="section" id="eligibility" style={{ background: 'var(--bg-elev)' }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Self-qualify in 30 seconds</div>
            <h2 className="h1">Could your facility qualify for a RESCO project?</h2>
          </div>
          <p className="lede">
            If most of the statements below apply to your operation, a RESCO project may
            be worth evaluating. Final eligibility is confirmed after a technical and commercial
            assessment.
          </p>
        </div>

        <div className="eligibility-wrap">
          {ELIGIBILITY_ITEMS.map(item => (
            <div className="eligibility-item" key={item}>
              <div className="check-box">
                <IconCheck size={14} stroke={2.5} />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="eligibility-caveat">
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Please note.</strong> RESCO
          suitability depends on energy consumption, site ownership or permission, structural
          feasibility, applicable regulations, credit evaluation and commercial terms. This
          checklist is a starting point, not a guarantee of approval.
        </div>

        <div style={{ marginTop: 32 }}>
          <a href="#assessment" className="btn btn-primary btn-lg">
            Check My Facility <IconArrowRight size={16} className="arr" />
          </a>
        </div>
      </div>
    </section>
  );
}

const PROCESS = [
  { n: '01', t: 'Submit the Project Assessment',
    d: 'Share your facility type, electricity usage and contact details through the assessment form. Takes about three minutes.' },
  { n: '02', t: 'Initial Commercial Review',
    d: 'Our team reviews consumption, location and basic eligibility to decide whether a full technical assessment is worthwhile.' },
  { n: '03', t: 'Site and Technical Assessment',
    d: 'Engineers evaluate the roof or land, electrical system, shading, structural conditions and grid requirements onsite.' },
  { n: '04', t: 'Commercial Proposal',
    d: 'You receive a project-specific structure, expected generation profile, agreement period and commercial terms.' },
  { n: '05', t: 'Engineering and Installation',
    d: 'Akuntha coordinates detailed design, approvals, procurement, installation, testing and commissioning end to end.' },
  { n: '06', t: 'Operations and Maintenance',
    d: 'Once live, the plant is monitored and maintained through the agreed project term by our O&M team.' },
];

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">The process</div>
            <h2 className="h1">From assessment to operations — six steps.</h2>
          </div>
          <p className="lede">
            Every RESCO engagement follows a consistent path so decision-makers understand
            what happens next, what's required from the business, and how long each stage
            typically takes.
          </p>
        </div>

        <ol className="timeline" style={{ listStyle: 'none', padding: '0 0 0 40px', margin: 0 }}>
          {PROCESS.map(p => (
            <li className="timeline-item" key={p.n}>
              <span className="timeline-node"></span>
              <span className="timeline-num">— {p.n}</span>
              <h3 className="timeline-title">{p.t}</h3>
              <p className="desc">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const WHY = [
  { Icon: IconBolt, t: 'Electrical Infrastructure Experience',
    d: 'Experience with transformers, substations, power distribution, synchronisation and electrical integration for commercial and industrial facilities.' },
  { Icon: IconTools, t: 'EPC and O&M Delivery',
    d: 'Engineering, procurement, construction, commissioning, monitoring and maintenance handled by coordinated in-house teams.' },
  { Icon: IconChart, t: 'Commercial & Industrial Focus',
    d: 'Project planning is tailored to the constraints of operating facilities — not adapted from residential rooftop templates.' },
  { Icon: IconShield, t: 'End-to-End Coordination',
    d: 'One team owns technical assessment, design, approvals, execution and post-commissioning support through the full project term.' },
];

export function WhyAkunthaSection() {
  return (
    <section className="section" id="why" style={{ background: 'var(--bg-elev)' }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Why Akuntha</div>
            <h2 className="h1">Engineering capability behind every RESCO project.</h2>
          </div>
          <p className="lede">
            RESCO projects only work when the developer can deliver both the commercial
            structure and the operational execution. Akuntha combines electrical
            infrastructure experience with EPC and O&amp;M capability in one team.
          </p>
        </div>

        <div className="why-grid">
          {WHY.map(w => (
            <article className="why-card" key={w.t}>
              <div className="icon"><w.Icon size={20} /></div>
              <div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="proof-strip">
          <div className="proof-cell">
            <div className="big">15<span className="unit">+</span></div>
            <div className="label">Years of experience</div>
          </div>
          <div className="proof-cell">
            <div className="big">XX<span className="unit"> MW</span></div>
            <div className="label">Installed / managed</div>
          </div>
          <div className="proof-cell">
            <div className="big">XX<span className="unit">+</span></div>
            <div className="label">Industrial projects</div>
          </div>
          <div className="proof-cell">
            <div className="big">XX</div>
            <div className="label">Service regions</div>
          </div>
        </div>
        <p className="proof-note">
          Numbers shown are placeholders — to be replaced with verified figures before launch.
        </p>
      </div>
    </section>
  );
}

const INDUSTRIES = [
  { n: '01', t: 'Manufacturing & Industrial Plants', d: 'High daytime loads and continuous production align well with onsite generation.', img: industryManufacturing },
  { n: '02', t: 'Warehouses & Logistics', d: 'Large flat rooftops often make ideal generation surfaces with minimal shading.', img: industryWarehouse },
  { n: '03', t: 'Cold Storage Facilities', d: 'Consistent daytime refrigeration loads can make onsite solar worth evaluating.', img: industryColdStorage },
  { n: '04', t: 'Hospitals & Healthcare', d: 'Round-the-clock demand with a steady daytime baseline for the solar profile.', img: industryHospital },
  { n: '05', t: 'Hotels & Hospitality', d: 'Kitchens, HVAC and laundry create high daytime demand across the property.', img: null },
  { n: '06', t: 'Educational Campuses', d: 'Large roof and land areas often available across academic buildings and dorms.', img: null },
  { n: '07', t: 'Commercial Buildings', d: 'Office and mixed-use properties with significant HVAC and lighting loads.', img: null },
  { n: '08', t: 'Retail & Shopping Complexes', d: 'Extended daytime hours and cooling loads make retail a natural RESCO fit.', img: null },
];

export function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Industries served</div>
            <h2 className="h1">Built for facilities that actually run on daytime power.</h2>
          </div>
          <p className="lede">
            RESCO is best suited to businesses where a meaningful share of electricity is used
            during daylight hours and where suitable rooftop or open land may be available.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map(ind => (
            <article className={`industry-card ${ind.img ? '' : 'placeholder'}`} key={ind.n}>
              {ind.img && (
                <div className="img-wrap">
                  <img src={ind.img} alt="" loading="lazy" />
                </div>
              )}
              <div className="content">
                <span className="num">— {ind.n}</span>
                <div>
                  <h3>{ind.t}</h3>
                  <p>{ind.d}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MidCTA() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="midcta">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Project assessment</div>
            <h2 className="h1">Find out whether RESCO solar fits your facility.</h2>
            <p>
              Share your monthly electricity usage and basic site details. Akuntha's engineering
              team will review the opportunity and discuss the appropriate next step —
              usually within two business days.
            </p>
          </div>
          <div className="actions">
            <a href="#assessment" className="btn btn-primary btn-lg">
              Start My Free Assessment <IconArrowRight size={16} className="arr" />
            </a>
            <span className="small">No payment required · Technical &amp; commercial evaluation applies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'Who owns the solar plant under the RESCO model?',
    a: 'Under the RESCO model, the solar plant is owned and operated by the RESCO developer for the duration of the project agreement. The business purchases the generated solar electricity rather than the plant itself. Ownership terms at the end of the agreement are documented as part of the commercial contract.' },
  { q: 'How does the business pay for solar electricity?',
    a: 'The business pays for the solar electricity it uses under the commercial terms defined in the project agreement. There is no upfront payment for the solar plant itself. Exact pricing and structure are determined per project based on site, consumption, agreement period and other commercial factors.' },
  { q: 'Is there a minimum electricity consumption requirement?',
    a: 'RESCO projects typically require a meaningful monthly electricity load to be commercially viable for both parties. Facilities with substantial daytime consumption tend to be the strongest fit. Exact thresholds are evaluated during the initial commercial review.' },
  { q: 'What agreement period is usually required?',
    a: 'RESCO agreements are structured as long-term commercial arrangements — typically running for a period sufficient to justify the developer investment. Exact duration is confirmed during the commercial proposal stage.' },
  { q: 'What happens if the facility is leased?',
    a: 'RESCO projects can sometimes be structured on leased properties, but they require permission from the property owner and appropriate agreements to be in place. Ownership status is one of the factors evaluated during the technical and commercial assessment.' },
  { q: 'Who is responsible for maintenance?',
    a: 'Operations and maintenance are handled by the RESCO developer through the agreement term. This includes monitoring, preventive maintenance and performance support. Specific responsibilities are defined in the project agreement.' },
  { q: 'Can a RESCO project be installed on both rooftop and open land?',
    a: 'Yes — RESCO projects can be developed as rooftop systems, ground-mounted systems on open land, or a combination of both. The best configuration depends on site conditions, structural feasibility, shading and grid access.' },
  { q: 'Does submitting the form guarantee approval?',
    a: 'No. Submitting the assessment form does not guarantee RESCO eligibility or project approval. Every project is subject to technical, commercial, credit and regulatory evaluation before an agreement is offered.' },
  { q: 'What information is needed for the initial assessment?',
    a: 'The initial assessment collects facility type, location, approximate monthly electricity bill, property arrangement, potential installation area and primary objective. Providing a recent electricity bill helps accelerate the review.' },
  { q: 'How long does the full evaluation and installation process take?',
    a: 'Timelines vary by project size, site conditions, approvals and equipment lead times. A rough indication is provided during the commercial proposal stage once technical assessment is complete.' },
  { q: 'What regions does Akuntha operate in?',
    a: 'Akuntha serves commercial and industrial clients across selected regions in India. Serviceability for your location is confirmed during the initial commercial review after you submit the assessment.' },
];

function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useSt(defaultOpen || false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <IconPlus className="faq-toggle" size={22} />
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Frequently asked</div>
            <h2 className="h1">Commercial and technical questions, answered plainly.</h2>
          </div>
          <p className="lede">
            The most common questions we hear from operations, finance and facilities teams
            evaluating a RESCO project for the first time.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="eyebrow eyebrow-accent">Next step</div>
        <h2 className="h-display">Let's evaluate your solar opportunity.</h2>
        <p className="lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Complete the free assessment and our team will review your facility, electricity
          consumption and potential installation area.
        </p>
        <div className="actions">
          <a href="#assessment" className="btn btn-primary btn-lg">
            Get a Free RESCO Project Assessment <IconArrowRight size={16} className="arr" />
          </a>
          <a href="mailto:solar@akuntha.example" className="link-arrow">
            Speak with our commercial solar team <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="brand-block">
            <a className="brand" href="#">
              <span className="brand-mark" aria-hidden="true"></span>
              <span>Akuntha Projects</span>
            </a>
            <p>
              Commercial and industrial solar solutions delivered through the RESCO model —
              engineered, installed and operated by one team.
            </p>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#how-it-works">RESCO model</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#process">Our process</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Akuntha</a></li>
              <li><a href="#">Engineering capability</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:solar@akuntha.example">solar@akuntha.example</a></li>
              <li><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li><a href="#assessment">Free RESCO Assessment</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Akuntha Projects. All rights reserved.</span>
          <span>Eligibility subject to technical, commercial and regulatory evaluation.</span>
        </div>
      </div>
    </footer>
  );
}

