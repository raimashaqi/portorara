import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { setLenis } from "@/lib/scroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Organization from "@/components/Organization";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        setLenis(lenis);
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            setLenis(null);
        };
    }, []);

    return (
        <LanguageProvider>
            <div className="bg-cream text-ink font-sans overflow-x-clip" data-testid="app-root">
                <Navbar />
                <main>
                    <Hero />
                    <SkillsMarquee />
                    <About />
                    <Education />
                    <Experience />
                    <Projects />
                    <Organization />
                    <Certifications />
                    <Contact />
                </main>
                <Footer />
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            border: "3px solid #1E1E24",
                            boxShadow: "4px 4px 0 0 #1E1E24",
                            borderRadius: "14px",
                            fontFamily: "Outfit, sans-serif",
                            fontWeight: 600,
                        },
                    }}
                />
            </div>
        </LanguageProvider>
    );
}

export default App;
