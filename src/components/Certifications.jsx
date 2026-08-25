import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";
import { useLanguage } from "../context/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();
  return (
    <section id="certifications" data-testid="certifications-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          chapter={t.certifications.chapter}
          title={t.certifications.title}
          subtitle={t.certifications.subtitle}
          color="#4ECDC4"
          testid="certifications-heading"
        />
        <Timeline items={t.certifications.items} accent="#4ECDC4" />
      </div>
    </section>
  );
};

export default Certifications;
