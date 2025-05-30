import React, { useState, useEffect, useRef } from "react";

const rawTestimonials = [
  {
    quote: "Told them I needed a full ML model with deployment in 3 days. They laughed. Then did it in 1. I think they sold their soul.",
    name: "Overachiever Turned Believer",
    location: "Sleman",
  },
  {
    quote: "Dropped out mentally mid-semester. Sent them the syllabus, got back a full analytics report. My prof questioned their own methods.",
    name: "Analytics Anxious",
    location: "Jakarta",
  },
  {
    quote: "Needed cloud help. They scaled it like a SaaS startup on Red Bull. Not sure if this is even legal.",
    name: "Sky High Hustler",
    location: "Bandung",
  },
  {
    quote: "Wanted a full-stack app in a week. They delivered overnight with CI/CD and dark mode. The code glows. Might be alive.",
    name: "Framework Fumbler",
    location: "Surabaya",
  },
  {
    quote: "ML almost killed me. Blinked, boom — working model, clean data, live dashboard. Witchcraft confirmed.",
    name: "ML Meltdown Survivor",
    location: "Denpasar",
  },
  {
    quote: "Prof asked for real-world cloud infra. They deployed autoscaling GCP like it’s a game. Even the TA begged for the diagram.",
    name: "Cloud Camp Casualty",
    location: "Yogyakarta",
  },
  {
    quote: "Sent them trash JSON and a weak prompt. Got back an ML model that detects sarcasm. It might be alive. I named it Kevin.",
    name: "Prompt Goblin",
    location: "Semarang",
  },
  {
    quote: "Capstone panic? They built analytics that predicts user churn like a psychic. My lecturer thinks I joined a startup.",
    name: "Data Deceiver",
    location: "Malang",
  },
  {
    quote: "Asked for a dashboard. Got a full analytics suite with real-time updates. Now my lecturer wants to publish it.",
    name: "Just Here for 60",
    location: "Medan",
  },
  {
    quote: "Begged for backend help. Got a full REST API with docs and rate limits. Prof offered me an internship.",
    name: "Backend Beggar",
    location: "Padang",
  },
  {
    quote: "Was failing ML. They made a model, slides, voiceover — and taught me the math. I got an A and emotional damage.",
    name: "Academic Impostor",
    location: "Makassar",
  }
];

const testimonials = rawTestimonials.map((item) => ({
  ...item,
  avatar: item.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase(),
}));

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef(null);

  const showNextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const showPrevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollRef.current = setInterval(() => {
      showNextTestimonial();
    }, 3000);
  }

  function stopAutoScroll() {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  }

  function handleMouseEnter() {
    stopAutoScroll();
  }

  function handleMouseLeave() {
    startAutoScroll();
  }

  const { quote, name, location, avatar } = testimonials[currentIndex];

  return (
    <section id="6" className="testimonials-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container">
        <div className="testimonials-content">
          <div className="section-header">
            <p className="section-label-testimonial">TESTIMONIALS</p>
            <h2 className="section-title-testimonial">
              What people say<br />about Us.
            </h2>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-nav">
              <button className="nav-arrow" onClick={showPrevTestimonial}>↑</button>
              <button className="nav-arrow" onClick={showNextTestimonial}>↓</button>
            </div>
            <p className="testimonial-quote" id="testimonial-quote">
              "{quote}"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>{avatar}</span>
              </div>
              <div className="author-info">
                <p id="testimonial-name">{name}</p>
                <p id="testimonial-location">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
