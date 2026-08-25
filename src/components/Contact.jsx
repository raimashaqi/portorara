import { Mail, Phone, MapPin, Github, Linkedin, Instagram, PartyPopper } from "lucide-react";
import SectionHeading from "./Sectionheading";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const socials = [
    { icon: Github, label: "GitHub", color: "#1E1E24", link: "https://github.com/raimashaqi" },
    { icon: Linkedin, label: "LinkedIn", color: "#4ECDC4", link: "https://www.linkedin.com/in/raimashaqinah" },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          chapter={t.contact.chapter}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          color="#FFD93D"
          testid="contact-heading"
        />

        <div className="max-w-4xl mx-auto">
          <div className="nb-card p-8 md:p-12 border border-slate-200 bg-white shadow-sm flex flex-col items-center text-center" data-testid="contact-info-card">
            <h3 className="font-display font-bold text-2xl text-slate-800 flex items-center gap-2">
              <PartyPopper className="w-6 h-6 text-indigo-500" />
              {t.contact.infoTitle}
            </h3>

            <div className="mt-8 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 w-full max-w-2xl">
              <div className="flex flex-col items-center gap-2 flex-1" data-testid="contact-email">
                <span className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-1">
                  <Mail className="w-6 h-6" />
                </span>
                <span className="font-medium text-slate-600 md:text-lg break-all">{t.contact.email}</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1" data-testid="contact-location">
                <span className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-1">
                  <MapPin className="w-6 h-6" />
                </span>
                <span className="font-medium text-slate-600 md:text-lg">{t.contact.location}</span>
              </div>
            </div>

            <p className="mt-10 px-5 py-2 text-sm font-semibold rounded-full border border-slate-200 bg-slate-50 text-slate-600" data-testid="contact-availability">
              {t.contact.availability}
            </p>

            <div className="mt-10 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-social-${s.label.toLowerCase()}`}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-600 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
