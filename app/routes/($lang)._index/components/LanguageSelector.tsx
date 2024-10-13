import { useNavigate } from "@remix-run/react";
import { supportedLanguages } from "~/utils/Utils";

/**
 * Prop interface for the language selector component
 */
interface LanguageSelectorProps {
  dropdownIsOpen: boolean;
  setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  languageCode: string;
}

/**
 * Build a component representing the current language and allowing users
 * to change language and be redirected to the appropriate page
 * @param param0 props
 * @returns language selector component
 */
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  dropdownIsOpen,
  setDropdownIsOpen,
  languageCode,
}) => {
  const language = supportedLanguages[languageCode];
  const navigate = useNavigate();
  return (
    <div
      className={`contouredOff absolute right-2 top-2 mt-2 ${dropdownIsOpen ? "contouredOn" : ""} select-none`}
      aria-label="Language selector"
      aria-expanded={dropdownIsOpen}
    >
      {/* Currently selected language */}
      <button
        className={`inline-flex h-7 items-center bg-bgDark hover:bg-bgDark-light active:bg-bgDark-light ${dropdownIsOpen ? "rounded-none" : "rounded-full"} p-1 text-center text-xl font-medium shadow-[0px_0px_10px_5px_rgba(0,0,0,1)]`}
        type="button"
        aria-label="Open Dropdown"
        aria-controls="language-options"
        aria-haspopup="listbox"
        aria-selected="true"
        onClick={(e) => {
          e.stopPropagation();
          setDropdownIsOpen(!dropdownIsOpen);
        }}
      >
        <span>{language}</span>
        <svg
          className={`ml-3 mr-1 h-4 w-4 motion-safe:transition motion-safe:duration-300 motion-safe:ease-in-out ${dropdownIsOpen ? "scale-y-[-1]" : "scale-y-100"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`stroke-current ${dropdownIsOpen ? "stroke-[4px]" : ""}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* Dropdown items */}
      <div
        className={`${dropdownIsOpen ? "visible opacity-100" : "invisible opacity-0"} motion-safe:transition-all motion-safe:duration-300`}
        role="listbox"
        id="language-options"
      >
        {Object.entries(supportedLanguages)
          .filter(([key]) => key !== languageCode)
          .map(([key, value]) => (
            <button
              key={key}
              className="inline-flex h-7 w-full items-center bg-bgDark p-1 text-center text-xl font-medium hover:bg-bgDark-light active:bg-bgDark-light"
              onClick={() => {
                navigate(`/${key === "en" ? "" : key}`);
              }}
              type="button"
              role="option"
              aria-selected="false"
            >
              <span>{value}</span>
            </button>
          ))}
      </div>
    </div>
  );
};
