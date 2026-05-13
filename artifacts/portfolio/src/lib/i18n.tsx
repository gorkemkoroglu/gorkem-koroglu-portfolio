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
      tagline: "I work where business requirements, system behavior, and technical validation have to meet. My focus is core banking, integration environments, and cross-border payment flows — turning ambiguity into structured, testable analysis.",
      downloadCV: "Download CV",
      viewShowcase: "My Analytical Approach",
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
          summary: "Focused on international core banking and cross-border payment systems, I analyze how business requirements translate into integration behavior — validating that translation through data, service testing, and structured analysis that delivery teams can act on.",
          items: [
            "Conducted systems and functional analysis for international core banking implementations across multiple country architectures — including cross-border and border-payment environments — turning business requirements into traceable, testable specifications",
            "Analyzed API and web service integration behavior at field level: compared expected payload structures against actual request/response content, surfacing mapping gaps and silent deviations before they reached production",
            "Investigated root causes of payment processing failures through SQL-based data validation across development, test, and pre-production environments — separating data issues from business rule violations and integration errors",
            "Designed functional, service, and database test scenarios tied to actual system behavior; coordinated UAT cycles to verify that business expectations were genuinely met, not just technically passed",
            "Analyzed cross-border payment flow structures — message formats, status transitions, and routing logic — to make expected versus actual behavior visible and testable for all involved teams",
            "Built shared clarity between business, development, and testing teams through structured requirements, analysis outputs, and defect framing that each side could work from without reinterpretation",
          ],
          tags: ["Core Banking", "Cross-Border Payments", "API Integration", "SQL", "UAT", "Systems Analysis"],
        },
        {
          title: "Technical Business Analyst",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Sep 2022 – Sep 2024",
          location: "Istanbul",
          summary: "In insurance platform environments, I worked at the intersection of functional requirements and system validation — converting business needs into precise specifications and making the analysis process the backbone of testing and UAT.",
          items: [
            "Converted business requirements into functional specifications with clear, verifiable acceptance criteria — giving development teams a precise baseline to build from and test teams a concrete target to validate against",
            "Conducted PL/SQL-based data analysis and system verification across insurance platform workflows — identifying gaps between expected behavior and actual output, tracing each to its root cause",
            "Designed test scenarios grounded in real system behavior, including edge cases and exception flows; coordinated UAT sessions where business expectations were validated directly against system output",
            "Investigated system discrepancies by separating symptoms from root causes — documenting findings with enough specificity that fixes were targeted and rework was minimized",
            "Coordinated across business units and development teams on multiple concurrent initiatives, maintaining structured clarity on requirements, open items, and resolution paths throughout delivery",
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
      subtitle: "How I structure ambiguity into clear, testable outputs — through system behavior, integration validation, data analysis, and operational impact.",
      principlesHeading: "How I approach a problem",
      principles: [
        {
          title: "I break problems into layers",
          text: "Before reaching for a solution, I separate the problem by layer: business rule, system behavior, data impact, integration point, operational effect. Each layer can have a different root cause.",
        },
        {
          title: "I compare expected vs. actual",
          text: "I place the requirement next to the system output and ask whether they match — not whether they could. That gap is where the real analysis begins.",
        },
        {
          title: "I turn ambiguity into clear rules",
          text: "Business needs often arrive as intentions. Technical execution needs precision. I convert the space between them into structured acceptance criteria and testable specifications.",
        },
        {
          title: "Validation is part of the analysis",
          text: "I don't hand off requirements and walk away. Data checks, integration behavior, test coverage, and edge cases are how I verify that the analysis was correct.",
        },
        {
          title: "I build clarity between teams",
          text: "Business teams and technical teams don't always see the same problem. I make sure both sides are working from the same specification — with no interpretive gap.",
        },
        {
          title: "I produce usable outputs",
          text: "An analysis output is only valuable if it can be acted on. I aim for deliverables that are implementable, testable, and meaningful to whoever receives them.",
        },
      ],
      practiceHeading: "How this shows up in practice",
      practices: [
        {
          title: "Root Cause Analysis",
          intro: "When expected behavior and actual output diverge, I focus on the source — not the description of the symptom.",
          points: [
            "Examine UI, service, and data layers together — not in isolation",
            "Compare expected behavior against actual records and system flow",
            "Narrow the problem to a verifiable root cause, not a surface description",
          ],
          tags: ["Root Cause Analysis", "Data Validation", "System Behavior", "Issue Investigation"],
        },
        {
          title: "Integration & Service Validation",
          intro: "In API and service environments, I verify that field mappings, payload structure, and response behavior actually match what was specified.",
          points: [
            "Compare expected versus actual behavior at field level",
            "Surface silent failures and downstream effects before they compound",
            "Interpret technical findings in terms of business impact",
          ],
          tags: ["API Analysis", "Payload Validation", "Integration Behavior", "Service Testing"],
        },
        {
          title: "Process & Decision Flow Clarity",
          intro: "When a process becomes unclear or inconsistent, I make decision points and exception paths visible — not just the happy path.",
          points: [
            "Map the real end-to-end flow, not the assumed version",
            "Identify where routing logic and decision criteria are undefined",
            "Create a shared reference that business, technical, and operations teams can align on",
          ],
          tags: ["Process Analysis", "Decision Flow", "Operational Impact", "Clarification"],
        },
        {
          title: "Requirement to Test & UAT",
          intro: "Requirement clarity should feed directly into testing. I structure both processes so that UAT validates what was actually specified.",
          points: [
            "Make requirements concrete through clear, verifiable acceptance criteria",
            "Design test scenarios around real system behavior — including edge cases",
            "Validate that business expectations are genuinely met, not just technically passed",
          ],
          tags: ["Requirement Management", "Test Design", "UAT", "Functional Validation"],
        },
      ],
      closing: "My analysis work rests on three things: structured thinking, validation discipline, and clear communication between business and technical teams.",
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
      tagline: "İş gereksinimi, sistem davranışı ve teknik doğrulamanın kesiştiği noktada çalışıyorum. Odak alanım çekirdek bankacılık, entegrasyon ortamları ve sınır ötesi ödeme akışları — belirsizliği yapılandırılmış, test edilebilir analize dönüştürme odağıyla.",
      downloadCV: "CV İndir",
      viewShowcase: "Analiz Yaklaşımım",
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
          summary: "Uluslararası çekirdek bankacılık ve sınır ötesi ödeme sistemlerine odaklanarak, iş gereksiniminin entegrasyon davranışına nasıl dönüştüğünü analiz ediyorum. Bu dönüşümü veri, servis testi ve yapılandırılmış analiz çıktılarıyla doğruluyor; ekiplerin üzerinden aksiyon alabileceği netliği sağlıyorum.",
          items: [
            "Birden fazla ülke mimarisini kapsayan uluslararası çekirdek bankacılık projelerinde — sınır ötesi ödeme ortamları dahil — sistem ve fonksiyonel analiz yürüttüm; iş gereksinimlerini izlenebilir ve test edilebilir spesifikasyonlara dönüştürdüm",
            "API ve web servis entegrasyon davranışını alan bazında analiz ettim: beklenen payload yapısını gerçek request/response içeriğiyle karşılaştırarak mapping boşluklarını ve sessiz sapmaları üretime ulaşmadan görünür hale getirdim",
            "Ödeme işlem hatalarının kök nedenlerini SQL tabanlı veri doğrulamasıyla geliştirme, test ve ön prodüksiyon ortamlarında inceledim; veri sorunlarını iş kuralı ihlallerinden ve entegrasyon hatalarından ayırdım",
            "Gerçek sistem davranışına dayalı fonksiyonel, servis ve veritabanı test senaryoları tasarladım; iş beklentilerinin teknik geçer sayılmak yerine gerçekten karşılandığını doğrulamak için UAT süreçlerini koordine ettim",
            "Sınır ötesi ödeme akışı yapılarını — mesaj formatları, statü geçişleri ve yönlendirme mantığı — analiz ederek beklenen ile gerçekleşen davranışı tüm paydaşlar için görünür ve test edilebilir hale getirdim",
            "Yapılandırılmış gereksinimler, analiz çıktıları ve hata çerçevelemesi üzerinden iş, geliştirme ve test ekipleri arasında yeniden yoruma gerek duymadan üzerinde çalışılabilecek ortak netlik oluşturdum",
          ],
          tags: ["Çekirdek Bankacılık", "Sınır Ötesi Ödemeler", "API Entegrasyon", "SQL", "UAT", "Sistem Analizi"],
        },
        {
          title: "Teknik İş Analisti",
          company: "HDI Fibaemeklilik",
          companyNote: "",
          date: "Eyl 2022 – Eyl 2024",
          location: "İstanbul",
          summary: "Sigorta platform ortamlarında, fonksiyonel gereksinimler ile sistem doğrulamasının kesiştiği noktada çalıştım. İş ihtiyaçlarını kesin spesifikasyonlara dönüştürerek analiz sürecini test ve UAT'ın omurgası haline getirdim.",
          items: [
            "İş gereksinimlerini açık ve doğrulanabilir kabul kriterleri içeren fonksiyonel spesifikasyonlara dönüştürdüm; geliştirme ekiplerine kesin bir başlangıç noktası, test ekiplerine ise somut bir doğrulama hedefi sundum",
            "Sigorta platformu iş akışlarında PL/SQL tabanlı veri analizi ve sistem doğrulaması yaparak beklenen davranış ile gerçek çıktı arasındaki boşlukları tespit ettim ve her birini kök nedene kadar izledim",
            "Gerçek sistem davranışını esas alan test senaryoları tasarladım — uç durumlar ve istisna akışları dahil; iş beklentilerinin sistem çıktısıyla doğrudan karşılaştırıldığı UAT oturumlarını koordine ettim",
            "Sistem tutarsızlıklarını semptomu kaynaktan ayırarak inceledim; bulguları düzeltmelerin hedefe yönelik olmasını ve yeniden çalışmanın en aza inmesini sağlayacak netlikte belgeledim",
            "Eş zamanlı yürütülen birden fazla girişimde iş birimleri ve geliştirme ekipleri arasında gereksinimler, açık maddeler ve çözüm yolları üzerinde teslimat boyunca yapılandırılmış netliği korudum",
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
      subtitle: "Belirsizliği net, test edilebilir çıktıya nasıl dönüştürdüğümü gösteren çalışma biçimim — sistem davranışı, entegrasyon doğrulaması, veri analizi ve operasyonel etki üzerinden.",
      principlesHeading: "Bir problemi nasıl ele alırım?",
      principles: [
        {
          title: "Problemi katmanlarına ayırırım",
          text: "Bir çözüme ulaşmadan önce problemi katmanlara göre ayrıştırırım: iş kuralı, sistem davranışı, veri etkisi, entegrasyon noktası, operasyonel sonuç. Her katman farklı bir kök nedene işaret edebilir.",
        },
        {
          title: "Beklenen ile gerçekleşeni karşılaştırırım",
          text: "Gereksinimi sistem çıktısının yanına koyar ve ikisinin gerçekten örtüşüp örtüşmediğini sorarım. O fark, gerçek analizin başladığı noktadır.",
        },
        {
          title: "Belirsizliği net kurallara dönüştürürüm",
          text: "İş ihtiyaçları çoğu zaman niyet olarak gelir; teknik uygulama ise kesinlik ister. İkisi arasındaki boşluğu yapılandırılmış kabul kriterlerine ve test edilebilir spesifikasyonlara dönüştürürüm.",
        },
        {
          title: "Doğrulama analizin parçasıdır",
          text: "Gereksinimleri teslim edip oradan ayrılmam. Veri kontrolü, entegrasyon davranışı, test kapsamı ve uç durumlar — bunlar analizin doğru olduğunu doğrulama biçimimdir.",
        },
        {
          title: "Ekipler arasında netlik kurarım",
          text: "İş ekibi ile teknik ekip her zaman aynı problemi görmez. İki tarafın aynı spesifikasyon üzerinde çalıştığından ve yoruma yer kalmadığından emin olurum.",
        },
        {
          title: "Kullanılabilir çıktı üretirim",
          text: "Bir analiz çıktısı ancak üzerinden aksiyon alınabiliyorsa değerlidir. Kimi alırsa alsın — uygulanabilir, test edilebilir ve anlamlı — çıktı üretmeyi hedeflerim.",
        },
      ],
      practiceHeading: "Bu yaklaşım işte nasıl karşılık bulur?",
      practices: [
        {
          title: "Kök Neden Analizi",
          intro: "Beklenen davranış ile gerçek çıktı ayrışığında semptomu değil, kaynağı ayrıştırmaya odaklanırım.",
          points: [
            "UI, servis ve veri katmanını birlikte değerlendiririm — birbirinden kopuk değil",
            "Beklenen davranışı gerçek kayıtlar ve sistem akışıyla karşılaştırırım",
            "Problemi yüzeysel biçimde tarif etmek yerine doğrulanabilir kök nedene indirgerim",
          ],
          tags: ["Kök Neden Analizi", "Veri Doğrulama", "Sistem Davranışı", "Hata İnceleme"],
        },
        {
          title: "Entegrasyon ve Servis Doğrulaması",
          intro: "API ve servis ortamlarında alan eşleşmelerinin, payload yapısının ve yanıt davranışının gerçekten spesifikasyonla örtüştüğünü doğrularım.",
          points: [
            "Beklenen ile gerçekleşen davranışı alan düzeyinde karşılaştırırım",
            "Sessiz hataları ve downstream'de büyüyen etkileri erken görünür hale getiririm",
            "Teknik bulguları iş etkisi bağlamında yorumlarım",
          ],
          tags: ["API Analizi", "Payload Doğrulama", "Entegrasyon Davranışı", "Servis Testi"],
        },
        {
          title: "Süreç ve Karar Noktalarını Netleştirme",
          intro: "Bir süreç belirsizleştiğinde ya da tutarsızlaştığında, yalnızca adımları değil karar noktalarını ve istisna yollarını da görünür kılarım.",
          points: [
            "Sürecin gerçek uçtan uca akışını haritalarım — varsayılan versiyonu değil",
            "Yönlendirme mantığının ve karar kriterlerinin belirsiz kaldığı noktaları tespit ederim",
            "İş, teknik ve operasyon ekiplerinin üzerinde hizalanabileceği ortak referans oluştururum",
          ],
          tags: ["Süreç Analizi", "Karar Akışı", "Operasyon Etkisi", "Netleştirme"],
        },
        {
          title: "Gereksinimden Test ve UAT'e",
          intro: "Gereksinim netliği doğrudan testi beslemeli. Her iki süreci de UAT'ın gerçekte belirtileni doğrulaması için yapılandırırım.",
          points: [
            "Gereksinimleri açık ve doğrulanabilir kabul kriterlerine dönüştürürüm",
            "Test senaryolarını uç durumlar dahil gerçek sistem davranışı üzerinden tasarlarım",
            "UAT'ta iş beklentisinin teknik geçer sayılmak yerine gerçekten karşılandığını doğrularım",
          ],
          tags: ["Gereksinim Yönetimi", "Test Tasarımı", "UAT", "Fonksiyonel Doğrulama"],
        },
      ],
      closing: "Analiz çalışmam üç şeye dayanır: yapılandırılmış düşünce, doğrulama disiplini ve iş ile teknik ekipler arasında net iletişim.",
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
