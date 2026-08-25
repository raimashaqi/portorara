import { motion } from "framer-motion";
import { Sparkles, FolderOpen, Download, MousePointer2 } from "lucide-react";
import Mascot3D from "./Mascot3D";
import { useLanguage } from "../context/LanguageContext";
import { scrollToSection } from "../lib/scroll";

const MaskedLine = ({ children, delay }) => (
    <span className="block overflow-hidden pb-1 md:pb-2">
        <motion.span
            className="block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ delay, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
            {children}
        </motion.span>
    </span>
);

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 bg-dots overflow-hidden"
        >
            <div className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-coral/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center w-full">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20, rotate: -4 }}
                        animate={{ opacity: 1, y: 0, rotate: -2 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="inline-block mb-100"
                    >
                        <span className="nb-chip bg-slate-100 text-slate-700 px-4 py-1.5 text-sm" data-testid="hero-badge">
                            <Sparkles className="w-4 h-4 text-coral" />
                            {t.hero.badge}
                        </span>
                    </motion.div>

                    <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.02]" data-testid="hero-title">
                        <MaskedLine delay={0.25}>{t.hero.lines[0]}</MaskedLine>
                        <MaskedLine delay={0.38}>
                            <span className="relative inline-block text-coral">
                                {t.hero.lines[1]}
                                <svg className="absolute -bottom-6 left-0 w-full" viewBox="0 0 220 14" fill="none">
                                    <path d="M3 10C50 3 120 2 217 8" stroke="#4F46E5" strokeWidth="6" strokeLinecap="round" />
                                </svg>
                            </span>
                        </MaskedLine>
                    </h1>

                    <div className="mt-6 max-w-xl text-base md:text-lg text-ink/75 leading-relaxed">
                        <MaskedLine delay={0.55}>
                            <span data-testid="hero-subtitle">{t.hero.subtitle}</span>
                        </MaskedLine>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.5 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <button
                            data-testid="hero-cta-projects"
                            onClick={() => scrollToSection("#projects")}
                            className="nb-btn bg-coral text-white px-6 py-3 text-base shadow-md hover:shadow-lg hover:bg-indigo-700 border-transparent"
                        >
                            <FolderOpen className="w-5 h-5" />
                            {t.hero.ctaPrimary}
                        </button>
                        <a
                            data-testid="hero-cta-contact"
                            href="/cv.pdf"
                            download="CV_Nara.pdf"
                            className="nb-btn bg-white text-slate-700 border border-slate-200 px-6 py-3 text-base hover:bg-slate-50"
                        >
                            <Download className="w-5 h-5" />
                            {t.hero.ctaSecondary}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="mt-10 flex flex-wrap gap-3"
                        data-testid="hero-stats"
                    >
                        {t.hero.stats.map((s, i) => (
                            <div
                                key={s.label}
                                className="nb-chip px-4 py-2 text-sm border-slate-200 bg-white"
                            >
                                <span className="font-display font-bold text-lg text-coral">{s.value}</span>
                                <span className="text-slate-600">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 120 }}
                    className="relative"
                >
                    <div className="nb-card overflow-hidden bg-slate-50/50 h-[380px] sm:h-[440px] md:h-[520px] backdrop-blur-sm" data-testid="mascot-frame">
                        <Mascot3D />
                    </div>

                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm rounded-full px-4 py-2 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap text-slate-600" data-testid="mascot-hint">
                        <MousePointer2 className="w-4 h-4 text-coral" />
                        {t.hero.mascotHint}
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
