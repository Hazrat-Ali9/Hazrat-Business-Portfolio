export interface ProjectData {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  techIcons: { name: string; color: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  overview: string;
  keyFeatures: string[];
  challenges: string[];
  solutions: string[];
  screenshots: string[];
  demoVideo?: string;
  completionDate: string;
  teamSize: number;
  role: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    description: 'A comprehensive e-commerce platform built with modern technologies, featuring secure payment processing, inventory management, and a powerful admin dashboard for business operations.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis', 'Docker'],
    techIcons: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Stripe', color: '#008CDD' },
      { name: 'AWS', color: '#FF9900' }
    ],
    githubUrl: 'https://github.com/hazrat-ali/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.hazrat-ali.com',
    featured: true,
    category: 'Full Stack',
    overview: 'This e-commerce platform represents a complete solution for online retail businesses. Built with scalability and performance in mind, it handles everything from product catalog management to order processing and customer support.',
    keyFeatures: [
      'Secure user authentication and authorization',
      'Product catalog with advanced search and filtering',
      'Shopping cart and wishlist functionality',
      'Multiple payment gateway integration (Stripe, PayPal)',
      'Real-time inventory management',
      'Order tracking and management system',
      'Admin dashboard with analytics',
      'Email notifications and marketing tools',
      'Mobile-responsive design',
      'SEO optimization'
    ],
    challenges: [
      'Implementing secure payment processing with multiple gateways',
      'Managing complex inventory across multiple warehouses',
      'Ensuring real-time synchronization between frontend and backend',
      'Optimizing database queries for large product catalogs',
      'Implementing efficient caching strategies'
    ],
    solutions: [
      'Used Stripe Connect for secure payment processing with webhook validation',
      'Implemented Redis for caching frequently accessed data',
      'Created a microservices architecture for better scalability',
      'Used database indexing and query optimization techniques',
      'Implemented real-time updates using WebSocket connections'
    ],
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    completionDate: 'March 2024',
    teamSize: 4,
    role: 'Lead Full-Stack Developer'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    shortDescription: 'Collaborative task management with real-time updates and team features.',
    description: 'A powerful task management application designed for teams, featuring real-time collaboration, project tracking, and comprehensive reporting tools.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket', 'PWA'],
    techIcons: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Material-UI', color: '#0081CB' },
      { name: 'WebSocket', color: '#010101' }
    ],
    githubUrl: 'https://github.com/hazrat-ali/task-manager',
    liveUrl: 'https://taskmanager.hazrat-ali.com',
    featured: false,
    category: 'Frontend',
    overview: 'A modern task management solution that helps teams organize, track, and complete projects efficiently. Built with real-time collaboration features and an intuitive user interface.',
    keyFeatures: [
      'Real-time task updates and notifications',
      'Drag-and-drop task organization',
      'Team collaboration and commenting',
      'Project timeline and Gantt charts',
      'File attachments and document sharing',
      'Time tracking and reporting',
      'Custom task labels and priorities',
      'Mobile app with offline support',
      'Integration with popular tools (Slack, Google Drive)',
      'Advanced search and filtering'
    ],
    challenges: [
      'Implementing real-time synchronization across multiple users',
      'Creating an intuitive drag-and-drop interface',
      'Managing offline functionality and data sync',
      'Optimizing performance with large datasets',
      'Ensuring data consistency in real-time updates'
    ],
    solutions: [
      'Used Firebase Realtime Database for instant synchronization',
      'Implemented React DnD for smooth drag-and-drop functionality',
      'Created a robust offline-first architecture with sync queues',
      'Used virtual scrolling for handling large task lists',
      'Implemented optimistic updates with conflict resolution'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    completionDate: 'January 2024',
    teamSize: 3,
    role: 'Frontend Lead Developer'
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics',
    shortDescription: 'Business intelligence dashboard with ML insights and predictive analytics.',
    description: 'An advanced analytics platform that leverages artificial intelligence to provide business insights, predictive analytics, and automated reporting for data-driven decision making.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Docker', 'FastAPI'],
    techIcons: [
      { name: 'Python', color: '#3776AB' },
      { name: 'TensorFlow', color: '#FF6F00' },
      { name: 'React', color: '#61DAFB' },
      { name: 'D3.js', color: '#F68E56' },
      { name: 'Docker', color: '#2496ED' }
    ],
    githubUrl: 'https://github.com/hazrat-ali/ai-analytics',
    liveUrl: 'https://analytics.hazrat-ali.com',
    featured: true,
    category: 'AI/ML',
    overview: 'A cutting-edge analytics platform that combines traditional business intelligence with artificial intelligence to provide deeper insights and predictive capabilities for modern businesses.',
    keyFeatures: [
      'Machine learning-powered insights',
      'Predictive analytics and forecasting',
      'Interactive data visualizations',
      'Automated report generation',
      'Real-time data processing',
      'Custom dashboard creation',
      'Natural language query interface',
      'Anomaly detection and alerts',
      'Multi-source data integration',
      'Export and sharing capabilities'
    ],
    challenges: [
      'Processing large volumes of data in real-time',
      'Creating accurate predictive models',
      'Building intuitive data visualizations',
      'Ensuring data privacy and security',
      'Optimizing ML model performance'
    ],
    solutions: [
      'Implemented distributed computing with Apache Spark',
      'Used ensemble methods for improved prediction accuracy',
      'Created custom D3.js visualizations for complex data',
      'Implemented end-to-end encryption and access controls',
      'Used model optimization techniques and GPU acceleration'
    ],
    screenshots: [
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    completionDate: 'February 2024',
    teamSize: 5,
    role: 'AI/ML Engineer & Technical Lead'
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    shortDescription: 'Secure mobile banking with biometric authentication and real-time transactions.',
    description: 'A comprehensive mobile banking solution featuring advanced security measures, real-time transaction processing, and a user-friendly interface for seamless financial management.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'AWS', 'Biometric API'],
    techIcons: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'JWT', color: '#000000' },
      { name: 'AWS', color: '#FF9900' }
    ],
    githubUrl: 'https://github.com/hazrat-ali/mobile-banking',
    liveUrl: 'https://banking-demo.hazrat-ali.com',
    featured: false,
    category: 'Mobile',
    overview: 'A secure and feature-rich mobile banking application that provides users with complete control over their finances while maintaining the highest security standards.',
    keyFeatures: [
      'Biometric authentication (fingerprint, face ID)',
      'Real-time transaction processing',
      'Account balance and transaction history',
      'Money transfer and bill payments',
      'QR code payments',
      'Investment portfolio tracking',
      'Spending analytics and budgeting',
      'Push notifications for transactions',
      'Multi-language support',
      'Offline transaction queuing'
    ],
    challenges: [
      'Implementing robust security measures',
      'Ensuring real-time transaction processing',
      'Managing offline functionality',
      'Complying with banking regulations',
      'Optimizing performance on various devices'
    ],
    solutions: [
      'Used multi-factor authentication with biometric verification',
      'Implemented real-time APIs with WebSocket connections',
      'Created offline transaction queues with sync mechanisms',
      'Followed PCI DSS compliance standards',
      'Optimized app performance with code splitting and lazy loading'
    ],
    screenshots: [
      'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    completionDate: 'December 2023',
    teamSize: 6,
    role: 'Mobile App Developer'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    shortDescription: 'Scalable cloud setup with automated deployment and monitoring.',
    description: 'A comprehensive cloud infrastructure solution featuring automated deployment pipelines, monitoring systems, and scalable architecture for enterprise applications.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
    techIcons: [
      { name: 'AWS', color: '#FF9900' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Kubernetes', color: '#326CE5' },
      { name: 'Terraform', color: '#623CE4' },
      { name: 'Jenkins', color: '#D33833' }
    ],
    githubUrl: 'https://github.com/hazrat-ali/cloud-infrastructure',
    featured: false,
    category: 'DevOps',
    overview: 'A robust cloud infrastructure solution designed to support enterprise-scale applications with high availability, scalability, and automated operations.',
    keyFeatures: [
      'Infrastructure as Code (IaC) with Terraform',
      'Automated CI/CD pipelines',
      'Container orchestration with Kubernetes',
      'Auto-scaling and load balancing',
      'Comprehensive monitoring and alerting',
      'Backup and disaster recovery',
      'Security scanning and compliance',
      'Cost optimization and resource management',
      'Multi-environment deployment',
      'Blue-green deployment strategies'
    ],
    challenges: [
      'Designing scalable architecture for varying loads',
      'Implementing secure networking and access controls',
      'Managing costs while maintaining performance',
      'Ensuring high availability and disaster recovery',
      'Automating complex deployment processes'
    ],
    solutions: [
      'Used auto-scaling groups and load balancers for dynamic scaling',
      'Implemented VPC with proper subnet segmentation and security groups',
      'Used spot instances and reserved capacity for cost optimization',
      'Created multi-AZ deployments with automated failover',
      'Built comprehensive CI/CD pipelines with automated testing'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    completionDate: 'November 2023',
    teamSize: 3,
    role: 'DevOps Engineer & Cloud Architect'
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    shortDescription: 'Comprehensive social media management with analytics and scheduling.',
    description: 'A powerful social media management platform that enables businesses to manage multiple social accounts, schedule content, and analyze performance from a single dashboard.',
    image: 'https://images.pexels.com/photos/267369/pexels-photo-267369.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js', 'OAuth', 'Redis'],
    techIcons: [
      { name: 'Vue.js', color: '#4FC08D' },
      { name: 'Express', color: '#000000' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Chart.js', color: '#FF6384' },
      { name: 'OAuth', color: '#EB5424' }
    ],
    githubUrl: 'https://github.com/hazrat-ali/social-dashboard',
    liveUrl: 'https://social.hazrat-ali.com',
    featured: false,
    category: 'Full Stack',
    overview: 'A comprehensive social media management solution that streamlines content creation, scheduling, and performance analysis across multiple social platforms.',
    keyFeatures: [
      'Multi-platform social media integration',
      'Content scheduling and automation',
      'Analytics and performance tracking',
      'Team collaboration and approval workflows',
      'Content calendar and planning tools',
      'Hashtag research and suggestions',
      'Competitor analysis and benchmarking',
      'Custom reporting and insights',
      'Bulk content upload and management',
      'Social listening and monitoring'
    ],
    challenges: [
      'Integrating with multiple social media APIs',
      'Managing rate limits and API quotas',
      'Creating unified analytics across platforms',
      'Handling different content formats and requirements',
      'Ensuring reliable content scheduling'
    ],
    solutions: [
      'Built a unified API layer to handle different social platforms',
      'Implemented intelligent rate limiting and queue management',
      'Created standardized metrics and reporting across platforms',
      'Used adapter pattern for handling different content types',
      'Built redundant scheduling system with failure recovery'
    ],
    screenshots: [
      'https://images.pexels.com/photos/267369/pexels-photo-267369.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    completionDate: 'October 2023',
    teamSize: 4,
    role: 'Full-Stack Developer'
  }
];