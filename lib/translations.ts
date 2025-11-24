export type Language = 'en' | 'ar'

export interface TranslationEntry {
  en: string
  ar: string
}

export interface Translations {
  [key: string]: TranslationEntry
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.services': { en: 'Services', ar: 'الخدمات' },
  'nav.about': { en: 'About', ar: 'من نحن' },
  'nav.clients': { en: 'Clients', ar: 'العملاء' },
  'nav.partners': { en: 'Partners', ar: 'الشركاء' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },

  // Hero Section
  'hero.title.line1': { en: 'Secure Your Digital Future', ar: 'أمّن مستقبلك الرقمي' },
  'hero.title.line2': { en: 'With Advanced Cybersecurity Solutions', ar: 'بحلول الأمن السيبراني المتقدمة' },
  'hero.subtitle': { 
    en: 'Protect your enterprise with cutting-edge identity management, threat detection, and zero-trust security infrastructure designed for modern businesses.', 
    ar: 'احمِ مؤسستك بإدارة الهوية المتطورة، واكتشاف التهديدات، والبنية التحتية الأمنية ذات الثقة المعدومة المصممة للأعمال الحديثة.' 
  },
  'hero.cta.getStarted': { en: 'Get Started', ar: 'ابدأ الآن' },
  'hero.cta.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },

  // Services Section
  'services.title': { en: 'Our', ar: '' },
  'services.title.highlight': { en: 'Services', ar: 'خدماتنا' },
  'services.subtitle': { en: 'Comprehensive security solutions tailored to protect your business', ar: 'حلول أمنية شاملة مصممة لحماية عملك' },
  'services.learnMore': { en: 'Learn more', ar: 'اعرف المزيد' },

  // Service Cards
  'services.iam.title': { en: 'Identity & Access Management (IAM)', ar: 'إدارة الهوية والوصول (IAM)' },
  'services.iam.description': { 
    en: "In today's digital landscape, securing access to your critical systems and data is more important than ever", 
    ar: 'في المشهد الرقمي اليوم، أصبح تأمين الوصول إلى أنظمتك وبياناتك الحيوية أكثر أهمية من أي وقت مضى' 
  },
  'services.sso.title': { en: 'Single Sign-On (SSO)', ar: 'تسجيل الدخول الموحد (SSO)' },
  'services.sso.description': { 
    en: 'Managing multiple passwords for different applications can be a hassle for users and a security risk for organizations', 
    ar: 'إدارة كلمات مرور متعددة لتطبيقات مختلفة يمكن أن تكون مشكلة للمستخدمين وخطرًا أمنيًا للمؤسسات' 
  },
  'services.pam.title': { en: 'Privilege Access Management (PAM)', ar: 'إدارة الوصول المميز (PAM)' },
  'services.pam.description': { 
    en: "Securing access to sensitive systems and data is critical in today's cybersecurity landscape, and that's where Privilege Access Management (PAM) comes in", 
    ar: 'تأمين الوصول إلى الأنظمة والبيانات الحساسة أمر بالغ الأهمية في مشهد الأمن السيبراني اليوم، وهنا يأتي دور إدارة الوصول المميز (PAM)' 
  },
  'services.log.title': { en: 'Log Management', ar: 'إدارة السجلات' },
  'services.log.description': { 
    en: "Managing logs is a critical aspect of any organization's cybersecurity and compliance strategy", 
    ar: 'إدارة السجلات جانب حاسم من استراتيجية الأمن السيبراني والامتثال لأي مؤسسة' 
  },
  'services.mfa.title': { en: 'Multi-Factor Authentication (MFA)', ar: 'المصادقة متعددة العوامل (MFA)' },
  'services.mfa.description': { 
    en: "In today's digital world, passwords alone are no longer enough to secure sensitive data and systems", 
    ar: 'في العالم الرقمي اليوم، لم تعد كلمات المرور وحدها كافية لتأمين البيانات والأنظمة الحساسة' 
  },
  'services.cybersecurity.title': { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
  'services.cybersecurity.description': { 
    en: 'In an age where cyber threats are constantly evolving, ensuring the protection of your digital assets is more important than ever', 
    ar: 'في عصر تتطور فيه التهديدات السيبرانية باستمرار، أصبح ضمان حماية أصولك الرقمية أكثر أهمية من أي وقت مضى' 
  },

  // Work Process Section
  'process.title': { en: 'Our Work', ar: '' },
  'process.title.highlight': { en: 'Process', ar: 'عملية عملنا' },
  'process.subtitle': { en: 'A proven methodology to secure your enterprise infrastructure', ar: 'منهجية مثبتة لتأمين البنية التحتية لمؤسستك' },
  
  'process.assessment.phase': { en: '01', ar: '٠١' },
  'process.assessment.title': { en: 'Assessment', ar: 'التقييم' },
  'process.assessment.description': { 
    en: 'Analyze client needs and IT infrastructure to design tailored cybersecurity and IT solutions', 
    ar: 'تحليل احتياجات العميل والبنية التحتية لتكنولوجيا المعلومات لتصميم حلول أمن سيبراني وتكنولوجيا معلومات مخصصة' 
  },
  
  'process.implementation.phase': { en: '02', ar: '٠٢' },
  'process.implementation.title': { en: 'Implementation', ar: 'التنفيذ' },
  'process.implementation.description': { 
    en: 'Deploy identity management, multi-factor authentication, and security measures into the system', 
    ar: 'نشر إدارة الهوية والمصادقة متعددة العوامل والتدابير الأمنية في النظام' 
  },
  
  'process.monitoring.phase': { en: '03', ar: '٠٣' },
  'process.monitoring.title': { en: 'Monitoring & Support', ar: 'المراقبة والدعم' },
  'process.monitoring.description': { 
    en: 'Provide continuous system monitoring, log management, and 24/7 support to ensure security', 
    ar: 'توفير مراقبة مستمرة للنظام وإدارة السجلات ودعم على مدار الساعة لضمان الأمان' 
  },
  
  'process.cta.text': { en: 'Ready to strengthen your security posture?', ar: 'هل أنت مستعد لتعزيز وضعك الأمني؟' },
  'process.cta.button': { en: 'Start Your Assessment', ar: 'ابدأ تقييمك' },

  // Partners Section
  'partners.title': { en: 'Trusted by Industry Leaders', ar: 'موثوق به من قادة الصناعة' },
  'partners.subtitle': { en: 'Over 500 enterprises partner with us to drive innovation', ar: 'أكثر من 500 مؤسسة تتعاون معنا لدفع الابتكار' },

  // Clients Section
  'clients.title': { en: 'Our', ar: 'عملاؤنا' },
  'clients.title.highlight': { en: 'Clients', ar: '' },
  'clients.subtitle': { en: 'Trusted by leading enterprises worldwide', ar: 'موثوق به من قبل المؤسسات الرائدة في جميع أنحاء العالم' },

  // CTA Section
  'cta.title': { en: 'Ready to Transform Your Business?', ar: 'هل أنت مستعد لتحويل عملك؟' },
  'cta.subtitle': { 
    en: 'Join hundreds of enterprises that have already experienced the power of New Way Solutions.', 
    ar: 'انضم إلى مئات المؤسسات التي جربت بالفعل قوة حلول الطريق الجديد.' 
  },
  'cta.button.primary': { en: 'Start Your Journey', ar: 'ابدأ رحلتك' },
  'cta.button.secondary': { en: 'Schedule a Demo', ar: 'حدد موعد عرض توضيحي' },

  // Footer
  'footer.description': { en: 'Transforming enterprises with innovative solutions and unparalleled expertise.', ar: 'تحويل المؤسسات بحلول مبتكرة وخبرة لا مثيل لها.' },
  'footer.quickLinks': { en: 'Quick Links', ar: 'روابط سريعة' },
  'footer.services': { en: 'Services', ar: 'الخدمات' },
  'footer.contact': { en: 'Contact', ar: 'اتصل بنا' },
  'footer.followUs': { en: 'Follow Us', ar: 'تابعنا' },
  'footer.copyright': { en: '© 2025 New Way Solutions. All rights reserved.', ar: '© 2025 حلول الطريق الجديد. جميع الحقوق محفوظة.' },

  // Contact Page
  'contact.hero.title': { en: 'Get in Touch', ar: 'تواصل معنا' },
  'contact.hero.subtitle': { 
    en: "Have questions about our services? We're here to help. Reach out to us and let's discuss how we can secure your business.", 
    ar: 'هل لديك أسئلة حول خدماتنا؟ نحن هنا للمساعدة. تواصل معنا ودعنا نناقش كيف يمكننا تأمين عملك.' 
  },
  
  'contact.info.title': { en: 'Contact Information', ar: 'معلومات الاتصال' },
  'contact.info.description': { 
    en: "We're here to help and answer any questions you might have. We look forward to hearing from you.", 
    ar: 'نحن هنا للمساعدة والإجابة على أي أسئلة قد تكون لديك. نتطلع إلى الاستماع منك.' 
  },
  'contact.info.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.info.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.info.office': { en: 'Office', ar: 'المكتب' },
  'contact.info.address.line1': { en: '123 Market Street, Suite 500', ar: '123 شارع السوق، جناح 500' },
  'contact.info.address.line2': { en: 'San Francisco, CA 94103', ar: 'سان فرانسيسكو، كاليفورنيا 94103' },
  'contact.info.address.line3': { en: 'United States', ar: 'الولايات المتحدة' },
  
  'contact.hours.title': { en: 'Business Hours', ar: 'ساعات العمل' },
  'contact.hours.weekdays': { en: 'Monday - Friday', ar: 'الاثنين - الجمعة' },
  'contact.hours.weekdays.time': { en: '9:00 AM - 6:00 PM', ar: '9:00 صباحًا - 6:00 مساءً' },
  'contact.hours.saturday': { en: 'Saturday', ar: 'السبت' },
  'contact.hours.saturday.time': { en: '10:00 AM - 4:00 PM', ar: '10:00 صباحًا - 4:00 مساءً' },
  'contact.hours.sunday': { en: 'Sunday', ar: 'الأحد' },
  'contact.hours.sunday.time': { en: 'Closed', ar: 'مغلق' },

  // Location Map
  'contact.location.title': { en: 'Our Location', ar: 'موقعنا' },
  'contact.location.subtitle': { en: 'Visit us at our San Francisco office or reach out through any of our contact channels.', ar: 'قم بزيارتنا في مكتبنا في سان فرانسيسكو أو تواصل معنا من خلال أي من قنوات الاتصال الخاصة بنا.' },
  'contact.location.officeAddress': { en: 'Office Address', ar: 'عنوان المكتب' },
  'contact.location.companyName': { en: 'New Way Solutions', ar: 'حلول الطريق الجديد' },
  'contact.location.gettingHere': { en: 'Getting Here', ar: 'الوصول إلينا' },
  'contact.location.gettingHere.description': { en: "We're located in the heart of San Francisco's Financial District, easily accessible by BART, Muni, and major highways.", ar: 'نحن موجودون في قلب الحي المالي في سان فرانسيسكو، ويمكن الوصول إلينا بسهولة عبر BART و Muni والطرق السريعة الرئيسية.' },
  'contact.location.parking': { en: 'Parking', ar: 'مواقف السيارات' },
  'contact.location.parking.description': { en: 'Visitor parking is available in the building garage. Street parking and nearby public garages are also available.', ar: 'تتوفر مواقف للزوار في مرآب المبنى. كما تتوفر مواقف في الشارع ومرائب عامة قريبة.' },
  'contact.location.mapButton': { en: 'Open in Google Maps', ar: 'افتح في خرائط جوجل' },

  // Contact Form
  'contact.form.title': { en: 'Send us a Message', ar: 'أرسل لنا رسالة' },
  'contact.form.name': { en: 'Name', ar: 'الاسم' },
  'contact.form.name.placeholder': { en: 'John Doe', ar: 'أحمد محمد' },
  'contact.form.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.form.email.placeholder': { en: 'john@company.com', ar: 'ahmad@company.com' },
  'contact.form.company': { en: 'Company', ar: 'الشركة' },
  'contact.form.company.placeholder': { en: 'Your Company', ar: 'شركتك' },
  'contact.form.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.form.phone.placeholder': { en: '+1 (555) 123-4567', ar: '+966 50 123 4567' },
  'contact.form.message': { en: 'Message', ar: 'الرسالة' },
  'contact.form.message.placeholder': { en: 'Tell us about your project or inquiry...', ar: 'أخبرنا عن مشروعك أو استفسارك...' },
  'contact.form.submit': { en: 'Send Message', ar: 'إرسال الرسالة' },
  'contact.form.sending': { en: 'Sending...', ar: 'جارٍ الإرسال...' },
  'contact.form.success': { 
    en: "Thank you! Your message has been sent successfully. We'll get back to you soon.", 
    ar: 'شكرًا لك! تم إرسال رسالتك بنجاح. سنعود إليك قريبًا.' 
  },
  
  // Form Validation
  'form.error.nameRequired': { en: 'Name is required', ar: 'الاسم مطلوب' },
  'form.error.emailRequired': { en: 'Email is required', ar: 'البريد الإلكتروني مطلوب' },
  'form.error.emailInvalid': { en: 'Please enter a valid email address', ar: 'يرجى إدخال عنوان بريد إلكتروني صالح' },
  'form.error.companyRequired': { en: 'Company name is required', ar: 'اسم الشركة مطلوب' },
  'form.error.phoneRequired': { en: 'Phone number is required', ar: 'رقم الهاتف مطلوب' },
  'form.error.phoneInvalid': { en: 'Please enter a valid phone number', ar: 'يرجى إدخال رقم هاتف صالح' },
  'form.error.messageRequired': { en: 'Message is required', ar: 'الرسالة مطلوبة' },
  'form.error.messageMinLength': { en: 'Message must be at least 10 characters', ar: 'يجب أن تكون الرسالة 10 أحرف على الأقل' },
  'form.required': { en: '*', ar: '*' },

  // Services Page
  'services.page.title': { en: 'Our Security Solutions', ar: 'حلولنا الأمنية' },
  'services.page.subtitle': { en: 'Comprehensive security services designed to protect your enterprise and empower your team', ar: 'خدمات أمنية شاملة مصممة لحماية مؤسستك وتمكين فريقك' },

  // Why Choose Us Section
  'services.whyChoose.title': { en: 'Why Choose', ar: '' },
  'services.whyChoose.highlight': { en: 'New Way Solutions', ar: 'لماذا تختار حلول الطريق الجديد' },
  'services.whyChoose.subtitle': { en: 'Partner with us for comprehensive security solutions backed by expertise and reliability', ar: 'شارك معنا للحصول على حلول أمنية شاملة مدعومة بالخبرة والموثوقية' },
  
  'services.benefit.expertise.title': { en: 'Industry Expertise', ar: 'خبرة صناعية' },
  'services.benefit.expertise.description': { en: 'Over 10 years of experience delivering enterprise security solutions across multiple industries.', ar: 'أكثر من 10 سنوات من الخبرة في تقديم حلول أمن المؤسسات عبر صناعات متعددة.' },
  
  'services.benefit.support.title': { en: 'Dedicated Support', ar: 'دعم مخصص' },
  'services.benefit.support.description': { en: '24/7 expert support team ready to assist you with any security challenges or questions.', ar: 'فريق دعم خبراء على مدار الساعة طوال أيام الأسبوع جاهز لمساعدتك في أي تحديات أو أسئلة أمنية.' },
  
  'services.benefit.deployment.title': { en: 'Rapid Deployment', ar: 'نشر سريع' },
  'services.benefit.deployment.description': { en: 'Quick implementation with minimal disruption to your business operations and workflows.', ar: 'تنفيذ سريع مع الحد الأدنى من التعطيل لعمليات عملك وسير العمل.' },
  
  'services.benefit.security.title': { en: 'Proven Security', ar: 'أمان مثبت' },
  'services.benefit.security.description': { en: 'Battle-tested solutions protecting 500+ organizations with 99.9% uptime guarantee.', ar: 'حلول مجربة تحمي أكثر من 500 مؤسسة مع ضمان وقت تشغيل 99.9٪.' },

  // Services CTA Section
  'services.cta.title': { en: 'Ready to Secure Your Enterprise?', ar: 'هل أنت مستعد لتأمين مؤسستك؟' },
  'services.cta.subtitle': { en: "Let's discuss how our security solutions can protect your business and empower your team. Schedule a free consultation with our experts today.", ar: 'دعنا نناقش كيف يمكن لحلولنا الأمنية حماية عملك وتمكين فريقك. حدد موعد استشارة مجانية مع خبرائنا اليوم.' },
  'services.cta.button': { en: 'Contact Us', ar: 'اتصل بنا' },

  // Service Detail Page - Common
  'service.detail.backToServices': { en: 'Back to Services', ar: 'العودة إلى الخدمات' },
  'service.detail.getStarted': { en: 'Get Started Today', ar: 'ابدأ اليوم' },
  'service.detail.closingNote': { en: "By partnering with us, you're not only safeguarding your business, but you're also making it easier for your teams to work efficiently and securely.", ar: 'من خلال الشراكة معنا، فإنك لا تحمي عملك فحسب، بل تسهل أيضًا على فرقك العمل بكفاءة وأمان.' },
  'service.detail.processNote': { en: 'With this process, you get a comprehensive solution that not only secures your systems but also enhances user productivity and compliance.', ar: 'من خلال هذه العملية، تحصل على حل شامل لا يؤمن أنظمتك فحسب، بل يعزز أيضًا إنتاجية المستخدم والامتثال.' },

  // Service Card Features
  'service.iam.feature1': { en: 'Centralized user identity management', ar: 'إدارة هوية المستخدم المركزية' },
  'service.iam.feature2': { en: 'Role-based access control (RBAC)', ar: 'التحكم في الوصول على أساس الدور (RBAC)' },
  'service.iam.feature3': { en: 'Automated provisioning and deprovisioning', ar: 'التوفير وإلغاء التوفير الآلي' },
  'service.iam.feature4': { en: 'Compliance reporting and audit trails', ar: 'تقارير الامتثال ومسارات التدقيق' },
  'service.iam.feature5': { en: 'Integration with existing directories', ar: 'التكامل مع الأدلة الحالية' },

  'service.sso.feature1': { en: 'One-click access to all applications', ar: 'وصول بنقرة واحدة إلى جميع التطبيقات' },
  'service.sso.feature2': { en: 'Reduced password fatigue', ar: 'تقليل إرهاق كلمة المرور' },
  'service.sso.feature3': { en: 'Enhanced security with centralized authentication', ar: 'أمان محسّن مع مصادقة مركزية' },
  'service.sso.feature4': { en: 'Support for SAML, OAuth, and OpenID Connect', ar: 'دعم SAML و OAuth و OpenID Connect' },
  'service.sso.feature5': { en: 'Seamless integration with cloud and on-premise apps', ar: 'تكامل سلس مع التطبيقات السحابية والمحلية' },

  'service.pam.feature1': { en: 'Secure privileged account management', ar: 'إدارة آمنة للحسابات المميزة' },
  'service.pam.feature2': { en: 'Session monitoring and recording', ar: 'مراقبة وتسجيل الجلسات' },
  'service.pam.feature3': { en: 'Just-in-time access provisioning', ar: 'توفير الوصول في الوقت المناسب' },
  'service.pam.feature4': { en: 'Automated password rotation', ar: 'تدوير كلمة المرور الآلي' },
  'service.pam.feature5': { en: 'Comprehensive audit and compliance reporting', ar: 'تقارير تدقيق وامتثال شاملة' },

  'service.log.feature1': { en: 'Centralized log collection and storage', ar: 'جمع وتخزين السجلات المركزية' },
  'service.log.feature2': { en: 'Real-time log analysis and alerting', ar: 'تحليل السجلات والتنبيه في الوقت الفعلي' },
  'service.log.feature3': { en: 'Advanced search and filtering capabilities', ar: 'قدرات بحث وتصفية متقدمة' },
  'service.log.feature4': { en: 'Compliance-ready retention policies', ar: 'سياسات الاحتفاظ الجاهزة للامتثال' },
  'service.log.feature5': { en: 'Integration with SIEM platforms', ar: 'التكامل مع منصات SIEM' },

  'service.mfa.feature1': { en: 'Multiple authentication methods (SMS, email, app)', ar: 'طرق مصادقة متعددة (SMS، البريد الإلكتروني، التطبيق)' },
  'service.mfa.feature2': { en: 'Biometric authentication support', ar: 'دعم المصادقة البيومترية' },
  'service.mfa.feature3': { en: 'Adaptive authentication based on risk', ar: 'مصادقة تكيفية بناءً على المخاطر' },
  'service.mfa.feature4': { en: 'Easy user enrollment and management', ar: 'تسجيل وإدارة المستخدمين بسهولة' },
  'service.mfa.feature5': { en: 'Integration with existing systems', ar: 'التكامل مع الأنظمة الحالية' },

  'service.cybersecurity.feature1': { en: 'Threat detection and response', ar: 'اكتشاف التهديدات والاستجابة لها' },
  'service.cybersecurity.feature2': { en: 'Vulnerability assessments and penetration testing', ar: 'تقييمات الثغرات واختبار الاختراق' },
  'service.cybersecurity.feature3': { en: 'Security awareness training', ar: 'تدريب التوعية الأمنية' },
  'service.cybersecurity.feature4': { en: '24/7 security monitoring', ar: 'مراقبة أمنية على مدار الساعة' },
  'service.cybersecurity.feature5': { en: 'Incident response and recovery', ar: 'الاستجابة للحوادث والتعافي' },

  // About Page
  'about.page.title': { en: 'About New Way Solutions', ar: 'عن حلول الطريق الجديد' },
  'about.page.subtitle': { en: 'Transforming enterprises with innovative solutions and unparalleled expertise', ar: 'تحويل المؤسسات بحلول مبتكرة وخبرة لا مثيل لها' },

  // Company Overview
  'about.overview.mission.title': { en: 'Our', ar: '' },
  'about.overview.mission.highlight': { en: 'Mission', ar: 'مهمتنا' },
  'about.overview.mission.text': { en: 'To empower organizations with cutting-edge cybersecurity and IT solutions that protect their digital assets and enable business growth.', ar: 'تمكين المؤسسات بحلول الأمن السيبراني وتكنولوجيا المعلومات المتطورة التي تحمي أصولها الرقمية وتمكّن نمو الأعمال.' },
  'about.overview.intro': { en: 'New Way Solutions is a leading provider of enterprise security and identity management solutions. With over a decade of experience, we specialize in helping organizations secure their digital infrastructure through innovative technologies and best practices.', ar: 'حلول الطريق الجديد هي مزود رائد لحلول أمن المؤسسات وإدارة الهوية. مع أكثر من عقد من الخبرة، نتخصص في مساعدة المؤسسات على تأمين بنيتها التحتية الرقمية من خلال التقنيات المبتكرة وأفضل الممارسات.' },
  'about.overview.team': { en: 'Our team of certified security professionals works closely with clients to understand their unique challenges and deliver tailored solutions that meet their specific needs. From identity and access management to comprehensive cybersecurity strategies, we provide end-to-end services that ensure your organization stays protected in an ever-evolving threat landscape.', ar: 'يعمل فريقنا من محترفي الأمن المعتمدين بشكل وثيق مع العملاء لفهم تحدياتهم الفريدة وتقديم حلول مخصصة تلبي احتياجاتهم المحددة. من إدارة الهوية والوصول إلى استراتيجيات الأمن السيبراني الشاملة، نقدم خدمات شاملة تضمن بقاء مؤسستك محمية في مشهد تهديدات متطور باستمرار.' },
  'about.overview.partners': { en: 'We partner with industry-leading technology providers to deliver best-in-class solutions that integrate seamlessly with your existing infrastructure. Our commitment to excellence and customer satisfaction has made us a trusted partner for organizations across various industries.', ar: 'نتعاون مع مزودي التكنولوجيا الرائدين في الصناعة لتقديم حلول من الدرجة الأولى تتكامل بسلاسة مع بنيتك التحتية الحالية. التزامنا بالتميز ورضا العملاء جعلنا شريكًا موثوقًا للمؤسسات عبر مختلف الصناعات.' },
  'about.overview.expertise.title': { en: 'Trusted Expertise', ar: 'خبرة موثوقة' },
  'about.overview.expertise.description': { en: 'Over 10 years of experience delivering enterprise security solutions', ar: 'أكثر من 10 سنوات من الخبرة في تقديم حلول أمن المؤسسات' },
  'about.overview.clientFocus.title': { en: 'Client-Focused', ar: 'التركيز على العميل' },
  'about.overview.clientFocus.description': { en: 'Dedicated to understanding and solving your unique security challenges', ar: 'مكرسون لفهم وحل تحديات الأمان الفريدة الخاصة بك' },
  'about.overview.innovation.title': { en: 'Innovation Driven', ar: 'مدفوعون بالابتكار' },
  'about.overview.innovation.description': { en: 'Leveraging cutting-edge technologies to stay ahead of emerging threats', ar: 'الاستفادة من التقنيات المتطورة للبقاء في صدارة التهديدات الناشئة' },

  // Mission, Vision, Values
  'about.mvv.title': { en: 'What', ar: 'ما يحركنا' },
  'about.mvv.highlight': { en: 'Drives Us', ar: '' },
  'about.mvv.subtitle': { en: 'Our foundation built on purpose, vision, and unwavering principles', ar: 'أساسنا المبني على الهدف والرؤية والمبادئ الثابتة' },
  'about.mvv.mission.title': { en: 'Mission', ar: 'المهمة' },
  'about.mvv.mission.description': { en: 'To empower organizations with cutting-edge cybersecurity and IT solutions that protect their digital assets, ensure compliance, and enable business growth in an increasingly connected world.', ar: 'تمكين المؤسسات بحلول الأمن السيبراني وتكنولوجيا المعلومات المتطورة التي تحمي أصولها الرقمية، وتضمن الامتثال، وتمكّن نمو الأعمال في عالم متصل بشكل متزايد.' },
  'about.mvv.vision.title': { en: 'Vision', ar: 'الرؤية' },
  'about.mvv.vision.description': { en: 'To be the most trusted partner in enterprise security, recognized globally for our innovation, expertise, and unwavering commitment to protecting organizations from evolving cyber threats.', ar: 'أن نكون الشريك الأكثر ثقة في أمن المؤسسات، معترف به عالميًا لابتكارنا وخبرتنا والتزامنا الثابت بحماية المؤسسات من التهديدات السيبرانية المتطورة.' },
  'about.mvv.values.title': { en: 'Values', ar: 'القيم' },
  'about.mvv.values.description': { en: 'Integrity, Excellence, Innovation, and Client Success. We believe in building lasting relationships through transparency, delivering exceptional results, and continuously evolving to meet the challenges of tomorrow.', ar: 'النزاهة والتميز والابتكار ونجاح العميل. نؤمن ببناء علاقات دائمة من خلال الشفافية، وتقديم نتائج استثنائية، والتطور المستمر لمواجهة تحديات الغد.' },

  // FAQs Section
  'about.faqs.title': { en: 'Frequently Asked', ar: 'الأسئلة الشائعة' },
  'about.faqs.highlight': { en: 'Questions', ar: '' },
  'about.faqs.subtitle': { en: 'Learn more about our comprehensive cybersecurity solutions and services', ar: 'تعرف على المزيد حول حلولنا وخدماتنا الشاملة للأمن السيبراني' },
  'about.faqs.secureAccess.question': { en: 'Secure Access & Identity', ar: 'الوصول الآمن والهوية' },
  'about.faqs.secureAccess.answer1': { en: 'Implement robust Multi-Factor Authentication (MFA) with Symantec VIP (2FA)', ar: 'تنفيذ المصادقة متعددة العوامل (MFA) القوية مع Symantec VIP (2FA)' },
  'about.faqs.secureAccess.answer2': { en: 'Leverage Symantec Web Protection Suite (WPS) for secure web browsing', ar: 'الاستفادة من مجموعة حماية الويب Symantec (WPS) لتصفح الويب الآمن' },
  'about.faqs.secureAccess.answer3': { en: 'Secure your network perimeter with next-generation firewalls (NGFW) from Palo Alto Networks', ar: 'تأمين محيط شبكتك بجدران الحماية من الجيل التالي (NGFW) من Palo Alto Networks' },
  'about.faqs.threatDetection.question': { en: 'Threat Detection & Response', ar: 'اكتشاف التهديدات والاستجابة' },
  'about.faqs.threatDetection.answer1': { en: 'Gain comprehensive threat detection and response with Palo Alto Networks Cortex XDR and Cortex XSOAR', ar: 'احصل على اكتشاف واستجابة شاملة للتهديدات مع Palo Alto Networks Cortex XDR و Cortex XSOAR' },
  'about.faqs.threatDetection.answer2': { en: 'Secure your cloud environment with Symantec CloudSOC CASB', ar: 'أمّن بيئتك السحابية مع Symantec CloudSOC CASB' },
  'about.faqs.endpointSecurity.question': { en: 'Endpoint Security', ar: 'أمن نقاط النهاية' },
  'about.faqs.endpointSecurity.answer1': { en: 'Protect your devices from malware and advanced threats with Symantec Endpoint Protection (SEP) and Endpoint Detection and Response (EDR)', ar: 'احمِ أجهزتك من البرامج الضارة والتهديدات المتقدمة مع Symantec Endpoint Protection (SEP) واكتشاف نقاط النهاية والاستجابة (EDR)' },
  'about.faqs.endpointSecurity.answer2': { en: 'Ensure data privacy with Symantec Endpoint Encryption (PGP)', ar: 'ضمان خصوصية البيانات مع تشفير نقاط النهاية Symantec (PGP)' },
  'about.faqs.endpointSecurity.answer3': { en: 'Fortify endpoint security with TrilleX HX and Email Security (EX)', ar: 'تعزيز أمن نقاط النهاية مع TrilleX HX وأمن البريد الإلكتروني (EX)' },
  'about.faqs.dataSecurity.question': { en: 'Data Security & Compliance', ar: 'أمن البيانات والامتثال' },
  'about.faqs.dataSecurity.answer1': { en: 'Prevent data breaches with Symantec Data Loss Prevention (DLP)', ar: 'منع اختراقات البيانات مع Symantec Data Loss Prevention (DLP)' },
  'about.faqs.dataSecurity.answer2': { en: 'Enforce data security policies with TrilleX Network Security (NX) and Central Management System (CMS)', ar: 'فرض سياسات أمن البيانات مع TrilleX Network Security (NX) ونظام الإدارة المركزية (CMS)' },
  'about.faqs.emailSecurity.question': { en: 'Email Security', ar: 'أمن البريد الإلكتروني' },
  'about.faqs.emailSecurity.answer1': { en: 'Block phishing attempts and malware with Symantec Email Security.cloud and TrilleX Email Threat Protection (ETP)', ar: 'حظر محاولات التصيد والبرامج الضارة مع Symantec Email Security.cloud و TrilleX Email Threat Protection (ETP)' },
  'about.faqs.networkManagement.question': { en: 'Network Management & Monitoring', ar: 'إدارة الشبكة والمراقبة' },
  'about.faqs.networkManagement.answer1': { en: 'Gain real-time insights into network performance with SolarWinds Network Performance Management (NPM), Network Traffic Analyzer (NTA), and Network Configuration Manager (NCM)', ar: 'احصل على رؤى في الوقت الفعلي حول أداء الشبكة مع SolarWinds Network Performance Management (NPM) و Network Traffic Analyzer (NTA) و Network Configuration Manager (NCM)' },
  'about.faqs.networkManagement.answer2': { en: 'Optimize database performance with SolarWinds Database Performance Analyzer (DPA)', ar: 'تحسين أداء قاعدة البيانات مع SolarWinds Database Performance Analyzer (DPA)' },
  'about.faqs.networkManagement.answer3': { en: 'Monitor server and application health with SolarWinds Server & Application Monitor (SAM)', ar: 'مراقبة صحة الخادم والتطبيق مع SolarWinds Server & Application Monitor (SAM)' },
  'about.faqs.virtualization.question': { en: 'Virtualization & Cloud Security', ar: 'الافتراضية وأمن السحابة' },
  'about.faqs.virtualization.answer1': { en: 'Manage virtual environments effectively with SolarWinds Virtualization Manager (VMAN)', ar: 'إدارة البيئات الافتراضية بفعالية مع SolarWinds Virtualization Manager (VMAN)' },
  'about.faqs.virtualization.answer2': { en: 'Ensure efficient storage resource utilization with SolarWinds Storage Resource Monitor (SRM)', ar: 'ضمان استخدام فعال لموارد التخزين مع SolarWinds Storage Resource Monitor (SRM)' },
  'about.faqs.additional.question': { en: 'Additional Solutions', ar: 'حلول إضافية' },
  'about.faqs.additional.answer1': { en: 'Enable secure remote access with Citrix solutions like Application Delivery Controller (ADC), Virtual Desktop Infrastructure (VDI), and VPN Gateway', ar: 'تمكين الوصول عن بُعد الآمن مع حلول Citrix مثل Application Delivery Controller (ADC) و Virtual Desktop Infrastructure (VDI) و VPN Gateway' },
  'about.faqs.additional.answer2': { en: 'Protect against file-based threats with TrilleX File Protect (FX)', ar: 'الحماية من التهديدات القائمة على الملفات مع TrilleX File Protect (FX)' },
  'about.faqs.additional.answer3': { en: 'Perform advanced malware analysis with TrilleX Malware Analysis (AX)', ar: 'إجراء تحليل متقدم للبرامج الضارة مع TrilleX Malware Analysis (AX)' },
  'about.faqs.additional.answer4': { en: 'Simplify user and device management with Ivanti Security Control (i-Sec)', ar: 'تبسيط إدارة المستخدم والجهاز مع Ivanti Security Control (i-Sec)' },
  'about.faqs.additional.answer5': { en: 'Deliver application security with F5 BIG-IP Local Traffic Manager and Web Application Firewall (WAF)', ar: 'تقديم أمان التطبيقات مع F5 BIG-IP Local Traffic Manager و Web Application Firewall (WAF)' },
  'about.faqs.additional.answer6': { en: 'Enhance file transfer security with OPSWAT MetaDefender and MetaAccess', ar: 'تعزيز أمان نقل الملفات مع OPSWAT MetaDefender و MetaAccess' },

  // Clients Page
  'clients.page.title': { en: 'Trusted by Industry Leaders', ar: 'موثوق به من قادة الصناعة' },
  'clients.page.subtitle': { en: 'We partner with organizations across diverse sectors to deliver world-class security solutions and drive digital transformation.', ar: 'نتعاون مع المؤسسات عبر قطاعات متنوعة لتقديم حلول أمنية عالمية المستوى ودفع التحول الرقمي.' },

  // Client Grid Section
  'clients.grid.title': { en: 'Our', ar: 'عملاؤنا' },
  'clients.grid.highlight': { en: 'Clients', ar: '' },
  'clients.grid.subtitle': { en: 'Trusted by leading organizations across government, healthcare, finance, and technology sectors', ar: 'موثوق به من قبل المؤسسات الرائدة عبر قطاعات الحكومة والرعاية الصحية والمالية والتكنولوجيا' },

  // Client Cards
  'clients.mofa.name': { en: 'Ministry of Foreign Affairs', ar: 'وزارة الخارجية' },
  'clients.mofa.description': { en: 'Leading government institution implementing advanced security solutions for diplomatic services and international relations.', ar: 'مؤسسة حكومية رائدة تنفذ حلول أمنية متقدمة للخدمات الدبلوماسية والعلاقات الدولية.' },
  'clients.moi.name': { en: 'Ministry of Interior', ar: 'وزارة الداخلية' },
  'clients.moi.description': { en: 'National security agency deploying cutting-edge cybersecurity infrastructure for public safety and national defense.', ar: 'وكالة أمن وطني تنشر بنية تحتية للأمن السيبراني المتطورة للسلامة العامة والدفاع الوطني.' },
  'clients.ngha.name': { en: 'National Guard Health Affairs', ar: 'الشؤون الصحية بالحرس الوطني' },
  'clients.ngha.description': { en: 'Premier healthcare provider delivering patient-centric medical services with advanced security and compliance solutions.', ar: 'مزود رعاية صحية رائد يقدم خدمات طبية تركز على المريض مع حلول أمنية وامتثال متقدمة.' },
  'clients.ksmc.name': { en: 'KSMC', ar: 'مركز الملك سلمان الطبي' },
  'clients.ksmc.description': { en: 'Leading medical center providing specialized healthcare services with state-of-the-art security infrastructure.', ar: 'مركز طبي رائد يقدم خدمات رعاية صحية متخصصة مع بنية تحتية أمنية حديثة.' },
  'clients.saudiPayments.name': { en: 'Saudi Payments', ar: 'المدفوعات السعودية' },
  'clients.saudiPayments.description': { en: 'Financial institution providing secure payment solutions with advanced fraud detection and data protection systems.', ar: 'مؤسسة مالية توفر حلول دفع آمنة مع أنظمة كشف الاحتيال المتقدمة وحماية البيانات.' },
  'clients.stc.name': { en: 'STC Solutions', ar: 'حلول STC' },
  'clients.stc.description': { en: 'Telecommunications leader implementing enterprise-grade security solutions for digital transformation initiatives.', ar: 'رائد الاتصالات ينفذ حلول أمنية على مستوى المؤسسات لمبادرات التحول الرقمي.' },
  'clients.almajdouie.name': { en: 'Almajdouie', ar: 'المجدوعي' },
  'clients.almajdouie.description': { en: 'Logistics company securing supply chain operations with comprehensive cybersecurity and monitoring solutions.', ar: 'شركة لوجستية تؤمن عمليات سلسلة التوريد بحلول الأمن السيبراني والمراقبة الشاملة.' },
  'clients.education.name': { en: 'Education & Training', ar: 'التعليم والتدريب' },
  'clients.education.description': { en: 'Educational institution transforming learning with secure online platforms and personalized student experiences.', ar: 'مؤسسة تعليمية تحول التعلم بمنصات آمنة عبر الإنترنت وتجارب طلابية مخصصة.' },
  'clients.psbau.name': { en: 'PSBAU', ar: 'جامعة الأمير سلطان بن عبدالعزيز للعلوم الصحية' },
  'clients.psbau.description': { en: 'University implementing advanced security solutions for research data protection and campus-wide infrastructure.', ar: 'جامعة تنفذ حلول أمنية متقدمة لحماية بيانات البحث والبنية التحتية على مستوى الحرم الجامعي.' },
  'clients.momrah.name': { en: 'Momrah', ar: 'وزارة الشؤون البلدية والقروية' },
  'clients.momrah.description': { en: 'Municipal affairs authority deploying smart city security solutions for urban development and public services.', ar: 'هيئة الشؤون البلدية تنشر حلول أمن المدن الذكية للتنمية الحضرية والخدمات العامة.' },
  'clients.moimr.name': { en: 'MOIMR', ar: 'وزارة الداخلية - المنطقة الشرقية' },
  'clients.moimr.description': { en: 'Government agency implementing secure digital platforms for administrative services and citizen engagement.', ar: 'وكالة حكومية تنفذ منصات رقمية آمنة للخدمات الإدارية ومشاركة المواطنين.' },
  'clients.nec.name': { en: 'NeC', ar: 'NeC' },
  'clients.nec.description': { en: 'Technology company delivering innovative security solutions for enterprise digital transformation projects.', ar: 'شركة تكنولوجيا تقدم حلول أمنية مبتكرة لمشاريع التحول الرقمي للمؤسسات.' },

  // Client Categories
  'clients.category.government': { en: 'Government', ar: 'حكومي' },
  'clients.category.healthcare': { en: 'Healthcare', ar: 'الرعاية الصحية' },
  'clients.category.financial': { en: 'Financial Services', ar: 'الخدمات المالية' },
  'clients.category.technology': { en: 'Technology', ar: 'التكنولوجيا' },
  'clients.category.logistics': { en: 'Logistics', ar: 'اللوجستيات' },
  'clients.category.education': { en: 'Education', ar: 'التعليم' },

  // Industries Section
  'clients.industries.title': { en: 'Industries', ar: 'الصناعات التي نخدمها' },
  'clients.industries.highlight': { en: 'We Serve', ar: '' },
  'clients.industries.subtitle': { en: 'Delivering specialized security solutions across diverse sectors', ar: 'تقديم حلول أمنية متخصصة عبر قطاعات متنوعة' },
  'clients.industries.government': { en: 'Government', ar: 'الحكومة' },
  'clients.industries.government.description': { en: 'Secure solutions for public sector organizations', ar: 'حلول آمنة لمؤسسات القطاع العام' },
  'clients.industries.healthcare': { en: 'Healthcare', ar: 'الرعاية الصحية' },
  'clients.industries.healthcare.description': { en: 'HIPAA-compliant security for medical institutions', ar: 'أمان متوافق مع HIPAA للمؤسسات الطبية' },
  'clients.industries.finance': { en: 'Finance', ar: 'المالية' },
  'clients.industries.finance.description': { en: 'Banking-grade security for financial services', ar: 'أمان على مستوى البنوك للخدمات المالية' },
  'clients.industries.education': { en: 'Education', ar: 'التعليم' },
  'clients.industries.education.description': { en: 'Protecting academic institutions and student data', ar: 'حماية المؤسسات الأكاديمية وبيانات الطلاب' },
  'clients.industries.retail': { en: 'Retail', ar: 'التجزئة' },
  'clients.industries.retail.description': { en: 'E-commerce and retail security solutions', ar: 'حلول أمان التجارة الإلكترونية والتجزئة' },
  'clients.industries.manufacturing': { en: 'Manufacturing', ar: 'التصنيع' },
  'clients.industries.manufacturing.description': { en: 'Industrial security and operational technology', ar: 'الأمن الصناعي والتكنولوجيا التشغيلية' },

  // Testimonials Section
  'clients.testimonials.title': { en: 'Client', ar: 'شهادات العملاء' },
  'clients.testimonials.highlight': { en: 'Testimonials', ar: '' },
  'clients.testimonials.subtitle': { en: 'Hear what our clients have to say about working with us', ar: 'استمع إلى ما يقوله عملاؤنا عن العمل معنا' },
  'clients.testimonial1.quote': { en: 'New Way Solutions transformed our security infrastructure with their IAM implementation. Their expertise and professionalism exceeded our expectations.', ar: 'حولت حلول الطريق الجديد بنيتنا التحتية الأمنية من خلال تنفيذ IAM. خبرتهم واحترافيتهم تجاوزت توقعاتنا.' },
  'clients.testimonial1.author': { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
  'clients.testimonial1.position': { en: 'Chief Information Security Officer', ar: 'كبير مسؤولي أمن المعلومات' },
  'clients.testimonial1.company': { en: 'Ministry of Interior', ar: 'وزارة الداخلية' },
  'clients.testimonial2.quote': { en: "The team's deep understanding of healthcare compliance and security requirements made our HIPAA implementation seamless. Highly recommended.", ar: 'فهم الفريق العميق لمتطلبات الامتثال والأمان في الرعاية الصحية جعل تنفيذ HIPAA سلسًا. موصى به بشدة.' },
  'clients.testimonial2.author': { en: 'Dr. Sarah Johnson', ar: 'د. سارة جونسون' },
  'clients.testimonial2.position': { en: 'IT Director', ar: 'مدير تكنولوجيا المعلومات' },
  'clients.testimonial2.company': { en: 'National Guard Health Affairs', ar: 'الشؤون الصحية بالحرس الوطني' },
  'clients.testimonial3.quote': { en: 'Outstanding service and support. Their SSO solution has significantly improved our operational efficiency while maintaining the highest security standards.', ar: 'خدمة ودعم متميزان. حل SSO الخاص بهم حسّن كفاءتنا التشغيلية بشكل كبير مع الحفاظ على أعلى معايير الأمان.' },
  'clients.testimonial3.author': { en: 'Mohammed Al-Qahtani', ar: 'محمد القحطاني' },
  'clients.testimonial3.position': { en: 'Technology Manager', ar: 'مدير التكنولوجيا' },
  'clients.testimonial3.company': { en: 'Saudi Payments', ar: 'المدفوعات السعودية' },

  // Partners Page
  'partners.page.title': { en: 'Technology Partners', ar: 'شركاء التكنولوجيا' },
  'partners.page.subtitle': { en: 'Collaborating with industry leaders to deliver best-in-class solutions', ar: 'التعاون مع قادة الصناعة لتقديم حلول من الدرجة الأولى' },
  
  // Partner Grid Section
  'partners.grid.title': { en: 'Our Strategic', ar: '' },
  'partners.grid.highlight': { en: 'Partners', ar: 'شركاؤنا الاستراتيجيون' },
  'partners.grid.subtitle': { en: 'We collaborate with industry-leading technology providers to deliver comprehensive solutions', ar: 'نتعاون مع مزودي التكنولوجيا الرائدين في الصناعة لتقديم حلول شاملة' },
  
  // Partner Category Section
    'partners.category.title': { en: 'Partners by', ar: '' },
  'partners.category.highlight': { en: 'Category', ar: 'الشركاء حسب الفئة' },
  'partners.category.subtitle': { en: 'Organized by expertise to deliver specialized solutions', ar: 'منظمون حسب الخبرة لتقديم حلول متخصصة' },
  'partners.category.security': { en: 'Security', ar: 'الأمن' },
  'partners.category.cloud': { en: 'Cloud', ar: 'السحابة' },
  'partners.category.identity': { en: 'Identity Management', ar: 'إدارة الهوية' },
  'partners.category.integration': { en: 'Integration', ar: 'التكامل' },
  'partners.category.partnersCount': { en: 'Partners', ar: 'شركاء' },
  
  // Partnership Benefits Section
    'partners.benefits.title': { en: 'Partnership', ar: '' },
  'partners.benefits.highlight': { en: 'Benefits', ar: 'فوائد الشراكة' },
  'partners.benefits.subtitle': { en: 'Our strategic partnerships deliver tangible value to your organization', ar: 'شراكاتنا الاستراتيجية تقدم قيمة ملموسة لمؤسستك' },
  
  'partners.benefit.security.title': { en: 'Enhanced Security', ar: 'أمان محسّن' },
  'partners.benefit.security.description': { en: 'Access to cutting-edge security technologies and best practices from industry leaders, ensuring robust protection for your enterprise.', ar: 'الوصول إلى تقنيات الأمان المتطورة وأفضل الممارسات من قادة الصناعة، مما يضمن حماية قوية لمؤسستك.' },
  
  'partners.benefit.implementation.title': { en: 'Faster Implementation', ar: 'تنفيذ أسرع' },
  'partners.benefit.implementation.description': { en: 'Streamlined deployment processes and pre-integrated solutions reduce time-to-value and accelerate your digital transformation.', ar: 'عمليات النشر المبسطة والحلول المتكاملة مسبقًا تقلل من الوقت اللازم للقيمة وتسرع تحولك الرقمي.' },
  
  'partners.benefit.expertise.title': { en: 'Certified Expertise', ar: 'خبرة معتمدة' },
  'partners.benefit.expertise.description': { en: 'Our team holds certifications from all major partners, guaranteeing expert implementation and ongoing support.', ar: 'يحمل فريقنا شهادات من جميع الشركاء الرئيسيين، مما يضمن التنفيذ الخبير والدعم المستمر.' },
  
  'partners.benefit.support.title': { en: 'Collaborative Support', ar: 'دعم تعاوني' },
  'partners.benefit.support.description': { en: 'Direct access to partner resources and technical support teams for complex implementations and troubleshooting.', ar: 'وصول مباشر إلى موارد الشركاء وفرق الدعم الفني للتنفيذات المعقدة واستكشاف الأخطاء وإصلاحها.' },
  
  'partners.benefit.reach.title': { en: 'Global Reach', ar: 'وصول عالمي' },
  'partners.benefit.reach.description': { en: 'Leverage worldwide partner networks to support your operations across multiple regions and time zones.', ar: 'الاستفادة من شبكات الشركاء العالمية لدعم عملياتك عبر مناطق ومناطق زمنية متعددة.' },
  
  'partners.benefit.innovation.title': { en: 'Innovation Access', ar: 'الوصول إلى الابتكار' },
  'partners.benefit.innovation.description': { en: 'Early access to new features, beta programs, and emerging technologies to keep your organization ahead of the curve.', ar: 'الوصول المبكر إلى الميزات الجديدة وبرامج بيتا والتقنيات الناشئة للحفاظ على مؤسستك في الطليعة.' },
  
  // Partnership CTA
  'partners.cta.title': { en: 'Ready to Leverage Our Partnerships?', ar: 'هل أنت مستعد للاستفادة من شراكاتنا؟' },
  'partners.cta.subtitle': { en: "Let's discuss how our technology partnerships can benefit your organization", ar: 'دعنا نناقش كيف يمكن لشراكاتنا التكنولوجية أن تفيد مؤسستك' },
  'partners.cta.button': { en: 'Contact Us', ar: 'اتصل بنا' },

  // Common
  'common.loading': { en: 'Loading...', ar: 'جارٍ التحميل...' },
  'common.error': { en: 'Error', ar: 'خطأ' },
  'common.success': { en: 'Success', ar: 'نجاح' },
  'common.close': { en: 'Close', ar: 'إغلاق' },
  'common.cancel': { en: 'Cancel', ar: 'إلغاء' },
  'common.save': { en: 'Save', ar: 'حفظ' },
  'common.delete': { en: 'Delete', ar: 'حذف' },
  'common.edit': { en: 'Edit', ar: 'تعديل' },
  'common.view': { en: 'View', ar: 'عرض' },
  'common.back': { en: 'Back', ar: 'رجوع' },
  'common.next': { en: 'Next', ar: 'التالي' },
  'common.previous': { en: 'Previous', ar: 'السابق' },
  'common.submit': { en: 'Submit', ar: 'إرسال' },
  'common.search': { en: 'Search', ar: 'بحث' },
  'common.filter': { en: 'Filter', ar: 'تصفية' },
  'common.sort': { en: 'Sort', ar: 'ترتيب' },
  'common.all': { en: 'All', ar: 'الكل' },
  'common.none': { en: 'None', ar: 'لا شيء' },
  'common.yes': { en: 'Yes', ar: 'نعم' },
  'common.no': { en: 'No', ar: 'لا' },
  'about.mvv.title': { en: 'What', ar: '' },
  'about.mvv.highlight': { en: 'Drives Us', ar: 'ما يحركنا' },
  'about.faqs.title': { en: 'Frequently Asked', ar: '' },
  'about.faqs.highlight': { en: 'Questions', ar: 'الأسئلة الشائعة' },
}

  // Service Detail Page
  'service.detail.backToServices': { en: 'Back to Services', ar: 'العودة إلى الخدمات' },
  'service.detail.getStarted': { en: 'Get Started Today', ar: 'ابدأ اليوم' },
  'service.detail.closingNote': { en: 'By partnering with us, you\'re not only safeguarding your business, but you\'re also making it easier for your teams to work efficiently and securely.', ar: 'من خلال الشراكة معنا، فأنت لا تحمي عملك فحسب، بل تسهل أيضًا على فرقك العمل بكفاءة وأمان.' },
  'service.detail.processNote': { en: 'With this process, you get a comprehensive solution that not only secures your systems but also enhances user productivity and compliance.', ar: 'من خلال هذه العملية، تحصل على حل شامل لا يؤمن أنظمتك فحسب، بل يعزز أيضًا إنتاجية المستخدم والامتثال.' },
