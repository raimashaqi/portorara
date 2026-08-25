from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)
from reportlab.lib.styles import ParagraphStyle

INK = HexColor("#1E1E24")
BLUE = HexColor("#BDE0FE")
PINK = HexColor("#FFAFCC")
SOFT = HexColor("#F8FBFF")
GRAY = HexColor("#55555F")

OUT = "/app/frontend/public/CV-Nara.pdf"

name_style = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=INK)
role_style = ParagraphStyle("role", fontName="Helvetica", fontSize=10.5, leading=14, textColor=INK)
contact_style = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=12, textColor=GRAY)
h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=INK, spaceBefore=12, spaceAfter=3)
item_title = ParagraphStyle("itemTitle", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=INK)
meta = ParagraphStyle("meta", fontName="Helvetica-Bold", fontSize=8.5, leading=12, textColor=GRAY, alignment=2)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=9, leading=12.5, textColor=INK)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=8, bulletIndent=0)

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=16 * mm, rightMargin=16 * mm, topMargin=14 * mm, bottomMargin=14 * mm,
    title="CV - Nara", author="Nara",
)

story = []

header = Table(
    [[
        Paragraph("NARA", name_style),
        Paragraph("Creative Developer", role_style),
        Paragraph("Web & Mobile · AI Development · Technical Writing · Quality Assurance", role_style),
        Spacer(1, 3),
        Paragraph("hello@nara.dev &nbsp;|&nbsp; +62 812-3456-7890 &nbsp;|&nbsp; Jakarta, Indonesia &nbsp;|&nbsp; nara.dev", contact_style),
    ]],
    colWidths=[178 * mm],
)
header.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), BLUE),
    ("BOX", (0, 0), (-1, -1), 1.6, INK),
    ("LEFTPADDING", (0, 0), (-1, -1), 14),
    ("RIGHTPADDING", (0, 0), (-1, -1), 14),
    ("TOPPADDING", (0, 0), (-1, -1), 12),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
]))
story.append(header)
story.append(Spacer(1, 6))


def section(title):
    story.append(Paragraph(title, h2))
    story.append(HRFlowable(width="100%", thickness=2, color=PINK, spaceAfter=5))


def item(title, org, period, desc):
    row = Table(
        [[Paragraph(f"{title} — <font color='#55555F'>{org}</font>", item_title), Paragraph(period, meta)]],
        colWidths=[128 * mm, 50 * mm],
    )
    row.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(row)
    story.append(Paragraph(desc, body))
    story.append(Spacer(1, 4))


section("PROFIL SINGKAT")
story.append(Paragraph(
    "Lulusan Informatika yang percaya teknologi harus fun dan bermanfaat. Berpengalaman membangun "
    "web & aplikasi mobile, melatih model AI, menulis dokumentasi teknis yang enak dibaca, dan "
    "memastikan produk bebas bug lewat QA. Empat bidang, satu misi: produk digital yang bikin orang senyum.",
    body,
))

section("PENGALAMAN KERJA & INTERNSHIP")
item("Frontend Developer", "PT Kreativa Digital", "Jun 2024 — Sekarang",
     "Membangun design system yang dipakai 4 produk, memangkas waktu development fitur baru 30%, dan menaikkan skor Lighthouse dari 60 ke 95+.")
item("AI Engineer Intern", "Startup Ceria AI", "Jan — Jun 2024",
     "Melatih model klasifikasi teks berbahasa Indonesia dan membangun pipeline data yang memproses 1 juta+ dokumen per minggu.")
item("QA Engineer Intern", "Fintech Kilat", "Jul — Des 2023",
     "Menulis 200+ test case dan mengotomasi pengujian E2E alur pembayaran dengan Playwright, menurunkan bug produksi 40%.")

section("PENDIDIKAN")
item("S1 Teknik Informatika (IPK 3.8/4.0)", "Universitas Nusantara Ceria", "2021 — 2025",
     "Fokus pada rekayasa perangkat lunak dan kecerdasan buatan. Asisten dosen mata kuliah Pemrograman Web, finalis hackathon nasional.")
item("Bootcamp Full-Stack Development", "Dicoding Indonesia", "2023",
     "Menyelesaikan learning path Front-End dan Back-End Expert dengan projek akhir terbaik di kelas.")

section("PROJEK PILIHAN")
item("KulinerKita", "Full-Stack Web App", "2024",
     "Platform pesan-antar makanan lokal dengan rekomendasi personal, pelacakan real-time, dan dashboard penjual. React, Node.js, MongoDB.")
item("CeriaBot", "AI Development", "2024",
     "Chatbot layanan pelanggan berbahasa Indonesia berbasis LLM + RAG, terintegrasi WhatsApp dengan eskalasi otomatis ke agen.")
item("Dokumentasi API PayFast", "Technical Writing", "2024",
     "Dokumentasi 40+ endpoint REST API dengan contoh kode multi-bahasa, katalog error code, dan quickstart interaktif.")
item("AutoTest Suite", "Quality Assurance", "2024",
     "Framework otomasi E2E 200+ skenario dengan Playwright yang berjalan di CI setiap merge, coverage alur kritikal 85%.")

section("PENGALAMAN ORGANISASI")
item("Ketua Divisi Teknologi", "HIMTI — Himpunan Mahasiswa TI", "2023 — 2024",
     "Memimpin 12 anggota, mengadakan 5 workshop coding untuk 300+ peserta, dan merilis website himpunan pertama.")
item("Core Team", "Google Developer Student Club", "2022 — 2023",
     "Mengajar sesi Flutter dan Firebase untuk mahasiswa lintas jurusan, mentor program Study Jam.")

section("KEAHLIAN")
story.append(Paragraph(
    "<b>Development:</b> React, Next.js, Flutter, Node.js, FastAPI, MongoDB, Tailwind<br/>"
    "<b>AI/Data:</b> Python, TensorFlow, NLP, RAG, LLM Integration<br/>"
    "<b>QA:</b> Playwright, k6, Test Case Design, Regression & Performance Testing<br/>"
    "<b>Technical Writing:</b> Docusaurus, OpenAPI, GitBook, Information Architecture, Mermaid",
    body,
))

doc.build(story)
print("CV generated:", OUT)
