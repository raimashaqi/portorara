
import { Sparkle } from "lucide-react";
import { skills } from "../data/content";

const SkillsMarquee = () => (
    <section
        data-testid="skills-marquee"
        className="py-4 border-y border-slate-200 bg-slate-50/50 overflow-hidden"
    >
        <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee min-w-max">
                {[...skills, ...skills].map((s, i) => (
                    <span key={`${s}-${i}`} className="flex items-center">
                        <span
                            className={`font-display font-semibold text-lg md:text-2xl mx-6 ${i % 2 ? "text-outline" : "text-slate-800"
                                }`}
                        >
                            {s}
                        </span>
                        <Sparkle className="w-4 h-4 md:w-5 md:h-5 text-slate-800" fill="#4F46E5" />
                    </span>
                ))}
            </div>
        </div>
  </section>
);

export default SkillsMarquee;
