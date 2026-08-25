import img0 from '../assets/about/image1.jpeg';

import nail1 from '../assets/nail sense/image5.jpg';
import nail2 from '../assets/nail sense/image2.jpg';
import nail3 from '../assets/nail sense/image3.jpg';
import nail4 from '../assets/nail sense/image4.jpg';
import nail5 from '../assets/nail sense/image1.jpg';
import nail6 from '../assets/nail sense/image6.jpg';

import edu1 from '../assets/edurobo/image1.png';
import edu2 from '../assets/edurobo/image2.png';
import edu3 from '../assets/edurobo/image3.png';
import edu4 from '../assets/edurobo/image4.png';
import edu5 from '../assets/edurobo/image5.png';
import edu6 from '../assets/edurobo/image6.png';
import edu7 from '../assets/edurobo/image7.png';

import piyik1 from '../assets/piyik/image7.png';
import piyik2 from '../assets/piyik/image2.png';
import piyik3 from '../assets/piyik/image3.png';
import piyik4 from '../assets/piyik/image4.png';
import piyik5 from '../assets/piyik/image5.png';
import piyik6 from '../assets/piyik/image6.png';
import piyik7 from '../assets/piyik/image1.png';
import piyik8 from '../assets/piyik/image8.png';

import quant1 from '../assets/quantifyiq/image3.png';
import quant2 from '../assets/quantifyiq/image2.png';
import quant3 from '../assets/quantifyiq/image6.png';
import quant4 from '../assets/quantifyiq/image4.png';
import quant5 from '../assets/quantifyiq/image5.png';
import quant6 from '../assets/quantifyiq/image1.png';

import fund1 from '../assets/fundunity/image1.png';
import fund2 from '../assets/fundunity/image2.png';
import fund3 from '../assets/fundunity/image3.png';
import fund4 from '../assets/fundunity/image4.png';
import fund5 from '../assets/fundunity/image5.png';

import hotel1 from '../assets/sistem hotel/image2.png';
import hotel2 from '../assets/sistem hotel/image1.png';
import hotel3 from '../assets/sistem hotel/image3.png';
import hotel4 from '../assets/sistem hotel/image4.png';
import hotel5 from '../assets/sistem hotel/image5.png';
import hotel6 from '../assets/sistem hotel/image6.png';
import hotel7 from '../assets/sistem hotel/image7.png';

import ids1 from '../assets/ids/image5.png';
import ids2 from '../assets/ids/image2.png';
import ids3 from '../assets/ids/image3.png';
import ids4 from '../assets/ids/image4.png';
import ids5 from '../assets/ids/image1.png';
import ids6 from '../assets/ids/image6.png';

import sertif1 from '../assets/sertifikat/image3.pdf';
import sertif2 from '../assets/sertifikat/image2.jpeg';
import sertif3 from '../assets/sertifikat/image4.pdf';
import sertif4 from '../assets/sertifikat/image1.pdf';

export const profileImage = img0;

const IMG = {
    web1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    web2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    web3: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    web4: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    web5: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    ai1: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    ai2: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    ai3: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",
    ai4: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
    doc1: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    doc2: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    doc3: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    doc4: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    qa1: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=900&q=80",
    qa2: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    qa3: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=900&q=80",
    qa4: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=900&q=80",
};

export const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "Next.js", "Flutter",
    "Bootstrap", "PHP", "Laravel", "Tailwind", "Figma", "GitHub",
    "MySQL", "Postman", "YOLO", "CNN", "Jira", "Zephyr",
    "Microsoft Word", "Microsoft Excel", "Scratch"
];

export const projectCategories = [
    { key: "web", color: "#FF6B6B", label: { id: "Web & Mobile Dev", en: "Web & Mobile Dev" } },
    { key: "ai", color: "#C7B9FF", label: { id: "AI Development", en: "AI Development" } },
    { key: "docs", color: "#FFD93D", label: { id: "Technical Writer", en: "Technical Writer" } },
    { key: "qa", color: "#4ECDC4", label: { id: "Quality Assurance", en: "Quality Assurance" } },
];

export const projects = [
    {
        id: "nailsense", category: ["ai", "web", "docs"], year: "2026", image: nail1, gallery: [nail1, nail2, nail3, nail4, nail5, nail6],
        title: "Nail Sense",
        tagline: { id: "Deteksi penyakit kuku berbasis AI dan Mobile", en: "AI-based nail disease detection mobile app" },
        description: {
            id: "Merancang arsitektur sistem dan mendokumentasikannya menggunakan UML serta mockup UI Figma. Mengembangkan model AI dengan akurasi 98% untuk ekstraksi ROI (YOLOv8) dan klasifikasi (EfficientNetB2). Mengimplementasikan Grad-CAM sebagai XAI, serta melakukan deployment model menggunakan HuggingFace untuk diintegrasikan pada aplikasi Flutter. Sistem juga melewati proses Functional, Black Box, dan UAT Testing.",
            en: "Designed system architecture using UML and Figma UI mockups. Developed AI models achieving 98% accuracy for ROI extraction (YOLOv8) and classification (EfficientNetB2). Implemented Grad-CAM as XAI, deployed the model using HuggingFace, and integrated it into a Flutter Android app. Validated through Functional, Black Box, and UAT Testing."
        },
        features: {
            id: ["Akurasi AI 98%", "Integrasi YOLOv8 & EfficientNet", "Mobile App dengan Flutter", "User Acceptance Testing (UAT)"],
            en: ["98% AI Accuracy", "YOLOv8 & EfficientNet Integration", "Mobile App with Flutter", "User Acceptance Testing (UAT)"]
        },
        role: { id: "AI & Mobile Developer", en: "AI & Mobile Developer" },
        tags: ["Flutter", "Python", "YOLOv8", "HuggingFace"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "edurobo", category: ["web", "docs", "qa"], year: "2025", image: edu1, gallery: [edu1, edu2, edu3, edu4, edu5, edu6, edu7],
        title: "Edurobo",
        tagline: { id: "Landing Page interaktif untuk kursus coding dan robotika siswa SD.", en: "Interactive Landing Page for kids' coding and robotics courses." },
        description: {
            id: "Merancang dan mengimplementasikan UI yang responsif dan interaktif menggunakan ReactJS. Dilengkapi animasi 3D untuk meningkatkan UX peserta didik. Melakukan deployment dengan Vercel, serta merancang kurikulum dan bahan ajar pemrograman menggunakan Scratch.",
            en: "Designed and implemented a responsive, interactive UI using ReactJS featuring 3D animations to boost student UX. Deployed via Vercel, and designed the curriculum and teaching materials using Scratch."
        },
        features: {
            id: ["UI Responsif", "Animasi 3D", "Panduan Pembelajaran Scratch", "Validasi Fungsi Website"],
            en: ["Responsive UI", "3D Animations", "Scratch Learning Guide", "Website Functionality Validation"]
        },
        role: { id: "Frontend Developer", en: "Frontend Developer" },
        tags: ["ReactJS", "Vercel", "3D Animation"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "piyik", category: ["web", "ai"], year: "2024", image: piyik1, gallery: [piyik1, piyik2, piyik3, piyik4, piyik5, piyik6, piyik7, piyik8],
        title: "Piyik (Smart Incubator For Your Eggs)",
        tagline: { id: "Sistem inkubator pintar dengan Fuzzy Logic dan monitoring web.", en: "Smart incubator system with Fuzzy Logic and web monitoring." },
        description: {
            id: "Mengimplementasikan Fuzzy Logic untuk mengoptimalkan monitoring dan kontrol suhu inkubator telur pintar. Mengembangkan UI yang responsif dan interaktif menggunakan Next.js, React, dan TypeScript. Dipercantik dengan visualisasi data menggunakan Recharts dan animasi dari Framer Motion.",
            en: "Implemented Fuzzy Logic to optimize monitoring and temperature control for the smart egg incubator. Developed a responsive UI using Next.js, React, and TypeScript. Enhanced with data visualizations via Recharts and animations using Framer Motion."
        },
        features: {
            id: ["Implementasi Fuzzy Logic", "Visualisasi Data (Recharts)", "Animasi (Framer Motion)", "Desain UI Responsif", "Kolaborasi Tim GitHub"],
            en: ["Fuzzy Logic Implementation", "Data Visualization (Recharts)", "Animations (Framer Motion)", "Responsive UI Design", "GitHub Team Collaboration"]
        },
        role: { id: "Frontend Developer & AI", en: "Frontend Developer & AI" },
        tags: ["Fuzzy Logic", "Next.js", "TypeScript", "Tailwind CSS"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "quantifyiq", category: ["web", "docs"], year: "2024", image: quant1, gallery: [quant1, quant2, quant3, quant4, quant5, quant6],
        title: "QuantifyIQ Monitoring Web",
        tagline: { id: "IoT-Based Industrial Counting Device & Monitoring Web.", en: "IoT-Based Industrial Counting Device & Monitoring Web." },
        description: {
            id: "Merancang sistem perangkat penghitung kaus kaki otomatis berbasis IoT (FreeRTOS) untuk monitoring real-time. Membangun platform web monitoring menggunakan HTML, CSS, JavaScript, dengan fitur ekspor laporan PDF/Excel.",
            en: "Designed an IoT-based automatic sock counting system using FreeRTOS for real-time monitoring. Built a web monitoring platform with HTML/CSS/JS that exports detailed reports to PDF/Excel."
        },
        features: {
            id: ["Monitoring IoT Real-time", "Ekspor Laporan (PDF/Excel)", "FreeRTOS", "Dashboard HTML/CSS/JS"],
            en: ["Real-time IoT Monitoring", "Report Export (PDF/Excel)", "FreeRTOS", "HTML/CSS/JS Dashboard"]
        },
        role: { id: "Full-Stack & IoT", en: "Full-Stack & IoT" },
        tags: ["IoT", "HTML/CSS/JS", "FreeRTOS"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "fundunity", category: "web", year: "2025", image: fund1, gallery: [fund1, fund2, fund3, fund4, fund5],
        title: "FundUnity",
        tagline: { id: "Website company profile untuk platform penggalangan dana.", en: "Company profile website for a crowdfunding platform." },
        description: {
            id: "Mengembangkan platform company profile untuk layanan penggalangan dana menggunakan framework Laravel dan Blade template engine. Terlibat dalam kolaborasi backend dan frontend admin melalui GitHub.",
            en: "Developed a company profile platform for crowdfunding services using the Laravel framework and Blade template engine. Collaborated closely on the backend and frontend admin panels via GitHub."
        },
        features: {
            id: ["Laravel Blade Template", "Company Profile", "Admin Frontend", "Integrasi Backend"],
            en: ["Laravel Blade Template", "Company Profile", "Admin Frontend", "Backend Integration"]
        },
        role: { id: "Web Developer", en: "Web Developer" },
        tags: ["Laravel", "PHP", "Blade"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "yamahanmax", category: "ai", year: "2024", image: IMG.ai3, gallery: [IMG.ai3, IMG.ai4],
        title: "Deteksi Motor Yamaha NMAX",
        tagline: { id: "Sistem deteksi objek menggunakan YOLOv11.", en: "Object detection system using YOLOv11." },
        description: {
            id: "Membangun sistem deteksi objek untuk mengidentifikasi sepeda motor Yamaha NMAX menggunakan algoritma YOLOv11 dengan akurasi 94%. Sistem dikembangkan dengan Python dan dilatih melalui Google Colab.",
            en: "Built an object detection system to identify Yamaha NMAX motorcycles using the YOLOv11 algorithm, achieving 94% accuracy. Developed in Python and trained via Google Colab."
        },
        features: {
            id: ["YOLOv11 Algorithm", "Akurasi 94%", "Pelatihan Google Colab", "Computer Vision"],
            en: ["YOLOv11 Algorithm", "94% Accuracy", "Google Colab Training", "Computer Vision"]
        },
        role: { id: "AI Engineer", en: "AI Engineer" },
        tags: ["YOLO", "Python", "Google Colab"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "hotel-management", category: ["qa", "docs", "web"], year: "2024", image: hotel1, gallery: [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7],
        title: "Hotel Management System",
        tagline: { id: "Pengujian kualitas dan penyusunan dokumen SRS beserta panduan pengguna untuk sistem manajemen hotel.", en: "Quality assurance testing and creation of SRS documents and user guides for a hotel management system." },
        description: {
            id: "Sebagai Quality Assurance, saya melakukan Functional Testing (Black-box & White-box) serta Usability Evaluation kepada 10 responden. Sebagai Technical Writer, saya menyusun Software Requirements Specification (SRS) yang mencakup ERD, DFD, dan UML, serta merancang buku panduan komprehensif bagi pengguna sistem.",
            en: "As Quality Assurance, I conducted Functional Testing (Black-box & White-box) and Usability Evaluation with 10 respondents. As a Technical Writer, I authored the Software Requirements Specification (SRS) covering ERD, DFD, and UML diagrams, and created a comprehensive user guide for the system."
        },
        features: {
            id: ["Black-box & White-box Testing", "Evaluasi Usability", "Penyusunan SRS & UML", "Pembuatan User Guide"],
            en: ["Black-box & White-box Testing", "Usability Evaluation", "SRS & UML Creation", "User Guide Writing"]
        },
        role: { id: "QA & Technical Writer", en: "QA & Technical Writer" },
        tags: ["QA", "Testing", "SRS", "UML", "User Guide"],
        links: { demo: "#", repo: "#" },
    },
    {
        id: "yukmari-ids", category: "web", year: "2025", image: ids1, gallery: [ids1, ids2, ids3, ids4, ids5, ids6],
        title: "Intrusion Detection System",
        tagline: { id: "Sistem deteksi intrusi aplikasi web yang aman dan fungsional.", en: "Secure and functional web application intrusion detection system." },
        description: {
            id: "Mengembangkan Web Application Intrusion Detection System secara end-to-end. Membangun backend dengan Flask (Python) dan frontend menggunakan HTML, CSS, JavaScript, serta MySQL sebagai basis data. Aplikasi ini juga diintegrasikan dengan Payment Gateway dan perlindungan Re-CAPTCHA.",
            en: "Developed a Web Application Intrusion Detection System from end-to-end. Built the backend with Flask (Python) and frontend using HTML, CSS, JavaScript, with MySQL as the database. Integrated with a Payment Gateway and Re-CAPTCHA protection."
        },
        features: {
            id: ["Integrasi Payment Gateway", "Proteksi Re-CAPTCHA", "Deteksi Intrusi Web", "Dashboard Admin MySQL"],
            en: ["Payment Gateway Integration", "Re-CAPTCHA Protection", "Web Intrusion Detection", "MySQL Admin Dashboard"]
        },
        role: { id: "Full Stack Developer", en: "Full Stack Developer" },
        tags: ["Python", "Flask", "MySQL", "Security"],
        links: { demo: "#", repo: "#" },
    }
];

export const content = {
    id: {
        chapterLabel: "Bagian",
        nav: [
            { id: "about", label: "Profil" },
            { id: "education", label: "Pendidikan" },
            { id: "experience", label: "Pengalaman" },
            { id: "projects", label: "Projek" },
            { id: "organization", label: "Organisasi" },
            { id: "certifications", label: "Sertifikasi" },
            { id: "contact", label: "Kontak" },
        ],
        hero: {
            badge: "Fresh Graduate & Tech Enthusiast",
            lines: ["Halo, saya", "Raima Shaqinah!"],
            subtitle: "Berfokus pada Quality Assurance, Kecerdasan Buatan (AI), Pengembangan Web & Mobile, serta Project Management. Selalu mengutamakan ketelitian dan kualitas produk yang prima.",
            ctaPrimary: "Lihat Projek Saya",
            ctaSecondary: "Download CV",
            stats: [
                { value: "8+", label: "Projek Terselesaikan" },
                { value: "3.88", label: "IPK Kelulusan" },
                { value: "4", label: "Bidang Keahlian" },
            ],
            mascotName: "Bibo",
            mascotHint: "Gerakkan mouse-mu, Bibo akan mengikutinya!",
            sticker3d: "100% 3D",
        },
        about: {
            chapter: "01",
            title: "Siapa Saya?",
            subtitle: "Sekilas tentang Raima dan semangat belajarnya.",
            introTitle: "Halo!",
            introText: "Saya Raima Shaqinah Alamsyah, seorang Fresh Graduate Teknik Komputer. Saya memiliki passion di Quality Assurance, AI, serta pengembangan web dan mobile. Kelebihan utama saya adalah ketelitian tinggi, kemampuan analisis tajam, dan orientasi kuat terhadap proses untuk menjamin ketuntasan serta kualitas projek.",
            photoSticker: "Ini aku!",
            skillsTitle: "Keahlian & Teknologi",
            funTitle: "Soft Skills",
            funText: "Sangat mudah beradaptasi, teliti, tekun, dan memiliki kemampuan problem solving yang baik. Saya juga terbiasa dan senang bekerja sama dalam tim.",
        },
        education: {
            chapter: "02",
            title: "Latar Pendidikan",
            subtitle: "Perjalanan akademis yang membangun pondasi logika dan keilmuan saya.",
            items: [
                {
                    period: "Sep 2022 — Jun 2026",
                    title: "Sarjana Teknik Komputer",
                    org: "Universitas Pendidikan Indonesia - Jl. Dr. Setiabudi No. 229, Bandung",
                    desc: "Meraih Juara 1 dari 30 peserta dalam Mata Kuliah Proyek Konsultasi Terbaik melalui pengembangan QuantifyIQ, serta memperoleh HAKI untuk perangkat lunak QuantifyIQ Web App. Memiliki pengalaman dalam pengembangan embedded system, intelligent device, serta network and security.",
                    tags: ["IPK 3.88/4.00", "HAKI QuantifyIQ", "Juara 1 Proyek"],
                }
            ],
        },
        experience: {
            chapter: "03",
            title: "Pengalaman Kerja & Magang",
            subtitle: "Tempat saya menerapkan ilmu dan memberikan kontribusi nyata.",
            typeLabels: { work: "Kerja", intern: "Magang" },
            items: [
                {
                    period: "Sep 2025 — Jul 2026",
                    type: "work",
                    title: "Social Media Specialist",
                    org: "PT Blockchain Media Indonesia",
                    desc: "Bertanggung jawab dalam merancang dan memproduksi rata-rata 3 konten per hari untuk TikTok dan Instagram, mulai dari ideasi hingga publikasi. Berhasil meningkatkan engagement hingga 300.000+ serta menambah 400+ followers melalui strategi konten yang konsisten dan relevan.",
                    tags: ["TikTok", "Instagram", "Content Strategy"],
                },
                {
                    period: "Feb 2025 — Jun 2025",
                    type: "intern",
                    title: "Full Stack Developer",
                    org: "PT. YukMari Cyberlab - Bandung",
                    desc: "Terlibat aktif sebagai Full Stack Developer dalam merancang dan mengembangkan solusi aplikasi web yang interaktif. Berkolaborasi dengan tim untuk memastikan performa, keamanan (melalui integrasi Re-CAPTCHA), dan kelancaran fitur pembayaran (Payment Gateway) pada sistem.",
                    tags: ["Web Development", "Team Collaboration", "Problem Solving"],
                },
                {
                    period: "Sep 2025 — Dec 2025",
                    type: "intern",
                    title: "Education Technology Developer",
                    org: "PT Atama Karya Inovasi",
                    desc: "Mengembangkan produk Edurobo, sebuah platform edukasi teknologi interaktif yang ditujukan untuk meningkatkan cara belajar siswa. Berkolaborasi dalam mendesain materi pembelajaran dan memastikan fitur produk berfungsi optimal.",
                    tags: ["Edurobo", "EdTech", "Product Dev"],
                }
            ],
        },
        projects: {
            chapter: "04",
            title: "Galeri Projek",
            subtitle: "Berbagai inovasi dari tugas akhir, hobi, hingga kolaborasi tim.",
            showMore: "Lihat Detail",
            featuresLabel: "Sorotan Fitur",
            galleryLabel: "Dokumentasi",
            roleLabel: "Peran",
            yearLabel: "Tahun",
            demoLabel: "Live Demo",
            repoLabel: "Source Code",
            aboutProject: "Tentang Projek",
        },
        organization: {
            chapter: "05",
            title: "Pengalaman Organisasi",
            subtitle: "Melatih kepemimpinan, komunikasi, dan manajemen acara.",
            marqueeNames: ["HIMAKOM", "Dies Natalis", "MABIM", "Kepanitiaan", "Event Kampus"],
            items: [
                {
                    period: "Jan 2023 — Jan 2025",
                    title: "Staff Departemen Pendidikan Minat dan Bakat",
                    org: "Himpunan Mahasiswa Teknik Komputer (UPI)",
                    desc: "Menjadi wadah yang menaungi minat dan bakat mahasiswa teknik komputer, serta menjadi penanggung jawab pada acara Dies Natalis Teknik Komputer 2024.",
                },
                {
                    period: "Oct 2024 — Nov 2024",
                    title: "Kepala Divisi Medis dan Mental Health",
                    org: "Masa Bimbingan (MABIM) Teknik Komputer 2024",
                    desc: "Memastikan kesehatan fisik serta mental 200+ panitia dan peserta. Menyelenggarakan pelatihan kesehatan darurat dan menyediakan lingkungan dukungan emosional yang positif.",
                },
                {
                    period: "Jun 2024",
                    title: "Ketua Pelaksana",
                    org: "Dies Natalis Teknik Komputer 2024",
                    desc: "Memimpin perencanaan dan pelaksanaan acara tahunan yang diikuti 200+ orang. Mengoordinasikan lebih dari 60 panitia lintas divisi agar berjalan sesuai target dan jadwal.",
                },
                {
                    period: "Sep 2023 — Oct 2023",
                    title: "Kepala Divisi Konsumsi",
                    org: "Masa Bimbingan (MABIM) Teknik Komputer 2023",
                    desc: "Mengoordinasikan perencanaan dan pengadaan konsumsi bagi 180 orang (panitia, peserta, undangan) dengan memastikan kualitas dan ketepatan waktu penyediaan.",
                }
            ],
        },
        certifications: {
            chapter: "06",
            title: "Sertifikasi & Penghargaan",
            subtitle: "Validasi keahlian berstandar nasional dan internasional.",
            items: [
                {
                    period: "Jun 2022",
                    title: "Goethe-Zertifikat A2: Fit in Deutsch",
                    org: "Goethe-Institut Indonesien",
                    desc: "Sertifikasi bahasa Jerman tingkat A2 dengan nilai predikat 'Gut' (Bagus).",
                    bullets: [
                        "Hören (Mendengarkan): Memahami percakapan sehari-hari.",
                        "Lesen (Membaca): Memahami teks informasi sederhana.",
                        "Schreiben (Menulis): Mampu menulis pesan pendek.",
                        "Sprechen (Berbicara): Mampu berkomunikasi dasar secara langsung."
                    ],
                    certificateUrl: sertif2
                },
                {
                    period: "2026",
                    title: "Microsoft Office Specialist-Word 2019",
                    org: "Microsoft",
                    desc: "Sertifikasi kompetensi global dari Microsoft dengan pencapaian skor 875.",
                    bullets: [
                        "Menguasai formatting dan layout dokumen tingkat lanjut.",
                        "Mampu mengelola struktur dokumen besar secara profesional.",
                        "Efisiensi kerja dengan macro dan automasi fitur bawaan."
                    ],
                    certificateUrl: sertif1
                },
                {
                    period: "2026",
                    title: "Proficiency Test of English (PTESOL)",
                    org: "PTESOL",
                    desc: "Sertifikasi kemahiran berbahasa Inggris dengan skor 500.",
                    bullets: [
                        "Listening Comprehension: Memahami percakapan akademik dan profesional.",
                        "Structure & Written Expression: Tata bahasa dan struktur kalimat standar.",
                        "Reading Comprehension: Mampu menganalisis teks kompleks."
                    ],
                    certificateUrl: "#"
                },
                {
                    period: "2026",
                    title: "Salesforce Talent Accelerator Program 2025",
                    org: "Smartbridge",
                    desc: "Program pelatihan dan sertifikasi pengembangan talenta berbasis Salesforce.",
                    bullets: [
                        "Pemahaman ekosistem CRM Salesforce dan pengelolaannya.",
                        "Konfigurasi dan manajemen data pelanggan secara terpusat.",
                        "Pengembangan alur otomatisasi proses bisnis dengan Salesforce Flow."
                    ],
                    certificateUrl: sertif3
                },
                {
                    period: "2025",
                    title: "Berinovasi dengan AI",
                    org: "Kemenpora",
                    desc: "Sertifikasi pelatihan tingkat nasional terkait penerapan inovasi teknologi kecerdasan buatan.",
                    bullets: [
                        "Pemanfaatan AI generatif untuk produktivitas digital.",
                        "Etika dan penerapan kecerdasan buatan dalam dunia profesional.",
                        "Studi kasus implementasi AI untuk penyelesaian masalah (problem solving)."
                    ],
                    certificateUrl: sertif4
                }
            ]
        },
        contact: {
            chapter: "07",
            title: "Mari Berbincang!",
            subtitle: "Punya ide projek, peluang karir, atau diskusi santai seputar teknologi? Jangan ragu untuk menghubungi saya.",
            infoTitle: "Info Kontak",
            email: "shaqiraima@gmail.com",
            location: "Jl. Jatihandap Gang IV, Bandung",
            availability: "Terbuka untuk peluang Full-Time & Project-Based",
            nameLabel: "Nama",
            namePlaceholder: "Siapa nama kerenmu?",
            emailLabel: "Email",
            emailPlaceholder: "nama@email.com",
            messageLabel: "Pesan",
            messagePlaceholder: "Ceritakan ide atau sapaanmu di sini...",
            send: "Kirim Pesan",
            sending: "Mengirim...",
            success: "Pesan terkirim! Raima akan segera membalas.",
            error: "Yah, gagal terkirim. Coba lagi ya!",
        },
        footer: {
            made: "Dibuat dengan dedikasi oleh Raima Shaqinah Alamsyah",
            rights: "Semua hak dilindungi.",
            backToTop: "Kembali ke Atas",
        },
    },
    en: {
        chapterLabel: "Chapter",
        nav: [
            { id: "about", label: "Profile" },
            { id: "education", label: "Education" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "organization", label: "Organization" },
            { id: "certifications", label: "Certifications" },
            { id: "contact", label: "Contact" },
        ],
        hero: {
            badge: "Fresh Graduate & Tech Enthusiast",
            lines: ["Hi, I'm", "Raima Shaqinah!"],
            subtitle: "Focused on Quality Assurance, Artificial Intelligence, Web & Mobile Development, and Project Management. Always prioritizing precision and top-notch product quality.",
            ctaPrimary: "See My Projects",
            ctaSecondary: "Download CV",
            stats: [
                { value: "8+", label: "Completed Projects" },
                { value: "3.88", label: "GPA" },
                { value: "4", label: "Expertise Areas" },
            ],
            mascotName: "Bibo",
            mascotHint: "Move your mouse, Bibo will follow it!",
            sticker3d: "100% 3D",
        },
        about: {
            chapter: "01",
            title: "Who am I?",
            subtitle: "A quick glimpse into Raima's journey and eagerness to learn.",
            introTitle: "Hello!",
            introText: "I am Raima Shaqinah Alamsyah, a Fresh Graduate in Computer Engineering. I have a strong passion for Quality Assurance, AI, and both web and mobile development. My main strengths lie in my high attention to detail, sharp analytical skills, and a strong process-oriented mindset to guarantee project completeness and quality.",
            photoSticker: "It's me!",
            skillsTitle: "Skills & Technologies",
            funTitle: "Soft Skills",
            funText: "Highly adaptable, meticulous, persistent, and equipped with excellent problem-solving skills. I am also very accustomed to and enjoy working collaboratively in a team environment.",
        },
        education: {
            chapter: "02",
            title: "Education",
            subtitle: "The academic journey that built my logical and scientific foundation.",
            items: [
                {
                    period: "Sep 2022 — Jun 2026",
                    title: "B.Sc. in Computer Engineering",
                    org: "Universitas Pendidikan Indonesia - Jl. Dr. Setiabudi No. 229, Bandung",
                    desc: "Won 1st Place out of 30 in the Best Consultation Project Course through the development of QuantifyIQ, and secured Intellectual Property Rights (HAKI) for the QuantifyIQ Web App. Experienced in embedded systems, intelligent devices, and network and security.",
                    tags: ["GPA 3.88/4.00", "HAKI QuantifyIQ", "1st Place Project"],
                }
            ],
        },
        experience: {
            chapter: "03",
            title: "Work & Internship",
            subtitle: "Where I applied my knowledge and made a real impact.",
            typeLabels: { work: "Work", intern: "Intern" },
            items: [
                {
                    period: "Sep 2025 — Jul 2026",
                    type: "work",
                    title: "Social Media Specialist",
                    org: "PT Blockchain Media Indonesia",
                    desc: "Responsible for designing and producing an average of 3 contents per day for TikTok and Instagram. Increased engagement to 300,000+ and gained 400+ followers through a consistent and relevant content strategy.",
                    tags: ["TikTok", "Instagram", "Content Strategy"],
                },
                {
                    period: "Feb 2025 — Jun 2025",
                    type: "intern",
                    title: "Full Stack Developer",
                    org: "PT. YukMari Cyberlab - Bandung",
                    desc: "Actively involved as a Full Stack Developer in designing and developing interactive web application solutions. Collaborated with the team to ensure performance, security (via Re-CAPTCHA integration), and seamless payment features (Payment Gateway).",
                    tags: ["Web Development", "Team Collaboration", "Problem Solving"],
                },
                {
                    period: "Sep 2025 — Dec 2025",
                    type: "intern",
                    title: "Education Technology Developer",
                    org: "PT Atama Karya Inovasi",
                    desc: "Developed Edurobo, an interactive educational technology product aimed at improving students' learning methods. Collaborated in designing learning materials and ensuring product features function optimally.",
                    tags: ["Edurobo", "EdTech", "Product Dev"],
                }
            ],
        },
        projects: {
            chapter: "04",
            title: "Project Gallery",
            subtitle: "Innovations ranging from academic theses to collaborative team projects.",
            showMore: "Show More",
            featuresLabel: "Key Features",
            galleryLabel: "Documentation",
            roleLabel: "Role",
            yearLabel: "Year",
            demoLabel: "Live Demo",
            repoLabel: "Source Code",
            aboutProject: "About the Project",
        },
        organization: {
            chapter: "05",
            title: "Organization Experience",
            subtitle: "Practicing leadership, communication, and event management.",
            marqueeNames: ["HIMAKOM", "Dies Natalis", "MABIM", "Committees", "Campus Events"],
            items: [
                {
                    period: "Jan 2023 — Jan 2025",
                    title: "Staff of Interest and Talent Education Department",
                    org: "Computer Engineering Student Association (UPI)",
                    desc: "Managed the interests and talents of computer engineering students and served as the person-in-charge for the 2024 Computer Engineering Anniversary event.",
                },
                {
                    period: "Oct 2024 — Nov 2024",
                    title: "Head of Medical and Mental Health Division",
                    org: "Computer Engineering Orientation (MABIM) 2024",
                    desc: "Ensured the physical and mental well-being of 200+ committee members and participants. Organized emergency health training and provided a positive emotional support environment.",
                },
                {
                    period: "Jun 2024",
                    title: "Event Chairman",
                    org: "Computer Engineering Anniversary 2024",
                    desc: "Led the planning and execution of an annual event attended by 200+ people. Coordinated over 60 committee members across divisions to meet targets and schedules.",
                },
                {
                    period: "Sep 2023 — Oct 2023",
                    title: "Head of Consumption Division",
                    org: "Computer Engineering Orientation (MABIM) 2023",
                    desc: "Coordinated the planning and procurement of meals for 180 people, ensuring quality and timeliness of delivery.",
                }
            ],
        },
        certifications: {
            chapter: "06",
            title: "Certifications",
            subtitle: "Validation of national and international standard skills.",
            items: [
                {
                    period: "Jun 2022",
                    title: "Goethe-Zertifikat A2: Fit in Deutsch",
                    org: "Goethe-Institut Indonesien",
                    desc: "German language certification level A2 with a 'Gut' (Good) predicate.",
                    bullets: [
                        "Hören (Listening): Understanding everyday conversations.",
                        "Lesen (Reading): Understanding simple informational texts.",
                        "Schreiben (Writing): Able to write short messages.",
                        "Sprechen (Speaking): Able to communicate basically in person."
                    ],
                    certificateUrl: sertif2
                },
                {
                    period: "2026",
                    title: "Microsoft Office Specialist-Word 2019",
                    org: "Microsoft",
                    desc: "Global competency certification from Microsoft with a score of 875.",
                    bullets: [
                        "Mastered advanced document formatting and layouts.",
                        "Capable of managing large document structures professionally.",
                        "Increased workflow efficiency using built-in automation features."
                    ],
                    certificateUrl: sertif1
                },
                {
                    period: "2026",
                    title: "Proficiency Test of English (PTESOL)",
                    org: "PTESOL",
                    desc: "English proficiency certification with a score of 500.",
                    bullets: [
                        "Listening Comprehension: Understanding academic and professional dialogs.",
                        "Structure & Written Expression: Mastery of standard grammar rules.",
                        "Reading Comprehension: Able to analyze complex written texts."
                    ],
                    certificateUrl: "#"
                },
                {
                    period: "2026",
                    title: "Salesforce Talent Accelerator Program 2025",
                    org: "Smartbridge",
                    desc: "Salesforce-based talent development training and certification program.",
                    bullets: [
                        "Understanding the Salesforce CRM ecosystem and its management.",
                        "Centralized configuration and customer data management.",
                        "Developing business process automation with Salesforce Flow."
                    ],
                    certificateUrl: sertif3
                },
                {
                    period: "2025",
                    title: "Innovating with AI",
                    org: "Ministry of Youth and Sports (Kemenpora)",
                    desc: "National level training certification regarding the application of artificial intelligence tech.",
                    bullets: [
                        "Utilizing generative AI for digital productivity.",
                        "Ethics and application of artificial intelligence in the professional world.",
                        "Case studies of AI implementation for real-world problem solving."
                    ],
                    certificateUrl: sertif4
                }
            ]
        },
        contact: {
            chapter: "07",
            title: "Let's Talk!",
            subtitle: "Have a project idea, a job opening, or just want to chat about tech? Don't hesitate to reach out.",
            infoTitle: "Contact Info",
            email: "shaqiraima@gmail.com",
            phone: "088973379675",
            location: "Jl. Jatihandap Gang IV, Bandung",
            availability: "Open for Full-Time & Project-Based opportunities",
            nameLabel: "Name",
            namePlaceholder: "What's your awesome name?",
            emailLabel: "Email",
            emailPlaceholder: "name@email.com",
            messageLabel: "Message",
            messagePlaceholder: "Tell me your idea or just say hi...",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent! Raima will reply soon.",
            error: "Oops, failed to send. Please try again!",
        },
        footer: {
            made: "Dedicatedly crafted by Raima Shaqinah Alamsyah",
            rights: "All rights reserved.",
            backToTop: "Back to Top",
        },
    },
};
