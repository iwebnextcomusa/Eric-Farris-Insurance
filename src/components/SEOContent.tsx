import { useEffect } from "react";
import { AGENCY_DETAILS } from "../data";

export default function SEOContent() {
  useEffect(() => {
    // Generate JSON-LD Schema representation for Local Insurance Agency
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": AGENCY_DETAILS.name,
      "description": "Family-oriented local homeowners and term/whole life insurance agency serving families and home properties in Franklin, Tennessee and surrounding Williamson County.",
      "url": `https://${AGENCY_DETAILS.domain}`,
      "telephone": `+1-${AGENCY_DETAILS.phone}`,
      "email": AGENCY_DETAILS.email,
      "priceRange": "$$",
      "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": AGENCY_DETAILS.city,
        "addressRegion": "TN",
        "addressCountry": "US",
        "postalCode": "37064"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "35.9251",
        "longitude": "-86.8689"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:30",
        "closes": "17:00"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Franklin"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Williamson County"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Brentwood"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Spring Hill"
        }
      ],
      "knowsAbout": [
        "Homeowners Insurance",
        "Life Insurance",
        "Tornado damage coverage",
        "Family inheritance planning",
        "Mortgage protection insurance"
      ]
    };

    // Inject the script into window/DOM
    const scriptId = "local-insurance-schema";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Clean up if component was unmounted
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return null; // Side-effect script injection only
}
