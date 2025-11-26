export interface ServiceTranslations {
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  fullDescription: { en: string; ar: string }
  howItWorks: {
    title: { en: string; ar: string }
    content: { en: string; ar: string }
    points: Array<{
      title: { en: string; ar: string }
      description: { en: string; ar: string }
    }>
  }
  addingValue: {
    title: { en: string; ar: string }
    content: { en: string; ar: string }
    benefits: Array<{ en: string; ar: string }>
  }
  process: {
    title: { en: string; ar: string }
    content: { en: string; ar: string }
    steps: Array<{
      title: { en: string; ar: string }
      description: { en: string; ar: string }
    }>
  }
  closingStatement: { en: string; ar: string }
}

export const servicesTranslations: Record<string, ServiceTranslations> = {
  'identity-access-management': {
    title: { en: 'Identity & Access Management (IAM)', ar: 'إدارة الهوية والوصول' },
    description: { en: "In today's digital landscape, securing access to your critical systems and data is more important than ever. Our IAM solutions provide comprehensive identity governance and access control.", ar: 'في المشهد الرقمي اليوم، أصبح تأمين الوصول إلى أنظمتك وبياناتك الحيوية أكثر أهمية من أي وقت مضى. توفر حلولنا حوكمة شاملة للهوية والتحكم في الوصول.' },
    fullDescription: { en: "Our Identity & Access Management (IAM) services help businesses control who can access what, ensuring the right people have the right access at the right time. With a comprehensive IAM solution, you can effectively manage user identities, secure data, and enhance compliance across your entire organization.\n\nAt New Way, we offer a suite of IAM services, including Privilege Access Management (PAM), Multi-Factor Authentication (MFA), Single Sign-On (SSO), and Log Management. These services work together to provide a cohesive approach to identity security, reducing risk while improving productivity and user experience.", ar: 'تساعد خدمات إدارة الهوية والوصول الخاصة بنا الشركات على التحكم في من يمكنه الوصول إلى ماذا، مما يضمن حصول الأشخاص المناسبين على الوصول المناسب في الوقت المناسب. باستخدام حل شامل، يمكنك إدارة هويات المستخدمين بشكل فعال وتأمين البيانات وتعزيز الامتثال عبر مؤسستك بأكملها.\n\nفي New Way، نقدم مجموعة من الخدمات، بما في ذلك إدارة الوصول المميز، والمصادقة متعددة العوامل، وتسجيل الدخول الموحد، وإدارة السجلات. تعمل هذه الخدمات معًا لتوفير نهج متماسك لأمن الهوية، مما يقلل من المخاطر مع تحسين الإنتاجية وتجربة المستخدم.' },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { en: "Our IAM solution integrates with your existing infrastructure, providing a centralized way to manage users and their access. We start by assessing your current environment and understanding your needs. Then, we design a tailored IAM strategy that includes:", ar: 'يتكامل حلنا مع البنية التحتية الحالية لديك، مما يوفر طريقة مركزية لإدارة المستخدمين ووصولهم. نبدأ بتقييم بيئتك الحالية وفهم احتياجاتك. ثم نصمم استراتيجية مخصصة تتضمن:' },
      points: [
        { title: { en: 'IAM', ar: 'إدارة الهوية والوصول' }, description: { en: 'We ensure that users are properly authenticated and authorized based on their roles and responsibilities.', ar: 'نضمن مصادقة المستخدمين وتفويضهم بشكل صحيح بناءً على أدوارهم ومسؤولياتهم.' } },
        { title: { en: 'PAM', ar: 'إدارة الوصول المميز' }, description: { en: 'We secure access to sensitive systems by controlling and monitoring privileged accounts.', ar: 'نؤمن الوصول إلى الأنظمة الحساسة من خلال التحكم في الحسابات المميزة ومراقبتها.' } },
        { title: { en: 'MFA', ar: 'المصادقة متعددة العوامل' }, description: { en: 'We add an extra layer of security by requiring multiple forms of verification before granting access.', ar: 'نضيف طبقة إضافية من الأمان من خلال طلب أشكال متعددة من التحقق قبل منح الوصول.' } },
        { title: { en: 'SSO', ar: 'تسجيل الدخول الموحد' }, description: { en: 'We simplify the login process by enabling users to access multiple applications with just one set of credentials.', ar: 'نبسط عملية تسجيل الدخول من خلال تمكين المستخدمين من الوصول إلى تطبيقات متعددة بمجموعة واحدة فقط من بيانات الاعتماد.' } },
        { title: { en: 'Log Management', ar: 'إدارة السجلات' }, description: { en: 'We keep detailed records of access events, which help with compliance and troubleshooting.', ar: 'نحتفظ بسجلات مفصلة لأحداث الوصول، والتي تساعد في الامتثال واستكشاف الأخطاء وإصلاحها.' } }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { en: "Implementing an IAM system isn't just about securing access; it's about enhancing the overall efficiency and security posture of your business. With New Way's IAM solutions, you can:", ar: 'تنفيذ نظام إدارة الهوية والوصول ليس فقط حول تأمين الوصول؛ بل يتعلق بتعزيز الكفاءة الإجمالية والوضع الأمني لعملك. باستخدام حلولنا، يمكنك:' },
      benefits: [
        { en: 'Improve compliance with regulations and security standards', ar: 'تحسين الامتثال للوائح ومعايير الأمان' },
        { en: 'Reduce the risk of unauthorized access and data breaches', ar: 'تقليل مخاطر الوصول غير المصرح به وانتهاكات البيانات' },
        { en: 'Streamline the user experience with Single Sign-On', ar: 'تبسيط تجربة المستخدم باستخدام تسجيل الدخول الموحد' },
        { en: 'Ensure continuous monitoring of user activities with log management', ar: 'ضمان المراقبة المستمرة لأنشطة المستخدم من خلال إدارة السجلات' },
        { en: 'Simplify access controls for employees, contractors, and partners', ar: 'تبسيط ضوابط الوصول للموظفين والمقاولين والشركاء' }
      ]
    },
    process: {
      title: { en: 'Process', ar: 'العملية' },
      content: { en: 'Our IAM service follows a clear, systematic process to ensure everything is set up correctly and aligned with your security goals:', ar: 'تتبع خدمتنا عملية واضحة ومنهجية لضمان إعداد كل شيء بشكل صحيح ومتوافق مع أهدافك الأمنية:' },
      steps: [
        { title: { en: 'Initial Consultation & Assessment', ar: 'الاستشارة والتقييم الأولي' }, description: { en: 'We begin by understanding your organization\'s needs and current IT environment.', ar: 'نبدأ بفهم احتياجات مؤسستك وبيئة تكنولوجيا المعلومات الحالية.' } },
        { title: { en: 'Tailored Strategy Design', ar: 'تصميم استراتيجية مخصصة' }, description: { en: 'We craft a strategy that aligns with your specific requirements and objectives.', ar: 'نصمم استراتيجية تتماشى مع متطلباتك وأهدافك المحددة.' } },
        { title: { en: 'Implementation & Configuration', ar: 'التنفيذ والتكوين' }, description: { en: 'Our team sets up the IAM system, integrating it with your existing infrastructure and security tools.', ar: 'يقوم فريقنا بإعداد النظام، ودمجه مع البنية التحتية وأدوات الأمان الحالية لديك.' } },
        { title: { en: 'Testing & Validation', ar: 'الاختبار والتحقق' }, description: { en: 'We thoroughly test the solution to ensure that everything is working as expected and that your security policies are in place.', ar: 'نختبر الحل بدقة للتأكد من أن كل شيء يعمل كما هو متوقع وأن سياسات الأمان الخاصة بك موجودة.' } },
        { title: { en: 'Training & Knowledge Transfer', ar: 'التدريب ونقل المعرفة' }, description: { en: 'We provide hands-on training to your team so they can manage and maintain the system effectively.', ar: 'نقدم تدريبًا عمليًا لفريقك حتى يتمكنوا من إدارة النظام وصيانته بفعالية.' } },
        { title: { en: 'Ongoing Support & Monitoring', ar: 'الدعم والمراقبة المستمرة' }, description: { en: 'After implementation, we offer continuous support to ensure your IAM system is always running smoothly, including periodic health checks and troubleshooting as needed.', ar: 'بعد التنفيذ، نقدم دعمًا مستمرًا لضمان تشغيل نظامك بسلاسة دائمًا، بما في ذلك الفحوصات الصحية الدورية واستكشاف الأخطاء وإصلاحها حسب الحاجة.' } }
      ]
    },
    closingStatement: { en: "At New Way, we aim to make securing your digital infrastructure simple and effective. If you're looking for a solution that helps protect your business while streamlining the access process, we're here to help. Reach out today to learn how we can make your IAM system work better for you.", ar: 'في New Way، نهدف إلى جعل تأمين البنية التحتية الرقمية الخاصة بك بسيطة وفعالة. إذا كنت تبحث عن حل يساعد في حماية عملك مع تبسيط عملية الوصول، فنحن هنا للمساعدة. تواصل معنا اليوم لمعرفة كيف يمكننا جعل نظامك يعمل بشكل أفضل لك.' }
  },
  'single-sign-on': {
    title: { en: 'Single Sign-On (SSO)', ar: 'تسجيل الدخول الموحد' },
    description: { en: 'Managing multiple passwords for different applications can be a hassle for users and a security risk for organizations. Our SSO solutions streamline authentication while enhancing security.', ar: 'إدارة كلمات مرور متعددة لتطبيقات مختلفة يمكن أن تكون مشكلة للمستخدمين وخطرًا أمنيًا للمؤسسات. تعمل حلولنا على تبسيط المصادقة مع تعزيز الأمان.' },
    fullDescription: { en: "Our Single Sign-On (SSO) solution eliminates the need for users to remember multiple passwords while significantly improving your organization's security posture. By providing a single authentication point, we make it easier for users to access all their applications while maintaining strict security controls.", ar: 'يلغي حل تسجيل الدخول الموحد الخاص بنا حاجة المستخدمين إلى تذكر كلمات مرور متعددة مع تحسين الوضع الأمني لمؤسستك بشكل كبير. من خلال توفير نقطة مصادقة واحدة، نسهل على المستخدمين الوصول إلى جميع تطبيقاتهم مع الحفاظ على ضوابط أمنية صارمة.' },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { en: 'SSO works by authenticating users once and then providing secure access to all connected applications without requiring additional logins:', ar: 'يعمل تسجيل الدخول الموحد من خلال مصادقة المستخدمين مرة واحدة ثم توفير وصول آمن إلى جميع التطبيقات المتصلة دون الحاجة إلى عمليات تسجيل دخول إضافية:' },
      points: [
        { title: { en: 'Centralized Authentication', ar: 'المصادقة المركزية' }, description: { en: 'Users log in once through a secure authentication portal.', ar: 'يسجل المستخدمون الدخول مرة واحدة من خلال بوابة مصادقة آمنة.' } },
        { title: { en: 'Token-Based Access', ar: 'الوصول القائم على الرموز' }, description: { en: 'After authentication, secure tokens are issued to grant access to applications.', ar: 'بعد المصادقة، يتم إصدار رموز آمنة لمنح الوصول إلى التطبيقات.' } },
        { title: { en: 'Protocol Support', ar: 'دعم البروتوكولات' }, description: { en: 'We support industry-standard protocols like SAML, OAuth 2.0, and OpenID Connect.', ar: 'ندعم البروتوكولات القياسية في الصناعة مثل SAML و OAuth 2.0 و OpenID Connect.' } },
        { title: { en: 'Seamless Integration', ar: 'التكامل السلس' }, description: { en: 'Integration with both cloud and on-premise applications.', ar: 'التكامل مع التطبيقات السحابية والمحلية.' } }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { en: 'SSO brings tangible benefits to both users and IT teams:', ar: 'يجلب SSO فوائد ملموسة لكل من المستخدمين وفرق تكنولوجيا المعلومات:' },
      benefits: [
        { en: 'Reduced password fatigue and help desk calls', ar: 'تقليل إرهاق كلمات المرور ومكالمات مكتب المساعدة' },
        { en: 'Improved user productivity with faster access', ar: 'تحسين إنتاجية المستخدم من خلال وصول أسرع' },
        { en: 'Enhanced security with centralized authentication', ar: 'تعزيز الأمان من خلال المصادقة المركزية' },
        { en: 'Better compliance with security policies', ar: 'امتثال أفضل لسياسات الأمان' },
        { en: 'Simplified user onboarding and offboarding', ar: 'تبسيط إضافة المستخدمين وإزالتهم' }
      ]
    },
    process: {
      title: { en: 'Implementation Process', ar: 'عملية التنفيذ' },
      content: { en: 'Our SSO implementation follows a proven methodology:', ar: 'يتبع تنفيذ SSO الخاص بنا منهجية مثبتة:' },
      steps: [
        { title: { en: 'Discovery & Planning', ar: 'الاكتشاف والتخطيط' }, description: { en: 'We assess your current application landscape and authentication needs.', ar: 'نقيم مشهد التطبيقات الحالي واحتياجات المصادقة لديك.' } },
        { title: { en: 'Solution Design', ar: 'تصميم الحل' }, description: { en: 'We design an SSO architecture that fits your infrastructure.', ar: 'نصمم بنية SSO تناسب البنية التحتية الخاصة بك.' } },
        { title: { en: 'Integration & Configuration', ar: 'التكامل والتكوين' }, description: { en: 'We integrate SSO with your applications and configure authentication policies.', ar: 'ندمج SSO مع تطبيقاتك ونكوّن سياسات المصادقة.' } },
        { title: { en: 'User Testing', ar: 'اختبار المستخدم' }, description: { en: 'We conduct thorough testing with real users to ensure smooth functionality.', ar: 'نجري اختبارًا شاملاً مع مستخدمين حقيقيين لضمان الأداء السلس.' } },
        { title: { en: 'Rollout & Training', ar: 'الإطلاق والتدريب' }, description: { en: 'We provide comprehensive training and support during rollout.', ar: 'نقدم تدريبًا ودعمًا شاملاً أثناء الإطلاق.' } },
        { title: { en: 'Continuous Support', ar: 'الدعم المستمر' }, description: { en: 'We offer ongoing maintenance and optimization of your SSO solution.', ar: 'نقدم صيانة وتحسين مستمر لحل SSO الخاص بك.' } }
      ]
    },
    closingStatement: { en: "Ready to simplify authentication and improve security? Contact New Way today to learn how our SSO solution can transform your user experience.", ar: 'هل أنت مستعد لتبسيط المصادقة وتحسين الأمان؟ اتصل بـ New Way اليوم لمعرفة كيف يمكن لحل SSO الخاص بنا تحويل تجربة المستخدم لديك.' }
  },
  'privilege-access-management': {
    title: { en: 'Privilege Access Management (PAM)', ar: 'إدارة الوصول المميز' },
    description: { en: "Securing access to sensitive systems and data is critical in today's cybersecurity landscape. Our PAM solutions protect privileged accounts and prevent unauthorized access to critical resources.", ar: 'يعد تأمين الوصول إلى الأنظمة والبيانات الحساسة أمرًا بالغ الأهمية في مشهد الأمن السيبراني اليوم. تحمي حلول PAM الخاصة بنا الحسابات المميزة وتمنع الوصول غير المصرح به إلى الموارد الحيوية.' },
    fullDescription: { en: "Privileged accounts are the keys to your kingdom. Our PAM solution ensures these critical accounts are secured, monitored, and audited. We help you control who has access to what, when, and why, reducing the risk of insider threats and external attacks.", ar: 'الحسابات المميزة هي مفاتيح مملكتك. يضمن حل PAM الخاص بنا تأمين هذه الحسابات الحيوية ومراقبتها وتدقيقها. نساعدك في التحكم في من لديه حق الوصول إلى ماذا ومتى ولماذا، مما يقلل من مخاطر التهديدات الداخلية والهجمات الخارجية.' },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { en: 'Our PAM solution provides comprehensive control over privileged access:', ar: 'يوفر حل PAM الخاص بنا تحكمًا شاملاً في الوصول المميز:' },
      points: [
        { title: { en: 'Account Discovery', ar: 'اكتشاف الحسابات' }, description: { en: 'We identify all privileged accounts across your infrastructure.', ar: 'نحدد جميع الحسابات المميزة عبر البنية التحتية الخاصة بك.' } },
        { title: { en: 'Secure Vault', ar: 'الخزنة الآمنة' }, description: { en: 'Privileged credentials are stored in an encrypted vault with strict access controls.', ar: 'يتم تخزين بيانات الاعتماد المميزة في خزنة مشفرة مع ضوابط وصول صارمة.' } },
        { title: { en: 'Access Workflow', ar: 'سير عمل الوصول' }, description: { en: 'Requests for privileged access go through approval workflows.', ar: 'تمر طلبات الوصول المميز عبر سير عمل الموافقة.' } },
        { title: { en: 'Session Recording', ar: 'تسجيل الجلسات' }, description: { en: 'All privileged sessions are recorded for audit and compliance.', ar: 'يتم تسجيل جميع الجلسات المميزة للتدقيق والامتثال.' } },
        { title: { en: 'Password Rotation', ar: 'تدوير كلمات المرور' }, description: { en: 'Automatic password rotation ensures credentials are always changing.', ar: 'يضمن التدوير التلقائي لكلمات المرور تغيير بيانات الاعتماد دائمًا.' } }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { en: 'PAM is essential for protecting your most critical assets:', ar: 'PAM ضروري لحماية أصولك الأكثر أهمية:' },
      benefits: [
        { en: 'Prevent unauthorized access to sensitive systems', ar: 'منع الوصول غير المصرح به إلى الأنظمة الحساسة' },
        { en: 'Meet regulatory compliance requirements', ar: 'تلبية متطلبات الامتثال التنظيمي' },
        { en: 'Reduce the risk of credential theft', ar: 'تقليل مخاطر سرقة بيانات الاعتماد' },
        { en: 'Gain complete visibility into privileged activities', ar: 'الحصول على رؤية كاملة للأنشطة المميزة' },
        { en: 'Respond quickly to security incidents', ar: 'الاستجابة بسرعة للحوادث الأمنية' }
      ]
    },
    process: {
      title: { en: 'Implementation Process', ar: 'عملية التنفيذ' },
      content: { en: 'We follow a structured approach to PAM implementation:', ar: 'نتبع نهجًا منظمًا لتنفيذ PAM:' },
      steps: [
        { title: { en: 'Privileged Account Discovery', ar: 'اكتشاف الحسابات المميزة' }, description: { en: 'We identify all privileged accounts in your environment.', ar: 'نحدد جميع الحسابات المميزة في بيئتك.' } },
        { title: { en: 'Risk Assessment', ar: 'تقييم المخاطر' }, description: { en: 'We evaluate the risk associated with each privileged account.', ar: 'نقيم المخاطر المرتبطة بكل حساب مميز.' } },
        { title: { en: 'Solution Deployment', ar: 'نشر الحل' }, description: { en: 'We deploy and configure the PAM solution.', ar: 'ننشر ونكوّن حل PAM.' } },
        { title: { en: 'Policy Configuration', ar: 'تكوين السياسات' }, description: { en: 'We set up access policies and approval workflows.', ar: 'نقوم بإعداد سياسات الوصول وسير عمل الموافقة.' } },
        { title: { en: 'Integration', ar: 'التكامل' }, description: { en: 'We integrate PAM with your existing security infrastructure.', ar: 'ندمج PAM مع البنية التحتية الأمنية الحالية لديك.' } },
        { title: { en: 'Training & Support', ar: 'التدريب والدعم' }, description: { en: 'We train your team and provide ongoing support.', ar: 'ندرب فريقك ونقدم الدعم المستمر.' } }
      ]
    },
    closingStatement: { en: "Protect your most critical assets with New Way's PAM solution. Contact us today to secure your privileged accounts.", ar: 'احمِ أصولك الأكثر أهمية باستخدام حل PAM من New Way. اتصل بنا اليوم لتأمين حساباتك المميزة.' }
  },
  'log-management': {
    title: { en: 'Log Management', ar: 'إدارة السجلات' },
    description: { en: "Managing logs is a critical aspect of any organization's cybersecurity and compliance strategy. Our log management solutions provide centralized collection, analysis, and retention of log data.", ar: 'تعد إدارة السجلات جانبًا حاسمًا من استراتيجية الأمن السيبراني والامتثال لأي مؤسسة. توفر حلول إدارة السجلات الخاصة بنا جمعًا وتحليلًا واحتفاظًا مركزيًا ببيانات السجل.' },
    fullDescription: { en: "Effective log management is crucial for security monitoring, troubleshooting, and compliance. Our solution provides a centralized platform for collecting, analyzing, and retaining log data from all your systems, making it easy to detect threats, investigate incidents, and meet regulatory requirements.", ar: 'تعد إدارة السجلات الفعالة أمرًا بالغ الأهمية لمراقبة الأمان واستكشاف الأخطاء وإصلاحها والامتثال. يوفر حلنا منصة مركزية لجمع وتحليل والاحتفاظ ببيانات السجل من جميع أنظمتك، مما يسهل اكتشاف التهديدات والتحقيق في الحوادث وتلبية المتطلبات التنظيمية.' },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { en: 'Our log management solution provides end-to-end log lifecycle management:', ar: 'يوفر حل إدارة السجلات الخاص بنا إدارة شاملة لدورة حياة السجل:' },
      points: [
        { title: { en: 'Collection', ar: 'الجمع' }, description: { en: 'We collect logs from all sources including servers, applications, and network devices.', ar: 'نجمع السجلات من جميع المصادر بما في ذلك الخوادم والتطبيقات وأجهزة الشبكة.' } },
        { title: { en: 'Normalization', ar: 'التطبيع' }, description: { en: 'Logs are normalized into a standard format for easier analysis.', ar: 'يتم تطبيع السجلات إلى تنسيق قياسي لتسهيل التحليل.' } },
        { title: { en: 'Analysis', ar: 'التحليل' }, description: { en: 'Real-time analysis identifies threats and anomalies.', ar: 'يحدد التحليل في الوقت الفعلي التهديدات والشذوذات.' } },
        { title: { en: 'Storage', ar: 'التخزين' }, description: { en: 'Logs are securely stored with appropriate retention policies.', ar: 'يتم تخزين السجلات بشكل آمن مع سياسات الاحتفاظ المناسبة.' } },
        { title: { en: 'Reporting', ar: 'إعداد التقارير' }, description: { en: 'Generate compliance reports and security dashboards.', ar: 'إنشاء تقارير الامتثال ولوحات معلومات الأمان.' } }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { en: 'Log management provides essential capabilities for security and operations:', ar: 'توفر إدارة السجلات قدرات أساسية للأمان والعمليات:' },
      benefits: [
        { en: 'Detect security threats in real-time', ar: 'اكتشاف التهديدات الأمنية في الوقت الفعلي' },
        { en: 'Meet compliance requirements for log retention', ar: 'تلبية متطلبات الامتثال للاحتفاظ بالسجلات' },
        { en: 'Accelerate incident investigation and response', ar: 'تسريع التحقيق في الحوادث والاستجابة لها' },
        { en: 'Gain operational insights from log data', ar: 'الحصول على رؤى تشغيلية من بيانات السجل' },
        { en: 'Reduce storage costs with intelligent retention', ar: 'تقليل تكاليف التخزين من خلال الاحتفاظ الذكي' }
      ]
    },
    process: {
      title: { en: 'Implementation Process', ar: 'عملية التنفيذ' },
      content: { en: 'Our log management implementation is straightforward:', ar: 'تنفيذ إدارة السجلات الخاص بنا واضح ومباشر:' },
      steps: [
        { title: { en: 'Source Identification', ar: 'تحديد المصادر' }, description: { en: 'We identify all log sources across your environment.', ar: 'نحدد جميع مصادر السجلات عبر بيئتك.' } },
        { title: { en: 'Collection Setup', ar: 'إعداد الجمع' }, description: { en: 'We configure log collection agents and forwarders.', ar: 'نكوّن وكلاء جمع السجلات والمُحوِّلات.' } },
        { title: { en: 'Parsing & Normalization', ar: 'التحليل والتطبيع' }, description: { en: 'We set up parsing rules for your specific log formats.', ar: 'نقوم بإعداد قواعد التحليل لتنسيقات السجل المحددة الخاصة بك.' } },
        { title: { en: 'Alert Configuration', ar: 'تكوين التنبيهات' }, description: { en: 'We configure alerts for security events and anomalies.', ar: 'نكوّن التنبيهات للأحداث الأمنية والشذوذات.' } },
        { title: { en: 'Dashboard Creation', ar: 'إنشاء لوحة المعلومات' }, description: { en: 'We create custom dashboards for monitoring and reporting.', ar: 'ننشئ لوحات معلومات مخصصة للمراقبة وإعداد التقارير.' } },
        { title: { en: 'Training & Handover', ar: 'التدريب والتسليم' }, description: { en: 'We train your team on using the log management platform.', ar: 'ندرب فريقك على استخدام منصة إدارة السجلات.' } }
      ]
    },
    closingStatement: { en: "Get complete visibility into your IT environment with New Way's log management solution. Contact us to get started.", ar: 'احصل على رؤية كاملة لبيئة تكنولوجيا المعلومات الخاصة بك باستخدام حل إدارة السجلات من New Way. اتصل بنا للبدء.' }
  },
  'multi-factor-authentication': {
    title: { en: 'Multi-Factor Authentication (MFA)', ar: 'المصادقة متعددة العوامل' },
    description: { en: "In today's digital world, passwords alone are no longer enough to secure sensitive data and systems. Our MFA solutions add an extra layer of security to protect against unauthorized access.", ar: 'في عالم اليوم الرقمي، لم تعد كلمات المرور وحدها كافية لتأمين البيانات والأنظمة الحساسة. تضيف حلول MFA الخاصة بنا طبقة إضافية من الأمان للحماية من الوصول غير المصرح به.' },
    fullDescription: { en: "Multi-Factor Authentication adds critical security layers beyond just passwords. Our MFA solution supports various authentication methods including mobile apps, SMS, email, and biometrics, providing flexibility while maintaining strong security.", ar: 'تضيف المصادقة متعددة العوامل طبقات أمان حاسمة تتجاوز كلمات المرور فقط. يدعم حل MFA الخاص بنا طرق مصادقة متنوعة (الإرسال النصية، البريد الإلكتروني، التطبيق)' },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { en: 'MFA requires users to provide multiple forms of verification:', ar: 'تتطلب MFA من المستخدمين تقديم أشكال متعددة من التحقق:' },
      points: [
        { title: { en: 'Primary Authentication', ar: 'المصادقة الأولية' }, description: { en: 'Users enter their username and password as the first factor.', ar: 'يدخل المستخدمون اسم المستخدم وكلمة المرور كعامل أول.' } },
        { title: { en: 'Secondary Verification', ar: 'التحقق الثانوي' }, description: { en: 'Users provide a second factor like a code from an app or SMS.', ar: 'يقدم المستخدمون عاملاً ثانيًا مثل رمز من تطبيق أو رسالة نصية قصيرة.' } },
        { title: { en: 'Risk Assessment', ar: 'تقييم المخاطر' }, description: { en: 'The system assesses the risk level and may require additional verification.', ar: 'يقيم النظام مستوى المخاطر وقد يتطلب تحققًا إضافيًا.' } },
        { title: { en: 'Access Grant', ar: 'منح الوصول' }, description: { en: 'Once all factors are verified, access is granted.', ar: 'بمجرد التحقق من جميع العوامل، يتم منح الوصول.' } }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { en: 'MFA significantly enhances your security posture:', ar: 'تعزز MFA بشكل كبير وضعك الأمني:' },
      benefits: [
        { en: 'Prevent unauthorized access even if passwords are compromised', ar: 'منع الوصول غير المصرح به حتى لو تم اختراق كلمات المرور' },
        { en: 'Meet compliance requirements for strong authentication', ar: 'تلبية متطلبات الامتثال للمصادقة القوية' },
        { en: 'Protect against phishing and credential stuffing attacks', ar: 'الحماية من هجمات التصيد وحشو بيانات الاعتماد' },
        { en: 'Provide flexible authentication options for users', ar: 'توفير خيارات مصادقة مرنة للمستخدمين' },
        { en: 'Gain visibility into authentication attempts', ar: 'الحصول على رؤية لمحاولات المصادقة' }
      ]
    },
    process: {
      title: { en: 'Implementation Process', ar: 'عملية التنفيذ' },
      content: { en: 'Our MFA implementation is user-friendly and secure:', ar: 'تنفيذ MFA الخاص بنا سهل الاستخدام وآمن:' },
      steps: [
        { title: { en: 'Requirements Analysis', ar: 'تحليل المتطلبات' }, description: { en: 'We understand your security requirements and user needs.', ar: 'نفهم متطلبات الأمان واحتياجات المستخدم لديك.' } },
        { title: { en: 'Solution Selection', ar: 'اختيار الحل' }, description: { en: 'We help you choose the right MFA methods for your organization.', ar: 'نساعدك في اختيار طرق MFA المناسبة لمؤسستك.' } },
        { title: { en: 'Integration', ar: 'التكامل' }, description: { en: 'We integrate MFA with your applications and systems.', ar: 'ندمج MFA مع تطبيقاتك وأنظمتك.' } },
        { title: { en: 'Policy Configuration', ar: 'تكوين السياسات' }, description: { en: 'We configure authentication policies and rules.', ar: 'نكوّن سياسات وقواعد المصادقة.' } },
        { title: { en: 'User Enrollment', ar: 'تسجيل المستخدمين' }, description: { en: 'We facilitate smooth user enrollment and registration.', ar: 'نسهل تسجيل المستخدمين والتسجيل السلس.' } },
        { title: { en: 'Ongoing Support', ar: 'الدعم المستمر' }, description: { en: 'We provide continuous support and optimization.', ar: 'نقدم الدعم والتحسين المستمر.' } }
      ]
    },
    closingStatement: { en: "Strengthen your security with New Way's MFA solution. Contact us today to add an extra layer of protection.", ar: 'عزز أمانك باستخدام حل MFA من New Way. اتصل بنا اليوم لإضافة طبقة إضافية من الحماية.' }
  },
  'cybersecurity': {
    title: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    description: { en: 'In an age where cyber threats are constantly evolving, ensuring the protection of your digital assets is more important than ever. Our comprehensive cybersecurity services safeguard your organization.', ar: 'في عصر تتطور فيه التهديدات السيبرانية باستمرار، أصبح ضمان حماية أصولك الرقمية أكثر أهمية من أي وقت مضى. تحمي خدمات الأمن السيبراني الشاملة الخاصة بنا مؤسستك.' },
    fullDescription: { en: "Our comprehensive cybersecurity services provide end-to-end protection for your organization. From threat detection to incident response, we help you build a robust security posture that adapts to evolving threats.", ar: 'توفر خدمات الأمن السيبراني الشاملة الخاصة بنا حماية شاملة لمؤسستك. من اكتشاف التهديدات إلى الاستجابة للحوادث، نساعدك في بناء وضع أمني قوي يتكيف مع التهديدات المتطورة.' },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { en: 'Our cybersecurity approach is multi-layered and proactive:', ar: 'نهج الأمن السيبراني الخاص بنا متعدد الطبقات واستباقي:' },
      points: [
        { title: { en: 'Continuous Monitoring', ar: 'المراقبة المستمرة' }, description: { en: '24/7 monitoring of your networks, systems, and applications for threats.', ar: 'مراقبة على مدار الساعة طوال أيام الأسبوع لشبكاتك وأنظمتك وتطبيقاتك للتهديدات.' } },
        { title: { en: 'Threat Intelligence', ar: 'معلومات التهديدات' }, description: { en: 'We leverage global threat intelligence to stay ahead of emerging threats.', ar: 'نستفيد من معلومات التهديدات العالمية للبقاء في صدارة التهديدات الناشئة.' } },
        { title: { en: 'Vulnerability Management', ar: 'إدارة الثغرات' }, description: { en: 'Regular assessments identify and remediate vulnerabilities.', ar: 'تحدد التقييمات المنتظمة الثغرات وتعالجها.' } },
        { title: { en: 'Incident Response', ar: 'الاستجابة للحوادث' }, description: { en: 'Rapid response to security incidents minimizes impact.', ar: 'الاستجابة السريعة للحوادث الأمنية تقلل من التأثير.' } },
        { title: { en: 'Security Training', ar: 'التدريب الأمني' }, description: { en: 'We educate your team to recognize and prevent security threats.', ar: 'ندرب فريقك على التعرف على التهديدات الأمنية ومنعها.' } }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { en: 'Our cybersecurity services provide comprehensive protection:', ar: 'توفر خدمات الأمن السيبراني الخاصة بنا حماية شاملة:' },
      benefits: [
        { en: 'Protect against advanced persistent threats', ar: 'الحماية من التهديدات المستمرة المتقدمة' },
        { en: 'Reduce the risk of data breaches and ransomware', ar: 'تقليل مخاطر انتهاكات البيانات وبرامج الفدية' },
        { en: 'Meet regulatory compliance requirements', ar: 'تلبية متطلبات الامتثال التنظيمي' },
        { en: 'Improve your overall security posture', ar: 'تحسين وضعك الأمني العام' },
        { en: 'Gain peace of mind with 24/7 monitoring', ar: 'احصل على راحة البال من خلال المراقبة على مدار الساعة' }
      ]
    },
    process: {
      title: { en: 'Implementation Process', ar: 'عملية التنفيذ' },
      content: { en: 'We follow a comprehensive approach to cybersecurity:', ar: 'نتبع نهجًا شاملاً للأمن السيبراني:' },
      steps: [
        { title: { en: 'Security Assessment', ar: 'التقييم الأمني' }, description: { en: 'We assess your current security posture and identify gaps.', ar: 'نقيم وضعك الأمني الحالي ونحدد الثغرات.' } },
        { title: { en: 'Strategy Development', ar: 'تطوير الاستراتيجية' }, description: { en: 'We develop a comprehensive security strategy.', ar: 'نطور استراتيجية أمنية شاملة.' } },
        { title: { en: 'Solution Implementation', ar: 'تنفيذ الحل' }, description: { en: 'We deploy security tools and technologies.', ar: 'ننشر أدوات وتقنيات الأمان.' } },
        { title: { en: 'Monitoring Setup', ar: 'إعداد المراقبة' }, description: { en: 'We set up 24/7 security monitoring and alerting.', ar: 'نقوم بإعداد المراقبة والتنبيه الأمني على مدار الساعة.' } },
        { title: { en: 'Team Training', ar: 'تدريب الفريق' }, description: { en: 'We train your team on security best practices.', ar: 'ندرب فريقك على أفضل ممارسات الأمان.' } },
        { title: { en: 'Continuous Improvement', ar: 'التحسين المستمر' }, description: { en: 'We continuously improve your security posture.', ar: 'نحسن وضعك الأمني بشكل مستمر.' } }
      ]
    },
    closingStatement: { en: "Protect your organization with New Way's comprehensive cybersecurity services. Contact us today for a security assessment.", ar: 'احمِ مؤسستك باستخدام خدمات الأمن السيبراني الشاملة من New Way. اتصل بنا اليوم للحصول على تقييم أمني.' }
  }
}
