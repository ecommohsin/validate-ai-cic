export const whatWeDo = [
  {
    title: "Convene independently",
    text: "We provide a neutral platform for organisations with different perspectives to collaborate around a common societal purpose.",
  },
  {
    title: "Advance AI assurance",
    text: "We help build a trusted, practical and scalable assurance ecosystem that supports innovation while protecting organisations, individuals and society.",
  },
  {
    title: "Inform responsible adoption",
    text: "We connect Responsible AI, AI risk, professionalisation and real-world delivery so trustworthy adoption is possible in practice.",
  },
];

export const featureRoutes = [
  {
    href: "/ai-assurance",
    title: "AI Assurance",
    text: "Practical lifecycle assurance connecting technical quality, ethics, legal requirements, governance, deployment and monitoring.",
    image: "/placeholders/discussion.jpg",
  },
  {
    href: "/ai-risk-perspectives",
    title: "AI Risk Perspectives",
    text: "A measured 2026 view of AI risk, using the Beyond the Mirror lens and four connected categories of risk.",
    image: "/placeholders/library.jpg",
  },
  {
    href: "/our-work-impact",
    title: "Our Work & Impact",
    text: "Cross-sector convening, professionalisation and international collaboration across the UK, Europe and Asia.",
    image: "/placeholders/conference.jpg",
  },
];

export const forumWorkstreams = [
  {
    title: "Professionalisation and Certification",
    text: "Developing competencies, professional pathways, standards and accreditation for AI Assurance.",
    image: "/placeholders/documents.jpg",
  },
  {
    title: "AI Assurance Service Design",
    text: "Exploring how effective, scalable and accessible AI Assurance services can operate in practice.",
    image: "/placeholders/workshop.jpg",
  },
  {
    title: "Governance and Accountability",
    text: "Strengthening roles, responsibilities, transparency and accountability across the AI lifecycle.",
    image: "/placeholders/civic.jpg",
  },
  {
    title: "Case Studies and Risk Management",
    text: "Sharing good practice, lessons learned and evidence from successful and unsuccessful AI implementation.",
    image: "/placeholders/library.jpg",
  },
];

export const lifecycleConnections = [
  "Technical quality",
  "Ethics",
  "Legal requirements",
  "Governance",
  "Deployment",
  "Monitoring",
];

export const riskCategories = [
  {
    title: "Technical / performance",
    text: "Whether AI systems are reliable, secure and fit for their intended use.",
  },
  {
    title: "Human / organisational",
    text: "How people, incentives and institutions shape design, deployment and oversight.",
  },
  {
    title: "Societal / distributional",
    text: "Who benefits, who is exposed to harm, and how existing inequalities may be amplified.",
  },
  {
    title: "Frontier / systemic",
    text: "Effects that emerge as systems become more capable, more widely used and more tightly coupled with other systems.",
  },
];

export const internationalWork = [
  {
    place: "Manila",
    organisation: "Asian Development Bank",
    date: "February 2025",
    nature: "International and development engagement on responsible AI and assurance.",
    image: "/placeholders/manila.jpg",
  },
  {
    place: "Vienna",
    organisation: "Vienna stakeholders",
    date: "April 2024",
    nature: "Cross-border governance, assurance and human-rights perspectives, including work on AI and tax.",
    image: "/placeholders/vienna.jpg",
  },
  {
    place: "Strasbourg",
    organisation: "Council of Europe / HUDERIA",
    date: "July 2025 – February 2026",
    nature: "Activity on AI and human rights, including HUDERIA risk and impact assessment.",
    image: "/placeholders/europe.jpg",
  },
  {
    place: "Europe and Asia",
    organisation: "AI2CG and wider networks",
    date: "2025–2026",
    nature: "International collaboration on responsible AI, assurance, governance and professional practice.",
    image: "/placeholders/asia.jpg",
  },
];

export const insightThemes = [
  {
    title: "AI Risk & Humanity",
    text: "How AI can mirror and amplify human choices, power and inequality — and what whole-system assurance requires.",
    image: "/placeholders/library.jpg",
  },
  {
    title: "AI Assurance",
    text: "Practical approaches to lifecycle assurance, independent scrutiny and a trusted assurance ecosystem.",
    image: "/placeholders/discussion.jpg",
  },
  {
    title: "Responsible Adoption",
    text: "Trustworthy development, deployment and governance that supports innovation with societal protection.",
    image: "/placeholders/university.jpg",
  },
  {
    title: "Human Rights & Governance",
    text: "Roles, responsibilities, transparency and accountability, including human-rights and public-interest perspectives.",
    image: "/placeholders/civic.jpg",
  },
  {
    title: "Professionalisation",
    text: "Competencies, ethical standards, independence and accountability for a recognised AI assurance profession.",
    image: "/placeholders/documents.jpg",
  },
];

export const forumParticipants = {
  academic: ["Imperial College London", "University of Cambridge"],
  government: [
    "DSIT",
    "UK Statistics Authority",
    "Office for Statistics Regulation",
  ],
  professional: [
    "BCS, The Chartered Institute for IT",
    "ICAEW",
    "The Operational Research Society",
    "Alliance for Data Science Professionals",
    "techUK",
    "Validate AI CIC",
  ],
  industry: [
    "Deloitte",
    "PwC",
    "KPMG",
    "EY",
    "Accenture",
    "HSBC",
    "Beazley",
    "Unilever",
    "Holistic AI",
    "Trilateral Research",
  ],
};

export type Activity = {
  date: string;
  title: string;
  location: string;
  theme: string;
  summary: string;
  whyItMatters: string;
};

export const activities: Activity[] = [
  {
    date: "April 2026",
    title: "AI Assurance Service Design Forum",
    location: "Imperial College London",
    theme: "AI Assurance",
    summary:
      "On 30 April 2026, Validate AI CIC, Imperial College London, the Office for Statistics Regulation (OSR) and ICAEW brought together more than 30 leaders and practitioners to explore a trusted, practical and scalable AI assurance ecosystem.",
    whyItMatters:
      "It marked a shift from dialogue to a continuing, practitioner-led Forum for assurance, professionalisation and real-world delivery.",
  },
  {
    date: "July 2026–2027",
    title: "UK AI Assurance Consortium and AI Safety Profession",
    location: "BCS",
    theme: "Professionalisation",
    summary:
      "Activity with BCS on the UK AI Assurance Consortium and AI Safety Profession. Validate AI is supporting the BCS-led AI Assurance Stakeholder Consortium, particularly work to help establish AI assurance as a recognised profession.",
    whyItMatters:
      "Long-term credibility for AI assurance depends on a trusted professional community, not only on frameworks and regulation.",
  },
  {
    date: "July 2025 – February 2026",
    title: "AI and Human Rights / HUDERIA",
    location: "Strasbourg / Council of Europe",
    theme: "Human Rights & Governance",
    summary:
      "Activity in Strasbourg on AI and human rights, including HUDERIA and the Council of Europe.",
    whyItMatters:
      "It connects UK assurance work with international human-rights and governance practice.",
  },
  {
    date: "July 2025",
    title: "Prioritising AI Programmes for Nations",
    location: "Marlborough House",
    theme: "International Collaboration",
    summary:
      "A gathering at Marlborough House on prioritising AI programmes for nations.",
    whyItMatters:
      "It reflects Validate AI’s contribution to national and international conversations about responsible AI programmes.",
  },
  {
    date: "May 2025",
    title: "ATAF Presentation",
    location: "ATAF",
    theme: "International Collaboration",
    summary:
      "A presentation to ATAF, the African Tax Administration Forum.",
    whyItMatters:
      "It extends responsible AI and assurance discussion into international fiscal and public-sector communities.",
  },
  {
    date: "March 2025",
    title: "Telecom and satellite",
    location: "Gibraltar",
    theme: "International Collaboration",
    summary:
      "Engagement in Gibraltar on telecom and satellite.",
    whyItMatters:
      "It shows the relevance of responsible AI and assurance beyond a single sector or geography.",
  },
  {
    date: "February 2025",
    title: "Manila – ADB",
    location: "Manila / Asian Development Bank",
    theme: "International Collaboration",
    summary:
      "Engagement in Manila with the Asian Development Bank.",
    whyItMatters:
      "It places Validate AI’s work in an international development and responsible AI context.",
  },
  {
    date: "December 2024 & February 2025",
    title: "DSIT Roundtables",
    location: "DSIT",
    theme: "Policy & Public Engagement",
    summary:
      "Roundtables with the Department for Science, Innovation and Technology.",
    whyItMatters:
      "They help keep Validate AI’s convening aligned with the wider UK AI assurance agenda.",
  },
  {
    date: "October 2024",
    title: "Validate AI Roadshow",
    location: "ICAEW",
    theme: "Responsible Adoption",
    summary:
      "A Validate AI roadshow held with ICAEW.",
    whyItMatters:
      "It strengthened cross-profession dialogue on responsible AI and assurance.",
  },
  {
    date: "July 2024",
    title: "Validate AI Roadshow: “The Subpopulation Problem”",
    location: "Cross-Government",
    theme: "AI Risk & Humanity",
    summary:
      "A Validate AI roadshow on the subpopulation problem, held in a cross-government setting.",
    whyItMatters:
      "It addresses distributional and fairness questions that sit at the centre of responsible AI.",
  },
  {
    date: "July 2024",
    title: "Validate AI Roadshow",
    location: "BCS",
    theme: "Professionalisation",
    summary:
      "A Validate AI roadshow held with BCS.",
    whyItMatters:
      "It formed part of continuing collaboration with the professional body later leading Consortium work on AI assurance.",
  },
  {
    date: "April 2024",
    title: "Validate AI Roadshow: Education",
    location: "Loughborough University",
    theme: "Responsible Adoption",
    summary:
      "A Validate AI roadshow on AI and education, held at Loughborough University.",
    whyItMatters:
      "Education is a setting where trustworthy adoption, governance and societal protection matter in practice.",
  },
  {
    date: "April 2024",
    title: "Validate AI Roadshow: AI and Tax",
    location: "Vienna University",
    theme: "International Collaboration",
    summary:
      "A Validate AI roadshow on AI and tax, listed as Vienna University.",
    whyItMatters:
      "It connects assurance and governance to cross-border fiscal and public-sector use of AI.",
  },
  {
    date: "March 2024",
    title: "Validate AI Roadshow: OR and AI",
    location: "Southampton University",
    theme: "Responsible Adoption",
    summary:
      "A Validate AI roadshow on OR and AI, held at Southampton University.",
    whyItMatters:
      "It brought analytical and operational research perspectives into responsible AI discussion.",
  },
  {
    date: "September 2023",
    title: "Validate AI Roadshow: AI Procurement",
    location: "Edinburgh University",
    theme: "Responsible Adoption",
    summary:
      "A Validate AI roadshow on AI procurement, held at Edinburgh University.",
    whyItMatters:
      "Procurement is a practical point at which responsible AI requirements can be made real.",
  },
];

export const workThemes = [
  "AI Assurance",
  "Professionalisation",
  "International Collaboration",
  "Human Rights & Governance",
  "Responsible Adoption",
  "Policy & Public Engagement",
  "AI Risk & Humanity",
];
