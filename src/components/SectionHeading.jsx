import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const SectionHeading = ({ chapter, title, subtitle, color = "#FFD93D", testid }) => {
    const { t } = useLanguage();
    return (
        <div className="mb-12 md:mb-16" data-testid={testid}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span
                    className="nb-chip px-4 py-1.5 text-xs md:text-sm font-display uppercase tracking-widest"
                    style={{ backgroundColor: color }}
                >
                    {t.chapterLabel} {chapter}
                </span>
                <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mt-5 tracking-tight">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-4 max-w-2xl text-base md:text-lg text-ink/70">{subtitle}</p>
                )}
            </motion.div>
        </div>
    );
};

export default SectionHeading;
