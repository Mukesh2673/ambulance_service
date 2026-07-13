import Image from "next/image";

const services = [
  ["+", "Emergency response", "Rapidly dispatched, fully equipped ambulances for urgent, life-threatening situations."],
  ["♥", "Patient transfers", "Comfortable, closely monitored inter-facility and home-to-hospital transport."],
  ["⌁", "Event medical cover", "Professional on-site support and standby crews for gatherings and events."],
];
const steps = [["01", "You call", "A live dispatcher answers—no automated menu or waiting."], ["02", "We dispatch", "The nearest suitable crew is routed to you in seconds."], ["03", "Crew en route", "A qualified team travels with a modern, stocked ambulance."], ["04", "Care continues", "Support begins on site and continues through safe arrival."]];
const partners = ["Northgate Hospital", "Meridian Care", "City Events Co.", "Harbour Clinics", "Summit Insurance"];
const testimonials = [
  ["The crew arrived in under nine minutes and kept my father calm the entire way. Truly professional.", "Amara Okafor", "Family member"],
  ["We contract RapidCare for every event. Reliable standby crews and spotless documentation, every time.", "Daniel Reyes", "Events director"],
  ["Discharge transfers used to be a headache. Their coordinators handle everything now—clear and kind.", "Priya Nair", "Care home manager"],
];
const faqs = [
  ["How quickly can an ambulance reach me?", "Our average urban response time is around 10 minutes. A live dispatcher stays on the line and shares real-time updates until the crew arrives."],
  ["Do you handle non-emergency transport?", "Yes. We arrange planned patient transfers, discharge transport, and medical-appointment journeys with trained crews and advance scheduling."],
  ["Can businesses set up ongoing contracts?", "Absolutely. We offer corporate, hospital, and event contracts with flexible short and long-term bookings and consolidated billing."],
  ["Are your crews medically qualified?", "Every ambulance is staffed by licensed medical professionals and stocked for advanced life support as standard."],
];

export function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) { return <div className="section-title reveal"><p className="eyebrow"><span /> {eyebrow}</p><h2>{children}</h2></div>; }

export function CareSections() { return <>
  <div className="trust-band"><div className="container trust-inner"><small>TRUSTED BY HOSPITALS, CLINICS & EVENT TEAMS</small><div className="trust-logos">{partners.map((p) => <span key={p}>◆ {p}</span>)}</div></div></div>
  <div className="pulse" aria-hidden="true"><svg viewBox="0 0 1200 80" preserveAspectRatio="none"><path d="M0 40H390L430 40 450 12 474 66 500 23 521 40H1200" /></svg></div>
  <section className="services section" id="services"><div className="container"><SectionTitle eyebrow="HOW WE CAN HELP">Care that moves with <em>purpose.</em></SectionTitle><div className="service-grid">{services.map(([icon, title, text]) => <article className="service-card reveal" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p><a href="#request">Learn more <span>→</span></a></article>)}</div></div></section>
  <section className="process section" id="process"><div className="container"><SectionTitle eyebrow="WHAT HAPPENS WHEN YOU CALL">From the first call <em>to arrival.</em></SectionTitle><div className="timeline">{steps.map(([number, title, text]) => <article className="step reveal" key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="fleet" id="fleet"><div className="fleet-image"><Image src="/images/banneImage.png" alt="RapidCare ambulance fleet ready for service" fill sizes="(max-width: 980px) 100vw, 50vw" /></div><div className="fleet-content reveal"><p className="eyebrow"><span /> READY WHEN YOUR TEAM NEEDS US</p><h2>Modern fleet. <em>Professional care.</em></h2><p>From scheduled transfers to event standby, rent the right ambulance service with trained crews, clear documentation, and dependable dispatch support.</p><div className="fleet-points"><span>✓ Advanced life-support ready</span><span>✓ Corporate &amp; hospital contracts</span><span>✓ Flexible short and long-term bookings</span></div><a className="button button-primary" href="#request">Talk to our transport team <span>→</span></a></div></section>
  <section className="why-us section" id="why-us"><div className="container why-grid"><div className="reveal"><p className="eyebrow"><span /> WHY RAPIDCARE</p><h2>More than a ride.<br />A steady hand.</h2><p className="why-lead">When people need help, clarity and kindness matter. Our teams combine clinical readiness with calm, person-first care on every journey.</p><ul><li>Licensed medical professionals</li><li>Clean, modern, fully equipped fleet</li><li>Real-time dispatch coordination</li><li>Transparent communication for families</li></ul></div><div className="radar reveal"><i /><i /><i /><div><b>24 / 7</b><span>READY TO RESPOND</span></div></div></div></section>
  <section className="testimonials section" id="testimonials"><div className="container"><SectionTitle eyebrow="WHAT PEOPLE SAY">Care people <em>remember.</em></SectionTitle><div className="testimonial-grid">{testimonials.map(([quote, name, role]) => <figure className="testimonial-card reveal" key={name}><div className="stars">★★★★★</div><blockquote>&ldquo;{quote}&rdquo;</blockquote><figcaption className="tm-person"><span className="tm-avatar">{name.split(" ").map((w) => w[0]).join("")}</span><span><b>{name}</b><small>{role}</small></span></figcaption></figure>)}</div></div></section>
  <section className="faq section" id="faq"><div className="container faq-grid"><div className="reveal"><p className="eyebrow"><span /> GOOD TO KNOW</p><h2>Questions, <em>answered.</em></h2><p className="why-lead" style={{ color: "var(--mist)" }}>Still unsure about something? Our coordinators are one call away, day or night.</p></div><div className="faq-list reveal">{faqs.map(([q, a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
  </>;
}
