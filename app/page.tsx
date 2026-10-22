const email = "info@travelwithpolaris.com";
const phone = "+92 329 5504444";

function PhoneIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.2 3.8h2.1l1.2 3-1.5 1a12.6 12.6 0 0 0 5.2 5.2l1-1.5 3 1.2v2.1c0 .8-.6 1.5-1.4 1.6A14.8 14.8 0 0 1 5.6 5.2c.1-.8.8-1.4 1.6-1.4Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5h16v11H4v-11Zm0 0 8 6.5L20 6.5"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 20v-6.1h2.1l.3-2.3h-2.4V10c0-.7.2-1.1 1.2-1.1h1.3V6.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.6H9.4v2.3h2.2V20h2.6Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.7 9.4H4.2V19h2.5V9.4ZM5.4 4.8A1.5 1.5 0 1 0 5.5 7.8 1.5 1.5 0 0 0 5.4 4.8ZM19.8 19h-2.5v-5.1c0-1.3-.5-2.1-1.6-2.1-1 0-1.6.7-1.8 1.4-.1.2-.1.6-.1.9V19h-2.5s.1-8.2 0-9.6h2.5v1.4c.3-.5 1.2-1.6 2.9-1.6 2.1 0 3.6 1.4 3.6 4.3V19Z"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.6 3.4c.4 2.3 1.7 3.9 4 4.2v2.3a6.4 6.4 0 0 1-4-1.3v6.3c0 3.2-2.5 5.6-5.6 5.6A5.5 5.5 0 0 1 3.4 15c0-3 2.4-5.4 5.4-5.4.3 0 .7 0 1 .1v2.5a3 3 0 0 0-1-.2 2.9 2.9 0 0 0 0 5.8c1.6 0 2.8-1.2 2.8-2.9V3.4h2.9Z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18 5.8 12 5.8 12 5.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 9.9 2 12.5 2 12.5s0 2.6.4 4.3a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.3.4-4.3s0-2.6-.4-4.3ZM10.2 15.4V9.6l5.1 2.9-5.1 2.9Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.1 4.2A7.7 7.7 0 0 0 5.6 16l-.8 3 3.1-.8a7.7 7.7 0 1 0 4.2-14Zm4.4 10.9c-.2.5-1 .9-1.6 1-.4.1-.9.1-1.5-.1-.3-.1-.7-.2-1.2-.5-2.1-1.1-3.5-3.2-3.6-3.4-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3.2.5.6 1.6.6 1.7.1.1.1.3 0 .4l-.3.4c-.1.1-.2.3-.1.5.2.4.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.4.2.1.4.1.5 0l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.4.3.1.2 0 .6-.2 1.1Z"
      />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/travelwithpolaris", icon: <InstagramIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/travelwithpolaris", icon: <FacebookIcon /> },
  { label: "TikTok", href: "https://www.tiktok.com/@travelwithpolaris", icon: <TikTokIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/travelwithpolaris", icon: <LinkedInIcon /> },
  { label: "YouTube", href: "https://www.youtube.com/@travelwithpolaris", icon: <YouTubeIcon /> },
  { label: "WhatsApp", href: "https://wa.me/923295504444", icon: <WhatsAppIcon /> },
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="bg" aria-hidden="true" />

      <header className="topbar">
        <p className="brand-label">Polaris Travel & Tours</p>
        <div className="socials">
          {socials.map((social) => (
            <a
              className="social"
              href={social.href}
              key={social.label}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </header>

      <section className="hero">
        <img
          className="logo"
          src="/logo-full.png"
          alt="Polaris"
          width={320}
          height={320}
        />
        <h1>Coming Soon</h1>
        <span className="underline" aria-hidden="true" />
        <p className="tagline">Your North Star for Every Journey</p>
        <p className="secondary">Explore. Dream. Discover.</p>
      </section>

      <footer className="contact">
        <a className="contact-item" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
          <PhoneIcon />
          {phone}
        </a>
        <a className="email" href={`mailto:${email}`}>
          <MailIcon />
          {email}
        </a>
      </footer>
    </main>
  );
}
