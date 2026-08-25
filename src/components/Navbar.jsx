import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToSection, scrollToTop } from "../lib/scroll";

const LangToggle = () => {
    const { lang, setLang } = useLanguage();
    return (
        <div
            data-testid="lang-toggle"
            className="flex border border-slate-200/50 rounded-full bg-white/80 shadow-sm p-1 backdrop-blur-sm"
        >
            {["id", "en"].map((l) => (
                <button
                    key={l}
                    data-testid={`lang-toggle-${l}`}
                    onClick={() => setLang(l)}
                    className="relative px-3 py-1 text-xs font-extrabold uppercase tracking-wide"
                >
                    {lang === l && (
                        <motion.span
                            layoutId="lang-pill"
                            className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/60"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{l}</span>
                </button>
            ))}
        </div>
    );
};

const Navbar = () => {
    const { t } = useLanguage();
    const [open, setOpen] = useState(false);

    const go = (id) => {
        setOpen(false);
        scrollToSection(`#${id}`);
    };

    return (
        <header
            data-testid="navbar"
            className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
                <button
                    data-testid="nav-logo"
                    onClick={scrollToTop}
                    className="font-display font-bold text-xl md:text-2xl flex items-center gap-2"
                >
                    <span className="w-9 h-9 rounded-xl bg-coral/10 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-coral" />
                    </span>
                    <span className="font-display font-bold">Portofolio<span className="text-coral">Raima</span></span>
                </button>

                <nav className="hidden lg:flex items-center gap-1" data-testid="nav-links">
                    {t.nav.map((item) => (
                        <button
                            key={item.id}
                            data-testid={`nav-link-${item.id}`}
                            onClick={() => go(item.id)}
                            className="px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-ink hover:bg-slate-100/80 transition-colors duration-200"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <LangToggle />
                    <button
                        data-testid="nav-menu-button"
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-600 hover:bg-slate-50 transition-colors"
                        aria-label="Menu"
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        data-testid="nav-mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md shadow-lg"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {t.nav.map((item) => (
                                <button
                                    key={item.id}
                                    data-testid={`nav-mobile-link-${item.id}`}
                                    onClick={() => go(item.id)}
                                    className="text-left px-4 py-3 rounded-xl font-display font-semibold text-lg text-slate-700 hover:bg-slate-50 transition-colors duration-150"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
