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
];
