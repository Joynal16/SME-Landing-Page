import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import heroPerson from "./assets/hero-person.png";
import facebookService from "./assets/facebook-service.png";
import paymentMap from "./assets/payment-map.png";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path
      d="M4 10h11M11 5l5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Check = () => <span className="check">✓</span>;

const services = [
  ["Facebook", "🔵"],
  ["Instagram", "📸"],
  ["X (Twitter)", "𝕏"],
  ["YouTube", "▶"],
  ["TikTok", "♪"],
  ["LinkedIn", "in"],
  ["Telegram", "➤"],
  ["Discord", "◉"],
  ["Spotify", "●"],
  ["SoundCloud", "☁"],
  ["Snapchat", "◉"],
  ["Website Traffic", "↗"],
];

const plans = [
  {
    title: "Works 2×",
    name: "What You Do",
    desc: "The SMM service to suit the initial needs of your marketing management.",
    why: "Creates strong credibility and improves first impression.",
    cost: "Time: 10–20 min",
    badge: "C1",
  },
  {
    title: "Works 3×",
    name: "What You Do",
    desc: "Start posting consistent, high-quality content.",
    why: "Larger follower base increases organic engagement.",
    cost: "Weekly content plan",
    badge: "C2",
  },
  {
    title: "Start 2×",
    name: "What You Do",
    desc: "Continue consistent + high impact SMM.",
    why: "Faster, better algorithm response.",
    cost: "Reduced SMM usage",
    badge: "C3",
  },
  {
    title: "Monthly 2.5",
    name: "What You Do",
    desc: "Focus mainly on organic growth.",
    why: "Strong engagement and consistent audience growth.",
    cost: "Monthly SMM plan",
    badge: "C4",
  },
];

const advantages = [
  [
    "🔐",
    "We Never Ask for Your Password",
    "You give us your username or profile link. That’s it. We can’t access your account. Your password remains yours. We use secure, privacy-first systems.",
    "Zero security risk.",
  ],
  [
    "🤖",
    "We Use Real Users, Not Bots",
    "This is the difference between safe and unsafe SMM services. Unlike services that use fake accounts and empty profiles, Instagram, Facebook, and YouTube algorithms detect these instantly.",
    "Real engagement.",
  ],
  [
    "📈",
    "We Deliver Gradual Growth",
    "Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time for a safer, more natural growth profile.",
    "Natural growth.",
  ],
  [
    "🏆",
    "Our Track Record",
    "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That’s our No. 1 rule: follow platform guidelines.",
    "Safe activity, no spam.",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="logo">
          LOGO
        </a>
        <nav className={open ? "links open" : "links"}>
          <a href="#services">Services</a>
          <a href="#growth">Blog</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-buttons">
          <a className="sign-in" href="#contact">
            Sign In
          </a>
          <a className="sign-up" href="#contact">
            Sign Up
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <i />
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="rating">
            ✦✦✦✦✦ <b>Excellent 4.8 out of 5</b>
          </div>
          <h1>
            <span>Best SMM Panel</span>
            <br />
            in Bangladesh - <em>Fast, Safe</em> &amp;
            <br />
            Growth in Social Media.
          </h1>
          <p>
            SMM is Bangladesh’s most reliable &amp; cheap SMM panel for social
            media growth. We help you get visibility on Facebook, Instagram,
            Twitter, and Google. You’ll get real followers, safe methods, and
            proven results that actually last.
          </p>
          <div className="hero-btns">
            <a href="#services" className="btn light">
              View Services <Arrow />
            </a>
            <a href="#contact" className="btn primary">
              Choose an Account
            </a>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-glow" />
          <img src={heroPerson} alt="SMM growth illustration" />
          <span className="float fb">f</span>
          <span className="float ig">◎</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container stat-grid">
        {[
          ["🧑‍💻", "321,879", "Order Received"],
          ["🌐", "6,245", "Available Services"],
          ["👥", "8,552", "Registered User"],
          ["🏆", "#1", "Regional Rank"],
        ].map((x) => (
          <div className="stat reveal" key={x[1]}>
            <span>{x[0]}</span>
            <strong>{x[1]}</strong>
            <small>{x[2]}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title reveal">
          <small>OUR SERVICES</small>
          <h2>
            Powerful <em>SMM Services</em> for Fast Growth
          </h2>
          <p>
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major platforms.
            From engagement to followers, we help you build a stronger digital
            presence.
          </p>
        </div>
        <div className="service-chips">
          {services.map(([name, icon]) => (
            <button className="chip reveal" key={name}>
              <b>{icon}</b>
              {name}
            </button>
          ))}
        </div>
        <div className="service-card reveal">
          <div className="service-image">
            <img src={facebookService} alt="Facebook marketing illustration" />
          </div>
          <div className="service-copy">
            <h3>Facebook Marketing Services</h3>
            <p>
              Boost your brand visibility, connect with your audience, and drive
              more traffic, engagement, and conversions with our comprehensive
              Facebook marketing services.
            </p>
            <ul>
              {[
                "Facebook Likes - boost post engagement and credibility.",
                "Facebook Views - grow your video’s reach quickly.",
                "Facebook Comments - increase interaction with engaging comments.",
                "Facebook Shares - expand your reach with powerful shares.",
                "Facebook Video Views - Get more visibility with high-retention video views.",
                "Facebook Followers - Make your presence recognized with diverse audiences.",
              ].map((t) => (
                <li key={t}>
                  <span>◈</span>
                  {t}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mini-btn">
              View Facebook Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    [
      "01",
      "Create Account",
      "Sign up using your email or social login. It takes only a few seconds. Manage and track your orders easily from a single dashboard.",
    ],
    [
      "02",
      "Add Funds",
      "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
    ],
    [
      "03",
      "Select Service",
      "Select from Instagram, TikTok, YouTube, Facebook services with clear pricing, delivery times, and visibility. This lets the package that fits your growth goals perfectly.",
    ],
    [
      "04",
      "Place your order",
      "Enter your account details, select the desired quantity, and submit your order. Each order is handled across everything with a fast and easy process.",
    ],
  ];
  return (
    <section id="how" className="process section">
      <div className="container">
        <div className="section-title reveal">
          <small>WORKING PROCESS</small>
          <h2>
            Grow Your <em>Socials</em> in 4 Simple Steps
          </h2>
          <p>
            A simple and efficient process designed to deliver fast and reliable
            results. Just choose your order, and our system will handle the
            rest.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <React.Fragment key={s[0]}>
              <article className={`process-card p${i + 1} reveal`}>
                <b>{s[0]}</b>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </article>
              {i === 1 && <div className="process-orb">H</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Payments() {
  return (
    <section className="payments section">
      <div className="container">
        <div className="section-title reveal">
          <small>PAYMENT METHODS</small>
          <h2>
            Multiple <em>Payment Methods</em>
          </h2>
          <p>
            We accept Visa, Mastercard, American Express, bKash, Nagad, Rocket,
            and more, so you can order quickly at checkout.
          </p>
        </div>
        <div className="map-panel reveal">
          <img src={paymentMap} alt="Global payment methods" />
        </div>
      </div>
    </section>
  );
}

function Growth() {
  return (
    <section id="growth" className="growth section">
      <div className="container">
        <div className="section-title reveal">
          <small>GROWTH</small>
          <h2>
            Growing on Social Media <em>in Bangladesh</em>
          </h2>
          <p>
            The smartest way to grow is by combining SMM support with real
            content. You use SMM as the beginning investment, then let the
            engagement naturally take over.
          </p>
        </div>
        <div className="plan-grid">
          {plans.map((p) => (
            <article className="plan-card reveal" key={p.title}>
              <h3>{p.title}</h3>
              <div className="plan-row">
                <b>{p.badge}</b>
                <strong>{p.name}</strong>
                <p>{p.desc}</p>
              </div>
              <div className="plan-row">
                <b>◈</b>
                <strong>Why It Works</strong>
                <p>{p.why}</p>
              </div>
              <div className="plan-row">
                <b>▣</b>
                <strong>Estimated Cost/Time</strong>
                <p>{p.cost}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="about" className="advantages section">
      <div className="curve curve-a" />
      <div className="curve curve-b" />
      <div className="container">
        <div className="section-title reveal">
          <small>ADVANTAGES</small>
          <h2>
            Advantages of using <em>our panel</em> services
          </h2>
          <p>
            Find clear and simple explanations to the most common questions
            about our security, orders, and account management.
          </p>
        </div>
        <div className="adv-grid">
          {advantages.map((a) => (
            <article className="adv-card reveal" key={a[1]}>
              <span className="adv-icon">{a[0]}</span>
              <h3>{a[1]}</h3>
              <p>{a[2]}</p>
              <a href="#contact">{a[3]}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);
  const qs = [
    "Is my account safe when using SMM services?",
    "How quickly will my order start?",
    "Can I cancel an order after placing it?",
    "Which payment methods do you accept?",
    "Do you offer support if I have a problem?",
  ];
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-title reveal">
          <small>FREQUENTLY ASKED QUESTIONS</small>
          <h2>
            Everything you need to <em>know.</em>
          </h2>
        </div>
        <div className="faq-list reveal">
          {qs.map((q, i) => (
            <div className={`faq-item ${active === i ? "active" : ""}`} key={q}>
              <button onClick={() => setActive(active === i ? -1 : i)}>
                {q}
                <span>{active === i ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. We use secure payment processing and privacy-first order
                  handling. Your account credentials are never required to place
                  an order.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container cta-box reveal">
        <div>
          <small>READY TO GROW?</small>
          <h2>
            Turn your social presence
            <br />
            <em>into real growth.</em>
          </h2>
          <p>Start with a simple, safe and transparent SMM plan.</p>
        </div>
        <a className="btn light" href="mailto:hello@example.com">
          Get Started <Arrow />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#home">
            LOGO
          </a>
          <p>
            Reliable, affordable and safe social media marketing for Bangladesh.
          </p>
          <div className="socials">
            <span>f</span>
            <span>◎</span>
            <span>in</span>
            <span>▶</span>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <a href="#services">Facebook</a>
          <a href="#services">Instagram</a>
          <a href="#services">YouTube</a>
          <a href="#services">TikTok</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#growth">Growth</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#contact">Help Center</a>
          <a href="#contact">Terms</a>
          <a href="#contact">Privacy</a>
          <a href="#contact">Status</a>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2026 SMM Panel Bangladesh. All rights reserved.
        <span>Made for fast, safe social growth.</span>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((e) => o.observe(e));
    return () => o.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Payments />
        <Growth />
        <Advantages />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
