/**
 * AMN Studios Internationalization (i18n)
 * Bilingual EN/AR support with RTL handling
 */

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      studio: 'Studio',
    },
    
    // Hero Section
    hero: {
      pixelWelcome: 'WELCOME',
      title: 'AMN Studios',
      subtitle: 'Secure-by-Design Software Engineering',
      description: 'We craft premium digital experiences with cybersecurity at the core. Modern engineering meets uncompromising security.',
      cta: 'Explore Our Work',
      ctaSecondary: 'Get in Touch',
    },
    
    // About Section
    about: {
      title: 'Engineered for Excellence',
      subtitle: 'Security First. Quality Always.',
      description: 'At AMN Studios, we believe security isn\'t an afterthought—it\'s the foundation. Every line of code, every design decision, every user interaction is crafted with security-first principles.',
      mission: 'Our mission is to empower businesses with software that doesn\'t compromise between functionality and security.',
      values: [
        {
          title: 'Secure by Design',
          description: 'Security woven into every layer, from architecture to deployment.',
        },
        {
          title: 'Modern Engineering',
          description: 'Cutting-edge tech stack with performance and scalability in mind.',
        },
        {
          title: 'Educational Impact',
          description: 'We build tools that educate and empower users to stay secure.',
        },
      ],
    },
    
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Full-Spectrum Digital Solutions',
      items: [
        {
          title: 'Secure Web Applications',
          description: 'Enterprise-grade web apps with authentication, encryption, and compliance built-in.',
          features: ['Penetration tested', 'OWASP compliant', 'Zero-trust architecture'],
        },
        {
          title: 'Cybersecurity Platforms',
          description: 'Custom security dashboards, threat monitoring, and incident response tools.',
          features: ['Real-time monitoring', 'Threat intelligence', 'Automated responses'],
        },
        {
          title: 'Educational Tools',
          description: 'Interactive platforms that teach security concepts through practice.',
          features: ['Gamified learning', 'CTF challenges', 'Progress tracking'],
        },
        {
          title: 'UI/UX Design',
          description: 'Premium interfaces that balance aesthetics with usability and accessibility.',
          features: ['Design systems', 'Prototyping', 'User testing'],
        },
      ],
    },
    
    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'Showcasing Our Craft',
      viewAll: 'View All Projects',
      viewProject: 'View Details',
      filters: {
        all: 'All',
        website: 'Websites',
        webapp: 'Web Apps',
        security: 'Security',
        education: 'Education',
      },
      search: 'Search projects...',
      sort: {
        label: 'Sort by',
        newest: 'Newest',
        popular: 'Popular',
        security: 'Security Focus',
        ui: 'UI Excellence',
      },
      tags: {
        secure: 'Secure',
        dashboard: 'Dashboard',
        education: 'Education',
        ui: 'UI',
        opensource: 'Open Source',
        api: 'API',
      },
      modal: {
        overview: 'Overview',
        techStack: 'Tech Stack',
        role: 'Our Role',
        features: 'Key Features',
        visitLive: 'Visit Live Site',
        viewCode: 'View Code',
        close: 'Close',
      },
    },
    
    // Process Section
    process: {
      title: 'Our Process',
      subtitle: 'From Concept to Deployment',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'Deep-dive into your requirements, threat modeling, and architecture design.',
        },
        {
          title: 'Secure Development',
          description: 'Agile sprints with continuous security testing and code reviews.',
        },
        {
          title: 'Rigorous Testing',
          description: 'Penetration testing, vulnerability scans, and performance optimization.',
        },
        {
          title: 'Deployment & Support',
          description: 'Secure deployment pipelines, monitoring setup, and ongoing maintenance.',
        },
      ],
    },
    
    // Testimonials Section
    testimonials: {
      title: 'What Clients Say',
      subtitle: 'Trusted by Forward-Thinking Teams',
    },
    
    // CTA Section
    cta: {
      title: 'Ready to Build Something Secure?',
      subtitle: 'Let\'s discuss your next project and how we can help you achieve your goals.',
      button: 'Start a Conversation',
    },
    
    // Contact Page
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s Start a Conversation',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      social: {
        title: 'Connect With Us',
        email: 'Email',
        github: 'GitHub',
        instagram: 'Instagram',
      },
      info: {
        title: 'Information',
        location: 'Remote / Global',
        availability: 'Available for projects',
      },
    },
    
    // Studio Page
    studio: {
      title: 'About AMN Studios',
      subtitle: 'Where Security Meets Craft',
      story: {
        title: 'Our Story',
        content: 'Founded with a vision to bridge the gap between elegant design and robust security, AMN Studios specializes in creating digital experiences that users trust. We believe the best software is invisible—it just works, securely.',
      },
      mission: {
        title: 'Mission',
        content: 'Empower businesses and individuals with secure, modern, and accessible digital tools.',
      },
      stats: [
        { label: 'Projects Delivered', value: '24+' },
        { label: 'Lines of Secure Code', value: '500K+' },
        { label: 'Security Audits', value: '100%' },
        { label: 'Client Satisfaction', value: '98%' },
      ],
    },
    
    // Footer
    footer: {
      tagline: 'Secure-by-Design Software Engineering',
      rights: 'All rights reserved.',
      backToTop: 'Back to Top',
    },
    
    // Misc
    loading: 'Loading...',
    close: 'Close',
    menu: 'Menu',
    language: 'Language',
  },
  
  ar: {
    // Navigation - التنقل
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      contact: 'تواصل معنا',
      studio: 'عن الاستوديو',
    },
    
    // Hero Section - القسم البطل
    hero: {
      pixelWelcome: 'مرحباً',
      title: 'استوديو AMN',
      subtitle: 'هندسة برمجيات آمنة بالتصميم',
      description: 'نصنع تجارب رقمية متميزة مع الأمان السيبراني في الصميم. هندسة حديثة تلتقي بأمان لا يتزعزع.',
      cta: 'استكشف أعمالنا',
      ctaSecondary: 'تواصل معنا',
    },
    
    // About Section - عن الاستوديو
    about: {
      title: 'مصممة للتميز',
      subtitle: 'الأمان أولاً. الجودة دائماً.',
      description: 'في استوديو AMN، نؤمن بأن الأمان ليس فكرة لاحقة—إنه الأساس. كل سطر من الكود، كل قرار تصميمي، كل تفاعل للمستخدم مصنوع بمبادئ الأمان أولاً.',
      mission: 'مهمتنا هي تمكين الشركات ببرمجيات لا تساوم بين الوظائف والأمان.',
      values: [
        {
          title: 'آمن بالتصميم',
          description: 'الأمان منسوج في كل طبقة، من الهندسة المعمارية إلى النشر.',
        },
        {
          title: 'هندسة حديثة',
          description: 'مجموعة تقنية متطورة مع الأداء وقابلية التوسع في الاعتبار.',
        },
        {
          title: 'تأثير تعليمي',
          description: 'نبني أدوات تعلّم وتمكّن المستخدمين للبقاء آمنين.',
        },
      ],
    },
    
    // Services Section - الخدمات
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول رقمية شاملة',
      items: [
        {
          title: 'تطبيقات ويب آمنة',
          description: 'تطبيقات ويب للمؤسسات مع المصادقة والتشفير والامتثال مدمجة.',
          features: ['مختبرة للاختراق', 'متوافقة مع OWASP', 'معمارية عدم الثقة'],
        },
        {
          title: 'منصات الأمن السيبراني',
          description: 'لوحات أمان مخصصة، مراقبة التهديدات، وأدوات الاستجابة للحوادث.',
          features: ['مراقبة فورية', 'استخبارات التهديدات', 'استجابات تلقائية'],
        },
        {
          title: 'أدوات تعليمية',
          description: 'منصات تفاعلية تعلّم مفاهيم الأمان من خلال الممارسة.',
          features: ['تعلم باللعب', 'تحديات CTF', 'تتبع التقدم'],
        },
        {
          title: 'تصميم UI/UX',
          description: 'واجهات متميزة توازن بين الجماليات وسهولة الاستخدام وإمكانية الوصول.',
          features: ['أنظمة التصميم', 'النماذج الأولية', 'اختبار المستخدم'],
        },
      ],
    },
    
    // Projects Section - المشاريع
    projects: {
      title: 'المشاريع المميزة',
      subtitle: 'عرض حرفتنا',
      viewAll: 'عرض جميع المشاريع',
      viewProject: 'عرض التفاصيل',
      filters: {
        all: 'الكل',
        website: 'مواقع',
        webapp: 'تطبيقات ويب',
        security: 'أمان',
        education: 'تعليم',
      },
      search: 'بحث عن المشاريع...',
      sort: {
        label: 'ترتيب حسب',
        newest: 'الأحدث',
        popular: 'الأكثر شعبية',
        security: 'تركيز الأمان',
        ui: 'تميز الواجهة',
      },
      tags: {
        secure: 'آمن',
        dashboard: 'لوحة تحكم',
        education: 'تعليم',
        ui: 'واجهة',
        opensource: 'مفتوح المصدر',
        api: 'واجهة برمجية',
      },
      modal: {
        overview: 'نظرة عامة',
        techStack: 'المجموعة التقنية',
        role: 'دورنا',
        features: 'الميزات الرئيسية',
        visitLive: 'زيارة الموقع',
        viewCode: 'عرض الكود',
        close: 'إغلاق',
      },
    },
    
    // Process Section - العملية
    process: {
      title: 'عمليتنا',
      subtitle: 'من المفهوم إلى النشر',
      steps: [
        {
          title: 'الاكتشاف والتخطيط',
          description: 'غوص عميق في متطلباتك، نمذجة التهديدات، وتصميم البنية المعمارية.',
        },
        {
          title: 'التطوير الآمن',
          description: 'سباقات سريعة مع اختبار أمان مستمر ومراجعات الكود.',
        },
        {
          title: 'اختبار صارم',
          description: 'اختبار الاختراق، فحص الثغرات، وتحسين الأداء.',
        },
        {
          title: 'النشر والدعم',
          description: 'خطوط نشر آمنة، إعداد المراقبة، والصيانة المستمرة.',
        },
      ],
    },
    
    // Testimonials Section - الشهادات
    testimonials: {
      title: 'ما يقوله العملاء',
      subtitle: 'موثوق من قبل الفرق المستقبلية',
    },
    
    // CTA Section - دعوة للعمل
    cta: {
      title: 'مستعد لبناء شيء آمن؟',
      subtitle: 'دعنا نناقش مشروعك القادم وكيف يمكننا مساعدتك في تحقيق أهدافك.',
      button: 'ابدأ محادثة',
    },
    
    // Contact Page - صفحة التواصل
    contact: {
      title: 'تواصل معنا',
      subtitle: 'لنبدأ محادثة',
      form: {
        name: 'اسمك',
        email: 'عنوان البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال...',
        success: 'تم إرسال الرسالة بنجاح!',
        error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      },
      social: {
        title: 'تواصل معنا',
        email: 'البريد الإلكتروني',
        github: 'GitHub',
        instagram: 'إنستغرام',
      },
      info: {
        title: 'معلومات',
        location: 'عن بُعد / عالمي',
        availability: 'متاح للمشاريع',
      },
    },
    
    // Studio Page - صفحة الاستوديو
    studio: {
      title: 'عن استوديو AMN',
      subtitle: 'حيث يلتقي الأمان بالحرفة',
      story: {
        title: 'قصتنا',
        content: 'تأسست برؤية لسد الفجوة بين التصميم الأنيق والأمان القوي، يتخصص استوديو AMN في إنشاء تجارب رقمية يثق بها المستخدمون. نؤمن أن أفضل برمجيات غير مرئية—إنها تعمل فقط، بأمان.',
      },
      mission: {
        title: 'المهمة',
        content: 'تمكين الشركات والأفراد بأدوات رقمية آمنة وحديثة وسهلة الوصول.',
      },
      stats: [
        { label: 'المشاريع المسلمة', value: '+24' },
        { label: 'أسطر كود آمن', value: '+500K' },
        { label: 'عمليات التدقيق الأمني', value: '100%' },
        { label: 'رضا العملاء', value: '98%' },
      ],
    },
    
    // Footer - تذييل
    footer: {
      tagline: 'هندسة برمجيات آمنة بالتصميم',
      rights: 'جميع الحقوق محفوظة.',
      backToTop: 'العودة للأعلى',
    },
    
    // Misc - متنوع
    loading: 'جارٍ التحميل...',
    close: 'إغلاق',
    menu: 'القائمة',
    language: 'اللغة',
  },
};

export function useTranslation(language: Language) {
  return translations[language];
}
