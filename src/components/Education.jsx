import SectionHeading from "./Sectionheading";
import Timeline from "./Timeline";
import { useLanguage } from "../context/LanguageContext";
import eduImg from "../assets/pendidikan/image1.jpeg";

const Education = () => {
  const { t } = useLanguage();
  return (
    <section id="education" data-testid="education-section" className="py-24 md:py-32 bg-skyy/30 border-y-[3px] border-ink">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          chapter={t.education.chapter}
          title={t.education.title}
          subtitle={t.education.subtitle}
          color="#4ECDC4"
          testid="education-heading"
        />
        <div className="relative">
          <Timeline items={t.education.items} accent="#4ECDC4" />
          <div className="hidden md:block absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 w-5/12 max-w-md">
            <img
              src={eduImg}
              alt="Education Illustration"
              className="w-full h-full rounded-2xl shadow-lg rotate-2 hover:-rotate-1 transition-transform duration-300 border-4 border-white object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
