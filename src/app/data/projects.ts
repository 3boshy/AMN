/**
 * AMN Studios Project Data
 * Real, believable project descriptions for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  type: 'website' | 'webapp' | 'both';
  category: 'security' | 'education' | 'dashboard' | 'platform';
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  techStack: string[];
  role: string;
  links: {
    live?: string;
    github?: string;
  };
  year: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'secureauth-platform',
    title: 'SecureAuth Platform',
    type: 'webapp',
    category: 'security',
    tags: ['Secure', 'Dashboard', 'API'],
    description: 'Enterprise authentication & authorization platform with zero-trust architecture.',
    longDescription: 'A comprehensive identity and access management (IAM) solution designed for modern enterprises. Features multi-factor authentication, biometric login, session management, and real-time security analytics. Built with a zero-trust security model, ensuring every request is verified.',
    image: 'gradient-1',
    features: [
      'Multi-factor authentication (MFA)',
      'Biometric authentication support',
      'Role-based access control (RBAC)',
      'Real-time threat detection',
      'Audit logging & compliance reports',
      'API-first architecture',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS Cognito', 'WebAuthn'],
    role: 'Full-stack development, security architecture, UI/UX design',
    links: {
      live: '#',
      github: '#',
    },
    year: 2025,
    featured: true,
  },
  {
    id: 'cyberlearn-academy',
    title: 'CyberLearn Academy',
    type: 'both',
    category: 'education',
    tags: ['Education', 'UI', 'Secure'],
    description: 'Interactive cybersecurity training platform with gamified challenges and CTF labs.',
    longDescription: 'An immersive learning platform that teaches cybersecurity through hands-on practice. Students engage with real-world scenarios in isolated sandbox environments, complete capture-the-flag challenges, and track their progress through a comprehensive skill tree.',
    image: 'gradient-2',
    features: [
      'Interactive coding sandboxes',
      'CTF challenge library (100+ labs)',
      'Progress tracking & skill trees',
      'Peer leaderboards',
      'Certificate generation',
      'Mentor support system',
    ],
    techStack: ['React', 'TypeScript', 'Docker', 'Kubernetes', 'Python', 'Flask'],
    role: 'Platform architecture, frontend development, challenge design',
    links: {
      live: '#',
    },
    year: 2024,
    featured: true,
  },
  {
    id: 'sentinel-dashboard',
    title: 'Sentinel Security Dashboard',
    type: 'webapp',
    category: 'dashboard',
    tags: ['Dashboard', 'Secure', 'API'],
    description: 'Real-time security monitoring dashboard for threat intelligence and incident response.',
    longDescription: 'A powerful SOC (Security Operations Center) dashboard that aggregates data from multiple security tools, provides real-time threat intelligence, and enables rapid incident response. Features customizable widgets, alerting, and automated playbooks.',
    image: 'gradient-3',
    features: [
      'Real-time threat monitoring',
      'Customizable widget system',
      'Automated alert workflows',
      'Incident response playbooks',
      'Integration with SIEM tools',
      'Dark mode optimized UI',
    ],
    techStack: ['React', 'D3.js', 'Elasticsearch', 'Kibana', 'Python', 'FastAPI'],
    role: 'Frontend development, data visualization, UX design',
    links: {
      github: '#',
    },
    year: 2025,
    featured: true,
  },
  {
    id: 'vaultpass-manager',
    title: 'VaultPass Manager',
    type: 'webapp',
    category: 'security',
    tags: ['Secure', 'UI', 'Open Source'],
    description: 'Open-source password manager with end-to-end encryption and zero-knowledge architecture.',
    longDescription: 'A privacy-first password manager where all encryption happens client-side. The server never sees your master password or decrypted vault data. Features password generation, breach monitoring, secure sharing, and cross-device sync.',
    image: 'gradient-4',
    features: [
      'AES-256 encryption',
      'Zero-knowledge architecture',
      'Password health checker',
      'Breach monitoring',
      'Secure password sharing',
      'Browser extension support',
    ],
    techStack: ['React', 'WebCrypto API', 'IndexedDB', 'Node.js', 'MongoDB'],
    role: 'Full-stack development, cryptography implementation, security audit',
    links: {
      live: '#',
      github: '#',
    },
    year: 2024,
    featured: false,
  },
  {
    id: 'phishguard-analyzer',
    title: 'PhishGuard Analyzer',
    type: 'webapp',
    category: 'security',
    tags: ['Secure', 'Dashboard', 'API'],
    description: 'AI-powered phishing detection and email security analysis tool.',
    longDescription: 'An intelligent system that analyzes emails, URLs, and attachments for phishing indicators. Uses machine learning models trained on millions of phishing attempts to provide real-time risk scores and detailed threat reports.',
    image: 'gradient-5',
    features: [
      'AI-powered threat detection',
      'URL reputation analysis',
      'Email header inspection',
      'Attachment sandboxing',
      'Risk scoring system',
      'Export detailed reports',
    ],
    techStack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL'],
    role: 'Frontend development, API integration, UI/UX design',
    links: {
      live: '#',
    },
    year: 2024,
    featured: false,
  },
  {
    id: 'codeaudit-pro',
    title: 'CodeAudit Pro',
    type: 'webapp',
    category: 'security',
    tags: ['Dashboard', 'Secure', 'API'],
    description: 'Automated code security scanner with SAST/DAST capabilities for CI/CD pipelines.',
    longDescription: 'A comprehensive code security platform that integrates into development workflows. Performs static and dynamic analysis, identifies vulnerabilities according to OWASP standards, and provides actionable remediation guidance.',
    image: 'gradient-6',
    features: [
      'Static code analysis (SAST)',
      'Dynamic testing (DAST)',
      'Dependency vulnerability scan',
      'OWASP Top 10 detection',
      'CI/CD integration',
      'Developer-friendly reports',
    ],
    techStack: ['React', 'TypeScript', 'Go', 'Docker', 'GitHub Actions', 'SonarQube'],
    role: 'Platform development, integration engineering, documentation',
    links: {
      github: '#',
    },
    year: 2025,
    featured: false,
  },
  {
    id: 'incidentflow-platform',
    title: 'IncidentFlow Platform',
    type: 'webapp',
    category: 'dashboard',
    tags: ['Dashboard', 'Secure', 'UI'],
    description: 'Incident management and response coordination platform for security teams.',
    longDescription: 'A collaborative platform designed for security incident responders. Manage incidents from detection to resolution with built-in playbooks, communication tools, evidence collection, and post-mortem analysis.',
    image: 'gradient-1',
    features: [
      'Incident timeline tracking',
      'Automated playbook execution',
      'Team collaboration tools',
      'Evidence chain-of-custody',
      'Integration with Slack/Teams',
      'Post-incident reporting',
    ],
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS Lambda'],
    role: 'Full-stack development, real-time features, UX design',
    links: {
      live: '#',
    },
    year: 2024,
    featured: false,
  },
  {
    id: 'cryptolab-playground',
    title: 'CryptoLab Playground',
    type: 'webapp',
    category: 'education',
    tags: ['Education', 'UI', 'Open Source'],
    description: 'Interactive cryptography learning environment with visual algorithm demonstrations.',
    longDescription: 'An educational platform where students can experiment with cryptographic algorithms, see visual representations of encryption processes, and understand the mathematics behind modern cryptography.',
    image: 'gradient-2',
    features: [
      'Interactive algorithm visualizations',
      'Step-by-step encryption demos',
      'Key generation tools',
      'Hash function playground',
      'Challenge problems',
      'Algorithm comparison',
    ],
    techStack: ['React', 'TypeScript', 'D3.js', 'WebAssembly'],
    role: 'Frontend development, algorithm visualization, content creation',
    links: {
      live: '#',
      github: '#',
    },
    year: 2024,
    featured: false,
  },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category || p.tags.includes(category));
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function sortProjects(projectList: Project[], sortBy: 'newest' | 'popular' | 'security' | 'ui'): Project[] {
  const sorted = [...projectList];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.year - a.year);
    case 'security':
      return sorted.sort((a, b) => {
        const aScore = a.tags.includes('Secure') ? 1 : 0;
        const bScore = b.tags.includes('Secure') ? 1 : 0;
        return bScore - aScore;
      });
    case 'ui':
      return sorted.sort((a, b) => {
        const aScore = a.tags.includes('UI') ? 1 : 0;
        const bScore = b.tags.includes('UI') ? 1 : 0;
        return bScore - aScore;
      });
    case 'popular':
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}
