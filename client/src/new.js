import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  IndianRupee,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   BUSINESS CONFIGURATION
   ========================================================= */

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "919594535145";

const BUSINESS_PHONE =
  import.meta.env.VITE_BUSINESS_PHONE || "+919594535145";

const BUSINESS = {
  name: "Jay Bhavani tours and travels ",

  phone: BUSINESS_PHONE,

  phoneLink: `tel:${BUSINESS_PHONE.replace(/[^\d+]/g, "")}`,

  whatsapp: WHATSAPP_NUMBER,

  whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}`,

  serviceArea: "Mumbai,navi Mumbai & surrounding areas",

  address: "Mumbai , Maharashtra, India",
};

/* =========================================================
   HERO IMAGES
   ========================================================= */

const heroImages = [
  "/image/taxi-1.jpg",
  "/image/taxi-2.jpg",
  "/image/taxi-3.jpg",
  "/image/taxi-4.jpg",
];

/* =========================================================
   VEHICLES
   ========================================================= */

const vehicles = [
  {
    id: 1,
    category: "Sedan",
    name: "Swift Dzire",
    seats: 4,
    luggage: 2,
    image: "/image/cars/Dzire.jpg",
    icon: "🚘",
    description:
      "Comfortable and economical sedan for local, airport and outstation travel.",
  },

  {
    id: 2,
    category: "Sedan",
    name: "aura",
    seats: 4,
    luggage: 2,
    image: "/image/cars/Aura.jpg",
    icon: "🚘",
    description:
      "Comfortable sedan with excellent space for family journeys.",
  },

  {
    id: 3,
    category: "SUV",
    name: "Ertiga",
    seats: 6,
    luggage: 4,
    image: "/image/cars/ertiga.jpg",
    icon: "🚙",
    description:
      "Spacious vehicle suitable for families and group travel.",
  },

  {
    id: 4,
    category: "SUV",
    name: "Xl6",
    seats: 7,
    luggage: 5,
    image: "/image/cars/xl6.jpg",
    icon: "🚙",
    description:
      "Comfortable and spacious vehicle for long-distance journeys.",
  },

  {
    id: 5,
    category: "SUV Plus",
    name: "Innova Crysta",
    seats: 7,
    luggage: 5,
    image: "/image/cars/innova-crysta.jpg",
    icon: "🚐",
    description:
      "Premium SUV experience for comfortable family and corporate travel.",
  },
];

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    title: "Local cab",
    description:
      "Quick and reliable rides around your city.",
    icon: "🚕",
  },

  {
    title: "Outstation",
    description:
      "One-way and round-trip cab service to nearby cities and destinations.",
    icon: "🛣️",
  },

  {
    title: "Airport Transfer",
    description:
      "On-time airport pickup and drop service with comfortable vehicles.",
    icon: "✈️",
  },

  {
    title: "Corporate Travel",
    description:
      "Professional and comfortable transportation for business travel.",
    icon: "💼",
  },
];

/* =========================================================
   ROUTES
   ========================================================= */

const routes = [
  ["Mumbai", "Pune", "Contact for fare"],
  ["Mumbai", "Lonavla", "Contact for fare"],
  ["Mumbai", "Goa", "Contact for fare"],
  ["Mumbai", "alibaug", "Contact for fare"],
];

/* =========================================================
   GOOGLE REVIEWS
   =========================================================

   IMPORTANT:
   Add your REAL Google reviews here.

   Example structure:

   {
     name: "Customer Name",
     rating: 5,
     text: "Actual Google review text",
     date: "2 weeks ago"
   }

   Do not use fake reviews in production.
   ========================================================= */

const googleReviews = [];

/* =========================================================
   WHATSAPP FUNCTION
   ========================================================= */

function openWhatsApp(message) {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}
/* am pm time*/
function formatTimeWithAMPM(time) {
  if (!time) return "";

  const [hours, minutes] = time.split(":");
  let hour = Number(hours);

  const period = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;

  if (hour === 0) {
    hour = 12;
  }

  return `${String(hour).padStart(2, "0")}:${minutes} ${period}`;
}
/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const navigation = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Vehicles", "/vehicles"],
    ["Routes", "/routes"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="navbar">

      <div className="container nav-inner">

        <Link
          to="/"
          className="logo"
          onClick={() => setOpen(false)}
        >
<span className="logo-mark">
  <img
    src="/image/logo.png"
    alt="Jay Bhavani Tours and Travels"
  />
</span>

          <span>
            Jay Bhavani <span>Tours and Travels</span>
          </span>

        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav
          className={
            open
              ? "nav-links open"
              : "nav-links"
          }
        >

          {navigation.map(
            ([label, path]) => (

              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>

            )
          )}

          <Link
            to="/book"
            className="btn btn-primary nav-book"
            onClick={() => setOpen(false)}
          >
            Book cab
          </Link>

        </nav>

      </div>

    </header>
  );
}

/* =========================================================
   HERO BACKGROUND SLIDER
   ========================================================= */

function HeroBackground() {

  const [currentImage, setCurrentImage] =
    useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(
        (previous) =>
          (previous + 1) %
          heroImages.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="hero-background">

      {heroImages.map(
        (image, index) => (

          <div
            key={image}
            className={
              index === currentImage
                ? "hero-slide active"
                : "hero-slide"
            }
            style={{
              backgroundImage:
                `url("${image}")`,
            }}
          />

        )
      )}

      <div className="hero-dark-overlay" />

    </div>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {

  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <div className="logo footer-logo">

            <span className="logo-mark">
  <img
    src="/image/logo.png"
    alt="Jay Bhavani Tours and Travels"
  />
</span>

            <span>
              Jay Bhavani <span>Tours and Travels</span>
            </span>

          </div>

          <p>
            Safe, comfortable and dependable
            cab service for local and
            outstation journeys.
          </p>

        </div>

        <div>

          <h4>
            Quick Links
          </h4>

          <Link to="/book">
            Book cab
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/vehicles">
            Vehicles
          </Link>

          <Link to="/routes">
            Routes
          </Link>

        </div>

        <div>

          <h4>
            Contact
          </h4>

          <a href={BUSINESS.phoneLink}>
            {BUSINESS.phone}
          </a>

          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <span>
            24/7 Booking Support
          </span>

        </div>

      </div>

      <div className="copyright">

        © {new Date().getFullYear()}
        {" "}
        {BUSINESS.name}.
        All rights reserved.

      </div>

    </footer>
  );
}

/* =========================================================
   LAYOUT
   ========================================================= */

function Layout({ children }) {

  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <div className="mobile-actions">

        <a href={BUSINESS.phoneLink}>

          <Phone size={18} />

          Call

        </a>

        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noreferrer"
        >

          <MessageCircle size={18} />

          WhatsApp

        </a>

        <Link to="/book">

          <CarFront size={18} />

          Book

        </Link>

      </div>
    </>
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

function Home() {

  return (
    <>

      {/* HERO */}

      <section className="hero">

        <HeroBackground />

        <div className="hero-overlay">

          <div className="container hero-grid">

            <div className="hero-content">

              <div className="eyebrow hero-eyebrow">

                <span />

                TRUSTED CAB SERVICE

              </div>

              <h1>

                Your Journey.

                <br />

                <strong>
                  Our Responsibility.
                </strong>

              </h1>

              <p>

                Reliable local, airport
                and outstation cab service
                with professional drivers
                and comfortable vehicles.

              </p>

              <div className="hero-actions">

                <Link
                  to="/book"
                  className="btn btn-primary"
                >

                  Book a cab

                  <ArrowRight size={18} />

                </Link>

                <a
                  href={BUSINESS.phoneLink}
                  className="btn btn-light"
                >

                  <Phone size={18} />

                  Call Now

                </a>

              </div>

              <div className="hero-trust">

                <span>

                  <CheckCircle2 />

                  Verified drivers

                </span>

                <span>

                  <ShieldCheck />

                  Safe travel

                </span>

                <span>

                  <Clock3 />

                  24/7

                </span>

              </div>

            </div>

            {/* QUICK BOOKING */}

            <QuickBooking />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <b>10+</b>
            <span>Years Experience</span>
          </div>

          <div>
            <b>5,000+</b>
            <span>Happy Customers</span>
          </div>

          <div>
            <b>24/7</b>
            <span>Booking Support</span>
          </div>

          <div>
            <b>100%</b>
            <span>Customer Focus</span>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="WHAT WE OFFER"
            title="Travel made simple"
            text="Choose the service that fits your journey."
          />

          <div className="cards four">

            {services.map(
              (service) => (

                <div
                  className="service-card"
                  key={service.title}
                >

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link to="/book">

                    Book now

                    <ArrowRight
                      size={16}
                    />

                  </Link>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* FLEET */}

      <FleetSection />

      {/* WHY Jay Bhavani tours and travels  */}

      <section className="section">

        <div className="container split">

          <div>

            <SectionTitle
              eyebrow="WHY Jay Bhavani tours and travels "
              title="More than just a cab"
              text="We focus on safe, comfortable and dependable travel."
            />

            <div className="feature-list">

              <Feature
                icon={<ShieldCheck />}
                title="Safe & Trusted"
                text="Professional drivers and well-maintained vehicles."
              />

              <Feature
                icon={<IndianRupee />}
                title="Fair Pricing"
                text="Clear pricing with no surprise charges."
              />

              <Feature
                icon={<Clock3 />}
                title="Always On Time"
                text="We value your time and travel schedule."
              />

              <Feature
                icon={<Users />}
                title="Customer First"
                text="Friendly support from booking to drop-off."
              />

            </div>

          </div>

          <div className="testimonial">

            <Star />

            <p>
              “The driver arrived before time
              and the journey was very comfortable.
              Excellent service.”
            </p>

            <div>

              <b>
                Happy Customer
              </b>

             

            </div>

          </div>

        </div>

      </section>

      {/* GOOGLE REVIEWS */}

      <GoogleReviews />

      {/* CTA */}

      <CTA />

    </>
  );
}

/* =========================================================
   QUICK BOOKING
   ========================================================= */

function QuickBooking() {

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
  });

  const update = (event) => {

    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });

  };

  const sendToWhatsApp = (event) => {

    event.preventDefault();

    const message = `
🚕 *NEW Jay Bhavani tours and travels  Cab BOOKING*

━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER DETAILS*

Name: ${form.customerName}
Phone: ${form.phone}
━━━━━━━━━━━━━━━━━━
📍 *TRIP DETAILS*

Pickup: ${form.pickupLocation}
Drop: ${form.dropLocation}

Date: ${form.date}
Time: ${formatTimeWithAMPM(form.time)}
━━━━━━━━━━━━━━━━━━
Please confirm my cab booking.

Thank you.
`;

    openWhatsApp(message);
  };

  return (
    <div className="booking-card">

      <div className="card-top">

        <div>

          <span className="mini-label">
            QUICK BOOKING
          </span>

          <h3>
            Book your ride
          </h3>

        </div>

        <CarFront />

      </div>

      <form
        onSubmit={sendToWhatsApp}
      >

        <label>

          👤 Customer Name

          <input
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={update}
            placeholder="Enter your name"
            required
          />

        </label>

        <label>

          📞 Phone Number

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="+91 98765 43210"
            required
          />

        </label>

        <label>

          <MapPin size={16} />

          Pickup Location

          <input
            type="text"
            name="pickupLocation"
            value={form.pickupLocation}
            onChange={update}
            placeholder="Enter pickup location"
            required
          />

        </label>

        <label>

          <MapPin size={16} />

          Drop Location

          <input
            type="text"
            name="dropLocation"
            value={form.dropLocation}
            onChange={update}
            placeholder="Enter destination"
            required
          />

        </label>

        <div className="form-row">

          <label>

            <CalendarDays size={16} />

            Date

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={update}
              required
            />

          </label>

          <label>

            <Clock3 size={16} />

            Time

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={update}
              required
            />

          </label>

        </div>

        <button
          type="submit"
          className="btn btn-whatsapp full"
        >

          <MessageCircle size={18} />

          Send Booking to WhatsApp

        </button>

      </form>

    </div>
  );
}

/* =========================================================
   FLEET SECTION
   ========================================================= */

function FleetSection() {

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("Sedan");

  const filteredVehicles =
    vehicles.filter(
      (vehicle) =>
        vehicle.category ===
        selectedCategory
    );

  return (
    <section
      className="section section-alt"
    >

      <div className="container">

        <SectionTitle
          eyebrow="OUR FLEET"
          title="Choose your perfect ride"
          text="Select a vehicle category for your journey."
        />

        <div className="fleet-tabs">

          <button
            type="button"
            className={
              selectedCategory === "Sedan"
                ? "fleet-tab active"
                : "fleet-tab"
            }
            onClick={() =>
              setSelectedCategory(
                "Sedan"
              )
            }
          >

            🚘 Sedan

          </button>

          <button
            type="button"
            className={
              selectedCategory === "SUV"
                ? "fleet-tab active"
                : "fleet-tab"
            }
            onClick={() =>
              setSelectedCategory(
                "SUV"
              )
            }
          >

            🚙 SUV

          </button>

          <button
            type="button"
            className={
              selectedCategory ===
              "SUV Plus"
                ? "fleet-tab active"
                : "fleet-tab"
            }
            onClick={() =>
              setSelectedCategory(
                "SUV Plus"
              )
            }
          >

            🚐 SUV Plus

          </button>

        </div>

        <div className="cards fleet-results">

          {filteredVehicles.map(
            (vehicle) => (

              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />

            )
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   VEHICLE CARD
   ========================================================= */

function VehicleCard({
  vehicle,
}) {

  return (
    <div className="vehicle-card">

      <div className="vehicle-image">

        {vehicle.image ? (

          <img
            src={vehicle.image}
            alt={vehicle.name}
            loading="lazy"
          />

        ) : (

          <div className="vehicle-car-icon">
            {vehicle.icon}
          </div>

        )}

        <span className="vehicle-category">
          {vehicle.category}
        </span>

      </div>

      <div className="vehicle-content">

        <h3>
          {vehicle.name}
        </h3>

        <p>
          {vehicle.description}
        </p>

        <div className="vehicle-meta">

          <span>

            <Users />

            {vehicle.seats}
            {" "}
            seats

          </span>

          <span>

            🧳

            {" "}

            {vehicle.luggage}
            {" "}
            bags

          </span>

          <span>
            ❄️ AC
          </span>

        </div>

        <Link
          to="/book"
          className="btn btn-dark full"
        >
          Book {vehicle.name}
        </Link>

      </div>

    </div>
  );
}

/* =========================================================
   GOOGLE REVIEWS
   ========================================================= */

function GoogleReviews() {

  return (
    <section className="section reviews-section">

      <div className="container">

        <SectionTitle
          eyebrow="GOOGLE REVIEWS"
          title="What our customers say"
          text="Real experiences from Jay Bhavani tours and travels  customers."
        />

        {googleReviews.length > 0 ? (

          <>

            <div className="reviews-summary">

              <div className="google-logo">
                G
              </div>

              <div>

                <strong>
                  Google Reviews
                </strong>

                <div className="rating-line">

                  <span>
                    ★★★★★
                  </span>

                  <b>
                    5.0
                  </b>

                </div>

                <small>
                  Customer reviews
                </small>

              </div>

            </div>

            <div className="reviews-grid">

              {googleReviews.map(
                (review, index) => (

                  <div
                    className="review-card"
                    key={index}
                  >

                    <div className="review-header">

                      <div className="review-avatar">

                        {review.name
                          ?.charAt(0)
                          ?.toUpperCase()}

                      </div>

                      <div>

                        <strong>
                          {review.name}
                        </strong>

                        <small>
                          {review.date}
                        </small>

                      </div>

                    </div>

                    <div className="review-stars">

                      {"★".repeat(
                        review.rating
                      )}

                    </div>

                    <p>
                      {review.text}
                    </p>

                    <span className="google-review-label">
                      Google Review
                    </span>

                  </div>

                )
              )}

            </div>

          </>

        ) : (

          <div className="reviews-placeholder">

            <div className="google-review-icon">
              G
            </div>

            <div>

              <h3>
                Your Google Reviews
              </h3>

              <p>
                Your real customer Google
                reviews will appear here.
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

/* =========================================================
   BOOKING PAGE
   ========================================================= */

function Booking() {

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    passengers: 1,
    vehicle: "Swift Dzire",
  });

  const [sent, setSent] =
    useState(false);

  const update = (event) => {

    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });

  };

  const sendToWhatsApp = (event) => {

    event.preventDefault();

    const message = `
🚕 *NEW Jay Bhavani tours and travels  cab BOOKING*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${form.customerName}
Phone: ${form.phone}

━━━━━━━━━━━━━━━━━━

📍 *TRIP DETAILS*

Pickup: ${form.pickupLocation}
Drop: ${form.dropLocation}

Date: ${form.date}
Time: ${formatTimeWithAMPM(form.time)}

━━━━━━━━━━━━━━━━━━

🚘 *VEHICLE DETAILS*

Vehicle: ${form.vehicle}
Passengers: ${form.passengers}

━━━━━━━━━━━━━━━━━━

Please confirm my cab booking.

Thank you.
`;

    openWhatsApp(message);

    setSent(true);
  };

  return (
    <section className="page">

      <div className="container narrow">

        <SectionTitle
          eyebrow="BOOK YOUR RIDE"
          title="Reserve your cab"
          text="Enter your trip details and send your booking directly to Jay Bhavani tours and travels  WhatsApp."
        />

        <form
          className="booking-form card"
          onSubmit={sendToWhatsApp}
        >

          <div className="form-grid">

            <Field
              label="Full Name"
              name="customerName"
              value={form.customerName}
              onChange={update}
              placeholder="Your name"
              required
            />

            <Field
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="+91 9594535145"
              required
            />

            <Field
              label="Pickup Location"
              name="pickupLocation"
              value={form.pickupLocation}
              onChange={update}
              placeholder="Pickup point"
              required
            />

            <Field
              label="Drop Location"
              name="dropLocation"
              value={form.dropLocation}
              onChange={update}
              placeholder="Destination"
              required
            />

            <Field
              label="Date"
              type="date"
              name="date"
              value={form.date}
              onChange={update}
              required
            />

            <Field
              label="Time"
              type="time"
              name="time"
              value={form.time}
              onChange={update}
              required
            />

            <Field
              label="Passengers"
              type="number"
              min="1"
              max="10"
              name="passengers"
              value={form.passengers}
              onChange={update}
              required
            />

            <div>

              <label>
                Vehicle
              </label>

              <select
                name="vehicle"
                value={form.vehicle}
                onChange={update}
              >

                {vehicles.map(
                  (vehicle) => (

                    <option
                      key={vehicle.id}
                      value={vehicle.name}
                    >
                      {vehicle.name}
                    </option>

                  )
                )}

              </select>

            </div>

          </div>

          <div className="whatsapp-info">

            <MessageCircle />

            <div>

              <b>
                Booking via WhatsApp
              </b>

              <p>
                Your booking details will be
                prepared automatically in WhatsApp.
              </p>

            </div>

          </div>

          <button
            type="submit"
            className="btn btn-whatsapp full"
          >

            <MessageCircle
              size={19}
            />

            Book via WhatsApp

          </button>

          {sent && (

            <div className="success">

              WhatsApp has been opened
              with your booking details.
              Press <b>Send</b> in WhatsApp.

            </div>

          )}

        </form>

      </div>

    </section>
  );
}

/* =========================================================
   FIELD
   ========================================================= */

function Field({
  label,
  ...props
}) {

  return (
    <div>

      <label>
        {label}
      </label>

      <input {...props} />

    </div>
  );
}

/* =========================================================
   SERVICES PAGE
   ========================================================= */

function Services() {

  return (
    <Page
      title="Our Services"
      eyebrow="SERVICES"
      text="Flexible cab solutions for everyday travel, airport transfers and long-distance journeys."
    >

      <div className="cards four">

        {services.map(
          (service) => (

            <div
              className="service-card big"
              key={service.title}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <Link
                to="/book"
                className="btn btn-primary"
              >
                Book Service
              </Link>

            </div>

          )
        )}

      </div>

    </Page>
  );
}

/* =========================================================
   VEHICLES PAGE
   ========================================================= */

function Vehicles() {

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("Sedan");

  const filtered =
    vehicles.filter(
      (vehicle) =>
        vehicle.category ===
        selectedCategory
    );

  return (
    <Page
      title="Our Vehicles"
      eyebrow="OUR FLEET"
      text="Choose a clean and comfortable vehicle for your group and luggage needs."
    >

      <div className="fleet-tabs">

        {[
          "Sedan",
          "SUV",
          "SUV Plus",
        ].map((category) => (

          <button
            key={category}
            type="button"
            className={
              selectedCategory === category
                ? "fleet-tab active"
                : "fleet-tab"
            }
            onClick={() =>
              setSelectedCategory(
                category
              )
            }
          >
            {category}
          </button>

        ))}

      </div>

      <div className="cards three">

        {filtered.map(
          (vehicle) => (

            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />

          )
        )}

      </div>

    </Page>
  );
}

/* =========================================================
   ROUTES PAGE
   ========================================================= */

function RoutesPage() {

  return (
    <Page
      title="Popular Routes"
      eyebrow="ROUTES"
      text="Popular destinations served by Jay Bhavani tours and travels . Contact us for the exact fare."
    >

      <div className="route-table">

        {routes.map(
          ([from, to, price]) => (

            <div
              className="route-row"
              key={`${from}-${to}`}
            >

              <div>

                <MapPin
                  size={18}
                />

                <b>
                  {from}
                </b>

                <ArrowRight
                  size={16}
                />

                <b>
                  {to}
                </b>

              </div>

              <span>
                {price}
              </span>

              <Link to="/book">
                Book
              </Link>

            </div>

          )
        )}

      </div>

    </Page>
  );
}

/* =========================================================
   ABOUT PAGE
   ========================================================= */

function About() {

  return (
    <Page
      title="About Jay Bhavani tours and travels "
      eyebrow="ABOUT US"
      text="We make every journey comfortable, dependable and simple."
    >

      <div className="about-grid">

        <div className="about-box">

          <h2>
            Built around your journey
          </h2>

          <p>
            Jay Bhavani tours and travels  is a customer-focused
            cab service for local rides,
            airport transfers, outstation
            trips and corporate travel.
          </p>

          <p>
            Our goal is simple: provide clean
            vehicles, responsible drivers
            and dependable service.
          </p>

          <p>
            We believe good cab service means
            being on time, communicating clearly
            and treating every passenger with respect.
          </p>

        </div>

        <div className="about-points">

          <Feature
            icon={<ShieldCheck />}
            title="Trusted Drivers"
            text="Professional and responsible drivers."
          />

          <Feature
            icon={<CarFront />}
            title="Maintained Fleet"
            text="Comfortable vehicles for different group sizes."
          />

          <Feature
            icon={<Clock3 />}
            title="Flexible Booking"
            text="Advance and same-day booking support."
          />

        </div>

      </div>

    </Page>
  );
}

/* =========================================================
   CONTACT PAGE
   ========================================================= */

function Contact() {

  return (
    <Page
      title="Contact Us"
      eyebrow="GET IN TOUCH"
      text="Ready to travel? Call, WhatsApp or send us your trip details."
    >

      <div className="contact-grid">

        <div className="contact-card">

          <Phone />

          <h3>
            Call us
          </h3>

          <a href={BUSINESS.phoneLink}>
            {BUSINESS.phone}
          </a>

        </div>

        <div className="contact-card">

          <MessageCircle />

          <h3>
            WhatsApp
          </h3>

          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Chat with us
          </a>

        </div>

        <div className="contact-card">

          <MapPin />

          <h3>
            Service Area
          </h3>

          <span>
            {BUSINESS.serviceArea}
          </span>

        </div>

        <div className="contact-card">

          <Clock3 />

          <h3>
            Availability
          </h3>

          <span>
            24 hours, 7 days
          </span>

        </div>

      </div>

      <CTA />

    </Page>
  );
}

/* =========================================================
   PAGE WRAPPER
   ========================================================= */

function Page({
  title,
  eyebrow,
  text,
  children,
}) {

  return (
    <section className="page">

      <div className="container">

        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          text={text}
        />

        {children}

      </div>

    </section>
  );
}

/* =========================================================
   SECTION TITLE
   ========================================================= */

function SectionTitle({
  eyebrow,
  title,
  text,
}) {

  return (
    <div className="section-title">

      <div className="eyebrow">
        {eyebrow}
      </div>

      <h2>
        {title}
      </h2>

      {text && (
        <p>
          {text}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   FEATURE
   ========================================================= */

function Feature({
  icon,
  title,
  text,
}) {

  return (
    <div className="feature">

      <div className="feature-icon">
        {icon}
      </div>

      <div>

        <h4>
          {title}
        </h4>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   CTA
   ========================================================= */

function CTA() {

  return (
    <section className="cta">

      <div className="container cta-inner">

        <div>

          <div className="eyebrow">
            READY TO RIDE?
          </div>

          <h2>
            Let's plan your next journey.
          </h2>

          <p>
            Book your cab today
            and travel with confidence.
          </p>

        </div>

        <Link
          to="/book"
          className="btn btn-primary"
        >

          Book a cab

          <ArrowRight />

        </Link>

      </div>

    </section>
  );
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {

  return (
    <Layout>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/book"
          element={<Booking />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/vehicles"
          element={<Vehicles />}
        />

        <Route
          path="/routes"
          element={<RoutesPage />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </Layout>
  );
}