// ─── Projects ─────────────────────────────────────────────────────────────────
export const Projects = [
  {
    Title: 'OutsetX – AI-Powered Purchase & Sales Automation Suite',
    Description:
      'Designed and built a suite of interlinked Odoo modules that automate the full purchase-to-sales cycle — from AI-driven supplier document capture and packing list processing to intelligent reordering, offer comparison, sales analytics, and POS payment gateway integrations.',
    Highlights: [
      'Purchase OCR: converted supplier quotes (PDF, scans, phone photos) into draft Purchase Orders using Tesseract OCR with OpenAI and Anthropic Claude extraction',
      'Built a 5-step product matching engine (internal reference → supplier code → saved mapping → transport/service keyword rules) with confidence scoring and unmatched-line review',
      'Packing List Import: matched supplier Excel/PDF SKUs to products with prefix/suffix rules and generated warehouse-ready lists enriched with storage locations',
      'RFQ Smart App: automated reorder worksheets with forward-demand quantity formulas, A/B/C velocity classification, price-trend analysis, and bulk RFQ creation',
      'Offer Comparison: enriched supplier offer files with last purchase price, order number, and order date via supplier-specific database joins',
      'Sales Insights: developed Inventory Cycle and Top-N reports with days-to-sell metrics, share/cumulative-share analysis, and multi-dimensional filtering',
      'Added product brand tracking across Sales and Inventory, plus POS receipt formatting fixes for long product names and customer notes',
      'Implemented interactive OWL JS components for document preview and header marker selection',
      'Delivered dual Excel and QWeb PDF export pipelines across all reporting modules',
      'Persisted per-supplier column mappings and SKU affixes so repeat imports require no reconfiguration',
      'Integrated Alma buy-now-pay-later installment payments into the Odoo eCommerce checkout, enabling Pay Now and 2, 3, 4, 6, 8, 10, and 12-instalment plans',
      'Customized the Alma payment provider with product- and category-level eligibility rules, a payment analytics dashboard, and refund handling',
      'Built a Yappy QR payment integration for Odoo POS (Panama), generating dynamic QR codes for the exact order amount via the Yappy Commercial API',
      'Implemented automatic POS order validation on payment completion, end-of-day session reconciliation, full refund support, and a test mode',
      'Developed custom Owl JS payment screens and payment-line patches for the POS checkout flow',
    ],
    Technologies: [
      'Python',
      'Odoo 17',
      'Odoo 19',
      'OpenAI API',
      'Anthropic Claude API',
      'Tesseract OCR',
      'Alma API',
      'Yappy API',
      'Owl JS',
      'QWeb',
      'openpyxl',
      'PostgreSQL',
      'XML',
    ],
  },
  {
    Title: 'Inthlaq – Odoo 19 Community ERP Suite',
    Description:
      'Architected and delivered a comprehensive suite of custom Odoo 19 Community modules covering restaurant operations, HR and payroll, accounting automation, biometric attendance, and Twilio-based customer messaging, alongside a companion Flutter chat application.',
    Highlights: [
      'Developed a full restaurant POS extension with item groups, departments, waiters, and order types (Dine-In, Parking, Take Away, Delivery)',
      'Implemented KOT printer routing with item-level overrides falling back to department printers',
      'Engineered a real-time kitchen display as a Community alternative to the Enterprise Preparation Display, with configurable stages, station filtering, ticket bump/recall, and aging timers over the Odoo bus',
      'Added item cancellation and bill void workflows with mandatory reasons and a unified audit trail',
      'Developed an end-to-end employee loan workflow: request submission, HR policy approval, Finance fund verification, and disbursement via account payment',
      'Automated monthly repayment schedules injected into payslips, shipped in dual editions for Enterprise hr_payroll and the OCA Community payroll',
      'Integrated ZKTeco biometric attendance machines with Odoo HR attendance, syncing multi-device punch logs to employee records',
      'Integrated Twilio for SMS notifications, WhatsApp messaging, and automated appointment reminders',
      'Automated recurring customer invoicing with a daily cron supporting six billing frequencies, missed-cycle backfill, and auto-post/auto-email',
      'Built Post-Dated Cheque (PDC) management for customer and vendor cheques with lifecycle tracking and dedicated reports',
      'Added analytic distribution to payments and the payment wizard for granular cost tracking',
      'Designed custom A4 tax-invoice QWeb reports for sale orders and invoices, plus in-browser PDF preview without downloading',
      'Implemented order-line price history (last 10 purchase/sale prices) and colour-coded purchase price comparison against last purchase and landed cost',
      'Created a Sales Representative master that avoids consuming internal user licences, bridged into the accounting reports',
      'Added barcode scanning on Sale Orders, manual POS barcode entry without scanner hardware, and multi-part-number product search',
      'Implemented UoM-based pricelist rules and product inventory-tracking defaults',
      'Built a cross-platform Flutter chat application powered by Odoo, delivering real-time team messaging over WebSockets connected to the Odoo bus',
      'Implemented channel and direct messaging with member management, partner search, and file/image attachments with MIME detection',
      'Integrated Firebase Cloud Messaging and local notifications for background push delivery, with Odoo session-based authentication and released Android builds',
    ],
    Technologies: [
      'Python',
      'Odoo 19',
      'Owl JS',
      'SCSS',
      'QWeb',
      'Odoo Bus',
      'Flutter',
      'Dart',
      'Firebase',
      'WebSockets',
      'Twilio API',
      'ZKTeco',
      'Cron Jobs',
      'PostgreSQL',
      'XML',
    ],
  },
  {
    Title: 'Inthlaq Salon & Spa – Management Platform (Odoo 19)',
    Description:
      'Developed an enterprise-grade salon and spa management application on Odoo 19 Community, covering multi-branch scheduling, online appointment booking, WhatsApp and SMS customer messaging, memberships and loyalty, staff commissions, and integrated POS checkout.',
    Highlights: [
      'Built a multi-branch architecture with rooms, room types, service catalogue, and configurable service types',
      'Developed a custom Owl JS timeline scheduler for branch-wise appointment planning with drag-and-drop booking',
      'Implemented multi-service appointments with staff assignment, duration handling, and conflict prevention',
      'Built a public website booking engine letting customers reserve appointments online, with a self-service check-in flow',
      'Built service packages, membership plans, and a customer loyalty program with automated benefit tracking',
      'Developed a beautician commission engine with per-service and per-staff commission rules',
      'Bridged salon commissions and tips into payroll, injecting totals into the payslip REIMBURSEMENT input and settling them on confirmation',
      'Implemented a waiting-list and queue system for walk-in customers',
      'Integrated salon services with Point of Sale for unified checkout and order tracking',
      'Built an interactive management dashboard with autosave and real-time operational KPIs',
      'Integrated WhatsApp Cloud API and a configurable SMS gateway to deliver appointment reminders and customer notifications',
      'Automated pre-appointment reminders through scheduled cron jobs, with manual send actions and waiting-list notifications',
      'Collected post-service customer reviews via integrated survey feedback',
      'Delivered QWeb appointment reports with a configurable reporting wizard',
    ],
    Technologies: [
      'Python',
      'Odoo 19',
      'Owl JS',
      'WhatsApp Cloud API',
      'SMS Gateway',
      'REST API',
      'SCSS',
      'QWeb',
      'Cron Jobs',
      'PostgreSQL',
      'XML',
    ],
  },
  {
    Title: 'Odoo Mobile ERP – Flutter Business Management App',
    Description:
      'Developed a cross-platform Flutter mobile client that brings core Odoo ERP operations to phones and tablets, covering CRM, Sales, Purchase, Inventory, Projects, and Accounting through a single native app.',
    Highlights: [
      'Built a custom Odoo JSON-RPC client with session authentication and generic call_kw model access',
      'Developed an executive dashboard with period-based KPI metrics across sales, purchasing, and inventory',
      'Implemented a full CRM pipeline: lead lists by stage, detail views, activities, message threads, and in-app lead creation',
      'Built sales and purchase order management with list, detail, and order creation screens',
      'Added inventory overview with stock picking visibility and an accounting overview covering journals and entries',
      'Integrated device-camera barcode scanning for fast product lookup on the warehouse floor',
      'Developed project and task management with drill-down detail screens and an approvals workflow',
      'Implemented persistent sessions and configurable server settings via local storage',
      'Engineered a platform-adaptive HTTP layer with separate web and native client implementations',
      'Delivered 20 screens and 13K+ lines of Dart across a modular models/screens/services architecture',
    ],
    Technologies: [
      'Flutter',
      'Dart',
      'Odoo',
      'JSON-RPC',
      'REST API',
      'Android',
      'iOS',
    ],
  },
  {
    Title: 'End-to-End Zoho CRM & Zoho Books → Odoo ERP Integration',
    Description:
      'Developed a complete end-to-end integration between Zoho (CRM & Books) and Odoo ERP, automating customer, product, sales order, invoice, and payment synchronization across both platforms with OAuth-secured, scheduled data transfer.',
    Highlights: [
      'Implemented the Zoho OAuth 2.0 authorization-code flow with a local callback server, token refresh, and encrypted credential storage',
      'Built a modular service layer separating connection handling, contacts, calendar events, and document sync',
      'Automated bi-directional customer and contact synchronization between Zoho CRM and Odoo partners',
      'Synced the product catalogue, pricing, and item master from Zoho Books into Odoo products',
      'Imported sales orders from Zoho into the Odoo Sales module with full line-item and tax mapping',
      'Automated invoice and payment synchronization into Odoo Accounting journal entries',
      'Developed configurable cron jobs so each entity type syncs on its own schedule',
      'Built a field-level data mapping engine to translate Zoho schemas onto Odoo models',
      'Implemented export statistics and sync logging for reconciliation and error tracing',
      'Added retry and error-handling logic to keep partial API failures from corrupting records',
    ],
    Technologies: ['Python', 'Odoo', 'Zoho CRM', 'Zoho Books', 'OAuth 2.0', 'REST API', 'Cron Jobs', 'JSON'],
  },
  {
    Title: 'Marblex – Odoo ERP Customization & Workflow Automation',
    Description:
      'Delivered advanced Odoo ERP customization for Marblex spanning Sales, Purchase, Inventory, Accounting, and HR — including a custom payroll engine, multi-step approval workflows, and tailored financial reporting.',
    Highlights: [
      'Customized Sales, Purchase, Inventory, Accounting, and HR modules to match established business processes',
      'Configured the Chart of Accounts, tax structures, journals, and end-to-end financial workflows',
      'Built a custom payroll engine on the Community payroll stack, integrating attendance and employee contracts',
      'Linked payroll output to Accounting so salary journal entries post automatically',
      'Implemented automated invoice generation and payment reconciliation',
      'Designed multi-step approval workflows for sales quotations and purchase orders',
      'Developed custom business logic through Python ORM extensions and computed fields',
      'Customized QWeb reports for invoices, quotations, and delivery orders with client branding',
      'Configured inventory valuation, warehouse operations, and stock movement rules',
      'Set up role-based access control and record rules across departments',
    ],
    Technologies: ['Python', 'Odoo', 'HR Payroll', 'Accounting', 'XML', 'QWeb', 'PostgreSQL'],
  },
  {
    Title: 'Repzo – Odoo ERP Integration',
    Description:
      'Designed and implemented a bi-directional integration between the Repzo field-sales platform and Odoo ERP, exporting master data to Repzo and importing field sales orders back into Odoo in real time.',
    Highlights: [
      'Built a multi-instance configuration model so several Repzo environments can connect to one Odoo database',
      'Implemented flexible authentication supporting token and API-key header schemes with configurable endpoints per entity',
      'Developed a binding layer that maps Odoo records to their Repzo counterparts and prevents duplicate exports',
      'Automated export of product categories, products, and customers from Odoo to Repzo',
      'Imported field sales orders from Repzo into the Odoo Sales module with customer and product resolution',
      'Synced product catalogue, pricing, and inventory data across both platforms',
      'Implemented webhook-based real-time triggers for immediate order capture',
      'Built a dedicated sync log model recording every request, response, and failure for auditability',
      'Handled retry mechanisms, error logging, and conflict resolution for unreliable network conditions',
    ],
    Technologies: ['Python', 'Odoo', 'Repzo API', 'REST API', 'Webhooks', 'JSON'],
  },
  {
    Title: 'Shopify – Odoo ERP Real-Time Bi-Directional Integration',
    Description:
      'Real-time bi-directional integration between Shopify and Odoo ERP covering the full commerce lifecycle — products, customers, orders, inventory, payments, refunds, exchanges, and returns — with a management dashboard and diagnostics.',
    Highlights: [
      'Built a multi-instance architecture allowing several Shopify stores to sync into a single Odoo database',
      'Synced product catalogue, variants, pricing, material types, and stock levels in real time',
      'Implemented two-way stock synchronization with both import and export flows',
      'Automated customer creation and updates across both platforms',
      'Developed webhook-based order import for instant capture of new Shopify orders',
      'Handled the complete post-sale lifecycle: order edits, cancellations, refunds, exchanges, and returns into Odoo',
      'Built payment configuration mapping and automated payment status updates on paid orders',
      'Created a management dashboard giving live visibility into sync health and order volumes',
      'Developed a diagnostics tool to trace failed syncs and reconcile mismatched records',
      'Customized storefront header and footer templates alongside the backend integration',
    ],
    Technologies: ['Python', 'Odoo', 'Shopify API', 'REST API', 'Webhooks', 'JSON', 'XML'],
  },
  {
    Title: 'Top Shelf – Retail ERP, Shopify & Inventory Suite (Odoo 19)',
    Description:
      'Delivered a multi-module Odoo 19 solution for Top Shelf, a retail business, integrating Shopify with inventory, purchasing, sales, and landed-cost costing across six custom modules.',
    Highlights: [
      'Built a real-time, bi-directional Shopify ↔ Odoo connector syncing orders, products, stock, and payments',
      'Implemented the full commerce lifecycle: product import/export, stock export, order edits, cancellations, refunds, exchanges, and returns',
      'Developed a Shopify dashboard with product-visibility controls, material-type handling, and barcode management',
      'Built dedicated one-time product synchronization tooling for catalogue onboarding',
      'Engineered a manual landed-cost allocation grid for Odoo 19 with consolidated per-product and per-shipment cost reports',
      'Created Purchase Order Controls with a custom purchase voucher format using native Odoo packaging and UoM',
      'Customized the sales flow with advance-payment invoicing, a custom invoice wizard, and full-delivery handling',
      'Integrated barcode scanning into inventory stock-picking operations',
      'Led development as the primary contributor with a pull-request-based staging workflow',
    ],
    Technologies: ['Python', 'Odoo 19', 'Shopify API', 'REST API', 'Webhooks', 'JSON', 'QWeb', 'PostgreSQL'],
  },
  {
    Title: 'Snusmore – eCommerce Website Development',
    Link: 'https://www.snusmore.com/',
    Description:
      'Built the Snusmore eCommerce platform end to end — a customer-facing online store backed by a full ERP implementation covering Sales, Purchase, Inventory, Accounting, HR, and online payment processing.',
    Highlights: [
      'Designed responsive product pages, category structure, and a streamlined shopping cart and checkout workflow',
      'Integrated online payment gateways with automated payment capture, confirmation, and reconciliation',
      'Configured the Sales module so web orders flow straight into quotations, confirmations, and delivery',
      'Set up Purchase workflows with vendor management, requests for quotation, and automated reordering rules',
      'Implemented Inventory management with real-time stock tracking, warehouse operations, and delivery routing',
      'Configured Accounting end to end: Chart of Accounts, taxes, journals, customer invoicing, and payment reconciliation',
      'Set up HR with employee records, attendance, and leave management for store operations',
      'Connected eCommerce stock levels to live inventory to prevent overselling',
      'Optimized site performance, loading speed, and on-page SEO structure',
      'Managed hosting, domain configuration, and production deployment',
    ],
    Technologies: [
      'Odoo',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'eCommerce',
      'Payment Gateway',
      'Accounting',
      'UI/UX',
    ],
  },
  {
    Title: 'Walmart – Odoo ERP Integration',
    Description:
      'Integrated Walmart Marketplace with Odoo ERP to automate product publication, order management, inventory updates, fulfilment through Walmart WFS, and financial settlement reconciliation.',
    Highlights: [
      'Implemented OAuth token generation and refresh against the Walmart Marketplace API',
      'Automated product publication with item feed submission and feed-status polling until acceptance',
      'Built product search and matching against the Walmart catalogue to avoid duplicate listings',
      'Developed real-time stock synchronization across multiple warehouses',
      'Automated order import into Odoo Sales with tax resolution at the order-line level',
      'Integrated Walmart Fulfillment Services (WFS) including shipping plans and shipment estimates',
      'Built settlement report processing with CSV upload and automated reconciliation against Odoo payments',
      'Developed purchase order handling and custom reporting for marketplace performance',
      'Created configuration screens for credentials, warehouse mapping, and tax rules',
    ],
    Technologies: ['Python', 'Odoo', 'Walmart API', 'Walmart WFS', 'OAuth', 'REST API', 'CSV', 'XML'],
  },

  {
  Title: 'Leopards Courier – Odoo Delivery Integration',
  Description:
    'Integrated Odoo Delivery with Leopards Courier to automate live rate calculation, shipment booking, consignment tracking, label attachment, and cancellation handling.',
  Highlights: [
    'Implemented live shipping rate calculation using Leopards Courier API',
    'Built manual shipment booking flow from Odoo delivery orders',
    'Generated consignment numbers (CN) and stored them in tracking reference',
    'Attached shipment labels to delivery orders when returned by the API',
    'Integrated tracking status synchronization using Leopards tracking API',
    'Developed scheduled actions for automatic tracking refresh and queued cancellation processing',
    'Enabled shipment cancellation directly from Odoo with Leopards API integration',
    'Configured shipper, account, and delivery method setup for flexible operational use',
  ],
  Technologies: ['Python', 'Odoo', 'REST API', 'JSON', 'Cron Jobs'],
},

  {
    Title: 'Education Management System – Odoo 19 School ERP',
    Description:
      'Delivered and migrated a comprehensive school & education management ERP on Odoo 19, digitizing the entire institute lifecycle — admissions, academics, attendance, examinations, fees, transport, and staff — across a 90+ model platform with dedicated student and parent portals.',
    Highlights: [
      'Online admissions with a public website application form, document requirements, and an automated student enrollment workflow',
      'Student information management with student and parent records, guardian linking, and self-service portal access',
      'Academic structure setup: academic years, sessions, grades, classes, sections, subjects, timetables, and weekly schedules',
      'Lesson planning and class scheduling tools with room and time-slot allocation for teachers',
      'Attendance tracking via a barcode attendance kiosk plus per-student and per-class attendance with configurable tags and public holidays',
      'Assignment management with class and student assignments, file attachments, assignment types, and grading',
      'Examinations and grading with configurable grade scales, grade symbols, terms, and term report cards',
      'Fees management with fee structures, fee components, fee slips, and online fee collection through integrated payment gateways',
      'Discipline tracking, scholarship management, and automated transfer-certificate generation',
      'Transport management with routes, stops, trips, and pickup/drop locations',
      'Teacher and staff management: teacher/supervisor roles, subject assignment, service hours, and staff salary processing',
      'Student and parent portals with dashboards, profiles, assignments, and class schedules built on custom HTTP controllers',
      'School-wide notice board for announcements and communication',
      'Multi-company / multi-branch support with role-based access control and record rules',
      'Migrated the full 90+ model platform to Odoo 19, modernizing deprecated ORM constraint and context APIs',
    ],
    Technologies: ['Python', 'Odoo 19', 'JavaScript', 'HR', 'Accounting', 'Website', 'Portal', 'QWeb', 'XML', 'PostgreSQL'],
  },

  {
    Title: 'Manafethme – (Odoo 18 + Flutter)',
    Description:
      'Delivered an end-to-end Odoo 18 solution for Manafeth Mobility & Medical combining a field-service installation & handover reporting system with a cross-platform Flutter delivery driver app backed by a custom Odoo Driver API.',
    Highlights: [
      'Built a field-service installation & handover system on Odoo Field Service (industry_fsm), Project, Sales, and Inventory',
      'Configurable checklist templates per product and category, auto-generating checklist items on installation reports from sale order lines',
      'Installation & handover reports capturing installed products, checklist results, and completion status with QWeb PDF sign-off documents',
      'Developed a cross-platform Flutter delivery driver app for last-mile delivery, real-time tracking, and proof of delivery',
      'Engineered the Odoo backend as a custom Driver API module exposing secure REST endpoints for the mobile app',
      'Secure driver login via Odoo authentication with a dashboard of assigned, pending, and completed deliveries',
      'Detailed picking data with customer and payment info, plus delivery status updates (accept, deny, delivered)',
      'Delivery verification via token/PIN validation and proof-of-delivery image capture',
      'Postpaid order handling with cash collection and payment tracking through payment-provider integration',
      'Driver wallet tracking earnings, with incentive/commission programs and invoice history',
      'Firebase Cloud Messaging push notifications for real-time order updates',
      'Multilingual UI with RTL support and dynamic branding (app name/logo) synced from the Odoo backend',
      'Profile management (update info, reset password) on a scalable mobile-to-ERP synchronization architecture',
    ],
    Technologies: ['Python', 'Odoo 18', 'Flutter', 'Dart', 'Field Service (FSM)', 'REST API', 'Firebase', 'QWeb', 'PostgreSQL', 'XML'],
  },
  {
    Title: 'ARW & Partners – Law Firm Website (WordPress)',
    Link: 'https://arw.com.pk/',
    Description:
      'Designed and developed the corporate website for ARW & Partners, an Islamabad-based law firm, presenting their practice areas and legal expertise through a professional, content-driven WordPress site.',
    Highlights: [
      'Built a structured practice-areas architecture covering arbitration, corporate and commercial law, M&A, taxation, banking, and intellectual property',
      'Developed a News & Insights section with a publishing workflow the firm manages independently',
      'Created a Legal Research area to showcase the firm’s thought leadership',
      'Implemented a Careers section with role listings and application enquiry handling',
      'Designed responsive layouts delivering a professional experience across desktop, tablet, and mobile',
      'Integrated contact forms and enquiry capture routed to the firm’s inbox',
      'Optimized on-page SEO structure, metadata, and page speed for organic visibility',
      'Configured hosting, domain setup, SSL, and ongoing site maintenance',
    ],
    Technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO'],
  },
  {
    Title: 'CRAD – Research & Advocacy Organization Website (Next.js)',
    Link: 'https://crad.com.pk/',
    Description:
      'Designed and built the website for the Center for Research, Advocacy and Development (CRAD), an Islamabad-based policy research institution, as a modern, fast Next.js application — statically exported for secure shared hosting and presenting the organization’s multidisciplinary work to academic, civil society, and professional audiences.',
    Highlights: [
      'Built from the ground up as a Next.js 16 (App Router) application in TypeScript, statically exported to plain HTML/CSS/JS for fast, secure delivery on shared cPanel hosting',
      'Crafted a distinctive maroon brand identity derived from the organization’s logo, with a full light/dark theme, accessible contrast, and a reusable design-token system',
      'Developed eight pages — Home, About, Mission, Aim, What We Do, Projects, Insights, and Contact — on a shared component architecture (Header, Footer, Carousel, and more)',
      'Created a full-bleed hero with an auto-crossfading image slideshow, Ken Burns motion, and staggered entrance animations',
      'Implemented an interactive auto-playing photo carousel and scroll-reveal animations across all sections, with count-up statistics and a back-to-top control (all respecting reduced-motion)',
      'Presented ten focus areas as responsive image cards and built a facility gallery from the organization’s own event and venue photography',
      'Built a contact page with a validated form wired to Web3Forms for email delivery on static hosting, plus an embedded Google Map of the Islamabad office',
      'Added a sitewide top contact bar and a floating WhatsApp chat button present on every page',
      'Processed and optimized all imagery via next/image, generated transparent and monochrome logo variants, and ensured brand-safe use of partner assets',
      'Configured SEO metadata and Open Graph tags, and deployed the static build to cPanel with SSL and domain configuration',
    ],
    Technologies: [
      'Next.js 16',
      'React',
      'TypeScript',
      'CSS',
      'Node.js',
      'Web3Forms',
      'Static Export',
      'Responsive Design',
      'SEO',
    ],
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
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'WordPress'],
  },
  {
    category: 'Data & Integration',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/30',
    skills: ['PostgreSQL', 'MongoDB', 'REST API', 'Webhooks', 'JSON', 'Git'],
  },
  {
    category: 'AI & Automation',
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/30',
    skills: ['OpenAI API', 'Anthropic Claude', 'OCR', 'Twilio', 'WhatsApp API'],
  },
  {
    category: 'Mobile App Development',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/30',
    skills: ['Flutter', 'Dart', 'Firebase', 'Android', 'iOS', 'JSON-RPC', 'WebSockets'],
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
  {
    title: 'Mobile App Development',
    description:
      'Build cross-platform Android and iOS apps with Flutter — from ERP companion apps to delivery, chat, and field-sales solutions.',
    gradient: 'from-cyan-900/60 to-cyan-950/80',
    border: 'border-cyan-700/40',
    iconColor: 'text-cyan-400',
  },
  {
    title: 'Flutter & Odoo Mobile Integration',
    description:
      'Connect mobile apps to Odoo through JSON-RPC and REST APIs with secure authentication, offline handling, and push notifications.',
    gradient: 'from-purple-900/60 to-purple-950/80',
    border: 'border-purple-700/40',
    iconColor: 'text-purple-400',
  },
  {
    title: 'WordPress Website Development',
    description:
      'Design and develop responsive, SEO-optimized WordPress websites with custom themes, content workflows, and full hosting setup.',
    gradient: 'from-sky-900/60 to-sky-950/80',
    border: 'border-sky-700/40',
    iconColor: 'text-sky-400',
  },
  {
    title: 'AI-Powered Document Automation',
    description:
      'Automate document capture and data entry using OCR and AI models, turning invoices, quotes, and packing lists into structured ERP records.',
    gradient: 'from-emerald-900/60 to-emerald-950/80',
    border: 'border-emerald-700/40',
    iconColor: 'text-emerald-400',
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: 'Freelance Odoo & Flutter Developer',
    company: 'Self-Employed',
    period: '2022 – Present',
    description:
      'Delivering end-to-end Odoo ERP solutions for clients across Pakistan, the Gulf, Europe, and Latin America — from custom module development and AI-assisted automation to marketplace integrations, payment gateways, and frontend web development.',
    highlights: [
      'Architected multi-module ERP suites on Odoo 17 and Odoo 19, spanning Sales, Purchase, Inventory, Accounting, POS, and HR',
      'Built AI-assisted document automation that converts supplier quotes and scans into draft Purchase Orders using OpenAI, Anthropic Claude, and Tesseract OCR',
      'Delivered industry-specific platforms including restaurant POS with a real-time kitchen display and a full salon & spa management system with online booking',
      'Integrated Odoo with Shopify, Walmart, Zoho CRM/Books, Repzo, and Leopards Courier for real-time bi-directional synchronization',
      'Implemented payment gateway integrations including Alma installment payments and Yappy QR payments for Point of Sale',
      'Developed a Flutter delivery mobile app backed by Odoo for real-time logistics, proof of delivery, and cash collection',
      'Automated HR and finance workflows: employee loans with payslip deduction, recurring invoicing, and post-dated cheque management',
      'Engineered customer messaging over WhatsApp Cloud API and SMS gateways for reminders and notifications',
      'Migrated and upgraded custom modules across Odoo versions, maintaining Community compatibility to avoid Enterprise licensing costs',
      'Built responsive corporate and eCommerce websites with React, Tailwind CSS, and the Odoo Website Builder',
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Government College University Faisalabad',
    period: '2020 – 2024',
    description: 'Studied core computer science subjects including programming, databases, software engineering, and web development.',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  address: 'Islamabad, Pakistan',
  phoneNo: '+92 305 9290390',
  email: 'nadeemwazir0123@gmail.com',
};
