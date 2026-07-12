const phone = "+1 (800) 555-0199";

export function Logo() {
  return <a className="logo" href="#top" aria-label="RapidCare home"><span className="logo-mark">+</span><span><b>RAPID<span>CARE</span></b><small>AMBULANCE SERVICE</small></span></a>;
}

export function Header() {
  return <header className="site-header"><div className="container nav"><Logo /><nav aria-label="Main navigation"><a href="#services">Services</a><a href="#fleet">Our fleet</a><a href="#process">How it works</a><a href="#why-us">Why RapidCare</a></nav><div className="nav-actions"><a className="button button-ghost" href="#request">Book transport <span>→</span></a><a className="phone-pill" href="tel:+18005550199"><i /> <span><small>24/7 EMERGENCY LINE</small><b>{phone}</b></span></a></div></div></header>;
}

export function Footer() {
  return <footer><div className="container footer-main"><div><Logo /><p className="footer-intro">Modern ambulance rental, emergency response, and planned patient transport—delivered with care at every mile.</p><div className="socials"><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">𝕏</a></div></div><div className="footer-links"><div><b>Services</b><a href="#services">Emergency response</a><a href="#services">Patient transfers</a><a href="#services">Event cover</a></div><div><b>Company</b><a href="#why-us">About RapidCare</a><a href="#fleet">Our fleet</a><a href="#request">Contact us</a></div></div><div className="footer-call"><small>EMERGENCY LINE · ALWAYS OPEN</small><a href="tel:+18005550199">{phone}</a><p>Fast dispatch. Clear communication.<br />Compassion in motion.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} RapidCare Ambulance. All rights reserved.</span><span>Licensed medical transport · Privacy · Terms</span></div></footer>;
}
