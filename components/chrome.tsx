"use client";

import { useState } from "react";

const phone = "+1 (800) 555-0199";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Our fleet" },
  { href: "#process", label: "How it works" },
  { href: "#why-us", label: "Why RapidCare" },
];

export function Logo() {
  return <a className="logo" href="#top" aria-label="RapidCare home"><span className="logo-mark">+</span><span><b>RAPID<span>CARE</span></b><small>AMBULANCE SERVICE</small></span></a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav aria-label="Main navigation">
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="button button-ghost" href="#request">Book transport <span>→</span></a>
          <a className="phone-pill" href="tel:+18005550199"><i /> <span><small>24/7 EMERGENCY LINE</small><b>{phone}</b></span></a>
          <button className="nav-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && <button className="menu-backdrop" aria-label="Close menu" onClick={close} />}
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="mobile-menu-head">
          <Logo />
          <button className="menu-close" aria-label="Close menu" onClick={close}>×</button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </nav>
        <a className="button button-primary" href="tel:+18005550199" onClick={close}>Call emergency line <span>→</span></a>
      </div>
    </header>
  );
}

// Opens a WhatsApp chat to RapidCare with a prefilled message.
const whatsappNumber = "18005550199"; // digits only, incl. country code
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi RapidCare, I'd like to ask about ambulance transport."
)}`;

const socials = [
  { href: "https://facebook.com", label: "Facebook", brand: "fb", src: "/icons/facebook.svg" },
  { href: "https://instagram.com", label: "Instagram", brand: "ig", src: "/icons/instagram.svg" },
  { href: "https://linkedin.com", label: "LinkedIn", brand: "li", src: "/icons/linkedin.svg" },
  { href: "https://x.com", label: "X (Twitter)", brand: "x", src: "/icons/twitter.svg" },
  { href: whatsappLink, label: "Chat on WhatsApp", brand: "wa", src: "/icons/whatsapp.svg" },
];

function SocialLinks() {
  return (
    <div className="socials">
      {socials.map((s) => (
        <a key={s.brand} className={s.brand} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
          <img src={s.src} alt="" width={21} height={21} loading="lazy" />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return <footer><div className="container footer-main"><div className="footer-brand"><Logo /><p className="footer-intro">Modern ambulance rental, emergency response, and planned patient transport—delivered with care at every mile.</p><SocialLinks /></div><div className="footer-links"><div><b>Services</b><a href="#services">Emergency response</a><a href="#services">Patient transfers</a><a href="#services">Event cover</a></div><div><b>Company</b><a href="#why-us">About RapidCare</a><a href="#fleet">Our fleet</a><a href="#request">Contact us</a></div></div><div className="footer-call"><small>EMERGENCY LINE · ALWAYS OPEN</small><a href="tel:+18005550199">{phone}</a><p>Fast dispatch. Clear communication.<br />Compassion in motion.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} RapidCare Ambulance. All rights reserved.</span><span>Licensed medical transport · Privacy · Terms</span></div></footer>;
}
