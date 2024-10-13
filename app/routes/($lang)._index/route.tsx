import { ActionFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { useActionData, useLocation, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getLanguage, getSchemaMarkup, loadContent } from "~/utils/Utils";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { LanguageSelector } from "./components/LanguageSelector";
import { Legal } from "./components/Legal";
import { Mission } from "./components/Mission";
import { ServiceCard } from "./components/ServiceCard";
import { Testimonies } from "./components/Testimonies/Testimonies";
import { TrustBanner } from "./components/TrustBanner";

export async function action({ request }: ActionFunctionArgs) {

  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const subject = formData.get("subject")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !subject || !message) {
    return json({ success: false, email });
  }

  const formParams = new URLSearchParams();
  formParams.append("name", name);
  formParams.append("email", email);
  formParams.append("subject", subject);
  formParams.append("message", message);
  formParams.append("form-name", "contact");

  const response = await fetch(`https://www.ivynium.com/form.html`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formParams.toString(),
  });

  return json({ success: response.ok, email });
}

export const meta: MetaFunction = ({ params, matches }) => {
  const parentMeta = matches.flatMap(
    (match) => match.meta ?? []
  );

  return [...parentMeta, ...getSchemaMarkup(loadContent(getLanguage(params)))];
}

export default function Home() {
  const params = useParams();
  const languageCode = getLanguage(params);
  const content = loadContent(languageCode);
  const hash = useLocation().hash.substring(1);

  const actionData = useActionData<any>();

  const [logoScale, setLogoScale] = useState(1);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const [showLegal, setShowLegal] = useState(false);

  useEffect(() => {
    // Store scroll bar width to compensate it when deleted
    document.body.style.setProperty(
      "--scrollbar-compensation",
      `${window.innerWidth - document.body.offsetWidth}px`,
    );

    // Jump to specific section
    const targetElement = document.getElementById(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Resize logo on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scaleValue = Math.max(0.6, 1 - scrollTop / maxScroll);
      setLogoScale(scaleValue);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex w-full flex-col justify-center motion-safe:opacity-0 motion-safe:animate-fadeIn"
      onClick={() => {
        setDropdownIsOpen(false);
      }}
    >
      <h1 className="sr-only">Ivynium</h1>

      <div className="motion-safe:opacity-0 p-6 motion-safe:animate-fadeIn-long" style={{ animationDelay: "4s" }}>
        <LanguageSelector
          dropdownIsOpen={dropdownIsOpen}
          setDropdownIsOpen={setDropdownIsOpen}
          languageCode={languageCode}
        />
      </div>

      <div className="h-[30vh]"></div>
      <header
        className="sticky top-0 z-40 flex w-full bg-bgDark origin-top justify-center motion-safe:opacity-0 motion-safe:animate-fadeIn-long overflow-hidden"
        style={{ animationDelay: "0.2s", transform: `scaleY(${logoScale})` }}
      >
        <img
          src="/logos/ivynium.webp"
          alt="Ivynium logo"
          className="mb-1 p-6 h-auto w-[600px]"
          style={{ transform: `scaleX(${logoScale})` }}
        />
      </header>

      <main className="flex w-full flex-col p-6 justify-center">
        <h2 className="font-heading tracking-wide -mt-4 text-3xl md:text-4xl font-bold motion-safe:opacity-0 motion-safe:animate-fadeIn-long" style={{ animationDelay: "1.5s" }}>{content.slogan}</h2>
        <p className="mt-7 text-lg md:text-xl font-light motion-safe:opacity-0 motion-safe:animate-fadeIn-long" style={{ animationDelay: "2.5s" }}>{content.catchPhrase}</p>

        <ContactForm content={content} success={actionData?.success} setShowLegal={setShowLegal} />

        <div className="mx-auto mt-14 flex w-full flex-col items-stretch justify-evenly lg:flex-row" id="services">
          {content.services.map((service, index) => (
            <ServiceCard service={service} animationDelay={200 * index} key={service.title} />
          ))}
        </div>

        <TrustBanner trustPhrase={content.trustPhrase} />

        <Testimonies testimonies={content.testimonies} />

        <div className="mt-20">
          <h3 className="font-heading text-start text-3xl font-bold" id="missions">{content.successPhrase}</h3>
          <div className="w-full flex flex-col mt-3">
            {content.missions.map((mission) => (
              <Mission mission={mission} key={mission.title} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-start text-3xl font-bold" id="about" tabIndex={0}>{content.aboutUs.title} <span className="text-2xl font-semibold">{content.aboutUs.subtitle}</span></h3>
          <div className="flex justify-center items-center flex-col lg:flex-row p-5 m-auto max-w-3xl gap-4">
            <p className="font-normal text-center lg:text-justify text-lg">
              {content.aboutUs.text}
            </p>
            <img
              className={`m-4 h-96 w-96 object-cover rounded-2xl shrink-0`}
              src="/images/ivance.webp"
              alt="Ivance Amovin"
            />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-heading text-start text-3xl font-bold" id="more">{content.seeMore.title} </h3>
          <div className="w-full justify-start flex flex-row gap-5 mt-6">
            {content.seeMore.externalLinks.map((externalLink) => (
              <a
                href={externalLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg hover:border-primary-light active:border-primary-light p-1"
                key={externalLink.link}
              ><img
                  className={`h-11 w-11 object-cover rounded-lg shrink-0`}
                  src={externalLink.logoUrl}
                  alt={externalLink.logoAlt}
                /></a>
            ))}
          </div>
        </div>
      </main>

      <Legal content={content} setShowLegal={setShowLegal} showLegal={showLegal} />

      <footer className="flex w-full flex-col p-6 text-center text-sm">
        <div className="-mx-6 h-[1px] bg-white"></div>
        <div className="-mx-6 mt-2 flex flex-row justify-between px-5">
          <div className="flex flex-col items-start">
            <p>&copy; {new Date().getFullYear()} Ivynium</p>
            <button className="underline decoration-[0.5px]" onClick={() => { setShowLegal(true) }} aria-haspopup="dialog">{content.legal.title}</button>
          </div>
          <a
            href="mailto:contact@ivynium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-fit"
          >
            <p className="underline decoration-[0.5px]">contact@ivynium.com</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
