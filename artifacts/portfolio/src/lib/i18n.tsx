import { createContext, useContext, useState } from "react";

export type Lang = "en" | "tr";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      highlights: "Work Highlights",
      showcase: "Showcase",
      education: "Education",
      beyondcv: "Beyond the CV",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new opportunities",
      name: "Görkem Köroğlu",
      title: "Senior Business Analyst",
      subtitle: "Banking & Financial Technologies",
      tagline: "Bridging business needs and technical execution — across core banking, integrations, and cross-border payment flows.",
      downloadCV: "Download CV",
      viewShowcase: "View Showcase",
      contact: "Get in Touch",
      chips: [
        "Core Banking",
        "Cross-Border Payments",
        "API / Web Services",
        "SQL & Data Validation",
        "UAT & Functional Testing",
        "Agile Delivery",
      ],
      location: "Istanbul, Turkey",
    },
    about: {
      heading: "About",
      label: "Who I am",
      intro: "I'm a Senior Business Analyst with hands-on experience in banking and insurance technologies — working where business complexity meets technical implementation.",
      description: "I specialize in turning ambiguous requirements into structured, actionable specifications. Whether it's mapping cross-border payment flows, validating API behaviors, or coordinating UAT across distributed teams, I bring clarity to the spaces where business and technology intersect.",
      bullets: [
        "End-to-end systems analysis across core banking and insurance platforms",
        "API and Web Service integration analysis — XML/JSON payload mapping",
        "SQL-based data validation and root cause investigation",
        "Functional, service, and database test design + UAT coordination",
        "Bridging business units and technical teams with structured communication",
        "Agile/Scrum delivery with cross-functional and international teams",
      ],
      howIWork: {
        heading: "How I work",
        items: [
          { title: "Structured thinking", desc: "I break complex problems into layers before jumping to solutions." },
          { title: "Documentation first", desc: "Clear specs reduce back-and-forth. I write with precision and purpose." },
          { title: "Test mindset built in", desc: "I think about validation before implementation is even complete." },
          { title: "Business + technical fluency", desc: "I can read API docs and then explain the impact to a business owner." },
        ],
      },
    },
    experience: {
      heading: "Experience",
      jobs: [
        {
          title: "Senior Business Analyst",
          company: "Yapı Kredi Teknoloji",
          companyNote: "via NTT DATA Business Solutions",
          date: "Oct 2024 – Present",
          location: "Istanbul",
          summary: "Working on international core banking projects — analyzing systems, integrations, and payment flows for banks in Azerbaijan, Germany, and the Netherlands.",
          items: [
            "End-to-end systems analysis for international core banking implementations",
            "API and Web Service integration analysis — XML/JSON mapping and payload validation",
            "SQL-based data validation, defect root cause analysis, and cross-environment testing",
            "Functional, service, and database test design; UAT planning and coordination",
            "Requirement documentation, Jira/Qmetry management, and sprint delivery",
            "Cross-border payment flows: SWIFT/SEPA message structures, inquiry and status logic",
          ],
          tags: ["Core Banking", "SWIFT / SEPA", "API Integration", "SQL", "UAT", "Agile", "Functional Analysis"],
        },
        {
          title: "Technical Business Analyst",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Sep 2022 – Sep 2024",
          location: "Istanbul",
          summary: "Translated business needs into functional specifications and drove test execution across insurance system workflows.",
          items: [
            "PL/SQL-based data analysis, system verification, and root cause resolution",
            "Functional requirement documents, flow diagrams, and UI specification design",
            "Led test scenarios and coordinated UAT; resolved critical system errors within avg. 24 hours",
            "Analyzed complex insurance workflows and proposed systematic improvements",
            "Coordinated between business stakeholders and development teams across multiple initiatives",
          ],
          tags: ["Insurance Systems", "PL/SQL", "Functional Specs", "UAT", "Root Cause Analysis", "Process Design"],
        },
        {
          title: "Data Science & ML Program",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analytical Foundation",
          date: "Mar – Sep 2022",
          location: "",
          summary: "Developed analytical foundations in Python, SQL, machine learning, and CRM analytics — now directly applied in data-driven BA work.",
          items: [
            "Python (pandas, numpy, matplotlib, seaborn), SQL, EDA, and ML model fundamentals",
            "CRM analytics: Cohort Analysis, CLTV, RFM segmentation",
            "Recommendation systems: Collaborative Filtering and Hybrid approaches",
          ],
          tags: ["Python", "SQL", "ML Fundamentals", "CRM Analytics", "EDA"],
        },
      ],
    },
    skills: {
      heading: "Skills",
      label: "What I bring to the table",
      categories: [
        {
          title: "Analysis & Requirements",
          skills: ["Business Analysis", "Functional Analysis", "Systems Analysis", "Requirements Gathering", "Flow Design", "Process Improvement"],
        },
        {
          title: "Technical Integration & Data",
          skills: ["API / Web Services", "XML / JSON Mapping", "SQL", "PL/SQL", "Data Validation", "Root Cause Analysis"],
        },
        {
          title: "Testing & Delivery",
          skills: ["Functional Testing", "Service Testing", "Database Testing", "UAT Coordination", "Regression Thinking", "Defect Tracking"],
        },
        {
          title: "Domain Knowledge",
          skills: ["Core Banking", "Cross-Border Payments", "SWIFT / SEPA", "Financial Systems", "Insurance Technologies"],
        },
        {
          title: "Tools",
          skills: ["Jira", "Confluence", "Qmetry", "Postman", "Swagger", "MS Visio", "Figma", "SQL Server"],
        },
        {
          title: "Strengths",
          skills: ["Analytical Thinking", "Structured Communication", "Detail Management", "Business–Technical Bridge", "Adaptability"],
        },
      ],
    },
    highlights: {
      heading: "Work Highlights",
      label: "Areas where I've contributed across banking & insurance systems",
      intro: "Throughout my professional experience, I've taken an active role in clarifying business needs, analyzing system behaviors, running data validation processes, and making solutions testable — across different sectors and system architectures.",
      items: [
        {
          title: "International Payment Flows & Status Behaviors",
          text: "I worked on evaluating status-based behaviors in payment and message processes, their reflection in inquiry screens, and the alignment of system outputs with functional expectations. My contributions included analyzing discrepancies between expected and actual behavior, clarifying test scenarios, and making business rules more visible.",
        },
        {
          title: "Cross-Border Core Banking Processes",
          text: "I worked on ensuring that business requirements are addressed in alignment with technical flows in banking processes involving different country architectures, and on improving functional clarity. By evaluating service behaviors, data validation steps, and operational impacts together, I helped produce more actionable analysis outputs.",
        },
        {
          title: "Integration, Service & Data Validation",
          text: "In API and web service-oriented structures, I focused on understanding how business needs translate into technical behavior and verifying the correctness of that translation. Working through data flows, field mappings, response logic, and system behaviors, I contributed to both analysis and testing processes.",
        },
        {
          title: "Functional Testing & UAT",
          text: "I took an active role in making functional expectations testable, structuring scenarios, and running business unit validation processes in a more organized manner. My approach wasn't just writing test steps — it was making visible what actually needs to be verified.",
        },
        {
          title: "Operational Process & Screen Analysis",
          text: "On screens where users make decisions, track transactions, or conduct operational control, I performed analyses balancing functionality, simplicity, and process consistency. The goal wasn't just to review the screen — it was to evaluate the business logic behind it, the user need, and the system's response together.",
        },
        {
          title: "Error Analysis & Root Cause Investigation",
          text: "Examining discrepancies between expected behavior and actual system output, verifying them through data checks, and addressing problems at the root cause level was a significant part of my work. What I value most in this area is producing actionable clarity rather than just describing symptoms.",
        },
      ],
    },
    showcase: {
      heading: "Analyst Showcase",
      label: "Real thinking. Structured outputs.",
      subheading: "These cases demonstrate how I approach problems — not just what I did, but how I think.",
      cases: [
        {
          id: "CASE-01",
          title: "Payment Failure Root Cause Analysis",
          type: "Root Cause Analysis",
          problem: "On Oct 12, 142 cross-border transactions failed during routing to European correspondent banks — causing a 4-hour delay and manual reconciliation overhead.",
          approach: "Traced the failure chain from the UI layer down through the service and database layers. Identified the point of divergence between expected and actual API behavior.",
          resolution: [
            { step: "Immediate", title: "Rollback & Reprocess", desc: "Reverted the mapping config; manually reprocessed the failed transaction queue." },
            { step: "Preventive", title: "XSD Schema Validation", desc: "Added a pre-flight validation check in the integration layer to catch malformed payloads before submission." },
            { step: "Process", title: "UAT Regression Rule", desc: "Established a mandatory regression gate for all XML templates on core mapping updates." },
          ],
          outcome: "Zero recurrence in 4 months post-fix. Validation check became standard practice.",
          tags: ["Root Cause Analysis", "XML", "API", "Testing"],
        },
        {
          id: "CASE-02",
          title: "International Wire Transfer Decision Flow",
          type: "Process Mapping",
          problem: "Payment routing logic lacked formal documentation, causing inconsistent handling of edge cases — particularly around compliance timeouts and fallback behavior.",
          approach: "Mapped the full transfer lifecycle as a decision flow, with explicit gates for validation, compliance, routing, settlement, and notification.",
          nodes: [
            { step: "Initiation", desc: "User inputs beneficiary + amount details", highlight: false },
            { step: "Validation", desc: "Format check, limit rules, account status", highlight: false },
            { step: "Compliance", desc: "AML / KYC screening — async API call", highlight: true },
            { step: "Routing", desc: "Correspondent bank selection logic", highlight: false },
            { step: "Settlement", desc: "Ledger debit and credit entries", highlight: false },
            { step: "Notification", desc: "Status update sent to originator", highlight: false },
          ],
          insight: "The Compliance node was the single most critical risk point — it involved an async call with no formally documented timeout fallback. I designed the fallback to queue rather than reject.",
          tags: ["Process Mapping", "Payment Flows", "Decision Logic"],
        },
        {
          id: "CASE-03",
          title: "Insurance System Health Dashboard",
          type: "KPI Analysis",
          problem: "The team lacked a structured view of operational performance — issues were being handled reactively rather than tracked proactively.",
          approach: "Defined a minimal but meaningful KPI set covering system uptime, resolution time, test coverage, and UAT approval — then structured reporting around these.",
          metrics: [
            { value: "99.7%", label: "System Uptime", color: "emerald" },
            { value: "18.4h", label: "Avg. Resolution Time", color: "amber" },
            { value: "94.0%", label: "Test Coverage", color: "primary" },
            { value: "98.2%", label: "UAT Approval Rate", color: "cyan" },
          ],
          trend: { label: "Error Volume Trend", value: "-12% vs prior quarter", positive: true },
          insight: "The 18.4h resolution average masked outliers — a small number of defects were taking 72+ hours. Flagged for prioritized investigation.",
          tags: ["KPIs", "Reporting", "Insurance", "UAT"],
        },
        {
          id: "CASE-04",
          title: "Requirement to Screen Design",
          type: "Functional Specification",
          problem: "A business team needed a new consolidated operational view — but the existing 5-screen workflow was fragmented, creating repeated data entry and user errors.",
          approach: "Interviewed stakeholders to extract actual daily tasks. Mapped current-state screen flow. Identified which fields were essential vs. redundant. Designed a unified screen structure.",
          steps: [
            { phase: "Discovery", action: "Stakeholder interviews + current screen walkthrough" },
            { phase: "Analysis", action: "Field-level dependency mapping — what drives what?" },
            { phase: "Design", action: "Functional wireframe with clear UX rationale per section" },
            { phase: "Validation", action: "UAT walkthrough with business team + iteration" },
          ],
          outcome: "Reduced required screens from 5 to 2. Eliminated 3 redundant data entry steps. Approved in first UAT round.",
          tags: ["Requirements", "Functional Design", "UX Analysis", "UAT"],
        },
        {
          id: "CASE-05",
          title: "API Integration — Expected vs. Actual",
          type: "Integration Analysis",
          problem: "During integration testing, response payloads from an external banking service did not match the agreed contract — causing downstream processing failures.",
          approach: "Compared the API specification against actual service responses field-by-field. Built a structured delta table covering field names, data types, presence rules, and value ranges.",
          delta: [
            { field: "beneficiaryIBAN", expected: "Required · String(34)", actual: "Absent in 14% of responses", status: "fail" },
            { field: "transactionRef", expected: "Alphanumeric(20)", actual: "Numeric only — length mismatch", status: "fail" },
            { field: "statusCode", expected: "Enum: [01, 02, 03]", actual: "Returns 04 on timeout (undocumented)", status: "warn" },
            { field: "settlementDate", expected: "ISO 8601 format", actual: "Conforms — no issue", status: "pass" },
          ],
          outcome: "Shared structured delta report with vendor. 3 of 4 issues resolved before next build. 1 escalated to contract amendment.",
          tags: ["API Integration", "Payload Analysis", "Test Design", "Defect Tracking"],
        },
      ],
    },
    education: {
      heading: "Education & Certifications",
      label: "Academic background and ongoing learning",
      degrees: [
        {
          degree: "MSc — Management Information Systems & Engineering",
          school: "Marmara University",
          date: "Feb 2023 – Jun 2024",
          detail: 'Thesis focus: "The Role of Data Analytics in Insurance Sector Digital Transformation"',
        },
        {
          degree: "Exchange Student — Computer Science",
          school: "University of Lodz, Poland",
          date: "2021 – 2022",
          detail: "",
        },
        {
          degree: "BSc — Management Information Systems",
          school: "Bilecik Şeyh Edebali University",
          date: "2018 – 2022",
          detail: "",
        },
        {
          degree: "Associate's — Web Design & Coding",
          school: "Anadolu University",
          date: "2019 – 2021",
          detail: "",
        },
      ],
      certs: [
        { title: "Generative AI for Business Analysts", issuer: "LinkedIn Learning" },
        { title: "Introduction to Business Analytics", issuer: "365 Data Science" },
        { title: "Data Science & ML Bootcamp", issuer: "Veri Bilimi Okulu" },
        { title: "Advanced SQL for Data Scientists", issuer: "LinkedIn Learning" },
        { title: "Algorithmic Thinking with Python", issuer: "LinkedIn Learning" },
        { title: "Software Development Life Cycle (SDLC)", issuer: "LinkedIn Learning" },
        { title: "Storytelling with Data", issuer: "Certification" },
        { title: "Sales Dashboard with Tableau", issuer: "LinkedIn Learning" },
        { title: "Introduction to SAP BI/BW", issuer: "LinkedIn Learning" },
        { title: "Non-Technical Skills for Data Scientists", issuer: "LinkedIn Learning" },
      ],
    },
    footer: {
      heading: "Let's connect.",
      role: "Senior Business Analyst · Banking & Financial Technologies",
      rights: "All rights reserved.",
      cta: "I'm currently open to new opportunities in banking technology, financial systems, and business analysis.",
    },
  },

  tr: {
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      skills: "Beceriler",
      highlights: "Öne Çıkanlar",
      showcase: "Vitrin",
      education: "Eğitim",
      beyondcv: "CV Ötesi",
      contact: "İletişim",
    },
    hero: {
      badge: "Yeni fırsatlara açık",
      name: "Görkem Köroğlu",
      title: "Kıdemli İş Analisti",
      subtitle: "Bankacılık & Finansal Teknolojiler",
      tagline: "Karmaşık sistemleri net kararlara dönüştürüyorum — çekirdek bankacılık, entegrasyonlar ve sınır ötesi ödeme akışlarında.",
      downloadCV: "CV İndir",
      viewShowcase: "Çalışmaları Gör",
      contact: "İletişime Geç",
      chips: [
        "Çekirdek Bankacılık",
        "Sınır Ötesi Ödemeler",
        "API / Web Servisleri",
        "SQL & Veri Doğrulama",
        "UAT & Fonksiyonel Test",
        "Agile Teslimat",
      ],
      location: "İstanbul, Türkiye",
    },
    about: {
      heading: "Hakkımda",
      label: "Kim olduğum",
      intro: "Bankacılık ve sigorta teknolojilerinde deneyim kazanmış Kıdemli İş Analisti'yim — iş karmaşıklığının teknik uygulama ile buluştuğu noktada çalışıyorum.",
      description: "Belirsiz gereksinimleri yapılandırılmış ve uygulanabilir spesifikasyonlara dönüştürme konusunda uzmanlaşıyorum. Sınır ötesi ödeme akışlarını haritalamak, API davranışlarını doğrulamak ya da dağıtık ekiplerle UAT koordinasyonu sağlamak olsun; iş ve teknoloji kesişiminde netlik üretiyorum.",
      bullets: [
        "Çekirdek bankacılık ve sigorta platformlarında uçtan uca sistem analizi",
        "API ve Web Servis entegrasyon analizi — XML/JSON payload eşleştirme",
        "SQL tabanlı veri doğrulama ve kök neden araştırması",
        "Fonksiyonel, servis ve veritabanı test tasarımı ile UAT koordinasyonu",
        "İş birimleri ve teknik ekipler arasında yapılandırılmış köprü iletişimi",
        "Çok işlevli ve uluslararası ekiplerle Agile/Scrum teslimatı",
      ],
      howIWork: {
        heading: "Nasıl çalışırım",
        items: [
          { title: "Yapılandırılmış düşünce", desc: "Karmaşık sorunları çözüme atlamadan önce katmanlara ayırıyorum." },
          { title: "Önce dokümantasyon", desc: "Net spesifikasyonlar geri dönüşü azaltır. Kesinlik ve amaçla yazıyorum." },
          { title: "Test bakış açısı her zaman aktif", desc: "Uygulama tamamlanmadan önce doğrulamayı düşünüyorum." },
          { title: "İş + teknik akıcılık", desc: "API dokümanlarını okuyup etkisini iş birimi yöneticisine açıklayabiliyorum." },
        ],
      },
    },
    experience: {
      heading: "Deneyim",
      jobs: [
        {
          title: "Kıdemli İş Analisti",
          company: "Yapı Kredi Teknoloji",
          companyNote: "NTT DATA Business Solutions bünyesinde",
          date: "Eki 2024 – Devam ediyor",
          location: "İstanbul",
          summary: "Azerbaycan, Almanya ve Hollanda bankacılık altyapıları için uluslararası çekirdek bankacılık projelerinde sistem, entegrasyon ve ödeme akışı analizi.",
          items: [
            "Uluslararası çekirdek bankacılık implementasyonları için uçtan uca sistem analizi",
            "API ve Web Servis entegrasyon analizi — XML/JSON mapping ve payload doğrulama",
            "SQL tabanlı veri doğrulama, hata kök neden analizi ve çapraz ortam testi",
            "Fonksiyonel, servis ve veritabanı test tasarımı; UAT planlaması ve koordinasyonu",
            "Gereksinim dokümantasyonu, Jira/Qmetry yönetimi ve sprint teslimatı",
            "Sınır ötesi ödeme akışları: SWIFT/SEPA mesaj yapıları, inquiry ve durum mantığı",
          ],
          tags: ["Çekirdek Bankacılık", "SWIFT / SEPA", "API Entegrasyon", "SQL", "UAT", "Agile", "Fonksiyonel Analiz"],
        },
        {
          title: "Teknik İş Analisti",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Eyl 2022 – Eyl 2024",
          location: "İstanbul",
          summary: "İş gereksinimlerini fonksiyonel spesifikasyonlara dönüştürdüm ve sigorta sistemi iş akışlarında test süreçlerini yönettim.",
          items: [
            "PL/SQL tabanlı veri analizi, sistem doğrulama ve kök neden çözümü",
            "Fonksiyonel gereksinim belgeleri, akış diyagramları ve UI spesifikasyonu tasarımı",
            "Test senaryolarını yönetiyor ve UAT koordinasyonunu sağladım; kritik sistem hatalarını ort. 24 saatte çözdüm",
            "Karmaşık sigorta iş akışlarını analiz ederek sistematik iyileştirmeler önerdim",
            "Birden fazla girişimde iş paydaşları ve geliştirme ekipleri arasında koordinasyon sağladım",
          ],
          tags: ["Sigorta Sistemleri", "PL/SQL", "Fonksiyonel Spec", "UAT", "Kök Neden Analizi", "Süreç Tasarımı"],
        },
        {
          title: "Veri Bilimi & ML Programı",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analitik Temel",
          date: "Mar – Eyl 2022",
          location: "",
          summary: "Python, SQL, makine öğrenmesi ve CRM analitiğinde analitik temeller geliştirdim — bugün veri odaklı iş analizi çalışmalarımda doğrudan kullanıyorum.",
          items: [
            "Python (pandas, numpy, matplotlib, seaborn), SQL, EDA ve ML model temelleri",
            "CRM analitiği: Kohort Analizi, CLTV, RFM segmentasyonu",
            "Öneri sistemleri: İşbirliğine Dayalı Filtreleme ve Hibrit yaklaşımlar",
          ],
          tags: ["Python", "SQL", "ML Temelleri", "CRM Analitiği", "EDA"],
        },
      ],
    },
    skills: {
      heading: "Beceriler",
      label: "Masaya ne getiriyorum",
      categories: [
        {
          title: "Analiz & Gereksinim",
          skills: ["İş Analizi", "Fonksiyonel Analiz", "Sistem Analizi", "Gereksinim Toplama", "Akış Tasarımı", "Süreç İyileştirme"],
        },
        {
          title: "Teknik Entegrasyon & Veri",
          skills: ["API / Web Servisleri", "XML / JSON Eşleştirme", "SQL", "PL/SQL", "Veri Doğrulama", "Kök Neden Analizi"],
        },
        {
          title: "Test & Teslimat",
          skills: ["Fonksiyonel Test", "Servis Testi", "Veritabanı Testi", "UAT Koordinasyonu", "Regresyon Düşüncesi", "Hata Takibi"],
        },
        {
          title: "Domain Bilgisi",
          skills: ["Çekirdek Bankacılık", "Sınır Ötesi Ödemeler", "SWIFT / SEPA", "Finansal Sistemler", "Sigorta Teknolojileri"],
        },
        {
          title: "Araçlar",
          skills: ["Jira", "Confluence", "Qmetry", "Postman", "Swagger", "MS Visio", "Figma", "SQL Server"],
        },
        {
          title: "Güçlü Yönler",
          skills: ["Analitik Düşünce", "Yapılandırılmış İletişim", "Detay Yönetimi", "İş–Teknik Köprüsü", "Uyum Yeteneği"],
        },
      ],
    },
    highlights: {
      heading: "Katkı Sağladığım Çalışmalar",
      label: "Bankacılık & sigorta sistemlerinde katkı sağladığım alanlar",
      intro: "Profesyonel deneyimim boyunca, farklı sektörlerde iş ihtiyacının netleştirilmesi, sistem davranışlarının analiz edilmesi, veri doğrulama süreçlerinin yürütülmesi ve çözümün test edilebilir hale getirilmesi gibi alanlarda aktif rol aldım. Çalışmalarım çoğunlukla iş gereksinimi, sistem mantığı, veri akışı ve kullanıcı/operasyon etkisinin birlikte değerlendirilmesini gerektiren yapılarda yoğunlaştı.",
      items: [
        {
          title: "Uluslararası Ödeme Akışları ve Statü Davranışları",
          text: "Ödeme ve mesaj süreçlerinde statü bazlı davranışların, inquiry ekranlarındaki yansımalarının ve sistem çıktılarının fonksiyonel beklentiyle uyumunun değerlendirilmesi tarafında çalıştım. Bu alanda; beklenen davranış ile gerçekleşen sonuç arasındaki farkların analiz edilmesi, test senaryolarının netleştirilmesi ve iş kurallarının daha görünür hale getirilmesi konularına katkı sağladım.",
        },
        {
          title: "Cross-Border Core Banking Süreçleri",
          text: "Farklı ülke yapılarıyla ilişkili bankacılık süreçlerinde, iş gereksinimlerinin teknik akışlarla uyumlu şekilde ele alınması ve fonksiyonel netliğin artırılması üzerine çalıştım. Servis davranışları, veri doğrulama adımları ve operasyonel etkiler birlikte değerlendirilerek daha uygulanabilir analiz çıktıları oluşturulmasına destek verdim.",
        },
        {
          title: "Entegrasyon, Servis ve Veri Doğrulama Çalışmaları",
          text: "API ve web servis odaklı yapılarda, iş ihtiyacının teknik davranışa nasıl dönüştüğünü anlamaya ve bu dönüşümün doğruluğunu kontrol etmeye odaklandım. Veri akışı, alan eşleşmeleri, response mantığı ve sistem davranışları üzerinden ilerleyerek hem analiz hem de test süreçlerine katkıda bulundum.",
        },
        {
          title: "Fonksiyonel Test ve UAT Süreçleri",
          text: "Fonksiyonel beklentilerin test edilebilir hale getirilmesi, senaryoların yapılandırılması ve iş birimi doğrulama süreçlerinin daha düzenli yürütülmesi tarafında aktif görev aldım. Buradaki yaklaşımım, yalnızca test adımı yazmak değil; gerçekten neyin doğrulanması gerektiğini görünür hale getirmek oldu.",
        },
        {
          title: "Operasyonel Süreç ve Ekran Analizi",
          text: "Kullanıcıların karar verdiği, işlem takibi yaptığı veya operasyonel kontrol yürüttüğü ekranlarda; işlevsellik, sadelik ve süreç tutarlılığı dengesini gözeten analizler yaptım. Amaç, yalnızca ekranı incelemek değil; ekranın arkasındaki iş mantığını, kullanıcı ihtiyacını ve sistemsel karşılığını birlikte değerlendirmekti.",
        },
        {
          title: "Hata İnceleme ve Kök Neden Analizi",
          text: "Beklenen davranış ile gerçek sistem çıktısı arasındaki farkların incelenmesi, veri kontrolleriyle doğrulanması ve problemin kök neden seviyesinde ele alınması, çalışmalarımın önemli bir parçası oldu. Bu alanda en çok önem verdiğim şey, semptomu tarif etmekten çok, aksiyon alınabilir netlik üretmektir.",
        },
      ],
    },
    showcase: {
      heading: "Analist Vitrini",
      label: "Gerçek düşünce. Yapılandırılmış çıktılar.",
      subheading: "Bu vakalar sorunlara nasıl yaklaştığımı gösteriyor — ne yaptığımı değil, nasıl düşündüğümü.",
      cases: [
        {
          id: "VAKA-01",
          title: "Ödeme Hatası Kök Neden Analizi",
          type: "Kök Neden Analizi",
          problem: "12 Ekim'de, 142 sınır ötesi işlem Avrupa muhabir bankalarına yönlendirme sırasında başarısız oldu — 4 saatlik gecikmeye ve manuel mutabakat yüküne neden oldu.",
          approach: "Hata zincirini UI katmanından servis ve veritabanı katmanlarına kadar izledim. API davranışında beklenen ile gerçekleşen arasındaki ayrışma noktasını tespit ettim.",
          resolution: [
            { step: "Anlık", title: "Geri Al & Yeniden İşle", desc: "Mapping konfigürasyonu geri alındı; başarısız işlem kuyruğu manuel olarak yeniden işlendi." },
            { step: "Önleyici", title: "XSD Şema Doğrulama", desc: "Hatalı payload'ları göndermeden önce yakalamak için entegrasyon katmanına ön uçuş doğrulama kontrolü eklendi." },
            { step: "Süreç", title: "UAT Regresyon Kuralı", desc: "Çekirdek mapping güncellemelerinde tüm XML şablonları için zorunlu regresyon kapısı oluşturuldu." },
          ],
          outcome: "Düzeltme sonrası 4 ayda sıfır tekrar. Doğrulama kontrolü standart uygulama haline geldi.",
          tags: ["Kök Neden Analizi", "XML", "API", "Test"],
        },
        {
          id: "VAKA-02",
          title: "Uluslararası Havale Karar Akışı",
          type: "Süreç Haritalama",
          problem: "Ödeme yönlendirme mantığının resmi dokümantasyonu yoktu — özellikle uyumluluk zaman aşımları ve yedek davranış etrafında tutarsız işleme yol açıyordu.",
          approach: "Doğrulama, uyumluluk, yönlendirme, uzlaşma ve bildirim için açık kapılarla tam transfer yaşam döngüsünü karar akışı olarak haritaladım.",
          nodes: [
            { step: "Başlatma", desc: "Kullanıcı lehtar + tutar bilgilerini girer", highlight: false },
            { step: "Doğrulama", desc: "Format kontrolü, limit kuralları, hesap durumu", highlight: false },
            { step: "Uyumluluk", desc: "AML / KYC tarama — asenkron API çağrısı", highlight: true },
            { step: "Yönlendirme", desc: "Muhabir banka seçim mantığı", highlight: false },
            { step: "Uzlaşma", desc: "Defter borç ve alacak girişleri", highlight: false },
            { step: "Bildirim", desc: "Başlatıcıya durum güncellemesi gönderildi", highlight: false },
          ],
          insight: "Uyumluluk düğümü en kritik risk noktasıydı — resmi dokümantasyonu olmayan bir zaman aşımı yedeğiyle asenkron çağrı içeriyordu. Yedek sistemi reddetmek yerine kuyruğa alacak şekilde tasarladım.",
          tags: ["Süreç Haritalama", "Ödeme Akışları", "Karar Mantığı"],
        },
        {
          id: "VAKA-03",
          title: "Sigorta Sistem Sağlığı Panosu",
          type: "KPI Analizi",
          problem: "Ekibin operasyonel performansa yapılandırılmış bir bakışı yoktu — sorunlar proaktif takip yerine reaktif olarak ele alınıyordu.",
          approach: "Sistem çalışma süresi, çözüm süresi, test kapsamı ve UAT onayını kapsayan minimal ama anlamlı bir KPI seti tanımladım, ardından raporlamayı bunların etrafında yapılandırdım.",
          metrics: [
            { value: "99.7%", label: "Sistem Çalışma Süresi", color: "emerald" },
            { value: "18.4s", label: "Ort. Çözüm Süresi", color: "amber" },
            { value: "94.0%", label: "Test Kapsamı", color: "primary" },
            { value: "98.2%", label: "UAT Onay Oranı", color: "cyan" },
          ],
          trend: { label: "Hata Hacmi Trendi", value: "Önceki çeyreğe göre -%12", positive: true },
          insight: "18.4 saatlik ortalama çözüm süresi aykırı değerleri maskeliyordu — küçük sayıda hata 72+ saat alıyordu. Öncelikli araştırma için işaretlendi.",
          tags: ["KPI", "Raporlama", "Sigorta", "UAT"],
        },
        {
          id: "VAKA-04",
          title: "Gereksinimden Ekran Tasarımına",
          type: "Fonksiyonel Spesifikasyon",
          problem: "Bir iş birimi yeni bir birleşik operasyonel görünüme ihtiyaç duyuyordu — ancak mevcut 5 ekranlık iş akışı parçalıydı, tekrarlayan veri girişi ve kullanıcı hatalarına yol açıyordu.",
          approach: "Gerçek günlük görevleri çıkarmak için paydaşlarla görüşmeler yaptım. Mevcut ekran akışını haritaladım. Hangi alanların temel, hangilerinin gereksiz olduğunu belirledim. Birleşik ekran yapısı tasarladım.",
          steps: [
            { phase: "Keşif", action: "Paydaş görüşmeleri + mevcut ekran incelemesi" },
            { phase: "Analiz", action: "Alan düzeyinde bağımlılık haritalama — ne neyi etkiliyor?" },
            { phase: "Tasarım", action: "Her bölüm için net UX gerekçesiyle fonksiyonel wireframe" },
            { phase: "Doğrulama", action: "İş birimi ile UAT incelemesi + iterasyon" },
          ],
          outcome: "Gerekli ekran sayısı 5'ten 2'ye düşürüldü. 3 gereksiz veri giriş adımı ortadan kalktı. İlk UAT turunda onaylandı.",
          tags: ["Gereksinimler", "Fonksiyonel Tasarım", "UX Analizi", "UAT"],
        },
        {
          id: "VAKA-05",
          title: "API Entegrasyonu — Beklenen ve Gerçekleşen",
          type: "Entegrasyon Analizi",
          problem: "Entegrasyon testi sırasında, harici bir bankacılık servisinden gelen yanıt payload'ları kararlaştırılan sözleşmeyle eşleşmiyordu — downstream işlem hatalarına neden oluyordu.",
          approach: "API spesifikasyonunu alan alan gerçek servis yanıtlarıyla karşılaştırdım. Alan adları, veri tipleri, varlık kuralları ve değer aralıklarını kapsayan yapılandırılmış bir delta tablosu oluşturdum.",
          delta: [
            { field: "beneficiaryIBAN", expected: "Zorunlu · String(34)", actual: "Yanıtların %14'ünde yok", status: "fail" },
            { field: "transactionRef", expected: "Alfanümerik(20)", actual: "Yalnızca sayısal — uzunluk uyumsuzluğu", status: "fail" },
            { field: "statusCode", expected: "Enum: [01, 02, 03]", actual: "Zaman aşımında 04 dönüyor (belgesiz)", status: "warn" },
            { field: "settlementDate", expected: "ISO 8601 formatı", actual: "Uyuyor — sorun yok", status: "pass" },
          ],
          outcome: "Yapılandırılmış delta raporu tedarikçiyle paylaşıldı. 4 sorundan 3'ü bir sonraki yapıdan önce çözüldü. 1'i sözleşme değişikliğine eskalasyon edildi.",
          tags: ["API Entegrasyon", "Payload Analizi", "Test Tasarımı", "Hata Takibi"],
        },
      ],
    },
    education: {
      heading: "Eğitim & Sertifikalar",
      label: "Akademik geçmiş ve süregelen öğrenme",
      degrees: [
        {
          degree: "Yüksek Lisans — Yönetim Bilişim Sistemleri ve Mühendisliği",
          school: "Marmara Üniversitesi",
          date: "Şub 2023 – Haz 2024",
          detail: 'Tez odağı: "Sigorta Sektörünün Dijital Dönüşümünde Veri Analitiği Uygulamalarının Rolü"',
        },
        {
          degree: "Değişim Öğrencisi — Bilgisayar Bilimleri",
          school: "University of Lodz, Polonya",
          date: "2021 – 2022",
          detail: "",
        },
        {
          degree: "Lisans — Yönetim Bilişim Sistemleri",
          school: "Bilecik Şeyh Edebali Üniversitesi",
          date: "2018 – 2022",
          detail: "",
        },
        {
          degree: "Önlisans — Web Tasarımı ve Kodlama",
          school: "Anadolu Üniversitesi",
          date: "2019 – 2021",
          detail: "",
        },
      ],
      certs: [
        { title: "İş Analistleri için Üretken Yapay Zeka", issuer: "LinkedIn Learning" },
        { title: "İş Analitiğine Giriş", issuer: "365 Data Science" },
        { title: "Veri Bilimi & ML Bootcamp", issuer: "Veri Bilimi Okulu" },
        { title: "Veri Bilimciler için İleri SQL", issuer: "LinkedIn Learning" },
        { title: "Python ile Algoritmik Düşünce", issuer: "LinkedIn Learning" },
        { title: "Yazılım Geliştirme Yaşam Döngüsü (SDLC)", issuer: "LinkedIn Learning" },
        { title: "Veriyle Hikâye Anlatımı", issuer: "Sertifika" },
        { title: "Tableau ile Satış Panosu", issuer: "LinkedIn Learning" },
        { title: "SAP BI/BW'ye Giriş", issuer: "LinkedIn Learning" },
        { title: "Veri Bilimcilerin Teknik Olmayan Becerileri", issuer: "LinkedIn Learning" },
      ],
    },
    footer: {
      heading: "Bağlanalım.",
      role: "Kıdemli İş Analisti · Bankacılık & Finansal Teknolojiler",
      rights: "Tüm hakları saklıdır.",
      cta: "Bankacılık teknolojileri, finansal sistemler ve iş analizi alanlarında yeni fırsatlara açığım.",
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
