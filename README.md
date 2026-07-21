# Portofolio — Muhammad Yusra

Website portofolio dinamis dibangun dengan React, Vite, Tailwind CSS, dan Framer Motion.

## Fitur
- Intro animasi "boot sequence" bertema terminal yang menampilkan nama Muhammad Yusra
- Desain bertema "system architecture / blueprint" (bukan template generik)
- Avatar monogram custom
- Panel bawah (Console Drawer) yang bisa **ditarik/drag** untuk menampilkan info singkat, avatar, dan kontak cepat
- Fully responsive (mobile, tablet, desktop)
- Section: Hero, About, Skills, Projects, Contact, Footer

## Struktur folder
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Intro.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Avatar.jsx
│   └── ConsoleDrawer.jsx
├── animations/
├── hooks/
│   └── useLockBodyScroll.js
├── assets/
├── data/
│   └── profile.js
├── pages/
│   └── Home.jsx
└── App.jsx
```

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk produksi

```bash
npm run build
npm run preview
```

## Kustomisasi cepat
- Ubah data profil, skill, dan proyek di `src/data/profile.js`
- Ubah warna/tipografi di `tailwind.config.js`
- Ganti avatar monogram di `src/components/Avatar.jsx` dengan foto asli jika diinginkan (letakkan file gambar di `src/assets/` lalu ganti tag `<svg>` dengan `<img src={...} />`)
