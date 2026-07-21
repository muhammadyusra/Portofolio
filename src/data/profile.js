import seminarMandiri from "../assets/certificates/seminar bank mandiri.jpg";
import seminarHimareka from "../assets/certificates/seminar-himareka.jpg";
import seminarInternasional1 from "../assets/certificates/seminar-internasional-1.jpg";
import desainDigital from "../assets/certificates/seminar penulisan jurnal.jpg";
export const profile = {
  name: "Muhammad Yusra",

  role: "Software Engineering Student",

  tagline:
    "Full-Stack Developer & Data Engineering Enthusiast",

  institution:
    "Institut Teknologi dan Bisnis Indonesia",

  level:
    "S1 — Semester 6",

  status:
    "Terbuka untuk magang & proyek kolaboratif",

  location:
    "Indonesia",


  bio: [
    "Mahasiswa Rekayasa Perangkat Lunak yang berfokus pada Full-Stack Development, Data Engineering, dan pengembangan sistem berbasis teknologi modern.",

    "Terbiasa membangun aplikasi web, melakukan pengolahan data, serta membuat solusi digital yang terstruktur dan mudah dikembangkan.",

    "Aktif mengembangkan kemampuan teknis melalui proyek personal, riset akademik, dan eksplorasi teknologi baru untuk mempersiapkan diri di industri software engineering.",
  ],


  email:
    "muhammadyusra1102@gmail.com",


  socials: {
    github:
      "https://github.com/muhammadyusra",

    linkedin:
      "https://linkedin.com/in/muhammadyusra",

    instagram:
      "https://www.instagram.com/yuraa.kk",
  },
};





export const skills = [

  {
    group:
      "Bahasa & Framework",

    items: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Python",
    ],
  },


  {
    group:
      "Data & Analisis",

    items: [
      "Data Analysis",
      "Pandas",
      "BeautifulSoup",
      "NLP",
      "Power BI",
      "Microsoft Excel",
    ],
  },


  {
    group:
      "Tools & Kolaborasi",

    items: [
      "GitHub",
      "Git",
      "REST API",
      "Agile / Scrum",
      "Microsoft Office",
    ],
  },

];





export const projects = [

  {
    id:
      "p1",

    name:
      "personal-portfolio",

    title:
      "Website Portofolio Pribadi",


    description:
      "Membangun website portofolio responsif untuk menampilkan profil, keterampilan, pengalaman akademik, serta dokumentasi proyek dengan desain modern dan interaktif.",


    stack: [
      "HTML",
      "CSS",
      "Responsive Design",
    ],


    status:
      "completed",


    year:
      "2026",


    github:
      "https://github.com/muhammadyusra",


    demo:
      "https://muhammadyusra.my.id",
  },





  {
    id:
      "p2",


    name:
      "text-web-mining",


    title:
      "Web Scraping Python",


    description:
      "Mengembangkan sistem web scraping menggunakan Python untuk mengambil data dari berbagai website, melakukan proses cleaning, serta menyimpan hasil dalam bentuk dataset.",


    stack: [
      "Python",
      "BeautifulSoup",
      "Pandas",
    ],


    status:
      "completed",


    year:
      "2026",


    github:
      "https://github.com/muhammadyusra/Text-dan-Web-Mining",


    demo:
      "",
  },





  {
    id:
      "p3",


    name:
      "business-intelligence",


    title:
      "Dashboard Analisis Penjualan Power BI",


    description:
      "Membuat dashboard Business Intelligence untuk mengolah data transaksi penjualan menjadi visualisasi informasi yang membantu proses analisis dan pengambilan keputusan.",


    stack: [
      "Power BI",
      "Excel",
      "Data Analysis",
    ],


    status:
      "completed",


    year:
      "2026",


    github:
      "https://github.com/muhammadyusra/Business-Intelligence",


    demo:
      "",
  },

];

export const certificates = [
  {
    id: "c1",
    title: "Seminar Bank Mandiri",
    organizer: "Bank Mandiri",
    year: "2026",
    description:
      "Mengikuti seminar yang membahas wawasan industri, teknologi, dan pengembangan profesional.",
    image: seminarMandiri,
  },


  {
    id: "c2",
    title: "Seminar HIMAREKA",
    organizer: "HIMAREKA",
    year: "2026",
    description:
      "Mengikuti seminar organisasi mahasiswa Rekayasa Perangkat Lunak.",
    image: seminarHimareka,
  },


  {
    id: "c3",
    title: "Seminar Internasional",
    organizer: "International Seminar",
    year: "2026",
    description:
      "Mengikuti seminar internasional mengenai perkembangan teknologi dan inovasi digital.",
    image: seminarInternasional1,
  },


  {
    id: "c4",
    title: "Seminar Penulisan Jurnal",
    organizer: "Nama Penyelenggara",
    year: "2025",
    description:
      "Mengikuti seminar penulisan jurnal untuk meningkatkan pemahaman mengenai penyusunan karya ilmiah dan publikasi akademik.",
    image: desainDigital,
  },
];