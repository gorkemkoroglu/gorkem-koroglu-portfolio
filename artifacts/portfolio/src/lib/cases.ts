import type { ProcessMapData } from "@/components/ProcessMap";

export interface BusinessRule {
  id: string;
  rule: string;
  rationale: string;
}

export interface TestScenario {
  id: string;
  scenario: string;
  expected: string;
}

export interface CaseContent {
  title: string;
  summary: string;
  tags: string[];
  meta: string[];
  businessProblem: string;
  businessProblemBullets?: string[];
  analysisGoal: string;
  analysisGoalItems?: string[];
  scope: string[];
  outOfScope?: string[];
  currentState: string;
  currentStateBullets?: string[];
  keyIssues: { title: string; desc: string }[];
  analysisApproach: string;
  analysisApproachItems?: string[];
  layers: { title: string; desc: string }[];
  errorCategories?: { title: string; desc: string }[];
  frameworkItems?: { label: string; title: string; items: string[] }[];
  businessRules: BusinessRule[];
  flowTitle: string;
  flowSteps: string[];
  operationalVisibility?: string;
  screenFields?: string[];
  operationalQuestions?: string[];
  screenSections?: string[];
  testApproach: string;
  uatApproach: string;
  uatChecklist: string[];
  deliverables: string[];
  expectedOutput: string[];
  demonstrates: string[];
  testScenarios: TestScenario[];
  processMap?: ProcessMapData;
}

export interface Case {
  id: string;
  number: number;
  en: CaseContent;
  tr: CaseContent;
}

export const cases: Case[] = [
  {
    id: "payment-error-analysis",
    number: 1,
    en: {
      title: "Separating Error Causes in International Payment Flows",
      summary:
        "An analysis case focused on distinguishing similar visible failures by separating business rule, integration, data validation, and operational causes within cross-border payment flows.",
      tags: ["Root Cause Analysis", "Payment Flows", "Data Validation", "Integration"],
      meta: ["Core Banking", "Cross-Border Payments", "SQL", "UAT"],
      businessProblem:
        "In international payment environments, failures from different root causes often surface with the same visible symptom. Missing data, business rule violations, integration response failures, and process routing errors all collapse into a single 'transaction failed' status. This makes root cause identification difficult, slows operational response, and reduces the quality of error tracking.",
      businessProblemBullets: [
        "The transaction appears technically complete but the business outcome is incorrect",
        "Misinterpreted responses produce wrong status or output",
        "Testing validates connectivity but misses content accuracy",
        "Business and technical teams interpret the same error differently",
      ],
      analysisGoal:
        "To separate failed transactions into meaningful categories; to clarify the system behavior and resolution path for each; to design an operational visibility model that tells teams what failed and what action to take; and to support this structure with testable business rules, a flow model, and a UAT framework.",
      scope: [
        "Categorization of failed transactions across international payment flows",
        "Separation of error events by data, business rule, integration, and process layers",
        "Design of a meaningful error visibility model for operational teams",
        "Test scenarios and UAT validation framework",
      ],
      currentState:
        "Failed transactions are grouped under a single status that covers multiple distinct root causes. Operational teams cannot derive the error source, required action type, or retry eligibility from this view. SQL-based investigation reveals that the same error code often covers events with fundamentally different root causes — events that should not be handled identically.",
      keyIssues: [
        { title: "Errors from different sources share the same code", desc: "When distinct failure types collapse under one status, targeted resolution becomes difficult." },
        { title: "Error messages lack business meaning", desc: "Technical-level messages provide no action guidance for operational teams." },
        { title: "The operation screen lacks decision context", desc: "Teams cannot determine what happened or what to do next from the current view." },
        { title: "Retriable and manual cases are not separated", desc: "Unclear retry eligibility wastes time and creates risk of incorrect escalation." },
        { title: "Root cause querying is unreliable", desc: "Retrospective analysis requires significant effort with inconsistent results." },
      ],
      analysisApproach:
        "Failed transaction records were queried via SQL. Error messages and status codes were clustered and grouped. Each group was analyzed by system layer — data, business rule, integration, process — and by intervention type — automatic retry, manual action, configuration update. Findings were then converted into a business rule framework, and the operational visibility model and test/UAT structure were built on this foundation.",
      layers: [
        { title: "Data Layer", desc: "Presence of required fields, format compliance, and value consistency in the incoming payment request" },
        { title: "Business Rule Layer", desc: "Currency compatibility, account type controls, transaction limits, and status eligibility checks" },
        { title: "Integration Layer", desc: "External system calls, response structure, timeout behavior, and error codes returned from downstream services" },
        { title: "Process / Status Layer", desc: "Status transitions within the transaction flow, routing logic, and exception handling paths" },
      ],
      errorCategories: [
        { title: "Data Error", desc: "Failures caused by missing, incorrectly formatted, or inconsistent field values in the payment request" },
        { title: "Business Rule Error", desc: "Rejected transactions caused by business configuration violations or rule conflicts" },
        { title: "Integration Error", desc: "Failures due to external system response issues, timeouts, or unexpected response structures" },
        { title: "Process / Status Error", desc: "Transactions triggered in an incorrect status, or failures caused by flow routing errors" },
      ],
      businessRules: [
        { id: "BR-01", rule: "All required payment fields must be present and complete", rationale: "Prevent failures caused by missing data at the request level" },
        { id: "BR-02", rule: "Currency and account type must be compatible", rationale: "Block invalid transaction combinations before processing" },
        { id: "BR-03", rule: "Integration calls must not be triggered before pre-checks pass", rationale: "Reduce unnecessary error risk in downstream system calls" },
        { id: "BR-04", rule: "When an error occurs, the main category and sub-reason must be separated", rationale: "Increase operational visibility and enable targeted response" },
        { id: "BR-05", rule: "Different error causes that produce the same visible symptom must be recorded separately", rationale: "Accelerate root cause analysis and prevent misclassification" },
        { id: "BR-06", rule: "Retriable transactions must be clearly separated from those requiring manual intervention", rationale: "Give operations teams a precise, actionable decision point" },
      ],
      flowTitle: "Proposed Error Separation Flow",
      flowSteps: [
        "Payment request is received",
        "Basic data validation is performed",
        "Business rule checks are executed",
        "If an error is found, the category is determined",
        "If no error, the integration call is made",
        "Response is evaluated",
        "Error is separated: data / business rule / integration / process",
        "Transaction status is updated",
        "Meaningful error information is shown on the operation screen",
        "Error record is stored in classified form for testing and monitoring",
      ],
      operationalVisibility:
        "A failed transaction should clearly show an operational team: the main error category (Data / Business Rule / Integration / Process), the sub-reason (e.g. 'required field missing', 'account type incompatible'), the required action type (retriable / requires manual review / requires configuration update), and where the failure occurred (internal system vs. external).",
      screenFields: [
        "Error Category",
        "Error Sub-Reason",
        "Action Type",
        "Failure Layer",
        "Initial Error Timestamp",
        "Retry Count (if applicable)",
        "Last Status Description",
      ],
      testApproach:
        "Independent test scenarios were designed for each error category. Tests cover different root cause scenarios that can produce the same visible symptom — and validate that each is correctly classified into its own category. Database records, API response behavior, and operation screen output are evaluated together.",
      uatApproach:
        "UAT is conducted with operational teams and covers: understandability of error category business meaning, sufficiency of sub-reason for actionability, quality of category separation, and whether screen information genuinely facilitates decision-making.",
      uatChecklist: [
        "Can operational users understand the error category?",
        "Is the sub-reason specific enough to take action?",
        "Are technical errors clearly separated from business rule errors?",
        "Do data missing and format errors appear differently?",
        "Is retry eligibility visible and unambiguous?",
        "Can different root causes producing the same symptom be distinguished?",
        "Are status visibility and error information consistent?",
        "Does the operation screen facilitate decision-making?",
      ],
      deliverables: [
        "Error categorization framework — 4 main categories with sub-reasons",
        "Business rule list (BR-01 → BR-06) with rationale",
        "Functional error separation flow diagram",
        "Sample test scenarios (TS-01 → TS-07)",
        "UAT validation checklist",
        "Operational screen information model proposal",
        "Technical requirement note for the development team",
      ],
      expectedOutput: [
        "Faster root cause analysis on failed transactions",
        "Operational teams able to take the correct action based on error type",
        "Reduction of time waste by separating retriable transactions",
        "Improvement in error tracking and reporting quality",
        "Integration errors routed to the correct team, separated from business rule failures",
      ],
      demonstrates: [
        "Ability to build error classification structures in complex payment systems",
        "Bridging business requirements and technical reality in a structured, actionable way",
        "SQL-driven analysis and data validation capacity across environments",
        "Writing business rules at specification level with clear rationale",
        "Designing end-to-end test and UAT logic",
        "Integrating operational impact directly into the analysis framework",
      ],
      testScenarios: [
        { id: "TS-01", scenario: "Required field is sent missing", expected: "Error is classified under the Data category" },
        { id: "TS-02", scenario: "Field format is invalid", expected: "Format error is clearly visible in the error record" },
        { id: "TS-03", scenario: "Transaction violates a business rule", expected: "Business rule error is generated and categorized" },
        { id: "TS-04", scenario: "Integration response time is exceeded", expected: "Recorded under the Timeout category" },
        { id: "TS-05", scenario: "Response structure differs from expected", expected: "Separated as an integration error" },
        { id: "TS-06", scenario: "Transaction is triggered in wrong status", expected: "Process/status error becomes visible" },
        { id: "TS-07", scenario: "Two different root causes producing the same symptom are triggered", expected: "Both errors are tracked in separate categories" },
      ],
    },
    tr: {
      title: "Uluslararası Ödeme Akışlarında Hata Nedenlerinin Ayrıştırılması",
      summary:
        "Sınır ötesi ödeme akışlarında benzer görünen hata çıktılarının; iş kuralı, entegrasyon, veri doğrulama ve operasyon kaynaklı nedenler üzerinden ayrıştırılmasına odaklanan analiz vakası.",
      tags: ["Kök Neden Analizi", "Ödeme Süreçleri", "Veri Doğrulama", "Entegrasyon"],
      meta: ["Çekirdek Bankacılık", "Sınır Ötesi Ödemeler", "SQL", "UAT"],
      businessProblem:
        "Uluslararası ödeme işlemlerinde farklı kökenlerden gelen hatalar operasyon tarafında çoğunlukla aynı yüzey semptomuyla görünür hale gelir. Eksik veri, iş kuralı ihlali, entegrasyon yanıt hatası ya da hatalı süreç akışı; tek bir 'işlem başarısız' statüsüne indirgenir. Bu durum kök neden analizini zorlaştırmakta, operasyonel aksiyon sürecini yavaşlatmakta ve hata takibi kalitesini düşürmektedir.",
      businessProblemBullets: [
        "İşlem teknik olarak tamamlanmış görünür ama iş sonucu yanlış olabilir",
        "Response doğru yorumlanmadığı için statü veya çıktı hatalı oluşabilir",
        "Test süreci yalnızca bağlantıyı doğrular, içerik doğruluğunu kaçırabilir",
        "İş ve teknik ekipler aynı hatayı farklı şekillerde yorumlayabilir",
      ],
      analysisGoal:
        "Başarısız işlemlerin hata kaynaklarını anlamlı kategorilere ayırmak; her kategorinin sistem davranışını ve çözüm yolunu netleştirmek; operasyon ekibinin hata nedenini ve aksiyon tipini kolayca anlayabileceği bir görünürlük modeli önermek; ve bu yapıyı test edilebilir iş kuralları, akış modeli ve UAT doğrulama çerçevesiyle desteklemek.",
      scope: [
        "Uluslararası ödeme akışlarında başarısız işlemlerin kategorizasyonu",
        "Hata olaylarının veri, iş kuralı, entegrasyon ve süreç katmanlarına göre ayrıştırılması",
        "Operasyon ekranı için anlamlı hata görünürlük modelinin tasarımı",
        "Test senaryoları ve UAT doğrulama çerçevesi",
      ],
      currentState:
        "Başarısız işlemler, birden fazla farklı nedeni kapsayan tek bir statü altında toplanmaktadır. Operasyon ekipleri bu yapıdan hatanın kaynağını, aksiyon alınabilirliğini ya da yeniden deneme uygunluğunu net şekilde çıkaramamaktadır. SQL sorguları; aynı hata kodu altında kök nedeni farklı ve aynı şekilde ele alınmaması gereken çok sayıda oluşumun bir arada yer aldığını ortaya koymaktadır.",
      keyIssues: [
        { title: "Farklı kaynaklı hatalar aynı kod altında gruplanıyor", desc: "Birbirinden farklı başarısızlık tipleri tek statüde toplandığında hedefe yönelik çözüm zorlaşır." },
        { title: "Hata mesajları iş anlamı taşımıyor", desc: "Teknik seviyede kalan mesajlar operasyon ekiplerine aksiyon yönlendirmesi sunmuyor." },
        { title: "Operasyon ekranı karar bağlamı sunmuyor", desc: "Ekipler mevcut görünümden ne olduğunu veya ne yapmaları gerektiğini belirleyemiyor." },
        { title: "Yeniden denenebilir ve manuel vakalar ayrışmıyor", desc: "Belirsiz yeniden deneme uygunluğu zaman kaybına ve hatalı yönlendirme riskine yol açıyor." },
        { title: "Kök neden sorgulaması güvenilmez kalıyor", desc: "Geriye dönük analiz tutarsız sonuçlarla önemli efor gerektiriyor." },
      ],
      analysisApproach:
        "Mevcut başarısız işlem kayıtları SQL üzerinden sorgulandı. Hata mesajları ve statü kodları kümelenerek gruplara ayrıldı. Her grubun sistem katmanı — veri, iş kuralı, entegrasyon, süreç — ve müdahale tipi — otomatik yeniden deneme, manuel aksiyon, konfigürasyon güncelleme — açısından analizi yapıldı. Elde edilen bulgular iş kuralı çerçevesine dönüştürüldü ve operasyonel görünürlük modeli ile test/UAT yapısı bu temelde oluşturuldu.",
      layers: [
        { title: "Veri Katmanı", desc: "Gelen ödeme talebindeki zorunlu alan varlığı, format uyumu ve değer tutarlılığı" },
        { title: "İş Kuralı Katmanı", desc: "Para birimi uyumu, hesap tipi kontrolü, işlem limiti ve statü uygunluğu kontrolleri" },
        { title: "Entegrasyon Katmanı", desc: "Dış sistem çağrısı, response yapısı, timeout davranışı ve downstream servislerden dönen hata kodları" },
        { title: "Süreç / Statü Katmanı", desc: "İşlem akışı içindeki statü geçişleri, yönlendirme mantığı ve istisna durumlarının ele alınması" },
      ],
      errorCategories: [
        { title: "Veri Hatası", desc: "Eksik, hatalı formatlı veya tutarsız alan değerlerinden kaynaklanan başarısızlıklar" },
        { title: "İş Kuralı Hatası", desc: "İş konfigürasyonu ihlali veya kural çakışmasından kaynaklanan reddedilen işlemler" },
        { title: "Entegrasyon Hatası", desc: "Dış sistem yanıt sorunları, timeout ya da beklenmedik response yapısından kaynaklanan başarısızlıklar" },
        { title: "Süreç / Statü Hatası", desc: "Yanlış statüde tetiklenen işlemler veya akış yönlendirme hatasından kaynaklanan başarısızlıklar" },
      ],
      businessRules: [
        { id: "BR-01", rule: "Zorunlu ödeme alanları eksiksiz olmalıdır", rationale: "Eksik veri kaynaklı başarısızlıkların talep aşamasında önlenmesi" },
        { id: "BR-02", rule: "Para birimi ve hesap tipi uyumlu olmalıdır", rationale: "Geçersiz işlem kombinasyonlarının işleme alınmadan engellenmesi" },
        { id: "BR-03", rule: "Ön kontroller geçilmeden entegrasyon çağrısı yapılmamalıdır", rationale: "Downstream sistem çağrılarında gereksiz hata riskini azaltmak" },
        { id: "BR-04", rule: "Hata oluştuğunda ana kategori ve alt neden ayrıştırılmalıdır", rationale: "Operasyonel görünürlüğü artırmak ve hedefe yönelik aksiyon sağlamak" },
        { id: "BR-05", rule: "Aynı görünüme yol açan farklı hata nedenleri ayrı kaydedilmelidir", rationale: "Kök neden analizini hızlandırmak ve yanlış sınıflandırmayı önlemek" },
        { id: "BR-06", rule: "Tekrar denenebilir işlemler ile manuel müdahale gerekenler ayrılmalıdır", rationale: "Operasyon ekibine kesin ve aksiyon alınabilir bir karar noktası sunmak" },
      ],
      flowTitle: "Önerilen Hata Ayrıştırma Akışı",
      flowSteps: [
        "Ödeme talebi alınır",
        "Temel veri doğrulaması yapılır",
        "İş kuralı kontrolleri çalıştırılır",
        "Hata varsa kategori belirlenir",
        "Hata yoksa entegrasyon çağrısı yapılır",
        "Response değerlendirilir",
        "Hata ayrıştırılır: veri / iş kuralı / entegrasyon / süreç",
        "İşlem statüsü güncellenir",
        "Operasyon ekranında anlamlı hata bilgisi gösterilir",
        "Hata kaydı sınıflandırılmış şekilde saklanır",
      ],
      operationalVisibility:
        "Başarısız bir işlem, operasyon ekibine şunları açıkça göstermeli: Ana hata kategorisi (Veri / İş Kuralı / Entegrasyon / Süreç), alt hata nedeni (örn. 'zorunlu alan eksik', 'hesap tipi uyumsuz'), işlem aksiyon tipi (yeniden deneye uygun / manuel inceleme gerekli / konfigürasyon güncelleme gerekli) ve hatanın oluştuğu katman.",
      screenFields: [
        "Hata Kategorisi",
        "Hata Alt Nedeni",
        "Aksiyon Tipi",
        "Hata Oluşum Katmanı",
        "İlk Hata Zaman Damgası",
        "Yeniden Deneme Sayısı (varsa)",
        "Son Durum Açıklaması",
      ],
      testApproach:
        "Her hata kategorisi için bağımsız test senaryoları tasarlandı. Testler aynı semptomu üretebilecek farklı kök neden senaryolarını kapsamakta; her senaryonun farklı hata kategorisinde doğru ayrıştığı doğrulanmaktadır. Veritabanı kayıtları, API response davranışı ve operasyon ekranı çıktısı birlikte değerlendirilmektedir.",
      uatApproach:
        "UAT, operasyon ekipleriyle birlikte yürütülmekte ve hata kategorisinin iş anlamının anlaşılırlığı, alt neden bilgisinin aksiyon yeterliliği, kategori ayrışma kalitesi ve ekran bilgisinin karar vermeyi kolaylaştırması başlıklarını kapsamaktadır.",
      uatChecklist: [
        "Operasyon kullanıcıları hata kategorisini anlayabiliyor mu?",
        "Alt hata nedeni aksiyon almaya yetecek kadar net mi?",
        "Teknik hata ile iş kuralı hatası ayrışıyor mu?",
        "Veri eksikliği ve format hatası farklı şekilde görünüyor mu?",
        "Tekrar deneme uygunluğu net ve belirsizlik içermiyor mu?",
        "Aynı semptoma yol açan farklı nedenler ayırt edilebiliyor mu?",
        "Statü görünürlüğü ve hata bilgisi uyumlu mu?",
        "Operasyon ekranı karar vermeyi kolaylaştırıyor mu?",
      ],
      deliverables: [
        "Hata kategorizasyon çerçevesi — 4 ana kategori ve alt nedenler",
        "İş kuralı listesi (BR-01 → BR-06) ve her biri için gerekçe",
        "Fonksiyonel hata ayrıştırma akış diyagramı",
        "Örnek test senaryoları (TS-01 → TS-07)",
        "UAT doğrulama checklist'i",
        "Operasyon ekranı bilgi modeli önerisi",
        "Geliştirme ekibi için teknik gereksinim notu",
      ],
      expectedOutput: [
        "Başarısız işlemlerde kök neden analizinin hızlanması",
        "Operasyon ekiplerinin hataya göre doğru aksiyon alabilmesi",
        "Tekrar denenebilir işlemlerin ayrışarak zaman ve kaynak israfının azalması",
        "Hata izleme ve raporlama kalitesinin artması",
        "Entegrasyon hatalarının iş kuralı hatalarından ayrışarak doğru ekibe yönlendirilmesi",
      ],
      demonstrates: [
        "Karmaşık ödeme sistemlerinde hata sınıflandırma yapısı kurabilme",
        "İş gereksinimi ile teknik gerçekliği yapılandırılmış, aksiyon alınabilir biçimde köprüleyebilme",
        "Farklı ortamlarda SQL tabanlı analiz ve veri doğrulama kapasitesi",
        "İş kurallarını gerekçesiyle birlikte spesifikasyon düzeyinde yazabilme",
        "Uçtan uca test ve UAT mantığını sıfırdan tasarlayabilme",
        "Operasyonel etkiyi doğrudan analiz çerçevesine entegre edebilme",
      ],
      testScenarios: [
        { id: "TS-01", scenario: "Zorunlu alan eksik gönderilir", expected: "Hata veri kategorisinde sınıflanır" },
        { id: "TS-02", scenario: "Alan formatı geçersizdir", expected: "Format hatası hata kaydında açık şekilde görünür" },
        { id: "TS-03", scenario: "İş kuralına aykırı işlem oluşturulur", expected: "İş kuralı kaynaklı hata üretilir ve kategorize edilir" },
        { id: "TS-04", scenario: "Entegrasyon response süresi aşılır", expected: "Timeout kategorisiyle kaydedilir" },
        { id: "TS-05", scenario: "Response yapısı beklenenden farklıdır", expected: "Entegrasyon kaynaklı hata olarak ayrışır" },
        { id: "TS-06", scenario: "Yanlış statüde işlem tetiklenir", expected: "Süreç/statü kaynaklı hata görünür" },
        { id: "TS-07", scenario: "Aynı semptoma yol açan iki farklı neden çalıştırılır", expected: "İki hata ayrı kategoride izlenir" },
      ],
    },
  },

  {
    id: "integration-field-mapping",
    number: 2,
    en: {
      title: "Field Mapping and Validation Analysis in External Service Integration",
      summary:
        "An integration analysis case focused on evaluating alignment between business expectations and request/response structures, with emphasis on field mapping, response interpretation, and data integrity risks.",
      tags: ["Integration Analysis", "Mapping", "Service Behavior", "Payload Validation"],
      meta: ["API Integration", "Field Mapping", "Response Validation", "UAT"],
      businessProblem:
        "In payment and financial system integrations, the primary concern of business teams is often the expected outcome: the request goes out, a response comes back, the process moves forward. But the real success of an integration depends on the accuracy of field mappings, the correct formatting and sequencing of data, and the meaningful interpretation of the response against business logic.",
      businessProblemBullets: [
        "A transaction may appear technically complete but produce the wrong business outcome",
        "A misinterpreted response may generate incorrect status or output",
        "Testing validates connectivity but misses content accuracy",
        "Business and technical teams may interpret the same integration behavior differently",
      ],
      analysisGoal:
        "To approach the integration not just at the 'is the service being called?' level, but in a way that shows whether the data structure genuinely aligns with business requirements.",
      analysisGoalItems: [
        "Make field mappings visible and traceable",
        "Clarify mandatory and conditional field rules",
        "Give business meaning to request/response behavior",
        "Separate expected from actual behavior at field level",
        "Build a verifiable integration framework for testing and UAT",
      ],
      scope: [
        "Request structure sent to the integration and field data sources",
        "Field mappings and data transformations",
        "Mandatory, optional, and conditional field distinctions",
        "Business-level interpretation of response content",
        "Classification of error and missing data scenarios",
        "Integration-focused test scenarios and UAT framework",
      ],
      outOfScope: [
        "Internal technical architecture of the external service",
        "Network and security infrastructure details",
        "Production environment access logs",
        "Live data samples from internal systems",
      ],
      currentState:
        "The integration currently follows a general pattern: a transaction is initiated, internal fields are transformed into a request, the service is called, a response is received, and relevant fields or statuses are updated internally. In practice, however: some fields exist in the source system but never reach the service; some fields are fed from an incorrect source; conditional mandatory fields go unchecked; technical success in the response is treated as business success; and empty or unexpected values produce silent failures.",
      currentStateBullets: [
        "Some source fields never reach the request",
        "Some fields are mapped from the wrong source",
        "Conditional mandatory fields are not always checked",
        "Technical response success is equated with business success",
        "Missing or empty values produce silent errors with no visibility",
      ],
      keyIssues: [
        { title: "Field mappings are not centrally visible", desc: "Without a clear record of which internal field maps to which request field, debugging is slow and inconsistent." },
        { title: "Mandatory field logic is not clearly separated", desc: "Some fields are only required in certain transaction types, currencies, or customer segments. When this logic is implicit, missing data problems grow." },
        { title: "Response may be incorrectly interpreted from a business perspective", desc: "A technically successful response is not always a business success. When this distinction is not visible, wrong status or operational misreads follow." },
        { title: "Silent errors are caught late", desc: "A field may be sent empty without the service returning a technical error — but the next step produces wrong data or incorrect routing." },
        { title: "Testing stays at the surface", desc: "When only successful call scenarios are tested, field validation and response interpretation issues go undetected." },
      ],
      analysisApproach:
        "I do not treat the integration as a technical call alone. My approach follows this sequence: first I clarify the business requirement and expected outcome; then I identify request fields and source data points; I separate mandatory, conditional, and optional fields; I clarify what each response structure means in business terms; I compare expected versus actual behavior at field level; I surface silent error risks; and I build a validation framework for testing and UAT.",
      analysisApproachItems: [
        "Clarify the business requirement and expected outcome",
        "Identify request fields and their source data points",
        "Separate mandatory, conditional, and optional fields",
        "Define what each response structure means in business terms",
        "Compare expected versus actual behavior at field level",
        "Surface silent error risks",
        "Build the validation framework for testing and UAT",
      ],
      layers: [
        { title: "Business Requirement Layer", desc: "Why the integration exists, what business outcome it must produce, and which fields are critical" },
        { title: "Request Layer", desc: "How source system data is transformed into the request, and which fields are fed from which source" },
        { title: "Mapping Layer", desc: "Field mappings, data transformations, fixed values, and format rules" },
        { title: "Response Layer", desc: "Which status, screen information, or next step each response field triggers" },
        { title: "Validation Layer", desc: "Missing data, inconsistencies, unexpected responses, and silent error probabilities" },
      ],
      frameworkItems: [
        {
          label: "A",
          title: "Request Field Matrix",
          items: [
            "Field name and source field",
            "Mandatory / conditional / optional classification",
            "Condition that triggers mandatory status",
            "Format and transformation rule",
            "Impact if sent empty",
          ],
        },
        {
          label: "B",
          title: "Response Interpretation Matrix",
          items: [
            "Technical meaning of the response field",
            "Business meaning and status impact",
            "Reflection on user or operation screen",
            "Whether it triggers an error or warning",
          ],
        },
        {
          label: "C",
          title: "Silent Error Points",
          items: [
            "Scenarios where the service returns no technical error",
            "Fields that produce downstream impact when sent incorrectly",
            "Cases requiring explicit monitoring or flagging",
          ],
        },
      ],
      businessRules: [
        { id: "IR-01", rule: "All critical fields in the request must be validated in the source system", rationale: "Prevent missing or incorrect data from being transmitted" },
        { id: "IR-02", rule: "Conditional mandatory fields must be checked based on transaction type", rationale: "Reduce silent error risk from implicit field logic" },
        { id: "IR-03", rule: "Format and transformation rules must be applied before the service call", rationale: "Reduce technical incompatibilities at the integration boundary" },
        { id: "IR-04", rule: "Response must be evaluated separately for technical and business meaning", rationale: "Prevent a successful response from being misread as a business success" },
        { id: "IR-05", rule: "Mapping errors must be separately traceable", rationale: "Facilitate root cause analysis when field-level issues arise" },
        { id: "IR-06", rule: "Response scenarios that produce silent errors must be separately flagged", rationale: "Improve operational visibility for downstream impact" },
      ],
      flowTitle: "Proposed Integration Validation Flow",
      flowSteps: [
        "Business requirement and expected outcome are defined",
        "Request fields and data sources are identified",
        "Mandatory and conditional field rules are established",
        "Mapping validation is performed",
        "Service call is made",
        "Response is evaluated technically",
        "Response is interpreted from a business perspective",
        "Status, screen, and operational impact is determined",
        "Silent error risks are flagged",
        "Test and UAT scenarios are executed against this framework",
      ],
      operationalQuestions: [
        "Which field was missing or sent incorrectly?",
        "Why did the business outcome fail even when the response appeared successful?",
        "Did the issue originate from missing data, the mapping, or response interpretation?",
        "What information should be surfaced to the user or operation screen?",
        "Is this reproducible and testable?",
      ],
      screenFields: [
        "Internal System Field",
        "Request Field",
        "Field Description",
        "Mandatory Status",
        "Conditional Rule",
        "Format",
        "Transformation Rule",
        "Response Counterpart",
        "Business Impact",
        "Notes / Risk",
      ],
      testApproach:
        "Testing for this case is built not just around 'did the call succeed?' but around content accuracy. Test areas include: mandatory field absence, conditional mandatory field absence, incorrect mapping, format mismatch, fixed value errors, incorrect response interpretation, technical success vs. business failure distinction, and silent error scenarios.",
      uatApproach:
        "UAT validates whether the business unit actually receives the expected outcome, whether a successful response also means business success, whether mapping issues produce operational impact, and whether screen information is sufficient for decision-making.",
      uatChecklist: [
        "Does the business unit actually receive the expected outcome?",
        "Is there a case where the response is technically successful but the business result is incomplete?",
        "Are mapping errors visible to the user or operational team?",
        "Do conditional mandatory fields work correctly?",
        "Do response fields correctly translate to the right status and screen information?",
        "Are silent error scenarios visible?",
        "Can the operational team determine the first action to take?",
        "Is expected versus actual behavior clearly separated?",
      ],
      deliverables: [
        "Integration scope document",
        "Request field mapping matrix",
        "Response interpretation table",
        "Mandatory / conditional field list",
        "Silent error risk register",
        "Test scenario set",
        "UAT validation checklist",
        "Integration behavior summary note",
      ],
      expectedOutput: [
        "Mapping-related errors identified earlier in the process",
        "Gap between business requirement and technical integration reduced",
        "Response interpretation errors made visible",
        "Test scenarios built on stronger, content-level foundations",
        "More accurate information displayed on operation screens",
        "Business and technical teams reading integration behavior consistently",
      ],
      demonstrates: [
        "Reading business requirements alongside the technical data structure",
        "Field-level validation and content accuracy analysis",
        "Making silent error risks visible before they reach production",
        "Interpreting expected versus actual behavior from both technical and business perspectives",
        "Converting analysis into usable test and UAT outputs",
      ],
      testScenarios: [
        { id: "IT-01", scenario: "A mandatory request field is sent empty", expected: "Pre-call validation error is triggered" },
        { id: "IT-02", scenario: "A conditional mandatory field is missing", expected: "Rule-based missing data error becomes visible" },
        { id: "IT-03", scenario: "Field format does not match the expected structure", expected: "Format validation error is returned" },
        { id: "IT-04", scenario: "The wrong internal field is mapped to a request field", expected: "Business misalignment becomes visible" },
        { id: "IT-05", scenario: "Response is technically successful but business result is incomplete", expected: "Response interpretation warning is generated" },
        { id: "IT-06", scenario: "A response field is reflected to the wrong status", expected: "Status evaluation error is identified" },
        { id: "IT-07", scenario: "Response carries no technical error but contains incomplete data", expected: "Silent error scenario is surfaced" },
      ],
    },
    tr: {
      title: "Harici Servis Entegrasyonunda Alan Eşleşmesi ve Doğrulama Analizi",
      summary:
        "İş gereksinimi ile request/response yapısı arasındaki uyumu değerlendirerek alan eşleşmesi, response yorumlama ve veri bütünlüğü risklerini görünür hale getiren entegrasyon analizi.",
      tags: ["Entegrasyon Analizi", "Mapping", "Servis Davranışı", "Payload Doğrulama"],
      meta: ["API Entegrasyon", "Alan Eşleşmesi", "Response Doğrulama", "UAT"],
      businessProblem:
        "Ödeme ve finansal işlem süreçlerinde harici bir servis ile entegrasyon kurulduğunda, iş birimi çoğu zaman yalnızca beklenen sonuca odaklanır: talep gönderilsin, yanıt gelsin, süreç ilerlesin. Ancak entegrasyonun gerçek başarısı, alan eşleşmelerinin doğruluğuna, verinin doğru sırada ve formatta iletilmesine ve dönen yanıtın iş mantığıyla uyumlu şekilde yorumlanmasına bağlıdır.",
      businessProblemBullets: [
        "İşlem teknik olarak tamamlanmış görünür ama iş sonucu yanlış olabilir",
        "Response yanlış yorumlandığında statü veya çıktı hatalı oluşabilir",
        "Test süreci yalnızca bağlantıyı doğrular, içerik doğruluğunu kaçırabilir",
        "İş ve teknik ekipler aynı entegrasyon davranışını farklı yorumlayabilir",
      ],
      analysisGoal:
        "Entegrasyon sürecini yalnızca 'servis çağrısı yapılıyor mu?' düzeyinde değil, iş gereksinimi ile veri yapısının gerçekten uyumlu olup olmadığını gösterecek şekilde ele almak.",
      analysisGoalItems: [
        "Alan eşleşmelerini görünür ve izlenebilir hale getirmek",
        "Zorunlu ve koşullu alan kurallarını netleştirmek",
        "Request/response davranışını iş açısından anlamlandırmak",
        "Beklenen ve gerçekleşen davranış farklarını alan bazında ayrıştırmak",
        "Test ve UAT için doğrulanabilir entegrasyon çerçevesi oluşturmak",
      ],
      scope: [
        "Entegrasyona gönderilen request yapısı ve alan kaynakları",
        "Alan eşleşmeleri ve veri dönüşümleri",
        "Zorunlu, opsiyonel ve koşullu alan ayrımı",
        "Response içeriğinin iş mantığıyla yorumlanması",
        "Hata ve eksik veri senaryolarının sınıflandırılması",
        "Entegrasyon odaklı test senaryoları ve UAT çerçevesi",
      ],
      outOfScope: [
        "Harici servisin gerçek teknik mimarisi",
        "Altyapı seviyesinde ağ ve güvenlik detayları",
        "Üretim ortamı erişim logları",
        "Kurum içi canlı veri örnekleri",
      ],
      currentState:
        "Mevcut yapıda entegrasyon genel bir mantıkla işlemektedir: işlem başlatılır, iç sistem alanları request'e dönüştürülür, servise çağrı yapılır, response alınır ve ilgili alanlara veya statülere yansıtılır. Ancak pratikte bazı alanlar kaynak sistemde olmasına rağmen servise hiç gitmez; bazıları yanlış kaynaktan beslenir; koşullu zorunlu alanlar kontrol edilmez; teknik başarı iş başarısı olarak yorumlanır; ve boş değerler sessiz hata üretir.",
      currentStateBullets: [
        "Bazı kaynak alanlar request'e hiç ulaşmıyor",
        "Bazı alanlar yanlış kaynaktan besleniyor",
        "Koşullu zorunlu alanlar her zaman kontrol edilmiyor",
        "Teknik response başarısı iş başarısıyla eşitleniyor",
        "Boş veya beklenmedik değerler görünürlüğü olmayan sessiz hata üretiyor",
      ],
      keyIssues: [
        { title: "Alan eşleşmeleri merkezi olarak görünür değil", desc: "Hangi iç alanın hangi request alanına gittiği net biçimde izlenemediğinde hata ayıklama yavaşlar ve tutarsızlaşır." },
        { title: "Zorunlu alan mantığı net ayrışmamış", desc: "Bazı alanlar yalnızca belirli işlem tiplerinde, para birimlerinde veya müşteri segmentlerinde zorunludur. Bu mantık örtük kaldığında eksik veri sorunu büyür." },
        { title: "Response iş açısından yanlış yorumlanıyor olabilir", desc: "Teknik olarak başarılı bir response her zaman iş başarısı değildir. Bu ayrım görünür olmadığında yanlış statü veya operasyonel yorum oluşabilir." },
        { title: "Sessiz hatalar geç fark ediliyor", desc: "Alan boş gönderilse de servis teknik hata dönmeyebilir; ama sonraki adımda yanlış veri veya hatalı yönlendirme doğabilir." },
        { title: "Test senaryoları yüzeyde kalıyor", desc: "Yalnızca başarılı çağrı senaryoları test edildiğinde alan doğrulama ve response yorumlama sorunları gözden kaçar." },
      ],
      analysisApproach:
        "Bu vakada entegrasyonu yalnızca teknik çağrı olarak ele almam. Önce iş gereksinimini ve beklenen sonucu netleştiririm; ardından request alanlarını ve kaynak veri noktalarını çıkarırım; zorunlu, koşullu ve opsiyonel alanları ayırırım; response yapısının hangi iş anlamına geldiğini netleştiririm; beklenen ve gerçekleşen davranışı alan bazında karşılaştırırım; sessiz hata risklerini görünür hale getiririm; ve test/UAT için doğrulama çerçevesini kurarım.",
      analysisApproachItems: [
        "İş gereksinimini ve beklenen sonucu netleştir",
        "Request alanlarını ve kaynak veri noktalarını çıkar",
        "Zorunlu, koşullu ve opsiyonel alanları ayır",
        "Her response yapısının iş anlamını netleştir",
        "Beklenen ve gerçekleşen davranışı alan bazında karşılaştır",
        "Sessiz hata risklerini görünür hale getir",
        "Test ve UAT için doğrulama çerçevesini kur",
      ],
      layers: [
        { title: "İş Gereksinimi Katmanı", desc: "Entegrasyonun neden yapıldığı, hangi iş sonucunu üretmesi gerektiği ve hangi alanların kritik olduğu" },
        { title: "Request Katmanı", desc: "İç sistemden çıkan verinin request'e nasıl dönüştüğü ve hangi alanların hangi kaynaktan beslendiği" },
        { title: "Mapping Katmanı", desc: "Alan eşleşmeleri, alan dönüşümleri, sabit değerler ve format kuralları" },
        { title: "Response Katmanı", desc: "Dönen verinin hangi statü, ekran bilgisi veya sonraki adımı tetiklediği" },
        { title: "Doğrulama Katmanı", desc: "Eksik veri, tutarsızlık, beklenmedik response ve sessiz hata ihtimalleri" },
      ],
      frameworkItems: [
        {
          label: "A",
          title: "Request Alan Matrisi",
          items: [
            "Alan adı ve kaynak alan",
            "Zorunlu / koşullu / opsiyonel sınıflandırması",
            "Zorunluluğu tetikleyen koşul",
            "Format ve dönüşüm kuralı",
            "Boş gelirse etkisi",
          ],
        },
        {
          label: "B",
          title: "Response Yorumlama Matrisi",
          items: [
            "Response alanının teknik anlamı",
            "İşsel anlamı ve statüye etkisi",
            "Kullanıcıya/operasyona yansıması",
            "Hata veya uyarı üretip üretmeyeceği",
          ],
        },
        {
          label: "C",
          title: "Sessiz Hata Noktaları",
          items: [
            "Servisin teknik hata dönmediği ama iş riski yaratan senaryolar",
            "Yanlış gönderildiğinde downstream etki üreten alanlar",
            "Açık izleme veya işaretleme gerektiren durumlar",
          ],
        },
      ],
      businessRules: [
        { id: "IR-01", rule: "Request'e giden tüm kritik alanlar kaynak sistemde doğrulanmalıdır", rationale: "Eksik veya yanlış veri aktarımını önlemek" },
        { id: "IR-02", rule: "Koşullu zorunlu alanlar işlem tipine göre kontrol edilmelidir", rationale: "Örtük alan mantığından kaynaklanan sessiz hata riskini azaltmak" },
        { id: "IR-03", rule: "Format ve dönüşüm kuralları çağrı öncesi uygulanmalıdır", rationale: "Entegrasyon sınırındaki teknik uyumsuzlukları azaltmak" },
        { id: "IR-04", rule: "Response teknik ve işsel anlamda ayrı değerlendirilmelidir", rationale: "Başarılı response'un iş başarısı olarak yanlış yorumlanmasını önlemek" },
        { id: "IR-05", rule: "Mapping hataları ayrıca izlenebilir olmalıdır", rationale: "Alan düzeyinde sorunlar çıktığında kök neden analizini kolaylaştırmak" },
        { id: "IR-06", rule: "Sessiz hata üreten response durumları ayrıca işaretlenmelidir", rationale: "Downstream etki için operasyonel görünürlüğü artırmak" },
      ],
      flowTitle: "Önerilen Entegrasyon Doğrulama Akışı",
      flowSteps: [
        "İş gereksinimi ve beklenen sonuç tanımlanır",
        "Request alanları ve kaynakları çıkarılır",
        "Zorunlu ve koşullu alan kuralları belirlenir",
        "Mapping doğrulaması yapılır",
        "Servis çağrısı gerçekleştirilir",
        "Response teknik olarak değerlendirilir",
        "Response işsel açıdan yorumlanır",
        "Statü, ekran ve operasyon etkisi belirlenir",
        "Sessiz hata riskleri işaretlenir",
        "Test ve UAT senaryoları bu çerçeveye göre çalıştırılır",
      ],
      operationalQuestions: [
        "Hangi alan eksik veya hatalı gitti?",
        "Response başarılı görünse de iş sonucu neden oluşmadı?",
        "Sorun veri eksikliğinden mi, mapping'den mi, response yorumlamadan mı kaynaklandı?",
        "Kullanıcıya veya operasyon ekranına hangi bilgi yansıtılmalı?",
        "Bu durum tekrar üretilebilir ve test edilebilir mi?",
      ],
      screenFields: [
        "İç Sistem Alanı",
        "Request Alanı",
        "Alan Açıklaması",
        "Zorunluluk Durumu",
        "Koşullu Kural",
        "Format",
        "Dönüşüm Kuralı",
        "Response Karşılığı",
        "İşsel Etki",
        "Not / Risk",
      ],
      testApproach:
        "Bu vaka için test yalnızca 'çağrı başarılı mı?' sorusuna göre değil, içerik doğruluğuna göre kurulmalıdır. Test alanları: zorunlu alan eksikliği, koşullu zorunlu alan eksikliği, yanlış mapping, format uyumsuzluğu, sabit değer hatası, response alanının yanlış yorumlanması, teknik başarı/iş başarısızlığı ayrımı ve sessiz hata senaryoları.",
      uatApproach:
        "UAT aşamasında iş biriminin beklenen sonucu gerçekten görüp görmediği, başarılı response'un iş açısından da başarılı olup olmadığı, mapping kaynaklı sorunların operasyonel etki yaratıp yaratmadığı ve ekran bilgisinin karar vermeye yetip yetmediği doğrulanır.",
      uatChecklist: [
        "İş birimi beklenen sonucu gerçekten görüyor mu?",
        "Response teknik olarak başarılı olsa da işsel açıdan eksik durum var mı?",
        "Mapping kaynaklı hatalar kullanıcıya/operasyona yansıyor mu?",
        "Koşullu zorunlu alanlar doğru şekilde çalışıyor mu?",
        "Response alanları doğru statü ve ekran bilgisine dönüşüyor mu?",
        "Sessiz hata senaryoları görünür mü?",
        "Operasyon ekibi ilk aksiyonu belirleyebiliyor mu?",
        "Beklenen ve gerçekleşen davranış net biçimde ayrışıyor mu?",
      ],
      deliverables: [
        "Entegrasyon kapsam dokümanı",
        "Request field mapping matrisi",
        "Response yorumlama tablosu",
        "Zorunlu / koşullu alan listesi",
        "Sessiz hata risk listesi",
        "Test senaryosu seti",
        "UAT doğrulama checklist'i",
        "Entegrasyon davranışı özet notu",
      ],
      expectedOutput: [
        "Mapping kaynaklı hatalar süreçte daha erken bulunur",
        "İş gereksinimi ile teknik entegrasyon arasındaki boşluk azalır",
        "Response yorumlama hataları görünür hale gelir",
        "Test senaryoları içerik doğruluğu temelinde daha güçlü kurgulanır",
        "Operasyon ekranlarında daha doğru bilgi gösterilir",
        "Teknik ve iş ekipleri aynı entegrasyon davranışını aynı şekilde yorumlar",
      ],
      demonstrates: [
        "İş gereksinimini teknik veri yapısıyla birlikte okuyabilme",
        "Alan bazlı doğrulama ve içerik doğruluğu analizi yapabilme",
        "Sessiz hata risklerini üretime ulaşmadan görünür hale getirebilme",
        "Beklenen ve gerçekleşen davranışı hem teknik hem işsel açıdan yorumlayabilme",
        "Analizi test ve UAT için kullanılabilir çıktıya dönüştürebilme",
      ],
      testScenarios: [
        { id: "IT-01", scenario: "Zorunlu request alanı boş gönderilir", expected: "Çağrı öncesi doğrulama hatası alınır" },
        { id: "IT-02", scenario: "Koşullu zorunlu alan eksik gönderilir", expected: "Kural bazlı eksik veri hatası görünür" },
        { id: "IT-03", scenario: "Alan formatı beklenen yapıda değildir", expected: "Format doğrulama hatası alınır" },
        { id: "IT-04", scenario: "Yanlış iç alan yanlış request alanına map edilir", expected: "İşsel uyumsuzluk görünür hale gelir" },
        { id: "IT-05", scenario: "Response teknik olarak başarılı ama işsel sonucu eksiktir", expected: "Response yorumlama uyarısı oluşur" },
        { id: "IT-06", scenario: "Response alanı yanlış statüye yansıtılır", expected: "Statü değerlendirme hatası tespit edilir" },
        { id: "IT-07", scenario: "Teknik hata dönmeyen ancak eksik veri taşıyan response alınır", expected: "Sessiz hata senaryosu görünür hale gelir" },
      ],
    },
  },

  {
    id: "operation-screen-simplification",
    number: 3,
    en: {
      title: "Simplifying an Operational Screen and Improving Process Clarity",
      summary:
        "A functional analysis case focused on simplifying decision points, information priority, and user flow in a complex operational screen to create a clearer and more manageable structure.",
      tags: ["Process Analysis", "Functional Design", "Screen Logic", "Operational Clarity"],
      meta: ["Functional Analysis", "Process Design", "UAT", "Operational Screens"],
      businessProblem:
        "Operational screens tend to grow over time. New fields are added, some information repeats, decision points become implicit, and users lose visibility into which step they are at and what action to take next.",
      businessProblemBullets: [
        "User decision load increases without clear prioritization",
        "Critical information becomes buried in secondary data",
        "Unnecessary repetition adds friction to the process",
        "Risk of incorrect action or missed step increases",
        "Onboarding and adaptation time grows",
      ],
      analysisGoal:
        "To make information on the operational screen meaningful; to reduce unnecessary repetition and ambiguous fields; to surface user decision points clearly; to align business rules with screen behavior; and to make the screen simpler without losing any functional capability.",
      scope: [
        "Existing screen structure and field groups",
        "User steps and decision points",
        "Mandatory, optional, and display-only field distinctions",
        "Button and action logic",
        "Error, warning, and guidance structure",
        "How the process flow is represented on the screen",
      ],
      outOfScope: [
        "Full redesign of the visual design system",
        "Live user behavior analytics",
        "Infrastructure and performance architecture",
        "Full rewrite of all system modules",
      ],
      currentState:
        "On the current screen, users are faced with a large number of fields, options, and information simultaneously. Not all of this is equally important. Some fields are only relevant in certain transaction types, some are purely informational, and some affect critical decision points. Despite this, the current structure does not prioritize effectively, does not separate fields by function, and does not communicate to the user where they are in the process.",
      keyIssues: [
        { title: "Information priority is not visible", desc: "When critical fields and secondary fields are shown with equal weight, users cannot direct their attention correctly." },
        { title: "Decision points are not surfaced", desc: "When the user cannot see which decision to make at each stage, the process relies on experience rather than structure." },
        { title: "Unnecessary repetition and fragmentation", desc: "The same information appearing across different fields, or closely related fields appearing disconnected, adds cognitive load." },
        { title: "Screen structure does not fully reflect business logic", desc: "Some fields appear on screen without making it clear when they are relevant or what they mean in context." },
        { title: "Error and guidance language is insufficient", desc: "A screen that only displays data cannot guide users to the correct action when something goes wrong." },
      ],
      analysisApproach:
        "I do not treat this kind of problem as a visual design issue alone. My first step is to understand the process behind the screen. I identify the business workflow the screen supports; I determine user roles and decision points; I classify fields as critical, supporting, or display-only; I clarify what information needs to be visible at each step of the transaction; I identify unnecessary repetition and ambiguous fields; and I propose a simpler structure that preserves all functional capability.",
      layers: [
        { title: "Process Layer", desc: "Which business step the screen serves, and what the user needs to do at each stage" },
        { title: "Information Architecture Layer", desc: "Classification of fields by importance, usage frequency, and decision impact" },
        { title: "User Decision Layer", desc: "Decisions users make, actions they select, and points that carry risk of incorrect action" },
        { title: "Business Rule Layer", desc: "Conditions under which certain fields should appear, become active, or become mandatory" },
        { title: "Validation Layer", desc: "Whether error, warning, and guidance messages move users toward the correct action" },
      ],
      frameworkItems: [
        {
          label: "A",
          title: "Field Prioritization",
          items: [
            "Critical transaction fields — shown first, high visual weight",
            "Supporting information fields — secondary position",
            "Display-only fields — separated visually",
          ],
        },
        {
          label: "B",
          title: "Step-Based Structure",
          items: [
            "User's current stage in the flow is made visible",
            "Screen functions as a structured progression rather than a single block",
            "Next action is contextually clear at each stage",
          ],
        },
        {
          label: "C",
          title: "Conditional Visibility",
          items: [
            "Not all fields are shown to all users in all scenarios simultaneously",
            "Relevant fields activate based on transaction type or status",
            "Screen complexity reduces without removing functionality",
          ],
        },
        {
          label: "D",
          title: "Guidance Messages",
          items: [
            "Error and warning messages go beyond stating the problem",
            "Users are directed toward the correct next step",
            "Guidance is actionable, not just descriptive",
          ],
        },
      ],
      businessRules: [
        { id: "UI-01", rule: "Critical transaction fields must be displayed in the priority area", rationale: "Direct user attention to the correct focal point" },
        { id: "UI-02", rule: "Conditional fields must only appear in relevant scenarios", rationale: "Reduce screen complexity without removing functionality" },
        { id: "UI-03", rule: "Fields repeating the same information must be consolidated at one point", rationale: "Reduce information fragmentation and cognitive load" },
        { id: "UI-04", rule: "Error and warning messages must include action guidance", rationale: "Help users determine the correct next step" },
        { id: "UI-05", rule: "Process phase and current status must be visible", rationale: "Prevent users from losing context within the transaction" },
        { id: "UI-06", rule: "Supporting information must be visually separated from critical fields", rationale: "Strengthen information priority and visual hierarchy" },
      ],
      flowTitle: "Proposed Operational Screen Flow",
      flowSteps: [
        "Transaction context is displayed",
        "Critical decision fields are presented first",
        "Conditional fields become visible based on transaction type",
        "Supporting information is shown in a secondary block",
        "User selects an action",
        "Error, warning, or guidance message is clearly shown",
        "Next step or result is presented clearly",
      ],
      operationalQuestions: [
        "Which transaction is this screen for?",
        "Which stage am I currently at?",
        "Which fields do I need to complete?",
        "Which fields are for information only?",
        "Which error is critical, and which is a warning?",
        "What should the next action be?",
      ],
      screenSections: [
        "Transaction Summary",
        "Critical Decision Fields",
        "Conditional Transaction Information",
        "Supporting Data Fields",
        "Status and Process Information",
        "Error / Warning / Guidance Messages",
        "Transaction History or Notes",
      ],
      testApproach:
        "Testing for this case is built not just around 'does the screen open?' but around usability and business logic alignment. Test areas include: critical field visibility on load, conditional field behavior, removal of redundant repetition, user flow consistency with status, actionability of error and warning messages, and reduction of incorrect action risk.",
      uatApproach:
        "UAT validates whether users understand the screen immediately, whether critical information is easy to notice, whether the current process stage is clear, whether conditional fields work correctly, and whether error messages guide rather than just describe.",
      uatChecklist: [
        "Can the user understand the screen's purpose at first glance?",
        "Are critical fields visible enough?",
        "Do conditional fields open at the right time?",
        "Do error and warning messages guide to the correct action?",
        "Is the process stage clear to the user?",
        "Is the screen simpler and more manageable than before?",
        "Does the user hesitate less during the transaction?",
        "Is the information priority correctly structured?",
      ],
      deliverables: [
        "Current screen analysis",
        "Field prioritization matrix",
        "Decision point list",
        "Conditional visibility rules",
        "To-be screen flow",
        "Error and warning message language proposals",
        "Test scenario set",
        "UAT checklist",
      ],
      expectedOutput: [
        "User decision load is reduced",
        "Critical information becomes more immediately visible",
        "Risk of incorrect action decreases",
        "Screen is more understandable",
        "Process tracking is easier",
        "Business logic and screen behavior are better aligned",
      ],
      demonstrates: [
        "Reading processes not just as workflows, but from a user and operational perspective",
        "Balancing functionality with simplicity without sacrificing either",
        "Converting a data-heavy screen into a decision support tool",
        "Translating business rules into screen behavior",
        "Converting analysis into implementable design and validation outputs",
      ],
      testScenarios: [
        { id: "UI-TS-01", scenario: "Critical fields are visible on screen load", expected: "User sees priority information at first glance" },
        { id: "UI-TS-02", scenario: "Conditional fields only open for the relevant transaction type", expected: "Unnecessary field display is prevented" },
        { id: "UI-TS-03", scenario: "Repetitive fields exist in a simplified structure", expected: "Information fragmentation is reduced" },
        { id: "UI-TS-04", scenario: "Error message contains action guidance text", expected: "User can identify the correct next action" },
        { id: "UI-TS-05", scenario: "Process phase/status is visible", expected: "User knows which stage they are at" },
        { id: "UI-TS-06", scenario: "Supporting information is shown in a secondary area", expected: "Critical fields are visually foregrounded" },
      ],
    },
    tr: {
      title: "Operasyon Ekranının Sadeleştirilmesi ve Süreç Netliğinin Artırılması",
      summary:
        "Karmaşık operasyon ekranlarında karar noktalarını, bilgi önceliğini ve kullanıcı akışını sadeleştirerek daha net ve yönetilebilir bir yapı oluşturmayı hedefleyen fonksiyonel analiz vakası.",
      tags: ["Süreç Analizi", "Fonksiyonel Tasarım", "Ekran Mantığı", "Operasyonel Netlik"],
      meta: ["Fonksiyonel Analiz", "Süreç Tasarımı", "UAT", "Operasyon Ekranları"],
      businessProblem:
        "Operasyon ekranları zaman içinde büyür. Yeni alanlar eklenir, bazı bilgiler tekrar eder, karar noktaları örtük hale gelir ve kullanıcı hangi adımda ne yapması gerektiğini açıkça göremez.",
      businessProblemBullets: [
        "Kullanıcı karar yükü net önceliklendirme olmadan artar",
        "Kritik bilgi ikincil verilerin arasında kaybolur",
        "Gereksiz tekrar sürece sürtünme katar",
        "Hatalı aksiyon veya kaçırılan adım riski yükselir",
        "Alışma ve uyum süresi uzar",
      ],
      analysisGoal:
        "Operasyon ekranındaki bilgi yoğunluğunu anlamlı hale getirmek; gereksiz tekrarları ve belirsiz alanları azaltmak; kullanıcı karar noktalarını görünür kılmak; iş kuralı ile ekran davranışını uyumlu hale getirmek; ve ekranı işlev kaybı olmadan daha sade hale getirmek.",
      scope: [
        "Mevcut ekran yapısı ve alan grupları",
        "Kullanıcı adımları ve karar noktaları",
        "Zorunlu, opsiyonel ve yalnızca görüntüleme alanları ayrımı",
        "Buton ve aksiyon mantığı",
        "Hata, uyarı ve yönlendirme yapısı",
        "Süreç akışının ekran üzerinde nasıl temsil edildiği",
      ],
      outOfScope: [
        "Görsel tasarım sisteminin tamamının yeniden oluşturulması",
        "Canlı kullanıcı davranış verisi analitiği",
        "Altyapı ve performans mimarisi",
        "Tüm modüllerin yeniden yazımı",
      ],
      currentState:
        "Mevcut ekranda kullanıcı aynı anda çok sayıda alan, seçenek ve bilgiyle karşılaşmaktadır. Hepsinin ağırlığı eşit değildir. Bazı alanlar yalnızca belirli işlem tiplerinde gereklidir, bazıları yalnızca bilgi amaçlıdır, bazıları kritik kararları etkiler. Buna rağmen mevcut yapı bilgiyi önceliklendirmez, alanları işlevine göre ayırmaz ve kullanıcıya süreçte hangi aşamada olduğunu açıkça hissettirmez.",
      keyIssues: [
        { title: "Bilgi önceliği görünür değil", desc: "Kritik alanlarla ikincil alanlar eşit ağırlıkla gösterildiğinde kullanıcı dikkatini doğru yere veremez." },
        { title: "Karar noktaları ekrana yansımıyor", desc: "Her aşamada hangi kararın alınması gerektiği görünür olmadığında süreç deneyime değil yapıya dayanır." },
        { title: "Gereksiz tekrar ve dağınıklık var", desc: "Aynı bilginin farklı alanlarda tekrar etmesi veya ilişkili alanların kopuk görünmesi bilişsel yük yaratır." },
        { title: "Ekran yapısı iş mantığını tam yansıtmıyor", desc: "Bazı alanlar ekranda yer alsa da ne zaman geçerli oldukları veya bağlamda ne anlama geldikleri yeterince açık değil." },
        { title: "Hata ve yönlendirme dili yetersiz", desc: "Yalnızca veri gösteren bir ekran, bir şeyler ters gittiğinde kullanıcıyı doğru aksiyona yönlendirme kapasitesini kaybeder." },
      ],
      analysisApproach:
        "Bu tür bir durumda ekrana yalnızca görsel tasarım problemi olarak bakmam. Önce ekranın arkasındaki süreci anlamaya çalışırım: ekranın desteklediği iş akışını çıkarırım; kullanıcı rollerini ve karar noktalarını belirlerim; alanları kritik, destekleyici ve bilgi amaçlı olarak ayırırım; her işlem adımında hangi bilginin ne zaman görünmesi gerektiğini netleştiririm; gereksiz tekrarları ve belirsiz alanları tespit ederim; ve işlevselliği koruyarak daha sade bir yapı öneririm.",
      layers: [
        { title: "Süreç Katmanı", desc: "Ekranın hangi iş adımına hizmet ettiği ve kullanıcının her aşamada ne yapması gerektiği" },
        { title: "Bilgi Mimarisi Katmanı", desc: "Alanların önem, kullanım sıklığı ve karar etkisi açısından sınıflandırılması" },
        { title: "Kullanıcı Kararı Katmanı", desc: "Kullanıcının verdiği kararlar, seçtiği aksiyonlar ve hata yapma riski taşıyan noktalar" },
        { title: "İş Kuralı Katmanı", desc: "Belirli alanların hangi koşullarda görünmesi, aktifleşmesi veya zorunlu hale gelmesi gerektiği" },
        { title: "Doğrulama Katmanı", desc: "Hata, uyarı ve yönlendirme mesajlarının kullanıcıyı doğru aksiyona taşıyıp taşımadığı" },
      ],
      frameworkItems: [
        {
          label: "A",
          title: "Alan Önceliklendirme",
          items: [
            "Kritik işlem alanları — üstte, yüksek görsel ağırlıkla",
            "Destekleyici bilgi alanları — ikincil konumda",
            "Yalnızca görüntüleme amaçlı alanlar — görsel olarak ayrılmış",
          ],
        },
        {
          label: "B",
          title: "Adım Bazlı Yapı",
          items: [
            "Kullanıcının akıştaki mevcut aşaması görünür hale getirilir",
            "Ekran tek blok değil, mantıklı ilerleyen bir yapı olarak çalışır",
            "Sonraki aksiyon her aşamada bağlamsal olarak nettir",
          ],
        },
        {
          label: "C",
          title: "Koşullu Görünürlük",
          items: [
            "Her alan her kullanıcıya her senaryoda aynı anda gösterilmez",
            "İlgili alanlar işlem tipine veya statüye göre aktif hale gelir",
            "İşlevsellik azaltılmadan ekran karmaşası düşer",
          ],
        },
        {
          label: "D",
          title: "Yönlendirici Mesajlar",
          items: [
            "Hata ve uyarı mesajları yalnızca sorunu söylemez",
            "Kullanıcı doğru sonraki adıma yönlendirilir",
            "Yönlendirme eylem odaklıdır, yalnızca tanımlayıcı değil",
          ],
        },
      ],
      businessRules: [
        { id: "UI-01", rule: "Kritik işlem alanları öncelikli bölgede gösterilmelidir", rationale: "Kullanıcı odağını doğru noktaya yönlendirmek" },
        { id: "UI-02", rule: "Koşullu alanlar yalnızca ilgili senaryoda görünmelidir", rationale: "İşlevsellik kaybetmeden ekran karmaşasını azaltmak" },
        { id: "UI-03", rule: "Aynı bilgiyi tekrar eden alanlar tek noktada toplanmalıdır", rationale: "Bilgi dağınıklığını ve bilişsel yükü azaltmak" },
        { id: "UI-04", rule: "Hata ve uyarı mesajları aksiyon yönlendirmesi içermelidir", rationale: "Kullanıcının doğru sonraki adımı belirlemesini sağlamak" },
        { id: "UI-05", rule: "Süreç aşaması ve mevcut statü görünür olmalıdır", rationale: "Kullanıcının işlem bağlamını kaybetmesini önlemek" },
        { id: "UI-06", rule: "Destekleyici bilgiler kritik alanlardan görsel olarak ayrılmalıdır", rationale: "Bilgi önceliğini ve görsel hiyerarşiyi güçlendirmek" },
      ],
      flowTitle: "Önerilen Operasyon Ekranı Akışı",
      flowSteps: [
        "İşlem bağlamı gösterilir",
        "Kritik karar alanları öncelikli olarak sunulur",
        "Koşullu alanlar işlem tipine göre açılır",
        "Destekleyici bilgiler ikincil blokta gösterilir",
        "Kullanıcı aksiyon seçer",
        "Hata / uyarı / yönlendirme mesajı açık şekilde gösterilir",
        "Sonraki adım veya sonuç net biçimde sunulur",
      ],
      operationalQuestions: [
        "Bu ekran hangi işlem için kullanılıyor?",
        "Şu an hangi aşamadayım?",
        "Hangi alanları doldurmam gerekiyor?",
        "Hangi alanlar yalnızca bilgi amaçlı?",
        "Hangi hata kritik, hangisi uyarı?",
        "Sıradaki aksiyon ne olmalı?",
      ],
      screenSections: [
        "İşlem Özeti",
        "Kritik Karar Alanları",
        "Koşullu İşlem Bilgileri",
        "Destekleyici Veri Alanları",
        "Statü ve Süreç Bilgisi",
        "Hata / Uyarı / Yönlendirme Mesajları",
        "İşlem Geçmişi veya Notlar",
      ],
      testApproach:
        "Bu vaka için test yalnızca 'ekran açılıyor mu?' sorusuna göre değil, kullanılabilirlik ve iş mantığı uyumuna göre kurulmalıdır. Test alanları: kritik alanların açılışta görünmesi, koşullu alan davranışı, gereksiz tekrarın kaldırılması, kullanıcı akışının statüyle uyumu, hata ve uyarı mesajlarının yönlendiricilik kalitesi ve yanlış aksiyon riskinin azalması.",
      uatApproach:
        "UAT aşamasında kullanıcının ekranı hemen anlayıp anlayamadığı, kritik bilginin kolay fark edilip edilmediği, mevcut süreç aşamasının net olup olmadığı, koşullu alanların doğru çalışıp çalışmadığı ve hata mesajlarının yalnızca sorunu tarif etmek yerine yönlendirme yapıp yapmadığı doğrulanır.",
      uatChecklist: [
        "Kullanıcı ekranın amacını ilk bakışta anlayabiliyor mu?",
        "Kritik alanlar yeterince görünür mü?",
        "Koşullu alanlar doğru zamanda açılıyor mu?",
        "Hata ve uyarılar doğru aksiyonu düşündürüyor mu?",
        "Süreç statüsü kullanıcı için net mi?",
        "Ekran önceki yapıya göre daha sade ve yönetilebilir mi?",
        "Kullanıcı işlem sırasında daha az tereddüt ediyor mu?",
        "Bilgi önceliği doğru kurulmuş mu?",
      ],
      deliverables: [
        "Mevcut ekran analizi",
        "Alan önceliklendirme matrisi",
        "Karar noktası listesi",
        "Koşullu görünürlük kuralları",
        "To-be ekran akışı",
        "Hata ve uyarı dili önerileri",
        "Test senaryosu seti",
        "UAT checklist'i",
      ],
      expectedOutput: [
        "Kullanıcı karar yükü azalır",
        "Kritik bilgi daha hızlı görünür hale gelir",
        "Hata yapma riski düşer",
        "Ekran daha anlaşılır olur",
        "Süreç takibi kolaylaşır",
        "İş mantığı ile ekran davranışı daha uyumlu hale gelir",
      ],
      demonstrates: [
        "Süreci yalnızca iş akışı olarak değil, kullanıcı ve operasyon perspektifinden okuyabilme",
        "İşlevsellik ve sadelik arasında denge kurabilme",
        "Veri yığını olan ekranı karar destek aracına dönüştürebilme",
        "İş kuralını ekran davranışına yansıtabilme",
        "Analizi uygulanabilir tasarım ve doğrulama çıktısına dönüştürebilme",
      ],
      testScenarios: [
        { id: "UI-TS-01", scenario: "Kritik alanlar ekran açılışında görünür", expected: "Kullanıcı öncelikli bilgiyi ilk bakışta görür" },
        { id: "UI-TS-02", scenario: "Koşullu alanlar yalnızca ilgili işlem tipinde açılır", expected: "Gereksiz alan gösterimi engellenir" },
        { id: "UI-TS-03", scenario: "Tekrarlı alanlar sadeleştirilmiş yapıdadır", expected: "Bilgi dağınıklığı azalır" },
        { id: "UI-TS-04", scenario: "Hata mesajı yönlendirici metin içerir", expected: "Kullanıcı doğru aksiyonu anlayabilir" },
        { id: "UI-TS-05", scenario: "Süreç aşaması/statü görünürdür", expected: "Kullanıcı hangi aşamada olduğunu bilir" },
        { id: "UI-TS-06", scenario: "Destekleyici bilgiler ikincil bölgede gösterilir", expected: "Kritik alanlar görsel olarak öne çıkar" },
      ],
    },
  },

  {
    id: "as-is-to-be-process-analysis",
    number: 4,
    en: {
      title: "AS-IS / TO-BE Process Mapping and Operational Improvement Analysis",
      summary:
        "A process analysis case focused on examining an existing operational flow with manual checks, repeated data entry and limited status visibility, then designing a clearer, traceable and system-supported target process.",
      tags: ["Process Analysis", "AS-IS / TO-BE", "Operational Improvement", "Workflow"],
      meta: ["Process Analysis", "AS-IS / TO-BE", "Workflow", "Operational Clarity", "UAT Readiness"],
      businessProblem:
        "An operational process that moves across multiple teams (request, approval, procurement, finance) runs largely through manual steps, email-based handoffs and repeated data entry. Progress information is not consistent, some checks depend on individuals, and operations teams cannot quickly identify where a delay originates.",
      businessProblemBullets: [
        "Multiple manual handoffs make ownership unclear",
        "The same information is re-entered in different places",
        "Approval communication relies on email rather than the system",
        "Status visibility across teams is limited",
        "Bottlenecks and delays are not easily measurable",
      ],
      analysisGoal:
        "To make the current process visible end-to-end, separate roles, decision points and waiting zones, identify repeated or unnecessary steps, propose a clearer target process, and define a structure that can be validated through test and UAT.",
      analysisGoalItems: [
        "Make the AS-IS process explicit and shared",
        "Separate roles, decision points and waiting zones",
        "Identify repeated or unnecessary steps",
        "Design a simpler, system-supported TO-BE process",
        "Improve operational visibility across teams",
        "Define a structure that can be validated in test and UAT",
      ],
      scope: [
        "Analysis of existing process steps and handoffs",
        "Role-based task and ownership review",
        "Identification of manual and repeated work",
        "Pain point analysis across teams",
        "Target (TO-BE) process design proposal",
        "Potential system fields, status indicators and visibility needs",
        "Impact assessment for test and UAT",
      ],
      outOfScope: [
        "Selection or implementation of a specific tooling vendor",
        "Detailed cost-benefit modeling",
        "Organizational restructuring decisions",
        "Long-term reporting infrastructure design",
      ],
      currentState:
        "The current process begins with a manual request, moves to manager approval via email, continues with procurement performing supplier checks outside the system, and ends with finance recording the outcome after the fact. The same information is captured in different places, status is shared informally, and there is no single point where the full process can be observed.",
      currentStateBullets: [
        "Requester creates the purchase requisition manually",
        "Manager approves through email or offline communication",
        "Procurement checks supplier availability manually",
        "Purchase order is created as a separate record",
        "Finance is involved only at the final recording step",
        "Status tracking across the flow is limited and informal",
      ],
      keyIssues: [
        { title: "Multiple manual handoffs", desc: "Each transition between roles requires manual coordination, increasing the chance of delay or loss." },
        { title: "Delays in approval communication", desc: "Approvals depend on email response time rather than a structured workflow step." },
        { title: "Repeated data entry", desc: "The same request information is captured in different forms, files or systems by different roles." },
        { title: "Limited status visibility", desc: "Teams cannot answer 'where is this request now?' without contacting another team." },
        { title: "Information gaps between teams", desc: "Procurement, finance and the requester rely on informal updates instead of shared system state." },
        { title: "Difficult to measure process performance", desc: "Without consistent status data, cycle time and bottleneck analysis remain qualitative." },
      ],
      analysisApproach:
        "I map the current process at role and step level, separate decision points from waiting zones, mark repeated data entry and manual checks, and make hidden contributors to delay explicit. I then propose a simpler, system-supported target process and check that the proposed structure can be expressed as testable behavior for UAT.",
      analysisApproachItems: [
        "Mapped the current process by role and step",
        "Separated decision points from waiting zones",
        "Marked repeated data entry and manual checks",
        "Made hidden sources of delay visible",
        "Proposed a simpler, system-supported target process",
        "Ensured the target structure remains testable and verifiable in UAT",
      ],
      layers: [
        { title: "Role Layer", desc: "Which role owns each step and where ownership transitions across teams" },
        { title: "Step Layer", desc: "Discrete actions that move the process forward versus passive waiting periods" },
        { title: "Decision Layer", desc: "Approval, rejection and routing decisions that change the path of the process" },
        { title: "Handoff Layer", desc: "Points where work transfers between teams and where information loss tends to occur" },
        { title: "Status Visibility Layer", desc: "How current state is communicated and who can observe it" },
      ],
      businessRules: [
        { id: "PR-01", rule: "Every request must enter the process through a single structured entry point", rationale: "Eliminate parallel intake channels and ensure traceability from the start" },
        { id: "PR-02", rule: "Mandatory request fields must be validated before the request can move forward", rationale: "Prevent incomplete data from being passed downstream and re-entered later" },
        { id: "PR-03", rule: "Approvals must be routed through the system, not through email", rationale: "Make approval timing measurable and prevent informal communication gaps" },
        { id: "PR-04", rule: "Supplier availability checks must be recorded against the request", rationale: "Avoid procurement work being repeated or lost between teams" },
        { id: "PR-05", rule: "Purchase order must be generated from the same request record", rationale: "Prevent duplicate data entry and reconciliation effort later" },
        { id: "PR-06", rule: "Process status must be updated centrally and visible to all involved roles", rationale: "Replace informal status sharing with a single source of truth" },
      ],
      flowTitle: "Proposed TO-BE Process Flow",
      flowSteps: [
        "Requester creates the request in the system with mandatory fields validated",
        "Manager receives the approval task in the platform",
        "On approval, supplier availability check step is triggered",
        "Procurement records supplier confirmation against the same request",
        "Purchase order is generated from the same flow without re-entry",
        "Status is updated centrally at every transition",
        "Finance records the outcome based on the final system state",
      ],
      operationalQuestions: [
        "Where is this request currently in the process?",
        "Who is the next responsible role?",
        "Has the approval been completed?",
        "Has supplier availability been confirmed?",
        "Is there a step that has been waiting too long?",
        "Which step caused the most delay in this request?",
      ],
      screenSections: [
        "Request Summary",
        "Current Step and Owner",
        "Approval Status",
        "Supplier Availability Status",
        "Purchase Order Reference",
        "Finance Recording Status",
        "Activity and Status History",
      ],
      testApproach:
        "Testing focuses on whether the redesigned flow behaves correctly at each handoff: mandatory field validation at request creation, approval routing, supplier availability step, PO generation from the same record, central status update at every transition, and consistency of the final finance recording with the system state.",
      uatApproach:
        "UAT validates whether each role experiences the new process as clearer than before: whether they can see where the request is, whether they receive their step at the right time, whether they avoid re-entering information already captured, and whether the end-to-end status is consistent across teams.",
      uatChecklist: [
        "Can the requester see the current status without asking another team?",
        "Does the manager receive the approval task in the platform on time?",
        "Does the supplier availability step appear only after approval?",
        "Is the purchase order generated without re-entering request data?",
        "Is the status updated centrally after every transition?",
        "Can finance complete recording based on the system state alone?",
        "Are handoffs between teams visible in the activity history?",
        "Is the process measurably shorter and clearer than the AS-IS version?",
      ],
      deliverables: [
        "AS-IS process map",
        "TO-BE process map",
        "Pain point matrix",
        "Improvement opportunities list",
        "Role and responsibility view",
        "Business rules and decision points",
        "Screen and data visibility suggestions",
        "Sample UAT focus points",
      ],
      expectedOutput: [
        "Shorter process cycle time",
        "Less manual follow-up between teams",
        "Lower risk of error and forgotten steps",
        "Clearer status visibility across roles",
        "More explicit ownership distribution between teams",
        "Easier test and UAT validation",
        "A more sustainable operational structure",
      ],
      demonstrates: [
        "Performing a clear comparison between current and target state",
        "Treating processes not just descriptively but with an improvement perspective",
        "Producing operational visibility and decision clarity",
        "Converting analysis into visual and structured deliverables",
        "Reading business need and system behavior within the same frame",
      ],
      testScenarios: [
        { id: "PR-TS-01", scenario: "Request is submitted without a mandatory field", expected: "System blocks submission and surfaces the missing field" },
        { id: "PR-TS-02", scenario: "Manager approval is given in the platform", expected: "Process advances to the supplier availability step automatically" },
        { id: "PR-TS-03", scenario: "Supplier availability is confirmed in the system", expected: "Confirmation is recorded against the same request without re-entry" },
        { id: "PR-TS-04", scenario: "Purchase order is generated from the approved request", expected: "PO is linked to the original request without duplicate data entry" },
        { id: "PR-TS-05", scenario: "A request waits longer than expected at a step", expected: "Status remains visible and the delayed step is identifiable" },
        { id: "PR-TS-06", scenario: "Finance opens the request after PO generation", expected: "Final recording reflects the centralized system state" },
      ],
      processMap: {
        caption: "Example: Purchase Requisition to Purchase Order Process",
        asIs: {
          title: "AS-IS (Current State)",
          notesTitle: "Pain Points",
          notes: [
            "Multiple handoffs via email",
            "Manual checks and follow-ups",
            "Delays in approval communication",
            "Duplicate data entry",
            "Limited visibility into status",
          ],
          lanes: [
            { role: "Requester", icon: "requester", steps: ["Create PR manually", "Submit via email"] },
            { role: "Manager", icon: "manager", steps: ["Review request", "Approve by email"] },
            { role: "Procurement", icon: "procurement", steps: ["Check supplier availability (manual)", "Create PO separately", "Contact supplier", "Receive confirmation"] },
            { role: "Finance", icon: "finance", steps: ["Record PO in system after the fact"] },
          ],
        },
        toBe: {
          title: "TO-BE (Future State)",
          notesTitle: "Improvements",
          notes: [
            "End-to-end process visibility",
            "Reduced cycle time",
            "Less repeated data entry",
            "Clearer ownership at every step",
            "Easier tracking and reporting",
            "More reliable downstream execution",
          ],
          lanes: [
            { role: "Requester", icon: "requester", steps: ["Create request in system", "Mandatory fields validated"] },
            { role: "Manager", icon: "manager", steps: ["Receive approval task", "Approve in platform"] },
            { role: "Procurement", icon: "procurement", steps: ["Supplier availability checked", "PO generated from same flow", "Confirmation captured"] },
            { role: "Finance", icon: "finance", steps: ["Outcome recorded from central state"] },
          ],
        },
      },
    },
    tr: {
      title: "AS-IS / TO-BE Süreç Haritalama ve Operasyonel İyileştirme Analizi",
      summary:
        "Manuel kontroller, tekrar eden veri girişi ve sınırlı statü görünürlüğü içeren mevcut bir operasyonel akışı uçtan uca inceleyen ve ardından daha sade, izlenebilir ve sistem destekli bir hedef süreç tasarlayan süreç analizi vakası.",
      tags: ["Süreç Analizi", "AS-IS / TO-BE", "Operasyonel İyileştirme", "İş Akışı"],
      meta: ["Süreç Analizi", "AS-IS / TO-BE", "İş Akışı", "Operasyonel Netlik", "UAT Hazırlığı"],
      businessProblem:
        "Talep, onay, satın alma ve finans ekipleri arasında ilerleyen operasyonel bir süreç, büyük ölçüde manuel adımlar, e-posta üzerinden yapılan devirler ve tekrar eden veri girişiyle yürütülüyor. İlerleme bilgisi tutarlı değil, bazı kontroller kişilere bağımlı kalıyor ve operasyon ekipleri bir gecikmenin nereden kaynaklandığını hızlıca tespit edemiyor.",
      businessProblemBullets: [
        "Çok sayıda manuel devir sorumluluğu belirsizleştiriyor",
        "Aynı bilgi farklı yerlerde tekrar tekrar giriliyor",
        "Onaylar sistem üzerinden değil, e-posta üzerinden yürüyor",
        "Ekipler arası statü görünürlüğü sınırlı kalıyor",
        "Darboğazlar ve gecikmeler kolay ölçülemiyor",
      ],
      analysisGoal:
        "Mevcut süreci uçtan uca görünür hale getirmek; rolleri, karar noktalarını ve bekleme alanlarını ayrıştırmak; tekrar eden veya gereksiz adımları belirlemek; daha net bir hedef süreç önermek ve önerilen yapının test ile UAT'ta doğrulanabilir olmasını sağlamak.",
      analysisGoalItems: [
        "AS-IS süreci açık ve paylaşılır hale getirmek",
        "Rolleri, karar noktalarını ve bekleme alanlarını ayrıştırmak",
        "Tekrar eden veya gereksiz adımları belirlemek",
        "Daha sade ve sistem destekli bir TO-BE süreci tasarlamak",
        "Ekipler arası operasyonel görünürlüğü artırmak",
        "Test ve UAT ile doğrulanabilir bir yapı kurmak",
      ],
      scope: [
        "Mevcut süreç adımlarının ve ekipler arası devirlerin analizi",
        "Rol bazlı görev ve sorumluluk incelemesi",
        "Manuel ve tekrar eden işlerin tespiti",
        "Ekipler arası sorun noktalarının analizi",
        "Hedef (TO-BE) süreç tasarımının önerilmesi",
        "Sistem alanları, statü göstergeleri ve görünürlük ihtiyaçlarının belirlenmesi",
        "Test ve UAT etkisinin değerlendirilmesi",
      ],
      outOfScope: [
        "Belirli bir araç veya tedarikçi seçimi ya da uygulaması",
        "Detaylı maliyet–fayda modellemesi",
        "Organizasyonel yeniden yapılanma kararları",
        "Uzun vadeli raporlama altyapısı tasarımı",
      ],
      currentState:
        "Süreç manuel bir talep ile başlıyor, e-posta üzerinden yönetici onayına gidiyor, satın alma ekibinin sistem dışında yürüttüğü tedarikçi kontrolüyle devam ediyor ve finans tarafından geriye dönük olarak kayıt altına alınıyor. Aynı bilgi farklı noktalarda yeniden toplanıyor, statü gayri resmi paylaşılıyor ve sürecin tamamının izlenebildiği tek bir nokta bulunmuyor.",
      currentStateBullets: [
        "Talep eden, satın alma talebini manuel olarak oluşturuyor",
        "Yönetici, onayı e-posta veya sistem dışı bir kanaldan veriyor",
        "Satın alma ekibi, tedarikçi uygunluğunu manuel kontrol ediyor",
        "Satın alma kaydı (PO) ayrı bir kayıt olarak oluşturuluyor",
        "Finans, sürece yalnızca son kayıt aşamasında dahil oluyor",
        "Akış boyunca statü takibi sınırlı ve gayri resmi şekilde ilerliyor",
      ],
      keyIssues: [
        { title: "Çok sayıda manuel devir", desc: "Roller arası her geçiş manuel koordinasyon gerektiriyor; bu da gecikme ve bilgi kaybı riskini artırıyor." },
        { title: "Onay iletişiminde gecikme", desc: "Onaylar yapılandırılmış bir iş akışı adımına değil, e-posta yanıt süresine bağlı kalıyor." },
        { title: "Tekrar eden veri girişi", desc: "Aynı talep bilgisi farklı roller tarafından farklı form, dosya ve sistemlerde yeniden giriliyor." },
        { title: "Sınırlı statü görünürlüğü", desc: "Ekipler, 'bu talep şu an nerede?' sorusunu başka bir ekibe sormadan cevaplayamıyor." },
        { title: "Ekipler arası bilgi kopukluğu", desc: "Satın alma, finans ve talep eden ortak bir sistem durumu yerine gayri resmi güncellemelere güveniyor." },
        { title: "Süreç performansını ölçmek zor", desc: "Tutarlı statü verisi olmadan çevrim süresi ve darboğaz analizi nicel olarak yapılamıyor." },
      ],
      analysisApproach:
        "Mevcut süreci rol ve adım bazında haritalıyor, karar noktalarını bekleme alanlarından ayırıyor, tekrar eden veri girişleri ile manuel kontrolleri işaretliyor ve gecikmeye yol açan ancak görünmeyen noktaları açığa çıkarıyorum. Ardından daha sade, sistem destekli bir hedef süreç öneriyor ve bu yapının UAT'ta test edilebilir davranışlar ürettiğini doğruluyorum.",
      analysisApproachItems: [
        "Mevcut süreci rol ve adım bazında haritaladım",
        "Karar noktalarını bekleme alanlarından ayırdım",
        "Tekrar eden veri girişlerini ve manuel kontrolleri işaretledim",
        "Görünmeyen ancak gecikmeye neden olan noktaları açığa çıkardım",
        "Daha sade ve sistem destekli bir hedef süreç önerdim",
        "Hedef yapının UAT'ta doğrulanabilir kalmasını gözettim",
      ],
      layers: [
        { title: "Rol Katmanı", desc: "Her adımın sahibinin kim olduğu ve sorumluluğun ekipler arasında nerede el değiştirdiği" },
        { title: "Adım Katmanı", desc: "Süreci ilerleten somut aksiyonlar ile pasif bekleme dönemleri" },
        { title: "Karar Katmanı", desc: "Sürecin yönünü değiştiren onay, red ve yönlendirme kararları" },
        { title: "Devir Katmanı", desc: "İşin ekipler arasında devredildiği ve bilgi kaybının en sık yaşandığı noktalar" },
        { title: "Statü Görünürlüğü Katmanı", desc: "Mevcut durumun nasıl iletildiği ve kimler tarafından gözlemlenebildiği" },
      ],
      businessRules: [
        { id: "PR-01", rule: "Her talep, tek bir yapılandırılmış giriş noktasından sürece dahil olmalıdır", rationale: "Paralel giriş kanallarını ortadan kaldırmak ve baştan itibaren izlenebilirlik sağlamak" },
        { id: "PR-02", rule: "Zorunlu talep alanları, talep ilerlemeden önce doğrulanmalıdır", rationale: "Eksik verinin sürece taşınıp sonradan yeniden girilmesini önlemek" },
        { id: "PR-03", rule: "Onaylar e-posta yerine sistem üzerinden yönlendirilmelidir", rationale: "Onay süresini ölçülebilir kılmak ve gayri resmi iletişim boşluklarını engellemek" },
        { id: "PR-04", rule: "Tedarikçi uygunluk kontrolleri talep kaydı üzerinde kayıt altına alınmalıdır", rationale: "Satın alma ekibinin işinin tekrarlanmasını veya ekipler arasında kaybolmasını önlemek" },
        { id: "PR-05", rule: "Satın alma kaydı (PO) aynı talep kaydından üretilmelidir", rationale: "Mükerrer veri girişini ve sonradan oluşacak mutabakat yükünü ortadan kaldırmak" },
        { id: "PR-06", rule: "Süreç statüsü merkezi olarak güncellenmeli ve ilgili tüm rollere görünür olmalıdır", rationale: "Gayri resmi statü paylaşımının yerini tek bir güvenilir kaynakla değiştirmek" },
      ],
      flowTitle: "Önerilen TO-BE Süreç Akışı",
      flowSteps: [
        "Talep eden, zorunlu alanları doğrulanmış şekilde talebi sistemde oluşturur",
        "Yönetici, onay görevini platform üzerinden alır",
        "Onayın ardından tedarikçi uygunluk kontrolü adımı tetiklenir",
        "Satın alma ekibi, tedarikçi onayını aynı talep kaydı üzerinde işler",
        "Satın alma kaydı (PO) aynı akıştan, yeniden veri girişi olmadan üretilir",
        "Statü, her geçişte merkezi olarak güncellenir",
        "Finans, son sistem durumuna göre kaydı tamamlar",
      ],
      operationalQuestions: [
        "Bu talep şu anda süreçte hangi adımda?",
        "Sonraki sorumlu rol kim?",
        "Onay tamamlandı mı?",
        "Tedarikçi uygunluğu doğrulandı mı?",
        "Beklenenden uzun süredir bekleyen bir adım var mı?",
        "Bu talepte en çok hangi adım gecikmeye yol açtı?",
      ],
      screenSections: [
        "Talep Özeti",
        "Mevcut Adım ve Sahibi",
        "Onay Durumu",
        "Tedarikçi Uygunluk Durumu",
        "Satın Alma Kaydı (PO) Referansı",
        "Finans Kayıt Durumu",
        "Aktivite ve Statü Geçmişi",
      ],
      testApproach:
        "Test, yeniden tasarlanan akışın her devir noktasında doğru davrandığını doğrulamaya odaklanıyor: talep oluştururken zorunlu alan kontrolü, onay yönlendirmesi, tedarikçi uygunluk adımı, PO'nun aynı kayıttan üretilmesi, her geçişte merkezi statü güncellemesi ve finans kaydının sistem durumuyla tutarlılığı.",
      uatApproach:
        "UAT'ta her rolün yeni süreci eskisinden daha net deneyimleyip deneyimlemediği doğrulanıyor: talebin hangi adımda olduğunu görebiliyor mu, kendi görevini doğru zamanda alıyor mu, daha önce girilmiş bilgiyi yeniden girmek zorunda kalıyor mu ve uçtan uca statü ekipler arasında tutarlı kalıyor mu.",
      uatChecklist: [
        "Talep eden, talebin mevcut durumunu başka bir ekibe sormadan görebiliyor mu?",
        "Yönetici, onay görevini zamanında platform üzerinden alıyor mu?",
        "Tedarikçi uygunluk adımı yalnızca onaydan sonra görünür hale geliyor mu?",
        "Satın alma kaydı (PO), talep verisi yeniden girilmeden üretiliyor mu?",
        "Statü, her geçişten sonra merkezi olarak güncelleniyor mu?",
        "Finans, kaydı yalnızca sistem durumuna bakarak tamamlayabiliyor mu?",
        "Ekipler arası devirler aktivite geçmişinde görünüyor mu?",
        "Süreç, AS-IS sürümüne göre ölçülebilir biçimde daha kısa ve net mi?",
      ],
      deliverables: [
        "AS-IS süreç haritası",
        "TO-BE süreç haritası",
        "Sorun noktası matrisi",
        "İyileştirme alanları listesi",
        "Rol ve sorumluluk görünümü",
        "İş kuralları ve karar noktaları",
        "Ekran ve alan görünürlüğü önerileri",
        "Örnek UAT odak noktaları",
      ],
      expectedOutput: [
        "Daha kısa süreç çevrim süresi",
        "Ekipler arası daha az manuel takip",
        "Daha düşük hata ve atlama riski",
        "Roller arası daha net statü görünürlüğü",
        "Ekipler arası daha açık sorumluluk dağılımı",
        "Daha kolay test ve UAT doğrulaması",
        "Daha sürdürülebilir bir operasyonel yapı",
      ],
      demonstrates: [
        "Mevcut durum ile hedef durum arasında net bir karşılaştırma yapabilme",
        "Süreçleri yalnızca tarif etmek yerine iyileştirme bakışıyla ele alma",
        "Operasyonel görünürlük ve karar netliği üretebilme",
        "Analizi görsel ve yapısal çıktılara dönüştürebilme",
        "İş ihtiyacını ve sistem davranışını aynı çerçevede okuyabilme",
      ],
      testScenarios: [
        { id: "PR-TS-01", scenario: "Talep, zorunlu bir alan doldurulmadan gönderilir", expected: "Sistem gönderimi engeller ve eksik alanı gösterir" },
        { id: "PR-TS-02", scenario: "Yönetici onayı platform üzerinden verilir", expected: "Süreç, tedarikçi uygunluk adımına otomatik olarak ilerler" },
        { id: "PR-TS-03", scenario: "Tedarikçi uygunluğu sistemde doğrulanır", expected: "Doğrulama, aynı talep üzerine yeniden veri girişi olmadan kaydedilir" },
        { id: "PR-TS-04", scenario: "Onaylı talepten satın alma kaydı (PO) üretilir", expected: "PO, mükerrer veri girişi olmadan ilgili talebe bağlanır" },
        { id: "PR-TS-05", scenario: "Bir talep, bir adımda beklenenden uzun süre bekler", expected: "Statü görünür kalır ve gecikmeli adım kolayca tespit edilir" },
        { id: "PR-TS-06", scenario: "Finans, PO üretiminden sonra talebi açar", expected: "Son kayıt, merkezi sistem durumunu yansıtır" },
      ],
      processMap: {
        caption: "Örnek: Satın Alma Talebi → Satın Alma Kaydı (PO) Süreci",
        asIs: {
          title: "AS-IS (Mevcut Durum)",
          notesTitle: "Sorun Noktaları",
          notes: [
            "E-posta üzerinden çok sayıda devir",
            "Manuel kontroller ve takipler",
            "Onay iletişiminde gecikmeler",
            "Tekrar eden veri girişi",
            "Sınırlı statü görünürlüğü",
          ],
          lanes: [
            { role: "Talep Eden", icon: "requester", steps: ["Talebi manuel oluştur", "E-posta ile gönder"] },
            { role: "Yönetici", icon: "manager", steps: ["Talebi incele", "E-posta ile onayla"] },
            { role: "Satın Alma", icon: "procurement", steps: ["Tedarikçi uygunluğunu manuel kontrol et", "PO'yu ayrı kayıt olarak oluştur", "Tedarikçiyle iletişime geç", "Onayı al"] },
            { role: "Finans", icon: "finance", steps: ["PO'yu sonradan sisteme kaydet"] },
          ],
        },
        toBe: {
          title: "TO-BE (Hedef Durum)",
          notesTitle: "İyileştirmeler",
          notes: [
            "Uçtan uca süreç görünürlüğü",
            "Daha kısa çevrim süresi",
            "Daha az tekrar eden veri girişi",
            "Her adımda daha net sorumluluk",
            "Daha kolay takip ve raporlama",
            "Daha güvenilir alt akış yürütümü",
          ],
          lanes: [
            { role: "Talep Eden", icon: "requester", steps: ["Talebi sistemde oluştur", "Zorunlu alanlar doğrulanır"] },
            { role: "Yönetici", icon: "manager", steps: ["Onay görevini al", "Platform üzerinden onayla"] },
            { role: "Satın Alma", icon: "procurement", steps: ["Tedarikçi uygunluğu kontrol edilir", "PO aynı akıştan üretilir", "Onay kayıt altına alınır"] },
            { role: "Finans", icon: "finance", steps: ["Sonuç merkezi durumdan kaydedilir"] },
          ],
        },
      },
    },
  },
];
