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
      cases: "Analysis Cases",
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
          summary: "Working across international banking and payment systems, I analyze how requirements translate into system behavior — bringing structure to integration, data validation, and delivery quality for cross-border payment flows and core banking implementations.",
          items: [
            "Led systems and functional analysis for international core banking implementations across multiple country architectures, translating business requirements into traceable, testable specifications",
            "Analyzed API and web service integration behavior — mapping expected field values against actual payloads and identifying silent deviations before they reached production",
            "Investigated root causes of payment processing failures using SQL-based data validation across development, test, and pre-production environments",
            "Designed functional, service, and database test scenarios; coordinated UAT cycles to validate that business expectations were met with precision",
            "Worked across cross-border payment flows — analyzing message structures, status transitions, and routing logic to make behavior visible and testable",
            "Created shared clarity between business, development, and testing teams by structuring requirements, defect tracking, and analysis outputs that all sides could act on",
          ],
          tags: ["Core Banking", "Cross-Border Payments", "API Integration", "SQL", "UAT", "Systems Analysis"],
        },
        {
          title: "Technical Business Analyst",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Sep 2022 – Sep 2024",
          location: "Istanbul",
          summary: "As a Technical Business Analyst in insurance systems, I worked at the intersection of functional requirements and system validation — turning business needs into structured specifications and making test and UAT processes more reliable.",
          items: [
            "Translated business requirements into functional specifications with clear acceptance criteria, giving development teams a precise and testable baseline",
            "Conducted PL/SQL-based data analysis and system verification across insurance platform workflows to validate expected behavior and surface inconsistencies",
            "Designed test scenarios aligned with system behavior — including edge cases and exception flows — and coordinated UAT to verify actual against expected outcomes",
            "Investigated root causes of system discrepancies, separating symptoms from sources and documenting findings in a way that led to actionable fixes",
            "Collaborated across business units and development teams on multiple concurrent initiatives, maintaining clarity on requirements, priorities, and resolution paths",
          ],
          tags: ["Insurance Systems", "PL/SQL", "Functional Spec", "Test & UAT", "Root Cause Analysis", "Process Analysis"],
        },
        {
          title: "Data Science & ML Program",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analytical Foundation",
          date: "Mar – Sep 2022",
          location: "",
          summary: "An intensive training program that strengthened my analytical foundation — building the data, SQL, and structured-thinking skills that directly support data validation, root cause analysis, and requirement evaluation in my current work.",
          items: [
            "Python (pandas, numpy, matplotlib), SQL, and exploratory data analysis",
            "CRM analytics: Cohort Analysis, CLTV, RFM segmentation",
            "Recommendation systems: Collaborative Filtering and Hybrid approaches",
          ],
          tags: ["Python", "SQL", "Data Analysis", "Analytical Thinking"],
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
      label: "How I work through problems",
      subtitle: "How I turn ambiguous needs into clear, actionable outputs — through system behavior, data validation, integration flow, and operational impact.",
      principlesHeading: "How I approach a problem",
      principles: [
        {
          title: "I break problems into layers",
          text: "When I face an issue, I don't start with the symptom alone. I separate business rules, screen behavior, service flow, data impact, and operational effect — to understand where the real problem begins.",
        },
        {
          title: "I compare expected vs. actual behavior",
          text: "Good analysis starts with validation, not assumption. I place requirements, current system behavior, and actual output side by side so the gap becomes visible and measurable.",
        },
        {
          title: "I turn ambiguity into clear decisions",
          text: "Business needs often start broadly, while technical teams need precision. I bridge that gap by turning unclear requests into structured rules, acceptance criteria, and actionable outputs.",
        },
        {
          title: "I keep validation at the center",
          text: "I don't treat analysis as documentation only. Data checks, integration behavior, test scenarios, and edge cases are core parts of verifying that the solution is genuinely correct.",
        },
        {
          title: "I create shared clarity between teams",
          text: "One of the most important outcomes of analysis is shared understanding. I explain technical detail without losing business meaning, and frame business needs without ignoring technical reality.",
        },
        {
          title: "I focus on deliverable outcomes",
          text: "An analysis output is valuable only when it is usable. I aim to produce outputs that are implementable, testable, and sustainable — for development, testing, and operations teams alike.",
        },
      ],
      practiceHeading: "How this shows up in practice",
      practices: [
        {
          title: "Root Cause Analysis",
          intro: "When expected system behavior and actual output don't match, I focus on separating the source from the symptom.",
          points: [
            "Examine UI, service, and data layers together — not in isolation",
            "Compare expected behavior against actual records and process flow",
            "Narrow the problem to a verifiable solution area, not just a description",
          ],
          tags: ["Root Cause Analysis", "Data Validation", "System Behavior", "Issue Investigation"],
        },
        {
          title: "Integration & Service Validation",
          intro: "In API and service-based environments, I analyze whether field mappings, payload structure, and response behavior align with requirements.",
          points: [
            "Compare expected versus actual behavior at field level",
            "Surface silent failures and downstream effects before they compound",
            "Interpret technical findings together with business impact",
          ],
          tags: ["API Analysis", "Payload Validation", "Integration Behavior", "Service Testing"],
        },
        {
          title: "Process & Decision Flow Clarification",
          intro: "To understand why a process becomes difficult or inconsistent, I make decision points and exception paths visible — not just the steps.",
          points: [
            "Map the real end-to-end flow, not the assumed one",
            "Identify unclear routing and decision points",
            "Create a shared reference for business, technical, and operations teams",
          ],
          tags: ["Process Analysis", "Decision Flow", "Operational Impact", "Clarification"],
        },
        {
          title: "From Requirement to Test & UAT",
          intro: "I work to ensure consistency from requirement clarification through to testing and user acceptance — analysis should not stop at requirement gathering.",
          points: [
            "Make requirements concrete through clear acceptance criteria",
            "Frame test scenarios around actual system behavior",
            "Validate that business expectations are genuinely met during UAT",
          ],
          tags: ["Requirement Management", "Test Design", "UAT", "Functional Validation"],
        },
      ],
      closing: "At the core of my analysis approach are three things: structured thinking, validation discipline, and creating clarity between business and technical teams.",
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
      cases: "Analiz Vakaları",
      education: "Eğitim",
      beyondcv: "CV'nin Ötesinde",
      contact: "İletişim",
    },
    hero: {
      badge: "Yeni fırsatlara açık",
      name: "Görkem Köroğlu",
      title: "Teknik Analist",
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
      intro: "Bankacılık ve finansal teknolojiler alanında çalışan bir Teknik Analist'im. İş gereksinimlerinin, sistem davranışının ve teknik gerçeğin kesiştiği bu alanda değer üretiyorum.",
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
          summary: "Uluslararası bankacılık ve ödeme sistemleri projelerinde, gereksinimlerin sistem davranışıyla uyumunu netleştiren; entegrasyon, veri doğrulama, test ve teslim kalitesi tarafında aktif rol alan bir analiz yaklaşımıyla çalışıyorum.",
          items: [
            "Birden fazla ülke mimarisinde uluslararası çekirdek bankacılık projeleri için sistem ve fonksiyonel analiz yürüttüm; iş gereksinimlerini izlenebilir ve test edilebilir spesifikasyonlara dönüştürdüm",
            "API ve web servis entegrasyon davranışını analiz ettim — beklenen alan değerlerini gerçek payload'larla karşılaştırarak sessiz sapmaları üretime ulaşmadan görünür hale getirdim",
            "SQL tabanlı veri doğrulamasıyla ödeme işlem hatalarının kök nedenlerini geliştirme, test ve ön prodüksiyon ortamlarında inceledim",
            "Fonksiyonel, servis ve veritabanı test senaryoları tasarladım; iş beklentilerinin karşılandığını doğrulamak için UAT süreçlerini koordine ettim",
            "Sınır ötesi ödeme akışlarında mesaj yapılarını, statü geçişlerini ve yönlendirme mantığını analiz ederek sistem davranışını test edilebilir hale getirdim",
            "Gereksinimler, hata takibi ve analiz çıktıları üzerinden iş, geliştirme ve test ekipleri arasında her tarafın aksiyon alabildiği ortak netlik oluşturdum",
          ],
          tags: ["Çekirdek Bankacılık", "Sınır Ötesi Ödemeler", "API Entegrasyon", "SQL", "UAT", "Sistem Analizi"],
        },
        {
          title: "Teknik İş Analisti",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Eyl 2022 – Eyl 2024",
          location: "İstanbul",
          summary: "Teknik İş Analisti olarak sigorta sistemlerinde, fonksiyonel gereksinimler ile sistem doğrulamasının kesiştiği noktada çalıştım; iş ihtiyaçlarını yapılandırılmış spesifikasyonlara dönüştürerek test ve UAT süreçlerini daha güvenilir hale getirdim.",
          items: [
            "İş gereksinimlerini net kabul kriterleri içeren fonksiyonel spesifikasyonlara dönüştürdüm; geliştirme ekiplerine kesin ve test edilebilir bir başlangıç noktası sundum",
            "Sigorta platform iş akışlarında PL/SQL tabanlı veri analizi ve sistem doğrulaması yaparak beklenen davranışı kontrol ettim ve tutarsızlıkları görünür hale getirdim",
            "Sistem davranışına uygun test senaryoları tasarladım — uç durumlar ve istisna akışları dahil — ve gerçekleşenin beklenenle uyumunu doğrulamak için UAT süreçlerini koordine ettim",
            "Sistem tutarsızlıklarının kök nedenlerini inceledim; semptomu kaynaktan ayırarak bulguları aksiyon alınabilir düzeltmelere yönelten şekilde belgeledim",
            "Birden fazla eş zamanlı girişimde iş birimleri ve geliştirme ekipleri arasında gereksinimler, öncelikler ve çözüm yolları üzerinde netlik sağladım",
          ],
          tags: ["Sigorta Sistemleri", "PL/SQL", "Fonksiyonel Gereksinim", "Test & UAT", "Kök Neden Analizi", "Süreç Analizi"],
        },
        {
          title: "Veri Bilimi & ML Programı",
          company: "Veri Bilimi Okulu & Miuul",
          companyNote: "Analitik Temel",
          date: "Mar – Eyl 2022",
          location: "",
          summary: "Analitik altyapımı güçlendiren yoğun bir program. Veri, SQL ve yapılandırılmış düşünme alanlarında geliştirdiğim beceriler bugün veri doğrulama, kök neden analizi ve gereksinim değerlendirmesi çalışmalarıma doğrudan katkı sağlıyor.",
          items: [
            "Python (pandas, numpy, matplotlib), SQL ve keşifsel veri analizi",
            "CRM analitiği: Kohort Analizi, CLTV, RFM segmentasyonu",
            "Öneri sistemleri: İşbirliğine dayalı filtreleme ve hibrit yaklaşımlar",
          ],
          tags: ["Python", "SQL", "Veri Analizi", "Analitik Düşünce"],
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
          text: "Ödeme ve mesaj süreçlerinde statü bazlı davranışların nasıl yansıdığını ve sistem çıktılarının fonksiyonel beklentiyle uyumunu değerlendirdim. Beklenen ile gerçekleşen arasındaki farkları analiz etmek, test senaryolarını netleştirmek ve iş kurallarını daha izlenebilir kılmak temel katkılarım oldu.",
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
          text: "Kullanıcıların karar aldığı, işlem takibi yaptığı ya da operasyonel kontrol yürüttüğü ekranlarda; işlevsellik, sadelik ve süreç tutarlılığı dengesi gözeterek analizler yaptım. Amaç yalnızca ekranı incelemek değil; arkasındaki iş mantığını ve sistemsel karşılığını birlikte okumaktı.",
        },
        {
          title: "Hata İnceleme ve Kök Neden Analizi",
          text: "Beklenen sistem davranışı ile gerçekleşen çıktı arasındaki farkları incelemek, veri kontrolleriyle doğrulamak ve problemi kök neden seviyesinde ele almak çalışmalarımın sürekli bir parçası oldu. En çok önem verdiğim şey, semptomu tarif etmek yerine aksiyon alınabilir netlik üretmek.",
        },
      ],
    },
    showcase: {
      heading: "Analiz Yaklaşımım",
      label: "Problemlere nasıl yaklaştığım",
      subtitle: "Belirsiz ihtiyaçları; sistem davranışı, veri doğrulama, entegrasyon akışı ve operasyonel etki üzerinden netleştirme biçimimi gösteren çalışma yaklaşımım.",
      principlesHeading: "Bir problemi nasıl ele alırım?",
      principles: [
        {
          title: "Problemi katmanlarına ayırırım",
          text: "Bir sorunla karşılaştığımda önce semptomu değil, yapıyı anlamaya çalışırım. İş kuralı, ekran davranışı, servis akışı, veri etkisi ve operasyonel sonuç gibi katmanları ayırarak gerçek problemin nerede başladığını netleştiririm.",
        },
        {
          title: "Beklenen ile gerçekleşeni karşılaştırırım",
          text: "İyi analiz, varsayım üretmekten önce doğrulama yapmaktır. Gereksinimi, mevcut sistem davranışını ve oluşan çıktıyı yan yana koyar; farkın gerçekten nerede oluştuğunu görünür hale getiririm.",
        },
        {
          title: "Belirsizliği net karara dönüştürürüm",
          text: "İş birimi talepleri çoğu zaman genel başlar, teknik ekip ihtiyaçları ise daha net çerçeve ister. Bu iki alan arasında netlik kurar; belirsiz ifadeleri uygulanabilir kurallara, kabul kriterlerine ve doğrulanabilir analiz çıktısına dönüştürürüm.",
        },
        {
          title: "Doğrulamayı sürecin merkezine alırım",
          text: "Analizi yalnızca doküman üretimi olarak görmem. Veri kontrolü, entegrasyon davranışı, test senaryosu ve uç durumlar üzerinden çözümün gerçekten doğru çalışıp çalışmadığını doğrulamayı işin doğal bir parçası olarak ele alırım.",
        },
        {
          title: "İş ve teknik ekipler arasında ortak anlayış kurarım",
          text: "Analizin en kritik çıktılarından biri ortak dil oluşturmaktır. Teknik detayı iş etkisinden koparmadan aktarır, iş ihtiyacını da teknik gerçeklerden uzaklaştırmadan çerçevelerim.",
        },
        {
          title: "Teslim edilebilir sonucu hedeflerim",
          text: "Bir analiz çıktısının değeri, yalnızca doğru olması değil; uygulanabilir, test edilebilir ve sürdürülebilir olmasıdır. Çalışmamı geliştirme, test ve operasyon ekipleri için kullanılabilir hale gelen bir yapıya dönüştürmeye odaklanırım.",
        },
      ],
      practiceHeading: "Bu yaklaşım işte nasıl karşılık bulur?",
      practices: [
        {
          title: "Kök Neden Analizi",
          intro: "Beklenen sistem davranışı ile gerçekleşen çıktı arasında fark oluştuğunda, semptomu değil kaynağı ayırmaya odaklanırım.",
          points: [
            "UI, servis ve veri katmanını birlikte değerlendiririm — birbirinden kopuk değil",
            "Beklenen davranışı mevcut kayıtlar ve akışlarla karşılaştırırım",
            "Sorunu yalnızca tarif etmem; doğrulanabilir çözüm alanına indirgerim",
          ],
          tags: ["Kök Neden Analizi", "Veri Doğrulama", "Sistem Davranışı", "Hata İnceleme"],
        },
        {
          title: "Entegrasyon ve Servis Doğrulaması",
          intro: "API ve servis odaklı yapılarda, alan eşleşmeleri, payload yapısı ve yanıt davranışının gereksinimle gerçekten uyumlu olup olmadığını analiz ederim.",
          points: [
            "Beklenen ve gerçekleşen davranışı alan düzeyinde karşılaştırırım",
            "Sessiz hataları ve aşağı akışta büyüyen etkileri erken görünür hale getiririm",
            "Teknik bulguları iş etkisiyle birlikte anlamlandırırım",
          ],
          tags: ["API Analizi", "Payload Doğrulama", "Entegrasyon Davranışı", "Servis Testi"],
        },
        {
          title: "Süreç ve Karar Noktalarını Netleştirme",
          intro: "Bir akışın neden karmaşıklaştığını anlamak için yalnızca adımları değil, karar noktalarını ve istisna senaryolarını da görünür hale getiririm.",
          points: [
            "Sürecin gerçek akışını baştan sona haritalarım — varsayılanı değil",
            "Belirsiz kalan karar ve yönlendirme noktalarını tespit ederim",
            "İş, teknik ve operasyon tarafı için ortak referans oluştururum",
          ],
          tags: ["Süreç Analizi", "Karar Akışı", "Operasyon Etkisi", "Netleştirme"],
        },
        {
          title: "Gereksinimden Test ve UAT'e İlerleme",
          intro: "Analizin yalnızca başlangıç aşamasında kalmaması gerektiğine inanırım. Gereksinim netleştirmesinden teste ve kullanıcı doğrulamasına kadar tutarlı ilerlemeyi sağlamaya çalışırım.",
          points: [
            "Gereksinimi net kabul kriterleriyle somutlaştırırım",
            "Test senaryolarını gerçek sistem davranışına göre çerçevelerim",
            "UAT sürecinde iş beklentisinin gerçekten karşılandığını doğrularım",
          ],
          tags: ["Gereksinim Yönetimi", "Test Tasarımı", "UAT", "Fonksiyonel Doğrulama"],
        },
      ],
      closing: "Analiz yaklaşımımın odağında üç şey var: yapılandırılmış düşünce, doğrulama disiplini ve iş ile teknik ekipler arasında netlik kurmak.",
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
      role: "Teknik Analist · Bankacılık & Finansal Teknolojiler",
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
