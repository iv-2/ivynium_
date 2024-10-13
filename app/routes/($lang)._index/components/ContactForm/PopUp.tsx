import { useEffect } from "react";
import { Content } from "~/data/Content";
import { FormState } from "./ContactForm";

/**
 * Prop interface for the popup component
 */
interface PopUpProps {
  content: Content;
  email: string;
  success: boolean | undefined;
  state: FormState;
  setState: React.Dispatch<React.SetStateAction<FormState>>;
  closeModal: () => void;
}

/**
 * Build a component to display a popup message to interact with user regarding
 * form submission
 * @param param0 props
 * @returns A popup component
 */
export const PopUp: React.FC<PopUpProps> = ({
  content,
  email,
  success,
  state,
  setState,
  closeModal,
}) => {
  const correctForm = () => {
    switch (state) {
      case FormState.ERROR:
        setState(FormState.FILLING_ERROR);
        break;
      default: // TO_CONFIRM or QUIT state
        setState(FormState.FILLING);
        break;
    }
  };
  const quitForm = () => {
    closeModal();
    setState(FormState.FILLING);
  };

  const submit = () => {
    if (state === FormState.SENDING) {
      return;
    }
    setState(FormState.SENDING);

    setTimeout(() => {
      // If success was not set within 10s, force fail message by setting success manually
      if (success === undefined) {
        success = false;
      }
    }, 10000);
  };

  useEffect(() => {
    if (success && state == FormState.SENDING) {
      // Auto quit form on success
      setTimeout(() => {
        quitForm();
      }, 3000);
    }
  }, [success, state]);

  var message, buttons;
  if (success !== undefined && state === FormState.SENDING) {
    if (success) {
      message = (
        <>
          {`${content.CTA.form.success} `}
          <span className="font-bold italic">{email}</span>
        </>
      );
      buttons = <></>;
    } else {
      message = (
        <>
          {`${content.CTA.form.fail} `}
          <a
            href="mailto:contact@ivynium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="underline">contact@ivynium.com</p>
          </a>
        </>
      );
      buttons = (
        <button
          className="hover:bg-primary-darker active:bg-primary-darker m-2 w-full rounded-lg bg-primary-dark px-5 py-2.5 text-center text-sm font-medium sm:w-auto"
          onClick={quitForm}
          type="button"
        >
          OK
        </button>
      );
    }
  } else {
    switch (state) {
      case FormState.ERROR:
        message = <>{content.CTA.form.required}</>;
        buttons = (
          <button
            className="hover:bg-primary-darker active:bg-primary-darker w-full rounded-lg bg-primary-dark px-5 py-2.5 text-center text-sm font-medium sm:w-auto"
            onClick={correctForm}
            type="button"
          >
            OK
          </button>
        );
        break;
      case FormState.QUIT:
        message = <>{content.CTA.form.quit}</>;
        buttons = (
          <>
            <button
              className="m-2 w-full rounded-lg border border-slate-300 bg-transparent px-5 py-2.5 text-center text-sm font-medium hover:border-slate-100 active:border-slate-100 sm:w-auto"
              type="button"
              onClick={correctForm}
            >
              {content.CTA.form.cancel}
            </button>
            <button
              className="hover:bg-primary-darker active:bg-primary-darker m-2 w-full rounded-lg bg-primary-dark px-5 py-2.5 text-center text-sm font-medium sm:w-auto"
              onClick={quitForm}
              type="button"
            >
              OK
            </button>
          </>
        );
        break;
      default: // TO_CONFIRM and SENDING (without success set) states
        message = (
          <>
            {`${content.CTA.form.confirm} `}
            <span className="font-bold italic">{email}</span>?
          </>
        );
        buttons = (
          <>
            <button
              className="m-2 w-full rounded-lg border border-slate-300 bg-transparent px-5 py-2.5 text-center text-sm font-medium hover:border-slate-100 active:border-slate-100  sm:w-auto"
              type="button"
              onClick={correctForm}
            >
              {content.CTA.form.cancel}
            </button>
            <button
              className="hover:bg-primary-darker active:bg-primary-darker m-2 w-full rounded-lg bg-primary-dark px-5 py-2.5 text-center text-sm font-medium sm:w-auto"
              type="submit"
              onClick={submit}
            >
              OK
            </button>
          </>
        );
        break;
    }
  }

  const isVisible = state !== FormState.FILLING && state !== FormState.FILLING_ERROR;

  return (
    <div
      className={` ${isVisible
        ? "visible"
        : "invisible"
        } fixed inset-0 z-30 flex motion-safe:animate-[fadeIn_3000ms_ease_forwards]  items-center justify-center bg-black bg-opacity-50 motion-safe:opacity-0 transition-opacity duration-500`}
      aria-hidden={!isVisible}
      aria-modal="true"
      role="alertdialog"
      aria-describedby="popUpDescription"
    >
      <div className="w-full max-w-md rounded-t-lg bg-bgDark-dark p-6 shadow-lg">
        <div className="mb-5 block w-full text-sm font-medium" id="popUpDescription">{message}</div>
        {buttons}
      </div>
    </div>
  );
};
