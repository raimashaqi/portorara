import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" data-testid="experience-section" className="py-24 md:py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          chapter={t.experience.chapter}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          color="#FFD93D"
          testid="experience-heading"
        />
        <Timeline items={t.experience.items} accent="#FFD93D" />
      </div>
    </section>
  );
};

export default Experience;
