/**
 * Data relevant to a service
 */
export type Service = {
  title: string;
  text: string;
  techs: { logoUrl: string; tooltipText: string }[];
};

/**
 * Data relevant to someone's testimony
 */
export type Testimony = {
  photoUrl: string;
  text: string;
  name: string;
  position: string;
};

/**
 * Data relevant to the description of a mission accomplished
 */
export type Mission = {
  title: string;
  link: string | undefined;
  text: string;
};

/**
 * Data relevant to an external link
 */
type ExternalLink = {
  link: string;
  logoUrl: string;
  logoAlt: string;
};

/**
 * Type gathering and structuring all the site's content that needs language variations
 */
export type Content = {
  slogan: string;
  catchPhrase: string;
  CTA: {
    button: string;
    form: {
      contact: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      legal: { text: string; link: string };
      submit: string;
      confirm: string;
      cancel: string;
      success: string;
      fail: string;
      required: string;
      quit: string;
    };
  };
  services: Service[];
  trustPhrase: string;
  testimonies: Testimony[];
  successPhrase: string;
  missions: Mission[];
  aboutUs: { title: string; subtitle: string; text: string };
  seeMore: { title: string; externalLinks: ExternalLink[] };
  legal: { title: string; text: string };
};
