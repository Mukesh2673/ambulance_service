"use client";
import { FormEvent, useState } from "react";

export function BookingForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <form className="booking-form reveal" onSubmit={submit}><div className="field-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="(000) 000-0000" /></label></div><label>Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Patient transfer</option><option>Medical appointment transport</option><option>Event medical cover</option><option>Other enquiry</option></select></label><label>Pickup and destination<input required name="journey" placeholder="Where should we collect and take you?" /></label><label>Anything we should know? <small>(optional)</small><textarea name="message" placeholder="Mobility needs, preferred time, or other details" /></label><button className="button button-primary" type="submit">{sent ? "Request received — thank you" : "Request a callback →"}</button><p className="form-note">By submitting, you agree to be contacted about your request.</p></form>;
}
