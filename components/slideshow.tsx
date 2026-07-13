"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/ambulance.png",
  "/images/amb1.jpg",
  "/images/amb2.png",
  "/images/amb3.jpg",
  "/images/amb4.png",
  "/images/amb5.png",
];

export function ConsoleSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="slideshow">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="RapidCare ambulance on emergency dispatch"
            fill
            priority={i === 0}
            sizes="(max-width: 850px) 100vw, 50vw"
            className={`slide${i === active ? " is-active" : ""}`}
          />
        ))}
      </div>
      <div className="slide-dots" role="tablist" aria-label="Ambulance gallery">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show image ${i + 1} of ${slides.length}`}
            className={i === active ? "is-active" : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
}
