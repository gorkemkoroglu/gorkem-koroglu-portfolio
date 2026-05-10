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
      title: "Technical Analyst",
      subtitle: "Banking & Financial Technologies",
      tagline: "I work where business requirements, system behavior, and technical validation need to align — bringing structured analysis to core banking, integration, and payment environments.",
      downloadCV: "Download CV",
      viewShowcase: "View Showcase",
      contact: "Get in Touch",
      chips: [
        "Systems Analysis",
        "Core Banking",
        "API & Integrations",
        "Data Validation",
        "UAT & Functional Testing",
        "Cross-Border Payments",
      ],
      location: "Istanbul, Turkey",
    },
    about: {
      heading: "About",
      label: "Profile",
      intro: "I'm a Technical Analyst working in banking and financial technologies — where business requirements, system behavior, and technical reality all have to meet.",
      description: "My focus is on understanding what a system should do, validating whether it actually does it, and making the gap actionable when it doesn't. I work across systems analysis, integration behavior, data validation, and UAT — bringing structure to requirements and clarity to the spaces where business logic meets technical execution.",
      bullets: [
        "Systems analysis across international core banking and insurance platforms",
        "API and Web Service integration analysis — field mapping, payload validation, response behavior",
        "SQL and PL/SQL based data validation and root cause investigation",
        "Functional, service, and database test design — UAT planning and coordination",
        "Requirement clarification and structured documentation for technical and business teams",
        "Cross-functional delivery in Agile environments with international teams",
      ],
      howIWork: {
        heading: "How I work",
        items: [
          { title: "Layered thinking", desc: "I break problems into business rule, system behavior, data impact, and operational effect — before proposing anything." },
          { title: "Precision in documentation", desc: "Clear specs reduce rework. I write with enough detail for developers and enough clarity for business owners." },
          { title: "Validation-first mindset", desc: "I design test scenarios and edge cases before implementation is complete — not after." },
          { title: "Business and technical fluency", desc: "I read integration specs, understand service behavior, and translate both directions clearly." },
        ],
      },
    },
    experience: {
      heading: "Experience",
      jobs: [
        {
          title: "Technical Analyst",
          company: "Yapı Kredi Teknoloji",
          companyNote: "via NTT DATA Business Solutions",
          date: "Oct 2024 – Present",
          location: "Istanbul",
          summary: "Working on international core banking implementations — systems analysis, integration behavior, and payment flow analysis for banks in Azerbaijan, Germany, and the Netherlands.",
          items: [
            "End-to-end systems and functional analysis for international core banking projects",
            "API and Web Service integration analysis — XML/JSON payload mapping, field validation, response behavior",
            "SQL-based data validation and root cause investigation across environments",
            "Functional, service, and database test design; UAT planning and coordination",
            "Requirement documentation, defect tracking (Jira/Qmetry), and sprint delivery",
            "Cross-border payment flows: SWIFT and SEPA message structures, inquiry and status behavior",
          ],
          tags: ["Core Banking", "SWIFT / SEPA", "API Integration", "SQL", "UAT", "Systems Analysis", "Functional Analysis"],
        },
        {
          title: "Technical Business Analyst",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Sep 2022 – Sep 2024",
          location: "Istanbul",
          summary: "Converted business requirements into functional specifications and drove test and validation processes across insurance system workflows.",
          items: [
            "PL/SQL-based data analysis, system verification, and root cause investigation",
            "Functional requirement documents, process flow diagrams, and UI specifications",
            "Test scenario design, UAT coordination, and defect resolution across system workflows",
            "Insurance workflow analysis — identifying inconsistencies and proposing structured improvements",
            "Cross-team coordination between business stakeholders and development across multiple initiatives",
          ],
          tags: ["Insurance Systems", "PL/SQL", "Functional Specs", "UAT", "Root Cause Analysis", "Process Design"],
        },
        {
          title: "Data Science & ML Program",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analytical Foundation",
          date: "Mar – Sep 2022",
          location: "",
          summary: "Developed analytical foundations in Python, SQL, and data-driven thinking — applied directly in data validation, root cause analysis, and requirement evaluation work.",
          items: [
            "Python (pandas, numpy, matplotlib), SQL, and exploratory data analysis",
            "CRM analytics: Cohort Analysis, CLTV, RFM segmentation",
            "Recommendation systems: Collaborative Filtering and Hybrid approaches",
          ],
          tags: ["Python", "SQL", "Data Analysis", "EDA"],
        },
      ],
    },
    skills: {
      heading: "Skills",
      label: "What I bring to a project",
      categories: [
        {
          title: "Analysis & Requirements",
          skills: ["Systems Analysis", "Functional Analysis", "Business Analysis", "Requirement Clarification", "Flow Design", "Process Improvement"],
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
          skills: ["Jira", "Confluence", "Qmetry", "Postman", "Swagger", "MS Visio", "SQL Server"],
        },
        {
          title: "Strengths",
          skills: ["Structured Thinking", "Business–Technical Bridge", "Analytical Clarity", "Detail Orientation", "Reliable Communication"],
        },
      ],
    },
    highlights: {
      heading: "Work Highlights",
      label: "Areas of contribution — banking & insurance",
      intro: "Across my professional experience, I've focused on clarifying what systems should do, validating what they actually do, and making the gap actionable. The areas below reflect the types of analysis, testing, and validation I've been most involved in.",
      items: [
        {
          title: "International Payment Flows & Status Behaviors",
          text: "I worked on evaluating status-based behaviors in payment and message processes — how they surface in inquiry screens and whether system outputs match functional expectations. Key contributions: analyzing expected vs. actual discrepancies, clarifying test scenarios, and making business rules more traceable.",
        },
        {
          title: "Cross-Border Core Banking Processes",
          text: "In banking projects involving different country architectures, I worked on aligning business requirements with technical flows and improving functional clarity. Service behaviors, data validation steps, and operational impacts were assessed together to produce more actionable analysis outputs.",
        },
        {
          title: "Integration, Service & Data Validation",
          text: "In API and web service environments, I focused on understanding how business needs translate into technical behavior — and verifying that the translation is correct. Working through data flows, field mappings, response logic, and system behavior, I contributed to both analysis and testing processes.",
        },
        {
          title: "Functional Testing & UAT",
          text: "I took an active role in making functional expectations testable, structuring scenarios, and running business-side validation in an organized way. The focus was not just writing test steps — it was making visible what actually needs to be verified, and why.",
        },
        {
          title: "Operational Process & Screen Analysis",
          text: "On screens where users make decisions, track transactions, or perform operational control, I analyzed the balance between functionality, simplicity, and process consistency. The goal was to evaluate not just the screen, but the business logic behind it and its system-level implications.",
        },
        {
          title: "Error Analysis & Root Cause Investigation",
          text: "Investigating discrepancies between expected behavior and actual system output, verifying them through data, and framing the problem at the root cause level — not just describing symptoms — has been a consistent part of my work. Actionable clarity is what I aim for.",
        },
      ],
    },
    showcase: {
      heading: "Analyst Showcase",
      label: "Structured thinking, applied.",
      subheading: "These examples illustrate how I approach analysis problems — the structure I use, the questions I ask, and what I consider a useful output.",
      cases: [
        {
          id: "CASE-01",
          title: "Payment Failure Root Cause Analysis",
          type: "Root Cause Analysis",
          problem: "A set of cross-border transactions began failing during routing to European correspondent banks — generating a queue of unprocessed payments and triggering manual reconciliation overhead.",
          approach: "Traced the failure chain from the UI layer down through the service and database layers. Identified the divergence point between expected and actual API behavior — a field mapping mismatch in the XML template.",
          resolution: [
            { step: "Immediate", title: "Rollback & Reprocess", desc: "The mapping configuration was reverted and the failed transaction queue was manually reprocessed." },
            { step: "Preventive", title: "Payload Validation Gate", desc: "A pre-flight schema validation check was added to the integration layer to catch malformed payloads before submission." },
            { step: "Process", title: "UAT Regression Rule", desc: "A mandatory regression check was established for all XML templates whenever core mapping configurations are updated." },
          ],
          outcome: "No recurrence after the fix. The validation gate was adopted as standard practice across similar integration points.",
          tags: ["Root Cause Analysis", "XML", "API", "Testing"],
        },
        {
          id: "CASE-02",
          title: "International Wire Transfer Decision Flow",
          type: "Process Mapping",
          problem: "Payment routing logic lacked formal documentation, causing inconsistent handling of edge cases — particularly around compliance timeouts and fallback behavior.",
          approach: "Mapped the full transfer lifecycle as a structured decision flow, with explicit gates for validation, compliance, routing, settlement, and notification.",
          nodes: [
            { step: "Initiation", desc: "User inputs beneficiary and amount details", highlight: false },
            { step: "Validation", desc: "Format check, limit rules, account status", highlight: false },
            { step: "Compliance", desc: "AML / KYC screening — async API call", highlight: true },
            { step: "Routing", desc: "Correspondent bank selection logic", highlight: false },
            { step: "Settlement", desc: "Ledger debit and credit entries", highlight: false },
            { step: "Notification", desc: "Status update sent to originator", highlight: false },
          ],
          insight: "The Compliance node was the most critical risk point — an async call with no formally documented timeout fallback. I defined the fallback behavior to queue rather than reject, which better aligned with business continuity expectations.",
          tags: ["Process Mapping", "Payment Flows", "Decision Logic"],
        },
        {
          id: "CASE-03",
          title: "Operational KPI View — Insurance System",
          type: "KPI Analysis",
          problem: "The team lacked a structured view of operational performance — issues were being handled reactively with no consistent tracking of resolution trends or test coverage.",
          approach: "Defined a minimal but meaningful KPI set covering system uptime, average resolution time, test coverage, and UAT approval rate — then structured reporting around these indicators.",
          metrics: [
            { value: "99.7%", label: "System Uptime", color: "emerald" },
            { value: "18.4h", label: "Avg. Resolution Time", color: "amber" },
            { value: "94.0%", label: "Test Coverage", color: "primary" },
            { value: "98.2%", label: "UAT Approval Rate", color: "cyan" },
          ],
          trend: { label: "Error Volume Trend", value: "–12% vs prior quarter", positive: true },
          insight: "The average resolution time masked outliers — a small number of defects were taking significantly longer. Flagging these for prioritized investigation changed how the team allocated capacity.",
          tags: ["KPIs", "Reporting", "Insurance", "UAT"],
        },
        {
          id: "CASE-04",
          title: "Requirement to Functional Screen Design",
          type: "Functional Specification",
          problem: "A business team needed a new consolidated operational view. The existing workflow was spread across multiple screens, leading to repeated data entry and unnecessary friction.",
          approach: "Conducted stakeholder interviews to surface actual daily tasks. Mapped current-state screen logic. Distinguished essential fields from redundant ones. Designed a unified screen structure with clear functional separation.",
          steps: [
            { phase: "Discovery", action: "Stakeholder interviews + current screen walkthrough" },
            { phase: "Analysis", action: "Field-level dependency mapping — what drives what?" },
            { phase: "Design", action: "Functional wireframe with rationale for each section" },
            { phase: "Validation", action: "UAT walkthrough with business team and iteration" },
          ],
          outcome: "Screen count reduced from 5 to 2. Three redundant data entry steps removed. Approved in the first UAT round without major revision.",
          tags: ["Requirements", "Functional Design", "UX Analysis", "UAT"],
        },
        {
          id: "CASE-05",
          title: "API Integration — Expected vs. Actual",
          type: "Integration Analysis",
          problem: "During integration testing, response payloads from an external banking service did not match the agreed specification — causing downstream processing failures.",
          approach: "Compared the API specification against actual service responses field by field. Built a structured delta table covering field names, data types, presence rules, and value ranges.",
          delta: [
            { field: "beneficiaryIBAN", expected: "Required · String(34)", actual: "Absent in ~14% of responses", status: "fail" },
            { field: "transactionRef", expected: "Alphanumeric(20)", actual: "Numeric only — length mismatch", status: "fail" },
            { field: "statusCode", expected: "Enum: [01, 02, 03]", actual: "Returns 04 on timeout (undocumented)", status: "warn" },
            { field: "settlementDate", expected: "ISO 8601 format", actual: "Conforms — no issue", status: "pass" },
          ],
          outcome: "Structured delta report shared with the vendor. Three of four issues resolved before the next build. One escalated to a contract amendment discussion.",
          tags: ["API Integration", "Payload Analysis", "Test Design", "Defect Tracking"],
        },
      ],
    },
    education: {
      heading: "Education & Certifications",
      label: "Academic background and continued learning",
      academicLabel: "Academic Background",
      certsLabel: "Certifications & Training",
      degrees: [
        {
          degree: "MSc — Management Information Systems & Engineering",
          school: "Marmara University",
          date: "Feb 2023 – Jun 2024",
          detail: 'Thesis: "The Role of Data Analytics in Insurance Sector Digital Transformation"',
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
        { title: "Software Development Life Cycle (SDLC)", issuer: "LinkedIn Learning" },
        { title: "Introduction to Business Analytics", issuer: "365 Data Science" },
        { title: "Generative AI for Business Analysts", issuer: "LinkedIn Learning" },
        { title: "Data Science & ML Bootcamp", issuer: "Veri Bilimi Okulu" },
        { title: "Advanced SQL for Data Scientists", issuer: "LinkedIn Learning" },
        { title: "Algorithmic Thinking with Python", issuer: "LinkedIn Learning" },
        { title: "Storytelling with Data", issuer: "Certification" },
        { title: "Introduction to SAP BI/BW", issuer: "LinkedIn Learning" },
      ],
    },
    footer: {
      heading: "Let's connect.",
      role: "Technical Analyst · Banking & Financial Technologies",
      rights: "All rights reserved.",
      cta: "Open to new opportunities in banking technology, financial systems analysis, and technical analyst roles. Feel free to reach out.",
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
      title: "Technical Analyst",
      subtitle: "Bankacılık & Finansal Teknolojiler",
      tagline: "İş gereksinimlerinin, sistem davranışının ve teknik doğrulamanın aynı çerçevede okunmasını sağlıyorum — çekirdek bankacılık, entegrasyon ve ödeme sistemleri ortamlarında yapılandırılmış analiz odağıyla.",
      downloadCV: "CV İndir",
      viewShowcase: "Çalışmaları Gör",
      contact: "İletişime Geç",
      chips: [
        "Sistem Analizi",
        "Çekirdek Bankacılık",
        "API & Entegrasyon",
        "Veri Doğrulama",
        "UAT & Fonksiyonel Test",
        "Sınır Ötesi Ödemeler",
      ],
      location: "İstanbul, Türkiye",
    },
    about: {
      heading: "Hakkımda",
      label: "Profil",
      intro: "Bankacılık ve finansal teknolojiler alanında çalışan bir Technical Analyst'im. İş gereksinimlerinin, sistem davranışının ve teknik gerçeğin kesiştiği bu alanda değer üretiyorum.",
      description: "Bir sistemin ne yapması gerektiğini anlamak, gerçekte ne yaptığını doğrulamak ve bu iki şey arasındaki farkı somutlaştırmak üzerine yoğunlaşıyorum. Sistem analizi, entegrasyon davranışı, veri doğrulama ve UAT süreçlerinde çalışarak gereksinimlere yapı, teknik-iş köprüsüne ise netlik katıyorum.",
      bullets: [
        "Uluslararası çekirdek bankacılık ve sigorta platformlarında sistem analizi",
        "API ve web servis entegrasyon analizi — alan eşleştirme, payload doğrulama, yanıt davranışı",
        "SQL ve PL/SQL tabanlı veri doğrulama ve kök neden araştırması",
        "Fonksiyonel, servis ve veritabanı test tasarımı; UAT planlaması ve koordinasyonu",
        "Gereksinim netleştirme ve teknik ile iş ekiplerine yönelik yapılandırılmış dokümantasyon",
        "Uluslararası ekiplerle Agile ortamında çapraz fonksiyonlu teslimat",
      ],
      howIWork: {
        heading: "Nasıl çalışırım",
        items: [
          { title: "Katmanlı düşünme", desc: "Bir çözüm önerisinden önce problemi iş kuralı, sistem davranışı, veri etkisi ve operasyonel sonuç olarak ayırıyorum." },
          { title: "Dokümantasyonda kesinlik", desc: "Net spesifikasyonlar geri dönüşü azaltır. Geliştiriciler için yeterince detaylı, iş birimleri için yeterince açık yazıyorum." },
          { title: "Önce doğrulama", desc: "Test senaryolarını ve uç vakaları, uygulama tamamlanmadan tasarlıyorum." },
          { title: "İş ve teknik akıcılığı", desc: "Entegrasyon dokümanlarını okuyabiliyor, servis davranışını anlıyor ve her iki tarafı net biçimde aktarabiliyorum." },
        ],
      },
    },
    experience: {
      heading: "Deneyim",
      jobs: [
        {
          title: "Technical Analyst",
          company: "Yapı Kredi Teknoloji",
          companyNote: "NTT DATA Business Solutions bünyesinde",
          date: "Eki 2024 – Devam ediyor",
          location: "İstanbul",
          summary: "Azerbaycan, Almanya ve Hollanda'daki bankalar için uluslararası çekirdek bankacılık projelerinde sistem analizi, entegrasyon davranışı ve ödeme akışı analizi üzerine çalışıyorum.",
          items: [
            "Uluslararası çekirdek bankacılık projeleri için uçtan uca sistem ve fonksiyonel analiz",
            "API ve web servis entegrasyon analizi — XML/JSON payload eşleştirme, alan doğrulama, yanıt davranışı",
            "SQL tabanlı veri doğrulama ve çapraz ortamlarda kök neden araştırması",
            "Fonksiyonel, servis ve veritabanı test tasarımı; UAT planlaması ve koordinasyonu",
            "Gereksinim dokümantasyonu, hata takibi (Jira/Qmetry) ve sprint teslimatı",
            "Sınır ötesi ödeme akışları: SWIFT ve SEPA mesaj yapıları, inquiry ve statü davranışı",
          ],
          tags: ["Çekirdek Bankacılık", "SWIFT / SEPA", "API Entegrasyon", "SQL", "UAT", "Sistem Analizi", "Fonksiyonel Analiz"],
        },
        {
          title: "Technical Business Analyst",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Eyl 2022 – Eyl 2024",
          location: "İstanbul",
          summary: "İş gereksinimlerini fonksiyonel spesifikasyonlara dönüştürdüm; sigorta sistemi iş akışlarında test ve doğrulama süreçlerini yürüttüm.",
          items: [
            "PL/SQL tabanlı veri analizi, sistem doğrulama ve kök neden araştırması",
            "Fonksiyonel gereksinim belgeleri, süreç akış diyagramları ve UI spesifikasyonu",
            "Test senaryosu tasarımı, UAT koordinasyonu ve sistem iş akışlarında hata çözümü",
            "Sigorta iş akışı analizi — tutarsızlıkların tespiti ve yapılandırılmış iyileştirme önerileri",
            "Birden fazla girişimde iş paydaşları ile geliştirme ekipleri arasında koordinasyon",
          ],
          tags: ["Sigorta Sistemleri", "PL/SQL", "Fonksiyonel Spec", "UAT", "Kök Neden Analizi", "Süreç Tasarımı"],
        },
        {
          title: "Veri Bilimi & ML Programı",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analitik Temel",
          date: "Mar – Eyl 2022",
          location: "",
          summary: "Python, SQL ve veri odaklı düşünce alanında analitik temel geliştirdim. Bu bilgi, veri doğrulama, kök neden analizi ve gereksinim değerlendirmesi çalışmalarıma doğrudan yansıyor.",
          items: [
            "Python (pandas, numpy, matplotlib), SQL ve keşifsel veri analizi",
            "CRM analitiği: Kohort Analizi, CLTV, RFM segmentasyonu",
            "Öneri sistemleri: İşbirliğine dayalı filtreleme ve hibrit yaklaşımlar",
          ],
          tags: ["Python", "SQL", "Veri Analizi", "EDA"],
        },
      ],
    },
    skills: {
      heading: "Beceriler",
      label: "Projeye kattıklarım",
      categories: [
        {
          title: "Analiz & Gereksinim",
          skills: ["Sistem Analizi", "Fonksiyonel Analiz", "İş Analizi", "Gereksinim Netleştirme", "Akış Tasarımı", "Süreç İyileştirme"],
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
          title: "Alan Bilgisi",
          skills: ["Çekirdek Bankacılık", "Sınır Ötesi Ödemeler", "SWIFT / SEPA", "Finansal Sistemler", "Sigorta Teknolojileri"],
        },
        {
          title: "Araçlar",
          skills: ["Jira", "Confluence", "Qmetry", "Postman", "Swagger", "MS Visio", "SQL Server"],
        },
        {
          title: "Güçlü Yönler",
          skills: ["Yapılandırılmış Düşünce", "İş–Teknik Köprüsü", "Analitik Netlik", "Detay Odaklılık", "Güvenilir İletişim"],
        },
      ],
    },
    highlights: {
      heading: "Katkı Sağladığım Çalışmalar",
      label: "Bankacılık & sigorta alanında katkı sağladığım çalışmalar",
      intro: "Profesyonel deneyimim boyunca, bir sistemin ne yapması gerektiğini netleştirmeye, gerçekte ne yaptığını doğrulamaya ve bu iki şey arasındaki farkı aksiyon alınabilir hale getirmeye odaklandım. Aşağıdaki alanlar, en yoğun katkı sağladığım çalışma türlerini yansıtıyor.",
      items: [
        {
          title: "Uluslararası Ödeme Akışları ve Statü Davranışları",
          text: "Ödeme ve mesaj süreçlerinde statü bazlı davranışların inquiry ekranlarına yansımasını ve sistem çıktılarının fonksiyonel beklentiyle uyumunu değerlendirdim. Beklenen ile gerçekleşen arasındaki farkları analiz etmek, test senaryolarını netleştirmek ve iş kurallarını daha izlenebilir kılmak bu alandaki temel katkılarım oldu.",
        },
        {
          title: "Sınır Ötesi Çekirdek Bankacılık Süreçleri",
          text: "Farklı ülke yapılarına özgü bankacılık projelerinde, iş gereksinimlerinin teknik akışlarla uyumlu ele alınması ve fonksiyonel netliğin artırılması üzerine çalıştım. Servis davranışları, veri doğrulama adımları ve operasyonel etkiler birlikte değerlendirilerek daha uygulanabilir analiz çıktıları oluşturulmasına katkı sağladım.",
        },
        {
          title: "Entegrasyon, Servis ve Veri Doğrulama",
          text: "API ve web servis odaklı yapılarda, iş ihtiyacının teknik davranışa dönüşümünü anlamak ve bu dönüşümün doğruluğunu kontrol etmek üzerine çalıştım. Veri akışı, alan eşleşmeleri, yanıt mantığı ve sistem davranışları üzerinden hem analiz hem de test süreçlerine katkıda bulundum.",
        },
        {
          title: "Fonksiyonel Test ve UAT Süreçleri",
          text: "Fonksiyonel beklentileri test edilebilir hale getirmek, senaryoları yapılandırmak ve iş birimi doğrulama süreçlerini düzenli yürütmek tarafında aktif rol aldım. Yaklaşımım yalnızca test adımı yazmak değil; neyin doğrulanması gerektiğini ve nedenini görünür kılmak oldu.",
        },
        {
          title: "Operasyonel Süreç ve Ekran Analizi",
          text: "Kullanıcıların karar aldığı, işlem takibi yaptığı ya da operasyonel kontrol yürüttüğü ekranlarda; işlevsellik, sadelik ve süreç tutarlılığı dengesi gözeterek analizler yaptım. Amaç yalnızca ekranı incelemek değil; arkasındaki iş mantığını, kullanıcı ihtiyacını ve sistemsel karşılığını birlikte okumaktı.",
        },
        {
          title: "Hata İnceleme ve Kök Neden Analizi",
          text: "Beklenen sistem davranışı ile gerçekleşen çıktı arasındaki farkları incelemek, veri kontrolleriyle doğrulamak ve problemi kök neden seviyesinde ele almak çalışmalarımın sürekli bir parçası oldu. Bu alanda en çok önem verdiğim şey, semptomu tarif etmek yerine aksiyon alınabilir netlik üretmek.",
        },
      ],
    },
    showcase: {
      heading: "Analist Vitrini",
      label: "Yapılandırılmış düşünce, somut çıktılar.",
      subheading: "Bu örnekler, analiz problemlerine nasıl yaklaştığımı gösteriyor — kullandığım yapıyı, sorduğum soruları ve ne zaman işin bittiğine dair anlayışımı.",
      cases: [
        {
          id: "VAKA-01",
          title: "Ödeme Hatası Kök Neden Analizi",
          type: "Kök Neden Analizi",
          problem: "Bir sürüm döngüsünde, sınır ötesi işlemler Avrupa muhabir bankalarına yönlendirme aşamasında hata almaya başladı; işlenemeyen ödemeler kuyruğa doldu ve manuel mutabakat yüküne neden oldu.",
          approach: "Hata zincirini UI katmanından servis ve veritabanı katmanlarına kadar izledim. Beklenen ve gerçekleşen API davranışı arasındaki ayrışma noktasını — XML şablonundaki bir alan eşleştirme hatasını — tespit ettim.",
          resolution: [
            { step: "Anlık", title: "Geri Al & Yeniden İşle", desc: "Mapping konfigürasyonu geri alındı; başarısız işlem kuyruğu manuel olarak yeniden işlendi." },
            { step: "Önleyici", title: "Payload Doğrulama Kapısı", desc: "Hatalı payload'ları göndermeden önce yakalamak için entegrasyon katmanına şema doğrulama kontrolü eklendi." },
            { step: "Süreç", title: "UAT Regresyon Kuralı", desc: "Çekirdek mapping güncellemelerinde tüm XML şablonları için zorunlu regresyon kontrolü standart hale getirildi." },
          ],
          outcome: "Düzeltme sonrasında sorun tekrarlamadı. Doğrulama kapısı benzer entegrasyon noktalarında standart uygulama olarak benimsendi.",
          tags: ["Kök Neden Analizi", "XML", "API", "Test"],
        },
        {
          id: "VAKA-02",
          title: "Uluslararası Havale Karar Akışı",
          type: "Süreç Haritalama",
          problem: "Ödeme yönlendirme mantığının resmi bir dokümantasyonu yoktu. Bu durum, özellikle uyumluluk zaman aşımları ve yedek davranış etrafında tutarsız işlemlere yol açıyordu.",
          approach: "Transfer sürecinin tamamını doğrulama, uyumluluk, yönlendirme, uzlaşma ve bildirim adımlarıyla yapılandırılmış bir karar akışı olarak haritaladım.",
          nodes: [
            { step: "Başlatma", desc: "Kullanıcı lehtar ve tutar bilgilerini girer", highlight: false },
            { step: "Doğrulama", desc: "Format kontrolü, limit kuralları, hesap durumu", highlight: false },
            { step: "Uyumluluk", desc: "AML / KYC tarama — asenkron API çağrısı", highlight: true },
            { step: "Yönlendirme", desc: "Muhabir banka seçim mantığı", highlight: false },
            { step: "Uzlaşma", desc: "Defter borç ve alacak girişleri", highlight: false },
            { step: "Bildirim", desc: "Başlatıcıya durum güncellemesi iletilir", highlight: false },
          ],
          insight: "Uyumluluk adımı en kritik risk noktasıydı — zaman aşımı durumunda ne olacağı belirsizdi. Yedek davranışı reddetmek yerine kuyruğa almak olarak tanımladım; bu da iş sürekliliği beklentisiyle daha uyumlu bir çözüm oldu.",
          tags: ["Süreç Haritalama", "Ödeme Akışları", "Karar Mantığı"],
        },
        {
          id: "VAKA-03",
          title: "Operasyonel KPI Görünümü — Sigorta Sistemi",
          type: "KPI Analizi",
          problem: "Ekibin operasyonel performansa yapılandırılmış bir bakışı yoktu; sorunlar proaktif takip yerine reaktif olarak ele alınıyor, çözüm trendleri izlenmiyordu.",
          approach: "Sistem çalışma süresi, ortalama çözüm süresi, test kapsamı ve UAT onay oranını kapsayan sade ama anlamlı bir KPI seti tanımladım; raporlamayı bu göstergeler etrafında yapılandırdım.",
          metrics: [
            { value: "99.7%", label: "Sistem Çalışma Süresi", color: "emerald" },
            { value: "18.4s", label: "Ort. Çözüm Süresi (sa)", color: "amber" },
            { value: "94.0%", label: "Test Kapsamı", color: "primary" },
            { value: "98.2%", label: "UAT Onay Oranı", color: "cyan" },
          ],
          trend: { label: "Hata Hacmi Trendi", value: "Önceki çeyreğe göre –%12", positive: true },
          insight: "Ortalama çözüm süresi aykırı değerleri maskeliyordu — küçük sayıda hata çok daha uzun sürüyordu. Bu hataların önceliklendirilmesi ekibin kapasiteyi nasıl yönettiğini değiştirdi.",
          tags: ["KPI", "Raporlama", "Sigorta", "UAT"],
        },
        {
          id: "VAKA-04",
          title: "Gereksinimden Fonksiyonel Ekran Tasarımına",
          type: "Fonksiyonel Spesifikasyon",
          problem: "Bir iş birimi birleşik bir operasyonel görünüme ihtiyaç duyuyordu. Mevcut akış birden fazla ekrana dağılmış durumdaydı; tekrarlayan veri girişi ve gereksiz sürtünme yaratıyordu.",
          approach: "Gerçek günlük iş görevlerini anlamak için paydaşlarla görüşmeler yaptım. Mevcut ekran mantığını haritaladım. Temel alanları gereksiz olanlardan ayırdım. Net işlevsel ayrımla birleşik bir ekran yapısı tasarladım.",
          steps: [
            { phase: "Keşif", action: "Paydaş görüşmeleri + mevcut ekran incelemesi" },
            { phase: "Analiz", action: "Alan düzeyinde bağımlılık haritası — ne neyi etkiliyor?" },
            { phase: "Tasarım", action: "Her bölüm için gerekçesiyle birlikte fonksiyonel wireframe" },
            { phase: "Doğrulama", action: "İş birimi ile UAT incelemesi ve iterasyon" },
          ],
          outcome: "Ekran sayısı 5'ten 2'ye düştü. Üç gereksiz veri giriş adımı kaldırıldı. İlk UAT turunda büyük revizyon olmadan onaylandı.",
          tags: ["Gereksinimler", "Fonksiyonel Tasarım", "UX Analizi", "UAT"],
        },
        {
          id: "VAKA-05",
          title: "API Entegrasyonu — Beklenen ve Gerçekleşen",
          type: "Entegrasyon Analizi",
          problem: "Entegrasyon testleri sırasında, harici bir bankacılık servisinden gelen yanıt payload'ları kararlaştırılan sözleşmeyle eşleşmedi; bu durum aşağı akış işlem hatalarına yol açtı.",
          approach: "API spesifikasyonunu gerçek servis yanıtlarıyla alan alan karşılaştırdım. Alan adları, veri tipleri, zorunluluk kuralları ve değer aralıklarını kapsayan yapılandırılmış bir delta tablosu oluşturdum.",
          delta: [
            { field: "beneficiaryIBAN", expected: "Zorunlu · String(34)", actual: "Yanıtların ~%14'ünde eksik", status: "fail" },
            { field: "transactionRef", expected: "Alfanümerik(20)", actual: "Yalnızca sayısal — uzunluk uyumsuzluğu", status: "fail" },
            { field: "statusCode", expected: "Enum: [01, 02, 03]", actual: "Zaman aşımında 04 dönüyor (belgesiz)", status: "warn" },
            { field: "settlementDate", expected: "ISO 8601 formatı", actual: "Uyumlu — sorun yok", status: "pass" },
          ],
          outcome: "Yapılandırılmış delta raporu tedarikçiyle paylaşıldı. Dört sorundan üçü bir sonraki yapıdan önce çözüldü. Biri sözleşme değişikliği kapsamında eskalasyon edildi.",
          tags: ["API Entegrasyon", "Payload Analizi", "Test Tasarımı", "Hata Takibi"],
        },
      ],
    },
    education: {
      heading: "Eğitim & Sertifikalar",
      label: "Akademik geçmiş ve süregelen gelişim",
      academicLabel: "Akademik Geçmiş",
      certsLabel: "Eğitimler & Sertifikalar",
      degrees: [
        {
          degree: "Yüksek Lisans — Yönetim Bilişim Sistemleri ve Mühendisliği",
          school: "Marmara Üniversitesi",
          date: "Şub 2023 – Haz 2024",
          detail: 'Tez: "Sigorta Sektörünün Dijital Dönüşümünde Veri Analitiği Uygulamalarının Rolü"',
        },
        {
          degree: "Değişim Öğrencisi — Bilgisayar Bilimleri",
          school: "Lodz Üniversitesi, Polonya",
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
        { title: "Yazılım Geliştirme Yaşam Döngüsü (SDLC)", issuer: "LinkedIn Learning" },
        { title: "İş Analitiğine Giriş", issuer: "365 Data Science" },
        { title: "İş Analistleri için Üretken Yapay Zeka", issuer: "LinkedIn Learning" },
        { title: "Veri Bilimi & ML Bootcamp", issuer: "Veri Bilimi Okulu" },
        { title: "Veri Bilimciler için İleri SQL", issuer: "LinkedIn Learning" },
        { title: "Python ile Algoritmik Düşünce", issuer: "LinkedIn Learning" },
        { title: "Veriyle Hikâye Anlatımı", issuer: "Sertifika" },
        { title: "SAP BI/BW'ye Giriş", issuer: "LinkedIn Learning" },
      ],
    },
    footer: {
      heading: "Bağlanalım.",
      role: "Technical Analyst · Bankacılık & Finansal Teknolojiler",
      rights: "Tüm hakları saklıdır.",
      cta: "Bankacılık teknolojileri, finansal sistem analizi ve teknik analist rollerinde yeni fırsatlara açığım. Mesaj atmaktan çekinmeyin.",
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
