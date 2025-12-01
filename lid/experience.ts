export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "IT Support Specialist",
    company: "RAK Security",
    location: "Ras Al Khaimah",
    period: "Jun 2022 – Present",
    responsibilities: [
      "Monitor and maintain network and server infrastructure",
      "Configure Windows servers and Active Directory",
      "Provide desktop and laptop support with necessary software configurations",
      "Implement security protocols to prevent potential threats",
      "Create user accounts and manage access control",
      "Respond to phone and email requests for technical support",
    ],
  },
  {
    id: 2,
    role: "Administrative / Registration Assistant",
    company: "RAK Security",
    location: "Ras Al Khaimah",
    period: "Mar 2021 – Present",
    responsibilities: [
      "Communicating with applicants via phone and email",
      "Managing payroll and invoicing using SAP software",
      "Processing applications and reviewing supporting documents",
      "Monitoring timelines and turnaround times for applications",
      "Maintaining organized office files",
      "Performing additional administrative and clerical duties",
    ],
  },
  {
    id: 3,
    role: "Customer Experience Associate",
    company: "Namshi",
    location: "Dubai",
    period: "Mar 2018 – Sep 2020",
    responsibilities: [
      "Managed 150+ emails and messages across multiple channels",
      "Responded promptly to customer inquiries",
      "Followed up with customers to resolve shipment, product, and billing issues",
      "Identified and escalated priority issues for quick resolution",
    ],
  },
];
