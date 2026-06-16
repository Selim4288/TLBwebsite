import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const productsData = {
  "erp-solutions": {
    title: "ERP Solutions",
    description: "Comprehensive enterprise resource planning systems for businesses of all sizes.",
    longDescription:
      "Our Enterprise Resource Planning (ERP) solution is a comprehensive business management software that integrates all facets of your operation, including planning, purchasing, inventory, sales, marketing, finance, and human resources. This all-in-one solution streamlines processes, enhances collaboration, and provides real-time insights to drive informed decision-making.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Financial Management",
        description:
          "Comprehensive financial tools including general ledger, accounts payable/receivable, and financial reporting.",
      },
      {
        title: "Inventory Control",
        description: "Real-time inventory tracking, automated reordering, and warehouse management capabilities.",
      },
      {
        title: "HR Management",
        description: "Employee database, attendance tracking, payroll processing, and performance evaluation tools.",
      },
      {
        title: "CRM Integration",
        description: "Customer relationship management features to track interactions and improve customer service.",
      },
      {
        title: "Business Intelligence",
        description: "Advanced reporting and analytics to gain insights and make data-driven decisions.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$99",
        period: "per month",
        features: ["Financial Management", "Inventory Control", "5 User Accounts", "Email Support", "Regular Updates"],
      },
      {
        plan: "Professional",
        price: "$199",
        period: "per month",
        features: ["All Basic Features", "HR Management", "CRM Integration", "15 User Accounts", "Priority Support"],
      },
      {
        plan: "Enterprise",
        price: "$399",
        period: "per month",
        features: [
          "All Professional Features",
          "Business Intelligence",
          "Unlimited User Accounts",
          "24/7 Support",
          "Custom Development",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "The ERP solution from BDTask has transformed our business operations. We now have complete visibility across all departments and can make informed decisions quickly.",
        author: "John Smith",
        position: "CEO",
        company: "Tech Solutions Inc.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "Implementation was smooth and the support team was incredibly helpful. Our productivity has increased by 30% since adopting this ERP system.",
        author: "Sarah Johnson",
        position: "Operations Manager",
        company: "Global Manufacturing Ltd.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "pos-systems": {
    title: "POS Systems",
    description: "Advanced point of sale systems for retail, restaurant, and service industries.",
    longDescription:
      "Our Point of Sale (POS) system is designed to streamline transactions, inventory management, and customer interactions for retail, restaurant, and service businesses. With an intuitive interface and powerful backend capabilities, our POS solution helps businesses increase efficiency, improve customer service, and boost sales.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking, automated reordering, and stock level alerts.",
      },
      {
        title: "Sales Tracking",
        description: "Detailed sales reports, transaction history, and performance analytics.",
      },
      {
        title: "Customer Management",
        description: "Customer database, loyalty programs, and purchase history tracking.",
      },
      {
        title: "Payment Processing",
        description: "Support for multiple payment methods including credit cards, mobile payments, and gift cards.",
      },
      {
        title: "Reporting & Analytics",
        description: "Comprehensive reporting tools to analyze sales, inventory, and customer data.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$79",
        period: "per month",
        features: ["Inventory Management", "Sales Tracking", "1 Register", "Email Support", "Regular Updates"],
      },
      {
        plan: "Professional",
        price: "$149",
        period: "per month",
        features: [
          "All Basic Features",
          "Customer Management",
          "Payment Processing",
          "3 Registers",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$299",
        period: "per month",
        features: [
          "All Professional Features",
          "Advanced Reporting",
          "Unlimited Registers",
          "24/7 Support",
          "Custom Development",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "The POS system from BDTask has revolutionized how we handle transactions. It's fast, reliable, and our staff love using it.",
        author: "Michael Brown",
        position: "Owner",
        company: "Brown's Retail Store",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "We've seen a significant improvement in our inventory management since implementing this POS system. The reporting features are exceptional.",
        author: "Lisa Chen",
        position: "Store Manager",
        company: "Fashion Boutique",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "accounting-software": {
    title: "Accounting Software",
    description: "Powerful accounting tools to manage finances, invoicing, and financial reporting.",
    longDescription:
      "Our Accounting Software provides a comprehensive solution for managing your business finances. From basic bookkeeping to advanced financial reporting, our software streamlines accounting processes, ensures compliance, and gives you clear insights into your financial health.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "General Ledger",
        description: "Centralized system for recording and organizing financial transactions.",
      },
      {
        title: "Accounts Payable/Receivable",
        description: "Manage bills, track expenses, and monitor customer payments efficiently.",
      },
      {
        title: "Financial Reporting",
        description: "Generate balance sheets, income statements, cash flow reports, and custom financial reports.",
      },
      {
        title: "Tax Management",
        description: "Simplify tax preparation with automated calculations and compliance features.",
      },
      {
        title: "Multi-currency Support",
        description: "Handle transactions in multiple currencies with automatic exchange rate updates.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$49",
        period: "per month",
        features: ["General Ledger", "Basic Reporting", "3 User Accounts", "Email Support", "Regular Updates"],
      },
      {
        plan: "Professional",
        price: "$99",
        period: "per month",
        features: [
          "All Basic Features",
          "Advanced Reporting",
          "Tax Management",
          "10 User Accounts",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$199",
        period: "per month",
        features: [
          "All Professional Features",
          "Multi-currency Support",
          "Unlimited User Accounts",
          "24/7 Support",
          "Custom Development",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This accounting software has simplified our financial management processes. The reporting features are exceptional and save us hours of work each month.",
        author: "Robert Johnson",
        position: "CFO",
        company: "Johnson Enterprises",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "As a small business owner, I needed an accounting solution that was both powerful and easy to use. This software delivers on both fronts.",
        author: "Emily Wong",
        position: "Owner",
        company: "Wong Consulting",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "hrm-solutions": {
    title: "HRM Solutions",
    description: "Human resource management systems to streamline HR processes and employee management.",
    longDescription:
      "Our Human Resource Management (HRM) solution is designed to streamline and automate HR processes, from recruitment and onboarding to performance management and payroll. This comprehensive system helps HR professionals manage employee data efficiently, improve workforce productivity, and ensure compliance with labor regulations.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Employee Database",
        description: "Centralized repository for all employee information with secure access controls.",
      },
      {
        title: "Attendance & Leave Management",
        description: "Automated tracking of attendance, leave requests, and approval workflows.",
      },
      {
        title: "Payroll Processing",
        description: "Streamlined payroll calculations, tax deductions, and salary disbursements.",
      },
      {
        title: "Performance Management",
        description: "Tools for setting goals, conducting reviews, and tracking employee performance.",
      },
      {
        title: "Recruitment & Onboarding",
        description: "End-to-end management of hiring processes and new employee onboarding.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$69",
        period: "per month",
        features: [
          "Employee Database",
          "Attendance Tracking",
          "Up to 50 Employees",
          "Email Support",
          "Regular Updates",
        ],
      },
      {
        plan: "Professional",
        price: "$129",
        period: "per month",
        features: [
          "All Basic Features",
          "Payroll Processing",
          "Performance Management",
          "Up to 200 Employees",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$249",
        period: "per month",
        features: [
          "All Professional Features",
          "Recruitment Tools",
          "Advanced Analytics",
          "Unlimited Employees",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "The HRM solution from BDTask has transformed our HR department. What used to take days now takes minutes, and our employees love the self-service features.",
        author: "Jennifer Adams",
        position: "HR Director",
        company: "Global Innovations Inc.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "Implementing this HRM system has significantly reduced our administrative workload and improved data accuracy. The payroll processing feature alone has saved us countless hours.",
        author: "David Wilson",
        position: "HR Manager",
        company: "Wilson Manufacturing",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  ecommerce: {
    title: "E-commerce Platforms",
    description: "Scalable e-commerce solutions for online stores and marketplaces.",
    longDescription:
      "Our E-commerce Platform provides a complete solution for businesses looking to establish or enhance their online presence. From small boutiques to large marketplaces, our platform offers the tools and features needed to create engaging shopping experiences, manage products efficiently, and drive sales growth in the digital marketplace.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Product Management",
        description: "Comprehensive tools for managing products, categories, variants, and inventory.",
      },
      {
        title: "Shopping Cart & Checkout",
        description: "Streamlined shopping experience with secure and customizable checkout process.",
      },
      {
        title: "Payment Gateway Integration",
        description: "Support for multiple payment methods and secure payment processing.",
      },
      {
        title: "Order Management",
        description: "Complete order processing workflow from placement to fulfillment and tracking.",
      },
      {
        title: "Marketing & SEO Tools",
        description: "Built-in features for promotions, discounts, SEO optimization, and customer engagement.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$89",
        period: "per month",
        features: [
          "Up to 500 Products",
          "Basic Product Management",
          "Standard Checkout",
          "Email Support",
          "Regular Updates",
        ],
      },
      {
        plan: "Professional",
        price: "$179",
        period: "per month",
        features: [
          "Up to 5,000 Products",
          "Advanced Product Management",
          "Multiple Payment Gateways",
          "Priority Support",
          "Marketing Tools",
        ],
      },
      {
        plan: "Enterprise",
        price: "$349",
        period: "per month",
        features: [
          "Unlimited Products",
          "Advanced Analytics",
          "Custom Checkout Experience",
          "24/7 Support",
          "API Access",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "Since launching our store on BDTask's e-commerce platform, our online sales have increased by 200%. The platform is intuitive, reliable, and packed with features that help us grow.",
        author: "Alex Thompson",
        position: "E-commerce Director",
        company: "Fashion Forward",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The flexibility and scalability of this e-commerce platform have been crucial for our business growth. We started with a small catalog and have expanded to thousands of products without any performance issues.",
        author: "Michelle Lee",
        position: "CEO",
        company: "Global Marketplace",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "crm-software": {
    title: "CRM Software",
    description: "Customer relationship management tools to improve customer engagement and sales.",
    longDescription:
      "Our Customer Relationship Management (CRM) software helps businesses build stronger customer relationships, streamline sales processes, and drive growth. By centralizing customer data and interactions, our CRM enables teams to provide personalized service, identify sales opportunities, and make data-driven decisions that enhance customer satisfaction and loyalty.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Contact Management",
        description: "Centralized database for customer information, interaction history, and preferences.",
      },
      {
        title: "Sales Pipeline Management",
        description: "Visual tracking of deals through customizable sales stages with forecasting capabilities.",
      },
      {
        title: "Email Marketing Integration",
        description: "Create, send, and track email campaigns directly from the CRM platform.",
      },
      {
        title: "Task & Activity Management",
        description: "Schedule and track calls, meetings, and follow-ups with automated reminders.",
      },
      {
        title: "Reporting & Analytics",
        description: "Comprehensive insights into sales performance, customer behavior, and team productivity.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$29",
        period: "per user/month",
        features: ["Contact Management", "Basic Pipeline", "Email Integration", "5GB Storage", "Email Support"],
      },
      {
        plan: "Professional",
        price: "$59",
        period: "per user/month",
        features: ["All Basic Features", "Advanced Pipeline", "Email Marketing", "20GB Storage", "Priority Support"],
      },
      {
        plan: "Enterprise",
        price: "$99",
        period: "per user/month",
        features: [
          "All Professional Features",
          "Advanced Analytics",
          "API Access",
          "Unlimited Storage",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This CRM has transformed how we manage customer relationships. Our sales team is more organized, our follow-ups are timely, and our conversion rates have improved significantly.",
        author: "James Wilson",
        position: "Sales Director",
        company: "Wilson Enterprises",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The insights we've gained from the reporting features have been invaluable. We can now identify trends, forecast accurately, and make strategic decisions based on real data.",
        author: "Sophia Garcia",
        position: "Marketing Manager",
        company: "Innovative Solutions",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "inventory-management": {
    title: "Inventory Management System",
    description: "Comprehensive inventory tracking and management solutions for businesses of all sizes.",
    longDescription:
      "Our Inventory Management System provides businesses with complete control and visibility over their inventory. From tracking stock levels and movements to optimizing reorder points and managing multiple warehouses, our solution helps businesses reduce costs, prevent stockouts, and improve overall operational efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Real-time Stock Tracking",
        description: "Monitor inventory levels across multiple locations in real-time with automated alerts.",
      },
      {
        title: "Barcode & QR Code Scanning",
        description: "Streamline inventory counts and product identification with integrated scanning capabilities.",
      },
      {
        title: "Purchase Order Management",
        description: "Create, track, and manage purchase orders with automated reordering suggestions.",
      },
      {
        title: "Supplier Management",
        description: "Maintain supplier information, performance metrics, and communication history.",
      },
      {
        title: "Inventory Forecasting",
        description: "Predict future inventory needs based on historical data and sales trends.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$59",
        period: "per month",
        features: ["Up to 1,000 SKUs", "Basic Stock Tracking", "Purchase Orders", "Email Support", "Regular Updates"],
      },
      {
        plan: "Professional",
        price: "$119",
        period: "per month",
        features: [
          "Up to 10,000 SKUs",
          "Barcode Scanning",
          "Supplier Management",
          "Priority Support",
          "Basic Forecasting",
        ],
      },
      {
        plan: "Enterprise",
        price: "$229",
        period: "per month",
        features: [
          "Unlimited SKUs",
          "Multi-warehouse Management",
          "Advanced Forecasting",
          "24/7 Support",
          "API Access",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This inventory management system has eliminated our stockout issues and reduced our carrying costs by 25%. The real-time visibility across all our warehouses is a game-changer.",
        author: "Thomas Brown",
        position: "Operations Director",
        company: "Global Distribution Inc.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The barcode scanning feature has dramatically improved our inventory accuracy and reduced the time spent on stock counts. Our team can now focus on more strategic tasks.",
        author: "Rebecca Martinez",
        position: "Warehouse Manager",
        company: "Martinez Supply Chain",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "school-management": {
    title: "School Management System",
    description: "Complete education management solution for schools, colleges, and educational institutions.",
    longDescription:
      "Our School Management System is a comprehensive solution designed to streamline administrative processes, enhance communication, and improve educational outcomes in schools and educational institutions. From student information management to academic planning and financial administration, our system helps educational institutions operate more efficiently and effectively.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Student Information System",
        description: "Centralized database for student records, academic history, and personal information.",
      },
      {
        title: "Attendance Management",
        description: "Automated tracking of student and staff attendance with reporting capabilities.",
      },
      {
        title: "Exam & Grading System",
        description: "Comprehensive tools for creating exams, recording grades, and generating report cards.",
      },
      {
        title: "Fee Management",
        description: "Streamlined fee collection, tracking, and reporting with multiple payment options.",
      },
      {
        title: "Parent-Teacher Communication",
        description: "Integrated messaging, notifications, and portals for effective communication.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$99",
        period: "per month",
        features: ["Up to 500 Students", "Student Information", "Basic Attendance", "Email Support", "Regular Updates"],
      },
      {
        plan: "Professional",
        price: "$199",
        period: "per month",
        features: [
          "Up to 2,000 Students",
          "Advanced Attendance",
          "Exam & Grading",
          "Fee Management",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$349",
        period: "per month",
        features: [
          "Unlimited Students",
          "All Professional Features",
          "Advanced Reporting",
          "API Access",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This school management system has transformed our administrative processes. Tasks that used to take days now take minutes, and our staff can focus more on educational quality.",
        author: "Dr. Elizabeth Carter",
        position: "Principal",
        company: "International Academy",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The parent-teacher communication features have significantly improved our engagement with families. Parents appreciate the transparency and real-time updates on their children's progress.",
        author: "Mark Johnson",
        position: "IT Director",
        company: "Johnson Educational Institute",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "hospital-management": {
    title: "Hospital Management System",
    description: "Integrated healthcare management solution for hospitals and medical facilities.",
    longDescription:
      "Our Hospital Management System is a comprehensive healthcare solution designed to streamline operations, enhance patient care, and improve administrative efficiency in hospitals and medical facilities. From patient records and appointment scheduling to billing and inventory management, our system helps healthcare providers deliver better care while optimizing their operational processes.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Patient Records Management",
        description: "Secure electronic health records with comprehensive patient history and medical data.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "Efficient scheduling system for patient appointments, doctor availability, and facility resources.",
      },
      {
        title: "Billing & Insurance",
        description: "Integrated billing system with insurance processing and financial reporting capabilities.",
      },
      {
        title: "Pharmacy Management",
        description: "Complete medication tracking, prescription management, and inventory control.",
      },
      {
        title: "Laboratory Information System",
        description: "Streamlined lab test ordering, result recording, and reporting processes.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$199",
        period: "per month",
        features: [
          "Up to 50 Beds",
          "Patient Records",
          "Basic Appointment Scheduling",
          "Email Support",
          "Regular Updates",
        ],
      },
      {
        plan: "Professional",
        price: "$399",
        period: "per month",
        features: [
          "Up to 200 Beds",
          "Advanced Scheduling",
          "Billing & Insurance",
          "Pharmacy Management",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$799",
        period: "per month",
        features: [
          "Unlimited Beds",
          "All Professional Features",
          "Laboratory System",
          "Advanced Analytics",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This hospital management system has revolutionized our operations. Patient care has improved, wait times have decreased, and our staff can focus more on providing quality healthcare.",
        author: "Dr. Michael Chen",
        position: "Medical Director",
        company: "Metropolitan Medical Center",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The integrated approach of this system has eliminated data silos and improved coordination between departments. Our billing accuracy has increased, and claim rejections have decreased significantly.",
        author: "Sarah Thompson",
        position: "Hospital Administrator",
        company: "Thompson Healthcare",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "project-management": {
    title: "Project Management Software",
    description: "Powerful tools to plan, track, and manage projects efficiently.",
    longDescription:
      "Our Project Management Software provides teams with the tools they need to plan, execute, and complete projects successfully. From task assignment and progress tracking to resource allocation and collaboration, our solution helps teams stay organized, meet deadlines, and deliver high-quality results while maintaining clear visibility for stakeholders.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Task Management",
        description: "Create, assign, and track tasks with priorities, deadlines, and dependencies.",
      },
      {
        title: "Team Collaboration",
        description: "Built-in communication tools, file sharing, and real-time updates for seamless teamwork.",
      },
      {
        title: "Gantt Charts & Timelines",
        description: "Visual project planning with interactive Gantt charts and customizable timelines.",
      },
      {
        title: "Resource Allocation",
        description: "Optimize team workload and resource utilization with capacity planning tools.",
      },
      {
        title: "Time & Budget Tracking",
        description: "Monitor project hours, expenses, and budget performance in real-time.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$9",
        period: "per user/month",
        features: ["Up to 10 Projects", "Basic Task Management", "File Sharing", "Email Support", "Regular Updates"],
      },
      {
        plan: "Professional",
        price: "$19",
        period: "per user/month",
        features: ["Unlimited Projects", "Gantt Charts", "Time Tracking", "Resource Management", "Priority Support"],
      },
      {
        plan: "Enterprise",
        price: "$29",
        period: "per user/month",
        features: ["All Professional Features", "Budget Tracking", "Advanced Reporting", "API Access", "24/7 Support"],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This project management software has transformed how our teams collaborate. We've reduced meeting time by 30% and improved on-time project delivery by 25%.",
        author: "Daniel Roberts",
        position: "Project Director",
        company: "Roberts Consulting Group",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The visibility and transparency this tool provides have been game-changers for our organization. Stakeholders appreciate the real-time updates, and our teams are more accountable and productive.",
        author: "Amanda Lewis",
        position: "PMO Manager",
        company: "Lewis Technologies",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "real-estate-management": {
    title: "Real Estate Management System",
    description: "Comprehensive solution for real estate agencies, property managers, and developers.",
    longDescription:
      "Our Real Estate Management System is designed to streamline operations for real estate professionals, property managers, and developers. From property listings and client management to document handling and financial reporting, our solution helps real estate businesses improve efficiency, enhance client service, and maximize property value and returns.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Property Listing Management",
        description: "Comprehensive tools for creating, managing, and showcasing property listings.",
      },
      {
        title: "Client Database",
        description: "Centralized system for managing buyer and seller information, preferences, and interactions.",
      },
      {
        title: "Lead Management",
        description: "Track and nurture leads through the sales funnel with automated follow-ups.",
      },
      {
        title: "Document Management",
        description: "Secure storage and management of contracts, agreements, and legal documents.",
      },
      {
        title: "Financial Reporting",
        description: "Track commissions, expenses, and revenue with detailed financial reports.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$79",
        period: "per month",
        features: [
          "Up to 50 Listings",
          "Basic Client Database",
          "Document Storage",
          "Email Support",
          "Regular Updates",
        ],
      },
      {
        plan: "Professional",
        price: "$149",
        period: "per month",
        features: [
          "Up to 200 Listings",
          "Advanced Client Management",
          "Lead Tracking",
          "Financial Reports",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$299",
        period: "per month",
        features: [
          "Unlimited Listings",
          "All Professional Features",
          "Advanced Analytics",
          "API Access",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This real estate management system has streamlined our entire operation. From listing properties to closing deals, every process is more efficient, and our agents are more productive.",
        author: "Richard Anderson",
        position: "Broker/Owner",
        company: "Anderson Real Estate",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The lead management features have significantly improved our conversion rates. We can now track and nurture leads effectively, ensuring no opportunity falls through the cracks.",
        author: "Jessica Martinez",
        position: "Sales Manager",
        company: "Martinez Properties",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "restaurant-management": {
    title: "Restaurant Management System",
    description: "All-in-one solution for restaurants, cafes, and food service businesses.",
    longDescription:
      "Our Restaurant Management System is a comprehensive solution designed to streamline operations for restaurants, cafes, and food service businesses. From order management and table reservations to inventory control and customer loyalty programs, our system helps food service establishments enhance customer experience, optimize operations, and increase profitability.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Order Management",
        description: "Efficient processing of dine-in, takeout, and delivery orders with customizable menus.",
      },
      {
        title: "Table Reservation",
        description: "Digital reservation system with floor plan visualization and capacity management.",
      },
      {
        title: "Kitchen Display System",
        description: "Real-time order communication between front-of-house and kitchen staff.",
      },
      {
        title: "Inventory & Recipe Management",
        description: "Track ingredients, manage recipes, and control food costs with automated alerts.",
      },
      {
        title: "Customer Loyalty Program",
        description: "Create and manage loyalty programs, rewards, and personalized promotions.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$89",
        period: "per month",
        features: [
          "Up to 5 POS Terminals",
          "Basic Order Management",
          "Table Reservations",
          "Email Support",
          "Regular Updates",
        ],
      },
      {
        plan: "Professional",
        price: "$169",
        period: "per month",
        features: [
          "Up to 10 POS Terminals",
          "Kitchen Display System",
          "Inventory Management",
          "Basic Reporting",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$299",
        period: "per month",
        features: [
          "Unlimited POS Terminals",
          "All Professional Features",
          "Customer Loyalty Program",
          "Advanced Analytics",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "This restaurant management system has transformed our operations. Order accuracy has improved, table turnover is faster, and our staff can focus more on customer service.",
        author: "Chef Antonio Rossi",
        position: "Owner",
        company: "Rossi's Italian Restaurant",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The inventory and recipe management features have helped us reduce food waste by 30% and maintain consistent food quality. The ROI on this system was achieved within months.",
        author: "Maria Garcia",
        position: "Operations Manager",
        company: "Garcia's Cafe Chain",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug as keyof typeof productsData]

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Link href="/products">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <Link href="/products" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-6 py-2 rounded-md"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={screenshot || "/placeholder.svg"}
                  alt={`${product.title} Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.pricing.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden ${index === 1 ? "border-emerald-500 shadow-lg" : "border-gray-200"}`}
              >
                <div className={`p-6 ${index === 1 ? "bg-emerald-500 text-white" : "bg-gray-50"}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm mb-1">{plan.period}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${index === 1 ? "text-emerald-500" : "text-gray-500"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      className={`w-full ${index === 1 ? "bg-emerald-500 hover:bg-emerald-600" : "bg-gray-800 hover:bg-gray-900"} text-white`}
                    >
                      {index === 1 ? "Get Started" : "Choose Plan"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How long does implementation take?</h3>
                  <p className="text-gray-600">
                    Implementation typically takes 2-4 weeks depending on the complexity of your business requirements
                    and the amount of data to be migrated.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Do you provide training?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive training for all users. This includes both online and on-site training
                    options depending on your needs.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I migrate data from my existing system?</h3>
                  <p className="text-gray-600">
                    Yes, we offer data migration services to help you transfer your existing data to our system smoothly
                    and accurately.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">What are the system requirements?</h3>
                  <p className="text-gray-600">
                    Our software is cloud-based and can be accessed from any modern web browser. For optimal
                    performance, we recommend using the latest version of Chrome, Firefox, Safari, or Edge.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is the software available on mobile devices?</h3>
                  <p className="text-gray-600">
                    Yes, our software is fully responsive and can be accessed on mobile devices. We also offer dedicated
                    mobile apps for iOS and Android.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How secure is my data?</h3>
                  <p className="text-gray-600">
                    We take security very seriously. All data is encrypted both in transit and at rest. We use
                    industry-standard security protocols and regularly perform security audits.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="pricing" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 14-day free trial for all our plans. No credit card required.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                    billing cycle.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-600">Yes, we offer a 20% discount for annual billing on all our plans.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with our {product.title}. Contact us today to schedule a demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">Contact Sales</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
