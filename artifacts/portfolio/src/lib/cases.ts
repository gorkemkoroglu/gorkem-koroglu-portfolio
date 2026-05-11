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
  businessProblem: string;
  analysisGoal: string;
  scope: string[];
  currentState: string;
  keyIssues: string[];
  analysisApproach: string;
  layers: { title: string; desc: string }[];
  errorCategories: { title: string; desc: string }[];
  businessRules: BusinessRule[];
  flowSteps: string[];
  operationalVisibility: string;
  screenFields: string[];
  testApproach: string;
  uatApproach: string;
  uatChecklist: string[];
  deliverables: string[];
  expectedOutput: string[];
  demonstrates: string[];
}

export interface Case {
  id: string;
  en: CaseContent;
  tr: CaseContent;
}

export const cases: Case[] = [
  {
    id: "payment-error-analysis",
    en: {
      title: "Separating Error Causes in International Payment Processes and Improving Operational Visibility",
      summary:
        "In international payment environments, failures from different root causes often surface with the same visible symptom. This case outlines an analytical approach to separating error categories, making operational visibility actionable, and supporting delivery with business rules, a flow model, and a UAT framework.",
      tags: ["Root Cause Analysis", "API Integration", "Data Validation", "UAT", "Core Banking", "Process Design"],
      businessProblem:
        "In international payment environments, failures often surface with the same visible symptom — regardless of their actual root cause. Missing data, business rule violations, integration response failures, and process routing errors all collapse into a single 'transaction failed' status. This makes root cause identification difficult, slows down operational response, and reduces the quality of error tracking and resolution.",
      analysisGoal:
        "To separate failed transactions into meaningful error categories; to clarify the system behavior and resolution path for each category; to design an operational visibility model that allows teams to understand what failed and what action is needed; and to support this structure with testable business rules, a flow model, and a UAT validation framework.",
      scope: [
        "Categorization of failed transactions across international payment flows",
        "Separation of error events by data, business rule, integration, and process layers",
        "Design of a meaningful error visibility model for operational teams",
        "Test scenarios and UAT validation framework",
      ],
      currentState:
        "In the current structure, failed transactions are grouped under a single status that covers multiple distinct root causes. Operational teams cannot derive the error source, required action type, or retry eligibility from this view. SQL-based investigation of transaction records reveals that the same error code often covers events with fundamentally different root causes — events that should not be treated identically.",
      keyIssues: [
        "Errors from different sources are grouped under the same code or status",
        "Error messages remain at a technical level with no business meaning or action guidance",
        "The operation screen does not provide enough context for decision-making",
        "Retriable transactions and those requiring manual intervention are not clearly separated",
        "Retrospective querying for root cause analysis is slow and unreliable",
      ],
      analysisApproach:
        "Failed transaction records were queried via SQL. Error messages and status codes were clustered and grouped. Each group was analyzed by system layer — data, business rule, integration, process — and by intervention type — automatic retry, manual action, configuration update. Findings were then converted into a business rule framework, and the operational visibility model and test/UAT structure were built on this foundation.",
      layers: [
        {
          title: "Data Layer",
          desc: "Presence of required fields, format compliance, and value consistency in incoming payment requests",
        },
        {
          title: "Business Rule Layer",
          desc: "Currency compatibility, account type controls, transaction limits, and status eligibility checks",
        },
        {
          title: "Integration Layer",
          desc: "External system calls, response structure, timeout behavior, and error codes returned from downstream services",
        },
        {
          title: "Process / Status Layer",
          desc: "Status transitions within the transaction flow, routing logic, and exception handling paths",
        },
      ],
      errorCategories: [
        {
          title: "Data Error",
          desc: "Failures caused by missing, incorrectly formatted, or inconsistent field values in the payment request",
        },
        {
          title: "Business Rule Error",
          desc: "Rejected transactions caused by business configuration violations or rule conflicts",
        },
        {
          title: "Integration Error",
          desc: "Failures due to external system response issues, timeouts, or unexpected response structures",
        },
        {
          title: "Process / Status Error",
          desc: "Transactions triggered in an incorrect status, or failures caused by flow routing errors",
        },
      ],
      businessRules: [
        {
          id: "BR-01",
          rule: "All required payment fields must be present and complete",
          rationale: "Prevent failures caused by missing data at the request level",
        },
        {
          id: "BR-02",
          rule: "Currency and account type must be compatible",
          rationale: "Block invalid transaction combinations before processing",
        },
        {
          id: "BR-03",
          rule: "Integration calls must not be triggered before pre-checks pass",
          rationale: "Reduce unnecessary error risk in downstream system calls",
        },
        {
          id: "BR-04",
          rule: "When an error occurs, the main category and sub-reason must be separated",
          rationale: "Increase operational visibility and enable targeted response",
        },
        {
          id: "BR-05",
          rule: "Different error causes that produce the same visible symptom must be recorded separately",
          rationale: "Accelerate root cause analysis and prevent misclassification",
        },
        {
          id: "BR-06",
          rule: "Retriable transactions must be clearly separated from those requiring manual intervention",
          rationale: "Give operations teams a precise, actionable decision point",
        },
      ],
      flowSteps: [
        "Payment request is received",
        "Basic data validation is performed",
        "Business rule checks are executed",
        "If an error is found, the category is determined",
        "If no error, the integration call is made",
        "Response is evaluated",
        "Error is separated by type: technical / business rule / data / process",
        "Transaction status is updated",
        "Meaningful error information is shown on the operation screen",
        "Error record is stored in classified form for testing and monitoring",
      ],
      operationalVisibility:
        "A failed transaction should clearly show an operational team: the main error category (Data / Business Rule / Integration / Process), the sub-reason (e.g. 'required field missing', 'account type incompatible'), the required action type (retriable / requires manual review / requires configuration update), and where the failure occurred (internal system vs. external system).",
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
        "Independent test scenarios were designed for each error category. Tests cover different root cause scenarios that can produce the same visible symptom — and validate that each scenario is correctly classified into its own error category. Database records, API response behavior, and operation screen output are evaluated together.",
      uatApproach:
        "UAT is conducted with operational teams and covers the understandability of error category business meaning, sufficiency of the sub-reason for actionability, quality of category separation, and whether screen information genuinely facilitates decision-making.",
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
        "Business rule list (BR-01 → BR-06) with rationale for each",
        "Functional error separation flow diagram",
        "Sample test scenarios (TS-01 → TS-07)",
        "UAT validation checklist",
        "Operational screen information model proposal",
        "Technical requirement note for the development team",
      ],
      expectedOutput: [
        "Faster root cause analysis on failed transactions",
        "Operational teams able to take the correct action based on error type",
        "Reduction of time and resource waste by separating retriable transactions",
        "Improvement in error tracking and reporting quality",
        "Integration errors routed to the correct team, separated from business rule failures",
      ],
      demonstrates: [
        "Ability to build error classification structures in complex payment systems",
        "Bridging business requirements and technical reality in a structured, actionable way",
        "SQL-driven analysis and data validation capacity across environments",
        "Writing business rules at specification level with clear rationale",
        "Designing end-to-end test and UAT logic from scratch",
        "Integrating operational impact directly into the analysis framework",
        "Treating analysis not as describing a problem, but as making it usable for delivery",
      ],
    },
    tr: {
      title: "Uluslararası Ödeme Süreçlerinde Hata Nedenlerinin Ayrıştırılması ve Operasyonel Görünürlüğün Artırılması",
      summary:
        "Uluslararası ödeme ortamlarında farklı kökenlerden gelen hatalar çoğu zaman aynı yüzey semptomuyla görünür hale gelir. Bu vaka; hata kategorilerini ayrıştırmaya, operasyonel görünürlüğü aksiyon alınabilir hale getirmeye ve tüm yapıyı iş kuralları, akış modeli ve UAT çerçevesiyle desteklemeye yönelik analitik bir yaklaşımı ortaya koyuyor.",
      tags: ["Kök Neden Analizi", "API Entegrasyon", "Veri Doğrulama", "UAT", "Çekirdek Bankacılık", "Süreç Tasarımı"],
      businessProblem:
        "Uluslararası ödeme işlemlerinde karşılaşılan başarısızlıklar, farklı kökenlerden gelmesine rağmen operasyon tarafında çoğunlukla aynı yüzey semptomuyla görünür hale gelir. Eksik veri, iş kuralı ihlali, entegrasyon yanıt hatası ya da hatalı süreç akışı gibi birbirinden tamamen farklı kaynaklar, tek bir 'işlem başarısız' statüsüne indirgenir. Bu durum kök neden analizini zorlaştırmakta, operasyonel aksiyon sürecini yavaşlatmakta ve hata takibi ile çözüm kalitesini düşürmektedir.",
      analysisGoal:
        "Başarısız işlemlerin hata kaynaklarını anlamlı kategorilere ayırmak; her kategorinin sistem davranışını ve çözüm yolunu netleştirmek; operasyon ekibinin hata nedenini ve aksiyon tipini kolayca anlayabileceği bir görünürlük modeli önermek; ve bu yapıyı test edilebilir iş kuralları, akış modeli ve UAT doğrulama çerçevesiyle desteklemek.",
      scope: [
        "Uluslararası ödeme akışlarında başarısız işlemlerin kategorizasyonu",
        "Hata kaynaklı olayların veri, iş kuralı, entegrasyon ve süreç katmanlarına göre ayrıştırılması",
        "Operasyon ekranı için anlamlı hata görünürlük modelinin tasarımı",
        "Test senaryoları ve UAT doğrulama çerçevesi",
      ],
      currentState:
        "Mevcut yapıda başarısız işlemler, birden fazla farklı nedeni kapsayan tek bir statü altında toplanmaktadır. Operasyon ekipleri bu yapıdan hatanın kaynağını, aksiyon alınabilirliğini ya da işlemin yeniden deneme uygunluğunu net şekilde çıkaramamaktadır. SQL sorguları üzerinden yapılan inceleme; aynı hata kodu altında anlam olarak birbirinden kopuk, kök nedeni farklı ve aynı şekilde ele alınmaması gereken çok sayıda oluşumun bir arada yer aldığını ortaya koymaktadır.",
      keyIssues: [
        "Farklı kökenli hatalar aynı hata kodu veya statü altında gruplanıyor",
        "Hata mesajları teknik seviyede kalıyor; iş anlamı ve aksiyon yönlendirmesi içermiyor",
        "Operasyon ekranı karar vermek için yeterli bağlam sunmuyor",
        "Tekrar denenebilir ve manuel müdahale gerektiren durumlar net biçimde ayrışmıyor",
        "Kök neden analizi için geriye dönük sorgulama yavaş ve güvenilmez kalıyor",
      ],
      analysisApproach:
        "Mevcut başarısız işlem kayıtları SQL üzerinden sorgulandı. Hata mesajları ve statü kodları kümelenerek gruplara ayrıldı. Her grubun sistem katmanı — veri, iş kuralı, entegrasyon, süreç — ve müdahale tipi — otomatik yeniden deneme, manuel aksiyon, konfigürasyon güncelleme — açısından analizi yapıldı. Elde edilen bulgular iş kuralı çerçevesine dönüştürüldü ve operasyonel görünürlük modeli ile test/UAT yapısı bu temelde oluşturuldu.",
      layers: [
        {
          title: "Veri Katmanı",
          desc: "Gelen ödeme talebindeki zorunlu alan varlığı, format uyumu ve değer tutarlılığı",
        },
        {
          title: "İş Kuralı Katmanı",
          desc: "Para birimi uyumu, hesap tipi kontrolü, işlem limiti ve statü uygunluğu kontrolleri",
        },
        {
          title: "Entegrasyon Katmanı",
          desc: "Dış sistem çağrısı, response yapısı, timeout davranışı ve downstream servislerden dönen hata kodları",
        },
        {
          title: "Süreç / Statü Katmanı",
          desc: "İşlem akışı içindeki statü geçişleri, yönlendirme mantığı ve istisna durumlarının ele alınması",
        },
      ],
      errorCategories: [
        {
          title: "Veri Hatası",
          desc: "Ödeme talebindeki eksik, hatalı formatlı veya tutarsız alan değerlerinden kaynaklanan başarısızlıklar",
        },
        {
          title: "İş Kuralı Hatası",
          desc: "İş konfigürasyonu ihlali veya kural çakışmasından kaynaklanan reddedilen işlemler",
        },
        {
          title: "Entegrasyon Hatası",
          desc: "Dış sistem yanıt sorunları, timeout ya da beklenmedik response yapısından kaynaklanan başarısızlıklar",
        },
        {
          title: "Süreç / Statü Hatası",
          desc: "Yanlış statüde tetiklenen işlemler veya akış yönlendirme hatasından kaynaklanan başarısızlıklar",
        },
      ],
      businessRules: [
        {
          id: "BR-01",
          rule: "Zorunlu ödeme alanları eksiksiz olmalıdır",
          rationale: "Eksik veri kaynaklı başarısızlıkların talep aşamasında önlenmesi",
        },
        {
          id: "BR-02",
          rule: "Para birimi ve hesap tipi uyumlu olmalıdır",
          rationale: "Geçersiz işlem kombinasyonlarının işleme alınmadan engellenmesi",
        },
        {
          id: "BR-03",
          rule: "Ön kontroller geçilmeden entegrasyon çağrısı yapılmamalıdır",
          rationale: "Downstream sistem çağrılarında gereksiz hata riskini azaltmak",
        },
        {
          id: "BR-04",
          rule: "Hata oluştuğunda ana kategori ve alt neden ayrıştırılmalıdır",
          rationale: "Operasyonel görünürlüğü artırmak ve hedefe yönelik aksiyon sağlamak",
        },
        {
          id: "BR-05",
          rule: "Aynı görünüme yol açan farklı hata nedenleri ayrı kaydedilmelidir",
          rationale: "Kök neden analizini hızlandırmak ve yanlış sınıflandırmayı önlemek",
        },
        {
          id: "BR-06",
          rule: "Tekrar denenebilir işlemler ile manuel müdahale gerekenler ayrılmalıdır",
          rationale: "Operasyon ekibine kesin ve aksiyon alınabilir bir karar noktası sunmak",
        },
      ],
      flowSteps: [
        "Ödeme talebi alınır",
        "Temel veri doğrulaması yapılır",
        "İş kuralı kontrolleri çalıştırılır",
        "Hata varsa kategori belirlenir",
        "Hata yoksa entegrasyon çağrısı yapılır",
        "Response değerlendirilir",
        "Teknik / iş kuralı / veri / süreç bazlı ayrıştırma yapılır",
        "İşlem statüsü güncellenir",
        "Operasyon ekranında anlamlı hata bilgisi gösterilir",
        "Test ve izleme için hata kaydı sınıflandırılmış şekilde saklanır",
      ],
      operationalVisibility:
        "Başarısız bir işlem, operasyon ekibine şunları açıkça göstermeli: Ana hata kategorisi (Veri / İş Kuralı / Entegrasyon / Süreç), alt hata nedeni (örn. 'zorunlu alan eksik', 'hesap tipi uyumsuz'), işlem aksiyon tipi (yeniden deneye uygun / manuel inceleme gerekli / konfigürasyon güncelleme gerekli) ve hatanın oluştuğu katman (sistem içi mi, dış sistem mi?).",
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
        "Her hata kategorisi için bağımsız test senaryoları tasarlandı. Testler, aynı semptomu üretebilecek farklı kök neden senaryolarını kapsamakta; her senaryonun farklı hata kategorisinde doğru ayrıştığı doğrulanmaktadır. Veritabanı kayıtları, API response davranışı ve operasyon ekranı çıktısı birlikte değerlendirilmektedir.",
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
        "Analizi yalnızca 'tarif etmek' değil, 'kullanılabilir hale getirmek' olarak ele almak",
      ],
    },
  },
];

export const testScenariosEn = [
  { id: "TS-01", scenario: "Required field is sent missing", expected: "Error is classified under the Data category" },
  { id: "TS-02", scenario: "Field format is invalid", expected: "Format error is clearly visible in the error record" },
  { id: "TS-03", scenario: "Transaction violates a business rule", expected: "Business rule error is generated and categorized" },
  { id: "TS-04", scenario: "Integration response time is exceeded", expected: "Recorded under the Timeout category" },
  { id: "TS-05", scenario: "Response structure differs from expected", expected: "Separated as an integration error" },
  { id: "TS-06", scenario: "Transaction is triggered in wrong status", expected: "Process/status error becomes visible" },
  { id: "TS-07", scenario: "Two different root causes producing the same symptom are triggered", expected: "Both errors are tracked in separate categories" },
];

export const testScenariosTr = [
  { id: "TS-01", scenario: "Zorunlu alan eksik gönderilir", expected: "Hata veri kategorisinde sınıflanır" },
  { id: "TS-02", scenario: "Alan formatı geçersizdir", expected: "Format hatası hata kaydında açık şekilde görünür" },
  { id: "TS-03", scenario: "İş kuralına aykırı işlem oluşturulur", expected: "İş kuralı kaynaklı hata üretilir ve kategorize edilir" },
  { id: "TS-04", scenario: "Entegrasyon response süresi aşılır", expected: "Timeout kategorisiyle kaydedilir" },
  { id: "TS-05", scenario: "Response yapısı beklenenden farklıdır", expected: "Entegrasyon kaynaklı hata olarak ayrışır" },
  { id: "TS-06", scenario: "Yanlış statüde işlem tetiklenir", expected: "Süreç/statü kaynaklı hata görünür" },
  { id: "TS-07", scenario: "Aynı semptoma yol açan iki farklı neden çalıştırılır", expected: "İki hata ayrı kategoride izlenir" },
];
