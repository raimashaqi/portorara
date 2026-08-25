import { motion } from "framer-motion";
import { Smile, Swords } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import { profileImage, skills } from "../data/content";

const cardAnim = (i) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, delay: i * 0.1 },
});

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" data-testid="about-section" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    chapter={t.about.chapter}
                    title={t.about.title}
                    subtitle={t.about.subtitle}
                    color="#FF6B6B"
                    testid="about-heading"
                />

                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div {...cardAnim(0)} className="nb-card nb-card-hover overflow-hidden md:row-span-2 relative border border-slate-200 shadow-sm" data-testid="about-photo-card">
                        <img
                            src={profileImage}
                            alt="Nara"
                            className="w-full h-full min-h-[320px] object-contain bg-slate-100"
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div {...cardAnim(1)} className="nb-card nb-card-hover p-6 md:p-8 md:col-span-2 bg-white" data-testid="about-intro-card">
                        <h3 className="font-display font-bold text-2xl md:text-3xl flex items-center gap-3 text-slate-800">
                            <span className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                <Smile className="w-5 h-5 text-indigo-600" />
                            </span>
                            {t.about.introTitle}
                        </h3>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                            {t.about.introText}
                        </p>
                    </motion.div>

                    <motion.div {...cardAnim(2)} className="nb-card nb-card-hover p-6 bg-slate-50 border border-slate-200/60" data-testid="about-skills-card">
                        <h3 className="font-display font-bold text-xl flex items-center gap-2 text-slate-800">
                            <Swords className="w-5 h-5 text-teal-600" />
                            {t.about.skillsTitle}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map((s) => (
                                <span key={s} className="text-xs font-semibold border border-slate-200 rounded-full px-3 py-1 bg-white text-slate-700 shadow-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...cardAnim(3)} className="nb-card nb-card-hover p-6 bg-slate-50 border border-slate-200/60" data-testid="about-fun-card">
                        <h3 className="font-display font-bold text-xl text-slate-800">{t.about.funTitle}</h3>
                        <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
                            {t.about.funText}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
