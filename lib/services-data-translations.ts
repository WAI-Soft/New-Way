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
    title: { 
      en: 'Identity & Access Management (IAM)', 
      ar: 'إدارة الهوية والوصول (IAM)' 
    },
    description: { 
      en: "In today's digital landscape, securing access to your critical systems and data is more important than ever. Our IAM solutions provide comprehensive identity governance and access control.", 
      ar: 'في المشهد الرقمي اليوم، أصبح تأمين الوصول إلى أنظمتك وبياناتك الحيوية أكثر أهمية من أي وقت مضى. توفر حلول IAM الخاصة بنا حوكمة شاملة للهوية والتحكم في الوصول.' 
    },
    fullDescription: { 
      en: "Our Identity & Access Management (IAM) services help businesses control who can access what, ensuring the right people have the right access at the right time. With a comprehensive IAM solution, you can effectively manage user identities, secure data, and enhance compliance across your entire organization.\n\nAt New Way, we offer a suite of IAM services, including Privilege Access Management (PAM), Multi-Factor Authentication (MFA), Single Sign-On (SSO), and Log Management. These services work together to provide a cohesive approach to identity security, reducing risk while improving productivity and user experience.",
      ar: 'تساعد خدمات إدارة الهوية والوصول (IAM) الخاصة بنا الشركات على التحكم في من يمكنه الوصول إلى ماذا، مما يضمن حصول الأشخاص المناسبين على الوصول المناسب في الوقت المناسب. باستخدام حل IAM شامل، يمكنك إدارة هويات المستخدمين بشكل فعال وتأمين البيانات وتعزيز الامتثال عبر مؤسستك بأكملها.\n\nفي New Way، نقدم مجموعة من خدمات IAM، بما في ذلك إدارة الوصول المميز (PAM)، والمصادقة متعددة العوامل (MFA)، وتسجيل الدخول الموحد (SSO)، وإدارة السجلات. تعمل هذه الخدمات معًا لتوفير نهج متماسك لأمن الهوية، مما يقلل من المخاطر مع تحسين الإنتاجية وتجربة المستخدم.'
    },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { 
        en: "Our IAM solution integrates with your existing infrastructure, providing a centralized way to manage users and their access. We start by assessing your current environment and understanding your needs. Then, we design a tailored IAM strategy that includes:",
        ar: 'يتكامل حل IAM الخاص بنا مع البنية التحتية الحالية لديك، مما يوفر طريقة مركزية لإدارة المستخدمين ووصولهم. نبدأ بتقييم بيئتك الحالية وفهم احتياجاتك. ثم نصمم استراتيجية IAM مخصصة تتضمن:'
      },
      points: [
        { 
          title: { en: 'IAM', ar: 'إدارة الهوية والوصول' },
          description: { 
            en: 'We ensure that users are properly authenticated and authorized based on their roles and responsibilities.',
            ar: 'نضمن مصادقة المستخدمين وتفويضهم بشكل صحيح بناءً على أدوارهم ومسؤولياتهم.'
          }
        },
        { 
          title: { en: 'PAM', ar: 'إدارة الوصول المميز' },
          description: { 
            en: 'We secure access to sensitive systems by controlling and monitoring privileged accounts.',
            ar: 'نؤمن الوصول إلى الأنظمة الحساسة من خلال التحكم في الحسابات المميزة ومراقبتها.'
          }
        },
        { 
          title: { en: 'MFA', ar: 'المصادقة متعددة العوامل' },
          description: { 
            en: 'We add an extra layer of security by requiring multiple forms of verification before granting access.',
            ar: 'نضيف طبقة إضافية من الأمان من خلال طلب أشكال متعددة من التحقق قبل منح الوصول.'
          }
        },
        { 
          title: { en: 'SSO', ar: 'تسجيل الدخول الموحد' },
          description: { 
            en: 'We simplify the login process by enabling users to access multiple applications with just one set of credentials.',
            ar: 'نبسط عملية تسجيل الدخول من خلال تمكين المستخدمين من الوصول إلى تطبيقات متعددة بمجموعة واحدة فقط من بيانات الاعتماد.'
          }
        },
        { 
          title: { en: 'Log Management', ar: 'إدارة السجلات' },
          description: { 
            en: 'We keep detailed records of access events, which help with compliance and troubleshooting.',
            ar: 'نحتفظ بسجلات مفصلة لأحداث الوصول، والتي تساعد في الامتثال واستكشاف الأخطاء وإصلاحها.'
          }
        }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { 
        en: "Implementing an IAM system isn't just about securing access; it's about enhancing the overall efficiency and security posture of your business. With New Way's IAM solutions, you can:",
        ar: 'تنفيذ نظام IAM ليس فقط حول تأمين الوصول؛ بل يتعلق بتعزيز الكفاءة الإجمالية والوضع الأمني لعملك. باستخدام حلول IAM من New Way، يمكنك:'
      },
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
      content: { 
        en: 'Our IAM service follows a clear, systematic process to ensure everything is set up correctly and aligned with your security goals:',
        ar: 'تتبع خدمة IAM الخاصة بنا عملية واضحة ومنهجية لضمان إعداد كل شيء بشكل صحيح ومتوافق مع أهدافك الأمنية:'
      },
      steps: [
        { 
          title: { en: 'Initial Consultation & Assessment', ar: 'الاستشارة والتقييم الأولي' },
          description: { 
            en: 'We begin by understanding your organization\'s needs and current IT environment.',
            ar: 'نبدأ بفهم احتياجات مؤسستك وبيئة تكنولوجيا المعلومات الحالية.'
          }
        },
        { 
          title: { en: 'Tailored Strategy Design', ar: 'تصميم استراتيجية مخصصة' },
          description: { 
            en: 'We craft a strategy that aligns with your specific requirements and objectives.',
            ar: 'نصمم استراتيجية تتماشى مع متطلباتك وأهدافك المحددة.'
          }
        },
        { 
          title: { en: 'Implementation & Configuration', ar: 'التنفيذ والتكوين' },
          description: { 
            en: 'Our team sets up the IAM system, integrating it with your existing infrastructure and security tools.',
            ar: 'يقوم فريقنا بإعداد نظام IAM، ودمجه مع البنية التحتية وأدوات الأمان الحالية لديك.'
          }
        },
        { 
          title: { en: 'Testing & Validation', ar: 'الاختبار والتحقق' },
          description: { 
            en: 'We thoroughly test the solution to ensure that everything is working as expected and that your security policies are in place.',
            ar: 'نختبر الحل بدقة للتأكد من أن كل شيء يعمل كما هو متوقع وأن سياسات الأمان الخاصة بك موجودة.'
          }
        },
        { 
          title: { en: 'Training & Knowledge Transfer', ar: 'التدريب ونقل المعرفة' },
          description: { 
            en: 'We provide hands-on training to your team so they can manage and maintain the system effectively.',
            ar: 'نقدم تدريبًا عمليًا لفريقك حتى يتمكنوا من إدارة النظام وصيانته بفعالية.'
          }
        },
        { 
          title: { en: 'Ongoing Support & Monitoring', ar: 'الدعم والمراقبة المستمرة' },
          description: { 
            en: 'After implementation, we offer continuous support to ensure your IAM system is always running smoothly, including periodic health checks and troubleshooting as needed.',
            ar: 'بعد التنفيذ، نقدم دعمًا مستمرًا لضمان تشغيل نظام IAM الخاص بك بسلاسة دائمًا، بما في ذلك الفحوصات الصحية الدورية واستكشاف الأخطاء وإصلاحها حسب الحاجة.'
          }
        }
      ]
    },
    closingStatement: { 
      en: "At New Way, we aim to make securing your digital infrastructure simple and effective. If you're looking for a solution that helps protect your business while streamlining the access process, we're here to help. Reach out today to learn how we can make your IAM system work better for you.",
      ar: 'في New Way، نهدف إلى جعل تأمين البنية التحتية الرقمية الخاصة بك بسيطة وفعالة. إذا كنت تبحث عن حل يساعد في حماية عملك مع تبسيط عملية الوصول، فنحن هنا للمساعدة. تواصل معنا اليوم لمعرفة كيف يمكننا جعل نظام IAM الخاص بك يعمل بشكل أفضل لك.'
    }
  },
  'single-sign-on': {
    title: { 
      en: 'Single Sign-On (SSO)', 
      ar: 'تسجيل الدخول الموحد (SSO)' 
    },
    description: { 
      en: 'Managing multiple passwords for different applications can be a hassle for users and a security risk for organizations. Our SSO solutions streamline authentication while enhancing security.', 
      ar: 'إدارة كلمات مرور متعددة لتطبيقات مختلفة يمكن أن تكون مشكلة للمستخدمين وخطرًا أمنيًا للمؤسسات. تعمل حلول SSO الخاصة بنا على تبسيط المصادقة مع تعزيز الأمان.' 
    },
    fullDescription: { 
      en: "Our Single Sign-On (SSO) solution eliminates the need for users to remember multiple passwords while significantly improving your organization's security posture. By providing a single authentication point, we make it easier for users to access all their applications while maintaining strict security controls.",
      ar: 'يلغي حل تسجيل الدخول الموحد (SSO) الخاص بنا حاجة المستخدمين إلى تذكر كلمات مرور متعددة مع تحسين الوضع الأمني لمؤسستك بشكل كبير. من خلال توفير نقطة مصادقة واحدة، نسهل على المستخدمين الوصول إلى جميع تطبيقاتهم مع الحفاظ على ضوابط أمنية صارمة.'
    },
    howItWorks: {
      title: { en: 'How It Works', ar: 'كيف يعمل' },
      content: { 
        en: 'SSO works by authenticating users once and then providing secure access to all connected applications without requiring additional logins:',
        ar: 'يعمل SSO من خلال مصادقة المستخدمين مرة واحدة ثم توفير وصول آمن إلى جميع التطبيقات المتصلة دون الحاجة إلى عمليات تسجيل دخول إضافية:'
      },
      points: [
        { 
          title: { en: 'Centralized Authentication', ar: 'المصادقة المركزية' },
          description: { 
            en: 'Users log in once through a secure authentication portal.',
            ar: 'يسجل المستخدمون الدخول مرة واحدة من خلال بوابة مصادقة آمنة.'
          }
        },
        { 
          title: { en: 'Token-Based Access', ar: 'الوصول القائم على الرموز' },
          description: { 
            en: 'After authentication, secure tokens are issued to grant access to applications.',
            ar: 'بعد المصادقة، يتم إصدار رموز آمنة لمنح الوصول إلى التطبيقات.'
          }
        },
        { 
          title: { en: 'Protocol Support', ar: 'دعم البروتوكولات' },
          description: { 
            en: 'We support industry-standard protocols like SAML, OAuth 2.0, and OpenID Connect.',
            ar: 'ندعم البروتوكولات القياسية في الصناعة مثل SAML و OAuth 2.0 و OpenID Connect.'
          }
        },
        { 
          title: { en: 'Seamless Integration', ar: 'التكامل السلس' },
          description: { 
            en: 'Integration with both cloud and on-premise applications.',
            ar: 'التكامل مع التطبيقات السحابية والمحلية.'
          }
        }
      ]
    },
    addingValue: {
      title: { en: 'Service Adding Value', ar: 'قيمة الخدمة' },
      content: { 
        en: 'SSO brings tangible benefits to both users and IT teams:',
        ar: 'يجلب SSO فوائد ملموسة لكل من المستخدمين وفرق تكنولوجيا المعلومات:'
      },
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
      content: { 
        en: 'Our SSO implementation follows a proven methodology:',
        ar: 'يتبع تنفيذ SSO الخاص بنا منهجية مثبتة:'
      },
      steps: [
        { 
          title: { en: 'Discovery & Planning', ar: 'الاكتشاف والتخطيط' },
          description: { 
            en: 'We assess your current application landscape and authentication needs.',
            ar: 'نقيم مشهد التطبيقات الحالي واحتياجات المصادقة لديك.'
          }
        },
        { 
          title: { en: 'Solution Design', ar: 'تصميم الحل' },
          description: { 
            en: 'We design an SSO architecture that fits your infrastructure.',
            ar: 'نصمم بنية SSO تناسب البنية التحتية الخاصة بك.'
          }
        },
        { 
          title: { en: 'Integration & Configuration', ar: 'التكامل والتكوين' },
          description: { 
            en: 'We integrate SSO with your applications and configure authentication policies.',
            ar: 'ندمج SSO مع تطبيقاتك ونكوّن سياسات المصادقة.'
          }
        },
        { 
          title: { en: 'User Testing', ar: 'اختبار المستخدم' },
          description: { 
            en: 'We conduct thorough testing with real users to ensure smooth functionality.',
            ar: 'نجري اختبارًا شاملاً مع مستخدمين حقيقيين لضمان الأداء السلس.'
          }
        },
        { 
          title: { en: 'Rollout & Training', ar: 'الإطلاق والتدريب' },
          description: { 
            en: 'We provide comprehensive training and support during rollout.',
            ar: 'نقدم تدريبًا ودعمًا شاملاً أثناء الإطلاق.'
          }
        },
        { 
          title: { en: 'Continuous Support', ar: 'الدعم المستمر' },
          description: { 
            en: 'We offer ongoing maintenance and optimization of your SSO solution.',
            ar: 'نقدم صيانة وتحسين مستمر لحل SSO الخاص بك.'
          }
        }
      ]
    },
    closingStatement: { 
      en: "Ready to simplify authentication and improve security? Contact New Way today to learn how our SSO solution can transform your user experience.",
      ar: 'هل أنت مستعد لتبسيط المصادقة وتحسين الأمان؟ اتصل بـ New Way اليوم لمعرفة كيف يمكن لحل SSO الخاص بنا تحويل تجربة المستخدم لديك.'
    }
  }
}
