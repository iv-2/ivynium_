import { Fragment, useEffect, useRef, useState } from "react";
import { Mission as MissionData } from "~/data/Content";

/**
 * Prop interface for the Mission component
 */
interface MissionProps {
    mission: MissionData;
}

/**
 * Build a component representing a mission that has been executed
 * @param param0 props
 * @returns  Mission component
 */
export const Mission: React.FC<MissionProps> = ({ mission
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);

    // Fade in/out when enters/exits viewport
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, {
            threshold: 0.1,
        });

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    const title = <h4 className="font-heading uppercase text-2xl tracking-widest text-start font-medium group-hover/link:font-semibold group-active/link:font-semibold" tabIndex={mission.link ? -1 : 0}>{mission.title}</h4>

    return (
        <div className={`rounded-sm relative w-full group/parent justify-start px-5 py-6 ${isVisible ? "motion-safe:animate-[fadeInRight_800ms_ease-out_forwards]" : "motion-safe:animate-[fadeOutLeft_800ms_ease-out_forwards]"}`} ref={divRef}>
            <div className="w-full flex flex-col">
                {mission.link ? <a
                    href={mission.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-dashed w-fit underline decoration-1 underline-offset-4 group/link motion-safe:hover:decoration-[0.5px] motion-safe:active:decoration-[0.5px]"
                >{title}</a> : title}
                <p className="mt-3 font-normal text-left sm:text-justify whitespace-pre-line">
                    {mission.text}</p>
                <div className="-mb-6 mt-6 h-[1px] bg-white"></div>
                <div className="absolute inset-0 -mx-6 motion-safe:group-hover/parent:bg-bgDark-dark motion-safe:group-active/parent:bg-bgDark-dark -z-10"></div>
            </div>
        </div>
    );
}