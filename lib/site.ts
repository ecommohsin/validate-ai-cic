export const site = {
  name: "Validate AI CIC",
  shortName: "Validate AI",
  email: "contact@validateai.org",
  description:
    "An independent Community Interest Company convening organisations around responsible AI, assurance, risk and trustworthy adoption.",
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/ai-assurance", label: "AI Assurance" },
  { href: "/ai-risk-perspectives", label: "AI Risk" },
  { href: "/our-work-impact", label: "Our Work" },
  { href: "/insights", label: "Insights" },
] as const;

export const footerNav = [
  ...navItems,
  { href: "/get-involved", label: "Get Involved" },
] as const;
