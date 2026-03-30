// ─── Projects ─────────────────────────────────────────────────────────────────
export const Projects = [
  {
    Title: 'Bionext – Corporate Website Development',
    Link: 'https://www.bionext.pk/',
    Description:
      'Designed and developed the Bionext corporate website with a modern, responsive UI and optimized performance.',
    Highlights: [
      'Built responsive layouts for desktop and mobile',
      'Customized UI components and navigation structure',
      'Implemented dynamic content management',
      'Optimized performance and SEO structure',
      'Integrated contact forms and lead capture functionality',
      'Managed domain configuration and hosting setup',
    ],
    Technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO'],
  },
  {
    Title: 'End-to-End Zoho CRM & Zoho Books → Odoo ERP Integration',
    Description:
      'Developed a complete end-to-end integration between Zoho (CRM & Books) and Odoo ERP to automate customer, product, and sales order synchronization.',
    Highlights: [
      'Automated customer creation and updates from Zoho to Odoo',
      'Synced product catalog and pricing data',
      'Imported sales orders from Zoho into Odoo Sales module',
      'Automated invoice and payment synchronization',
      'Implemented REST API-based secure data transfer',
      'Built data mapping logic for seamless field synchronization',
    ],
    Technologies: ['Python', 'Odoo', 'Zoho CRM', 'Zoho Books', 'REST API'],
  },
  {
    Title: 'Marblex – Odoo ERP Customization & Workflow Automation',
    Description:
      'Delivered advanced Odoo ERP customization for Marblex including Accounting configuration and complex workflow automation.',
    Highlights: [
      'Customized Sales, Purchase, Inventory, and Accounting modules',
      'Configured Chart of Accounts, taxes, journals, and financial workflows',
      'Implemented automated invoice generation and payment reconciliation',
      'Designed multi-step approval workflows for sales and purchases',
      'Developed custom business logic using Python ORM-based extensions',
      'Customized QWeb reports (Invoices, Quotations, Delivery Orders)',
    ],
    Technologies: ['Python', 'Odoo', 'XML', 'QWeb', 'PostgreSQL'],
  },
  {
    Title: 'Repzo – Odoo ERP Integration',
    Description:
      'Designed and implemented a bi-directional integration between Repzo and Odoo ERP for real-time data synchronization.',
    Highlights: [
      'Implemented customer synchronization (create/update) in both systems',
      'Synced product catalog, pricing, and inventory data',
      'Automated sales order creation and status updates across platforms',
      'Implemented webhook-based real-time triggers',
      'Handled error logging, retry mechanisms, and conflict resolution',
    ],
    Technologies: ['Python', 'Odoo', 'REST API', 'Webhooks', 'JSON'],
  },
  {
    Title: 'Shopify – Odoo ERP Real-Time Bi-Directional Integration',
    Description:
      'Real-time bi-directional integration between Shopify and Odoo ERP for seamless synchronization of products, customers, orders, inventory, and payments.',
    Highlights: [
      'Synced product catalog, variants, pricing, and stock levels in real-time',
      'Automated customer creation and updates across both platforms',
      'Imported Shopify orders into Odoo Sales module instantly',
      'Implemented webhook-based real-time order triggers',
      'Handled order status, fulfillment, and payment synchronization',
    ],
    Technologies: ['Python', 'Odoo', 'Shopify API', 'REST API', 'Webhooks'],
  },
  {
    Title: 'Snusmore – eCommerce Website Development',
    Link: 'https://www.snusmore.com/',
    Description:
      'Developed the Snusmore eCommerce website with a clean user interface and optimized shopping experience.',
    Highlights: [
      'Designed responsive product pages and category structure',
      'Implemented shopping cart and checkout workflow',
      'Optimized site performance and loading speed',
      'Configured hosting and domain setup',
      'Improved UI/UX for better customer engagement',
    ],
    Technologies: ['HTML', 'CSS', 'JavaScript', 'eCommerce', 'UI/UX'],
  },
  {
    Title: 'Walmart – Odoo ERP Integration',
    Description:
      'Integrated Walmart Marketplace with Odoo ERP to automate product synchronization, order management, and inventory updates.',
    Highlights: [
      'Developed REST API integration between Walmart and Odoo',
      'Automated product export and order import workflows',
      'Implemented stock synchronization in real-time',
      'Customized Odoo modules for marketplace management',
    ],
    Technologies: ['Python', 'Odoo', 'Walmart API', 'REST API', 'XML'],
  },
  {
    Title: 'Weather Website',
    Description:
      'A weather app that provides real-time weather information using HTML, CSS, JavaScript, and a weather API.',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
  },
  {
    Title: 'Portfolio Website',
    Description: 'A fully responsive personal portfolio website built with React JS and Tailwind CSS.',
    Technologies: ['React JS', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    Title: 'Medicine Pharmacy – Odoo Module',
    Description:
      'Custom Odoo module for a medicine distribution company with inventory management, supplier tracking, stock monitoring, and sales reporting.',
    Technologies: ['Python', 'XML', 'Odoo', 'QWeb'],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: 'Odoo Development',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/30',
    skills: ['Odoo ERP', 'Python', 'OOP', 'Owl JS', 'QWeb', 'XML'],
  },
  {
    category: 'Frontend Technologies',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/30',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Data & Integration',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/30',
    skills: ['PostgreSQL', 'MongoDB', 'REST API', 'Webhooks', 'JSON', 'Git'],
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    title: 'Point of Sale (POS) Customization',
    description:
      'Customize Odoo POS to match your business needs with advanced features, payment integrations, and inventory management.',
    gradient: 'from-green-900/60 to-green-950/80',
    border: 'border-green-700/40',
    iconColor: 'text-green-400',
  },
  {
    title: 'Portal Customization',
    description:
      'Create personalized customer and vendor portals with custom workflows, document management, and communication tools.',
    gradient: 'from-blue-900/60 to-blue-950/80',
    border: 'border-blue-700/40',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Website Customization',
    description:
      'Build responsive, SEO-optimized websites using Odoo Website Builder with custom themes and functionality.',
    gradient: 'from-violet-900/60 to-violet-950/80',
    border: 'border-violet-700/40',
    iconColor: 'text-violet-400',
  },
  {
    title: 'Custom Dashboard Development',
    description:
      'Create powerful, interactive dashboards with real-time analytics, KPIs, and business intelligence tools.',
    gradient: 'from-orange-900/60 to-orange-950/80',
    border: 'border-orange-700/40',
    iconColor: 'text-orange-400',
  },
  {
    title: 'QWeb Report Development',
    description:
      'Design and develop custom reports, invoices, purchase orders, and business documents with advanced formatting.',
    gradient: 'from-red-900/60 to-red-950/80',
    border: 'border-red-700/40',
    iconColor: 'text-red-400',
  },
  {
    title: 'Third-Party Integration',
    description:
      'Seamlessly integrate Odoo with external systems, APIs, and services for complete business automation.',
    gradient: 'from-teal-900/60 to-teal-950/80',
    border: 'border-teal-700/40',
    iconColor: 'text-teal-400',
  },
  {
    title: 'Module Development from Scratch',
    description:
      'Build fully custom Odoo modules tailored to unique business requirements using Python and ORM extensions.',
    gradient: 'from-indigo-900/60 to-indigo-950/80',
    border: 'border-indigo-700/40',
    iconColor: 'text-indigo-400',
  },
  {
    title: 'eCommerce Website Development',
    description:
      'Develop modern, responsive eCommerce websites with optimized shopping experiences and performance.',
    gradient: 'from-pink-900/60 to-pink-950/80',
    border: 'border-pink-700/40',
    iconColor: 'text-pink-400',
  },
  {
    title: 'ERP Data Migration & Setup',
    description:
      'Migrate business data from legacy systems to Odoo ERP and configure modules for seamless operations.',
    gradient: 'from-yellow-900/60 to-yellow-950/80',
    border: 'border-yellow-700/40',
    iconColor: 'text-yellow-400',
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: 'Freelance Odoo Developer & Frontend Developer',
    company: 'Self-Employed',
    period: '2022 – Present',
    description:
      'Delivering end-to-end Odoo ERP customization, third-party integrations (Shopify, Walmart, Zoho, Repzo), and frontend web development for clients across Pakistan and internationally.',
    highlights: [
      'Developed and deployed 10+ custom Odoo modules',
      'Integrated Odoo with Shopify, Walmart, Zoho CRM/Books, and Repzo',
      'Built responsive corporate and eCommerce websites',
      'Configured Accounting, Inventory, Sales, and Purchase workflows',
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Lahore',
    period: '2019 – 2023',
    description: 'Studied core computer science subjects including programming, databases, software engineering, and web development.',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  address: 'Johar Town, Lahore, Pakistan',
  phoneNo: '+92 305 9290390',
  email: 'nadeemwazir0123@gmail.com',
};
