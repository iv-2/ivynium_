import { Content } from "~/data/Content";
import en from "~/data/translations/en";
import fr from "~/data/translations/fr";

interface LanguageObject {
  [key: string]: string;
}
/**
 * Object containing the language code and the associated emoji flag of all
 * supported languages
 */
export const supportedLanguages: LanguageObject = {
  en: "🇬🇧",
  fr: "🇫🇷",
};

/**
 * Get the appropriate language object based on the given language
 * @param lang language code
 * @returns a Content object in the matching language or English by default
 */
export function loadContent(lang: string): Content {
  switch (lang) {
    case "fr":
      return fr;
    case "en":
    default:
      return en;
  }
}

/**
 * Return the language code based on the URL parameters
 * @param params URL parameters
 * @returns the language code
 */
export function getLanguage(params: any): string {
  return params?.lang || "en";
}

/**
 * Generate the schema markup for the main route
 * @param content the content in the relevant language
 * @returns an array with the schema markup data
 */
export function getSchemaMarkup(content: Content) {
  return [{
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.ivynium.com/#organization",
      name: "Ivynium",
      email: "contact@ivynium.com",
      url: "https://www.ivynium.com",
      sameAs: `https://www.ivynium.com`,
      founder: {
        "@type": "Person",
        "@id": "https://www.ivynium.com/#about",
        url: "https://www.ivynium.com/#about",
        name: "Ivance Amovin",
        familyName: "Amovin",
        givenName: "Ivance",
        sameAs: ["https://www.ivynium.com/#about", ...content.seeMore.externalLinks.map((externalLink) => externalLink.link)],
        description: content.aboutUs.text,
        image: "https://www.ivynium.com/images/ivance.webp",
        jobTitle: "Software Engineer",
        worksFor: { "@id": "https://www.ivynium.com/#organization", },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Epita",
          url: "https://www.epita.fr"
        },
        birthPlace: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Paris",
            addressCountry: "France",
          },
        },
        nationality: {
          "@type": "Country",
          name: "France"
        }
      },
      member: {
        "@id": "https://www.ivynium.com/#about",
      },
      employee: {
        "@id": "https://www.ivynium.com/#about",
      },
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
        },
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "contact@ivynium.com",
          areaServed: {
            "@type": "Place",
            name: "Worldwide"
          },
          availableLanguage: [
            {
              "@type": "Language",
              "name": "English"
            },
            {
              "@type": "Language",
              "name": "French"
            }
          ]
        }],

      logo: {
        "@type": "ImageObject",
        name: "logo",
        representativeOfPage: true,
        contentUrl: "https://www.ivynium.com/logos/ivynium_black.webp",
        caption: "Ivynium logo",
        description: "Ivynium logo",
      },
      slogan: content.slogan,
      description: content.catchPhrase,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Services Catalog",
        url: "https://www.ivynium.com/#services",
        itemListElement: content.services.map((service) => {
          return {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.text
            }
          }
        })
      },
    },
  },]
} 