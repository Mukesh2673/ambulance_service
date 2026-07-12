import { BookingForm } from "../components/booking-form";
import { Header, Footer } from "../components/chrome";
import { Hero } from "../components/hero";
import { CareSections } from "../components/care-sections";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "RapidCare Ambulance",
    description: "24/7 emergency ambulance, patient transfer, and event medical cover.",
    telephone: "+1-800-555-0199",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: "Your service area",
    url: "https://example.com"
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Header />
    <Hero />
    <CareSections />
    <section className="booking section" id="request" aria-labelledby="booking-title">
      <div className="container booking-grid">
        <div className="booking-copy reveal">
          <p className="eyebrow"><span /> NON-EMERGENCY TRANSPORT</p>
          <h2 id="booking-title">Book transport with <em>confidence.</em></h2>
          <p>From hospital discharge to routine specialist appointments, our coordinators arrange thoughtful, dependable medical transport around your needs.</p>
          <div className="emergency-note"><b>Emergency?</b> For life-threatening situations, call <a href="tel:+18005550199">+1 (800) 555-0199</a> now.</div>
        </div>
        <BookingForm />
      </div>
    </section>
    <Footer />
    <a className="mobile-call" href="tel:+18005550199"><span /> Call emergency line</a>
  </main>;
}
