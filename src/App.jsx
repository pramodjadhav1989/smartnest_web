import { useEffect, useState } from "react";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.smartnest&pcampaignid=web_share";

const featureCards = [
  {
    title: "Maintenance Billing",
    description:
      "Generate monthly bills, track pending dues, and keep finance operations organized.",
  },
  {
    title: "Visitor Management",
    description:
      "Approve guests and deliveries with secure, resident-friendly workflows.",
  },
  {
    title: "Complaint Management",
    description:
      "Capture issues, assign tasks, and monitor resolution from one dashboard.",
  },
  {
    title: "Resident Notices",
    description:
      "Share announcements, emergency updates, and event notifications instantly.",
  },
  {
    title: "Amenity Booking",
    description:
      "Organize common facility reservations with a simple booking flow.",
  },
  {
    title: "Admin Onboarding",
    description:
      "Register a society, create login access, and prepare the platform for live usage.",
  },
];

const reviews = [
  {
    quote:
      '"Billing and digital payments became much easier for our residents. The collection follow-up work dropped almost immediately."',
    name: "Rohit Mehta",
    role: "Treasurer, Green Valley Society",
  },
  {
    quote:
      '"Visitor approvals are faster, complaints are tracked clearly, and our staff now has one simple system to manage everything."',
    name: "Neha Kulkarni",
    role: "Committee Member, Silver Heights",
  },
  {
    quote:
      '"The smart lock flow for clubhouse access gave our society a modern, premium experience while keeping security under control."',
    name: "Ajay Shah",
    role: "Chairman, Lakeview Residency",
  },
];

const heroStats = [
  {
    title: "Billing + Payments",
    description: "Track dues, send bills, and collect digital payments with ease",
  },
  {
    title: "Visitor Security",
    description: "Approve entry securely and manage gate access with confidence",
  },
  {
    title: "Complaints + Clubhouse",
    description: "Resolve issues transparently and unlock clubhouse access smartly",
  },
];

const brandItems = [
  "Maintenance Billing",
  "Visitor Management",
  "Complaint Tracking",
  "Society Notices",
  "Payment Collection",
];

function SmartNestLogo() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <img src="/smartnest-logo.webp" alt="" />
    </span>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("smartnest-theme") || "dark";
  });
  const [activeReview, setActiveReview] = useState(0);
  const [formMessage, setFormMessage] = useState(
    "Demo mode: data is currently captured only in the browser.",
  );
  const [isSuccess, setIsSuccess] = useState(false);

  const goToReview = (index) => {
    setActiveReview((index + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("smartnest-theme", theme);
  }, [theme]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.log("SmartNest society registration:", payload);

    setFormMessage(
      "Registration captured in demo mode. Connect this form to your backend API to store leads and trigger onboarding.",
    );
    setIsSuccess(true);
    event.currentTarget.reset();
  };

  return (
    <div className="page" data-theme={theme}>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <SmartNestLogo />
            <span className="logo-text">SmartNest</span>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#register">Register</a>
          </nav>

          <div className="header-actions">
            <a className="button button-outline" href="#register">
              Get Started
            </a>
            <button
              className={`theme-toggle${theme === "light" ? " is-light" : ""}`}
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              aria-pressed={theme === "light"}
            >
              <span className="theme-toggle-label theme-toggle-label-dark">Dark</span>
              <span className="theme-toggle-label theme-toggle-label-light">Light</span>
              <span className="theme-toggle-thumb" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill hero-pill">AI Powered Security for Modern Societies</span>
              <h1>"Manage payments, security, visitors, and communication all in one powerful platform."</h1>
              <p className="hero-text">
                SmartNest helps societies manage maintenance billing, collect digital
                payments, secure visitor entry, resolve complaints faster, and control
                clubhouse access with smart lock automation from one modern dashboard.
              </p>

              <div className="hero-actions">
                <a className="button" href="#register">
                  Register Your Society
                </a>
                <a
                  className="button button-playstore"
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download App
                </a>
                <a className="button button-outline" href="#features">
                  Explore Features
                </a>
              </div>

              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <div className="stat-card" key={stat.title}>
                    <strong>{stat.title}</strong>
                    <span>{stat.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orb orb-one"></div>
              <div className="visual-orb orb-two"></div>
              <div className="visual-orb orb-three"></div>
              <div className="luxury-stage">
                <div className="stage-glow"></div>
                <div className="scanner-arch">
                  <div className="scanner-ring outer-ring"></div>
                  <div className="scanner-ring inner-ring"></div>
                  <div className="scanner-sweep"></div>
                  <div className="scanner-core-dot"></div>
                </div>

                <div className="lock-pedestal">
                  <div className="pedestal-top"></div>
                  <div className="pedestal-base"></div>
                </div>

                <div className="luxury-lock">
                  <div className="luxury-shackle"></div>
                  <div className="luxury-body"></div>
                  <div className="luxury-keyhole"></div>
                </div>

                <div className="floating-chip chip-left">
                  <span className="chip-label">Biometric Scan</span>
                  <strong>Verified in 0.8s</strong>
                </div>
                <div className="floating-chip chip-right">
                  <span className="chip-label">Smart Entry</span>
                  <strong>Luxury gate control</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brands">
          <div className="container brands-row">
            {brandItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="container about-grid">
            <div className="section-head about-copy">
              <span className="pill">About Us</span>
              <h2>Built to make society operations smarter, faster, and more secure.</h2>
              <p>
                SmartNest is focused on helping modern residential communities manage
                payments, visitor security, communication, complaints, and amenity
                access from one reliable platform.
              </p>
            </div>

            <div className="about-card">
              <div className="about-block">
                <span className="about-label">Founder</span>
                <strong>Karishma Jadhav</strong>
              </div>

              <div className="about-block">
                <span className="about-label">Address</span>
                <p>
                  C-101, Shreeji Paraiso, Katrap Badlapur
                  <br />
                  Thane 421503
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-features" id="features">
          <div className="container">
            <div className="section-head">
              <span className="pill">Features</span>
              <h2>Everything your society needs in one place</h2>
              <p>
                This follows the same product-site structure described in the shared
                ChatGPT conversation, with a clear flow from product overview to
                society registration.
              </p>
            </div>

            <div className="card-grid">
              {featureCards.map((feature) => (
                <article className="info-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted section-reviews" id="reviews">
          <div className="container">
            <div className="section-head">
              <span className="pill">Customer Reviews</span>
              <h2>What societies say about SmartNest</h2>
              <p>
                Real-world teams use SmartNest to simplify daily operations, improve
                resident communication, and make access management feel far more
                premium.
              </p>
            </div>

            <div className="reviews-carousel">
              <button
                className="carousel-arrow carousel-arrow-prev"
                type="button"
                aria-label="Previous review"
                onClick={() => goToReview(activeReview - 1)}
              >
                &#8249;
              </button>

              <div className="reviews-viewport">
                <div className="reviews-track">
                  {reviews.map((review, index) => (
                    <article
                      className={`review-card${index === activeReview ? " is-active" : ""}`}
                      key={review.name}
                    >
                      <p className="review-quote">{review.quote}</p>
                      <div className="review-author">
                        <strong>{review.name}</strong>
                        <span>{review.role}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <button
                className="carousel-arrow carousel-arrow-next"
                type="button"
                aria-label="Next review"
                onClick={() => goToReview(activeReview + 1)}
              >
                &#8250;
              </button>
            </div>

            <div className="carousel-dots" aria-label="Review navigation">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  className={`carousel-dot${index === activeReview ? " is-active" : ""}`}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  onClick={() => goToReview(index)}
                ></button>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="register">
          <div className="container register-grid">
            <div className="register-copy">
              <span className="pill">Society Registration</span>
              <h2>Register your society with SmartNest</h2>
              <p>
                This matches the form fields discussed in the shared chat and keeps the
                page fully static for now, with an easy path to connect your backend
                later.
              </p>

              <div className="note-card">
                <strong>Recommended next step</strong>
                <p>
                  Connect this form to your backend API and automate admin creation,
                  flat uploads, and payment onboarding.
                </p>
              </div>
            </div>

            <form className="form-card" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label>
                  Society Name
                  <input type="text" name="societyName" placeholder="Society Name" required />
                </label>
                <label>
                  City
                  <input type="text" name="city" placeholder="City" required />
                </label>
                <label className="full">
                  Address
                  <input
                    type="text"
                    name="address"
                    placeholder="Full society address"
                    required
                  />
                </label>
                <label>
                  Number of Flats
                  <input type="number" name="flats" placeholder="Number of Flats" min="1" required />
                </label>
                <label>
                  Contact Person
                  <input type="text" name="contactPerson" placeholder="Contact Person" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="Phone" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="Email" required />
                </label>
              </div>

              <button className="button submit-button" type="submit">
                Submit Registration
              </button>
              <p className={`form-message${isSuccess ? " success" : ""}`} aria-live="polite">
                {formMessage}
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
