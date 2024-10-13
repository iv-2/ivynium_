import { useEffect, useRef, useState } from "react";
import { Service } from "~/data/Content";

/**
 * Prop interface for the ServiceCard component
 */
interface ServiceCardProps {
  service: Service;
  animationDelay: number;
}

/**
 * Build a component representing a card to present a service
 * @param param0 props
 * @returns  component
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ service, animationDelay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  // Fade in when appears in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className={`m-3 flex  flex-1 flex-col justify-start rounded-lg border border-white bg-bgDark-dark p-6 text-center shadow motion-safe:hover:border-primary-light motion-safe:active:border-primary-light lg:w-[30%] motion-safe:opacity-0 ${isVisible ? "motion-safe:animate-fadeUp" : "motion-safe:opacity-0"}`} ref={divRef} style={{ animationDelay: `${animationDelay}ms` }} tabIndex={0}>
      <h3 className="font-heading text-2xl font-bold">{service.title}</h3>
      <p className="mt-2 h-full font-normal">{service.text}</p>
      <div className="mt-6 flex w-full flex-row justify-evenly">
        {service.techs.map((tech) => (
          <div
            className="group relative flex w-11 flex-col items-center"
            key={tech.logoUrl}
            tabIndex={0}
          >
            <img
              className="m-2 h-11 max-w-full overflow-clip rounded-[50px] object-contain text-center align-middle grayscale-[10%]"
              src={tech.logoUrl}
              alt={tech.tooltipText}
            />
            <span className="absolute -bottom-4 text-nowrap p-1 text-center text-sm opacity-0 motion-safe:transition-opacity duration-[300ms] group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100">
              {tech.tooltipText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
