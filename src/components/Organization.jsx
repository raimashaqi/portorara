import { motion } from "framer-motion";

import { Asterisk, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const Organization = () => {
    const { t } = useLanguage();

    return (
        <section id="organization" data-testid="organization-section" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    chapter={t.organization.chapter}
                    title={t.organization.title}
                    subtitle={t.organization.subtitle}
                    color="#B8F1CC"
                    testid="organization-heading"
                />
            </div>

            {/* <div className="py-8 border-y border-slate-200 bg-slate-50/50 overflow-hidden mb-14 flex whitespace-nowrap overflow-x-auto" data-testid="organization-marquee">
                <div className="flex">
                    {t.organization.marqueeNames.map((name, i) => (
                        <span key={name} className="flex items-center">
                            <span
                                className={`font-display font-bold text-4xl md:text-6xl mx-8 ${i % 2 ? "text-outline" : "text-ink"
                                    }`}
                            >
                                {name}
                            </span>
                            <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 doodle-spin" />
                        </span>
                    ))}
                </div>
            </div> */}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
                {t.organization.items.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: i * 0.12 }}
                        className="nb-card nb-card-hover p-6 border border-slate-200 bg-white shadow-sm"
                        data-testid={`organization-card-${i}`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="w-11 h-11 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center bg-indigo-50"
                            >
                                <Users className="w-5 h-5 text-indigo-600" />
                            </span>
                            <span className="px-3 py-1 text-xs font-semibold rounded-full border border-slate-200 bg-slate-50 text-slate-600">{item.period}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-slate-800">{item.title}</h3>
                        <p className="font-medium text-slate-500 text-sm mt-0.5">{item.org}</p>
                        <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Organization;
