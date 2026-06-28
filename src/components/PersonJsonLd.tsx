import { site } from "@/content/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.shortName,
    jobTitle: site.role,
    worksFor: {
      "@type": "Organization",
      name: site.org,
    },
    url: site.siteUrl,
    sameAs: [site.linkedin, site.github].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
