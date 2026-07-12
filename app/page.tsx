"use client";

import { FormEvent, useState } from "react";

const services = [
  ["✚", "Emergency response", "Rapidly dispatched, fully equipped ambulances for urgent situations."],
  ["♥", "Patient transfers", "Comfortable inter-facility and home-to-hospital medical transport."],
  ["◌", "Event medical cover", "Professional on-site medical support for gatherings and events."],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="RapidCare home"><span>✚</span><i>RAPID</i><i>CARE</i><small>AMBULANCE SERVICE</small></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#about">Why RapidCare</a><a href="#request">Book a transfer</a></nav>
        <div className="header-actions"><a className="header-appointment" href="#request">Schedule a ride <span>→</span></a><a className="call-link" href="tel:+18005550199"><span className="phone-icon">⌕</span><span><b>24/7 EMERGENCY LINE</b><strong>+1 (800) 555-0199</strong></span></a></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AVAILABLE 24 HOURS · 7 DAYS A WEEK</p>
          <h1>Help is on the <em>way.</em></h1>
          <p className="lead">Fast, compassionate medical transport when every moment matters. Our expert crews are ready to respond.</p>
          <div className="hero-actions"><a className="button primary" href="tel:+18005550199">Call for an ambulance <span>→</span></a><a className="text-link" href="#request">Schedule a transfer</a></div>
          <div className="trust"><div><b>10 min</b><span>average response</span></div><div><b>50k+</b><span>safe journeys</span></div><div><b>24/7</b><span>always available</span></div></div>
        </div>
        <div className="hero-art" aria-label="Ambulance placeholder image">
          <div className="art-tag">EMERGENCY<br/><b>RESPONSE</b></div><div className="sun"></div><div className="road"></div>
          <div className="ambulance"><div className="cab"></div><div className="box"><span>✚</span><i></i></div><div className="wheel left"></div><div className="wheel right"></div></div>
          <p>YOUR IMAGE<br/>GOES HERE</p>
        </div>
      </section>

      <section className="services section" id="services"><div className="section-intro"><p className="eyebrow">HOW WE CAN HELP</p><h2>Care that moves with <em>purpose.</em></h2></div><div className="service-grid">{services.map(([icon, title, text]) => <article className="service-card" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p><a href="#request">Learn more <span>→</span></a></article>)}</div></section>

      <section className="about" id="about"><div><p className="eyebrow">WHY RAPIDCARE</p><h2>More than a ride.<br/>A steady hand.</h2><p>From the first call to arrival, we make the journey feel safer. Our trained medical teams, modern fleet, and calm coordination put people first.</p><div className="check-list"><span>✓ Licensed medical professionals</span><span>✓ Clean, modern ambulances</span><span>✓ Real-time dispatch coordination</span></div></div><div className="about-visual"><span>24 / 7</span><p>Compassion in motion</p></div></section>

      <section className="request section" id="request"><div className="request-copy"><p className="eyebrow">NON-EMERGENCY TRANSPORT</p><h2>Schedule with<br/><em>confidence.</em></h2><p>Need a planned patient transfer? Share a few details and our team will contact you to confirm availability.</p><p className="emergency-note">For life-threatening emergencies, please call <a href="tel:+18005550199">+1 (800) 555-0199</a> now.</p></div><form onSubmit={submit} className="request-form"><label>Full name<input required placeholder="Your name" name="name" /></label><label>Phone number<input required type="tel" placeholder="(000) 000-0000" name="phone" /></label><label>Type of service<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Patient transfer</option><option>Event medical cover</option><option>Other enquiry</option></select></label><label>Message <small>(optional)</small><textarea name="message" placeholder="Tell us about the journey"></textarea></label><button className="button primary" type="submit">{sent ? "Request received — thank you" : "Request a callback →"}</button></form></section>

      <footer><a className="brand" href="#top"><span>✚</span> RAPID<span>CARE</span></a><p>Compassion in motion. © {new Date().getFullYear()} RapidCare Ambulance.</p><div><a href="#services">Services</a><a href="#request">Contact</a></div></footer>
    </main>
  );
}
