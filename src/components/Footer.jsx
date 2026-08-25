import { ArrowUp, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTop } from "../lib/scroll";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer data-testid="footer" className="border-t-[3px] border-ink bg-ink text-cream py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-xl">
            Nara<span className="text-coral">.dev</span>
          </p>
          <p className="text-sm text-cream/70 mt-1 flex items-center justify-center md:justify-start gap-1.5">
            {t.footer.made}
            <Heart className="w-4 h-4 text-coral" fill="#FF6B6B" />
          </p>
          <p className="text-xs text-cream/50 mt-1">
            © {new Date().getFullYear()} Nara. {t.footer.rights}
          </p>
        </div>
        <button
          data-testid="back-to-top-button"
          onClick={scrollToTop}
          className="nb-btn bg-sun text-ink px-5 py-2.5 text-sm"
        >
          <ArrowUp className="w-4 h-4" />
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
