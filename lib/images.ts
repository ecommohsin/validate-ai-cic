export const photos = {
  workshop: "/placeholders/workshop.jpg",
  discussion: "/placeholders/discussion.jpg",
  conference: "/placeholders/conference.jpg",
  university: "/placeholders/university.jpg",
  london: "/placeholders/london.jpg",
  manila: "/placeholders/manila.jpg",
  vienna: "/placeholders/vienna.jpg",
  europe: "/placeholders/europe.jpg",
  gibraltar: "/placeholders/gibraltar.jpg",
  civic: "/placeholders/civic.jpg",
  library: "/placeholders/library.jpg",
  documents: "/placeholders/documents.jpg",
  collaboration: "/placeholders/collaboration.jpg",
  roundtable: "/placeholders/roundtable.jpg",
  asia: "/placeholders/asia.jpg",
} as const;

export type PhotoSrc = (typeof photos)[keyof typeof photos];

const themePhotos: Record<string, PhotoSrc> = {
  "AI Assurance": photos.roundtable,
  Professionalisation: photos.documents,
  "International Collaboration": photos.asia,
  "Human Rights & Governance": photos.civic,
  "Responsible Adoption": photos.university,
  "Policy & Public Engagement": photos.london,
  "AI Risk & Humanity": photos.library,
};

export function imageForActivity(location: string, theme: string): PhotoSrc {
  const loc = location.toLowerCase();
  if (loc.includes("imperial")) return photos.workshop;
  if (loc.includes("manila")) return photos.manila;
  if (loc.includes("vienna")) return photos.vienna;
  if (loc.includes("strasbourg")) return photos.europe;
  if (loc.includes("gibraltar")) return photos.gibraltar;
  if (loc.includes("marlborough") || loc.includes("dsit") || loc.includes("icaew")) {
    return photos.london;
  }
  if (loc.includes("ataf")) return photos.conference;
  if (
    loc.includes("loughborough") ||
    loc.includes("southampton") ||
    loc.includes("edinburgh")
  ) {
    return photos.university;
  }
  return themePhotos[theme] ?? photos.discussion;
}
