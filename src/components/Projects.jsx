import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ExternalLink, Github, Check, Globe, Brain, PenLine, Bug,
  ArrowRight, Images, Calendar, User, FileText, ChevronLeft, ChevronRight
} from "lucide-react";
import SectionHeading from "./Sectionheading";
import { useLanguage } from "../context/LanguageContext";
import { projectCategories, projects } from "../data/content";
import { stopScroll, startScroll } from "../lib/scroll";
import useEmblaCarousel from "embla-carousel-react";

const catIcons = { web: Globe, ai: Brain, docs: PenLine, qa: Bug };
const catColor = (keys) => {
  const primaryKey = Array.isArray(keys) ? keys[0] : keys;
  return projectCategories.find((c) => c.key === primaryKey)?.color || "#FFD93D";
};

const ProjectModal = ({ project, onClose, lang, labels }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onInit = useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    stopScroll();
    return () => startScroll();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="project-modal"
    >
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        data-testid="project-modal-backdrop"
      />
      <motion.div
        initial={{ scale: 0.9, y: 40, rotate: -1 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        exit={{ scale: 0.92, y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="relative nb-card bg-cream w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        data-testid="project-modal-content"
      >
        <button
          onClick={onClose}
          data-testid="project-modal-close"
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-slate-500 hover:bg-white hover:text-slate-800 shadow-sm border border-slate-200/60 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto w-full" data-lenis-prevent>
          <div className="h-40 md:h-60 border-b border-slate-100 overflow-hidden relative shrink-0 bg-slate-100">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-5 md:p-8 shrink-0">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="nb-chip px-3 py-1 text-xs text-white border-transparent" style={{ backgroundColor: catColor(project.category) }}>
                <User className="w-3.5 h-3.5" />
                {labels.roleLabel}: {project.role[lang]}
              </span>
              <span className="nb-chip px-3 py-1 text-xs bg-slate-50 text-slate-600">
                <Calendar className="w-3.5 h-3.5" />
                {labels.yearLabel}: {project.year}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-800" data-testid="project-modal-title">
              {project.title}
            </h3>
            <p className="mt-2 text-base md:text-lg text-slate-600 font-medium">{project.tagline[lang]}</p>

            <div className="mt-6">
              <h4 className="font-display font-bold text-lg flex items-center gap-2 text-slate-800">
                <FileText className="w-4 h-4 text-indigo-500" />
                {labels.aboutProject}
              </h4>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-600">
                {project.description[lang]}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-display font-bold text-lg text-slate-800">{labels.featuresLabel}</h4>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {project.features[lang].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base text-slate-600">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-indigo-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-display font-bold text-lg flex items-center gap-2 text-slate-800">
                <Images className="w-4 h-4 text-teal-500" />
                {labels.galleryLabel}
              </h4>
              <div className="mt-3 relative group">
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm" ref={emblaRef}>
                  <div className="flex">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="flex-[0_0_100%] min-w-0">
                        <img
                          src={img}
                          alt={`${project.title} documentation ${i + 1}`}
                          loading="lazy"
                          className="w-full aspect-video object-contain bg-slate-100 rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instagram-style Navigation */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/70 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                      onClick={() => emblaApi?.scrollPrev()}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/70 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                      onClick={() => emblaApi?.scrollNext()}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-indigo-600 w-4' : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                          onClick={() => emblaApi?.scrollTo(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold border border-slate-200 text-slate-600 rounded-full px-3 py-1 bg-slate-50">
                  {tag}
                </span>
              ))}
            </div>


          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { t, lang } = useLanguage();
  const [activeCat, setActiveCat] = useState("web");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = projects.filter((p) => p.category.includes(activeCat));

  return (
    <section id="projects" data-testid="projects-section" className="py-24 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          chapter={t.projects.chapter}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          color="#FF6B6B"
          testid="projects-heading"
        />

        <div className="flex flex-wrap gap-3 mb-10" data-testid="project-filters">
          {projectCategories.map((cat) => {
            const Icon = catIcons[cat.key];
            const active = activeCat === cat.key;
            return (
              <button
                key={cat.key}
                data-testid={`filter-${cat.key}`}
                onClick={() => setActiveCat(cat.key)}
                className="nb-btn px-4 md:px-5 py-2.5 text-sm md:text-base border-transparent transition-all"
                style={{
                  backgroundColor: active ? cat.color : "#fff",
                  color: active ? "#fff" : "#475569",
                  borderColor: active ? "transparent" : "#E2E8F0",
                }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                {cat.label[lang]}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="project-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="nb-card nb-card-hover overflow-hidden flex flex-col"
                data-testid={`project-card-${p.id}`}
              >
                <div className="relative h-44 border-b border-slate-100 overflow-hidden group">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-contain bg-slate-100 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm text-slate-700">
                    {p.year}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="text-sm text-ink/70 mt-1.5 flex-1 leading-relaxed">{p.tagline[lang]}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-medium border border-slate-200 text-slate-600 rounded-full px-2.5 py-0.5 bg-slate-50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    data-testid={`project-show-more-${p.id}`}
                    onClick={() => setActiveProject(p)}
                    className="nb-btn mt-5 px-5 py-2 text-sm self-start text-white border-transparent shadow-sm"
                    style={{ backgroundColor: catColor(p.category) }}
                  >
                    {t.projects.showMore}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
            lang={lang}
            labels={t.projects}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
