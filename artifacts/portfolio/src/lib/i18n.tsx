import { createContext, useContext, useState } from "react";

export type Lang = "en" | "tr";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      showcase: "Showcase",
      education: "Education",
    },
    hero: {
      badge: "Available for new opportunities",
      title: "Senior Business Analyst | Banking & Financial Technologies",
      tagline: '"Turning complex systems into clear decisions."',
      downloadCV: "Download CV",
      viewShowcase: "View Showcase",
      location: "Istanbul, Turkey",
    },
    about: {
      heading: "System.about()",
      bio: "Görkem is a Senior Business Analyst with a track record in banking and insurance technologies. He specializes in systems analysis, cross-border payment platforms, and data-driven problem solving — working at the intersection of business needs and technical implementation. He's AI-aware, Python-literate, and relentlessly curious.",
    },
    experience: {
      heading: "Experience",
      jobs: [
        {
          title: "Senior Business Analyst",
          company: "Yapı Kredi Teknoloji via NTT DATA Business Solutions",
          date: "Oct 2024 – Present",
          location: "Istanbul",
          items: [
            "End-to-end systems analysis for international core banking projects (Azerbaijan, Germany, Netherlands)",
            "API and Web Service integration analysis (XML/JSON mapping)",
            "SQL-based data validation and defect root cause analysis",
            "Functional, service, and database testing + UAT coordination",
            "Agile/Scrum delivery across distributed teams",
          ],
        },
        {
          title: "Technical Business Analyst",
          company: "HDI Fibaemeklilik",
          date: "Sep 2022 – Sep 2024",
          location: "Istanbul",
          items: [
            "PL/SQL for data analysis, system updates, and root cause resolution",
            "Translated business needs into functional specs and UI designs",
            "Led test scenarios and UAT; resolved critical system errors within avg 24 hours",
            "Prepared scope requirement docs: functional requirements, non-functional requirements, flow diagrams",
          ],
        },
        {
          title: "Data Science & ML Bootcamp",
          company: "Veri Bilimi Okulu & Miuul",
          date: "Mar 2022 – Sep 2022",
          location: "",
          items: [
            "Python (pandas, numpy, matplotlib, seaborn), SQL, EDA, ML models",
            "CRM analytics: Cohort Analysis, CLTV, RFM segmentation",
            "Recommendation systems: Collaborative Filtering, Hybrid-Based Recommendations",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills Matrix",
      categories: [
        { title: "Data Analysis", skills: ["SQL", "Python (pandas, numpy)", "Microsoft Excel"] },
        { title: "Visualization", skills: ["Power BI", "Tableau", "matplotlib", "seaborn"] },
        { title: "Testing & DB", skills: ["MySQL", "PL/SQL", "SQL Server", "SOAP UI", "Postman"] },
        { title: "Project Tools", skills: ["Jira", "Confluence", "MS Visio", "Figma"] },
        { title: "Soft Skills", skills: ["Analytical Thinking", "Stakeholder Management", "Communication", "Adaptability"] },
      ],
    },
    showcase: {
      heading: "Analyst Showcase",
      subheading: "A demonstration of structural thinking, process mapping, and performance analytics.",
      rca: {
        docId: "DOC-RCA-4091 :: Payment Failure Investigation",
        problemHeading: "Problem Statement",
        problemText: "On Oct 12, 2023, 142 cross-border transactions failed during routing to European correspondent banks, resulting in a 4-hour delay and manual reconciliation overhead.",
        rcaHeading: "Root Cause Tree",
        resolutionHeading: "Resolution & Action",
        steps: [
          { title: "Immediate Fix", desc: "Rolled back mapping config; reprocessed failed queue manually." },
          { title: "Preventive Action", desc: "Added XSD schema validation pre-flight check in integration layer." },
          { title: "Process Update", desc: "Mandatory UAT regression for all XML templates on core updates." },
        ],
      },
      flow: {
        docId: "FLOW-882 :: International Wire Transfer",
        nodes: [
          { step: "Initiation", desc: "User inputs details", highlight: false },
          { step: "Validation", desc: "Format & limits", highlight: false },
          { step: "Compliance", desc: "AML/KYC check", highlight: true },
          { step: "Routing", desc: "Correspondent selection", highlight: false },
          { step: "Settlement", desc: "Ledger update", highlight: false },
          { step: "Notification", desc: "User alert", highlight: false },
        ],
        note: "Compliance Check involves asynchronous API call to screening engine. Designed fallback logic for timeout scenarios to queue for manual review rather than rejecting.",
        noteLabel: "Decision Point Highlight:",
      },
      dashboard: {
        docId: "DASH-04 :: Insurance System Health (Q3)",
        metrics: [
          { value: "99.7%", label: "System Uptime" },
          { value: "18.4h", label: "Avg Resolution" },
          { value: "94.0%", label: "Test Coverage" },
          { value: "98.2%", label: "UAT Approval" },
        ],
        chartTitle: "Monthly Error Volumes",
        trend: "-12% vs Q2",
      },
    },
    education: {
      heading: "Education",
      certHeading: "Certifications",
      degrees: [
        {
          degree: "MSc, Management Information Systems and Engineering",
          school: "Marmara University",
          date: "Feb 2023 – Jun 2024",
          detail: 'Semester project: "The Role of Data Analytics in Insurance Sector Digital Transformation"',
        },
        { degree: "Exchange Student, Computer Science", school: "University of Lodz, Poland", date: "2021 – 2022", detail: "" },
        { degree: "BSc, Management Information Systems", school: "Bilecik Şeyh Edebali University", date: "2018 – 2022", detail: "" },
        { degree: "Associate's, Web Design & Coding", school: "Anadolu University", date: "2019 – 2021", detail: "" },
      ],
      certs: [
        "Generative AI for Business Analysts — LinkedIn Learning",
        "The Non-Technical Skills of Effective Data Scientists — LinkedIn Learning",
        "Introduction to Business Analytics — 365 Data Science",
        "Data Science & ML Bootcamp — Veri Bilimi Okulu",
        "Advanced SQL for Data Scientists — LinkedIn Learning",
        "Foundations of Algorithmic Thinking with Python — LinkedIn Learning",
        "Software Development Life Cycle (SDLC) — LinkedIn Learning",
        "Hands-On Data Science: Sales Dashboard with Tableau — LinkedIn Learning",
        "Storytelling with Data — (certification)",
        "Introduction to SAP BI/BW — LinkedIn Learning",
      ],
    },
    footer: {
      role: "Senior Business Analyst",
      rights: "All rights reserved.",
    },
  },

  tr: {
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      skills: "Beceriler",
      showcase: "Çalışmalar",
      education: "Eğitim",
    },
    hero: {
      badge: "Yeni fırsatlara açık",
      title: "Kıdemli İş Analisti | Bankacılık & Finansal Teknolojiler",
      tagline: '"Karmaşık sistemleri net kararlara dönüştürmek."',
      downloadCV: "CV İndir",
      viewShowcase: "Çalışmaları Gör",
      location: "İstanbul, Türkiye",
    },
    about: {
      heading: "System.hakkımda()",
      bio: "Görkem, bankacılık ve sigorta teknolojilerinde kanıtlanmış bir sicile sahip Kıdemli İş Analisti'dir. Sistem analizi, sınır ötesi ödeme platformları ve veri odaklı problem çözme konularında uzmanlaşmış; iş gereksinimleri ile teknik uygulama arasındaki köprüyü kurarak çalışmaktadır. Yapay zeka farkındalığı yüksek, Python bilen ve öğrenmeye doymayan bir analist olarak tanınmaktadır.",
    },
    experience: {
      heading: "Deneyim",
      jobs: [
        {
          title: "Kıdemli İş Analisti",
          company: "Yapı Kredi Teknoloji — NTT DATA Business Solutions bünyesinde",
          date: "Eki 2024 – Devam ediyor",
          location: "İstanbul",
          items: [
            "Uluslararası çekirdek bankacılık projeleri için uçtan uca sistem analizi (Azerbaycan, Almanya, Hollanda)",
            "API ve Web Servis entegrasyon analizi (XML/JSON eşleştirme)",
            "SQL tabanlı veri doğrulama ve hata kök neden analizi",
            "Fonksiyonel, servis ve veritabanı testi ile UAT koordinasyonu",
            "Dağıtık ekiplerle Agile/Scrum teslimatı",
          ],
        },
        {
          title: "Teknik İş Analisti",
          company: "HDI Fibaemeklilik",
          date: "Eyl 2022 – Eyl 2024",
          location: "İstanbul",
          items: [
            "Veri analizi, sistem güncellemeleri ve kök neden çözümü için PL/SQL kullanımı",
            "İş birimlerinin ihtiyaçlarını fonksiyonel spesifikasyonlara ve UI tasarımlarına dönüştürme",
            "Test senaryoları ve UAT yönetimi; kritik sistem hatalarını ortalama 24 saat içinde çözme",
            "Kapsam gereksinim dokümanları hazırlama: fonksiyonel gereksinimler, fonksiyonel olmayan gereksinimler, akış diyagramları",
          ],
        },
        {
          title: "Veri Bilimi & ML Bootcamp",
          company: "Veri Bilimi Okulu & Miuul",
          date: "Mar 2022 – Eyl 2022",
          location: "",
          items: [
            "Python (pandas, numpy, matplotlib, seaborn), SQL, EDA, makine öğrenmesi modelleri",
            "CRM analitiği: Kohort Analizi, CLTV, RFM segmentasyonu",
            "Öneri sistemleri: İşbirliğine Dayalı Filtreleme, Hibrit Tabanlı Öneriler",
          ],
        },
      ],
    },
    skills: {
      heading: "Beceri Matrisi",
      categories: [
        { title: "Veri Analizi", skills: ["SQL", "Python (pandas, numpy)", "Microsoft Excel"] },
        { title: "Görselleştirme", skills: ["Power BI", "Tableau", "matplotlib", "seaborn"] },
        { title: "Test & Veritabanı", skills: ["MySQL", "PL/SQL", "SQL Server", "SOAP UI", "Postman"] },
        { title: "Proje Araçları", skills: ["Jira", "Confluence", "MS Visio", "Figma"] },
        { title: "Kişisel Beceriler", skills: ["Analitik Düşünce", "Paydaş Yönetimi", "İletişim", "Uyum Yeteneği"] },
      ],
    },
    showcase: {
      heading: "Analist Vitrini",
      subheading: "Yapısal düşünce, süreç haritalama ve performans analitiğinin bir gösterimi.",
      rca: {
        docId: "DOK-KNA-4091 :: Ödeme Hatası Kök Neden Analizi",
        problemHeading: "Problem Tanımı",
        problemText: "12 Ekim 2023'te, Avrupa muhabir bankalarına yönlendirme sırasında 142 sınır ötesi işlem başarısız oldu; bu durum 4 saatlik gecikmeye ve manuel mutabakat yüküne yol açtı.",
        rcaHeading: "Kök Neden Ağacı",
        resolutionHeading: "Çözüm & Aksiyon",
        steps: [
          { title: "Anlık Düzeltme", desc: "Mapping konfigürasyonu geri alındı; başarısız kuyruk manuel olarak yeniden işlendi." },
          { title: "Önleyici Aksiyon", desc: "Entegrasyon katmanına XSD şema doğrulama ön kontrolü eklendi." },
          { title: "Süreç Güncellemesi", desc: "Çekirdek güncellemelerinde tüm XML şablonları için zorunlu UAT regresyon testi." },
        ],
      },
      flow: {
        docId: "AKIŞ-882 :: Uluslararası Havale Transferi",
        nodes: [
          { step: "Başlatma", desc: "Kullanıcı bilgi girer", highlight: false },
          { step: "Doğrulama", desc: "Format & limitler", highlight: false },
          { step: "Uyumluluk", desc: "AML/KYC kontrolü", highlight: true },
          { step: "Yönlendirme", desc: "Muhabir seçimi", highlight: false },
          { step: "Uzlaşma", desc: "Defter güncelleme", highlight: false },
          { step: "Bildirim", desc: "Kullanıcı uyarısı", highlight: false },
        ],
        note: "Uyumluluk Kontrolü, tarama motoruna asenkron API çağrısı içerir. Zaman aşımı senaryoları için işlemi reddetmek yerine manuel inceleme kuyruğuna alacak yedek mantık tasarlandı.",
        noteLabel: "Karar Noktası:",
      },
      dashboard: {
        docId: "PANO-04 :: Sigorta Sistem Sağlığı (Q3)",
        metrics: [
          { value: "99.7%", label: "Sistem Çalışma Süresi" },
          { value: "18.4s", label: "Ort. Çözüm Süresi" },
          { value: "94.0%", label: "Test Kapsamı" },
          { value: "98.2%", label: "UAT Onay Oranı" },
        ],
        chartTitle: "Aylık Hata Hacimleri",
        trend: "Q2'ye göre -%12",
      },
    },
    education: {
      heading: "Eğitim",
      certHeading: "Sertifikalar",
      degrees: [
        {
          degree: "Yüksek Lisans, Yönetim Bilişim Sistemleri ve Mühendisliği",
          school: "Marmara Üniversitesi",
          date: "Şub 2023 – Haz 2024",
          detail: 'Dönem projesi: "Sigorta Sektörünün Dijital Dönüşümünde Veri Analitiği Uygulamalarının Rolü"',
        },
        { degree: "Değişim Öğrencisi, Bilgisayar Bilimleri", school: "University of Lodz, Polonya", date: "2021 – 2022", detail: "" },
        { degree: "Lisans, Yönetim Bilişim Sistemleri", school: "Bilecik Şeyh Edebali Üniversitesi", date: "2018 – 2022", detail: "" },
        { degree: "Önlisans, Web Tasarımı ve Kodlama", school: "Anadolu Üniversitesi", date: "2019 – 2021", detail: "" },
      ],
      certs: [
        "İş Analistleri için Üretken Yapay Zeka — LinkedIn Learning",
        "Etkili Veri Bilimcilerin Teknik Olmayan Becerileri — LinkedIn Learning",
        "İş Analitiğine Giriş — 365 Data Science",
        "Veri Bilimi & ML Bootcamp — Veri Bilimi Okulu",
        "Veri Bilimciler için İleri SQL — LinkedIn Learning",
        "Python ile Algoritmik Düşünce Temelleri — LinkedIn Learning",
        "Yazılım Geliştirme Yaşam Döngüsü (SDLC) — LinkedIn Learning",
        "Uygulamalı Veri Bilimi: Tableau ile Satış Panosu — LinkedIn Learning",
        "Veriyle Hikaye Anlatımı — (sertifika)",
        "SAP BI/BW'ye Giriş — LinkedIn Learning",
      ],
    },
    footer: {
      role: "Kıdemli İş Analisti",
      rights: "Tüm hakları saklıdır.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
