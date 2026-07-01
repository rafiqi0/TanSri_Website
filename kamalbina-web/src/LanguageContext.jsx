import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  en: {
    // Navbar
    navAbout: 'About',
    navProjects: 'Projects',
    navCredentials: 'Credentials',
    navContact: 'Contact',

    // Hero
    heroTagline: 'The Name That Builds Confidence',
    heroSubtitle: 'CIDB Grade G7 Contractor delivering high-impact construction and infrastructure projects across Malaysia since 1984.',
    heroCta1: 'Our Projects',
    heroCta2: 'Contact Us',

    // About
    aboutLabel: 'About Us',
    aboutTitle: 'Building Malaysia\'s Future Since 1984',
    aboutDescription: 'Kamalbina Sdn. Bhd. is a CIDB Grade G7 contractor delivering high-quality construction and infrastructure projects across Malaysia, backed by over 40 years of industry experience. We focus on delivering reliable, efficient, and high-quality construction solutions that meet client expectations and contribute to long-term development.',
    stat1Value: '40+',
    stat1Label: 'Years of Experience',
    stat2Value: '50+',
    stat2Label: 'Completed Projects',
    stat3Value: 'G7',
    stat3Label: 'CIDB Grade',
    stat4Value: '3★',
    stat4Label: 'CIDB SCORE Rating',

    // Foreword
    forewordLabel: 'Managing Director\'s Message',
    forewordTitle: 'Built on Experience. Driven by Excellence.',
    forewordName: 'Tan Sri Kamarulbahrain bin Zainuddin',
    forewordRole: 'Managing Director',
    forewordP1: 'Since our establishment in 1984, Kamalbina Sdn. Bhd. has grown steadily to become a trusted name in Malaysia\'s construction industry. What began as a modest operation has evolved into a CIDB Grade G7 contractor with the capability to undertake projects of unlimited value.',
    forewordP2: 'At Kamalbina, we believe that strong fundamentals are the key to sustainable success. Our commitment to quality, safety, and disciplined project management is reinforced through our ISO 9001:2015 certification and CIDB SCORE rating.',
    forewordP3: 'We look forward to building stronger partnerships and delivering greater milestones in the years ahead.',

    // Services
    servicesLabel: 'Our Services',
    servicesTitle: 'Core Capabilities',
    servicesSubtitle: 'Delivering excellence across multiple construction disciplines with proven expertise and technical competence.',
    service1Title: 'Building Construction',
    service1Desc: 'High-rise buildings, institutional facilities, hospitals, and commercial developments delivered to the highest quality standards.',
    service2Title: 'Civil Engineering',
    service2Desc: 'Road construction, earthworks, drainage systems, and civil infrastructure projects executed with precision.',
    service3Title: 'Infrastructure Works',
    service3Desc: 'Large-scale infrastructure development including utilities, public facilities, and government sector projects.',
    service4Title: 'Design & Build',
    service4Desc: 'End-to-end project delivery from concept design through construction, offering streamlined project execution.',

    // Projects
    projectsLabel: 'Our Projects',
    projectsTitle: 'Selected Project Experience',
    projectsSubtitle: 'Delivering high-quality construction and infrastructure projects with excellence and integrity across Malaysia.',
    activeLabel: 'Active Projects',
    completedLabel: 'Completed Projects',
    projectType: 'Project Type',
    location: 'Location',
    yearCompleted: 'Year Completed',
    contractValue: 'Contract Value',
    client: 'Client',
    contractPeriod: 'Contract Period',
    scopeOfWork: 'Scope of Work',
    activeProjectsTotal: 'Total Active Contract Value',

    // Project Data
    project1Name: 'Blok Tambahan Hospital Seri Manjung',
    project1Type: 'Hospital (Design & Build)',
    project2Name: 'Hospital Raja Permaisuri Bainun, Ipoh',
    project2Type: 'Hospital',
    project3Name: 'Bangunan Bunker & Stor TLDM, Lumut',
    project3Type: 'Military Bunker & Store',
    project4Name: 'Pusat Latihan Teknologi Tinggi (ADTEC), Taiping',
    project4Type: 'Higher Institution',

    activeProject1Name: 'Pembinaan Bangunan Stor Farmasi Logistik dan Farmasi Steril Hospital Taiping, Perak',
    activeProject1Scope: 'Building and Infrastructure Construction',
    activeProject2Name: 'Pembangunan Baharu Pejabat Pendidikan Daerah Barat Daya, Pulau Pinang',
    activeProject2Scope: 'Building and Infrastructure Construction',

    // Credentials
    credentialsLabel: 'Credentials',
    credentialsTitle: 'Industry Recognition',
    credentialsSubtitle: 'Our certifications and recognitions reflect our commitment to quality, compliance, safety and continuous improvement.',
    cidbTitle: 'CIDB G7 Contractor',
    cidbDesc: 'Unlimited tendering capacity for projects of unlimited value.',
    isoTitle: 'ISO 9001:2015',
    isoDesc: 'Quality Management System ensuring consistent quality, process efficiency and customer satisfaction.',
    scoreTitle: 'CIDB SCORE 3-Star',
    scoreDesc: 'Recognised performance in construction capability and project management.',

    // Timeline
    timelineLabel: 'Our History',
    timelineTitle: 'Building a Legacy Since 1984',
    timelineSubtitle: 'Over four decades of experience, evolving from a local contractor to a trusted construction partner.',
    year1984: 'Establishment',
    year1984Desc: 'On 20 November 1984, Kamalbina Sdn. Bhd. was officially established, marking the beginning of our corporate identity.',
    year1991: 'PKK Registration',
    year1991Desc: 'Successfully registered under Pusat Khidmat Kontraktor (PKK), beginning our active involvement in government tendering.',
    year1998: 'Grade G7 Achieved',
    year1998Desc: 'Registered as a CIDB Grade G7 contractor, enabling us to undertake projects of unlimited value.',
    year2003: 'ISO Certified',
    year2003Desc: 'Achieved ISO 9001 certification, reinforcing our commitment to quality management and continuous improvement.',
    year2012: 'SCORE 3-Star',
    year2012Desc: 'Awarded CIDB SCORE 3-Star Rating, recognising strong performance in management capability and project execution.',
    yearToday: 'Continuous Excellence',
    yearTodayDesc: 'Continuing to deliver high-quality construction projects across Malaysia, upholding our core values.',

    // Contact
    contactLabel: 'Get In Touch',
    contactTitle: 'Build With Confidence',
    contactSubtitle: 'Partner with Kamalbina for reliable, high-quality construction solutions backed by proven experience.',
    contactAddress: 'Head Office',
    contactAddressValue: 'Level 5, Menara Kamalbina,\nJalan Maharajalela,\n34000 Taiping, Perak, Malaysia',
    contactPhone: 'Telephone',
    contactEmail: 'Email',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formSubject: 'Subject',
    formMessage: 'Your Message',
    formSubmit: 'Send Message',

    // Footer
    footerTagline: 'The Name That Builds Confidence',
    footerDesc: 'CIDB Grade G7 Contractor delivering high-quality construction and infrastructure projects across Malaysia since 1984.',
    footerQuickLinks: 'Quick Links',
    footerContact: 'Contact Info',
    footerCopyright: '© 2024 Kamalbina Sdn. Bhd. All rights reserved.',

    // Values
    integrity: 'Integrity',
    integrityDesc: 'We conduct our business with honesty and transparency.',
    quality: 'Quality',
    qualityDesc: 'We deliver work of the highest standards with attention to detail.',
    safety: 'Safety',
    safetyDesc: 'We prioritize the well-being of our people and the public.',
    reliability: 'Reliability',
    reliabilityDesc: 'A partner our clients can count on, every step of the way.',
  },
  bm: {
    // Navbar
    navAbout: 'Tentang Kami',
    navProjects: 'Projek',
    navCredentials: 'Kelayakan',
    navContact: 'Hubungi',

    // Hero
    heroTagline: 'Nama Yang Membina Keyakinan',
    heroSubtitle: 'Kontraktor Gred G7 CIDB yang menyampaikan projek pembinaan dan infrastruktur berimpak tinggi di seluruh Malaysia sejak 1984.',
    heroCta1: 'Projek Kami',
    heroCta2: 'Hubungi Kami',

    // About
    aboutLabel: 'Tentang Kami',
    aboutTitle: 'Membina Masa Depan Malaysia Sejak 1984',
    aboutDescription: 'Kamalbina Sdn. Bhd. adalah kontraktor Gred G7 CIDB yang menyampaikan projek pembinaan dan infrastruktur berkualiti tinggi di seluruh Malaysia, disokong oleh pengalaman industri melebihi 40 tahun. Kami memberi tumpuan kepada penyampaian penyelesaian pembinaan yang boleh dipercayai, cekap dan berkualiti tinggi.',
    stat1Value: '40+',
    stat1Label: 'Tahun Pengalaman',
    stat2Value: '50+',
    stat2Label: 'Projek Siap',
    stat3Value: 'G7',
    stat3Label: 'Gred CIDB',
    stat4Value: '3★',
    stat4Label: 'Penilaian CIDB SCORE',

    // Foreword
    forewordLabel: 'Perutusan Pengarah Urusan',
    forewordTitle: 'Dibina Atas Pengalaman. Didorong Oleh Kecemerlangan.',
    forewordName: 'Tan Sri Kamarulbahrain bin Zainuddin',
    forewordRole: 'Pengarah Urusan',
    forewordP1: 'Sejak penubuhan kami pada tahun 1984, Kamalbina Sdn. Bhd. telah berkembang dengan mantap untuk menjadi nama yang dipercayai dalam industri pembinaan Malaysia. Apa yang bermula sebagai operasi sederhana telah berkembang menjadi kontraktor Gred G7 CIDB dengan keupayaan untuk menjalankan projek bernilai tanpa had.',
    forewordP2: 'Di Kamalbina, kami percaya bahawa asas yang kukuh adalah kunci kepada kejayaan yang mampan. Komitmen kami terhadap kualiti, keselamatan, dan pengurusan projek yang berdisiplin diperkukuh melalui pensijilan ISO 9001:2015.',
    forewordP3: 'Kami berharap dapat membina perkongsian yang lebih kukuh dan menyampaikan pencapaian yang lebih besar pada masa hadapan.',

    // Services
    servicesLabel: 'Perkhidmatan Kami',
    servicesTitle: 'Keupayaan Teras',
    servicesSubtitle: 'Menyampaikan kecemerlangan merentasi pelbagai disiplin pembinaan dengan kepakaran dan kecekapan teknikal yang terbukti.',
    service1Title: 'Pembinaan Bangunan',
    service1Desc: 'Bangunan tinggi, kemudahan institusi, hospital, dan pembangunan komersial yang disampaikan mengikut piawaian kualiti tertinggi.',
    service2Title: 'Kejuruteraan Awam',
    service2Desc: 'Pembinaan jalan raya, kerja tanah, sistem saliran, dan projek infrastruktur awam yang dilaksanakan dengan ketepatan.',
    service3Title: 'Kerja Infrastruktur',
    service3Desc: 'Pembangunan infrastruktur berskala besar termasuk utiliti, kemudahan awam, dan projek sektor kerajaan.',
    service4Title: 'Reka & Bina',
    service4Desc: 'Penyampaian projek hujung ke hujung dari reka bentuk konsep hingga pembinaan, menawarkan pelaksanaan projek yang diperkemas.',

    // Projects
    projectsLabel: 'Projek Kami',
    projectsTitle: 'Pengalaman Projek Terpilih',
    projectsSubtitle: 'Menyampaikan projek pembinaan dan infrastruktur berkualiti tinggi dengan kecemerlangan dan integriti di seluruh Malaysia.',
    activeLabel: 'Projek Aktif',
    completedLabel: 'Projek Siap',
    projectType: 'Jenis Projek',
    location: 'Lokasi',
    yearCompleted: 'Tahun Siap',
    contractValue: 'Nilai Kontrak',
    client: 'Pelanggan',
    contractPeriod: 'Tempoh Kontrak',
    scopeOfWork: 'Skop Kerja',
    activeProjectsTotal: 'Jumlah Nilai Kontrak Aktif',

    project1Name: 'Blok Tambahan Hospital Seri Manjung',
    project1Type: 'Hospital (Reka & Bina)',
    project2Name: 'Hospital Raja Permaisuri Bainun, Ipoh',
    project2Type: 'Hospital',
    project3Name: 'Bangunan Bunker & Stor TLDM, Lumut',
    project3Type: 'Bunker Tentera & Stor',
    project4Name: 'Pusat Latihan Teknologi Tinggi (ADTEC), Taiping',
    project4Type: 'Institusi Pengajian Tinggi',

    activeProject1Name: 'Pembinaan Bangunan Stor Farmasi Logistik dan Farmasi Steril Hospital Taiping, Perak',
    activeProject1Scope: 'Pembinaan Bangunan dan Infrastruktur',
    activeProject2Name: 'Pembangunan Baharu Pejabat Pendidikan Daerah Barat Daya, Pulau Pinang',
    activeProject2Scope: 'Pembinaan Bangunan dan Infrastruktur',

    // Credentials
    credentialsLabel: 'Kelayakan',
    credentialsTitle: 'Pengiktirafan Industri',
    credentialsSubtitle: 'Pensijilan dan pengiktirafan kami mencerminkan komitmen kami terhadap kualiti, pematuhan, keselamatan dan penambahbaikan berterusan.',
    cidbTitle: 'Kontraktor CIDB G7',
    cidbDesc: 'Kapasiti tender tanpa had untuk projek bernilai tanpa had.',
    isoTitle: 'ISO 9001:2015',
    isoDesc: 'Sistem Pengurusan Kualiti yang memastikan kualiti konsisten, kecekapan proses dan kepuasan pelanggan.',
    scoreTitle: 'CIDB SCORE 3-Bintang',
    scoreDesc: 'Prestasi yang diiktiraf dalam keupayaan pembinaan dan pengurusan projek.',

    // Timeline
    timelineLabel: 'Sejarah Kami',
    timelineTitle: 'Membina Warisan Sejak 1984',
    timelineSubtitle: 'Lebih empat dekad pengalaman, berkembang daripada kontraktor tempatan kepada rakan pembinaan yang dipercayai.',
    year1984: 'Penubuhan',
    year1984Desc: 'Pada 20 November 1984, Kamalbina Sdn. Bhd. ditubuhkan secara rasmi, menandakan permulaan identiti korporat kami.',
    year1991: 'Pendaftaran PKK',
    year1991Desc: 'Berjaya mendaftar di bawah Pusat Khidmat Kontraktor (PKK), memulakan penglibatan aktif dalam tender kerajaan.',
    year1998: 'Gred G7 Dicapai',
    year1998Desc: 'Didaftarkan sebagai kontraktor Gred G7 CIDB, membolehkan kami menjalankan projek bernilai tanpa had.',
    year2003: 'Pensijilan ISO',
    year2003Desc: 'Mencapai pensijilan ISO 9001, mengukuhkan komitmen kami terhadap pengurusan kualiti dan penambahbaikan berterusan.',
    year2012: 'SCORE 3-Bintang',
    year2012Desc: 'Dianugerahkan Penarafan CIDB SCORE 3-Bintang, mengiktiraf prestasi kukuh dalam keupayaan pengurusan dan pelaksanaan projek.',
    yearToday: 'Kecemerlangan Berterusan',
    yearTodayDesc: 'Terus menyampaikan projek pembinaan berkualiti tinggi di seluruh Malaysia, menegakkan nilai teras kami.',

    // Contact
    contactLabel: 'Hubungi Kami',
    contactTitle: 'Bina Dengan Keyakinan',
    contactSubtitle: 'Bekerjasama dengan Kamalbina untuk penyelesaian pembinaan berkualiti tinggi yang boleh dipercayai, disokong oleh pengalaman yang terbukti.',
    contactAddress: 'Ibu Pejabat',
    contactAddressValue: 'Tingkat 5, Menara Kamalbina,\nJalan Maharajalela,\n34000 Taiping, Perak, Malaysia',
    contactPhone: 'Telefon',
    contactEmail: 'Emel',
    formName: 'Nama Penuh',
    formEmail: 'Alamat Emel',
    formSubject: 'Subjek',
    formMessage: 'Mesej Anda',
    formSubmit: 'Hantar Mesej',

    // Footer
    footerTagline: 'Nama Yang Membina Keyakinan',
    footerDesc: 'Kontraktor Gred G7 CIDB yang menyampaikan projek pembinaan dan infrastruktur berkualiti tinggi di seluruh Malaysia sejak 1984.',
    footerQuickLinks: 'Pautan Pantas',
    footerContact: 'Maklumat Hubungan',
    footerCopyright: '© 2024 Kamalbina Sdn. Bhd. Hakcipta terpelihara.',

    // Values
    integrity: 'Integriti',
    integrityDesc: 'Kami menjalankan perniagaan dengan kejujuran dan ketelusan.',
    quality: 'Kualiti',
    qualityDesc: 'Kami menyampaikan kerja berstandard tertinggi dengan perhatian terhadap butiran.',
    safety: 'Keselamatan',
    safetyDesc: 'Kami mengutamakan kesejahteraan pekerja dan orang awam.',
    reliability: 'Kebolehpercayaan',
    reliabilityDesc: 'Rakan yang boleh diharap oleh pelanggan kami, setiap langkah.',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = useCallback(
    (key) => translations[lang]?.[key] || translations.en[key] || key,
    [lang]
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'bm' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
