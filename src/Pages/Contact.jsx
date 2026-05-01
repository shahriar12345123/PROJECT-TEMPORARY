import { useState, useEffect } from "react";

/* ─── tiny style block: only for things Tailwind can't do ───── */
const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

    .font-cormorant { font-family: 'Cormorant Garamond', serif; }
    .font-dm        { font-family: 'DM Sans', sans-serif; }

    /* radial glow blobs */
    .glow-tr::before {
      content: '';
      position: absolute; top: -40%; right: -20%;
      width: 600px; height: 600px; pointer-events: none;
      background: radial-gradient(ellipse, rgba(180,148,90,0.07) 0%, transparent 70%);
    }
    .glow-bl::after {
      content: '';
      position: absolute; bottom: -30%; left: -15%;
      width: 500px; height: 500px; pointer-events: none;
      background: radial-gradient(ellipse, rgba(180,148,90,0.04) 0%, transparent 70%);
    }

    /* button fill-sweep hover */
    .btn-sweep { position: relative; overflow: hidden; }
    .btn-sweep::before {
      content: '';
      position: absolute; inset: 0;
      background: rgba(180,148,90,0.09);
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.35s ease;
    }
    .btn-sweep:hover::before { transform: scaleX(1); }
    .btn-sweep:hover .btn-arrow { transform: translateX(4px); }

    /* field styles */
    .contact-input {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(180,148,90,0.13);
      color: #f0ece4;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px; font-weight: 300;
      padding: 0.72rem 1rem;
      outline: none; width: 100%; border-radius: 0; appearance: none;
      transition: border-color 0.3s ease, background 0.3s ease;
    }
    .contact-input::placeholder { color: rgba(240,236,228,0.18); }
    .contact-input:focus {
      border-color: rgba(180,148,90,0.52);
      background: rgba(180,148,90,0.035);
    }
    .contact-select {
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23b4945a' stroke-width='1.2'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      padding-right: 2.5rem;
    }
    .contact-select option { background: #111113; color: #f0ece4; }
    textarea.contact-input { resize: none; line-height: 1.6; }

    /* success banner */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeup { animation: fadeUp 0.45s ease forwards; }
  `}</style>
);

/* ─── field wrapper ────────────────────────────────────────────────────────── */
function Field({ label, children, visible }) {
    return (
        <div
            className="flex flex-col gap-1.5"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
        >
            <label className="font-dm text-[10px] tracking-[0.15em] uppercase font-normal text-[rgba(180,148,90,0.72)]">
                {label}
            </label>
            {children}
        </div>
    );
}

/* ─── main component ───────────────────────────────────────────────────────── */
export default function Contact() {
    const [cardVisible, setCardVisible] = useState(false);
    const [visibleFields, setVisibleFields] = useState([]);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const t0 = setTimeout(() => setCardVisible(true), 80);
        const timers = [0, 1, 2, 3, 4].map((i) =>
            setTimeout(() => setVisibleFields((p) => [...p, i]), 300 + i * 100)
        );
        return () => { clearTimeout(t0); timers.forEach(clearTimeout); };
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        if (!form.firstName || !form.email || !form.message) return;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            <GlobalStyles />

            {/* page shell */}
            <div className="font-dm relative min-h-screen flex items-center justify-center bg-[#0a0a0b] p-8 overflow-hidden glow-tr glow-bl">

                {/* card */}
                <div
                    className="relative z-10 w-full max-w-[860px] grid grid-cols-[1fr_1.4fr] border border-[rgba(180,148,90,0.15)] bg-[#111113]"
                    style={{
                        opacity: cardVisible ? 1 : 0,
                        transform: cardVisible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}
                >

                    {/* ── LEFT PANEL ───────────────────────────────── */}
                    <div className="flex flex-col justify-between px-10 py-14 border-r border-[rgba(180,148,90,0.1)] bg-[#0e0e10]">
                        <div>
                            <p className="text-[10px] tracking-[0.25em] uppercase text-[#b4945a] mb-5 font-normal">
                                Get in touch
                            </p>
                            <h2 className="font-cormorant text-[clamp(2.6rem,4vw,3.4rem)] font-light text-[#f0ece4] leading-[1.1] tracking-[-0.01em] mb-6">
                                Let's start a{" "}
                                <em className="italic text-[#b4945a]">conversation</em>
                            </h2>
                            <p className="text-[13px] font-light text-[rgba(240,236,228,0.45)] leading-[1.7] max-w-[240px]">
                                We respond to every inquiry with care — usually within one business day.
                            </p>
                        </div>

                        <div>
                            <div className="w-10 h-px bg-[rgba(180,148,90,0.3)] my-6" />
                            <div className="flex flex-col gap-5">
                                {[
                                    { label: "Email", value: "temporary@mail.com" },
                                    { label: "Location", value: "New York, NY 10001" },
                                    { label: "Hours", value: "sat – thu, 9am – 10pm EST" },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex flex-col gap-0.5">
                                        <span className="text-[9px] tracking-[0.2em] uppercase text-[#b4945a] font-normal">
                                            {label}
                                        </span>
                                        <span className="text-[13px] font-light text-[rgba(240,236,228,0.6)]">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT PANEL (form) ────────────────────────── */}
                    <div className="flex flex-col gap-6 px-12 py-14">

                        {/* name row */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="First Name" visible={visibleFields.includes(0)}>
                                <input className="contact-input" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" />
                            </Field>
                            <Field label="Last Name" visible={visibleFields.includes(1)}>
                                <input className="contact-input" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" />
                            </Field>
                        </div>

                        <Field label="Email Address" visible={visibleFields.includes(2)}>
                            <input className="contact-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
                        </Field>

                        <Field label="Subject" visible={visibleFields.includes(3)}>
                            <select className="contact-input contact-select" name="subject" value={form.subject} onChange={handleChange}>
                                <option value="">Select a topic</option>
                                <option value="general">Real Estate</option>
                                <option value="project">New Project</option>
                                <option value="support">Vacation</option>
                                <option value="luxury">Luxury </option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </Field>

                        <Field label="Message" visible={visibleFields.includes(4)}>
                            <textarea className="contact-input" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project…" rows={5} />
                        </Field>

                        {/* submit */}
                        <button
                            onClick={handleSubmit}
                            className="btn-sweep mt-2 flex items-center justify-between w-full border border-[rgba(180,148,90,0.36)] px-6 py-4 bg-transparent text-[#b4945a] text-[11px] tracking-[0.2em] uppercase font-normal cursor-pointer transition-colors duration-300 hover:border-[rgba(180,148,90,0.62)] hover:text-[#d4b07a] active:scale-[0.995]"
                        >
                            <span className="relative z-10">Send Message</span>
                            <span className="btn-arrow relative z-10 text-lg leading-none transition-transform duration-300">→</span>
                        </button>

                        {submitted && (
                            <div className="animate-fadeup mt-1 border border-[rgba(180,148,90,0.25)] bg-[rgba(180,148,90,0.04)] py-4 text-center text-[11px] tracking-[0.15em] uppercase text-[rgba(180,148,90,0.8)]">
                                ✦ Message received — we'll be in touch soon
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}