import { createContext, useContext, useState } from "react";

export type Lang = "en" | "tr";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Areas of Expertise",
      highlights: "Work I Contributed To",
      showcase: "Approach",
      education: "Education",
      beyondcv: "Beyond the CV",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new opportunities",
      name: "Görkem Köroğlu",
      title: "Technical Analyst",
      subtitle: "Banking & Financial Technologies",
      tagline: "I work where business requirements, system behavior, and technical validation need to align — structured analysis across core banking, integrations, and payment environments.",
      downloadCV: "Download CV",
      viewShowcase: "View My Approach",
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
      intro: "I'm a Technical Analyst working in banking and financial technologies — where business requirements, system behavior, and technical implementation all have to meet.",
      description: "My focus is understanding what a system should do, validating whether it actually does it, and making the gap visible when it doesn't. I work across systems analysis, integration behavior, data validation, and UAT — bringing structure to requirements and clarity to the spaces where business logic meets technical execution.",
      bullets: [
        "Systems and functional analysis across international core banking and insurance platforms",
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
          title: "Senior Business Analyst",
          company: "Yapı Kredi Teknoloji",
          companyNote: "via NTT DATA Business Solutions",
          date: "Oct 2024 – Present",
          location: "Istanbul",
          summary: "Working on international core banking implementations — systems analysis, integration behavior, and payment flow analysis for banks in Azerbaijan, Germany, and the Netherlands.",
          items: [
            "Systems and functional analysis for international core banking projects — from requirements to validated delivery",
            "API and Web Service integration analysis — XML/JSON payload mapping, field validation, response behavior verification",
            "SQL-based data validation and root cause investigation across development, test, and pre-production environments",
            "Functional, service, and database test design; UAT planning, scenario management, and coordination",
            "Requirement documentation, defect tracking (Jira/Qmetry), and sprint-level delivery support",
            "Cross-border payment flows: SWIFT and SEPA message structures, inquiry logic, and status behavior analysis",
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
            "PL/SQL-based data analysis, system verification, and root cause investigation across insurance platform workflows",
            "Functional requirement documents, process flow diagrams, and UI specifications with clear acceptance criteria",
            "Test scenario design, UAT coordination, and structured defect resolution across system releases",
            "Insurance workflow analysis — identifying inconsistencies and proposing systematic, validated improvements",
            "Cross-team coordination between business stakeholders and development across multiple concurrent initiatives",
          ],
          tags: ["Insurance Systems", "PL/SQL", "Functional Specs", "UAT", "Root Cause Analysis", "Process Design"],
        },
        {
          title: "Data Science & ML Program",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analytical Foundation",
          date: "Mar – Sep 2022",
          location: "",
          summary: "Developed analytical foundations in Python, SQL, and data-driven thinking — applied directly in data validation, root cause analysis, and requirement evaluation work today.",
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
      heading: "Areas of Expertise",
      label: "What I bring to a project",
      categories: [
        {
          title: "Analysis & Requirement Management",
          skills: ["Systems Analysis", "Functional Analysis", "Business Analysis", "Requirement Clarification", "Flow Design", "Process Improvement"],
        },
        {
          title: "System & Integration Analysis",
          skills: ["API / Web Services", "XML / JSON Mapping", "Integration Behavior", "Service Response Analysis", "End-to-End System Analysis"],
        },
        {
          title: "Data Validation & Root Cause Analysis",
          skills: ["SQL", "PL/SQL", "Data Validation", "Root Cause Investigation", "Cross-Environment Testing"],
        },
        {
          title: "Testing, UAT & Pre-Release Validation",
          skills: ["Functional Testing", "Service Testing", "Database Testing", "UAT Coordination", "Regression Testing", "Defect Tracking"],
        },
        {
          title: "Banking & Financial Systems",
          skills: ["Core Banking", "Cross-Border Payments", "SWIFT / SEPA", "Financial Systems", "Insurance Technologies"],
        },
        {
          title: "Tools & Work Environment",
          skills: ["Jira", "Confluence", "Qmetry", "Postman", "Swagger", "MS Visio", "SQL Server"],
        },
        {
          title: "Strengths",
          skills: ["Structured Thinking", "Business–Technical Bridge", "Analytical Clarity", "Detail Orientation", "Reliable Communication"],
        },
      ],
    },
    highlights: {
      heading: "Work I Contributed To",
      label: "Areas where I've added the most value",
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
      heading: "My Analytical Approach",
      label: "How I think through problems",
      subheading: "Each case shows how I move from an ambiguous situation to a clear, actionable output — across root cause analysis, process clarity, and integration validation.",
      cases: [
        {
          id: "CASE-01",
          title: "Isolating a Payment Failure",
          type: "Root Cause Analysis",
          context: "Core banking · Cross-border payments · Integration testing",
          problem: "Transactions to European correspondent banks were failing in specific routing scenarios. The symptom was visible; the cause wasn't. Multiple teams had conflicting hypotheses about where the breakdown occurred.",
          approach: [
            "Traced the failure chain layer by layer — UI, service, and database — to narrow the scope",
            "Compared expected API behavior against captured request and response payloads",
            "Identified the divergence: a required field populated incorrectly in specific routing conditions",
            "Ruled out infrastructure causes through targeted SQL queries across environments",
          ],
          finding: "The root cause was a silent field mapping error in the XML template — one that caused no upstream error but produced malformed payloads in specific routing conditions. No pre-submission validation existed to catch it.",
          outcome: "Root cause documented and shared with technical and business stakeholders. A pre-flight payload validation gate was added to the integration layer. The fix was testable — not just deployed.",
          tags: ["Root Cause", "XML Payload", "SQL Validation", "API Testing"],
        },
        {
          id: "CASE-02",
          title: "Clarifying an Undocumented Payment Flow",
          type: "Process Analysis",
          context: "International wire transfer · Compliance routing · Cross-border payments",
          problem: "An international payment flow had no formal documentation of its routing and compliance logic. Edge cases — particularly around AML screening timeouts and fallback behavior — were being handled ad hoc, leading to inconsistent outcomes.",
          approach: [
            "Mapped the full transfer lifecycle from initiation to settlement, step by step",
            "Identified all decision points where behavior was ambiguous or undocumented",
            "Isolated the compliance timeout node as the highest-risk gap — an async call with no documented fallback",
            "Worked with technical and business stakeholders to align on the correct fallback behavior",
          ],
          finding: "The compliance screening step was the critical risk point. When the AML API timed out, there was no agreed behavior — some paths rejected, others queued. Neither was validated against business expectations.",
          outcome: "Fallback behavior defined with explicit business approval. The full decision flow was formalized as a reference document used in UAT planning and future regression scenarios.",
          tags: ["Process Mapping", "Decision Logic", "Compliance", "UAT"],
        },
        {
          id: "CASE-03",
          title: "From Business Need to Functional Screen Design",
          type: "Functional Specification",
          context: "Insurance operations · UI analysis · Stakeholder requirements",
          problem: "A business team was navigating 5 separate screens to complete a single operational workflow — causing repeated data entry, user errors, and delays. The request was 'build a better screen,' but the real problem wasn't the screen.",
          approach: [
            "Conducted stakeholder interviews to understand actual daily tasks — not assumed ones",
            "Mapped all current-state screens to identify overlaps, dependencies, and redundant fields",
            "Distinguished between fields the workflow genuinely required and fields shown out of habit",
            "Designed a unified 2-screen structure with clear functional separation and explicit UX rationale",
          ],
          finding: "Three of the five screens existed because of historical workarounds, not genuine business logic. The underlying need was simpler than the current system suggested — consolidation was possible without losing any essential functionality.",
          outcome: "Screen count reduced from 5 to 2. Three redundant data entry steps removed. Design validated in the first UAT round with no major revision — a sign the requirements were well-defined before development began.",
          tags: ["Functional Spec", "Requirements", "UX Analysis", "UAT"],
        },
        {
          id: "CASE-04",
          title: "Integration Contract Validation",
          type: "Integration Analysis",
          context: "External banking service · API integration testing · Payload validation",
          problem: "During integration testing, response payloads from an external banking service deviated from the agreed API contract across multiple fields — causing downstream failures that appeared random but had a clear pattern.",
          approach: [
            "Systematically compared the API specification against captured service responses, field by field",
            "Built a structured delta table: field name, expected type/format, actual behavior, and severity",
            "Categorized deviations by impact: silent failures, data integrity risks, and undocumented edge-case behaviors",
            "Prepared a vendor-shareable report with specific examples and clear expected corrections per finding",
          ],
          finding: "Four deviations identified. Two caused silent processing failures. One was an undocumented status code on timeout — unknown to both sides. One required field was absent in ~14% of responses.",
          outcome: "Structured delta report shared with the vendor. Three of four issues resolved before the next build. One escalated to contract amendment. All findings were test-verifiable — no ambiguity in the scope of each fix.",
          tags: ["Integration Analysis", "Payload Validation", "Defect Analysis", "API Testing"],
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
      skills: "Uzmanlık Alanları",
      highlights: "Katkı Sağladığım Çalışmalar",
      showcase: "Yaklaşımım",
      education: "Eğitim",
      beyondcv: "CV'nin Ötesinde",
      contact: "İletişim",
    },
    hero: {
      badge: "Yeni fırsatlara açık",
      name: "Görkem Köroğlu",
      title: "Technical Analyst",
      subtitle: "Bankacılık & Finansal Teknolojiler",
      tagline: "İş gereksinimlerinin, sistem davranışının ve teknik doğrulamanın aynı çerçevede okunmasını sağlıyorum — çekirdek bankacılık, entegrasyon ve ödeme sistemleri ortamlarında yapılandırılmış analiz odağıyla.",
      downloadCV: "CV İndir",
      viewShowcase: "Yaklaşımımı Gör",
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
      description: "Bir sistemin ne yapması gerektiğini anlamak, gerçekte ne yaptığını doğrulamak ve ikisi arasındaki farkı somutlaştırmak üzerine yoğunlaşıyorum. Sistem analizi, entegrasyon davranışı, veri doğrulama ve UAT süreçlerinde çalışarak gereksinimlere yapı, teknik-iş köprüsüne ise netlik katıyorum.",
      bullets: [
        "Uluslararası çekirdek bankacılık ve sigorta platformlarında sistem ve fonksiyonel analiz",
        "API ve web servis entegrasyon analizi — alan eşleştirme, payload doğrulama, yanıt davranışı",
        "SQL ve PL/SQL tabanlı veri doğrulama ve kök neden araştırması",
        "Fonksiyonel, servis ve veritabanı test tasarımı; UAT planlaması ve koordinasyonu",
        "Gereksinim netleştirme ve teknik ile iş ekiplerine yönelik yapılandırılmış dokümantasyon",
        "Uluslararası ekiplerle Agile ortamında çapraz fonksiyonlu teslimat",
      ],
      howIWork: {
        heading: "Nasıl çalışırım",
        items: [
          { title: "Katmanlı düşünme", desc: "Bir çözüm önerisinden önce problemi iş kuralı, sistem davranışı, veri etkisi ve operasyonel sonuç olarak ayrıştırıyorum." },
          { title: "Dokümantasyonda kesinlik", desc: "Net spesifikasyonlar geri dönüşü azaltır. Geliştiriciler için yeterince detaylı, iş birimleri için yeterince açık yazıyorum." },
          { title: "Önce doğrulama", desc: "Test senaryolarını ve uç vakaları, uygulama tamamlanmadan tasarlıyorum." },
          { title: "İş ve teknik akıcılığı", desc: "Entegrasyon dökümanlarını okuyabiliyor, servis davranışını anlıyor ve her iki tarafa da net şekilde aktarabiliyorum." },
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
          summary: "Azerbaycan, Almanya ve Hollanda'daki bankalar için uluslararası çekirdek bankacılık projelerinde sistem analizi, entegrasyon davranışı ve ödeme akışı analizi üzerine çalışıyorum.",
          items: [
            "Uluslararası çekirdek bankacılık projeleri için gereksinimden doğrulanmış teslirata uçtan uca sistem ve fonksiyonel analiz",
            "API ve web servis entegrasyon analizi — XML/JSON payload eşleştirme, alan doğrulama, yanıt davranışı doğrulama",
            "Geliştirme, test ve ön prodüksiyon ortamlarında SQL tabanlı veri doğrulama ve kök neden araştırması",
            "Fonksiyonel, servis ve veritabanı test tasarımı; UAT planlaması, senaryo yönetimi ve koordinasyonu",
            "Gereksinim dokümantasyonu, hata takibi (Jira/Qmetry) ve sprint düzeyinde teslimat desteği",
            "Sınır ötesi ödeme akışları: SWIFT ve SEPA mesaj yapıları, inquiry mantığı ve statü davranışı analizi",
          ],
          tags: ["Çekirdek Bankacılık", "SWIFT / SEPA", "API Entegrasyon", "SQL", "UAT", "Sistem Analizi", "Fonksiyonel Analiz"],
        },
        {
          title: "Teknik İş Analisti",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Eyl 2022 – Eyl 2024",
          location: "İstanbul",
          summary: "İş gereksinimlerini fonksiyonel spesifikasyonlara dönüştürdüm; sigorta sistemi iş akışlarında test ve doğrulama süreçlerini yürüttüm.",
          items: [
            "Sigorta platform iş akışlarında PL/SQL tabanlı veri analizi, sistem doğrulama ve kök neden araştırması",
            "Net kabul kriterleri ile fonksiyonel gereksinim belgeleri, süreç akış diyagramları ve UI spesifikasyonu",
            "Test senaryosu tasarımı, UAT koordinasyonu ve sistem sürümlerinde yapılandırılmış hata çözümü",
            "Sigorta iş akışı analizi — tutarsızlıkların tespiti ve sistematik, doğrulanmış iyileştirme önerileri",
            "Birden fazla eş zamanlı girişimde iş paydaşları ile geliştirme ekipleri arasında çapraz ekip koordinasyonu",
          ],
          tags: ["Sigorta Sistemleri", "PL/SQL", "Fonksiyonel Spec", "UAT", "Kök Neden Analizi", "Süreç Tasarımı"],
        },
        {
          title: "Veri Bilimi & ML Programı",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analitik Temel",
          date: "Mar – Eyl 2022",
          location: "",
          summary: "Python, SQL ve veri odaklı düşünce alanında analitik temel geliştirdim. Bu bilgi bugün veri doğrulama, kök neden analizi ve gereksinim değerlendirmesi çalışmalarıma doğrudan yansıyor.",
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
      heading: "Uzmanlık Alanları",
      label: "Projeye kattıklarım",
      categories: [
        {
          title: "Analiz & Gereksinim Yönetimi",
          skills: ["Sistem Analizi", "Fonksiyonel Analiz", "İş Analizi", "Gereksinim Netleştirme", "Akış Tasarımı", "Süreç İyileştirme"],
        },
        {
          title: "Sistem & Entegrasyon Analizi",
          skills: ["API / Web Servisleri", "XML / JSON Eşleştirme", "Entegrasyon Davranışı", "Servis Yanıt Analizi", "Uçtan Uca Sistem Analizi"],
        },
        {
          title: "Veri Doğrulama & Kök Neden Analizi",
          skills: ["SQL", "PL/SQL", "Veri Doğrulama", "Kök Neden Araştırması", "Çapraz Ortam Testi"],
        },
        {
          title: "Test, UAT & Yayın Öncesi Doğrulama",
          skills: ["Fonksiyonel Test", "Servis Testi", "Veritabanı Testi", "UAT Koordinasyonu", "Regresyon Testi", "Hata Takibi"],
        },
        {
          title: "Bankacılık & Finansal Sistem Bilgisi",
          skills: ["Çekirdek Bankacılık", "Sınır Ötesi Ödemeler", "SWIFT / SEPA", "Finansal Sistemler", "Sigorta Teknolojileri"],
        },
        {
          title: "Araçlar & Çalışma Ortamı",
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
      label: "En fazla değer ürettiğim çalışma alanları",
      intro: "Profesyonel deneyimim boyunca, bir sistemin ne yapması gerektiğini netleştirmeye, gerçekte ne yaptığını doğrulamaya ve bu iki şey arasındaki farkı aksiyon alınabilir hale getirmeye odaklandım. Aşağıdaki alanlar, en yoğun katkı sağladığım çalışma türlerini yansıtıyor.",
      items: [
        {
          title: "Uluslararası Ödeme Akışları ve Statü Davranışları",
          text: "Ödeme ve mesaj süreçlerinde statü bazlı davranışların inquiry ekranlarına yansımasını ve sistem çıktılarının fonksiyonel beklentiyle uyumunu değerlendirdim. Beklenen ile gerçekleşen arasındaki farkları analiz etmek, test senaryolarını netleştirmek ve iş kurallarını daha izlenebilir kılmak temel katkılarım oldu.",
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
      heading: "Analiz Yaklaşımım",
      label: "Problemlere nasıl yaklaştığım",
      subheading: "Her vaka, belirsiz bir durumdan net ve aksiyon alınabilir bir çıktıya nasıl geçtiğimi gösteriyor — kök neden analizi, süreç netliği ve entegrasyon doğrulaması üzerinden.",
      cases: [
        {
          id: "VAKA-01",
          title: "Ödeme Hatasının Kök Nedenini Tespit Etme",
          type: "Kök Neden Analizi",
          context: "Çekirdek bankacılık · Sınır ötesi ödemeler · Entegrasyon testi",
          problem: "Belirli yönlendirme senaryolarında Avrupa muhabir bankalarına gönderilen işlemler hata alıyordu. Semptom belliydi; neden değildi. Farklı ekipler, hatanın nerede kaynaklandığına dair birbirinden farklı hipotezler öne sürüyordu.",
          approach: [
            "Hata zincirini UI, servis ve veritabanı katmanlarında katman katman izledim",
            "Beklenen API davranışını gerçek request ve response verileriyle karşılaştırdım",
            "Ayrışma noktasını tespit ettim: belirli yönlendirme koşullarında yanlış doldurulan zorunlu bir alan",
            "Hedefli SQL sorguları ile altyapı kaynaklı nedenleri eledim",
          ],
          finding: "Kök neden, XML şablonundaki sessiz bir alan eşleştirme hatasıydı. Upstream katmanda herhangi bir hata üretmiyordu; ancak belirli yönlendirme koşullarında bozuk payload'lara yol açıyordu. Bunu göndermeden önce yakalayacak bir doğrulama adımı yoktu.",
          outcome: "Kök neden belgelendi ve ilgili teknik ile iş ekipleriyle paylaşıldı. Entegrasyon katmanına ön doğrulama kapısı eklendi. Düzeltme yalnızca deploy edilmedi — test edilebilir ve doğrulanabilir hale getirildi.",
          tags: ["Kök Neden", "XML Payload", "SQL Doğrulama", "API Testi"],
        },
        {
          id: "VAKA-02",
          title: "Belgesiz Bir Ödeme Akışında Karar Noktalarını Netleştirme",
          type: "Süreç Analizi",
          context: "Uluslararası havale · Uyumluluk yönlendirme · Sınır ötesi ödemeler",
          problem: "Uluslararası bir ödeme akışının yönlendirme ve uyumluluk mantığının resmi bir dokümantasyonu yoktu. Özellikle AML tarama zaman aşımları ve yedek davranış gibi istisnalar, geçici çözümlerle ele alınıyor ve tutarsız sonuçlar üretiyordu.",
          approach: [
            "Transfer sürecinin tamamını başlatmadan uzlaşmaya kadar adım adım haritaladım",
            "Davranışın belirsiz ya da belgesiz kaldığı tüm karar noktalarını tespit ettim",
            "Uyumluluk zaman aşımı adımını en yüksek riskli nokta olarak işaretledim — yedek davranışı tanımsız asenkron bir çağrıydı",
            "Teknik ve iş ekipleriyle doğru yedek davranış üzerinde mutabık kaldım",
          ],
          finding: "Kritik risk noktası, AML API çağrısının zaman aşımına uğradığı durumdu. Bu koşulda sistemin ne yapacağı konusunda hiçbir mutabakat yoktu — bazı akışlar redde giderken diğerleri kuyruğa alıyordu. İkisi de iş beklentisiyle doğrulanmamıştı.",
          outcome: "Yedek davranış, açık iş onayıyla tanımlandı. Karar akışının tamamı resmileştirilerek UAT planlaması ve gelecekteki regresyon senaryoları için referans belge olarak kullanılmak üzere paylaşıldı.",
          tags: ["Süreç Haritalama", "Karar Mantığı", "Uyumluluk", "UAT"],
        },
        {
          id: "VAKA-03",
          title: "İş İhtiyacından Fonksiyonel Ekran Tasarımına",
          type: "Fonksiyonel Spesifikasyon",
          context: "Sigorta operasyonları · UI analizi · Paydaş gereksinimleri",
          problem: "Bir iş birimi, tek bir operasyonel iş akışını tamamlamak için 5 ayrı ekranda gezinmek zorundaydı. Tekrarlayan veri girişi, kullanıcı hataları ve gecikmeler yaşanıyordu. Talep 'daha iyi bir ekran' idi; gerçek sorun ise ekran değildi.",
          approach: [
            "Varsayılan görevleri değil, gerçek günlük iş süreçlerini anlamak için paydaşlarla görüşmeler yaptım",
            "Tüm mevcut ekranları çakışmalar, bağımlılıklar ve gereksiz alanlar açısından haritaladım",
            "Gerçekten gerekli olan alanlarla alışkanlıktan gösterilen alanları birbirinden ayırdım",
            "Açık işlevsel ayrım ve UX gerekçesiyle birleşik 2 ekranlık yapı tasarladım",
          ],
          finding: "Beş ekrandan üçü iş mantığından değil, geçmişte yapılan geçici çözümlerden kaynaklanıyordu. Altta yatan ihtiyaç, mevcut sistemin işaret ettiğinden çok daha sade bir yapıya izin veriyordu.",
          outcome: "Ekran sayısı 5'ten 2'ye düştü. Üç gereksiz veri giriş adımı kaldırıldı. Tasarım, büyük revizyon olmadan ilk UAT turunda onaylandı; bu da gereksinimlerin geliştirme başlamadan önce doğru tanımlandığının göstergesiydi.",
          tags: ["Fonksiyonel Spec", "Gereksinimler", "UX Analizi", "UAT"],
        },
        {
          id: "VAKA-04",
          title: "Entegrasyon Sözleşmesi Doğrulaması",
          type: "Entegrasyon Analizi",
          context: "Harici bankacılık servisi · API entegrasyon testi · Payload doğrulama",
          problem: "Entegrasyon testlerinde, harici bir bankacılık servisinden gelen yanıt payload'ları birden fazla alanda kararlaştırılan API sözleşmesinden saptı. Bu durum, rastgele görünen ama net bir örüntüsü olan aşağı akış işlem hatalarına yol açtı.",
          approach: [
            "API spesifikasyonunu gerçek servis yanıtlarıyla alan alan sistematik biçimde karşılaştırdım",
            "Alan adı, beklenen tip/format, gerçek davranış ve önem derecesi içeren yapılandırılmış delta tablosu oluşturdum",
            "Sapmaları etkiye göre sınıflandırdım: sessiz hatalar, veri bütünlüğü riskleri ve belgesiz uç durum davranışları",
            "Belirli örnekler ve alan bazında beklenen düzeltmelerle tedarikçiye iletilebilir rapor hazırladım",
          ],
          finding: "Dört sapma tespit edildi. İkisi sessiz işlem hatalarına neden oluyordu. Biri zaman aşımında döndürülen ve her iki tarafça bilinmeyen belgesiz bir statü koduydu. Bir alan zorunlu olarak işaretlenmesine rağmen yanıtların yaklaşık %14'ünde eksikti.",
          outcome: "Yapılandırılmış delta raporu tedarikçiyle paylaşıldı. Dört sorundan üçü sonraki yapıdan önce çözüldü. Biri sözleşme değişikliği kapsamına alındı. Tüm bulgular test edilebilir biçimde tanımlandı — düzeltme kapsamında belirsizlik bırakılmadı.",
          tags: ["Entegrasyon Analizi", "Payload Doğrulama", "Hata Analizi", "API Testi"],
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
