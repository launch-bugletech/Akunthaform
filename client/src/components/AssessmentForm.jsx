import { useState, useMemo } from 'react';
import { IconFactory, IconWarehouse, IconSnowflake, IconBuilding, IconHospital, IconHotel, IconSchool, IconRetail, IconOther, IconArrowLeft, IconArrowRight, IconPlus, IconCheck } from './Icons.jsx';

// 4-step Assessment Form — sticky right column of hero

const FACILITY_OPTIONS = [
  { id: 'manufacturing', label: 'Manufacturing', Icon: IconFactory },
  { id: 'factory',       label: 'Factory / Industrial', Icon: IconFactory },
  { id: 'warehouse',     label: 'Warehouse',    Icon: IconWarehouse },
  { id: 'cold_storage',  label: 'Cold Storage', Icon: IconSnowflake },
  { id: 'commercial',    label: 'Commercial Building', Icon: IconBuilding },
  { id: 'hospital',      label: 'Hospital',     Icon: IconHospital },
  { id: 'hotel',         label: 'Hotel',        Icon: IconHotel },
  { id: 'education',     label: 'Educational',  Icon: IconSchool },
  { id: 'retail',        label: 'Retail / Mall',Icon: IconRetail },
  { id: 'other',         label: 'Other',        Icon: IconOther },
];

const BILL_OPTIONS = [
  'Below ₹50,000',
  '₹50,000 – ₹1 lakh',
  '₹1 – ₹3 lakh',
  '₹3 – ₹5 lakh',
  'Above ₹5 lakh',
  'Not sure',
];

const OWNERSHIP = ['Owned', 'Leased', 'Shared ownership', 'Managed property', 'Not sure'];
const SITE_OPTIONS = ['Rooftop', 'Open land', 'Both', 'Not sure'];
const OBJECTIVE_OPTIONS = [
  'Reduce electricity costs',
  'Avoid upfront capital investment',
  'Meet sustainability / ESG goals',
  'Support facility expansion',
  'Explore solar feasibility',
];
const CONTACT_TIMES = ['Morning', 'Afternoon', 'Evening', 'No preference'];

function AssessmentForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    facility: '',
    state: '', city: '', pincode: '',
    bill: '', consumption: '', ownership: '',
    site: '', area: '', areaUnit: 'sq ft', notSureArea: false, objective: '',
    company: '', contact: '', mobile: '', email: '', contactTime: '',
    fileName: '',
    consent: true,
  });

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  const totalSteps = 4;
  const canNext = useMemo(() => {
    if (step === 1) return data.facility && data.state && data.city && data.pincode;
    if (step === 2) return data.bill && data.ownership;
    if (step === 3) return data.site && data.objective;
    if (step === 4) return data.company && data.contact && data.mobile && data.email && data.consent;
    return false;
  }, [step, data]);

  const next = () => {
    if (step < totalSteps) setStep(step + 1);
    else if (canNext) setDone(true);
  };
  const back = () => setStep(Math.max(1, step - 1));

  if (done) return <SuccessScreen data={data} onReset={() => { setDone(false); setStep(1); }} />;

  return (
    <div className="form-card" id="assessment">
      <div className="form-head">
        <h3 className="form-title">Get a Free RESCO Project Assessment</h3>
        <p className="form-sub">
          Answer a few questions about your facility and electricity use. Our engineering team
          will assess whether your site may be suitable for a RESCO project.
        </p>
      </div>

      <div className="form-progress">
        <span className="form-step-label">
          <span className="cur">Step {step}</span> of {totalSteps}
        </span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }} />
        </div>
      </div>

      {step === 1 && <Step1 data={data} set={set} />}
      {step === 2 && <Step2 data={data} set={set} />}
      {step === 3 && <Step3 data={data} set={set} />}
      {step === 4 && <Step4 data={data} set={set} />}

      <div className="form-nav">
        <button
          className="back"
          onClick={back}
          disabled={step === 1}
        >
          <IconArrowLeft size={14} /> Back
        </button>
        <button
          className="btn btn-primary"
          onClick={next}
          disabled={!canNext}
          style={!canNext ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
        >
          {step === 4 ? 'Request My Free RESCO Assessment' : 'Continue'}
          <IconArrowRight size={14} className="arr" />
        </button>
      </div>

      <p className="form-footer-note">
        {step === 4
          ? 'No payment is required. Submission does not guarantee RESCO eligibility or project approval.'
          : 'No payment is required to submit this assessment.'}
      </p>
    </div>
  );
}

// ----- STEP 1: Facility profile -----
function Step1({ data, set }) {
  return (
    <>
      <p className="form-q-title">What type of facility are you evaluating?</p>
      <div className="choice-grid">
        {FACILITY_OPTIONS.map((option) => {
          const FacilityIcon = option.Icon;

          return (
            <button
              key={option.id}
              className={`choice ${data.facility === option.id ? 'selected' : ''}`}
              onClick={() => set('facility', option.id)}
              type="button"
            >
              <FacilityIcon size={16} className="ic" />
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="form-q-title">Where is the facility located?</p>
      <div className="input-row">
        <div className="field">
          <label>State</label>
          <input value={data.state} onChange={e => set('state', e.target.value)} placeholder="e.g. Maharashtra" />
        </div>
        <div className="field">
          <label>City</label>
          <input value={data.city} onChange={e => set('city', e.target.value)} placeholder="e.g. Pune" />
        </div>
      </div>
      <div className="input-row stack">
        <div className="field">
          <label>Pincode</label>
          <input
            value={data.pincode}
            onChange={e => set('pincode', e.target.value.replace(/\D/g, '').slice(0,6))}
            placeholder="6-digit"
            inputMode="numeric"
          />
        </div>
      </div>
    </>
  );
}

// ----- STEP 2: Electricity usage -----
function Step2({ data, set }) {
  return (
    <>
      <p className="form-q-title">Approximate monthly electricity bill</p>
      <div className="choice-grid">
        {BILL_OPTIONS.map(o => (
          <button
            key={o}
            className={`choice ${data.bill === o ? 'selected' : ''}`}
            onClick={() => set('bill', o)}
            type="button"
          >
            {o}
          </button>
        ))}
      </div>

      <p className="form-q-title">Approximate monthly consumption</p>
      <p className="form-q-help">Optional — usually shown on your latest electricity bill.</p>
      <div className="input-row stack">
        <div className="field">
          <label>Monthly units</label>
          <div className="field-wrap">
            <input
              value={data.consumption}
              onChange={e => set('consumption', e.target.value.replace(/[^\d.]/g, ''))}
              placeholder="e.g. 25,000"
              inputMode="decimal"
              style={{ paddingRight: 46 }}
            />
            <span className="unit">kWh</span>
          </div>
        </div>
      </div>

      <p className="form-q-title">What is the property arrangement?</p>
      <div className="choice-grid compact">
        {OWNERSHIP.map(o => (
          <button
            key={o}
            className={`choice ${data.ownership === o ? 'selected' : ''}`}
            onClick={() => set('ownership', o)}
            type="button"
          >
            {o}
          </button>
        ))}
      </div>
    </>
  );
}

// ----- STEP 3: Site & goals -----
function Step3({ data, set }) {
  return (
    <>
      <p className="form-q-title">Where could solar potentially be installed?</p>
      <div className="choice-grid compact">
        {SITE_OPTIONS.map(o => (
          <button
            key={o}
            className={`choice ${data.site === o ? 'selected' : ''}`}
            onClick={() => set('site', o)}
            type="button"
          >
            {o}
          </button>
        ))}
      </div>

      <p className="form-q-title">Approximate available area</p>
      <p className="form-q-help">Optional. Rough estimates are fine.</p>
      <div className="input-row">
        <div className="field">
          <label>Area</label>
          <input
            value={data.area}
            onChange={e => set('area', e.target.value.replace(/[^\d.]/g, ''))}
            placeholder="e.g. 12,000"
            inputMode="decimal"
            disabled={data.notSureArea}
            style={data.notSureArea ? { opacity: 0.4 } : {}}
          />
        </div>
        <div className="field">
          <label>Unit</label>
          <select value={data.areaUnit} onChange={e => set('areaUnit', e.target.value)} disabled={data.notSureArea}>
            <option>sq ft</option>
            <option>sq m</option>
            <option>acres</option>
          </select>
        </div>
      </div>
      <label className="consent" style={{ marginTop: 4 }}>
        <input
          type="checkbox"
          checked={data.notSureArea}
          onChange={e => set('notSureArea', e.target.checked)}
        />
        Not sure — our team can help estimate this during assessment.
      </label>

      <p className="form-q-title" style={{ marginTop: 24 }}>Primary objective</p>
      <div className="choice-grid" style={{ gridTemplateColumns: '1fr' }}>
        {OBJECTIVE_OPTIONS.map(o => (
          <button
            key={o}
            className={`choice ${data.objective === o ? 'selected' : ''}`}
            onClick={() => set('objective', o)}
            type="button"
          >
            {o}
          </button>
        ))}
      </div>
    </>
  );
}

// ----- STEP 4: Contact -----
function Step4({ data, set }) {
  return (
    <>
      <p className="form-q-title">Where should we send your assessment?</p>
      <div className="input-row">
        <div className="field">
          <label>Company name</label>
          <input value={data.company} onChange={e => set('company', e.target.value)} placeholder="Acme Industries Pvt Ltd" />
        </div>
        <div className="field">
          <label>Contact person</label>
          <input value={data.contact} onChange={e => set('contact', e.target.value)} placeholder="Full name" />
        </div>
      </div>
      <div className="input-row">
        <div className="field">
          <label>Mobile number</label>
          <input
            value={data.mobile}
            onChange={e => set('mobile', e.target.value.replace(/\D/g, '').slice(0,10))}
            placeholder="10-digit"
            inputMode="numeric"
          />
        </div>
        <div className="field">
          <label>Work email</label>
          <input
            value={data.email}
            onChange={e => set('email', e.target.value)}
            placeholder="you@company.in"
            type="email"
          />
        </div>
      </div>

      <p className="form-q-title">Preferred contact time</p>
      <div className="choice-grid compact">
        {CONTACT_TIMES.map(o => (
          <button
            key={o}
            className={`choice ${data.contactTime === o ? 'selected' : ''}`}
            onClick={() => set('contactTime', o)}
            type="button"
          >
            {o}
          </button>
        ))}
      </div>

      <p className="form-q-title">Optional: upload a recent electricity bill</p>
      <div className="input-row stack">
        <label
          className="choice"
          style={{ padding: '14px 14px', cursor: 'pointer' }}
        >
          <IconPlus size={16} className="ic" />
          <span style={{ flex: 1 }}>
            {data.fileName || 'Attach PDF, JPG, or PNG'}
          </span>
          <input
            type="file"
            accept="application/pdf,image/*"
            style={{ display: 'none' }}
            onChange={e => set('fileName', e.target.files[0]?.name || '')}
          />
        </label>
      </div>

      <label className="consent">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={e => set('consent', e.target.checked)}
        />
        I agree that Akuntha Projects may contact me about this assessment and store the
        information I have provided. I understand that submission does not guarantee
        RESCO eligibility or project approval.
      </label>
    </>
  );
}

// ----- SUCCESS -----
function SuccessScreen({ data, onReset }) {
  const facility = FACILITY_OPTIONS.find(f => f.id === data.facility)?.label || '—';
  return (
    <div className="form-card">
      <div className="form-success">
        <div className="badge">
          <IconCheck size={12} stroke={2.5} /> Assessment submitted
        </div>
        <h3 className="form-title" style={{ marginBottom: 12 }}>
          Thanks{data.contact ? `, ${data.contact.split(' ')[0]}` : ''}. We'll be in touch shortly.
        </h3>
        <p className="form-sub">
          Our engineering team will review your submission and follow up within 2 business days
          to schedule an initial commercial review.
        </p>

        <dl className="success-summary">
          <dt>Facility</dt><dd>{facility} · {data.city || '—'}, {data.state || '—'}</dd>
          <dt>Monthly bill</dt><dd>{data.bill || '—'}</dd>
          <dt>Proposed site</dt><dd>{data.site || '—'}</dd>
          <dt>Primary objective</dt><dd>{data.objective || '—'}</dd>
          <dt>Contact</dt><dd>{data.email || '—'} · {data.mobile ? `+91 ${data.mobile}` : '—'}</dd>
        </dl>

        <button
          onClick={onReset}
          className="btn btn-ghost"
          style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}
        >
          Start another assessment
        </button>
      </div>
      <p className="form-footer-note">
        Submission does not guarantee RESCO eligibility or project approval.
      </p>
    </div>
  );
}

export default AssessmentForm;
