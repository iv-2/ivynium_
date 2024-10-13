import { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { Content } from "~/data/Content";

/**
 * Prop interface for the Legal component
 */
interface LegalProps {
    content: Content;
    showLegal: boolean;
    setShowLegal: Dispatch<SetStateAction<boolean>>;
}

/**
 * Build a component displaying the legal mentions modal
 * @param param0 props
 * @returns  Legal component
 */
export const Legal: React.FC<LegalProps> = ({ content, showLegal, setShowLegal
}) => {
    useEffect(() => {
        if (showLegal) {
            document.body.classList.add("noScroll");
        } else {
            setTimeout(() => {
                document.body.classList.remove("noScroll");
            }, 500);
        }
    }, [showLegal]);

    return (
        <div
            className={`${showLegal ? "visible" : "invisible"} ${showLegal ? "opacity-100" : "opacity-0"} fixed inset-0 z-[60] flex items-center justify-center overflow-auto bg-black motion-safe:transition-opacity motion-safe:duration-[600ms]`}
            aria-hidden={!showLegal}
        >
            <div className="h-full w-full overflow-auto rounded-t-lg bg-bgDark p-6 " aria-modal="true" role="dialog">
                <div>
                    <button className="relative float-start inline-block" onClick={() => setShowLegal(false)} aria-haspopup="false" aria-label="Quit">
                        <span
                            className="relative float-start inline-block h-[30px] w-[30px] overflow-hidden before:absolute before:left-[0] before:top-2/4 before:-mt-[4px] before:h-[5px] before:w-full before:rotate-45 before:rounded-[100%] before:bg-slate-300 before:content-[''] after:absolute after:left-[0] after:top-2/4 after:-mt-[4px] after:h-[5px] after:w-full after:-rotate-45 after:rounded-[100%] after:bg-slate-300 after:content-[''] hover:cursor-pointer hover:before:bg-primary active: active:before:bg-primary hover:after:bg-primary active:after:bg-primary"
                        ></span>
                    </button>
                    <h2 className="block w-full text-xl font-bold">
                        {content.legal.title}
                    </h2>
                </div>
                <div className="mt-4">
                    <p className="mt-3 font-normal text-left whitespace-pre-line">
                        {content.legal.text}</p>
                </div>
            </div>
        </div>
    );
}