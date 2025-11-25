import { LucideIcon, Shield, Key, Lock, FileText, Smartphone, ShieldCheck } from 'lucide-react'

export interface ServiceData {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
  image: string
  fullDescription: string
  howItWorks: {
    title: string
    content: string
    points: Array<{ title: string; description: string }>
  }
  addingValue: {
    title: string
    content: string
    benefits: string[]
  }
  process: {
    title: string
    content: string
    steps: Array<{ title: string; description: string }>
  }
  closingStatement: string
}

export const servicesData: ServiceData[] = [
  {
    slug: 'identity-access-management',
    icon: Key,
    title: 'Identity & Access Management (IAM)',
    description: "In today's digital landscape, securing access to your critical systems and data is more important than ever. Our IAM solutions provide comprehensive identity governance and access control.",
    features: [
      'Centralized user identity management',
      'Role-based access control (RBAC)',
      'Automated provisioning and deprovisioning',
      'Compliance reporting and audit trails',
      'Integration with existing directories',
    ],
    gradient: 'from-[#50af9b] to-[#3b9482]',
    image: '/Green-image.png',
    fullDescription: "Our Identity & Access Management (IAM) services help businesses control who can access what, ensuring the right people have the right access at the right time. With a comprehensive IAM solution, you can effectively manage user identities, secure data, and enhance compliance across your entire organization.\n\nAt New Way, we offer a suite of IAM services, including Privilege Access Management (PAM), Multi-Factor Authentication (MFA), Single Sign-On (SSO), and Log Management. These services work together to provide a cohesive approach to identity security, reducing risk while improving productivity and user experience.",
    howItWorks: {
      title: 'How It Works',
      content: "Our IAM solution integrates with your existing infrastructure, providing a centralized way to manage users and their access. We start by assessing your current environment and understanding your needs. Then, we design a tailored IAM strategy that includes:",
      points: [
        { title: 'IAM', description: 'We ensure that users are properly authenticated and authorized based on their roles and responsibilities.' },
        { title: 'PAM', description: 'We secure access to sensitive systems by controlling and monitoring privileged accounts.' },
        { title: 'MFA', description: 'We add an extra layer of security by requiring multiple forms of verification before granting access.' },
        { title: 'SSO', description: 'We simplify the login process by enabling users to access multiple applications with just one set of credentials.' },
        { title: 'Log Management', description: 'We keep detailed records of access events, which help with compliance and troubleshooting.' },
      ],
    },
    addingValue: {
      title: 'Service Adding Value',
      content: "Implementing an IAM system isn't just about securing access; it's about enhancing the overall efficiency and security posture of your business. With New Way's IAM solutions, you can:",
      benefits: [
        'Improve compliance with regulations and security standards',
        'Reduce the risk of unauthorized access and data breaches',
        'Streamline the user experience with Single Sign-On',
        'Ensure continuous monitoring of user activities with log management',
        'Simplify access controls for employees, contractors, and partners',
      ],
    },
    process: {
      title: 'Process',
      content: 'Our IAM service follows a clear, systematic process to ensure everything is set up correctly and aligned with your security goals:',
      steps: [
        { title: 'Initial Consultation & Assessment', description: 'We begin by understanding your organization\'s needs and current IT environment.' },
        { title: 'Tailored Strategy Design', description: 'We craft a strategy that aligns with your specific requirements and objectives.' },
        { title: 'Implementation & Configuration', description: 'Our team sets up the IAM system, integrating it with your existing infrastructure and security tools.' },
        { title: 'Testing & Validation', description: 'We thoroughly test the solution to ensure that everything is working as expected and that your security policies are in place.' },
        { title: 'Training & Knowledge Transfer', description: 'We provide hands-on training to your team so they can manage and maintain the system effectively.' },
        { title: 'Ongoing Support & Monitoring', description: 'After implementation, we offer continuous support to ensure your IAM system is always running smoothly, including periodic health checks and troubleshooting as needed.' },
      ],
    },
    closingStatement: "At New Way, we aim to make securing your digital infrastructure simple and effective. If you're looking for a solution that helps protect your business while streamlining the access process, we're here to help. Reach out today to learn how we can make your IAM system work better for you.",
  },
  {
    slug: 'single-sign-on',
    icon: Shield,
    title: 'Single Sign-On (SSO)',
    description: 'Managing multiple passwords for different applications can be a hassle for users and a security risk for organizations. Our SSO solutions streamline authentication while enhancing security.',
    features: [
      'One-click access to all applications',
      'Reduced password fatigue',
      'Enhanced security with centralized authentication',
      'Support for SAML, OAuth, and OpenID Connect',
      'Seamless integration with cloud and on-premise apps',
    ],
    gradient: 'from-[#60c9b3] to-[#50af9b]',
    image: '/Green-image.png',
    fullDescription: "Our Single Sign-On (SSO) solution eliminates the need for users to remember multiple passwords while significantly improving your organization's security posture. By providing a single authentication point, we make it easier for users to access all their applications while maintaining strict security controls.",
    howItWorks: {
      title: 'How It Works',
      content: 'SSO works by authenticating users once and then providing secure access to all connected applications without requiring additional logins:',
      points: [
        { title: 'Centralized Authentication', description: 'Users log in once through a secure authentication portal.' },
        { title: 'Token-Based Access', description: 'After authentication, secure tokens are issued to grant access to applications.' },
        { title: 'Protocol Support', description: 'We support industry-standard protocols like SAML, OAuth 2.0, and OpenID Connect.' },
        { title: 'Seamless Integration', description: 'Integration with both cloud and on-premise applications.' },
      ],
    },
    addingValue: {
      title: 'Service Adding Value',
      content: 'SSO brings tangible benefits to both users and IT teams:',
      benefits: [
        'Reduced password fatigue and help desk calls',
        'Improved user productivity with faster access',
        'Enhanced security with centralized authentication',
        'Better compliance with security policies',
        'Simplified user onboarding and offboarding',
      ],
    },
    process: {
      title: 'Implementation Process',
      content: 'Our SSO implementation follows a proven methodology:',
      steps: [
        { title: 'Discovery & Planning', description: 'We assess your current application landscape and authentication needs.' },
        { title: 'Solution Design', description: 'We design an SSO architecture that fits your infrastructure.' },
        { title: 'Integration & Configuration', description: 'We integrate SSO with your applications and configure authentication policies.' },
        { title: 'User Testing', description: 'We conduct thorough testing with real users to ensure smooth functionality.' },
        { title: 'Rollout & Training', description: 'We provide comprehensive training and support during rollout.' },
        { title: 'Continuous Support', description: 'We offer ongoing maintenance and optimization of your SSO solution.' },
      ],
    },
    closingStatement: "Ready to simplify authentication and improve security? Contact New Way today to learn how our SSO solution can transform your user experience.",
  },
  {
    slug: 'privilege-access-management',
    icon: Lock,
    title: 'Privilege Access Management (PAM)',
    description: "Securing access to sensitive systems and data is critical in today's cybersecurity landscape. Our PAM solutions protect privileged accounts and prevent unauthorized access to critical resources.",
    features: [
      'Secure privileged account management',
      'Session monitoring and recording',
      'Just-in-time access provisioning',
      'Automated password rotation',
      'Comprehensive audit and compliance reporting',
    ],
    gradient: 'from-[#70d9c3] to-[#60c9b3]',
    image: '/Green-image.png',
    fullDescription: "Privileged accounts are the keys to your kingdom. Our PAM solution ensures these critical accounts are secured, monitored, and audited. We help you control who has access to what, when, and why, reducing the risk of insider threats and external attacks.",
    howItWorks: {
      title: 'How It Works',
      content: 'Our PAM solution provides comprehensive control over privileged access:',
      points: [
        { title: 'Account Discovery', description: 'We identify all privileged accounts across your infrastructure.' },
        { title: 'Secure Vault', description: 'Privileged credentials are stored in an encrypted vault with strict access controls.' },
        { title: 'Access Workflow', description: 'Requests for privileged access go through approval workflows.' },
        { title: 'Session Recording', description: 'All privileged sessions are recorded for audit and compliance.' },
        { title: 'Password Rotation', description: 'Automatic password rotation ensures credentials are always changing.' },
      ],
    },
    addingValue: {
      title: 'Service Adding Value',
      content: 'PAM is essential for protecting your most critical assets:',
      benefits: [
        'Prevent unauthorized access to sensitive systems',
        'Meet regulatory compliance requirements',
        'Reduce the risk of credential theft',
        'Gain complete visibility into privileged activities',
        'Respond quickly to security incidents',
      ],
    },
    process: {
      title: 'Implementation Process',
      content: 'We follow a structured approach to PAM implementation:',
      steps: [
        { title: 'Privileged Account Discovery', description: 'We identify all privileged accounts in your environment.' },
        { title: 'Risk Assessment', description: 'We evaluate the risk associated with each privileged account.' },
        { title: 'Solution Deployment', description: 'We deploy and configure the PAM solution.' },
        { title: 'Policy Configuration', description: 'We set up access policies and approval workflows.' },
        { title: 'Integration', description: 'We integrate PAM with your existing security infrastructure.' },
        { title: 'Training & Support', description: 'We train your team and provide ongoing support.' },
      ],
    },
    closingStatement: "Protect your most critical assets with New Way's PAM solution. Contact us today to secure your privileged accounts.",
  },
  {
    slug: 'log-management',
    icon: FileText,
    title: 'Log Management',
    description: "Managing logs is a critical aspect of any organization's cybersecurity and compliance strategy. Our log management solutions provide centralized collection, analysis, and retention of log data.",
    features: [
      'Centralized log collection and storage',
      'Real-time log analysis and alerting',
      'Advanced search and filtering capabilities',
      'Compliance-ready retention policies',
      'Integration with SIEM platforms',
    ],
    gradient: 'from-[#50af9b] to-[#70d9c3]',
    image: '/Green-image.png',
    fullDescription: "Effective log management is crucial for security monitoring, troubleshooting, and compliance. Our solution provides a centralized platform for collecting, analyzing, and retaining log data from all your systems, making it easy to detect threats, investigate incidents, and meet regulatory requirements.",
    howItWorks: {
      title: 'How It Works',
      content: 'Our log management solution provides end-to-end log lifecycle management:',
      points: [
        { title: 'Collection', description: 'We collect logs from all sources including servers, applications, and network devices.' },
        { title: 'Normalization', description: 'Logs are normalized into a standard format for easier analysis.' },
        { title: 'Analysis', description: 'Real-time analysis identifies threats and anomalies.' },
        { title: 'Storage', description: 'Logs are securely stored with appropriate retention policies.' },
        { title: 'Reporting', description: 'Generate compliance reports and security dashboards.' },
      ],
    },
    addingValue: {
      title: 'Service Adding Value',
      content: 'Log management provides essential capabilities for security and operations:',
      benefits: [
        'Detect security threats in real-time',
        'Meet compliance requirements for log retention',
        'Accelerate incident investigation and response',
        'Gain operational insights from log data',
        'Reduce storage costs with intelligent retention',
      ],
    },
    process: {
      title: 'Implementation Process',
      content: 'Our log management implementation is straightforward:',
      steps: [
        { title: 'Source Identification', description: 'We identify all log sources across your environment.' },
        { title: 'Collection Setup', description: 'We configure log collection agents and forwarders.' },
        { title: 'Parsing & Normalization', description: 'We set up parsing rules for your specific log formats.' },
        { title: 'Alert Configuration', description: 'We configure alerts for security events and anomalies.' },
        { title: 'Dashboard Creation', description: 'We create custom dashboards for monitoring and reporting.' },
        { title: 'Training & Handover', description: 'We train your team on using the log management platform.' },
      ],
    },
    closingStatement: "Get complete visibility into your IT environment with New Way's log management solution. Contact us to get started.",
  },
  {
    slug: 'multi-factor-authentication',
    icon: Smartphone,
    title: 'Multi-Factor Authentication (MFA)',
    description: "In today's digital world, passwords alone are no longer enough to secure sensitive data and systems. Our MFA solutions add an extra layer of security to protect against unauthorized access.",
    features: [
      'Multiple authentication methods (SMS, email, app)',
      'Biometric authentication support',
      'Adaptive authentication based on risk',
      'Easy user enrollment and management',
      'Integration with existing systems',
    ],
    gradient: 'from-[#3b9482] to-[#60c9b3]',
    image: '/Green-image.png',
    fullDescription: "Multi-Factor Authentication adds critical security layers beyond just passwords. Our MFA solution supports various authentication methods including mobile apps, SMS, email, and biometrics, providing flexibility while maintaining strong security.",
    howItWorks: {
      title: 'How It Works',
      content: 'MFA requires users to provide multiple forms of verification:',
      points: [
        { title: 'Primary Authentication', description: 'Users enter their username and password as the first factor.' },
        { title: 'Secondary Verification', description: 'Users provide a second factor like a code from an app or SMS.' },
        { title: 'Risk Assessment', description: 'The system assesses the risk level and may require additional verification.' },
        { title: 'Access Grant', description: 'Once all factors are verified, access is granted.' },
      ],
    },
    addingValue: {
      title: 'Service Adding Value',
      content: 'MFA significantly enhances your security posture:',
      benefits: [
        'Prevent unauthorized access even if passwords are compromised',
        'Meet compliance requirements for strong authentication',
        'Protect against phishing and credential stuffing attacks',
        'Provide flexible authentication options for users',
        'Gain visibility into authentication attempts',
      ],
    },
    process: {
      title: 'Implementation Process',
      content: 'Our MFA implementation is user-friendly and secure:',
      steps: [
        { title: 'Requirements Analysis', description: 'We understand your security requirements and user needs.' },
        { title: 'Solution Selection', description: 'We help you choose the right MFA methods for your organization.' },
        { title: 'Integration', description: 'We integrate MFA with your applications and systems.' },
        { title: 'Policy Configuration', description: 'We configure authentication policies and rules.' },
        { title: 'User Enrollment', description: 'We facilitate smooth user enrollment and registration.' },
        { title: 'Ongoing Support', description: 'We provide continuous support and optimization.' },
      ],
    },
    closingStatement: "Strengthen your security with New Way's MFA solution. Contact us today to add an extra layer of protection.",
  },
  {
    slug: 'cybersecurity',
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'In an age where cyber threats are constantly evolving, ensuring the protection of your digital assets is more important than ever. Our comprehensive cybersecurity services safeguard your organization.',
    features: [
      'Threat detection and response',
      'Vulnerability assessments and penetration testing',
      'Security awareness training',
      '24/7 security monitoring',
      'Incident response and recovery',
    ],
    gradient: 'from-[#60c9b3] to-[#3b9482]',
    image: '/Green-image.png',
    fullDescription: "Our comprehensive cybersecurity services provide end-to-end protection for your organization. From threat detection to incident response, we help you build a robust security posture that adapts to evolving threats.",
    howItWorks: {
      title: 'How It Works',
      content: 'Our cybersecurity approach is multi-layered and proactive:',
      points: [
        { title: 'Continuous Monitoring', description: '24/7 monitoring of your networks, systems, and applications for threats.' },
        { title: 'Threat Intelligence', description: 'We leverage global threat intelligence to stay ahead of emerging threats.' },
        { title: 'Vulnerability Management', description: 'Regular assessments identify and remediate vulnerabilities.' },
        { title: 'Incident Response', description: 'Rapid response to security incidents minimizes impact.' },
        { title: 'Security Training', description: 'We educate your team to recognize and prevent security threats.' },
      ],
    },
    addingValue: {
      title: 'Service Adding Value',
      content: 'Our cybersecurity services provide comprehensive protection:',
      benefits: [
        'Protect against advanced persistent threats',
        'Reduce the risk of data breaches and ransomware',
        'Meet regulatory compliance requirements',
        'Improve your overall security posture',
        'Gain peace of mind with 24/7 monitoring',
      ],
    },
    process: {
      title: 'Implementation Process',
      content: 'We follow a comprehensive approach to cybersecurity:',
      steps: [
        { title: 'Security Assessment', description: 'We assess your current security posture and identify gaps.' },
        { title: 'Strategy Development', description: 'We develop a comprehensive security strategy.' },
        { title: 'Solution Implementation', description: 'We deploy security tools and technologies.' },
        { title: 'Monitoring Setup', description: 'We set up 24/7 security monitoring and alerting.' },
        { title: 'Team Training', description: 'We train your team on security best practices.' },
        { title: 'Continuous Improvement', description: 'We continuously improve your security posture.' },
      ],
    },
    closingStatement: "Protect your organization with New Way's comprehensive cybersecurity services. Contact us today for a security assessment.",
  },
]

