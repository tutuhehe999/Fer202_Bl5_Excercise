import { useState } from 'react';
import './App.css';

const cities = ['Hà nội', 'Đà Nẵng', 'Hồ Chí Minh'];

function BookingForm() {
  const [showAlert, setShowAlert] = useState(true);
  const [form, setForm] = useState({ name: '', address: '', from: 'Hà nội', to: 'Hà nội', outbound: false, returnTrip: false });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="booking-form" onSubmit={submitForm}>
      {showAlert && (
        <div className="booking-alert" role="alert">
          <span>{submitted ? 'Đặt vé thành công!' : ''}</span>
          <button type="button" aria-label="Close" onClick={() => setShowAlert(false)}>×</button>
        </div>
      )}

      <h1>Form đặt vé máy bay</h1>

      <div className="form-group-box">
        <label htmlFor="fullName">Họ tên</label>
        <div className="name-input-group">
          <span className="input-prepend" aria-hidden="true">♙</span>
          <input id="fullName" name="name" value={form.name} onChange={updateField} placeholder="Họ tên" />
          <span className="input-append">vnđ</span>
        </div>
        <small>Phải nhập 5 ký tự, in hoa....</small>
      </div>

      <div className="form-group-box">
        <label htmlFor="address">Địa chỉ</label>
        <input id="address" name="address" value={form.address} onChange={updateField} />
        <small>Phải nhập 5 ký tự, in hoa....</small>
      </div>

      <div className="route-row">
        <div className="form-group-box">
          <label htmlFor="from">Đi từ</label>
          <select id="from" name="from" value={form.from} onChange={updateField}>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
        </div>
        <div className="form-group-box">
          <label htmlFor="to">Đến</label>
          <select id="to" name="to" value={form.to} onChange={updateField}>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
        </div>
      </div>

      <fieldset className="trip-options">
        <legend>Chọn chiều đi (Khứ hồi)</legend>
        <label><input type="checkbox" name="outbound" checked={form.outbound} onChange={updateField} /> Đi</label>
        <label><input type="checkbox" name="returnTrip" checked={form.returnTrip} onChange={updateField} /> Về</label>
      </fieldset>

      <button className="booking-submit" type="submit">Đặt vé</button>
    </form>
  );
}

function LabelBox({ children, className = '' }) {
  return <span className={`diagram-label ${className}`}>{children}</span>;
}

function FormDiagram() {
  return (
    <section className="form-diagram" aria-label="Form structure diagram">
      <div className="diagram-alert"><LabelBox>alert</LabelBox></div>
      <div className="diagram-heading">&lt;h1&gt;&lt;/h1&gt;</div>
      <div className="diagram-first-group">
        <div className="diagram-rounded-group">
          <strong>form-group</strong>
          <LabelBox className="label-tag">label</LabelBox>
          <div className="diagram-input-group">
            <span>input group</span>
            <LabelBox>prepend</LabelBox>
            <b>input</b>
            <LabelBox>append</LabelBox>
          </div>
          <LabelBox className="help-tag">help text</LabelBox>
        </div>
      </div>
      <div className="diagram-full-group"><LabelBox>form-group</LabelBox></div>
      <div className="diagram-two-groups">
        <div><LabelBox>form-group</LabelBox></div>
        <div><LabelBox>form-group</LabelBox></div>
      </div>
      <div className="diagram-full-group"><LabelBox>form-group</LabelBox></div>
      <div className="diagram-submit">&lt;input type="submit" /&gt;</div>
    </section>
  );
}

function GridPreview() {
  return (
    <section className="grid-preview" aria-label="Bootstrap grid preview">
      <div className="grid-band peach"><span>12</span></div>
      <div className="grid-band blue"><span>12</span></div>
      <div className="grid-band pink"><span>12</span></div>
    </section>
  );
}

function App() {
  const view = new URLSearchParams(window.location.search).get('view');
  return (
    <main className="exercise-eight-page">
      <BookingForm />
      {view === '1' ? <GridPreview /> : <FormDiagram />}
    </main>
  );
}

export default App;
